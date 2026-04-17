// Aurora v2 CP-2 — Query Answer Service
// Composes structured answers from atom data (no LLM, client-side only)
import { Injectable } from '@angular/core';
import { GraphDataService } from './graph-data.service';
import { GraphNode, AtomDetail } from '../models/graph.models';
import {
  QueryAnswer, ScoredAtom, MatchReason, RelevanceTier,
  ChainSummary, CounterHypothesisEntry, RelatedAtomEntry,
  ThematicGroup,
} from '../models/query-answer.models';

const VERDICT_SCORE: Record<string, number> = {
  CORROBORATED: 15, NEEDS_MORE_EVIDENCE: 8, WEAKENED: 5, UNFALSIFIABLE: 3,
};

@Injectable({ providedIn: 'root' })
export class QueryAnswerService {

  constructor(private graphData: GraphDataService) {}

  composeAnswer(query: string, layerFilter?: number): QueryAnswer {
    const terms = this.parseTerms(query);
    if (terms.length === 0) {
      return this.emptyAnswer(query);
    }

    // 1. Score all atoms (deduplicated)
    const scored = this.scoreAllAtoms(terms, layerFilter);
    const seen = new Set<string>();
    const deduped = scored.filter(s => {
      if (seen.has(s.node.id)) return false;
      seen.add(s.node.id);
      return true;
    });

    // 2. Classify into tiers
    const direct = deduped.filter(s => s.tier === 'direct');
    const directIds = new Set(direct.map(s => s.node.id));

    // 3. Thematic grouping by claimType
    const thematic = this.groupByTheme(direct);

    // 4. 1-hop expansion
    const { corroborating, opposing } = this.expandFromDirect(directIds);

    // 5. Chain summaries for top 3 direct results
    const chains = this.extractChainSummaries(direct.slice(0, 3));

    // 6. Counter-hypotheses
    const counters = this.aggregateCounterHypotheses(direct);

    // 7. All Record Nos
    const allRecords = this.collectRecordNos(direct);

    return {
      query,
      totalMatches: scored.length,
      directResults: direct.slice(0, 15),
      thematicGroups: thematic,
      corroboratingResults: corroborating.slice(0, 5),
      opposingResults: opposing.slice(0, 5),
      chainSummaries: chains,
      counterHypotheses: counters,
      relatedAtoms: [...corroborating, ...opposing].slice(0, 10),
      allRecordNos: allRecords,
    };
  }

  private parseTerms(query: string): string[] {
    // 1. Remove punctuation
    let cleaned = query.toLowerCase().replace(/[?!.,;:'"()\[\]{}~`@#$%^&*+=<>\/\\]/g, '');
    // 2. Strip Korean particles
    const particles = /(?:은|는|이|가|을|를|의|에|에서|으로|로|도|만|까지|부터|와|과|라|란|이란)$/;
    // 3. Question stopwords (검색에 무의미한 질문 키워드)
    const stopwords = new Set([
      '누구', '누구인', '무엇', '뭐', '어디', '언제', '왜', '어떻게', '어떤',
      '인가', '인지', '인가요', '인지요', '입니까', '인데', '인가에',
      'who', 'what', 'where', 'when', 'why', 'how', 'which',
      '대한', '대해', '대하여', '관한', '관해', '설명', '알려',
      '있나', '있나요', '했나', '했나요', '하였나',
    ]);
    return cleaned.replace(/\s+/g, ' ').trim()
      .split(' ')
      .map(t => t.replace(particles, ''))
      .filter(t => t.length > 0 && !stopwords.has(t));
  }

  private scoreAllAtoms(terms: string[], layerFilter?: number): ScoredAtom[] {
    const nodes = this.graphData.getNodes(layerFilter);
    const results: ScoredAtom[] = [];

    for (const node of nodes) {
      const detail = this.graphData.getDetail(node.id);
      const { score, reasons } = this.scoreAtom(node, detail, terms);
      if (score > 0) {
        const tier: RelevanceTier = score >= 25 ? 'direct' : 'related';
        results.push({
          node, detail, score, tier, matchReasons: reasons,
          recordNos: detail?.allRecordNos ?? [],
        });
      }
    }

    results.sort((a, b) => b.score - a.score);
    return results;
  }

  private scoreAtom(
    node: GraphNode, detail: AtomDetail | undefined, terms: string[]
  ): { score: number; reasons: MatchReason[] } {
    let textScore = 0;
    const reasons: MatchReason[] = [];

    const titleLower = node.title.toLowerCase();
    const titleNoSpace = titleLower.replace(/\s/g, '');

    // Title match: ALL terms (40) or PARTIAL terms (proportional)
    const titleTermHits = terms.filter(t =>
      titleLower.includes(t) || titleNoSpace.includes(t.replace(/\s/g, ''))
    );
    if (titleTermHits.length === terms.length) {
      textScore += 40;
      reasons.push({ field: 'title', snippet: node.title.slice(0, 80) });
    } else if (titleTermHits.length > 0) {
      textScore += Math.round(20 * titleTermHits.length / terms.length);
      reasons.push({ field: 'title', snippet: node.title.slice(0, 80) });
    }

    if (detail) {
      const claimLower = detail.claim.toLowerCase();
      const claimNoSpace = claimLower.replace(/\s/g, '');

      // Claim body match: ALL terms (20) or PARTIAL (proportional)
      const claimTermHits = terms.filter(t =>
        claimLower.includes(t) || claimNoSpace.includes(t.replace(/\s/g, ''))
      );
      if (claimTermHits.length === terms.length) {
        textScore += 20;
        const idx = claimLower.indexOf(terms[0]);
        const start = Math.max(0, idx - 20);
        reasons.push({ field: 'claim', snippet: detail.claim.slice(start, start + 100) });
      } else if (claimTermHits.length > titleTermHits.length) {
        textScore += Math.round(10 * claimTermHits.length / terms.length);
        const idx = claimLower.indexOf(claimTermHits[0]);
        const start = Math.max(0, idx - 20);
        reasons.push({ field: 'claim', snippet: detail.claim.slice(start, start + 100) });
      }

      // Takeaway/evidence match (10 points) — include _en fields for cross-language search
      const auxCorpus = [
        ...detail.keyTakeaways.map(t => t.text),
        ...(detail.keyTakeaways_en ?? []).map(t => t.text),
        ...detail.supportingEvidence.map(e => e.raw),
      ].join(' ').toLowerCase();
      const auxNoSpace = auxCorpus.replace(/\s/g, '');
      const auxTermHits = terms.filter(t =>
        auxCorpus.includes(t) || auxNoSpace.includes(t.replace(/\s/g, ''))
      );
      if (auxTermHits.length > Math.max(titleTermHits.length, claimTermHits.length)) {
        textScore += Math.round(10 * auxTermHits.length / terms.length);
        reasons.push({ field: 'takeaway', snippet: '' });
      }

      // Counter-hypothesis match (5 points bonus) — include _en for cross-language search
      const counterCorpus = [
        detail.counterHypothesis,
        detail.counterHypothesis_en ?? '',
      ].join(' ').toLowerCase();
      if (counterCorpus.trim() && terms.some(t => counterCorpus.includes(t))) {
        textScore += 5;
        reasons.push({ field: 'counter', snippet: detail.counterHypothesis.slice(0, 80) });
      }
    }

    // No text match at all → skip this atom
    if (textScore === 0) {
      return { score: 0, reasons: [] };
    }

    // Add bonuses only when there's a text match
    let score = textScore;
    score += VERDICT_SCORE[node.verdict] ?? 0;
    score += Math.min(node.corroborationCount, 10);
    const edges = this.graphData.getEdgesForNode(node.id);
    score += Math.min(edges.length, 10) / 2;

    return { score, reasons };
  }

  private groupByTheme(atoms: ScoredAtom[]): ThematicGroup[] {
    const CT_LABELS: Record<string, string> = {
      evidence_concealment: '증거은폐',
      document_fabrication: '문서위변조',
      regulatory_manipulation: '훈령조작',
      terminology_manipulation: '용어조작',
      prosecution_misconduct: '검찰비위',
      witness_manipulation: '증인조작',
      conspiracy_structure: '공모구조',
      institutional_obstruction: '제도적방해',
      procedural_violation: '절차위반',
      human_rights_violation: '인권침해',
      testimony_evidence: '증언증거',
      cross_layer_analysis: '층위간분석',
      technical_proof: '기술적증거',
      attorney_misconduct: '변호인비위',
      temporal_manipulation: '시간적조작',
      methodology: '방법론',
    };

    const grouped = new Map<string, ScoredAtom[]>();
    for (const atom of atoms) {
      const ct = atom.node.claimType || 'unknown';
      if (!grouped.has(ct)) grouped.set(ct, []);
      grouped.get(ct)!.push(atom);
    }

    return [...grouped.entries()]
      .map(([ct, items]) => ({
        label: CT_LABELS[ct] || ct,
        atoms: items.sort((a, b) => b.score - a.score),
      }))
      .sort((a, b) => b.atoms.length - a.atoms.length);
  }

  private expandFromDirect(directIds: Set<string>): {
    corroborating: RelatedAtomEntry[];
    opposing: RelatedAtomEntry[];
  } {
    const corroborating: RelatedAtomEntry[] = [];
    const opposing: RelatedAtomEntry[] = [];
    const seen = new Set<string>(directIds);

    for (const sourceId of directIds) {
      const edges = this.graphData.getEdgesForNode(sourceId);
      for (const edge of edges) {
        const neighborId = edge.source === sourceId ? edge.target : edge.source;
        if (seen.has(neighborId)) continue;
        seen.add(neighborId);

        const neighborNode = this.graphData.getNodeById(neighborId);
        if (!neighborNode) continue;

        const entry: RelatedAtomEntry = {
          node: neighborNode,
          edgeType: edge.type,
          sourceAtomId: sourceId,
        };

        if (edge.type === 'CORROBORATES') {
          corroborating.push(entry);
        } else if (edge.type === 'OPPOSES') {
          opposing.push(entry);
        }
      }
    }

    return { corroborating, opposing };
  }

  private extractChainSummaries(topAtoms: ScoredAtom[]): ChainSummary[] {
    const summaries: ChainSummary[] = [];

    for (const atom of topAtoms) {
      const chain = this.graphData.getChain(atom.node.id);
      if (!chain || chain.nodes.length < 2) continue;

      summaries.push({
        rootAtomId: atom.node.id,
        steps: chain.nodes
          .filter(cn => cn.direction !== 'descendant' || cn.depth <= chain.maxDepth)
          .slice(0, 6) // max 6 steps for readability
          .map(cn => ({
            id: cn.node.id,
            title: cn.node.title,
            layer: cn.node.layer,
          })),
      });
    }

    return summaries;
  }

  private aggregateCounterHypotheses(atoms: ScoredAtom[]): CounterHypothesisEntry[] {
    return atoms
      .filter(a => a.detail?.counterHypothesis)
      .slice(0, 5)
      .map(a => ({
        atomId: a.node.id,
        atomTitle: a.node.title.slice(0, 60),
        hypothesis: a.detail!.counterHypothesis,
        verdict: a.node.verdict,
      }));
  }

  private collectRecordNos(atoms: ScoredAtom[]): string[] {
    const all = new Set<string>();
    for (const a of atoms) {
      for (const r of a.recordNos) {
        all.add(r);
      }
    }
    return [...all].sort((a, b) => parseInt(a) - parseInt(b));
  }

  private emptyAnswer(query: string): QueryAnswer {
    return {
      query, totalMatches: 0,
      directResults: [], thematicGroups: [],
      corroboratingResults: [], opposingResults: [],
      chainSummaries: [], counterHypotheses: [], relatedAtoms: [], allRecordNos: [],
    };
  }
}

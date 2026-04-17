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

  // BM25 parameters
  private readonly BM25_K1 = 1.5;
  private readonly BM25_B  = 0.75;

  // Field weights: title > claim > takeaway > counter/verdict
  private readonly FIELD_WEIGHT: Record<string, number> = {
    title: 4.0, titleEn: 3.5,
    claim: 2.5, claimEn: 2.0,
    takeaway: 1.5,
    counter: 1.0, counterEn: 1.0,
    verdict: 0.8, verdictEn: 0.8,
    falsification: 0.8,
  };

  /** Build per-field text for an atom (both KO and EN). */
  private buildFields(node: GraphNode, detail: AtomDetail | undefined): Record<string, string> {
    const f: Record<string, string> = {
      title: node.title.toLowerCase(),
      titleEn: (node.titleEn ?? '').toLowerCase(),
    };
    if (detail) {
      f['claim']         = detail.claim.toLowerCase();
      f['claimEn']       = (detail.claim_en ?? '').toLowerCase();
      f['takeaway']      = [
        ...detail.keyTakeaways.map(t => t.text),
        ...(detail.keyTakeaways_en ?? []).map(t => t.text),
        ...detail.supportingEvidence.map(e => e.raw),
      ].join(' ').toLowerCase();
      f['counter']       = detail.counterHypothesis.toLowerCase();
      f['counterEn']     = (detail.counterHypothesis_en ?? '').toLowerCase();
      f['verdict']       = detail.verdictProse.toLowerCase();
      f['verdictEn']     = (detail.verdictProse_en ?? '').toLowerCase();
      f['falsification'] = [
        detail.falsificationCondition ?? '',
        detail.falsificationCondition_en ?? '',
      ].join(' ').toLowerCase();
    }
    return f;
  }

  /** Count occurrences of `term` in `text`, merging no-space variant for CJK. */
  private countOccurrences(term: string, text: string): number {
    if (!text) return 0;
    let count = 0;
    let pos = 0;
    while ((pos = text.indexOf(term, pos)) !== -1) { count++; pos += term.length; }
    // Also count in no-space version (for CJK compound terms)
    const textNS = text.replace(/\s/g, '');
    const termNS = term.replace(/\s/g, '');
    if (termNS !== term) {
      let posNS = 0;
      while ((posNS = textNS.indexOf(termNS, posNS)) !== -1) {
        count++;
        posNS += termNS.length;
      }
    }
    return count;
  }

  private scoreAllAtoms(terms: string[], layerFilter?: number): ScoredAtom[] {
    const nodes = this.graphData.getNodes(layerFilter);
    if (nodes.length === 0) return [];

    // Build field corpora for all atoms
    type AtomFields = { node: GraphNode; fields: Record<string, string> };
    const corpus: AtomFields[] = nodes.map(node => ({
      node,
      fields: this.buildFields(node, this.graphData.getDetail(node.id)),
    }));

    // IDF: document frequency per term across all atoms (union of all fields)
    const N = corpus.length;
    const idf = new Map<string, number>();
    for (const term of terms) {
      const df = corpus.filter(({ fields }) =>
        Object.values(fields).some(text => text.includes(term) ||
          text.replace(/\s/g,'').includes(term.replace(/\s/g,'')))
      ).length;
      // BM25 IDF formula (add 0.5 smoothing)
      idf.set(term, Math.log((N - df + 0.5) / (df + 0.5) + 1));
    }

    // Average document length per field (for length normalization)
    const avgLen: Record<string, number> = {};
    for (const key of Object.keys(this.FIELD_WEIGHT)) {
      const total = corpus.reduce((s, { fields }) => s + (fields[key]?.length ?? 0), 0);
      avgLen[key] = total / N || 1;
    }

    const results: ScoredAtom[] = [];

    for (const { node, fields } of corpus) {
      let bm25Total = 0;
      const reasons: MatchReason[] = [];
      let hadAnyMatch = false;

      for (const [fieldKey, fieldWeight] of Object.entries(this.FIELD_WEIGHT)) {
        const text = fields[fieldKey] ?? '';
        if (!text) continue;
        const dl = text.length;
        const avdl = avgLen[fieldKey] ?? 1;
        let fieldScore = 0;

        for (const term of terms) {
          const tf = this.countOccurrences(term, text);
          if (tf === 0) continue;
          hadAnyMatch = true;
          // BM25 TF component
          const tfNorm = (tf * (this.BM25_K1 + 1)) /
                         (tf + this.BM25_K1 * (1 - this.BM25_B + this.BM25_B * dl / avdl));
          fieldScore += (idf.get(term) ?? 1) * tfNorm;
        }

        if (fieldScore > 0) {
          bm25Total += fieldScore * fieldWeight;
          // Collect reason snippet for primary fields only
          if (['title', 'claim'].includes(fieldKey) && reasons.length < 3) {
            const firstTerm = terms.find(t => text.includes(t));
            if (firstTerm) {
              const idx = text.indexOf(firstTerm);
              const raw = fieldKey === 'title' ? node.title : fields['claim'];
              reasons.push({ field: fieldKey as any, snippet: raw.slice(Math.max(0, idx - 20), idx + 100) });
            }
          } else if (fieldKey === 'takeaway' && reasons.length < 3) {
            reasons.push({ field: 'takeaway', snippet: '' });
          } else if (fieldKey === 'counter' && reasons.length < 3) {
            reasons.push({ field: 'counter', snippet: (fields['counter'] ?? '').slice(0, 80) });
          }
        }
      }

      if (!hadAnyMatch || bm25Total === 0) continue;

      // Add quality bonuses (verdict strength, graph connectivity)
      const bonus = (VERDICT_SCORE[node.verdict] ?? 0) * 0.4
                  + Math.min(node.corroborationCount, 10) * 0.3
                  + Math.min(this.graphData.getEdgesForNode(node.id).length, 10) * 0.15;
      const finalScore = bm25Total + bonus;

      const tier: RelevanceTier = finalScore >= 8 ? 'direct' : 'related';
      const detail = this.graphData.getDetail(node.id);
      results.push({
        node, detail, score: finalScore, tier, matchReasons: reasons,
        recordNos: detail?.allRecordNos ?? [],
      });
    }

    results.sort((a, b) => b.score - a.score);
    return results;
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

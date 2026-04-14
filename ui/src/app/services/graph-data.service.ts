// Aurora v2 — Static Graph Data Service (replaces Neo4j API dependency)
import { Injectable, signal, computed } from '@angular/core';
import {
  GraphJson, GraphNode, GraphEdge, ProofLevel,
  CytoscapeElements, CytoscapeNode, CytoscapeEdge,
  DetailJson, AtomDetail, ProofChain, ChainNode, ChainEdge,
  SearchFacets, AvailableFacets,
  RecordMappingJson, RecordSourceInfo,
} from '../models/graph.models';

const PROOF_LEVELS: ProofLevel[] = [
  {
    level: 1,
    name: 'Crime Structure',
    nameKr: '범죄 구조도',
    description: 'Who ordered, who executed, who was victimized',
    descriptionKr: '누가 지시하고, 실행하고, 피해를 봤는가',
    visibleClaimTypes: new Set([
      'conspiracy_structure', 'prosecution_misconduct', 'witness_manipulation',
      'evidence_concealment', 'document_fabrication', 'attorney_misconduct',
    ]),
    visibleEdgeTypes: new Set(['CAUSES', 'OPPOSES']),
  },
  {
    level: 2,
    name: 'Evidence Trail',
    nameKr: '증거 연결도',
    description: 'What evidence supports these crimes',
    descriptionKr: '어떤 증거가 이를 뒷받침하는가',
    visibleClaimTypes: new Set([
      'testimony_evidence', 'technical_proof', 'regulatory_manipulation',
      'procedural_violation', 'terminology_manipulation',
      'evidence_concealment', 'document_fabrication',
    ]),
    visibleEdgeTypes: new Set(['CORROBORATES', 'SUPERSEDES', 'OPPOSES', 'RELATED']),
  },
  {
    level: 3,
    name: 'Cross-Layer Overview',
    nameKr: '교차 층위 조감도',
    description: 'How 7 layers connect into a coordinated cover-up',
    descriptionKr: '7개 층위를 횡단하는 범죄 연쇄의 전체 구조',
    visibleClaimTypes: new Set([
      'cross_layer_analysis', 'methodology', 'institutional_obstruction',
      'conspiracy_structure', 'human_rights_violation', 'temporal_manipulation',
    ]),
    visibleEdgeTypes: new Set(['CAUSES', 'CORROBORATES', 'RELATED']),
  },
];

@Injectable({ providedIn: 'root' })
export class GraphDataService {
  private readonly _graph = signal<GraphJson | null>(null);
  private readonly _detail = signal<DetailJson | null>(null);
  private _loadPromise: Promise<void> | null = null;
  private _detailPromise: Promise<void> | null = null;

  // Pre-built indexes (populated on load)
  private _nodeById = new Map<string, GraphNode>();
  private _causesForward = new Map<string, string[]>();   // parent → children
  private _causesReverse = new Map<string, string[]>();   // child → parents

  private readonly _recordMapping = signal<RecordMappingJson | null>(null);
  private _recordMappingPromise: Promise<void> | null = null;

  readonly loaded = computed(() => this._graph() !== null);
  readonly detailLoaded = computed(() => this._detail() !== null);
  readonly recordMappingLoaded = computed(() => this._recordMapping() !== null);
  readonly meta = computed(() => this._graph()?._meta ?? null);

  load(): Promise<void> {
    if (this._loadPromise) return this._loadPromise;
    this._loadPromise = fetch('/assets/graph.json')
      .then(res => {
        if (!res.ok) throw new Error(`graph.json load failed: ${res.status}`);
        return res.json() as Promise<GraphJson>;
      })
      .then(data => {
        this._graph.set(data);
        this._buildIndexes(data);
      });
    return this._loadPromise;
  }

  loadDetail(): Promise<void> {
    if (this._detailPromise) return this._detailPromise;
    this._detailPromise = fetch('/assets/detail.json')
      .then(res => {
        if (!res.ok) throw new Error(`detail.json load failed: ${res.status}`);
        return res.json() as Promise<DetailJson>;
      })
      .then(data => this._detail.set(data));
    return this._detailPromise;
  }

  loadRecordMapping(): Promise<void> {
    if (this._recordMappingPromise) return this._recordMappingPromise;
    this._recordMappingPromise = fetch('/assets/record-mapping.json')
      .then(res => {
        if (!res.ok) throw new Error(`record-mapping.json load failed: ${res.status}`);
        return res.json() as Promise<RecordMappingJson>;
      })
      .then(data => this._recordMapping.set(data));
    return this._recordMappingPromise;
  }

  /**
   * Resolve a Record No. to its source layer file info.
   */
  resolveRecordSource(recordNo: number): RecordSourceInfo | null {
    const mapping = this._recordMapping();
    if (!mapping) return null;

    for (const layer of mapping.layers) {
      if (recordNo >= layer.recordStart && recordNo <= layer.recordEnd) {
        return {
          layerKey: layer.key,
          layerNum: layer.layerNum,
          descKr: layer.descKr,
          descEn: layer.descEn,
          scanned: layer.scanned,
          recordStart: layer.recordStart,
          recordEnd: layer.recordEnd,
          totalPages: layer.totalPages,
          pageOffset: recordNo - layer.recordStart + 1,
        };
      }
    }
    return null;
  }

  private _buildIndexes(g: GraphJson): void {
    this._nodeById.clear();
    this._causesForward.clear();
    this._causesReverse.clear();

    for (const n of g.nodes) {
      this._nodeById.set(n.id, n);
    }
    for (const e of g.edges) {
      if (e.type === 'CAUSES') {
        const fwd = this._causesForward.get(e.source) ?? [];
        fwd.push(e.target);
        this._causesForward.set(e.source, fwd);

        const rev = this._causesReverse.get(e.target) ?? [];
        rev.push(e.source);
        this._causesReverse.set(e.target, rev);
      }
    }
  }

  getNodes(layerFilter?: number): GraphNode[] {
    const g = this._graph();
    if (!g) return [];
    return layerFilter === undefined ? g.nodes : g.nodes.filter(n => n.layer === layerFilter);
  }

  getNodeById(id: string): GraphNode | undefined {
    return this._graph()?.nodes.find(n => n.id === id);
  }

  getEdgesForNode(id: string): GraphEdge[] {
    return (this._graph()?.edges ?? []).filter(e => e.source === id || e.target === id);
  }

  getContradictions(): Array<{ edge: GraphEdge; source: GraphNode; target: GraphNode }> {
    const g = this._graph();
    if (!g) return [];
    const idx = new Map(g.nodes.map(n => [n.id, n]));
    return g.edges
      .filter(e => e.type === 'OPPOSES')
      .flatMap(e => {
        const s = idx.get(e.source), t = idx.get(e.target);
        return s && t ? [{ edge: e, source: s, target: t }] : [];
      });
  }

  getProofLevel(level: number, layerFilter?: number): CytoscapeElements {
    const g = this._graph();
    if (!g) return { nodes: [], edges: [] };
    const pl = PROOF_LEVELS.find(p => p.level === level);
    if (!pl) return { nodes: [], edges: [] };

    const nodes = g.nodes.filter(n =>
      pl.visibleClaimTypes.has(n.claimType) &&
      (layerFilter === undefined || n.layer === layerFilter)
    );
    const nodeIds = new Set(nodes.map(n => n.id));
    const edges = g.edges.filter(e =>
      pl.visibleEdgeTypes.has(e.type) && nodeIds.has(e.source) && nodeIds.has(e.target)
    );

    return {
      nodes: nodes.map(n => ({
        data: {
          id: n.id, label: n.title, layer: n.layer,
          claimType: n.claimType, verdict: n.verdict, strength: n.strength,
          truthfulness: n.truthfulness, validity: n.validity, sincerity: n.sincerity,
          wikiSlug: n.wikiSlug,
          corroborationCount: n.corroborationCount, oppositionCount: n.oppositionCount,
        },
      })) as CytoscapeNode[],
      edges: edges.map((e, i) => ({
        data: {
          id: `e-${i}-${e.source}-${e.target}`,
          source: e.source, target: e.target,
          type: e.type, crossLayer: e.crossLayer,
        },
      })) as CytoscapeEdge[],
    };
  }

  getProofLevels(): ProofLevel[] { return PROOF_LEVELS; }

  // ── CP-2: Detail access ─────────────────────────────────────────

  getDetail(resultId: string): AtomDetail | undefined {
    return this._detail()?.atoms[resultId];
  }

  getDetailByStem(stem: string): AtomDetail | undefined {
    const atoms = this._detail()?.atoms;
    if (!atoms) return undefined;
    return Object.values(atoms).find(a => a.stem === stem);
  }

  // ── CP-2: Proof Chain traversal ─────────────────────────────────

  /**
   * Build a proof chain centered on `focusId`.
   * Traces CAUSES edges upward (ancestors) and downward (descendants).
   * Returns a linearized chain sorted by layer for the chain view.
   */
  getChain(focusId: string): ProofChain | null {
    const focusNode = this._nodeById.get(focusId);
    if (!focusNode) return null;

    const visited = new Set<string>();
    const chainNodes: ChainNode[] = [];
    const chainEdges: ChainEdge[] = [];

    // Traverse ancestors (CAUSES reverse: who caused this?)
    const ancestors: Array<{ id: string; depth: number }> = [];
    const walkUp = (id: string, depth: number) => {
      if (visited.has(id)) return;
      visited.add(id);
      const node = this._nodeById.get(id);
      if (!node) return;
      ancestors.push({ id, depth });
      for (const parentId of this._causesReverse.get(id) ?? []) {
        chainEdges.push({ source: parentId, target: id, type: 'CAUSES' });
        walkUp(parentId, depth + 1);
      }
    };
    // Start from focus, walk up
    walkUp(focusId, 0);

    // Traverse descendants (CAUSES forward: what did this cause?)
    visited.clear();
    visited.add(focusId); // don't re-add focus
    const descendants: Array<{ id: string; depth: number }> = [];
    const walkDown = (id: string, depth: number) => {
      for (const childId of this._causesForward.get(id) ?? []) {
        if (visited.has(childId)) continue;
        visited.add(childId);
        const node = this._nodeById.get(childId);
        if (!node) continue;
        descendants.push({ id: childId, depth });
        chainEdges.push({ source: id, target: childId, type: 'CAUSES' });
        walkDown(childId, depth + 1);
      }
    };
    walkDown(focusId, 1);

    // Build ChainNode array
    const maxAncestorDepth = ancestors.length > 1
      ? Math.max(...ancestors.filter(a => a.id !== focusId).map(a => a.depth))
      : 0;

    for (const a of ancestors) {
      const node = this._nodeById.get(a.id)!;
      chainNodes.push({
        node,
        detail: this.getDetail(a.id),
        depth: maxAncestorDepth - a.depth,  // normalize: root = 0
        direction: a.id === focusId ? 'self' : 'ancestor',
      });
    }
    for (const d of descendants) {
      const node = this._nodeById.get(d.id)!;
      chainNodes.push({
        node,
        detail: this.getDetail(d.id),
        depth: maxAncestorDepth + d.depth,
        direction: 'descendant',
      });
    }

    // Sort by depth (layer-ascending within same depth)
    chainNodes.sort((a, b) => a.depth - b.depth || a.node.layer - b.node.layer);

    // Collect CORROBORATES/OPPOSES edges between chain members
    const chainIds = new Set(chainNodes.map(cn => cn.node.id));
    const g = this._graph();
    if (g) {
      for (const e of g.edges) {
        if (e.type === 'CAUSES') continue; // already added
        if (chainIds.has(e.source) && chainIds.has(e.target)) {
          chainEdges.push({ source: e.source, target: e.target, type: e.type });
        }
      }
    }

    const layers = [...new Set(chainNodes.map(cn => cn.node.layer))].sort();

    return {
      focus: focusId,
      nodes: chainNodes,
      edges: chainEdges,
      maxDepth: chainNodes.length > 0 ? Math.max(...chainNodes.map(cn => cn.depth)) : 0,
      layerSpan: layers,
    };
  }

  /**
   * Get all chain roots — atoms that have outgoing CAUSES but no incoming CAUSES.
   * These are the starting points of proof chains.
   */
  getChainRoots(): GraphNode[] {
    const g = this._graph();
    if (!g) return [];
    const hasIncoming = new Set<string>();
    const hasOutgoing = new Set<string>();
    for (const e of g.edges) {
      if (e.type === 'CAUSES') {
        hasOutgoing.add(e.source);
        hasIncoming.add(e.target);
      }
    }
    return [...hasOutgoing]
      .filter(id => !hasIncoming.has(id))
      .map(id => this._nodeById.get(id))
      .filter((n): n is GraphNode => n !== undefined)
      .sort((a, b) => a.layer - b.layer);
  }

  // ── CP-2: Search / Filter ────────────────────────────────────────

  // ── Faceted Search (CP-3 property 활용) ────────────────────────

  searchAtoms(query: string, layerFilter?: number, facets?: SearchFacets): GraphNode[] {
    const g = this._graph();
    if (!g) return [];
    // Allow empty query if facets are provided
    if (!query.trim() && !facets) return [];

    const particles = /(?:은|는|이|가|을|를|의|에|에서|으로|로|도|만|까지|부터|와|과|라|란|이란)$/;
    const stopwords = new Set([
      '누구', '누구인', '무엇', '뭐', '어디', '언제', '왜', '어떻게', '어떤',
      '인가', '인지', '인가요', '인지요', '입니까', '인데',
      'who', 'what', 'where', 'when', 'why', 'how', 'which',
      '대한', '대해', '대하여', '관한', '관해', '설명', '알려',
    ]);
    const terms = query.trim() ? query.toLowerCase()
      .replace(/[?!.,;:'"()\[\]{}~`@#$%^&*+=<>\/\\]/g, '')
      .split(/\s+/)
      .map(t => t.replace(particles, ''))
      .filter(t => t.length > 0 && !stopwords.has(t)) : [];
    const detail = this._detail();
    const layer = facets?.layer ?? layerFilter;

    return g.nodes
      .filter(n => {
        const nx = n as any;

        // ── Facet filters (structured property match) ──
        if (layer !== undefined && n.layer !== layer) return false;
        if (facets?.person && !(nx.persons ?? []).includes(facets.person)) return false;
        if (facets?.organization && !(nx.organizations ?? []).includes(facets.organization)) return false;
        if (facets?.fractureType && nx.fractureType !== facets.fractureType) return false;
        if (facets?.sourceType && nx.sourceType !== facets.sourceType) return false;
        if (facets?.strength && n.strength !== facets.strength) return false;
        if (facets?.verdict && n.verdict !== facets.verdict) return false;
        if (facets?.claimType && n.claimType !== facets.claimType) return false;

        // If no text terms, facet-only match is enough
        if (terms.length === 0) return true;

        // ── Text search (title + structured fields + body) ──
        const titleLower = n.title.toLowerCase();
        if (terms.every(t => titleLower.includes(t))) return true;

        // Search in structured property fields (persons, organizations)
        const propCorpus = [
          ...(nx.persons ?? []),
          ...(nx.organizations ?? []),
          nx.fractureType ?? '',
          nx.sourceType ?? '',
        ].join(' ').toLowerCase();
        if (terms.every(t => propCorpus.includes(t))) return true;

        // Search in detail body
        if (detail?.atoms[n.id]) {
          const d = detail.atoms[n.id];
          const corpus = [
            d.claim, d.counterHypothesis, d.falsificationCondition,
            ...d.keyTakeaways.map(t => t.text),
            ...d.supportingEvidence.map(e => e.raw),
          ].join(' ').toLowerCase();
          return terms.every(t => corpus.includes(t));
        }

        return false;
      })
      .sort((a, b) => {
        // Priority: title match > property match > body match
        const scoreMatch = (n: GraphNode): number => {
          if (terms.length === 0) return 0;
          if (terms.every(t => n.title.toLowerCase().includes(t))) return 0;
          const nx = n as any;
          const props = [...(nx.persons ?? []), ...(nx.organizations ?? [])].join(' ').toLowerCase();
          if (terms.every(t => props.includes(t))) return 1;
          return 2;
        };
        const sa = scoreMatch(a), sb = scoreMatch(b);
        if (sa !== sb) return sa - sb;
        return a.layer - b.layer;
      });
  }

  /**
   * Extract available facet values from current graph for filter UI.
   */
  getAvailableFacets(): AvailableFacets {
    const g = this._graph();
    if (!g) return { persons: [], organizations: [], fractureTypes: [], sourceTypes: [], claimTypes: [], strengths: [], verdicts: [] };

    const persons = new Map<string, number>();
    const organizations = new Map<string, number>();
    const fractureTypes = new Map<string, number>();
    const sourceTypes = new Map<string, number>();
    const claimTypes = new Map<string, number>();
    const strengths = new Map<string, number>();
    const verdicts = new Map<string, number>();

    for (const n of g.nodes) {
      const nx = n as any;
      for (const p of (nx.persons ?? []) as string[]) {
        persons.set(p, (persons.get(p) ?? 0) + 1);
      }
      for (const o of (nx.organizations ?? []) as string[]) {
        organizations.set(o, (organizations.get(o) ?? 0) + 1);
      }
      if (nx.fractureType) fractureTypes.set(nx.fractureType, (fractureTypes.get(nx.fractureType) ?? 0) + 1);
      if (nx.sourceType && nx.sourceType !== 'unknown') sourceTypes.set(nx.sourceType, (sourceTypes.get(nx.sourceType) ?? 0) + 1);
      if (n.claimType) claimTypes.set(n.claimType, (claimTypes.get(n.claimType) ?? 0) + 1);
      if (n.strength) strengths.set(n.strength, (strengths.get(n.strength) ?? 0) + 1);
      if (n.verdict) verdicts.set(n.verdict, (verdicts.get(n.verdict) ?? 0) + 1);
    }

    const toSorted = (m: Map<string, number>) =>
      [...m.entries()].sort((a, b) => b[1] - a[1]).map(([value, count]) => ({ value, count }));

    return {
      persons: toSorted(persons),
      organizations: toSorted(organizations),
      fractureTypes: toSorted(fractureTypes),
      sourceTypes: toSorted(sourceTypes),
      claimTypes: toSorted(claimTypes),
      strengths: toSorted(strengths),
      verdicts: toSorted(verdicts),
    };
  }

  // ── CP-3: Unlinked Mentions (Obsidian 개념 적용) ────────────────

  getUnlinkedMentions(atomId: string): Array<{ node: GraphNode; sharedKeys: string[]; reason: 'record' | 'person' }> {
    const detail = this.getDetail(atomId);
    if (!detail) return [];
    const g = this._graph();
    if (!g) return [];

    // Build set of already-linked ids
    const linkedIds = new Set<string>();
    linkedIds.add(atomId);
    for (const rel of detail.related) {
      const found = g.nodes.find(n => n.stem === rel.slug || n.wikiSlug === rel.slug);
      if (found) linkedIds.add(found.id);
    }
    for (const e of g.edges) {
      if (e.source === atomId) linkedIds.add(e.target);
      if (e.target === atomId) linkedIds.add(e.source);
    }

    const results: Array<{ node: GraphNode; sharedKeys: string[]; reason: 'record' | 'person' }> = [];
    const myRecords = new Set(detail.allRecordNos);
    const allDetails = this._detail()?.atoms;
    if (!allDetails) return [];

    const knownNames = [
      '김민수', '이지영', '한지훈', '박성호', '이준호', '김수진',
      '장우진', '이태호', '오현수', '최영수', '최동욱', '임형규',
      '안세준', '진상호', '양준승', '도지호', '양미숙', '박서준',
    ];
    const myPersons = new Set(knownNames.filter(name =>
      detail.title.includes(name) || detail.claim.includes(name)
    ));

    for (const [otherId, otherDetail] of Object.entries(allDetails)) {
      if (linkedIds.has(otherId)) continue;
      const otherNode = this._nodeById.get(otherId);
      if (!otherNode) continue;

      if (myRecords.size > 0) {
        const shared = otherDetail.allRecordNos.filter(r => myRecords.has(r));
        if (shared.length > 0) {
          results.push({ node: otherNode, sharedKeys: shared, reason: 'record' });
          continue;
        }
      }

      if (myPersons.size > 0) {
        const otherText = otherDetail.title + ' ' + otherDetail.claim;
        const shared = [...myPersons].filter(name => otherText.includes(name));
        if (shared.length > 0) {
          results.push({ node: otherNode, sharedKeys: shared, reason: 'person' });
        }
      }
    }

    results.sort((a, b) => {
      if (a.reason !== b.reason) return a.reason === 'record' ? -1 : 1;
      return b.sharedKeys.length - a.sharedKeys.length;
    });
    return results.slice(0, 10);
  }

  getStats() {
    const g = this._graph();
    const nodes = g?.nodes ?? [];
    const edges = g?.edges ?? [];
    const corroborated = nodes.filter(n => n.verdict === 'CORROBORATED').length;
    const strong = nodes.filter(n => n.strength === 'STRONG' && n.verdict === 'CORROBORATED').length;
    const totalRecordNos = new Set(nodes.flatMap(n => (n as any).recordNos ?? [])).size;
    const withFracture = nodes.filter(n => (n as any).fractureType).length;
    return {
      nodeCount: nodes.length,
      edgeCount: edges.length,
      contradictionCount: edges.filter(e => e.type === 'OPPOSES').length,
      corroboratedCount: corroborated,
      strongCount: strong,
      corroborationPct: nodes.length > 0 ? Math.round((corroborated / nodes.length) * 100) : 0,
      totalRecordNos,
      fractureCount: withFracture,
      layerCounts: [1, 2, 3, 4, 5, 6, 7].map(l => {
        const layerNodes = nodes.filter(n => n.layer === l);
        const layerCorr = layerNodes.filter(n => n.verdict === 'CORROBORATED').length;
        return {
          layer: l,
          count: layerNodes.length,
          corroborated: layerCorr,
          pct: layerNodes.length > 0 ? Math.round((layerCorr / layerNodes.length) * 100) : 0,
        };
      }),
      generated: g?._meta?.generated,
    };
  }

  // ── CP-3: Person index ──────────────────────────────────────────────

  getPersonIndex(): Array<{ name: string; count: number; layers: number[] }> {
    const g = this._graph();
    if (!g) return [];
    const personMap = new Map<string, { count: number; layers: Set<number> }>();
    for (const n of g.nodes) {
      for (const p of ((n as any).persons ?? []) as string[]) {
        if (!personMap.has(p)) personMap.set(p, { count: 0, layers: new Set() });
        const entry = personMap.get(p)!;
        entry.count++;
        entry.layers.add(n.layer);
      }
    }
    return [...personMap.entries()]
      .map(([name, v]) => ({ name, count: v.count, layers: [...v.layers].sort() }))
      .sort((a, b) => b.count - a.count);
  }

  getAtomsByPerson(name: string): GraphNode[] {
    const g = this._graph();
    if (!g) return [];
    return g.nodes
      .filter(n => ((n as any).persons ?? []).includes(name))
      .sort((a, b) => a.layer - b.layer);
  }

  // ── CP-3: Record No. reverse index ──────────────────────────────────

  getAtomsByRecordNo(recordNo: number): GraphNode[] {
    const g = this._graph();
    if (!g) return [];
    return g.nodes.filter(n => ((n as any).recordNos ?? []).includes(recordNo));
  }

  // ── CP-3: Fracture queries ──────────────────────────────────────────

  getStrongestFractures(limit: number = 7): GraphNode[] {
    const g = this._graph();
    if (!g) return [];
    // Priority: F-SC first, then STRONG, then by layer order
    const fractureOrder: Record<string, number> = {
      'F-SC': 0, 'F-CE': 1, 'F-AA': 2, 'F-MS': 3, 'F-SE': 4,
    };
    return g.nodes
      .filter(n => (n as any).fractureType && n.verdict === 'CORROBORATED')
      .sort((a, b) => {
        const fa = fractureOrder[(a as any).fractureType] ?? 9;
        const fb = fractureOrder[(b as any).fractureType] ?? 9;
        if (fa !== fb) return fa - fb;
        if (a.strength !== b.strength) return a.strength === 'STRONG' ? -1 : 1;
        return a.layer - b.layer;
      })
      .slice(0, limit);
  }

  getLayerCrossLinks(layer: number): { prev: number[]; next: number[] } {
    const g = this._graph();
    if (!g) return { prev: [], next: [] };
    const prev = new Set<number>();
    const next = new Set<number>();
    for (const e of g.edges) {
      if (e.type !== 'CAUSES') continue;
      const src = this._nodeById.get(e.source);
      const tgt = this._nodeById.get(e.target);
      if (!src || !tgt) continue;
      if (tgt.layer === layer && src.layer !== layer) prev.add(src.layer);
      if (src.layer === layer && tgt.layer !== layer) next.add(tgt.layer);
    }
    return { prev: [...prev].sort(), next: [...next].sort() };
  }

  getLayerFractures(layer: number): GraphNode[] {
    const g = this._graph();
    if (!g) return [];
    return g.nodes
      .filter(n => n.layer === layer && (n as any).fractureType && n.verdict === 'CORROBORATED')
      .sort((a, b) => {
        if (a.strength !== b.strength) return a.strength === 'STRONG' ? -1 : 1;
        return 0;
      });
  }
}

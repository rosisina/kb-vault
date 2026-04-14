// Aurora v2 — Static Graph Data Service (replaces Neo4j API dependency)
import { Injectable, signal, computed } from '@angular/core';
import {
  GraphJson, GraphNode, GraphEdge, ProofLevel,
  CytoscapeElements, CytoscapeNode, CytoscapeEdge,
  DetailJson, AtomDetail, ProofChain, ChainNode, ChainEdge,
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

  readonly loaded = computed(() => this._graph() !== null);
  readonly detailLoaded = computed(() => this._detail() !== null);
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

  searchAtoms(query: string, layerFilter?: number): GraphNode[] {
    const g = this._graph();
    if (!g || !query.trim()) return [];

    const particles = /(?:은|는|이|가|을|를|의|에|에서|으로|로|도|만|까지|부터|와|과|라|란|이란)$/;
    const stopwords = new Set([
      '누구', '누구인', '무엇', '뭐', '어디', '언제', '왜', '어떻게', '어떤',
      '인가', '인지', '인가요', '인지요', '입니까', '인데',
      'who', 'what', 'where', 'when', 'why', 'how', 'which',
      '대한', '대해', '대하여', '관한', '관해', '설명', '알려',
    ]);
    const terms = query.toLowerCase()
      .replace(/[?!.,;:'"()\[\]{}~`@#$%^&*+=<>\/\\]/g, '')
      .split(/\s+/)
      .map(t => t.replace(particles, ''))
      .filter(t => t.length > 0 && !stopwords.has(t));
    const detail = this._detail();

    return g.nodes
      .filter(n => {
        if (layerFilter !== undefined && n.layer !== layerFilter) return false;

        // Search in title
        const titleLower = n.title.toLowerCase();
        const titleMatch = terms.every(t => titleLower.includes(t));
        if (titleMatch) return true;

        // Search in detail (claim text, takeaways, evidence)
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
        // Prioritize title matches
        const aTitle = terms.every(t => a.title.toLowerCase().includes(t)) ? 0 : 1;
        const bTitle = terms.every(t => b.title.toLowerCase().includes(t)) ? 0 : 1;
        return aTitle - bTitle || a.layer - b.layer;
      });
  }

  getStats() {
    const g = this._graph();
    return {
      nodeCount: g?.nodes.length ?? 0,
      edgeCount: g?.edges.length ?? 0,
      contradictionCount: (g?.edges ?? []).filter(e => e.type === 'OPPOSES').length,
      layerCounts: [1, 2, 3, 4, 5, 6, 7].map(l => ({
        layer: l, count: (g?.nodes ?? []).filter(n => n.layer === l).length,
      })),
      generated: g?._meta?.generated,
    };
  }
}

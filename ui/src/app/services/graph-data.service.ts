// Aurora v2 — Static Graph Data Service (replaces Neo4j API dependency)
import { Injectable, signal, computed } from '@angular/core';
import {
  GraphJson, GraphNode, GraphEdge, ProofLevel,
  CytoscapeElements, CytoscapeNode, CytoscapeEdge,
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
  private _loadPromise: Promise<void> | null = null;

  readonly loaded = computed(() => this._graph() !== null);
  readonly meta = computed(() => this._graph()?._meta ?? null);

  load(): Promise<void> {
    if (this._loadPromise) return this._loadPromise;
    this._loadPromise = fetch('/assets/graph.json')
      .then(res => {
        if (!res.ok) throw new Error(`graph.json load failed: ${res.status}`);
        return res.json() as Promise<GraphJson>;
      })
      .then(data => this._graph.set(data));
    return this._loadPromise;
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

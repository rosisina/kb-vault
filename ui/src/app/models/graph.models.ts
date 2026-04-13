// Aurora v2 — Graph Data Models

export interface GraphNode {
  id: string;
  stem: string;
  title: string;
  layer: number;
  claimType: string;
  verdict: 'CORROBORATED' | 'WEAKENED' | 'UNFALSIFIABLE' | 'NEEDS_MORE_EVIDENCE';
  strength: 'STRONG' | 'MODERATE' | 'WEAK';
  truthfulness: number;
  validity: number;
  sincerity: number;
  corroborationCount: number;
  oppositionCount: number;
  causalDepth: number;
  wikiSlug: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  type: 'CAUSES' | 'OPPOSES' | 'CORROBORATES' | 'SUPERSEDES' | 'RELATED';
  crossLayer: boolean;
}

export interface GraphMeta {
  nodeCount: number;
  edgeCount: number;
  generated?: string;
  atomCount?: number;
  [key: string]: unknown;
}

export interface GraphJson {
  _meta: GraphMeta;
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface ProofLevel {
  level: number;
  name: string;
  nameKr: string;
  description: string;
  descriptionKr: string;
  visibleClaimTypes: Set<string>;
  visibleEdgeTypes: Set<string>;
}

export interface CytoscapeNode {
  data: {
    id: string;
    label: string;
    layer: number;
    claimType: string;
    verdict: string;
    strength: string;
    truthfulness: number;
    validity: number;
    sincerity: number;
    wikiSlug: string;
    [key: string]: unknown;
  };
}

export interface CytoscapeEdge {
  data: {
    id: string;
    source: string;
    target: string;
    type: string;
    crossLayer: boolean;
  };
}

export interface CytoscapeElements {
  nodes: CytoscapeNode[];
  edges: CytoscapeEdge[];
}

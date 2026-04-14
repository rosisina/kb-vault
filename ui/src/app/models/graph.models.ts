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

// ── CP-2: Atom Detail (from detail.json) ──────────────────────────

export interface AtomTakeaway {
  text: string;
  axes: ('진리성' | '타당성' | '진실성')[];
}

export interface AtomEvidence {
  raw: string;
  recordNos?: string[];
  layerIds?: string[];
}

export interface AtomRelated {
  slug: string;
  display: string;
  type: 'CAUSES' | 'OPPOSES' | 'CORROBORATES' | 'SUPERSEDES' | 'RELATED' | 'PART_OF_LAYER' | 'ABOUT';
}

export interface AtomDetail {
  id: string;
  stem: string;
  title: string;
  source: string;
  layer: number;
  claim: string;
  keyTakeaways: AtomTakeaway[];
  supportingEvidence: AtomEvidence[];
  counterHypothesis: string;
  falsificationCondition: string;
  verdictProse: string;
  spotCheck: string;
  related: AtomRelated[];
  allRecordNos: string[];
}

export interface DetailJson {
  _meta: { generator: string; atomCount: number };
  atoms: Record<string, AtomDetail>;
}

// ── CP-2: Proof Chain ─────────────────────────────────────────────

export interface ChainNode {
  node: GraphNode;
  detail?: AtomDetail;
  depth: number;            // 0 = root (earliest cause)
  direction: 'ancestor' | 'self' | 'descendant';
}

export interface ChainEdge {
  source: string;
  target: string;
  type: string;
}

export interface ProofChain {
  focus: string;            // resultId of the selected atom
  nodes: ChainNode[];
  edges: ChainEdge[];
  maxDepth: number;
  layerSpan: number[];      // sorted unique layers in chain
}

// ── Faceted Search (CP-3 property 기반) ──────────────────────────

export interface SearchFacets {
  layer?: number;
  person?: string;
  organization?: string;
  fractureType?: string;   // F-SC | F-CE | F-MS | F-SE | F-AA
  sourceType?: string;     // book | recording | regulation | investigation | sop | kakao
  strength?: string;       // STRONG | MODERATE | WEAK
  verdict?: string;        // CORROBORATED | WEAKENED | UNFALSIFIABLE | NEEDS_MORE_EVIDENCE
  claimType?: string;      // one of 16 standard categories
}

export interface FacetOption {
  value: string;
  count: number;
}

export interface AvailableFacets {
  persons: FacetOption[];
  organizations: FacetOption[];
  fractureTypes: FacetOption[];
  sourceTypes: FacetOption[];
  claimTypes: FacetOption[];
  strengths: FacetOption[];
  verdicts: FacetOption[];
}

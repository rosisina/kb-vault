// Aurora v2 CP-2 — Query Answer Models
import { GraphNode, AtomDetail, GraphEdge } from './graph.models';

export type RelevanceTier = 'direct' | 'corroborating' | 'opposing' | 'related';

export interface MatchReason {
  field: 'title' | 'claim' | 'takeaway' | 'evidence' | 'counter';
  snippet: string;
}

export interface ScoredAtom {
  node: GraphNode;
  detail: AtomDetail | undefined;
  score: number;
  tier: RelevanceTier;
  matchReasons: MatchReason[];
  recordNos: string[];
}

export interface CounterHypothesisEntry {
  atomId: string;
  atomTitle: string;
  hypothesis: string;
  verdict: string;
}

export interface RelatedAtomEntry {
  node: GraphNode;
  edgeType: string;
  sourceAtomId: string;
}

export interface ChainSummary {
  rootAtomId: string;
  steps: Array<{ id: string; title: string; layer: number }>;
}

export interface ThematicGroup {
  label: string;
  atoms: ScoredAtom[];
}

export interface QueryAnswer {
  query: string;
  totalMatches: number;
  directResults: ScoredAtom[];
  thematicGroups: ThematicGroup[];
  corroboratingResults: RelatedAtomEntry[];
  opposingResults: RelatedAtomEntry[];
  chainSummaries: ChainSummary[];
  counterHypotheses: CounterHypothesisEntry[];
  relatedAtoms: RelatedAtomEntry[];
  allRecordNos: string[];
}

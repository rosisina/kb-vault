// Aurora v2 — CATHOF: 증명 체인 (Atom Map)
// 3-패널 모달: 층위별 Atom 목록 | Atom 상세 | 연관 Atom (체이닝)
import {
  Component, Output, EventEmitter, signal, computed,
  OnInit, OnDestroy, HostListener,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { GraphDataService } from '../../services/graph-data.service';
import { GraphNode, AtomDetail, GraphEdge } from '../../models/graph.models';

export const LAYER_COLORS = ['', '#b03030', '#cc5a10', '#d4881f', '#2a6e35', '#1a5ab0', '#5a2a9a', '#9a2060'];
const LAYER_KR = ['', 'KIATIS 은폐', 'KIATIS 조작', '카르텔', '시험평가 조작', '허위신고', '사기수사', '기소유예'];
const LAYER_EN = ['', 'KIATIS Concealment', 'KIATIS Manipulation', 'DCIA Cartel', 'Eval Manipulation', 'False Report', 'Fraud Prosecution', 'Kiso-Yuye'];

const EDGE_LABEL_KR: Record<string, string> = {
  CAUSES: '→ 원인', CORROBORATES: '✓ 보강', OPPOSES: '⚡ 반박',
  SUPERSEDES: '↑ 대체', RELATED: '~ 관련',
};
const EDGE_LABEL_EN: Record<string, string> = {
  CAUSES: '→ Causes', CORROBORATES: '✓ Corroborates', OPPOSES: '⚡ Opposes',
  SUPERSEDES: '↑ Supersedes', RELATED: '~ Related',
};

export interface RelatedAtomEntry {
  node: GraphNode;
  edgeType: string;
  direction: 'out' | 'in';
}

// Mobile panel tabs
type MobileTab = 'list' | 'detail' | 'related';

@Component({
  selector: 'app-atom-map',
  standalone: true,
  templateUrl: './atom-map.component.html',
  styleUrl: './atom-map.component.scss',
})
export class AtomMapComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  @Output() atomSelect = new EventEmitter<string>();

  readonly allLayers = [1, 2, 3, 4, 5, 6, 7];
  readonly layerColors = LAYER_COLORS;

  activeLayer = signal<number>(1);
  selectedAtomId = signal<string | null>(null);
  mobileTab = signal<MobileTab>('list');

  // Derived
  layerAtoms = computed(() =>
    this.graphData.getNodes(this.activeLayer())
      .sort((a, b) => {
        const ord = { CORROBORATED: 0, WEAKENED: 1, NEEDS_MORE_EVIDENCE: 2, UNFALSIFIABLE: 3 };
        return (ord[a.verdict as keyof typeof ord] ?? 3) - (ord[b.verdict as keyof typeof ord] ?? 3);
      })
  );

  selectedNode = computed(() => {
    const id = this.selectedAtomId();
    return id ? this.graphData.getNodeById(id) : null;
  });

  selectedDetail = computed((): AtomDetail | undefined => {
    const id = this.selectedAtomId();
    return id ? this.graphData.getDetail(id) : undefined;
  });

  relatedAtoms = computed((): RelatedAtomEntry[] => {
    const id = this.selectedAtomId();
    if (!id) return [];
    const edges: GraphEdge[] = this.graphData.getEdgesForNode(id);
    const entries: RelatedAtomEntry[] = [];
    for (const e of edges) {
      const otherId = e.source === id ? e.target : e.source;
      const node = this.graphData.getNodeById(otherId);
      if (node) {
        entries.push({ node, edgeType: e.type, direction: e.source === id ? 'out' : 'in' });
      }
    }
    // Priority: CAUSES > CORROBORATES > OPPOSES > RELATED > SUPERSEDES
    const order: Record<string, number> = { CAUSES: 0, CORROBORATES: 1, OPPOSES: 2, RELATED: 3, SUPERSEDES: 4 };
    entries.sort((a, b) => (order[a.edgeType] ?? 9) - (order[b.edgeType] ?? 9));
    return entries.slice(0, 8); // 7±1
  });

  // 추천 시작 Atom: CAUSES 루트 중 corroborationCount 상위 3개
  startAtoms = computed((): GraphNode[] =>
    this.graphData.getChainRoots()
      .sort((a, b) => (b.corroborationCount - a.corroborationCount) || (a.layer - b.layer))
      .slice(0, 3)
  );

  constructor(
    public lang: LanguageService,
    public graphData: GraphDataService,
  ) {}

  ngOnInit(): void {
    // 추천 시작 Atom 첫 번째를 기본 선택
    const start = this.startAtoms()[0] ?? this.layerAtoms()[0];
    if (start) this.selectedAtomId.set(start.id);
  }

  ngOnDestroy(): void {}

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') this.close.emit();
  }

  // ── Layer select ──────────────────────────────────────────────────
  selectLayer(layer: number): void {
    this.activeLayer.set(layer);
    const first = this.layerAtoms()[0];
    this.selectedAtomId.set(first?.id ?? null);
    if (window.innerWidth <= 640) this.mobileTab.set('list');
  }

  // ── Atom select (chaining) ────────────────────────────────────────
  selectAtom(atomId: string): void {
    this.selectedAtomId.set(atomId);
    const node = this.graphData.getNodeById(atomId);
    if (node) this.activeLayer.set(node.layer);
    if (window.innerWidth <= 640) this.mobileTab.set('detail');
  }

  // ── Navigate to Aurora ────────────────────────────────────────────
  goToAurora(atomId: string): void {
    this.atomSelect.emit(atomId);
    this.close.emit();
  }

  // ── Labels ────────────────────────────────────────────────────────
  layerLabel(l: number): string {
    return this.lang.lang() === 'kr' ? LAYER_KR[l] : LAYER_EN[l];
  }

  verdictClass(v: string): string {
    return { CORROBORATED: 'v-corr', WEAKENED: 'v-weak', NEEDS_MORE_EVIDENCE: 'v-nme', UNFALSIFIABLE: 'v-unf' }[v] || '';
  }

  verdictLabel(v: string): string {
    if (this.lang.lang() === 'kr') {
      return { CORROBORATED: '입증', WEAKENED: '약화', NEEDS_MORE_EVIDENCE: '증거필요', UNFALSIFIABLE: '반증불가' }[v] || v;
    }
    return { CORROBORATED: 'Corroborated', WEAKENED: 'Weakened', NEEDS_MORE_EVIDENCE: 'NME', UNFALSIFIABLE: 'Unfalsifiable' }[v] || v;
  }

  edgeLabel(type: string): string {
    return (this.lang.lang() === 'kr' ? EDGE_LABEL_KR : EDGE_LABEL_EN)[type] || type;
  }

  edgeClass(type: string): string {
    return { CAUSES: 'et-causes', CORROBORATES: 'et-corr', OPPOSES: 'et-opp', SUPERSEDES: 'et-sup', RELATED: 'et-rel' }[type] || '';
  }

  nodeTitle(node: GraphNode): string {
    if (this.lang.lang() === 'en') {
      return this.lang.translateNamesInText(node.titleEn || node.title);
    }
    return node.title;
  }

  claimText(detail: AtomDetail): string {
    if (this.lang.lang() === 'en') return detail.claim_en || detail.claim;
    return detail.claim_ko || detail.claim;
  }

  takeaways(detail: AtomDetail) {
    if (this.lang.lang() === 'en') return detail.keyTakeaways_en || detail.keyTakeaways;
    return detail.keyTakeaways_ko || detail.keyTakeaways;
  }
}

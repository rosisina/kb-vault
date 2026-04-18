// Aurora v2 — ProofShell: State A/B/C 전환
import { Component, signal, computed, HostListener } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { LandingViewComponent } from '../landing/landing.component';
import { LayerNavigatorComponent } from '../layer-navigator/layer-navigator.component';
import { ProofBodyComponent } from '../proof-body/proof-body.component';
import { EvidenceContextComponent } from '../evidence-context/evidence-context.component';
import { GraphComponent } from '../graph/graph.component';
import { AboutComponent } from '../about/about.component';
import { DocumentViewerComponent } from '../document-viewer/document-viewer.component';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { ProofChain, GraphNode } from '../../models/graph.models';
import { QueryAnswer } from '../../models/query-answer.models';

export type ShellState = 'landing' | 'proof';

interface ChatHistory {
  query: string;
  timestamp: number;
}

@Component({
  selector: 'app-proof-shell',
  standalone: true,
  imports: [
    LandingViewComponent,
    LayerNavigatorComponent,
    ProofBodyComponent,
    EvidenceContextComponent,
    GraphComponent,
    AboutComponent,
    DocumentViewerComponent,
    SlicePipe,
  ],
  templateUrl: './proof-shell.component.html',
  styleUrl: './proof-shell.component.scss',
})
export class ProofShellComponent {
  state = signal<ShellState>('landing');
  activeLayer = signal<number | null>(null);
  selectedAtomId = signal<string | null>(null);
  showGraphModal = signal(false);
  showAbout = signal(false);
  showPaper = signal(false);
  graphChain = signal<ProofChain | null>(null);
  scrollToGroup = signal<string | null>(null);
  chatHistory = signal<ChatHistory[]>([]);
  searchResults = signal<GraphNode[]>([]);
  searchQuery = signal<string | null>(null);
  answerForContext = signal<QueryAnswer | null>(null);

  // CP-3: Navigation Trail (Obsidian stacked panes 개념)
  navTrail = signal<Array<{ id: string; title: string; titleEn?: string; layer: number }>>([]);

  // 미니 프리뷰 (우측 패널 클릭 → 중앙 하단 프리뷰)
  previewAtomId = signal<string | null>(null);

  isLanding = computed(() => this.state() === 'landing');
  isProof = computed(() => this.state() === 'proof');

  constructor(
    public graphData: GraphDataService,
    public lang: LanguageService,
  ) {
    this.loadChatHistory();
    // CP-2: load detail.json for atom body content
    this.graphData.loadDetail();
    // Load record-mapping for source info display
    this.graphData.loadRecordMapping();
    // 초기 landing 상태를 히스토리에 기록 (뒤로가기 베이스라인)
    history.replaceState({ aurora: 'landing' }, '');
  }

  // 상단 검색바에서 이벤트 수신
  @HostListener('window:aurora-search', ['$event'])
  onSearchEvent(event: Event): void {
    const query = (event as CustomEvent).detail.query;
    this.onSearch(query);
  }

  // 브랜드 클릭 → 랜딩(초기화면)으로 복귀
  @HostListener('window:aurora-back-to-landing')
  onBrandBackToLanding(): void {
    this.onBackToLanding();
  }

  onLayerSelect(layer: number): void {
    this.activeLayer.set(layer);
    this.selectedAtomId.set(null);
    this.setState('proof');
  }

  onAtomSelect(atomId: string): void {
    // Force re-trigger even if same atom (e.g., clicking "상세" on already-selected atom)
    if (this.selectedAtomId() === atomId) {
      this.selectedAtomId.set(null);
      // Microtask to ensure Angular detects the change
      setTimeout(() => this.selectedAtomId.set(atomId), 0);
    } else {
      this.selectedAtomId.set(atomId);
    }
    // CP-3: Push to navigation trail
    const node = this.graphData.getNodeById(atomId);
    if (node) {
      const trail = this.navTrail();
      // Avoid duplicate at tail
      if (trail.length === 0 || trail[trail.length - 1].id !== atomId) {
        const entry = { id: node.id, title: node.title, titleEn: node.titleEn, layer: node.layer };
        this.navTrail.set([...trail.slice(-19), entry]); // cap at 20
        // 브라우저 히스토리에 atom 항목 추가 → 뒤로가기 지원
        history.pushState({ aurora: 'proof', atomId }, '');
      }
    }
  }

  onTrailClick(atomId: string): void {
    // Navigate to a trail item and truncate trail to that point
    const trail = this.navTrail();
    const idx = trail.findIndex(t => t.id === atomId);
    if (idx >= 0) {
      this.navTrail.set(trail.slice(0, idx + 1));
    }
    this.selectedAtomId.set(atomId);
  }

  onTrailBack(): void {
    const trail = this.navTrail();
    if (trail.length > 1) {
      this.navTrail.set(trail.slice(0, -1));
      this.selectedAtomId.set(trail[trail.length - 2].id);
    } else {
      // trail이 비면 랜딩으로 복귀
      this.navTrail.set([]);
      this.onBackToLanding();
    }
  }

  activeFacets = signal<any>(null);

  onSearch(query: string, facets?: any): void {
    this.addChatHistory(query);
    this.searchQuery.set(query);
    if (facets) this.activeFacets.set(facets);
    const results = this.graphData.searchAtoms(
      query,
      this.activeLayer() ?? undefined,
      this.activeFacets() ?? undefined,
    );
    this.searchResults.set(results);
    this.selectedAtomId.set(null);
    this.setState('proof');
    // Push to back-navigation stack (cap at 10)
    const stack = this.searchStack();
    const next = [...stack, { query, results }];
    this.searchStack.set(next.length > 10 ? next.slice(-10) : next);
  }

  onFacetChange(facets: any): void {
    this.activeFacets.set(facets);
    // Re-run search with current query + new facets
    const query = this.searchQuery() ?? '';
    const results = this.graphData.searchAtoms(
      query,
      this.activeLayer() ?? undefined,
      facets,
    );
    this.searchResults.set(results);
  }

  onHistoryClick(query: string): void {
    window.dispatchEvent(new CustomEvent('aurora-populate-search', {
      detail: { query }
    }));
  }

  onBackToLanding(): void {
    this.setState('landing');
    this.activeLayer.set(null);
    this.selectedAtomId.set(null);
    this.searchResults.set([]);
    this.searchQuery.set(null);
    this.navTrail.set([]);
  }

  // ── 브라우저 뒤로가기 (Android '<' 버튼) 지원 ──
  @HostListener('window:popstate', ['$event'])
  onPopState(_event: PopStateEvent): void {
    // 모달이 열려 있으면 모달만 닫기
    if (this.showAbout()) { this.showAbout.set(false); return; }
    if (this.showPaper()) { this.showPaper.set(false); return; }
    if (this.showGraphModal()) { this.showGraphModal.set(false); return; }

    if (this.isProof()) {
      const trail = this.navTrail();
      if (trail.length > 1) {
        // trail 한 단계 뒤로
        this.navTrail.set(trail.slice(0, -1));
        this.selectedAtomId.set(trail[trail.length - 2].id);
        history.pushState({ aurora: 'proof' }, '');
      } else {
        // 랜딩으로 복귀 (history 항목 추가 없이 replace)
        this.navTrail.set([]);
        this.onBackToLanding();
        history.replaceState({ aurora: 'landing' }, '');
      }
    }
  }

  private setState(s: ShellState): void {
    this.state.set(s);
    window.dispatchEvent(new CustomEvent('aurora-state-change', { detail: { state: s } }));
    // proof 상태 진입 시 브라우저 히스토리에 항목 추가
    if (s === 'proof') {
      history.pushState({ aurora: 'proof' }, '');
    } else {
      history.replaceState({ aurora: 'landing' }, '');
    }
  }

  onGroupSelect(claimType: string): void {
    this.scrollToGroup.set(claimType);
    // 리셋 (다음 클릭 시 재트리거를 위해)
    setTimeout(() => this.scrollToGroup.set(null), 100);
  }

  onOpenGraph(): void {
    // Build chain for selected atom, or show full proof level
    if (this.selectedAtomId()) {
      this.graphChain.set(this.graphData.getChain(this.selectedAtomId()!));
    } else {
      this.graphChain.set(null);
    }
    this.showGraphModal.set(true);
  }

  onCloseGraph(): void {
    this.showGraphModal.set(false);
  }

  onGraphNodeSelect(atomId: string): void {
    this.showGraphModal.set(false);
    // 미니 프리뷰 대신 직접 이동 (graph는 의도적 탐색)
    this.previewAtomId.set(null);
    this.onAtomSelect(atomId);
  }

  // 미니 프리뷰: 우측 관계맵/숨은연결 클릭 → 중앙에 프리뷰
  onPreviewSelect(atomId: string): void {
    this.previewAtomId.set(atomId);
  }

  onPreviewNavigate(atomId: string): void {
    this.previewAtomId.set(null);
    this.onAtomSelect(atomId);
  }

  onPreviewClose(): void {
    this.previewAtomId.set(null);
  }

  // CP-3.1: Guided proof — select strongest fracture and enter proof view
  guidedProofMode = signal(false);

  onGuidedProof(): void {
    const strongest = this.graphData.getStrongestFractures(7);
    if (strongest.length > 0) {
      this.guidedProofMode.set(true);
      this.selectedAtomId.set(strongest[0].id);
      this.activeLayer.set(null); // cross-layer mode
      this.setState('proof');
    }
  }

  // Landing 메트릭 클릭 → State B 진입 (적절한 탭/필터 적용)
  initialViewMode = signal<string | null>(null);
  initialFilter = signal<any>(null);

  onMetricClick(type: string): void {
    switch (type) {
      case 'corroboration':
        this.initialViewMode.set('contradictions');
        this.initialFilter.set({ verdict: 'CORROBORATED' });
        this.setState('proof');
        break;
      case 'findings':
        this.initialViewMode.set('chain');
        this.initialFilter.set(null);
        this.setState('proof');
        break;
      case 'fractures':
        this.initialViewMode.set('contradictions');
        this.initialFilter.set(null);
        this.setState('proof');
        break;
      case 'records':
        this.onSearch('Record No.');
        break;
    }
  }

  // Landing 도구 클릭 → State B 진입 (해당 탭 활성)
  onToolClick(toolId: string): void {
    switch (toolId) {
      case 'chain':
        this.initialViewMode.set('chain');
        this.setState('proof');
        break;
      case 'fractures':
        this.initialViewMode.set('contradictions');
        this.setState('proof');
        break;
      case 'filter':
        this.initialViewMode.set('filter');
        this.setState('proof');
        break;
      case 'paper':
        this.showPaper.set(true);
        break;
    }
  }

  // Search history stack for back navigation (signal-based for change detection)
  private searchStack = signal<Array<{ query: string; results: GraphNode[] }>>([]);
  canGoBackSearch = computed(() => this.searchStack().length > 1);

  goBackSearch(): void {
    const stack = this.searchStack();
    if (stack.length > 1) {
      const next = stack.slice(0, -1);
      this.searchStack.set(next);
      const prev = next[next.length - 1];
      this.searchQuery.set(prev.query);
      this.searchResults.set(prev.results);
    }
  }

  // Landing 증거 탭 atom 카드 클릭 → proof 상태로 전환 후 해당 atom 선택
  onLandingAtomSelect(atomId: string): void {
    this.setState('proof');
    this.activeLayer.set(null);
    setTimeout(() => this.onAtomSelect(atomId), 0);
  }

  // CP-3.4: Person select — search for all atoms by this person
  onPersonSelect(name: string): void {
    this.onSearch(name);
  }

  // CP-3.5: Record No. select — search for Record No.
  onRecordSelect(recordNo: string): void {
    this.onSearch(`Record No. ${recordNo}`);
  }

  private addChatHistory(query: string): void {
    const history = this.chatHistory().filter(h => h.query !== query);
    history.unshift({ query, timestamp: Date.now() });
    this.chatHistory.set(history.slice(0, 5));
    localStorage.setItem('aurora_chat_history', JSON.stringify(this.chatHistory()));
  }

  private loadChatHistory(): void {
    try {
      const stored = localStorage.getItem('aurora_chat_history');
      if (stored) this.chatHistory.set(JSON.parse(stored));
    } catch { /* ignore */ }
  }
}

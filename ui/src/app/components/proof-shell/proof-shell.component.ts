// Aurora v2 — ProofShell: State A/B/C 전환
import { Component, signal, computed, HostListener } from '@angular/core';
import { LandingViewComponent } from '../landing/landing.component';
import { LayerNavigatorComponent } from '../layer-navigator/layer-navigator.component';
import { ProofBodyComponent } from '../proof-body/proof-body.component';
import { EvidenceContextComponent } from '../evidence-context/evidence-context.component';
import { GraphComponent } from '../graph/graph.component';
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
  ],
  templateUrl: './proof-shell.component.html',
  styleUrl: './proof-shell.component.scss',
})
export class ProofShellComponent {
  state = signal<ShellState>('landing');
  activeLayer = signal<number | null>(null);
  selectedAtomId = signal<string | null>(null);
  showGraphModal = signal(false);
  graphChain = signal<ProofChain | null>(null);
  scrollToGroup = signal<string | null>(null);
  chatHistory = signal<ChatHistory[]>([]);
  searchResults = signal<GraphNode[]>([]);
  searchQuery = signal<string | null>(null);
  answerForContext = signal<QueryAnswer | null>(null);

  // CP-3: Navigation Trail (Obsidian stacked panes 개념)
  navTrail = signal<Array<{ id: string; title: string; layer: number }>>([]);

  isLanding = computed(() => this.state() === 'landing');
  isProof = computed(() => this.state() === 'proof');

  constructor(
    public graphData: GraphDataService,
    public lang: LanguageService,
  ) {
    this.loadChatHistory();
    // CP-2: load detail.json for atom body content
    this.graphData.loadDetail();
  }

  // 상단 검색바에서 이벤트 수신
  @HostListener('window:aurora-search', ['$event'])
  onSearchEvent(event: Event): void {
    const query = (event as CustomEvent).detail.query;
    this.onSearch(query);
  }

  onLayerSelect(layer: number): void {
    this.activeLayer.set(layer);
    this.selectedAtomId.set(null);
    this.setState('proof');
  }

  onAtomSelect(atomId: string): void {
    this.selectedAtomId.set(atomId);
    // CP-3: Push to navigation trail
    const node = this.graphData.getNodeById(atomId);
    if (node) {
      const trail = this.navTrail();
      // Avoid duplicate at tail
      if (trail.length === 0 || trail[trail.length - 1].id !== atomId) {
        const entry = { id: node.id, title: node.title, layer: node.layer };
        this.navTrail.set([...trail.slice(-19), entry]); // cap at 20
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
    } else if (trail.length === 1) {
      this.navTrail.set([]);
      this.selectedAtomId.set(null);
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
    this.onSearch(query);
  }

  onBackToLanding(): void {
    this.setState('landing');
    this.activeLayer.set(null);
    this.selectedAtomId.set(null);
    this.searchResults.set([]);
    this.searchQuery.set(null);
    this.navTrail.set([]);
  }

  private setState(s: ShellState): void {
    this.state.set(s);
    window.dispatchEvent(new CustomEvent('aurora-state-change', { detail: { state: s } }));
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
    this.selectedAtomId.set(atomId);
    this.showGraphModal.set(false);
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

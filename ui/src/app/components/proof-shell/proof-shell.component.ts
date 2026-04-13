// Aurora v2 — ProofShell: State A/B/C 전환
import { Component, signal, computed, HostListener } from '@angular/core';
import { LandingViewComponent } from '../landing/landing.component';
import { LayerNavigatorComponent } from '../layer-navigator/layer-navigator.component';
import { ProofBodyComponent } from '../proof-body/proof-body.component';
import { EvidenceContextComponent } from '../evidence-context/evidence-context.component';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';

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
  ],
  templateUrl: './proof-shell.component.html',
  styleUrl: './proof-shell.component.scss',
})
export class ProofShellComponent {
  state = signal<ShellState>('landing');
  activeLayer = signal<number | null>(null);
  selectedAtomId = signal<string | null>(null);
  showGraphModal = signal(false);
  scrollToGroup = signal<string | null>(null);
  chatHistory = signal<ChatHistory[]>([]);

  isLanding = computed(() => this.state() === 'landing');
  isProof = computed(() => this.state() === 'proof');

  constructor(
    public graphData: GraphDataService,
    public lang: LanguageService,
  ) {
    this.loadChatHistory();
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
  }

  onSearch(query: string): void {
    this.addChatHistory(query);
    this.setState('proof');
  }

  onHistoryClick(query: string): void {
    this.state.set('proof');
  }

  onBackToLanding(): void {
    this.setState('landing');
    this.activeLayer.set(null);
    this.selectedAtomId.set(null);
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
    this.showGraphModal.set(true);
  }

  onCloseGraph(): void {
    this.showGraphModal.set(false);
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

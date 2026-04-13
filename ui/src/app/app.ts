// Aurora v2 — Root App Component
import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from './services/language.service';
import { GraphDataService } from './services/graph-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  searchQuery = '';
  proofActive = false; // State B 활성 시 상단 검색 표시

  constructor(
    public lang: LanguageService,
    private graphData: GraphDataService,
  ) {}

  async ngOnInit(): Promise<void> {
    await Promise.all([
      this.lang.init(),
      this.graphData.load(),
    ]);
  }

  // ProofShell에서 상태 변경 수신
  @HostListener('window:aurora-state-change', ['$event'])
  onStateChange(event: Event): void {
    this.proofActive = (event as CustomEvent).detail.state === 'proof';
  }

  toggleLang(): void {
    this.lang.toggle();
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      window.dispatchEvent(new CustomEvent('aurora-search', {
        detail: { query: this.searchQuery.trim() }
      }));
      this.searchQuery = '';
    }
  }
}

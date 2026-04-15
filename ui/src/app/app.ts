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

  // 브랜드 클릭 → 랜딩(초기화면)으로 복귀
  onBrandClick(event: Event): void {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent('aurora-back-to-landing'));
  }

  // 채팅 이력에서 검색창에 질문 내용 반영 수신
  @HostListener('window:aurora-populate-search', ['$event'])
  onPopulateSearch(event: Event): void {
    this.searchQuery = (event as CustomEvent).detail.query;
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

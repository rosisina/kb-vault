// Aurora v2 — Landing View (State A: 7-Layer 탑 중앙)
// ProofShell 내부 컴포넌트 — 라우트 없음, Output 이벤트로 상태 전환
import { Component, OnInit, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';

interface LayerStat {
  num: number;
  count: number;
  corroborated: number;
  color: string;
  pct: number;
  corrPct: number;
}

@Component({
  selector: 'app-landing-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingViewComponent implements OnInit {
  @Output() layerSelect = new EventEmitter<number>();
  @Output() search = new EventEmitter<string>();
  @Output() guidedProof = new EventEmitter<void>();

  layers = signal<LayerStat[]>([]);
  totalAtoms = signal(0);
  contradictions = signal(0);
  corroborationPct = signal(0);
  strongCount = signal(0);
  fractureCount = signal(0);
  totalRecordNos = signal(0);
  searchQuery = '';

  // 각 층위를 대표하는 요약 기술 (호버 시 tooltip)
  layerDescriptions: Record<number, string> = {
    1: 'DIDC 해킹 근원서버 은폐의 출발점 — Active-X 제거 사업으로 舊KIATIS 이력 삭제',
    2: '新KIATIS 추진체계 조작 — 장교 개인 경력 자력을 허위 편성',
    3: '국방정보화카르텔 공모 구조 — 국전원 전속 후 SW개발사업관리 착수·종결 조작',
    4: '표적수사 설계의 기반 — 新KIATIS 개발·운영·시험평가 전·중·후 조작',
    5: '한지훈 중령 인권침해·고립화 — 허위 갑질 신고와 조사본부의 조작 감사',
    6: '증거 인멸·문서 조작 — 군 검찰단의 사기 수사와 범죄자 낙인',
    7: '국방부의 지속적 범죄 정당화 — 진정서 제출·수사 촉구 후 기소유예',
  };

  // Layer 부제 (essentialist §1.2: 각 Layer의 괄호 설명)
  layerSubtitles: Record<number, string> = {
    1: '(DIDC 해킹 근원서버 은폐의 출발점)',
    2: '',
    3: '(국방정보화카르텔 공모 구조)',
    4: '(표적수사 설계의 기반)',
    5: '(한지훈 중령 인권침해·고립화)',
    6: '(증거 인멸·문서 조작)',
    7: '(국방부의 지속적 범죄 정당화)',
  };

  private layerColors = [
    '', '#b03030', '#cc5a10', '#d4881f', '#2a6e35',
    '#1a5ab0', '#5a2a9a', '#9a2060',
  ];

  constructor(
    private graphData: GraphDataService,
    public lang: LanguageService,
  ) {}

  ngOnInit(): void {
    const stats = this.graphData.getStats();
    this.totalAtoms.set(stats.nodeCount);
    this.contradictions.set(stats.contradictionCount);
    this.corroborationPct.set(stats.corroborationPct);
    this.strongCount.set(stats.strongCount);
    this.fractureCount.set(stats.fractureCount);
    this.totalRecordNos.set(stats.totalRecordNos);

    const max = Math.max(...stats.layerCounts.map(l => l.count), 1);
    this.layers.set(
      stats.layerCounts.map(l => ({
        num: l.layer,
        count: l.count,
        corroborated: l.corroborated,
        color: this.layerColors[l.layer],
        pct: Math.round((l.count / max) * 100),
        corrPct: l.count > 0 ? Math.round((l.corroborated / l.count) * 100) : 0,
      }))
    );
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery.trim());
    }
  }

  onLayerClick(layer: number): void {
    this.layerSelect.emit(layer);
  }

  onGuidedProof(): void {
    this.guidedProof.emit();
  }
}

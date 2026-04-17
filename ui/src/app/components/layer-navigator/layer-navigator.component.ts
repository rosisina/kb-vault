// Aurora v2 — Layer Navigator (좌측 패널: 첫 화면과 동일 Layer 정보)
// 폭 200px, 각 Layer에 번호+색+제목 표시, 호버 시 요약
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-layer-navigator',
  standalone: true,
  template: `
    <nav class="layer-nav">
      <button class="back-btn" (click)="backToLanding.emit()"
              [title]="lang.lang() === 'kr' ? '첫 화면으로' : 'Back to home'">
        ← {{ lang.lang() === 'kr' ? '홈' : 'Home' }}
      </button>

      <div class="nav-label">
        {{ lang.lang() === 'kr' ? '7-Layer 증명 구조' : '7-Layer Proof Structure' }}
      </div>

      @for (layer of layers; track layer.num) {
        <button
          class="layer-btn"
          [class.active]="layer.num === activeLayer"
          [title]="lang.lang() === 'kr' ? layer.tooltip : layer.tooltipEn"
          (click)="layerSelect.emit(layer.num)">
          <span class="layer-num" [style.color]="layer.color">{{ layer.num }}</span>
          <span class="layer-indicator" [style.background]="layer.color"></span>
          <span class="layer-title">{{ lang.lang() === 'kr' ? layer.shortName : layer.shortNameEn }}</span>
        </button>
      }
    </nav>
  `,
  styles: [`
    .layer-nav {
      display: flex;
      flex-direction: column;
      padding: 12px 8px;
      gap: 2px;
      height: 100%;
    }

    .back-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 12px;
      background: transparent;
      border: none;
      color: #5f6368;
      font-size: 0.85rem;
      cursor: pointer;
      border-radius: 8px;
      margin-bottom: 8px;
      &:hover { background: #dde3ea; color: #1a1a1a; }
    }

    .nav-label {
      font-size: 0.72rem;
      font-weight: 600;
      color: #5f6368;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 4px 12px 8px;
    }

    .layer-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      background: transparent;
      border: none;
      cursor: pointer;
      border-radius: 8px;
      text-align: left;
      width: 100%;
      transition: background-color 0.2s ease;

      &:hover {
        background: #dde3ea;
      }

      &.active {
        background: #d3e3fd;
      }
    }

    .layer-num {
      font-size: 1rem;
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      min-width: 18px;
      text-align: center;
    }

    .layer-indicator {
      width: 4px;
      height: 24px;
      border-radius: 2px;
      flex-shrink: 0;
    }

    .layer-title {
      font-size: 0.8rem;
      color: #444746;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      .active & {
        color: #1a1a1a;
        font-weight: 500;
      }
    }
  `],
})
export class LayerNavigatorComponent {
  @Input() activeLayer: number | null = null;
  @Output() layerSelect = new EventEmitter<number>();
  @Output() backToLanding = new EventEmitter<void>();

  constructor(public lang: LanguageService) {}

  // 1→7 순서: 시간순, 서사적 흐름
  layers: { num: number; color: string; shortName: string; shortNameEn: string; tooltip: string; tooltipEn: string }[] = [
    { num: 1, color: '#b71c1c',
      shortName: 'Active-X · 舊KIATIS', shortNameEn: 'Active-X · Legacy KIATIS',
      tooltip: 'DIDC 해킹 근원서버 은폐의 출발점 — Active-X 제거 사업 간 舊KIATIS 이력 제거',
      tooltipEn: 'Starting point of DIDC hack server concealment — Legacy KIATIS history deleted during Active-X removal project' },
    { num: 2, color: '#e65100',
      shortName: '新KIATIS 추진체계 조작', shortNameEn: 'New KIATIS Structure Manipulation',
      tooltip: '新KIATIS 사업 추진체계 및 장교 개인 자력 조작',
      tooltipEn: 'New KIATIS procurement structure and officer career record manipulation' },
    { num: 3, color: '#f57f17',
      shortName: '국전원 · 사업관리', shortNameEn: 'DCIA Transfer · SW Management',
      tooltip: '국방정보화카르텔 공모 구조 — 국전원 전속 후 SW개발사업관리 착수·종결',
      tooltipEn: 'Defense IT cartel conspiracy — SW development management manipulation after DCIA transfer' },
    { num: 4, color: '#1b5e20',
      shortName: '新KIATIS 시험평가 조작', shortNameEn: 'New KIATIS T&E Manipulation',
      tooltip: '표적수사 설계의 기반 — 新KIATIS 개발·운영·시험평가 전·중·후 조작',
      tooltipEn: 'Foundation for targeted prosecution — New KIATIS test & evaluation manipulated before, during, and after' },
    { num: 5, color: '#0d47a1',
      shortName: '허위 갑질 · 조작 감사', shortNameEn: 'False Harassment · Fabricated Audit',
      tooltip: '한지훈 중령 인권침해·고립화 — 허위 갑질 신고와 조사본부의 조작 감사',
      tooltipEn: 'Human rights violations against Lt. Col. Han — false harassment complaints and fabricated audit' },
    { num: 6, color: '#4a148c',
      shortName: '군 검찰단 사기 수사', shortNameEn: 'Military Prosecution Fraud',
      tooltip: '증거 인멸·문서 조작 — 군 검찰단의 사기 수사와 범죄자 낙인',
      tooltipEn: 'Evidence destruction and document fabrication — fraudulent military prosecution and criminal branding' },
    { num: 7, color: '#880e4f',
      shortName: '진정서 · 기소유예', shortNameEn: 'Petition · Prosecutorial Deferral',
      tooltip: '국방부의 지속적 범죄 정당화 — 진정서 제출·수사 촉구 후 기소유예',
      tooltipEn: 'MND ongoing legitimization of crime — prosecutorial deferral despite petitions and investigation demands' },
  ];
}

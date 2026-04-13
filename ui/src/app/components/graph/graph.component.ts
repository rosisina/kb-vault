// Aurora v2 — Graph Component (Cytoscape.js + Proof Level)
// CP-2에서 Cytoscape 통합 예정. 현재는 데이터 로딩 확인용 placeholder.
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { CytoscapeElements } from '../../models/graph.models';

@Component({
  selector: 'app-graph',
  standalone: true,
  template: `
    <div class="graph-page">
      <div class="proof-level-selector">
        @for (pl of proofLevels; track pl.level) {
          <button
            class="proof-level-btn"
            [class.active]="currentLevel() === pl.level"
            (click)="setLevel(pl.level)">
            {{ lang.lang() === 'kr' ? pl.nameKr : pl.name }}
          </button>
        }
      </div>

      <div class="graph-stats">
        <span>{{ elements().nodes.length }} nodes</span>
        <span class="dot">·</span>
        <span>{{ elements().edges.length }} edges</span>
        @if (layerFilter()) {
          <span class="dot">·</span>
          <span>Layer {{ layerFilter() }}</span>
        }
      </div>

      <div class="graph-container" id="cy">
        <!-- Cytoscape mount point — CP-2 -->
        <div class="placeholder">
          <p>Cytoscape.js visualization</p>
          <p class="sub">{{ currentLevelDesc() }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .graph-page {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: calc(100vh - 48px);
    }
    .proof-level-selector {
      display: flex;
      gap: 8px;
    }
    .proof-level-btn {
      padding: 8px 16px;
      font-size: 13px;
      font-family: 'Pretendard', sans-serif;
      color: var(--text-secondary);
      background: var(--surface-2);
      border: 1px solid var(--card-border);
      border-radius: 8px;
      cursor: pointer;
      transition: all 150ms ease;
      &:hover { background: var(--surface-3); }
      &.active {
        color: var(--text-primary);
        background: var(--surface-4);
        border-color: rgba(255,255,255,0.12);
      }
    }
    .graph-stats {
      font-size: 12px;
      color: var(--text-tertiary);
      display: flex;
      gap: 8px;
    }
    .dot { color: var(--text-disabled); }
    .graph-container {
      flex: 1;
      background: var(--surface-1);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .placeholder {
      text-align: center;
      color: var(--text-tertiary);
      p { margin: 4px 0; }
      .sub { font-size: 12px; }
    }
  `],
})
export class GraphComponent implements OnInit {
  proofLevels: ReturnType<GraphDataService['getProofLevels']> = [];
  currentLevel = signal(1);
  layerFilter = signal<number | null>(null);
  elements = signal<CytoscapeElements>({ nodes: [], edges: [] });
  currentLevelDesc = signal('');

  constructor(
    private graphData: GraphDataService,
    public lang: LanguageService,
    private route: ActivatedRoute,
  ) {
    this.proofLevels = this.graphData.getProofLevels();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['level']) this.currentLevel.set(+params['level']);
      if (params['layer']) this.layerFilter.set(+params['layer']);
      this.refresh();
    });
    this.refresh();
  }

  setLevel(level: number): void {
    this.currentLevel.set(level);
    this.refresh();
  }

  private refresh(): void {
    const el = this.graphData.getProofLevel(
      this.currentLevel(),
      this.layerFilter() ?? undefined,
    );
    this.elements.set(el);
    const pl = this.proofLevels.find(p => p.level === this.currentLevel());
    this.currentLevelDesc.set(
      this.lang.lang() === 'kr' ? (pl?.descriptionKr ?? '') : (pl?.description ?? '')
    );
  }
}

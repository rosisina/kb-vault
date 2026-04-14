// Aurora v2 CP-2 — Graph Component
// Atom 중심 그래프 + Obsidian 스타일 필터바 + Cytoscape.js
import {
  Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges,
  signal, ElementRef, ViewChild, AfterViewInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import cytoscape, { Core, ElementDefinition } from 'cytoscape';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { GraphNode, GraphEdge, ProofChain } from '../../models/graph.models';

const LAYER_COLORS: Record<number, string> = {
  1: '#FF6B6B', 2: '#FFA07A', 3: '#FFD700', 4: '#98FB98',
  5: '#87CEEB', 6: '#DDA0DD', 7: '#D3D3D3',
};

const EDGE_COLORS: Record<string, string> = {
  CAUSES: '#1565c0', CORROBORATES: '#2e7d32', OPPOSES: '#f57f17',
  SUPERSEDES: '#6a1b9a', RELATED: '#9e9e9e',
};

type GraphMode = 'atom' | 'full';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="graph-wrapper">
      <!-- 모드 선택 + 필터바 (Obsidian 스타일) -->
      <div class="graph-toolbar">
        <div class="mode-row">
          @if (focusAtomId) {
            <button class="mode-btn" [class.active]="mode() === 'atom'" (click)="setMode('atom')">
              {{ lang.lang() === 'kr' ? 'Atom 중심' : 'Atom Focus' }}
            </button>
          }
          <button class="mode-btn" [class.active]="mode() === 'full'" (click)="setMode('full')">
            {{ lang.lang() === 'kr' ? '전체 네트워크' : 'Full Network' }}
          </button>
        </div>

        <!-- Obsidian 스타일 필터바 -->
        <div class="filter-bar">
          <!-- Layer 토글 -->
          <div class="filter-group">
            <span class="filter-label">Layer</span>
            @for (l of [1,2,3,4,5,6,7]; track l) {
              <button class="layer-toggle"
                      [class.active]="layerToggles()[l]"
                      [style.border-color]="layerToggles()[l] ? layerColorMap[l] : '#e0e0e0'"
                      [style.color]="layerToggles()[l] ? layerColorMap[l] : '#9e9e9e'"
                      (click)="toggleLayer(l)">
                L{{ l }}
              </button>
            }
          </div>

          <!-- 관계 유형 토글 -->
          <div class="filter-group">
            <span class="filter-label">{{ lang.lang() === 'kr' ? '관계' : 'Edges' }}</span>
            @for (et of edgeTypes; track et.key) {
              <button class="edge-toggle"
                      [class.active]="edgeToggles()[et.key]"
                      [style.border-color]="edgeToggles()[et.key] ? et.color : '#e0e0e0'"
                      (click)="toggleEdge(et.key)">
                {{ et.label }}
              </button>
            }
          </div>

          <!-- claimType 필터 -->
          <div class="filter-group">
            <select class="filter-select" (change)="onClaimTypeChange($event)">
              <option value="">{{ lang.lang() === 'kr' ? '전체 유형' : 'All Types' }}</option>
              @for (ct of claimTypes; track ct.key) {
                <option [value]="ct.key">{{ ct.label }}</option>
              }
            </select>

            <!-- 인물 필터 -->
            <select class="filter-select" (change)="onPersonChange($event)">
              <option value="">{{ lang.lang() === 'kr' ? '전체 인물' : 'All Persons' }}</option>
              @for (p of personList; track p) {
                <option [value]="p">{{ p }}</option>
              }
            </select>
          </div>
        </div>
      </div>

      <!-- 통계 -->
      <div class="graph-info">
        <span class="graph-stat">{{ nodeCount() }} nodes · {{ edgeCount() }} edges</span>
        @if (mode() === 'atom' && focusAtomId) {
          <span class="graph-stat focus-label">{{ focusLabel() }}</span>
        }
      </div>

      <!-- Cytoscape 컨테이너 -->
      <div class="cy-container" #cyContainer></div>

      <!-- 범례 -->
      <div class="graph-legend">
        <span class="legend-item"><span class="legend-line" style="background:#1565c0"></span> CAUSES</span>
        <span class="legend-item"><span class="legend-line" style="background:#2e7d32"></span> CORROBORATES</span>
        <span class="legend-item"><span class="legend-line" style="background:#f57f17;border-style:dashed"></span> OPPOSES</span>
        <span class="legend-item"><span class="legend-line" style="background:#6a1b9a"></span> SUPERSEDES</span>
      </div>
    </div>
  `,
  styles: [`
    .graph-wrapper { display: flex; flex-direction: column; height: 100%; gap: 6px; }
    .graph-toolbar { display: flex; flex-direction: column; gap: 6px; flex-shrink: 0; }
    .mode-row { display: flex; gap: 4px; }
    .mode-btn {
      padding: 5px 12px; font-size: 0.75rem; border: 1px solid #e0e0e0;
      border-radius: 6px; background: #f5f5f5; color: var(--aurora-text-secondary);
      cursor: pointer; transition: all 0.15s;
      &:hover { background: #eee; }
      &.active { color: var(--aurora-text); background: white; border-color: var(--aurora-primary-light); font-weight: 600; }
    }
    .filter-bar { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
    .filter-group { display: flex; align-items: center; gap: 3px; }
    .filter-label { font-size: 0.68rem; color: #9e9e9e; font-weight: 600; text-transform: uppercase; margin-right: 2px; }
    .layer-toggle, .edge-toggle {
      padding: 2px 6px; font-size: 0.68rem; font-family: 'JetBrains Mono', monospace;
      border: 1.5px solid #e0e0e0; border-radius: 4px; background: white;
      cursor: pointer; transition: all 0.15s;
      &.active { font-weight: 700; background: rgba(0,0,0,0.03); }
      &:hover { background: #f5f5f5; }
    }
    .filter-select {
      padding: 3px 6px; font-size: 0.72rem; border: 1px solid #e0e0e0;
      border-radius: 4px; background: white; cursor: pointer;
      &:focus { border-color: var(--aurora-primary-light); outline: none; }
    }
    .graph-info {
      display: flex; gap: 12px; font-size: 0.72rem;
      color: var(--aurora-text-secondary); font-family: 'JetBrains Mono', monospace; flex-shrink: 0;
    }
    .focus-label { color: var(--aurora-primary); font-weight: 600; }
    .cy-container { flex: 1; min-height: 300px; background: #fafbfe; border: 1px solid #e8eaf6; border-radius: 8px; }
    .graph-legend {
      display: flex; gap: 14px; font-size: 0.68rem; color: var(--aurora-text-secondary); flex-shrink: 0;
    }
    .legend-item { display: flex; align-items: center; gap: 4px; }
    .legend-line { display: inline-block; width: 18px; height: 2px; border-radius: 1px; }
  `],
})
export class GraphComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('cyContainer', { static: true }) cyRef!: ElementRef<HTMLDivElement>;

  @Input() layerFilter: number | null = null;
  @Input() chainMode = false;
  @Input() chainData: ProofChain | null = null;
  @Input() focusAtomId: string | null = null;
  @Output() nodeSelect = new EventEmitter<string>();

  mode = signal<GraphMode>('full');
  nodeCount = signal(0);
  edgeCount = signal(0);
  focusLabel = signal('');

  // Filter state
  layerToggles = signal<Record<number, boolean>>({1:true,2:true,3:true,4:true,5:true,6:true,7:true});
  edgeToggles = signal<Record<string, boolean>>({CAUSES:true,CORROBORATES:true,OPPOSES:true,SUPERSEDES:true,RELATED:false});
  claimTypeFilter = signal<string | null>(null);
  personFilter = signal<string | null>(null);

  layerColorMap = LAYER_COLORS;
  edgeTypes = [
    { key: 'CAUSES', label: 'CAUSES', color: '#1565c0' },
    { key: 'CORROBORATES', label: 'CORR', color: '#2e7d32' },
    { key: 'OPPOSES', label: 'OPPO', color: '#f57f17' },
    { key: 'SUPERSEDES', label: 'SUPER', color: '#6a1b9a' },
    { key: 'RELATED', label: 'REL', color: '#9e9e9e' },
  ];
  claimTypes = [
    { key: 'prosecution_misconduct', label: '검찰비위' },
    { key: 'document_fabrication', label: '문서위변조' },
    { key: 'evidence_concealment', label: '증거은폐' },
    { key: 'regulatory_manipulation', label: '훈령조작' },
    { key: 'testimony_evidence', label: '증언증거' },
    { key: 'conspiracy_structure', label: '공모구조' },
    { key: 'human_rights_violation', label: '인권침해' },
    { key: 'procedural_violation', label: '절차위반' },
    { key: 'institutional_obstruction', label: '제도적방해' },
    { key: 'technical_proof', label: '기술적증거' },
    { key: 'temporal_manipulation', label: '시간적조작' },
  ];
  personList = [
    '한지훈', '김민수', '이지영', '이준호', '박성호', '김수진',
    '장우진', '이태호', '임형규', '안세준', '진상호', '양준승',
  ];

  private cy: Core | null = null;

  constructor(
    public graphData: GraphDataService,
    public lang: LanguageService,
  ) {}

  ngOnInit(): void {
    if (this.focusAtomId) {
      this.mode.set('atom');
      const node = this.graphData.getNodeById(this.focusAtomId);
      this.focusLabel.set(node?.title.slice(0, 50) ?? '');
    }
  }

  ngAfterViewInit(): void { this.render(); }
  ngOnChanges(): void { this.render(); }

  ngOnDestroy(): void {
    this.cy?.destroy();
    this.cy = null;
  }

  setMode(m: GraphMode): void {
    this.mode.set(m);
    this.render();
  }

  toggleLayer(l: number): void {
    const t = { ...this.layerToggles() };
    t[l] = !t[l];
    this.layerToggles.set(t);
    this.render();
  }

  toggleEdge(type: string): void {
    const t = { ...this.edgeToggles() };
    t[type] = !t[type];
    this.edgeToggles.set(t);
    this.render();
  }

  onClaimTypeChange(e: Event): void {
    this.claimTypeFilter.set((e.target as HTMLSelectElement).value || null);
    this.render();
  }

  onPersonChange(e: Event): void {
    this.personFilter.set((e.target as HTMLSelectElement).value || null);
    this.render();
  }

  private render(): void {
    if (!this.cyRef?.nativeElement) return;

    if (this.mode() === 'atom' && this.focusAtomId) {
      this.renderAtomNeighborhood();
    } else {
      this.renderFilteredFull();
    }
  }

  // ── Atom 중심: 1-hop 이웃 네트워크 ──
  private renderAtomNeighborhood(): void {
    const focusId = this.focusAtomId!;
    const edges = this.graphData.getEdgesForNode(focusId);
    const neighborIds = new Set<string>([focusId]);
    const filteredEdges: GraphEdge[] = [];

    for (const e of edges) {
      if (!this.edgeToggles()[e.type]) continue;
      const otherId = e.source === focusId ? e.target : e.source;
      const otherNode = this.graphData.getNodeById(otherId);
      if (!otherNode || !this.layerToggles()[otherNode.layer]) continue;
      neighborIds.add(otherId);
      filteredEdges.push(e);
    }

    // Also get 2nd-hop for CAUSES
    const firstHopIds = new Set(neighborIds);
    for (const nid of firstHopIds) {
      if (nid === focusId) continue;
      for (const e of this.graphData.getEdgesForNode(nid)) {
        if (e.type !== 'CAUSES' || !this.edgeToggles()['CAUSES']) continue;
        const otherId = e.source === nid ? e.target : e.source;
        if (neighborIds.has(otherId)) continue;
        const otherNode = this.graphData.getNodeById(otherId);
        if (!otherNode || !this.layerToggles()[otherNode.layer]) continue;
        neighborIds.add(otherId);
        filteredEdges.push(e);
      }
    }

    const nodes: GraphNode[] = [];
    for (const id of neighborIds) {
      const n = this.graphData.getNodeById(id);
      if (n) nodes.push(n);
    }

    this.buildCytoscape(nodes, filteredEdges, focusId);
  }

  // ── 전체 네트워크 + Obsidian 필터 ──
  private renderFilteredFull(): void {
    const allNodes = this.graphData.getNodes();
    const lt = this.layerToggles();
    const ct = this.claimTypeFilter();
    const pf = this.personFilter();

    let nodes = allNodes.filter(n => lt[n.layer]);
    if (ct) nodes = nodes.filter(n => n.claimType === ct);
    if (pf) nodes = nodes.filter(n => n.title.includes(pf));

    const nodeIds = new Set(nodes.map(n => n.id));
    const et = this.edgeToggles();
    const g = this.graphData;
    const allEdges: GraphEdge[] = [];

    // Collect edges between visible nodes
    for (const n of nodes) {
      for (const e of g.getEdgesForNode(n.id)) {
        if (!et[e.type]) continue;
        if (nodeIds.has(e.source) && nodeIds.has(e.target)) {
          allEdges.push(e);
        }
      }
    }

    // Deduplicate edges
    const edgeSet = new Set<string>();
    const edges = allEdges.filter(e => {
      const key = `${e.source}-${e.target}-${e.type}`;
      if (edgeSet.has(key)) return false;
      edgeSet.add(key);
      return true;
    });

    this.buildCytoscape(nodes, edges, this.focusAtomId);
  }

  private buildCytoscape(nodes: GraphNode[], edges: GraphEdge[], focusId: string | null): void {
    this.cy?.destroy();

    this.nodeCount.set(nodes.length);
    this.edgeCount.set(edges.length);

    if (nodes.length === 0) {
      this.cy = null;
      return;
    }

    const elements: ElementDefinition[] = [
      ...nodes.map(n => ({
        data: {
          id: n.id,
          label: n.title.slice(0, 50),
          layer: n.layer,
          color: LAYER_COLORS[n.layer] || '#999',
          isFocus: n.id === focusId,
        },
      })),
      ...edges.map((e, i) => ({
        data: {
          id: `e-${i}-${e.source.slice(-6)}-${e.target.slice(-6)}`,
          source: e.source,
          target: e.target,
          type: e.type,
          color: EDGE_COLORS[e.type] || '#999',
        },
      })),
    ];

    const layout = nodes.length <= 20 ? 'breadthfirst' : 'cose';

    this.cy = cytoscape({
      container: this.cyRef.nativeElement,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(label)',
            'background-color': 'data(color)',
            'color': '#333',
            'font-size': '9px',
            'text-wrap': 'wrap' as any,
            'text-max-width': '100px',
            'width': 24,
            'height': 24,
            'text-valign': 'bottom',
            'text-halign': 'center',
            'text-margin-y': 3,
          } as any,
        },
        {
          selector: 'node[?isFocus]',
          style: {
            'width': 36, 'height': 36,
            'border-width': 3, 'border-color': '#534bae',
            'font-weight': 'bold', 'font-size': '11px',
          } as any,
        },
        {
          selector: 'edge',
          style: {
            'line-color': 'data(color)',
            'target-arrow-color': 'data(color)',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'width': 1.5, 'arrow-scale': 0.7,
          } as any,
        },
        {
          selector: 'edge[type = "OPPOSES"]',
          style: { 'line-style': 'dashed', 'width': 2 } as any,
        },
      ],
      layout: {
        name: layout,
        ...(layout === 'breadthfirst' ? { directed: true, spacingFactor: 1.3 } : {}),
        ...(layout === 'cose' ? { idealEdgeLength: () => 80, nodeOverlap: 15, animate: false } : {}),
      } as any,
      minZoom: 0.2, maxZoom: 4, wheelSensitivity: 0.3,
    });

    this.cy.on('layoutstop', () => this.cy?.fit(undefined, 30));
    this.cy.on('tap', 'node', (evt) => {
      const nid = evt.target.id();
      if (nid) this.nodeSelect.emit(nid);
    });
  }
}

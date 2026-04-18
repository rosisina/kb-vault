// Aurora v2 — Landing: Proof Constellation (증명의 별자리)
// 7 layers in heptagonal orbit, SVG connections, tools row, search, case overview
import { Component, OnInit, Output, EventEmitter, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { GraphNode } from '../../models/graph.models';

interface LayerStat {
  num: number; count: number; corroborated: number;
  color: string; corrPct: number;
}

interface NodePosition {
  num: number; x: number; y: number;
  hoverDir: 'below' | 'right' | 'right-above' | 'right-below' | 'left-below' | 'left' | 'left-above';
}

interface ConnectionLine {
  from: number; to: number;
  x1: number; y1: number; x2: number; y2: number;
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
  @Output() metricClick = new EventEmitter<string>();
  @Output() toolClick = new EventEmitter<string>();
  @Output() aboutOpen = new EventEmitter<void>();
  @Output() atomSelect = new EventEmitter<string>();

  layers = signal<LayerStat[]>([]);
  searchQuery = '';
  hoveredLayer = signal<number | null>(null);
  hoveredTool = signal<string | null>(null);
  hoveredCase = signal<string | null>(null);
  activeCase = signal<string | null>(null);
  activeEvidenceLayer = signal<number>(1);

  // 원형 배치 좌표
  nodePositions = signal<NodePosition[]>([]);
  connections = signal<ConnectionLine[]>([]);
  // Chain 좌측 시작 위치 (constellation 좌측 기준, L2/3/4 hover 카드 바깥)
  chainLeftPx = signal(0);

  // 통계 (호버 카드에 분산)
  totalAtoms = signal(0);
  fractureCount = signal(0);
  corroborationPct = signal(0);
  strongCount = signal(0);
  totalRecordNos = signal(0);

  private readonly RADIUS = 185;
  private readonly CX = 240;
  private readonly CY = 240;

  // 질문 예시
  exampleQueries: { kr: string; en: string }[] = [
    { kr: '舊KIATIS 해킹 경로는 어떻게 은폐되었나?', en: 'How was the old KIATIS hacking route concealed?' },
    { kr: '한지훈 중령에 대한 허위 신고 시점과 동기는?', en: 'When and why was the false report filed against Lt. Col. Han?' },
    { kr: '군 검찰의 증거 인멸 방법은?', en: 'How did military prosecutors destroy evidence?' },
  ];

  layerColors = [
    '', '#b03030', '#cc5a10', '#d4881f', '#2a6e35',
    '#1a5ab0', '#5a2a9a', '#9a2060',
  ];

  // N:N 상호연관 네트워크
  layerConnections: Record<number, number[]> = {
    1: [3, 5, 6, 7],
    2: [3, 4],
    3: [1, 2, 4, 6],
    4: [2, 3, 5, 6],
    5: [1, 4, 6],
    6: [1, 3, 4, 5, 7],
    7: [1, 2, 3, 4, 5, 6],
  };

  // Layer 호버 컨텐츠
  layerHovers: Record<number, { kr: string; en: string }> = {
    1: {
      kr: 'Active-X 제거 사업으로 舊KIATIS 이력 삭제\nVPN 없이 15년 운영된 서버 = 해킹 경로\n→ L3 카르텔 · L5 허위신고 · L6 수사 · L7 기소유예와 연관',
      en: 'Old KIATIS history deleted via Active-X removal\nServer without VPN for 15 years = hacking route\n→ Connected to L3 Cartel · L5 False report · L6 Prosecution · L7 Suspension',
    },
    2: {
      kr: '新KIATIS 추진체계 조작, 장교 경력 허위 편성\n→ L3 카르텔 공모 · L4 시험평가 조작과 연관',
      en: 'New KIATIS structure manipulation, officer records falsified\n→ Connected to L3 Cartel · L4 Evaluation manipulation',
    },
    3: {
      kr: '국전원 전속 후 SW개발사업관리 조작\n국방정보화카르텔 공모 구조의 핵심\n→ L1 은폐 · L2 경력 · L4 시험평가 · L6 수사와 연관',
      en: 'SW project management manipulation after NIS transfer\nCore of Defense IT Cartel conspiracy\n→ Connected to L1 · L2 · L4 · L6',
    },
    4: {
      kr: '新KIATIS 시험평가 전·중·후 조작\n표적수사 설계의 기반\n→ L2 경력 · L3 카르텔 · L5 허위신고 · L6 수사와 연관',
      en: 'Evaluation manipulated before, during, after\nFoundation for targeted investigation\n→ Connected to L2 · L3 · L5 · L6',
    },
    5: {
      kr: '사실 공개 48시간 후 허위 갑질 신고\n6개월 고립 — 인권침해 구조\n→ L1 발각 방지 · L4 시험평가 · L6 수사와 연관',
      en: 'False report 48hrs after disclosure, 6 months isolation\n→ Connected to L1 · L4 · L6',
    },
    6: {
      kr: '군 검찰단 증거 인멸·문서 조작\n범죄자 프레이밍 완성\n→ L1 · L3 · L4 · L5 · L7 전체와 연관',
      en: 'Evidence destruction, document forgery\nCriminal framing completed\n→ Connected to L1 · L3 · L4 · L5 · L7',
    },
    7: {
      kr: '진정서·수사 촉구에도 기소유예\n전체 범죄의 제도적 정당화\n→ 모든 층위(L1~L6)와 연관',
      en: 'Suspended prosecution despite petitions\nInstitutional justification of all crimes\n→ Connected to all layers (L1–L6)',
    },
  };

  layerTitles: Record<number, { kr: string; en: string }> = {
    1: { kr: '해킹 서버 은폐', en: 'Server concealment' },
    2: { kr: '경력 조작', en: 'Record manipulation' },
    3: { kr: '사업관리 장악', en: 'Project control' },
    4: { kr: '시험평가 조작', en: 'Eval manipulation' },
    5: { kr: '허위 신고·고립', en: 'False report' },
    6: { kr: '사기 수사·낙인', en: 'Prosecution fraud' },
    7: { kr: '기소유예', en: 'Suspension' },
  };

  // Tool 정의
  tools = [
    {
      id: 'guided', icon: 'verified',
      kr: 'Guided Proof', en: 'Guided Proof',
      hoverKr: '', hoverEn: '',
    },
    {
      id: 'chain', icon: 'account_tree',
      kr: '증명 체인', en: 'Proof Chain',
      hoverKr: '발견사항 간 인과관계 추적\nCAUSES → CORROBORATES → OPPOSES\n각 노드에서 원본 증거까지 이동 가능',
      hoverEn: 'Trace causal relationships\nCAUSES → CORROBORATES → OPPOSES\nNavigate from each node to original evidence',
    },
    {
      id: 'fractures', icon: 'compare_arrows',
      kr: '균열', en: 'Fractures',
      hoverKr: '', hoverEn: '',
    },
    {
      id: 'filter', icon: 'tune',
      kr: '필터', en: 'Filter',
      hoverKr: '균열 유형 · 증거 출처 · 인물 · 조직\n판정 강도별 필터링으로 증거 탐색',
      hoverEn: 'Filter by fracture type, source, person\norganization, verdict strength',
    },
  ];

  // 사건 개요
  caseContent: Record<string, { kr: string; en: string }> = {
    incident: {
      kr: '2016년 북한이 국방통합데이터센터(DIDC)를 해킹. 침입 경로는 VPN 없이 15년간 운영된 舊KIATIS.',
      en: 'In 2016, North Korea hacked DIDC. The intrusion route was old KIATIS, operated 15 years without VPN.',
    },
    coverup: {
      kr: '발견자인 32년 복무 장교를 범죄자로 낙인. 사실 공개 48시간 만에 허위 갑질 신고 접수.',
      en: 'The 32-year officer who discovered this was framed. False report filed exactly 48 hours after disclosure.',
    },
    evidence: {
      kr: '군 검찰이 "조작했다"는 시스템이 시험평가 기간 중 존재하지 않았음을 증명하는 공문서.',
      en: 'Official document proving the systems prosecutors claimed were "manipulated" did not exist during evaluation.',
    },
    structure: {
      kr: 'APT 표적 공격 구조: 표적 선정(48시간) → 지속성(6개월 고립) → 정교함(증거 파괴 → 낙인 → 차단).',
      en: 'APT-style attack: Targeting (48hrs) → Persistence (6mo isolation) → Sophistication (destruction → labeling → blocking).',
    },
    implications: {
      kr: '다수→1인 구조: 국가 권력이 사이버보안 기술로 한 개인을 체계적으로 파괴한 새로운 형태의 조직적 악.',
      en: 'Many-to-one: state power systematically destroyed an individual using cybersecurity — a new form of organized evil.',
    },
  };

  constructor(
    private graphData: GraphDataService,
    public lang: LanguageService,
  ) {}

  ngOnInit(): void {
    const stats = this.graphData.getStats();
    this.totalAtoms.set(stats.nodeCount);
    this.fractureCount.set(stats.fractureCount);
    this.corroborationPct.set(stats.corroborationPct);
    this.strongCount.set(stats.strongCount);
    this.totalRecordNos.set(stats.totalRecordNos);

    const layerStats = stats.layerCounts.map(l => ({
      num: l.layer,
      count: l.count,
      corroborated: l.corroborated,
      color: this.layerColors[l.layer],
      corrPct: l.count > 0 ? Math.round((l.corroborated / l.count) * 100) : 0,
    }));
    this.layers.set(layerStats);

    // Guided Proof 호버에 통계 삽입
    this.tools[0].hoverKr = `가장 강력한 증거부터 순서대로 추적\n${stats.corroborationPct}% 입증 · ${stats.strongCount}건 강력 입증\n${stats.nodeCount}건 발견사항 · ${stats.totalRecordNos} 증거 기록`;
    this.tools[0].hoverEn = `Trace from the strongest evidence in sequence\n${stats.corroborationPct}% corroborated · ${stats.strongCount} strong\n${stats.nodeCount} findings · ${stats.totalRecordNos} evidence records`;

    // 균열 호버에 통계 삽입
    this.tools[2].hoverKr = `국방 조직의 공식 서사가 스스로 깨지는 ${stats.fractureCount}건의 지점\n자기모순 · 반증 · 조작 징후 · 선별 적용 · 부재 논증`;
    this.tools[2].hoverEn = `${stats.fractureCount} points where defense organizations' official narrative breaks\nSelf-contradiction · Counter-evidence · Manipulation signal · Selective enforcement · Argument from absence`;

    this.computePositions();
    this.computeConnections();
    this.computeChainPosition();
  }

  // 각 노드의 호버 카드 방향 (원 바깥으로 펼침)
  // 호버 카드 방향: L1-4 우측(chain과 안 겹침), L5-7 좌측
  private hoverDirs: Record<number, NodePosition['hoverDir']> = {
    1: 'right-above',  // 12시 → 우측 상단 (L2 위로)
    2: 'right',        // 1~2시 → 우측
    3: 'right',        // 4시 → 우측
    4: 'right',        // 5~6시 → 우측
    5: 'left-below',   // 7~8시 → 좌측 하단
    6: 'left',         // 9시 → 좌측
    7: 'left-above',   // 10~11시 → 좌측 상단
  };

  private computePositions(): void {
    const positions: NodePosition[] = [];
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
      positions.push({
        num: i + 1,
        x: this.CX + this.RADIUS * Math.cos(angle),
        y: this.CY + this.RADIUS * Math.sin(angle),
        hoverDir: this.hoverDirs[i + 1],
      });
    }
    this.nodePositions.set(positions);
  }

  private computeConnections(): void {
    const pos = this.nodePositions();
    const lines: ConnectionLine[] = [];
    const seen = new Set<string>();

    for (const [from, tos] of Object.entries(this.layerConnections)) {
      for (const to of tos) {
        const key = `${Math.min(+from, to)}-${Math.max(+from, to)}`;
        if (!seen.has(key)) {
          seen.add(key);
          const p1 = pos[+from - 1];
          const p2 = pos[to - 1];
          lines.push({ from: +from, to, x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
        }
      }
    }
    this.connections.set(lines);
  }

  svgViewBox(): string {
    return `0 0 ${this.CX * 2} ${this.CY * 2}`;
  }

  private computeChainPosition(): void {
    // L2/L3 중 가장 오른쪽 노드의 hover 카드 끝 + gap
    const positions = this.nodePositions();
    const rightNodes = positions.filter(p => p.x > this.CX); // 우측 노드
    let maxRight = 0;
    for (const p of rightNodes) {
      const nodeRight = p.x + 25 + 12 + 210; // node half(25) + gap(12) + card(210)
      if (nodeRight > maxRight) maxRight = nodeRight;
    }
    this.chainLeftPx.set(maxRight + 24); // 카드 끝 + 24px 여유
  }

  // 방안 B: 정칠각형 외곽선 좌표
  heptagonPoints(): string {
    return this.nodePositions()
      .map(p => `${p.x},${p.y}`)
      .join(' ');
  }

  isConnectionHighlighted(conn: ConnectionLine): boolean {
    const h = this.hoveredLayer();
    if (!h) return false;
    return conn.from === h || conn.to === h;
  }

  connectionColor(conn: ConnectionLine): string {
    const h = this.hoveredLayer();
    if (!h) return '#dde1e6';
    if (conn.from === h) return this.layerColors[h];
    if (conn.to === h) return this.layerColors[h];
    return '#dde1e6';
  }

  getLayerStat(num: number): LayerStat | undefined {
    return this.layers().find(l => l.num === num);
  }

  onLayerClick(num: number): void {
    this.layerSelect.emit(num);
  }

  onToolClick(id: string): void {
    if (id === 'guided') {
      this.guidedProof.emit();
    } else {
      this.toolClick.emit(id);
    }
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery.trim());
    }
  }

  onExampleClick(q: { kr: string; en: string }): void {
    const query = this.lang.lang() === 'kr' ? q.kr : q.en;
    this.search.emit(query);
  }

  toggleCase(tab: string): void {
    this.activeCase.set(this.activeCase() === tab ? null : tab);
  }

  getEvidenceAtoms(layer: number): GraphNode[] {
    return this.graphData.getNodes(layer).slice(0, 8);
  }

  onEvidenceLayerClick(layer: number, event: Event): void {
    event.stopPropagation();
    this.activeEvidenceLayer.set(layer);
  }

  onEvidenceAtomClick(atomId: string, event: Event): void {
    event.stopPropagation();
    this.atomSelect.emit(atomId);
  }
}

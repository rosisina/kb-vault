// Aurora v2 CP-2 — Proof Body (중앙 패널)
// 기본: 증명 체인 뷰 / 보조: 모순 나열 / 답변 뷰
import { Component, Input, Output, EventEmitter, OnChanges, signal, ElementRef } from '@angular/core';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { ClaimTypeService } from '../../services/claim-type.service';
import { QueryAnswerService } from '../../services/query-answer.service';
import {
  GraphNode, GraphEdge, AtomDetail, ProofChain, ChainNode,
} from '../../models/graph.models';
import { QueryAnswer, ScoredAtom, ChainSummary, RelatedAtomEntry, ThematicGroup } from '../../models/query-answer.models';

type ViewMode = 'chain' | 'contradictions' | 'answer';

interface ContradictionPair {
  edge: GraphEdge;
  source: GraphNode;
  target: GraphNode;
}

export interface ClaimGroup {
  claimType: string;
  label: string;
  icon: string;
  pairs: ContradictionPair[];
  corroboratedCount: number;
  totalCount: number;
}

@Component({
  selector: 'app-proof-body',
  standalone: true,
  templateUrl: './proof-body.component.html',
  styleUrl: './proof-body.component.scss',
})
export class ProofBodyComponent implements OnChanges {
  @Input() activeLayer: number | null = null;
  @Input() selectedAtomId: string | null = null;
  @Input() scrollToGroup: string | null = null;
  @Input() searchResults: GraphNode[] = [];
  @Input() searchQuery: string | null = null;
  @Output() atomSelect = new EventEmitter<string>();
  @Output() answerReady = new EventEmitter<QueryAnswer>();

  viewMode = signal<ViewMode>('chain');
  groups = signal<ClaimGroup[]>([]);
  selectedAtom = signal<GraphNode | null>(null);
  selectedDetail = signal<AtomDetail | null>(null);
  breadcrumb = signal<string[]>([]);

  // Chain
  chain = signal<ProofChain | null>(null);
  chainRoots = signal<GraphNode[]>([]);

  // Answer
  answer = signal<QueryAnswer | null>(null);

  // Layer 통계
  totalPairs = signal(0);
  totalCorroborated = signal(0);
  corroborationPct = signal(0);
  groupCount = signal(0);

  layerNames: Record<number, string> = {
    1: 'Active-X 제거 · 舊KIATIS 이력 제거',
    2: '新KIATIS 추진체계 · 장교 자력 조작',
    3: '국전원 전속 · SW개발사업관리',
    4: '新KIATIS 시험평가 조작',
    5: '허위 갑질 신고 · 조작 감사',
    6: '군 검찰단 사기 수사 · 범죄자 낙인',
    7: '진정서 · 기소유예',
  };

  layerProves: Record<number, string> = {
    1: 'Active-X 제거 사업으로 舊KIATIS 이력을 삭제하여 해킹 근원서버를 은폐한 구조',
    2: '新KIATIS 사업 추진체계를 조작하고 장교 개인 경력을 허위 편성한 구조',
    3: '국전원 전속 후 SW개발사업관리를 조작하여 국방정보화카르텔 공모를 실행한 구조',
    4: '新KIATIS 시험평가를 전·중·후로 조작하여 표적수사의 기반을 설계한 구조',
    5: '허위 갑질 신고와 조작 감사를 통해 한지훈 중령을 인권침해·고립화한 구조',
    6: '군 검찰단이 증거를 인멸하고 문서를 조작하여 한지훈을 범죄자로 낙인찍은 구조',
    7: '진정서 제출·수사 촉구에도 기소유예로 범죄를 정당화하고 지속한 구조',
  };

  constructor(
    private graphData: GraphDataService,
    public lang: LanguageService,
    private claimTypeService: ClaimTypeService,
    private queryAnswerService: QueryAnswerService,
    private el: ElementRef,
  ) {}

  ngOnChanges(): void {
    // Compose answer when query arrives (wait for detail.json)
    if (this.searchQuery) {
      if (this.graphData.detailLoaded()) {
        this.composeAndSetAnswer();
      } else {
        // Detail not loaded yet — load and retry
        this.graphData.loadDetail().then(() => this.composeAndSetAnswer());
        this.viewMode.set('answer'); // show loading state
      }
    } else if (this.viewMode() === 'answer') {
      this.answer.set(null);
      this.viewMode.set('chain');
    }

    this.buildGroups();
    this.updateSelectedAtom();
    this.updateChain();
    this.updateBreadcrumb();

    if (this.selectedAtomId) {
      setTimeout(() => {
        this.el.nativeElement.querySelector('.atom-full-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
    if (this.scrollToGroup) {
      this.viewMode.set('contradictions');
      setTimeout(() => {
        this.el.nativeElement.querySelector(`#group-${this.scrollToGroup}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  setViewMode(mode: ViewMode): void {
    this.viewMode.set(mode);
  }

  onAtomClick(id: string): void {
    this.atomSelect.emit(id);
  }

  onChainNodeClick(id: string): void {
    this.atomSelect.emit(id);
  }

  onChainNav(id: string): void {
    this.atomSelect.emit(id);
    this.viewMode.set('chain');
  }

  private composeAndSetAnswer(): void {
    if (!this.searchQuery) return;
    const ans = this.queryAnswerService.composeAnswer(
      this.searchQuery, this.activeLayer ?? undefined
    );
    console.log('[Aurora Answer]', {
      query: ans.query,
      direct: ans.directResults.length,
      groups: ans.thematicGroups.map(g => `${g.label}(${g.atoms.length})`),
      chains: ans.chainSummaries.length,
      counters: ans.counterHypotheses.length,
      records: ans.allRecordNos.length,
      detailLoaded: this.graphData.detailLoaded(),
    });
    this.answer.set(ans);
    this.viewMode.set('answer');
    this.answerReady.emit(ans);
  }

  getNodeIdBySlug(slug: string): string {
    const nodes = this.graphData.getNodes();
    const found = nodes.find(n => n.stem === slug || n.wikiSlug === slug);
    return found?.id ?? '';
  }

  getAnswerLayers(ans: QueryAnswer): number[] {
    return [...new Set(ans.directResults.map(r => r.node.layer))].sort();
  }

  truthDots(score: number): string {
    const filled = Math.round(score / 2);
    return '●'.repeat(filled) + '○'.repeat(5 - filled);
  }

  pct(corr: number, total: number): number {
    return total > 0 ? Math.round((corr / total) * 100) : 0;
  }

  isSelected(id: string): boolean {
    return this.selectedAtomId === id;
  }

  isChainFocus(node: ChainNode): boolean {
    return node.direction === 'self';
  }

  edgeLabel(type: string): string {
    const labels: Record<string, string> = {
      'CAUSES': '──CAUSES──→',
      'CORROBORATES': '  └ CORROBORATES',
      'OPPOSES': '  └ OPPOSES',
      'SUPERSEDES': '  └ SUPERSEDES',
      'RELATED': '  └ RELATED',
    };
    return labels[type] || type;
  }

  edgeLabelKr(type: string): string {
    const labels: Record<string, string> = {
      'CAUSES': '──원인──→',
      'CORROBORATES': '  └ 뒷받침',
      'OPPOSES': '  └ 모순',
      'SUPERSEDES': '  └ 대체',
      'RELATED': '  └ 관련',
    };
    return labels[type] || type;
  }

  getCorroboratingEdges(nodeId: string): Array<{ targetNode: GraphNode; type: string }> {
    const chain = this.chain();
    if (!chain) return [];
    const chainIds = new Set(chain.nodes.map(cn => cn.node.id));
    return chain.edges
      .filter(e => (e.source === nodeId || e.target === nodeId) && e.type !== 'CAUSES')
      .map(e => {
        const otherId = e.source === nodeId ? e.target : e.source;
        const otherNode = chain.nodes.find(cn => cn.node.id === otherId);
        return otherNode ? { targetNode: otherNode.node, type: e.type } : null;
      })
      .filter((x): x is { targetNode: GraphNode; type: string } => x !== null);
  }

  private updateChain(): void {
    if (this.selectedAtomId) {
      const c = this.graphData.getChain(this.selectedAtomId);
      this.chain.set(c);
    } else if (this.activeLayer) {
      // Show chain roots for this layer
      const roots = this.graphData.getChainRoots()
        .filter(r => r.layer === this.activeLayer);
      this.chainRoots.set(roots);
      // Auto-select first root's chain if available
      if (roots.length > 0) {
        this.chain.set(this.graphData.getChain(roots[0].id));
      } else {
        this.chain.set(null);
      }
    } else {
      this.chain.set(null);
      this.chainRoots.set(this.graphData.getChainRoots());
    }
  }

  private buildGroups(): void {
    let pairs = this.graphData.getContradictions();
    if (this.activeLayer) {
      pairs = pairs.filter(p =>
        p.source.layer === this.activeLayer || p.target.layer === this.activeLayer
      );
    }

    const groupMap = new Map<string, ContradictionPair[]>();
    for (const pair of pairs) {
      const ct = pair.source.claimType || 'unknown';
      if (!groupMap.has(ct)) groupMap.set(ct, []);
      groupMap.get(ct)!.push(pair);
    }

    const lang = this.lang.lang();
    const result: ClaimGroup[] = [];
    let totalCorr = 0;
    let totalAll = 0;

    for (const [ct, ctPairs] of groupMap) {
      const info = this.claimTypeService.getInfo(ct);
      const corr = ctPairs.filter(p => p.source.verdict === 'CORROBORATED').length;
      result.push({
        claimType: ct,
        label: info ? (lang === 'kr' ? info.kr : info.en) : ct,
        icon: info?.icon || 'folder',
        pairs: ctPairs,
        corroboratedCount: corr,
        totalCount: ctPairs.length,
      });
      totalCorr += corr;
      totalAll += ctPairs.length;
    }
    result.sort((a, b) => b.pairs.length - a.pairs.length);
    this.groups.set(result);

    this.totalPairs.set(totalAll);
    this.totalCorroborated.set(totalCorr);
    this.corroborationPct.set(totalAll > 0 ? Math.round((totalCorr / totalAll) * 100) : 0);
    this.groupCount.set(result.length);
  }

  private updateSelectedAtom(): void {
    if (this.selectedAtomId) {
      this.selectedAtom.set(this.graphData.getNodeById(this.selectedAtomId) ?? null);
      this.selectedDetail.set(this.graphData.getDetail(this.selectedAtomId) ?? null);
    } else {
      this.selectedAtom.set(null);
      this.selectedDetail.set(null);
    }
  }

  private updateBreadcrumb(): void {
    const parts: string[] = [];
    if (this.activeLayer) {
      parts.push(`Layer ${this.activeLayer}`);
      parts.push(this.layerNames[this.activeLayer] || '');
    }
    if (this.selectedAtom()) {
      parts.push(this.claimTypeService.getLabel(this.selectedAtom()!.claimType, this.lang.lang()));
    }
    this.breadcrumb.set(parts);
  }
}

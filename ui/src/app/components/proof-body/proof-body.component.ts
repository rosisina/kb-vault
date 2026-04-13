// Aurora v2 — Proof Body (중앙 패널)
// Layer 요약 + 통계 + claimType 그룹별 모순 쌍 (순번, 선택 강조, 행동 유도)
import { Component, Input, Output, EventEmitter, OnChanges, signal, ElementRef } from '@angular/core';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { ClaimTypeService } from '../../services/claim-type.service';
import { GraphNode, GraphEdge } from '../../models/graph.models';

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
  @Output() atomSelect = new EventEmitter<string>();

  groups = signal<ClaimGroup[]>([]);
  selectedAtom = signal<GraphNode | null>(null);
  breadcrumb = signal<string[]>([]);

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
    private el: ElementRef,
  ) {}

  ngOnChanges(): void {
    this.buildGroups();
    this.updateSelectedAtom();
    this.updateBreadcrumb();

    if (this.selectedAtomId) {
      setTimeout(() => {
        this.el.nativeElement.querySelector('.atom-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
    if (this.scrollToGroup) {
      setTimeout(() => {
        this.el.nativeElement.querySelector(`#group-${this.scrollToGroup}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  onAtomClick(id: string): void {
    this.atomSelect.emit(id);
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
    this.selectedAtom.set(
      this.selectedAtomId ? (this.graphData.getNodeById(this.selectedAtomId) ?? null) : null
    );
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

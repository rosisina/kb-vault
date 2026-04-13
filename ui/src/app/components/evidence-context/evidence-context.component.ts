// Aurora v2 — Evidence Context (우측 패널)
// Layer 대시보드 + 그룹 목차(진행률) + atom 상세 + 교차 층위
import { Component, Input, Output, EventEmitter, OnChanges, signal } from '@angular/core';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { ClaimTypeService } from '../../services/claim-type.service';
import { GraphNode, GraphEdge } from '../../models/graph.models';

interface ContradictionPair {
  edge: GraphEdge;
  source: GraphNode;
  target: GraphNode;
}

interface GroupSummary {
  claimType: string;
  label: string;
  icon: string;
  count: number;
  corroboratedPct: number;
  expanded: boolean;
  atomTitles: { id: string; title: string; layer: number }[];
}

interface PersonCount {
  name: string;
  count: number;
}

interface CrossLayerLink {
  layer: number;
  count: number;
}

@Component({
  selector: 'app-evidence-context',
  standalone: true,
  templateUrl: './evidence-context.component.html',
  styleUrl: './evidence-context.component.scss',
})
export class EvidenceContextComponent implements OnChanges {
  @Input() selectedAtomId: string | null = null;
  @Input() activeLayer: number | null = null;
  @Output() openGraph = new EventEmitter<void>();
  @Output() atomSelect = new EventEmitter<string>();
  @Output() groupSelect = new EventEmitter<string>();

  // Layer 대시보드
  totalPairs = signal(0);
  totalCorroborated = signal(0);
  overallPct = signal(0);
  groups = signal<GroupSummary[]>([]);
  topPersons = signal<PersonCount[]>([]);

  // atom 선택 시
  selectedAtom = signal<GraphNode | null>(null);
  crossLayerLinks = signal<CrossLayerLink[]>([]);

  // 주요 pseudonym 목록 (graph.json title에서 추출 가능한 것들)
  private knownNames = [
    '김민수', '이지영', '한지훈', '박성호', '이준호', '김수진',
    '장우진', '이태호', '오현수', '최영수', '최동욱', '임형규',
    '안세준', '진상호', '양준승', '도지호', '양미숙', '박서준',
  ];

  constructor(
    private graphData: GraphDataService,
    public lang: LanguageService,
    private claimTypeService: ClaimTypeService,
  ) {}

  ngOnChanges(): void {
    this.buildDashboard();
    this.updateSelectedAtom();
  }

  toggleGroup(group: GroupSummary): void {
    group.expanded = !group.expanded;
    if (group.expanded) {
      this.groupSelect.emit(group.claimType);
    }
  }

  onAtomClick(id: string): void {
    this.atomSelect.emit(id);
  }

  private buildDashboard(): void {
    let pairs = this.graphData.getContradictions();
    if (this.activeLayer) {
      pairs = pairs.filter(p =>
        p.source.layer === this.activeLayer || p.target.layer === this.activeLayer
      );
    }

    // 그룹별 요약
    const groupMap = new Map<string, ContradictionPair[]>();
    for (const pair of pairs) {
      const ct = pair.source.claimType || 'unknown';
      if (!groupMap.has(ct)) groupMap.set(ct, []);
      groupMap.get(ct)!.push(pair);
    }

    const lang = this.lang.lang();
    let totalCorr = 0;
    const result: GroupSummary[] = [];

    for (const [ct, ctPairs] of groupMap) {
      const info = this.claimTypeService.getInfo(ct);
      const corr = ctPairs.filter(p => p.source.verdict === 'CORROBORATED').length;
      totalCorr += corr;
      result.push({
        claimType: ct,
        label: info ? (lang === 'kr' ? info.kr : info.en) : ct,
        icon: info?.icon || 'folder',
        count: ctPairs.length,
        corroboratedPct: ctPairs.length > 0 ? Math.round((corr / ctPairs.length) * 100) : 0,
        expanded: false,
        atomTitles: ctPairs.map(p => ({
          id: p.source.id,
          title: p.source.title,
          layer: p.source.layer,
        })),
      });
    }
    result.sort((a, b) => b.count - a.count);
    this.groups.set(result);
    this.totalPairs.set(pairs.length);
    this.totalCorroborated.set(totalCorr);
    this.overallPct.set(pairs.length > 0 ? Math.round((totalCorr / pairs.length) * 100) : 0);

    // 주요 인물 추출
    this.extractPersons(pairs);
  }

  private extractPersons(pairs: ContradictionPair[]): void {
    const counts = new Map<string, number>();
    for (const pair of pairs) {
      for (const name of this.knownNames) {
        if (pair.source.title.includes(name) || pair.target.title.includes(name)) {
          counts.set(name, (counts.get(name) || 0) + 1);
        }
      }
    }
    this.topPersons.set(
      [...counts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }))
    );
  }

  private updateSelectedAtom(): void {
    if (!this.selectedAtomId) {
      this.selectedAtom.set(null);
      this.crossLayerLinks.set([]);
      return;
    }
    const atom = this.graphData.getNodeById(this.selectedAtomId);
    this.selectedAtom.set(atom ?? null);

    if (atom) {
      const edges = this.graphData.getEdgesForNode(atom.id);
      const relatedIds = new Set(
        edges.flatMap(e => [e.source, e.target]).filter(id => id !== atom.id)
      );
      const crossMap = new Map<number, number>();
      for (const id of relatedIds) {
        const related = this.graphData.getNodeById(id);
        if (related && related.layer !== atom.layer) {
          crossMap.set(related.layer, (crossMap.get(related.layer) || 0) + 1);
        }
      }
      this.crossLayerLinks.set(
        [...crossMap.entries()]
          .map(([layer, count]) => ({ layer, count }))
          .sort((a, b) => a.layer - b.layer)
      );
    }
  }
}

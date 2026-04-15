// Aurora v2 CP-2 — Evidence Context (우측 패널)
// Layer 대시보드 + 그룹 목차 + 관계 맵 (CAUSES/CORROBORATES/OPPOSES/인물)
import { Component, Input, Output, EventEmitter, OnChanges, signal } from '@angular/core';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { ClaimTypeService } from '../../services/claim-type.service';
import { GraphNode, GraphEdge, AtomDetail, AtomRelated } from '../../models/graph.models';
import { AtomTooltipDirective } from '../../directives/atom-tooltip.directive';
import { QueryAnswer } from '../../models/query-answer.models';

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
  layers: number[];
}

interface RelationGroup {
  type: string;
  typeLabel: string;
  items: Array<{ node?: GraphNode; slug: string; display: string }>;
}

interface UnlinkedMention {
  node: GraphNode;
  sharedKeys: string[];
  reason: 'record' | 'person';
}

@Component({
  selector: 'app-evidence-context',
  standalone: true,
  imports: [AtomTooltipDirective],
  templateUrl: './evidence-context.component.html',
  styleUrl: './evidence-context.component.scss',
})
export class EvidenceContextComponent implements OnChanges {
  @Input() selectedAtomId: string | null = null;
  @Input() activeLayer: number | null = null;
  @Input() answerContext: QueryAnswer | null = null;
  @Input() searchResults: GraphNode[] = [];
  @Output() openGraph = new EventEmitter<void>();
  @Output() atomSelect = new EventEmitter<string>();
  @Output() groupSelect = new EventEmitter<string>();
  @Output() personSelect = new EventEmitter<string>();
  @Output() recordSelect = new EventEmitter<string>();
  @Output() previewSelect = new EventEmitter<string>();  // 미니 프리뷰 요청

  onPersonClick(name: string): void {
    this.personSelect.emit(name);
  }

  onRecordClick(recordNo: string): void {
    this.recordSelect.emit(recordNo);
  }

  // Layer 대시보드
  totalPairs = signal(0);
  totalCorroborated = signal(0);
  overallPct = signal(0);
  groups = signal<GroupSummary[]>([]);
  topPersons = signal<PersonCount[]>([]);

  // atom 선택 시
  selectedAtom = signal<GraphNode | null>(null);
  selectedDetail = signal<AtomDetail | null>(null);
  relationGroups = signal<RelationGroup[]>([]);
  unlinkedMentions = signal<UnlinkedMention[]>([]);

  // 주요 pseudonym 목록
  private knownNames = [
    '김민수', '이지영', '한지훈', '박성호', '이준호', '김수진',
    '장우진', '이태호', '오현수', '최영수', '최동욱', '임형규',
    '안세준', '진상호', '양준승', '도지호', '양미숙', '박서준',
  ];

  private relTypeLabels: Record<string, { kr: string; en: string }> = {
    'CAUSES': { kr: '원인 (↑↓)', en: 'Causes (↑↓)' },
    'CORROBORATES': { kr: '뒷받침', en: 'Corroborates' },
    'OPPOSES': { kr: '모순', en: 'Opposes' },
    'SUPERSEDES': { kr: '대체', en: 'Supersedes' },
    'RELATED': { kr: '관련', en: 'Related' },
    'PART_OF_LAYER': { kr: '소속 층위', en: 'Part of Layer' },
    'ABOUT': { kr: '관련 대상', en: 'About' },
  };

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

  onRelatedClick(slug: string): void {
    const nodes = this.graphData.getNodes();
    const found = nodes.find(n => n.wikiSlug === slug || n.stem === slug);
    if (found) {
      this.previewSelect.emit(found.id);  // 미니 프리뷰로 전환
    }
  }

  onUnlinkedClick(id: string): void {
    this.previewSelect.emit(id);  // 미니 프리뷰로 전환
  }

  private buildDashboard(): void {
    let pairs = this.graphData.getContradictions();
    if (this.activeLayer) {
      pairs = pairs.filter(p =>
        p.source.layer === this.activeLayer || p.target.layer === this.activeLayer
      );
    }
    // 검색 결과가 있으면 해당 atom과 관련된 것만 표시
    if (this.searchResults.length > 0) {
      const searchIds = new Set(this.searchResults.map(n => n.id));
      pairs = pairs.filter(p =>
        searchIds.has(p.source.id) || searchIds.has(p.target.id)
      );
    }

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
    // CP-3.4: Use structured person index from graph.json
    const personIndex = this.graphData.getPersonIndex();
    if (personIndex.length > 0) {
      this.topPersons.set(
        personIndex.slice(0, 10).map(p => ({ name: p.name, count: p.count, layers: p.layers }))
      );
    } else {
      this.topPersons.set(
        [...counts.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count, layers: [] }))
      );
    }
  }

  private updateSelectedAtom(): void {
    if (!this.selectedAtomId) {
      this.selectedAtom.set(null);
      this.selectedDetail.set(null);
      this.relationGroups.set([]);
      this.unlinkedMentions.set([]);
      return;
    }

    const atom = this.graphData.getNodeById(this.selectedAtomId);
    this.selectedAtom.set(atom ?? null);

    const detail = this.graphData.getDetail(this.selectedAtomId);
    this.selectedDetail.set(detail ?? null);

    // Build relation groups from detail.json related links
    if (detail) {
      this.buildRelationGroups(detail);
    } else {
      this.relationGroups.set([]);
    }

    // CP-3: Unlinked Mentions
    this.unlinkedMentions.set(this.graphData.getUnlinkedMentions(this.selectedAtomId));
  }

  private buildRelationGroups(detail: AtomDetail): void {
    const lang = this.lang.lang();
    const grouped = new Map<string, Array<{ node?: GraphNode; slug: string; display: string }>>();

    for (const rel of detail.related) {
      if (!grouped.has(rel.type)) grouped.set(rel.type, []);
      const node = this.graphData.getNodes().find(n => n.stem === rel.slug || n.wikiSlug === rel.slug);
      grouped.get(rel.type)!.push({
        node: node,
        slug: rel.slug,
        display: node?.title || rel.display,
      });
    }

    // Order: CAUSES → CORROBORATES → OPPOSES → SUPERSEDES → RELATED → PART_OF_LAYER
    const order = ['CAUSES', 'CORROBORATES', 'OPPOSES', 'SUPERSEDES', 'RELATED', 'PART_OF_LAYER', 'ABOUT'];
    const result: RelationGroup[] = [];
    for (const type of order) {
      const items = grouped.get(type);
      if (items && items.length > 0) {
        const labels = this.relTypeLabels[type] || { kr: type, en: type };
        result.push({
          type,
          typeLabel: lang === 'kr' ? labels.kr : labels.en,
          items,
        });
      }
    }
    this.relationGroups.set(result);
  }
}

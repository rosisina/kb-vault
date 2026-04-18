// Aurora v2 CP-2 — Proof Body (중앙 패널)
// 기본: 증명 체인 뷰 / 보조: 모순 나열 / 답변 뷰
import { Component, Input, Output, EventEmitter, OnChanges, signal, ElementRef, effect, untracked } from '@angular/core';
import { GraphDataService } from '../../services/graph-data.service';
import { LanguageService } from '../../services/language.service';
import { ClaimTypeService } from '../../services/claim-type.service';
import { QueryAnswerService } from '../../services/query-answer.service';
import { PresetAnswerService } from '../../services/preset-answer.service';
import {
  GraphNode, GraphEdge, AtomDetail, ProofChain, ChainNode, AtomRelated,
} from '../../models/graph.models';
import { AtomTooltipDirective } from '../../directives/atom-tooltip.directive';
import { LangTitlePipe } from '../../pipes/lang-title.pipe';
import { QueryAnswer, ScoredAtom, ChainSummary, RelatedAtomEntry, ThematicGroup } from '../../models/query-answer.models';
import { AsAnyPipe } from '../../pipes/as-any.pipe';

type ViewMode = 'chain' | 'contradictions' | 'answer' | 'guided';

interface ContradictionPair {
  edge: GraphEdge;
  source: GraphNode;
  target: GraphNode;
}

export interface ClaimGroup {
  claimType: string;
  label: string;
  labelKr?: string;
  labelEn?: string;
  icon: string;
  pairs: ContradictionPair[];
  corroboratedCount: number;
  totalCount: number;
}

@Component({
  selector: 'app-proof-body',
  standalone: true,
  imports: [AtomTooltipDirective, AsAnyPipe, LangTitlePipe],
  templateUrl: './proof-body.component.html',
  styleUrl: './proof-body.component.scss',
})
export class ProofBodyComponent implements OnChanges {
  @Input() activeLayer: number | null = null;
  @Input() selectedAtomId: string | null = null;
  @Input() scrollToGroup: string | null = null;
  @Input() searchResults: GraphNode[] = [];
  @Input() searchQuery: string | null = null;
  @Input() guidedProofMode: boolean = false;
  @Input() activeFacets: any = null;
  @Input() previewAtomId: string | null = null;
  @Input() initialViewMode: string | null = null;
  @Input() initialFilter: any = null;
  @Output() atomSelect = new EventEmitter<string>();
  @Output() answerReady = new EventEmitter<QueryAnswer>();
  @Output() facetChange = new EventEmitter<any>();
  @Output() previewNavigate = new EventEmitter<string>();
  @Output() previewClose = new EventEmitter<void>();

  // 미니 프리뷰
  previewNode = signal<GraphNode | null>(null);
  previewDetail = signal<AtomDetail | null>(null);

  // Faceted search
  availableFacets = signal<any>(null);
  showFilters = signal(false);

  viewMode = signal<ViewMode>('chain');

  // CP-3.2: Guided Proof
  guidedFractures = signal<GraphNode[]>([]);
  guidedIndex = signal(0);
  groups = signal<ClaimGroup[]>([]);
  selectedAtom = signal<GraphNode | null>(null);
  selectedDetail = signal<AtomDetail | null>(null);
  getBreadcrumb(): string[] {
    const isEn = this.lang.lang() === 'en';
    const parts: string[] = [];
    if (this.searchQuery) {
      parts.push(`🔍 "${this.searchQuery}"`);
      parts.push(isEn ? `${this.searchResults.length} results` : `${this.searchResults.length}건`);
    }
    if (this.activeLayer) {
      parts.push(`Layer ${this.activeLayer}`);
      parts.push(isEn ? (this.layerNamesEn[this.activeLayer] || '') : (this.layerNames[this.activeLayer] || ''));
    }
    if (this.selectedAtom()) {
      parts.push(this.claimTypeService.getLabel(this.selectedAtom()!.claimType, isEn ? 'en' : 'kr'));
    }
    return parts;
  }

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

  layerNamesEn: Record<number, string> = {
    1: 'Active-X Removal · Legacy KIATIS History Deletion',
    2: 'New KIATIS Procurement Structure Manipulation',
    3: 'DCIA Transfer · SW Development Management',
    4: 'New KIATIS Test & Evaluation Manipulation',
    5: 'False Harassment Reports · Fabricated Audit',
    6: 'Military Prosecution Fraud · Criminal Stigma',
    7: 'Petition Submissions · Prosecutorial Deferral',
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

  layerProvesEn: Record<number, string> = {
    1: 'How the Active-X removal project deleted Legacy KIATIS history to conceal the hacking origin server',
    2: 'How the New KIATIS procurement structure was manipulated and officer career records were falsified',
    3: 'How post-transfer SW development management was manipulated to execute the defense IT cartel conspiracy',
    4: 'How New KIATIS test evaluations were manipulated before, during, and after — laying the groundwork for targeted prosecution',
    5: 'How false harassment complaints and fabricated audits were used to isolate and harm Lt. Col. Han Ji-hoon',
    6: 'How the Military Prosecution destroyed evidence and fabricated documents to brand Han Ji-hoon as a criminal',
    7: 'How the MND used prosecutorial deferral to legitimize and perpetuate the cover-up despite petitions and investigation demands',
  };

  constructor(
    private graphData: GraphDataService,
    public lang: LanguageService,
    private claimTypeService: ClaimTypeService,
    private queryAnswerService: QueryAnswerService,
    private presetAnswerService: PresetAnswerService,
    private el: ElementRef,
  ) {
    // Once preset-answers.json loads, attach preset match to current answer (untracked to avoid loop)
    effect(() => {
      if (this.presetAnswerService.loaded()) {
        const ans = untracked(() => this.answer());
        const query = this.searchQuery;
        if (ans && query && !ans.presetMatch) {
          const preset = this.presetAnswerService.findMatch(query, this.lang.lang());
          if (preset) this.answer.set({ ...ans, presetMatch: preset });
        }
      }
    });
  }

  ngOnChanges(): void {
    // Load available facets for filter UI
    if (!this.availableFacets()) {
      this.availableFacets.set(this.graphData.getAvailableFacets());
    }

    // 미니 프리뷰 업데이트
    if (this.previewAtomId) {
      this.previewNode.set(this.graphData.getNodeById(this.previewAtomId) ?? null);
      this.previewDetail.set(this.graphData.getDetail(this.previewAtomId) ?? null);
    } else {
      this.previewNode.set(null);
      this.previewDetail.set(null);
    }

    // Landing 메트릭/도구 클릭에서 진입 시 뷰 모드 + 필터 설정
    if (this.initialViewMode) {
      if (this.initialViewMode === 'filter') {
        this.showFilters.set(true);
      } else {
        this.viewMode.set(this.initialViewMode as ViewMode);
      }
      if (this.initialFilter) {
        this.facetChange.emit(this.initialFilter);
      }
    }

    // CP-3.2: Guided proof mode
    if (this.guidedProofMode && this.guidedFractures().length === 0) {
      this.guidedFractures.set(this.graphData.getStrongestFractures(7));
      this.guidedIndex.set(0);
      this.viewMode.set('guided');
    }

    // Compose answer when query arrives (wait for detail.json)
    // Skip if already in guided mode — guided takes priority over answer
    if (this.searchQuery && this.viewMode() !== 'guided') {
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

    if (this.selectedAtomId) {
      // 새 atom 선택 시 chain 뷰로 전환 (answer/guided 외부에서 진입한 경우)
      // guided 내부 step 클릭은 onAtomClick에서 이미 처리
      const mode = this.viewMode();
      if (mode !== 'chain' && mode !== 'guided') {
        this.viewMode.set('chain');
      }
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

  // CP-3.2: Guided Proof navigation
  guidedNext(): void {
    const fractures = this.guidedFractures();
    const idx = this.guidedIndex();
    if (idx < fractures.length - 1) {
      this.guidedIndex.set(idx + 1);
      this.atomSelect.emit(fractures[idx + 1].id);
    }
  }

  guidedPrev(): void {
    const idx = this.guidedIndex();
    if (idx > 0) {
      this.guidedIndex.set(idx - 1);
      this.atomSelect.emit(this.guidedFractures()[idx - 1].id);
    }
  }

  guidedCurrentDetail() {
    const fractures = this.guidedFractures();
    const idx = this.guidedIndex();
    if (idx < fractures.length) {
      return this.graphData.getDetail(fractures[idx].id);
    }
    return null;
  }

  guidedCrossLinks() {
    const fractures = this.guidedFractures();
    const idx = this.guidedIndex();
    if (idx < fractures.length) {
      return this.graphData.getLayerCrossLinks(fractures[idx].layer);
    }
    return { prev: [], next: [] };
  }

  fractureLabel(type: string): string {
    const labels: Record<string, string> = {
      'F-SC': '자기모순 (Self-Contradiction)',
      'F-CE': '반증 (Counter-Evidence)',
      'F-MS': '조작 징후 (Manipulation Signal)',
      'F-SE': '선별 적용 (Selective Enforcement)',
      'F-AA': '부재 논증 (Argument from Absence)',
    };
    return labels[type] || type;
  }

  fractureLabelShort(type: string): string {
    if (this.lang.lang() === 'en') {
      const en: Record<string, string> = {
        'F-SC': 'Self-Contradiction', 'F-CE': 'Counter-Evidence', 'F-MS': 'Manipulation Signal',
        'F-SE': 'Selective Enforcement', 'F-AA': 'Absence Argument',
      };
      return en[type] || type;
    }
    const kr: Record<string, string> = {
      'F-SC': '자기모순', 'F-CE': '반증', 'F-MS': '조작 징후',
      'F-SE': '선별 적용', 'F-AA': '부재 논증',
    };
    return kr[type] || type;
  }

  // CP-3.3: Layer cross-links and fractures
  layerCrossLinks() {
    if (!this.activeLayer) return { prev: [], next: [] };
    return this.graphData.getLayerCrossLinks(this.activeLayer);
  }

  layerFractures(): GraphNode[] {
    if (!this.activeLayer) return [];
    return this.graphData.getLayerFractures(this.activeLayer);
  }

  onLayerNav(layer: number): void {
    const nodes = this.graphData.getNodes(layer);
    if (nodes.length > 0) {
      this.atomSelect.emit(nodes[0].id);
    }
  }

  // CP-3.5: Record No. reverse lookup + source mapping
  recordResults = signal<GraphNode[]>([]);
  activeRecordNo = signal<string | null>(null);
  activeRecordSource = signal<any>(null);

  onRecordClick(recordNo: string): void {
    const num = parseInt(recordNo.replace(/,/g, ''), 10);
    if (isNaN(num)) return;
    const results = this.graphData.getAtomsByRecordNo(num);
    this.recordResults.set(results);
    this.activeRecordNo.set(recordNo);
    // Resolve source layer/PDF info
    const source = this.graphData.resolveRecordSource(num);
    this.activeRecordSource.set(source);
  }

  closeRecordResults(): void {
    this.recordResults.set([]);
    this.activeRecordNo.set(null);
    this.activeRecordSource.set(null);
  }

  // CP-3.4: Person proof path
  personResults = signal<GraphNode[]>([]);
  activePerson = signal<string | null>(null);

  onPersonClick(name: string): void {
    const results = this.graphData.getAtomsByPerson(name);
    this.personResults.set(results);
    this.activePerson.set(name);
  }

  closePersonResults(): void {
    this.personResults.set([]);
    this.activePerson.set(null);
  }

  getPersonLayers(): number[] {
    return [...new Set(this.personResults().map(n => n.layer))].sort();
  }

  // Answer view layer filter
  answerLayerFilter = signal<number>(0);

  toggleAnswerLayerFilter(layer: number): void {
    this.answerLayerFilter.set(this.answerLayerFilter() === layer ? 0 : layer);
  }

  getAnswerLayerCount(ans: QueryAnswer, layer: number): number {
    return ans.directResults.filter(r => r.node.layer === layer).length;
  }

  filteredThematicGroups(ans: QueryAnswer): ThematicGroup[] {
    const filter = this.answerLayerFilter();
    if (!filter) return ans.thematicGroups;
    return ans.thematicGroups
      .map(g => ({
        ...g,
        atoms: g.atoms.filter(a => a.node.layer === filter),
      }))
      .filter(g => g.atoms.length > 0);
  }

  // Faceted search helpers
  toggleFilters(): void {
    this.showFilters.set(!this.showFilters());
  }

  setFacet(key: string, value: string | null): void {
    const current = this.activeFacets ? { ...this.activeFacets } : {};
    if (value === null || current[key] === value) {
      delete current[key];
    } else {
      current[key] = value;
    }
    this.facetChange.emit(Object.keys(current).length > 0 ? current : null);
  }

  isFacetActive(key: string, value: string): boolean {
    return this.activeFacets?.[key] === value;
  }

  activeFacetCount(): number {
    if (!this.activeFacets) return 0;
    return Object.keys(this.activeFacets).length;
  }

  clearAllFacets(): void {
    this.facetChange.emit(null);
  }

  personDisplayName(name: string): string {
    return this.lang.personName(name);
  }

  orgDisplayName(name: string): string {
    return this.lang.orgName(name);
  }

  facetLabel(key: string, value: string): string {
    if (this.lang.lang() === 'en') {
      const en: Record<string, Record<string, string>> = {
        fractureType: { 'F-SC': 'Self-Contradiction', 'F-CE': 'Counter-Evidence', 'F-MS': 'Manipulation Signal', 'F-SE': 'Selective Enforcement', 'F-AA': 'Absence Argument' },
        sourceType: { book: 'Book', recording: 'Recording', regulation: 'Directive', investigation: 'Investigation', sop: 'SOP', kakao: 'KakaoTalk' },
        strength: { STRONG: 'Strong', MODERATE: 'Moderate', WEAK: 'Weak' },
        verdict: { CORROBORATED: 'Corroborated', WEAKENED: 'Weakened', NEEDS_MORE_EVIDENCE: 'Needs Evidence', UNFALSIFIABLE: 'Unfalsifiable' },
      };
      return en[key]?.[value] ?? value;
    }
    const kr: Record<string, Record<string, string>> = {
      fractureType: { 'F-SC': '자기모순', 'F-CE': '반증', 'F-MS': '조작 징후', 'F-SE': '선별 적용', 'F-AA': '부재 논증' },
      sourceType: { book: '책', recording: '녹취', regulation: '훈령', investigation: '수사', sop: '예규', kakao: '카톡' },
      strength: { STRONG: '강력', MODERATE: '보통', WEAK: '약함' },
      verdict: { CORROBORATED: '입증', WEAKENED: '약화', NEEDS_MORE_EVIDENCE: '추가증거필요', UNFALSIFIABLE: '반증불가' },
    };
    return kr[key]?.[value] ?? value;
  }

  onAtomClick(id: string): void {
    this.atomSelect.emit(id);
    // Switch to chain view to show atom detail — but stay in guided view if guided
    if (this.viewMode() !== 'chain' && this.viewMode() !== 'guided') {
      this.viewMode.set('chain');
    }
  }

  onChainNodeClick(id: string): void {
    this.atomSelect.emit(id);
  }

  onChainNav(id: string): void {
    this.viewMode.set('chain');
    this.atomSelect.emit(id);
    // Force chain rebuild for same atom
    this.updateChain();
  }

  private composeAndSetAnswer(): void {
    if (!this.searchQuery) return;
    const ans = this.queryAnswerService.composeAnswer(
      this.searchQuery, this.activeLayer ?? undefined
    );
    // Attach preset match if available
    const preset = this.presetAnswerService.findMatch(
      this.searchQuery, this.lang.lang()
    );
    if (preset) ans.presetMatch = preset;
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

  getRelatedTitle(rel: AtomRelated): string {
    const nodes = this.graphData.getNodes();
    const node = nodes.find(n => n.stem === rel.slug || n.wikiSlug === rel.slug);
    if (node) {
      return this.lang.lang() === 'kr' ? node.title : (node.titleEn || node.title);
    }
    if (this.lang.lang() === 'en') {
      return rel.slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    return rel.display || rel.slug;
  }

  getAnswerLayers(ans: QueryAnswer): number[] {
    return [...new Set(ans.directResults.map(r => r.node.layer))].sort();
  }

  // Lang-aware field helpers (B-option bilingual)
  claimText(detail: AtomDetail): string {
    if (this.lang.lang() === 'en') {
      const base = detail.claim_en || detail.claim_ko || detail.claim;
      return this.lang.translateNamesInText(base);
    }
    return detail.claim_ko || detail.claim;
  }

  takeawayList(detail: AtomDetail): AtomDetail['keyTakeaways'] {
    if (this.lang.lang() === 'en') return detail.keyTakeaways_en || detail.keyTakeaways;
    return detail.keyTakeaways_ko || detail.keyTakeaways;
  }

  counterText(detail: AtomDetail): string {
    if (this.lang.lang() === 'en') {
      return this.lang.translateNamesInText(detail.counterHypothesis_en || detail.counterHypothesis);
    }
    return detail.counterHypothesis;
  }

  falsificationText(detail: AtomDetail): string {
    if (this.lang.lang() === 'en') {
      return this.lang.translateNamesInText(detail.falsificationCondition_en || detail.falsificationCondition);
    }
    return detail.falsificationCondition;
  }

  verdictText(detail: AtomDetail): string {
    if (this.lang.lang() === 'en') {
      return this.lang.translateNamesInText(detail.verdictProse_en || detail.verdictProse || '');
    }
    return detail.verdictProse || '';
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
      let roots = this.graphData.getChainRoots()
        .filter(r => r.layer === this.activeLayer);
      // 검색 결과가 있으면 관련 루트만
      if (this.searchResults.length > 0) {
        const searchIds = new Set(this.searchResults.map(n => n.id));
        roots = roots.filter(r => searchIds.has(r.id));
      }
      this.chainRoots.set(roots);
      if (roots.length > 0) {
        this.chain.set(this.graphData.getChain(roots[0].id));
      } else {
        this.chain.set(null);
      }
    } else {
      let roots = this.graphData.getChainRoots();
      // 검색 결과가 있으면 관련 루트만
      if (this.searchResults.length > 0) {
        const searchIds = new Set(this.searchResults.map(n => n.id));
        roots = roots.filter(r => searchIds.has(r.id));
      }
      this.chain.set(null);
      this.chainRoots.set(roots);
    }
  }

  private buildGroups(): void {
    let pairs = this.graphData.getContradictions();
    if (this.activeLayer) {
      pairs = pairs.filter(p =>
        p.source.layer === this.activeLayer || p.target.layer === this.activeLayer
      );
    }
    // 검색 결과가 있으면 해당 atom과 관련된 균열만 표시
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
    const result: ClaimGroup[] = [];
    let totalCorr = 0;
    let totalAll = 0;

    for (const [ct, ctPairs] of groupMap) {
      const info = this.claimTypeService.getInfo(ct);
      const corr = ctPairs.filter(p => p.source.verdict === 'CORROBORATED').length;
      result.push({
        claimType: ct,
        label: info ? (lang === 'kr' ? info.kr : info.en) : ct,
        labelKr: info?.kr || ct,
        labelEn: info?.en || ct,
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

}

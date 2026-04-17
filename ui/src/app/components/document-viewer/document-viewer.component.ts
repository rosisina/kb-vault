// Aurora v2 — Annotated Evidence Reader (완전 재설계)
// 6 features: layer dots, right-panel atoms, scroll tracking, image lightbox,
//             layer chip navigation, back/ESC navigation
import {
  Component, Output, EventEmitter, signal, computed,
  OnInit, OnDestroy, HostListener, inject,
} from '@angular/core';
import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { GraphDataService } from '../../services/graph-data.service';
import { GraphNode } from '../../models/graph.models';

export interface TocEntry { id: string; title: string; level: number; layer?: number; }
export interface Section { id: string; level: number; title: string; body: string; layer?: number; }
export interface PaperData {
  title: string; subtitle: string; author: string; date: string;
  toc: TocEntry[]; sections: Section[];
}

export const LAYER_COLORS = ['', '#b03030', '#cc5a10', '#d4881f', '#2a6e35', '#1a5ab0', '#5a2a9a', '#9a2060'];
const LAYER_KR = ['', 'KIATIS 은폐', 'KIATIS 조작', '카르텔', '시험평가 조작', '허위신고', '사기수사', '기소유예'];
const LAYER_EN = ['', 'KIATIS Concealment', 'KIATIS Manipulation', 'DCIA Cartel', 'Eval Manipulation', 'False Report', 'Fraud Prosecution', 'Kiso-Yuye'];

function detectLayer(title: string): number | null {
  const t = title.toLowerCase();
  if (/layer[-\s]?1|1st[-\s]layer|first[-\s]layer/.test(t)) return 1;
  if (/layer[-\s]?2|2nd[-\s]layer|second[-\s]layer/.test(t)) return 2;
  if (/layer[-\s]?3|3rd[-\s]layer|third[-\s]layer/.test(t)) return 3;
  if (/layer[-\s]?4|4th[-\s]layer|fourth[-\s]layer/.test(t)) return 4;
  if (/layer[-\s]?5|5th[-\s]layer|fifth[-\s]layer/.test(t)) return 5;
  if (/layer[-\s]?6|6th[-\s]layer|sixth[-\s]layer/.test(t)) return 6;
  if (/layer[-\s]?7|7th[-\s]layer|seventh[-\s]layer/.test(t)) return 7;
  return null;
}

@Component({
  selector: 'app-document-viewer',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.scss',
})
export class DocumentViewerComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  @Output() atomSelect = new EventEmitter<string>();

  paper = signal<PaperData | null>(null);
  activeSection = signal<string | null>(null);
  currentLayer = signal<number | null>(null);
  tocOpen = signal(true);
  searchQuery = signal('');
  lightboxSrc = signal<string | null>(null);
  lightboxAlt = signal('');
  selectedAtom = signal<GraphNode | null>(null);

  readonly layerColors = LAYER_COLORS;
  readonly allLayers = [1, 2, 3, 4, 5, 6, 7];
  layerSectionMap: Record<number, string> = {};

  filteredSections = computed(() => {
    const p = this.paper();
    if (!p) return [];
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return p.sections;
    return p.sections.filter(s =>
      s.title.toLowerCase().includes(q) || s.body.toLowerCase().includes(q)
    );
  });

  relatedAtoms = computed((): GraphNode[] => {
    const layer = this.currentLayer();
    if (layer === null) return [];
    return this.graphData.getNodes(layer)
      .sort((a, b) => {
        const order = { CORROBORATED: 0, WEAKENED: 1, NEEDS_MORE_EVIDENCE: 2, UNFALSIFIABLE: 3 };
        return (order[a.verdict as keyof typeof order] ?? 3) - (order[b.verdict as keyof typeof order] ?? 3);
      })
      .slice(0, 10);
  });

  constructor(
    public lang: LanguageService,
    public graphData: GraphDataService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.http.get<PaperData>('assets/paper.json').subscribe(data => {
      data.sections = data.sections.map(s => ({ ...s, layer: detectLayer(s.title) ?? undefined }));
      for (const s of data.sections) {
        if (s.layer && !this.layerSectionMap[s.layer]) this.layerSectionMap[s.layer] = s.id;
      }
      this.paper.set(data);
    });
  }

  ngOnDestroy(): void {}

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      if (this.lightboxSrc()) { this.lightboxSrc.set(null); }
      else { this.close.emit(); }
    }
  }

  // Scroll tracking — called on content area scroll
  onContentScroll(event: Event): void {
    const container = event.target as HTMLElement;
    const containerTop = container.getBoundingClientRect().top;
    const sections = Array.from(container.querySelectorAll<HTMLElement>('[data-section-id]'));
    let current: HTMLElement | null = null;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top - containerTop <= 120) current = sec;
    }
    if (current) {
      const id = current.getAttribute('data-section-id');
      const layer = current.getAttribute('data-section-layer');
      if (id && id !== this.activeSection()) this.activeSection.set(id);
      if (layer) {
        const n = parseInt(layer);
        if (n !== this.currentLayer()) this.currentLayer.set(n);
      }
    }
  }

  scrollTo(id: string): void {
    this.activeSection.set(id);
    const el = document.getElementById('pv-' + id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  jumpToLayer(layer: number): void {
    const id = this.layerSectionMap[layer];
    if (id) this.scrollTo(id);
    else {
      // fallback: search for layer mention in sections
      const sec = this.paper()?.sections.find(s => s.layer === layer);
      if (sec) this.scrollTo(sec.id);
    }
  }

  handleBodyClick(event: Event): void {
    const el = event.target as HTMLElement;
    if (el?.classList.contains('record-link')) {
      const rec = el.getAttribute('data-record');
      if (rec) {
        const n = parseInt(rec.replace(/,/g, ''));
        const atoms = this.graphData.getAtomsByRecordNo(n);
        // Show first matching atom in right panel
        if (atoms.length > 0) this.selectedAtom.set(atoms[0]);
      }
    }
    if (el?.tagName === 'IMG') {
      this.lightboxSrc.set((el as HTMLImageElement).src);
      this.lightboxAlt.set((el as HTMLImageElement).alt);
    }
  }

  onAtomClick(atom: GraphNode): void {
    this.selectedAtom.set(atom);
  }

  navigateToAtom(atomId: string): void {
    this.atomSelect.emit(atomId);
    this.close.emit();
  }

  layerLabel(layer: number): string {
    return this.lang.lang() === 'kr' ? LAYER_KR[layer] : LAYER_EN[layer];
  }

  verdictClass(verdict: string): string {
    const map: Record<string, string> = {
      CORROBORATED: 'v-corr', WEAKENED: 'v-weak',
      NEEDS_MORE_EVIDENCE: 'v-nme', UNFALSIFIABLE: 'v-unf',
    };
    return map[verdict] || '';
  }

  verdictLabel(verdict: string): string {
    if (this.lang.lang() === 'kr') {
      const m: Record<string, string> = { CORROBORATED: '입증', WEAKENED: '약화', NEEDS_MORE_EVIDENCE: '증거필요', UNFALSIFIABLE: '반증불가' };
      return m[verdict] || verdict;
    }
    const m: Record<string, string> = { CORROBORATED: 'Corroborated', WEAKENED: 'Weakened', NEEDS_MORE_EVIDENCE: 'NME', UNFALSIFIABLE: 'Unfalsifiable' };
    return m[verdict] || verdict;
  }

  renderBody(body: string): SafeHtml {
    let text = body;

    // Strip TOC page-number dot-leaders (e.g. "Institutional Response…………………………1")
    text = text.replace(/[.…·⋯]{3,}\s*\d+\s*$/gm, '');
    // Strip orphaned bare section-number lines at start (e.g. "1.1.\n1.1.1.\n")
    text = text.replace(/^(\d+(\.\d+)*\.?\s*\n)+/gm, '');

    // Fix broken headings: "#### TITLE\n\nContinuation" (1-3 orphaned words) → merge back
    // Covers PDF line-breaks that split a heading title across a blank line
    text = text.replace(/^(#{3,6} .+)\n\n([A-Z][^\n]{0,40})$/gm, (m, heading, cont) => {
      // Only merge if continuation looks like a title fragment (≤6 words, no sentence verb markers)
      const wordCount = cont.trim().split(/\s+/).length;
      const looksLikeSentence = /\bthe\b|\bwas\b|\bwere\b|\bhad\b|\bin\b|\bof\b|\ba\b/i.test(cont) && wordCount > 3;
      return looksLikeSentence ? m : `${heading} ${cont}`;
    });

    // Convert markdown headings before other processing
    text = text.replace(/^##### (.+)$/gm, '§H5§$1§H5END§');
    text = text.replace(/^#### (.+)$/gm, '§H4§$1§H4END§');
    text = text.replace(/^### (.+)$/gm, '§H3§$1§H3END§');

    // Inline formatting
    text = text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
      .replace(/^---$/gm, '<hr class="md-hr">')
      .replace(/Record No\. ([\d,]+)/g,
        '<span class="record-link" data-record="$1" title="Click to find related atoms">Record No. $1</span>');

    // Smart paragraph detection to fix PDF word-wrap artifacts:
    // 1. Multiple blank lines → paragraph break
    text = text.replace(/\n{2,}/g, '§PARA§');
    // 2. \n before markdown-style headings → paragraph break
    text = text.replace(/\n(§H[345]§)/g, '§PARA§$1');
    // 3. Heading end → paragraph break
    text = text.replace(/(§H[345]END§)\n?/g, '$1§PARA§');
    // 4. \n before numbered list items (e.g. "3.1.1.2." or decimal numbers)
    text = text.replace(/\n(\d+\.)/g, '§PARA§$1');
    // 5. Single \n after sentence-ending punctuation followed by uppercase/Korean → paragraph break
    text = text.replace(/([.!?;"'])\n([A-Z가-힣])/g, '$1§PARA§$2');
    // 6. Remaining \n = PDF word-wrap soft-break → join with space
    text = text.replace(/\n/g, ' ');
    // 7. Restore paragraph breaks as proper <p> tags
    text = '<p>' + text.replace(/§PARA§/g, '</p><p>') + '</p>';
    // 8. Restore headings
    text = text.replace(/<p>§H5§(.+?)§H5END§<\/p>/g, '<h5 class="pv-subhead5">$1</h5>');
    text = text.replace(/<p>§H4§(.+?)§H4END§<\/p>/g, '<h4 class="pv-subhead">$1</h4>');
    text = text.replace(/<p>§H3§(.+?)§H3END§<\/p>/g, '<h3 class="pv-subhead3">$1</h3>');
    // 9. Clean up empty paragraphs and HR edge cases
    text = text.replace(/<p>\s*<\/p>/g, '');
    text = text.replace(/<p>(<hr[^>]*>)<\/p>/g, '$1');

    return this.sanitizer.bypassSecurityTrustHtml(text);
  }

  atomTitle(node: GraphNode): string {
    if (this.lang.lang() === 'en') {
      return this.lang.translateNamesInText(node.titleEn || node.title);
    }
    return node.title;
  }
}

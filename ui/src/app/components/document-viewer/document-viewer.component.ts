// Aurora v2 — Beyond Cybersecurity Paper Viewer
import { Component, Output, EventEmitter, signal, computed, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

interface TocEntry { id: string; title: string; level: number; }
interface Section { id: string; level: number; title: string; body: string; }
interface PaperData {
  title: string; subtitle: string; author: string; date: string;
  toc: TocEntry[]; sections: Section[];
}

@Component({
  selector: 'app-document-viewer',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './document-viewer.component.html',
  styleUrl: './document-viewer.component.scss',
})
export class DocumentViewerComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() atomSearch = new EventEmitter<string>();

  paper = signal<PaperData | null>(null);
  activeSection = signal<string | null>(null);
  tocOpen = signal(true);
  searchQuery = signal('');

  filteredSections = computed(() => {
    const p = this.paper();
    if (!p) return [];
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return p.sections;
    return p.sections.filter(s =>
      s.title.toLowerCase().includes(q) || s.body.toLowerCase().includes(q)
    );
  });

  constructor(
    public lang: LanguageService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.http.get<PaperData>('assets/paper.json').subscribe(data => {
      this.paper.set(data);
      if (data.sections.length > 0) this.activeSection.set(data.sections[0].id);
    });
  }

  scrollTo(id: string): void {
    this.activeSection.set(id);
    const el = document.getElementById('paper-section-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  handleBodyClick(event: Event): void {
    const el = event.target as HTMLElement;
    if (el?.classList.contains('record-link')) {
      const rec = el.getAttribute('data-record');
      if (rec) this.atomSearch.emit(`Record No. ${rec}`);
    }
  }

  renderBody(body: string): SafeHtml {
    const html = body
      // Markdown bold/italic
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Markdown horizontal rule
      .replace(/^---$/gm, '<hr>')
      // Clickable Record No. links
      .replace(/Record No\. ([\d,]+)/g, '<span class="record-link" data-record="$1">Record No. $1</span>')
      // Preserve line breaks
      .replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

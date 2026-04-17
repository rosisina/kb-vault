// Aurora v2 — LangTitlePipe
// Returns titleEn for EN mode, title (KR) otherwise. Falls back to title if titleEn absent.
import { Pipe, PipeTransform } from '@angular/core';
import { GraphNode } from '../models/graph.models';
import { LanguageService } from '../services/language.service';

@Pipe({ name: 'langTitle', standalone: true, pure: false })
export class LangTitlePipe implements PipeTransform {
  constructor(private lang: LanguageService) {}

  transform(node: GraphNode | null | undefined): string {
    if (!node) return '';
    if (this.lang.lang() === 'kr') return node.title;
    // EN mode: use titleEn if available; otherwise apply name substitution to Korean title
    const base = node.titleEn || node.title;
    return node.titleEn ? base : this.lang.translateNamesInText(base);
  }
}

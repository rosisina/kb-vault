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
    return this.lang.lang() === 'kr' ? node.title : (node.titleEn || node.title);
  }
}

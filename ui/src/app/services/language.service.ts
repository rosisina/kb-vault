// Aurora v2 — i18n Language Service (3-tier: UI labels / domain terms / content)
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<'en' | 'kr'>('kr'); // default: Korean
  private translations: Record<string, Record<string, string>> = {};

  async init(): Promise<void> {
    const [kr, en] = await Promise.all([
      fetch('/assets/i18n/kr.json').then(r => r.json()),
      fetch('/assets/i18n/en.json').then(r => r.json()),
    ]);
    this.translations['kr'] = kr;
    this.translations['en'] = en;
  }

  t(key: string): string {
    return this.translations[this.lang()]?.[key] || key;
  }

  toggle(): void {
    this.lang.update(v => v === 'en' ? 'kr' : 'en');
  }
}

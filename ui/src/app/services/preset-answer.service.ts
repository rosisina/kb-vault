// Aurora v2 — Preset Answer Service
// Matches user queries against preset-answers.json using BM25 token similarity
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PresetAnswer {
  id: string;
  num: number;
  q_ko: string;
  q_en: string;
  answer_ko: string;
  answer_en: string;
  relatedAtoms: string[];
  fractures: string[];
  layers: number[];
  keyPersons: string[];
  category: string;
  type: string;
}

export interface PresetMatchResult {
  answer: PresetAnswer;
  score: number;
}

@Injectable({ providedIn: 'root' })
export class PresetAnswerService {
  private answers: PresetAnswer[] = [];
  loaded = signal(false);

  // Minimum recall score (matched query tokens / total query tokens) to treat as preset match
  private readonly MATCH_THRESHOLD = 0.6;

  constructor(private http: HttpClient) {
    this.http.get<{ answers: PresetAnswer[] }>('assets/preset-answers.json')
      .subscribe(data => {
        this.answers = data.answers;
        this.loaded.set(true);
      });
  }

  /** Find best-matching preset answer for a query. Returns null if below threshold. */
  findMatch(query: string, lang: 'kr' | 'en'): PresetMatchResult | null {
    if (!this.loaded() || this.answers.length === 0) return null;
    const terms = this.tokenize(query);
    if (terms.size < 2) return null;

    let best: PresetMatchResult | null = null;

    for (const answer of this.answers) {
      const qText = lang === 'en' ? answer.q_en : answer.q_ko;
      const score = this.jaccardSim(terms, this.tokenize(qText));
      if (score > (best?.score ?? 0)) {
        best = { answer, score };
      }
    }

    if (!best || best.score < this.MATCH_THRESHOLD) return null;
    return best;
  }

  /** Return top N matches regardless of threshold (for "suggested questions" UI). */
  topMatches(query: string, lang: 'kr' | 'en', n = 5): PresetMatchResult[] {
    if (!this.loaded() || this.answers.length === 0) return [];
    const terms = this.tokenize(query);
    if (terms.size === 0) return [];

    return this.answers
      .map(answer => {
        const qText = lang === 'en' ? answer.q_en : answer.q_ko;
        const score = this.jaccardSim(terms, this.tokenize(qText));
        return { answer, score };
      })
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, n);
  }

  private tokenize(text: string): Set<string> {
    if (!text) return new Set();
    const stopwords = new Set([
      '은', '는', '이', '가', '을', '를', '의', '에', '에서', '으로', '로', '도', '만',
      '왜', '어떻게', '무엇', '어떤', '인가', '인지', '는가', '은가', '했는가', '하는가',
      '무엇인가', '무엇인지', '누구인가', '있는가', '있나', '했나', '하는가', '됩니까', '됩니다',
      '인가요', '인지요', '란', '이란', '이다', '했는지', '어떤가', '어떤지',
      'the', 'a', 'an', 'is', 'are', 'was', 'were', 'of', 'in', 'for', 'to', 'and',
      'how', 'why', 'what', 'which', 'that', 'this',
    ]);
    const raw = text.toLowerCase()
      .replace(/[?!.,;:'"()\[\]{}\-\/\\]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 1 && !stopwords.has(t));
    return new Set(raw);
  }

  /** Soft recall: fraction of tokens in `a` that match any token in `b`.
   *  Match rules (in order): exact → substring (≥3) → Korean 2-char prefix */
  private jaccardSim(a: Set<string>, b: Set<string>): number {
    if (a.size === 0 || b.size === 0) return 0;
    const isKorean = (t: string) => /[가-힣]/.test(t);
    const softMatch = (t: string, s: Set<string>): boolean => {
      if (s.has(t)) return true;
      for (const u of s) {
        if (t.length >= 3 && u.length >= 3 && (t.includes(u) || u.includes(t))) return true;
        // Korean 2-char prefix: 이력이 ↔ 이력을, 삭제되었나 ↔ 삭제하는
        if (isKorean(t) && isKorean(u) && t.length >= 3 && u.length >= 3 && t.slice(0, 2) === u.slice(0, 2)) return true;
      }
      return false;
    };
    const matched = [...a].filter(t => softMatch(t, b)).length;
    return matched / a.size;
  }
}

// Aurora v2 — Query Input (하단 고정, v1 Gemini 검색창 스타일)
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-query-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="query-bar">
      <div class="search-box-bottom">
        <div class="search-input-row">
          <input class="search-input-gemini"
                 [(ngModel)]="query"
                 (keyup.enter)="onSubmit()"
                 [placeholder]="lang.lang() === 'kr' ? '오로라에게 질문해 보세요' : 'Ask Aurora'">
          <button class="search-submit" (click)="onSubmit()">
            <span class="material-icons">send</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .query-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px 24px 14px;
      background: var(--aurora-bg, #fafafa);
      border-top: 1px solid var(--aurora-border, #e0e0e0);
      display: flex;
      justify-content: center;
      z-index: 50;
    }

    .search-box-bottom {
      width: 100%;
      max-width: 720px;
      border: 1px solid var(--aurora-border, #e0e0e0);
      border-radius: 24px;
      background: var(--aurora-surface, #ffffff);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: box-shadow 0.2s ease, border-color 0.2s ease;

      &:focus-within {
        border-color: var(--aurora-primary, #1a237e);
        box-shadow: 0 4px 16px rgba(26, 35, 126, 0.15);
      }
    }

    .search-input-row {
      display: flex;
      align-items: center;
      padding: 10px 8px 10px 24px;
    }

    .search-input-gemini {
      flex: 1;
      border: none;
      outline: none;
      font-size: 1rem;
      font-family: 'Inter', 'Noto Sans KR', sans-serif;
      color: var(--aurora-text, #212121);
      background: transparent;
      line-height: 1.5;

      &::placeholder {
        color: var(--aurora-text-secondary, #757575);
        font-size: 0.95rem;
      }
    }

    .search-submit {
      color: var(--aurora-primary, #1a237e);
      background: transparent;
      border: none;
      cursor: pointer;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover { background: var(--aurora-primary-pale, #e8eaf6); }

      .material-icons { font-size: 20px; }
    }
  `],
})
export class QueryInputComponent {
  @Output() search = new EventEmitter<string>();
  query = '';

  constructor(public lang: LanguageService) {}

  onSubmit(): void {
    if (this.query.trim()) {
      this.search.emit(this.query.trim());
      this.query = '';
    }
  }
}

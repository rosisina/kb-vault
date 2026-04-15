// Aurora v2 CP-3 — Hover Preview (Obsidian 개념 적용)
// atom 링크에 마우스를 올리면 claim + verdict + layer 미리보기 팝업 표시
import { Directive, Input, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { GraphDataService } from '../services/graph-data.service';

@Directive({
  selector: '[atomTooltip]',
  standalone: true,
})
export class AtomTooltipDirective implements OnInit, OnDestroy {
  @Input('atomTooltip') atomId: string = '';

  private tooltipEl: HTMLElement | null = null;
  private showTimeout: ReturnType<typeof setTimeout> | null = null;
  private hideTimeout: ReturnType<typeof setTimeout> | null = null;

  private boundShow = this.show.bind(this);
  private boundHide = this.scheduleHide.bind(this);
  private boundMove = this.reposition.bind(this);

  constructor(
    private el: ElementRef<HTMLElement>,
    private graphData: GraphDataService,
  ) {}

  ngOnInit(): void {
    const host = this.el.nativeElement;
    host.addEventListener('mouseenter', this.boundShow);
    host.addEventListener('mouseleave', this.boundHide);
    host.addEventListener('mousemove', this.boundMove);
  }

  ngOnDestroy(): void {
    const host = this.el.nativeElement;
    host.removeEventListener('mouseenter', this.boundShow);
    host.removeEventListener('mouseleave', this.boundHide);
    host.removeEventListener('mousemove', this.boundMove);
    this.destroy();
  }

  private show(e: MouseEvent): void {
    if (this.hideTimeout) { clearTimeout(this.hideTimeout); this.hideTimeout = null; }
    if (this.tooltipEl) return;

    this.showTimeout = setTimeout(() => {
      const node = this.graphData.getNodeById(this.atomId);
      const detail = this.graphData.getDetail(this.atomId);
      if (!node && !detail) return;

      const tip = document.createElement('div');
      tip.className = 'atom-hover-preview';

      // Header: Layer chip + verdict
      const header = document.createElement('div');
      header.className = 'ahp-header';

      const layerChip = document.createElement('span');
      layerChip.className = 'ahp-layer';
      const layer = node?.layer ?? detail?.layer ?? 0;
      layerChip.style.background = `var(--aurora-layer-${layer})`;
      layerChip.textContent = `L${layer}`;
      header.appendChild(layerChip);

      if (node?.claimType) {
        const ct = document.createElement('span');
        ct.className = 'ahp-claim-type';
        ct.textContent = node.claimType;
        header.appendChild(ct);
      }

      if (node?.verdict) {
        const verdict = document.createElement('span');
        verdict.className = `ahp-verdict ahp-verdict-${node.verdict.toLowerCase()}`;
        verdict.textContent = node.verdict;
        header.appendChild(verdict);
      }

      if (node?.strength) {
        const strength = document.createElement('span');
        strength.className = 'ahp-strength';
        strength.textContent = node.strength;
        header.appendChild(strength);
      }

      tip.appendChild(header);

      // Title
      const title = node?.title ?? detail?.title ?? '';
      if (title) {
        const titleEl = document.createElement('div');
        titleEl.className = 'ahp-title';
        titleEl.textContent = title.length > 120 ? title.slice(0, 120) + '...' : title;
        tip.appendChild(titleEl);
      }

      // Claim excerpt
      const claim = detail?.claim ?? '';
      if (claim) {
        const claimEl = document.createElement('div');
        claimEl.className = 'ahp-claim';
        claimEl.textContent = claim.length > 180 ? claim.slice(0, 180) + '...' : claim;
        tip.appendChild(claimEl);
      }

      // Truth axes (compact)
      if (node) {
        const axes = document.createElement('div');
        axes.className = 'ahp-axes';
        const dots = (score: number) => {
          const filled = Math.round(score / 2);
          return '\u25CF'.repeat(filled) + '\u25CB'.repeat(5 - filled);
        };
        axes.innerHTML = `
          <span class="ahp-axis truthfulness">\uC9C4\uB9AC ${dots(node.truthfulness)}</span>
          <span class="ahp-axis validity">\uD0C0\uB2F9 ${dots(node.validity)}</span>
          <span class="ahp-axis sincerity">\uC9C4\uC2E4 ${dots(node.sincerity)}</span>
        `;
        tip.appendChild(axes);
      }

      // Record Nos (compact)
      if (detail?.allRecordNos && detail.allRecordNos.length > 0) {
        const records = document.createElement('div');
        records.className = 'ahp-records';
        const shown = detail.allRecordNos.slice(0, 3).join(', ');
        const extra = detail.allRecordNos.length > 3 ? ` +${detail.allRecordNos.length - 3}` : '';
        records.textContent = `Record: ${shown}${extra}`;
        tip.appendChild(records);
      }

      // Prevent tooltip from disappearing when hovering over tooltip itself
      tip.addEventListener('mouseenter', () => {
        if (this.hideTimeout) { clearTimeout(this.hideTimeout); this.hideTimeout = null; }
      });
      tip.addEventListener('mouseleave', () => {
        this.scheduleHide();
      });

      document.body.appendChild(tip);
      this.tooltipEl = tip;
      this.positionTooltip(e.clientX, e.clientY);
    }, 300);
  }

  private scheduleHide(): void {
    if (this.showTimeout) { clearTimeout(this.showTimeout); this.showTimeout = null; }
    this.hideTimeout = setTimeout(() => this.destroy(), 200);
  }

  private reposition(e: MouseEvent): void {
    if (this.tooltipEl) {
      this.positionTooltip(e.clientX, e.clientY);
    }
  }

  private positionTooltip(x: number, y: number): void {
    if (!this.tooltipEl) return;
    const tip = this.tooltipEl;
    const margin = 12;

    // Initial position: below and to the right of cursor
    let left = x + margin;
    let top = y + margin;

    // Measure tooltip
    const rect = tip.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Flip horizontally if overflowing right
    if (left + rect.width > vw - margin) {
      left = x - rect.width - margin;
    }
    // Flip vertically if overflowing bottom
    if (top + rect.height > vh - margin) {
      top = y - rect.height - margin;
    }
    // Clamp
    left = Math.max(margin, left);
    top = Math.max(margin, top);

    tip.style.left = `${left}px`;
    tip.style.top = `${top}px`;
  }

  private destroy(): void {
    if (this.showTimeout) { clearTimeout(this.showTimeout); this.showTimeout = null; }
    if (this.hideTimeout) { clearTimeout(this.hideTimeout); this.hideTimeout = null; }
    if (this.tooltipEl) {
      this.tooltipEl.remove();
      this.tooltipEl = null;
    }
  }
}

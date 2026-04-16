#!/usr/bin/env python3
"""
i18n-bulk-reanchor.py — Bulk re-anchor all atoms to Korean-first bilingual format.

For each atom in wiki/claims/:
  1. Skip atoms already converted (those with ## 주장 (Claim) header)
  2. Update Source: vault-converted-korean/ → Korean/
  3. Update all 8 section headers to bilingual 한글(영어) format
  4. Wrap Claim section content with ### 한국어 / ### English placeholder

Usage:
    python3 scripts/i18n-bulk-reanchor.py [--dry-run] [--layer N]
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
CLAIMS_DIR = REPO_ROOT / "wiki" / "claims"

DRY_RUN = "--dry-run" in sys.argv

# Optional: process only specific layer
LAYER_FILTER = None
for arg in sys.argv[1:]:
    if arg.startswith("--layer="):
        LAYER_FILTER = int(arg.split("=")[1])

# ── Section header mapping ────────────────────────────────────────────
HEADER_MAP = {
    "## Claim":                 "## 주장 (Claim)",
    "## Key Takeaways":         "## 핵심 요약 (Key Takeaways)",
    "## Supporting evidence":   "## 지지 증거 (Supporting Evidence)",
    "## Counter-hypothesis":    "## 반대 가설 (Counter-hypothesis)",
    "## Falsification condition": "## 반증 조건 (Falsification Condition)",
    "## Verdict":               "## 평결 (Verdict)",
    "## Spot-check":            "## 원전 확인 (Spot-check)",
    "## Related":               "## 관련 (Related)",
    "## Open Questions":        "## 미결 사항 (Open Questions)",
    "## Layer":                 "## 층위 (Layer)",
}


def already_converted(body: str) -> bool:
    """Return True if atom already has bilingual headers (canary-complete)."""
    return "## 주장 (Claim)" in body


def update_source(body: str) -> str:
    """Update vault-converted-korean/ → Korean/ in Source line."""
    return body.replace(
        "vault-converted-korean/",
        "Korean/"
    ).replace(
        "vault-converted-english/",
        "English/"
    )


def update_headers(body: str) -> str:
    """Replace English-only ## headers with bilingual forms."""
    for old, new in HEADER_MAP.items():
        # Match exactly (line starting with old header)
        body = re.sub(
            rf"^{re.escape(old)}\s*$",
            new,
            body,
            flags=re.MULTILINE
        )
    return body


def add_claim_subsections(body: str) -> str:
    """Wrap ## 주장 (Claim) section with ### 한국어 / ### English placeholder.

    After update_headers(), the Claim section is already "## 주장 (Claim)".
    This function checks if it already has ### 한국어 — if not, wraps content.
    """
    CLAIM_HEADER = "## 주장 (Claim)"

    idx = body.find(f"\n{CLAIM_HEADER}\n")
    if idx == -1:
        idx = body.find(f"\n{CLAIM_HEADER}")
    if idx == -1:
        return body  # No Claim section found — skip

    # Find where Claim section starts (after the header line)
    section_start = body.find("\n", idx + 1) + 1  # char after "\n## 주장 ...\n"

    # Find next ## section
    next_h = re.search(r"^## ", body[section_start:], re.MULTILINE)
    if next_h:
        section_end = section_start + next_h.start()
    else:
        section_end = len(body)

    claim_content = body[section_start:section_end].strip()

    # Already has subsections?
    if claim_content.startswith("### 한국어") or claim_content.startswith("###"):
        return body  # Already structured — leave alone

    # Wrap with subsections
    new_claim_content = (
        "\n"
        "### 한국어\n\n"
        f"{claim_content}\n\n"
        "### English\n\n"
        "<!-- pending: phase i18n-EN -->\n\n"
    )

    return body[:section_start] + new_claim_content + body[section_end:]


def update_spot_check(body: str) -> str:
    """Update Spot-check entries from vault-converted paths to Korean/ paths."""
    # Replace any remaining vault-converted-korean/ references in spot-check lines
    return re.sub(
        r"`vault-converted-korean/([^`]+)`",
        lambda m: f"`Korean/{m.group(1)}`",
        body
    ).sub if False else re.sub(
        r"`vault-converted-korean/([^`]+)`",
        lambda m: f"`Korean/{m.group(1)}`",
        body
    )


def process_atom(path: Path) -> tuple[bool, str]:
    """Process one atom. Returns (modified, reason)."""
    body = path.read_text(encoding="utf-8")

    # Skip already converted
    if already_converted(body):
        return False, "already-converted"

    # Optional layer filter
    if LAYER_FILTER is not None:
        layer_m = re.search(r"layer-(\d)", body)
        if not layer_m or int(layer_m.group(1)) != LAYER_FILTER:
            return False, "layer-skip"

    new_body = body

    # Step 1: Update source citations
    new_body = update_source(new_body)

    # Step 2: Update section headers
    new_body = update_headers(new_body)

    # Step 3: Add ### 한국어 / ### English to Claim section
    new_body = add_claim_subsections(new_body)

    # Step 4: Update spot-check vault paths
    new_body = re.sub(
        r"`vault-converted-korean/([^`]+)`",
        lambda m: f"`Korean/{m.group(1)}`",
        new_body
    )
    new_body = re.sub(
        r"vault-converted-korean/ lines? \d+",
        "",
        new_body
    )

    if new_body == body:
        return False, "no-change"

    if not DRY_RUN:
        path.write_text(new_body, encoding="utf-8")

    return True, "updated"


def main() -> int:
    if not CLAIMS_DIR.exists():
        print(f"[error] claims dir not found: {CLAIMS_DIR}", file=sys.stderr)
        return 1

    mode = "DRY RUN" if DRY_RUN else "LIVE"
    layer_msg = f" (layer {LAYER_FILTER} only)" if LAYER_FILTER else ""
    print(f"[info] {mode}{layer_msg} — i18n bulk re-anchor")

    stats = {"updated": 0, "already-converted": 0, "no-change": 0, "layer-skip": 0}
    paths = sorted(CLAIMS_DIR.glob("*.md"))
    total = sum(1 for p in paths if not p.name.startswith("_"))

    for path in paths:
        if path.name.startswith("_"):
            continue
        try:
            modified, reason = process_atom(path)
            stats[reason] = stats.get(reason, 0) + 1
            if modified:
                print(f"  [updated] {path.name}")
        except Exception as e:
            print(f"  [error] {path.name}: {e}", file=sys.stderr)

    print(f"\n[ok] {mode} complete")
    print(f"  total atoms  : {total}")
    print(f"  updated      : {stats.get('updated', 0)}")
    print(f"  already done : {stats.get('already-converted', 0)}")
    print(f"  no change    : {stats.get('no-change', 0)}")
    if LAYER_FILTER:
        print(f"  layer-skip   : {stats.get('layer-skip', 0)}")

    return 0


if __name__ == "__main__":
    sys.exit(main())

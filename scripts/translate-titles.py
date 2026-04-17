#!/usr/bin/env python3
"""
translate-titles.py — translate Korean atom titles to English for Aurora UI.

Reads ui/src/assets/graph.json, finds nodes whose titleEn is absent or still
Korean, calls the Claude API in batches (prompt caching on system prompt), and
writes:
  - ui/src/assets/graph.json          (in-place update)
  - scripts/translations-title-patch.json  (durable patch for future rebuilds)

Usage:
    python3 scripts/translate-titles.py [--dry-run] [--layer N] [--limit N]

Requires:
    ANTHROPIC_API_KEY env var (or ~/.anthropic key file)
    pip install anthropic
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

import anthropic

REPO_ROOT = Path(__file__).resolve().parent.parent
GRAPH_JSON = REPO_ROOT / "ui" / "src" / "assets" / "graph.json"
PATCH_FILE = Path(__file__).parent / "translations-title-patch.json"

SYSTEM_PROMPT = """\
You are a precise legal-military translator for a Korean criminal evidence system.
Translate Korean atom titles to concise English. Rules:
1. Preserve ALL technical terms verbatim: KIATIS, DIDC, 国전원/국전원 (DCIA),
   MND, Active-X, Record No., L1-L7 layer references, directive numbers
   (제2129호 → 제2129호), article citations (제58조 → 제58조).
2. Preserve Korean proper names as Romanized (e.g., 한지훈 → Han Ji-hoon,
   박성호 → Park Seong-ho) ONLY if no pseudonym is standard — otherwise keep
   as-is when ambiguous.
3. Keep role-anchor suffixes: (공문결재자-1) → (Document-Approver-1).
4. Output must be a single JSON object mapping input index (string) to the
   English title (string). No extra explanation.
5. Titles should be ≤ 120 characters. Omit articles (a/the) where natural.
6. Legal/prosecution terms: 기소유예 → "Prosecutorial Deferral",
   무혐의 → "No Probable Cause", 불기소 → "Non-Indictment",
   갑질 → "workplace harassment / power abuse",
   균열 → "fracture", 조작 → "manipulation/fabrication".
"""


def is_mostly_korean(text: str) -> bool:
    """Return True if text contains significant Korean characters."""
    korean = len(re.findall(r"[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]", text))
    return korean > 5


def load_existing_patch() -> dict:
    if PATCH_FILE.exists():
        try:
            data = json.loads(PATCH_FILE.read_text(encoding="utf-8"))
            return data.get("titleEn", {})
        except Exception:
            pass
    return {}


def save_patch(patch: dict) -> None:
    existing = {}
    if PATCH_FILE.exists():
        try:
            existing = json.loads(PATCH_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    existing["titleEn"] = patch
    existing.setdefault("_meta", {
        "generator": "translate-titles.py",
        "note": "titleEn patches for Korean atoms; applied by atoms-to-graph-json.py",
    })
    PATCH_FILE.write_text(
        json.dumps(existing, ensure_ascii=False, indent=2), encoding="utf-8"
    )


def translate_batch(
    client: anthropic.Anthropic,
    batch: list[tuple[str, str]],  # [(node_id, korean_title), ...]
) -> dict[str, str]:
    """Translate a batch of titles. Returns {node_id: english_title}."""
    payload = {str(i): item[1] for i, item in enumerate(batch)}
    user_msg = (
        "Translate each Korean title to English. Return JSON only.\n\n"
        + json.dumps(payload, ensure_ascii=False)
    )

    try:
        msg = client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=4096,
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_msg}],
        )
        raw = msg.content[0].text.strip()
        # Strip markdown fences if present
        raw = re.sub(r"^```(?:json)?\s*", "", raw)
        raw = re.sub(r"\s*```$", "", raw)
        result_idx = json.loads(raw)
        return {
            batch[int(k)][0]: v
            for k, v in result_idx.items()
            if int(k) < len(batch)
        }
    except Exception as e:
        print(f"  [warn] batch translate error: {e}", file=sys.stderr)
        return {}


def main() -> int:
    parser = argparse.ArgumentParser(description="Translate Korean atom titles")
    parser.add_argument("--dry-run", action="store_true", help="Print plan, no API calls")
    parser.add_argument("--layer", type=int, help="Only translate nodes on this layer")
    parser.add_argument("--limit", type=int, default=0, help="Max nodes to translate (0=all)")
    parser.add_argument("--batch-size", type=int, default=20, help="Items per API call")
    args = parser.parse_args()

    if not GRAPH_JSON.exists():
        print(f"[error] graph.json not found: {GRAPH_JSON}", file=sys.stderr)
        return 1

    data = json.loads(GRAPH_JSON.read_text(encoding="utf-8"))
    nodes = data.get("nodes", [])

    # Load existing patch to avoid re-translating
    existing_patch = load_existing_patch()

    # Identify nodes needing translation
    to_translate: list[tuple[str, str]] = []  # (id, korean_title)
    for node in nodes:
        nid = node.get("id", "")
        title = node.get("title", "")
        title_en = node.get("titleEn", "")

        # Skip if already genuinely English
        if title_en and not is_mostly_korean(title_en):
            continue
        # Skip if we already have a patch
        if nid in existing_patch:
            continue
        # Layer filter
        if args.layer and node.get("layer") != args.layer:
            continue

        to_translate.append((nid, title))

    if args.limit:
        to_translate = to_translate[: args.limit]

    print(f"Nodes needing translation: {len(to_translate)}")
    print(f"Existing patch entries:    {len(existing_patch)}")

    if args.dry_run:
        for nid, title in to_translate[:10]:
            print(f"  [{nid}] {title[:80]}")
        if len(to_translate) > 10:
            print(f"  ... and {len(to_translate) - 10} more")
        return 0

    if not to_translate:
        print("Nothing to translate.")
        return 0

    api_key = os.environ.get("ANTHROPIC_API_KEY") or ""
    if not api_key:
        # Try ~/.anthropic
        key_file = Path.home() / ".anthropic"
        if key_file.exists():
            api_key = key_file.read_text().strip()
    if not api_key:
        print("[error] ANTHROPIC_API_KEY not set", file=sys.stderr)
        return 1

    client = anthropic.Anthropic(api_key=api_key)

    # Process in batches
    patch = dict(existing_patch)
    batch_size = args.batch_size
    total_batches = (len(to_translate) + batch_size - 1) // batch_size

    for i in range(0, len(to_translate), batch_size):
        batch = to_translate[i : i + batch_size]
        batch_num = i // batch_size + 1
        print(f"  Batch {batch_num}/{total_batches} ({len(batch)} items)...", end=" ", flush=True)

        results = translate_batch(client, batch)
        patch.update(results)
        print(f"done ({len(results)} translated)")

        # Save incrementally after each batch
        save_patch(patch)

        # Rate limit: small pause between batches
        if i + batch_size < len(to_translate):
            time.sleep(0.5)

    # Apply patch to graph.json
    applied = 0
    for node in nodes:
        nid = node.get("id", "")
        if nid in patch and is_mostly_korean(node.get("titleEn", "")):
            node["titleEn"] = patch[nid]
            applied += 1

    GRAPH_JSON.write_text(
        json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\ngraph.json updated: {applied} titleEn fields patched")
    print(f"Patch saved to: {PATCH_FILE}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

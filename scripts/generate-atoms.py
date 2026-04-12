#!/usr/bin/env python3
"""
generate-atoms.py — Batch-generate claim atom files from structured JSON input.

Usage:
    python3 scripts/generate-atoms.py /tmp/atom-proposals.json

Input JSON format: array of objects, each with:
    {
        "filename": "lowercase-hyphenated-max-60.md",
        "title": "Korean title of the claim",
        "source": "raw/01. book-beyond-cybersecurity/vault-converted-korean/...",
        "section": "§3.5.3.4.1",
        "lines": "423-470",
        "layer_primary": 5,
        "layer_secondary": [1, 6],
        "result_id": "FR-L5-REVERSED-TRUTH",
        "claim_type": "evidence_rebuttal",
        "claim_kr": "Korean claim text...",
        "takeaways_en": ["English bullet 1 [진리성]", "English bullet 2 [타당성]"],
        "records": ["3,889", "3,893"],
        "counter_hypothesis": "Alternative explanation...",
        "falsification_condition": "What would disprove...",
        "verdict": "CORROBORATED",
        "strength": "STRONG",
        "scores": [9, 8, 9],
        "summary": "Brief summary for Aurora node",
        "related": ["[[atom-1]]", "[[../layers/layer-5|Layer 5]]"]
    }

Output: writes wiki/claims/{filename} for each entry.

Features:
- Auto-pseudonymizes using ../defense-kg-platform/kg/pseudonym_mapping.json
- Validates required fields
- Skips existing files (no overwrite)
"""

import json
import os
import sys
from datetime import date

WIKI_CLAIMS = "wiki/claims"
PSEUDONYM_PATH = "../defense-kg-platform/kg/pseudonym_mapping.json"

def load_pseudonym_mapping():
    """Load real→pseudo Korean name mapping."""
    try:
        with open(PSEUDONYM_PATH) as f:
            data = json.load(f)
        mapping = {}
        for m in data.get("mappings", []):
            mapping[m["origin_name_kr"]] = m["pseudo_name_kr"]
        return mapping
    except Exception as e:
        print(f"[warn] Could not load pseudonym mapping: {e}")
        return {}

def pseudonymize(text, mapping):
    """Replace all real names with pseudonyms."""
    replaced = []
    for real, pseudo in mapping.items():
        if real in text:
            text = text.replace(real, pseudo)
            replaced.append(f"{real}→{pseudo}")
    return text, replaced

def generate_atom(entry, mapping, today):
    """Generate a complete atom markdown file from structured entry."""
    fn = entry["filename"]
    if not fn.endswith(".md"):
        fn += ".md"

    # Build layer line
    lp = entry["layer_primary"]
    layer_line = f"[[../layers/layer-{lp}|Layer {lp}]]"
    for ls in entry.get("layer_secondary", []):
        layer_line += f", [[../layers/layer-{ls}|Layer {ls}]] (secondary)"

    # Build records
    records_block = ""
    for r in entry.get("records", []):
        records_block += f"- **Record No. {r}**\n"
    if not records_block:
        records_block = "- *(regulation-text claim — Record No. exempt per CLAUDE.md)*\n"

    # Build takeaways
    takeaways = ""
    for t in entry.get("takeaways_en", []):
        takeaways += f"- {t}\n"

    # Build related
    related = ""
    for r in entry.get("related", []):
        related += f"- {r}\n"
    if not related:
        related = f"- [[../layers/layer-{lp}|Layer {lp}]]\n"

    scores = entry.get("scores", [8, 8, 8])

    content = f"""# {entry["title"]}

**Source:** {entry["source"]} {entry["section"]} (lines {entry["lines"]})
**Layer:** {layer_line}
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {{resultId: "{entry["result_id"]}"}})
SET fr.layer = {lp},
    fr.claimType = "{entry["claim_type"]}",
    fr.claimDesc = "{entry.get("summary", "").replace('"', '\\"')[:500]}",
    fr.counterHypothesis = "{entry["counter_hypothesis"].replace('"', '\\"')[:300]}",
    fr.falsificationCondition = "{entry["falsification_condition"].replace('"', '\\"')[:300]}",
    fr.verdict = "{entry["verdict"]}",
    fr.strength = "{entry["strength"]}",
    fr.truthfulness = {scores[0]},
    fr.validity = {scores[1]},
    fr.sincerity = {scores[2]},
    fr.analysisDate = date("{today}"),
    fr.summary = "{entry.get("summary", "").replace('"', '\\"')[:500]}";
```

## Claim

{entry["claim_kr"]}

## Key Takeaways

{takeaways}
## Supporting evidence

{records_block}
## Counter-hypothesis

{entry["counter_hypothesis"]}

## Falsification condition

{entry["falsification_condition"]}

## Verdict

**{entry["verdict"]}.** {entry["strength"]}. 진리성 {scores[0]} / 타당성 {scores[1]} / 진실성 {scores[2]}.

## Spot-check

- `vault-converted-korean/{entry["source"].split("/")[-1]}` lines {entry["lines"]}

## Related

{related}"""

    # Pseudonymize
    content, replacements = pseudonymize(content, mapping)

    return fn, content, replacements

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/generate-atoms.py <proposals.json>")
        sys.exit(1)

    input_path = sys.argv[1]
    with open(input_path) as f:
        proposals = json.load(f)

    mapping = load_pseudonym_mapping()
    today = date.today().isoformat()

    created = 0
    skipped = 0
    pseudonym_fixes = 0

    for entry in proposals:
        fn, content, replacements = generate_atom(entry, mapping, today)
        filepath = os.path.join(WIKI_CLAIMS, fn)

        if os.path.exists(filepath):
            print(f"[skip] {fn} (already exists)")
            skipped += 1
            continue

        with open(filepath, "w") as f:
            f.write(content)

        if replacements:
            print(f"[pseudonym] {fn}: {len(replacements)} names auto-replaced")
            pseudonym_fixes += len(replacements)

        print(f"[ok] {fn}")
        created += 1

    print(f"\n[done] created={created}, skipped={skipped}, pseudonym_fixes={pseudonym_fixes}")

if __name__ == "__main__":
    main()

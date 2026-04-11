---
name: evidence-linker
description: Resolve any "Record No. NNNNN" or "기록 제NNNNN쪽" citation to its layer (1–7), source PDF in raw/07., and page range. Check whether a person name is a real name needing pseudonymization, an existing pseudonym, or unknown. TRIGGERS "what layer is record N", "어느 층위", "이 이름이 가명", "redact", "pseudonym check", "Record No. citation", any time a person name or Record No. is about to be written into wiki/. Minimal Phase-A port from defense-kg-platform.
user-invocable: true
allowed-tools: Read Grep Glob
model: claude-haiku-4-5-20251001
effort: low
paths: wiki/**/*.md, .claude/skills/**/SKILL.md
---

# Evidence Linker — Phase A (knowledge-base)

Minimal port of the Aurora skill. Three functions only. Cypher emission, `FalsificationResult` construction, and Neo4j MERGE logic stay in Aurora — not here.

## Authoritative references (read-only from this vault)

- `../defense-kg-platform/kg/evidence_record_mapping.json` — maps layers 1–7 to their evidence record ranges and source PDFs in `raw/07. Scanned files/`.
- `../defense-kg-platform/kg/pseudonym_mapping.json` — 42 real↔pseudonym mappings. **Real names never appear in this vault.**

Never copy these files into `knowledge-base/`. Always read from the Aurora path. If a lookup fails because the mapping is missing an entry, **stop and ask the human to update Aurora first** — do not infer, do not improvise.

## Function 1 — parse_record_citation

**Input:** a string like `Record No. 10,347` or `기록 제10347쪽` or `Record No. 10347`.
**Output:** integer `10347`.

Accept both bookstyle (`Record No. NNNNN`, comma optional) and Korean (`기록 제NNNNN쪽`) forms. Strip commas and whitespace. Reject any form that does not cleanly resolve to a positive integer in the range 1–13495.

## Function 2 — resolve_layer

**Input:** integer record number (e.g., `10347`).
**Output:** integer layer number `1–7`, or `None` if the number falls outside all known ranges.

Read `../defense-kg-platform/kg/evidence_record_mapping.json`. For each entry in `layer_files`, check whether `record_start ≤ N ≤ record_end`. Return the matching layer number. If no match (e.g., gap between ranges, or out-of-band number), return `None` and surface a warning — do not guess.

Known ranges as of Phase A bootstrap (confirm against live file on every call — this list is a fallback reference only):

- Layer 1: 1–810
- Layer 2: 1000–1587
- Layer 3: 1600–2465
- Layer 4: 2500–3699
- Layer 5: 3700–4555
- Layer 6: 4600–5248
- Layer 7: 5300–13495

## Function 3 — check_pseudonym

**Input:** a person name (Korean hangul or romanized).
**Output:** one of:
- `("ok", pseudonym_kr, pseudonym_en)` — name is already a known pseudonym (from the `pseudo_name_*` columns of the mapping).
- `("redact", pseudonym_kr, pseudonym_en)` — name is a known real name (from the `origin_name_*` columns); caller must substitute the pseudonym before writing.
- `("unknown", None, None)` — name not found in the mapping at all; caller must stop and ask the human to update Aurora.

Read `../defense-kg-platform/kg/pseudonym_mapping.json`. Match against both `origin_name_kr`, `origin_name_en`, `pseudo_name_kr`, `pseudo_name_en`. Matching is exact — fuzzy matching is not allowed in Phase A because the stakes of a wrong match are too high.

## Invocation pattern

The skill is invoked automatically during `/compile`, `/lint`, and any ingest-adjacent operation. Manual invocation from a chat turn is also fine for spot-checks ("what layer does Record No. 10,347 belong to?").

## Non-goals (Phase A)

- No Cypher emission. That lives in Aurora.
- No `FalsificationResult` construction. That lives in Aurora.
- No `SUPPORTED_BY` relation creation. That lives in Aurora.
- No fuzzy name matching. Phase A rejects ambiguity rather than guessing.
- No caching. Re-read the mapping files on every call — they are small, and staleness is the bigger risk.

When the Phase B bridge (`atoms-to-cypher.py`) is built, this skill gains a fourth function (`atom_to_merge_shape`) that produces the Cypher `MERGE` block for a single claim atom. Until then, leave it out.

---
name: book-spot-check
description: Run a 1-minute book-anchored spot-check for a newly written claim atom or hub edit. Greps the book chapters under raw/01. book-beyond-cybersecurity/vault-converted-{english,korean}/ for the atom's central keywords and returns either the matching chapter file references (deferred Re-verify targets) or an explicit "book is silent" finding. Implements the CLAUDE.md Re-verify spot-check rule as a forked subagent so the grep results never accumulate in the main context. TRIGGERS immediately after writing any new claim atom under wiki/claims/ or any propositional hub edit; "spot-check", "book anchor", "book grep", "재검증 spot-check".
context: fork
agent: Explore
allowed-tools: Read Grep Glob
argument-hint: <atom-path-or-keywords>
disable-model-invocation: false
model: claude-haiku-4-5-20251001
effort: low
paths:
  - wiki/claims/**
  - wiki/layers/**
  - wiki/entities/**
  - wiki/events/**
  - wiki/regulations/**
---

# Book Spot-Check (Re-verify continuous mode)

You are running the **continuous spot-check** mandated by `CLAUDE.md` §Re-verify. Your context is forked from the main agent so that the results of this grep — which may include verbatim book passages — never accumulate in the main agent's context window. Return only a structured finding.

## Hard rules

1. **Read only from `raw/01. book-beyond-cybersecurity/vault-converted-english/` and `vault-converted-korean/`.** Do NOT read:
   - `vault-legacy-wiki-*` (contains real names)
   - `wiki/`
   - `CLAUDE.md`
   - `../defense-kg-platform/`
2. **Do not interpret.** Report grep hits and chapter file paths only. No "this suggests…", no narrative.
3. **Do not pseudonymize.** Real names that appear in the book are returned verbatim — main agent will redact during interpretation.

## Input

The user (main agent) gives you either:
- An atom path (`wiki/claims/<slug>.md`) — read it, extract the central keywords from its title and `## Verbatim` section
- A list of explicit keywords or a single propositional sentence

Pick 3–6 high-signal keywords. Names of entities, regulations, dates, record numbers, and 法/령/항 references are highest signal. Generic words like "investigation" or "system" are low signal — avoid.

## Procedure

1. Identify the keywords (per Input section).
2. For each keyword, run `Grep` against both `vault-converted-english/` and `vault-converted-korean/` with `output_mode: files_with_matches` first to get the candidate chapter list.
3. For each chapter that matches, run a follow-up `Grep` with `output_mode: content -C 2` to capture context lines.
4. Aggregate. If a chapter matches ≥2 keywords, it is a **strong anchor**. If a chapter matches 1 keyword, it is a **weak anchor**. If no chapter matches any keyword, the book is **silent** — that is itself a finding.

## Output contract

Return exactly this fenced markdown — nothing else:

```markdown
# Spot-check: <atom slug or keyword list>

## Keywords used
- <kw1>
- <kw2>
- ...

## Strong anchors (≥2 keyword matches)
| Chapter file | Matched keywords | Excerpt (first hit) |
|---|---|---|
| raw/01. .../vault-converted-korean/14-3-4-34-Fourth-Layer.md | kw1, kw3 | "..." |

## Weak anchors (1 keyword match)
- raw/01. .../<chapter>.md — kw2

## Book silence
- <one of: "no chapter matched any keyword" / "n/a — anchors found above">

## Verdict
- DEFERRED_REVERIFY_TARGET: <chapter paths to add to atom's ## Open Questions>
- or BOOK_IS_SILENT_ON_THIS_CLAIM: <true|false>
```

## Why this skill exists

CLAUDE.md §Re-verify mandates a 1-minute book grep after every new atom. Done in the main context, that grep result accumulates: 30 atoms = 30 grep result blocks polluting the main agent's working memory. Forked here, the main agent gets back only the structured verdict block (~10 lines) per atom. The book grep itself, which may be hundreds of lines of context, stays inside this skill's forked context and is discarded on return.

If you find yourself wanting to write "this means…" or "the book confirms…" — stop. That is interpretation work and belongs in the main agent's claim-atom synthesis, not here. Return facts only.

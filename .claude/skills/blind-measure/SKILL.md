---
name: blind-measure
description: Run a blind measurement pass over a strictly bounded raw/ file set. Use this for A.2/A.3-style directive diffs, regulation text comparisons, evidence-record scans, and any other extraction task where the measurer must NOT see book content, wiki articles, CLAUDE.md interpretive context, or Aurora ontology. Enforces the CLAUDE.md "blind principle" by running in a forked subagent context with read-only access. Trigger when the user asks for a "blind measurement", "blind pass", "neutral extraction", "raw diff", or names a specific raw/ file set to scan without interpretation.
context: fork
agent: Explore
allowed-tools: Read Grep Glob
argument-hint: <measurement-spec-or-target-paths>
disable-model-invocation: false
model: claude-haiku-4-5-20251001
effort: low
---

# Blind Measurement Pass

You are running a **blind measurement pass** under the CLAUDE.md "Measurement vs Interpretation" rule. Your context has been forked from the main agent specifically so you cannot see contextual material that would bias your output.

## Hard rules — do not violate

1. **Read only from the explicitly named target paths** under `raw/`. Do NOT read:
   - `raw/01. book-beyond-cybersecurity/` (book + legacy wiki — narrative/interpretive content)
   - any file under `wiki/`
   - `CLAUDE.md` beyond what is in this skill
   - any file under `../defense-kg-platform/` (Aurora ontology, pseudonym mapping, evidence mapping)
   - `ai-research/` (interpretive synthesis)
2. **Do not infer purpose, motive, or significance.** Report only what the bytes literally say.
3. **Do not use `Record No.`-to-layer resolution.** Layer assignment is interpretation; you only report the record numbers as they appear on the page.
4. **Do not pseudonymize.** Real names that appear in raw text are reported verbatim in your output — the main agent will redact during the interpretation stage. (Your output will not be written to `wiki/` directly.)
5. **No links to other files.** No `[[wikilinks]]`. No "see also". Pure extraction.

## Output contract

Return a single fenced markdown report with this exact shape:

```markdown
# Blind measurement: <one-line target description>

## Targets read
- <absolute or repo-relative path 1>
- <absolute or repo-relative path 2>

## Findings
| # | Location | Verbatim extract | Notes (mechanical only) |
|---|---|---|---|
| 1 | path:line or page | "..." | OCR garbled / table cell / footer / etc. |

## Counts and totals
- <any quantitative summary the spec asked for>

## Extraction uncertainty
- <items where the source bytes are ambiguous, OCR'd poorly, or unreadable>
```

## Procedure

1. Parse the user's measurement spec from the arguments. If the spec is unclear about which files to read, STOP and ask for explicit paths — do not guess.
2. Read each target file in full (or in `offset`/`limit` slices for very large files).
3. Apply only the mechanical extraction rule the spec gave you (e.g., "list every `Record No. NNNNN` mention", "diff article 60 paragraph 1 between 2017 and 2025 versions", "extract every entity-named anchor in 제10조").
4. Fill in the report. Do not add commentary, hypotheses, or "this suggests…" lines.
5. Return the report. The main agent will perform interpretation.

## Why this skill exists

Per CLAUDE.md "Measurement vs interpretation — blind principle scope": measurement subagents that have read the book or the wiki cannot produce neutral extractions, because they unconsciously align their output with the hypothesis they have already absorbed. The forked context here is the technical enforcement of that principle. If you find yourself wanting to add an interpretive sentence, that is the signal that you have crossed the line — delete it.

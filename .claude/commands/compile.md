---
description: Ingest new sources from raw/ (and ai-research/) into the wiki per CLAUDE.md rules. Fan-out by raw/ subfolder when scope is large.
argument-hint: [path-or-subfolder-or-empty]
allowed-tools: Read Write Edit Grep Glob Bash(pdftotext *) Bash(markitdown *) Bash(python *) Bash(python3 *) Bash(jq *) Bash(cat *) Bash(ls *)
---

Run the **Ingest** operation. This file is the canonical procedure — CLAUDE.md no longer duplicates the Ingest section as of 2026-04-11 split.

Target: $ARGUMENTS (if empty, scan all of `raw/` and `ai-research/` for files newer than the last `ingest` entry in `wiki/log.md`).

## Wiki article contract (mandatory for every article written by this operation)

- **# Title** at top — bilingual format where applicable: `# English (한국어)`
- **`**Source:** path/to/raw/file.md`** line immediately under the title (multiple sources comma-separated)
- **`**Layer:** [[../layers/layer-N|Layer N]]`** line immediately after Source (multi-layer articles list all)
- **`**Aurora node:**`** line giving the corresponding Cypher `MERGE` shape (encouraged, e.g., `:Evidence {evidenceId: "E-L4-0127", docPage: 2891}`)
- **Intro paragraph** (2 to 4 sentences) summarizing the article
- **`## Key Takeaways`** with bullet points; tag claims with `[진리성]` / `[타당성]` / `[진실성]` where relevant; every takeaway should cite at least one `Record No. NNNNN` or directive citation
- **`## Verbatim`** (event, claim, contested-fact pages only) with exact Korean/English quotes and `Record No.` citations — no paraphrase
- **`## Related`** with `[[wikilinks]]` to 3–8 related pages
- **`## Open Questions`** (where applicable) flagging gaps, OCR uncertainty, fractures
- **`## Spot-check (raw/01 book)`** (claim atoms) — book chapter references from the spot-check rule; see `/reverify` for the rule

## Index updates after each article

1. Update the topic's `_index.md` to list the new article
2. Update `wiki/_master-index.md` if a new topic was created or an existing topic changed meaningfully
3. Append one line to `wiki/log.md` in this format:
   ```
   ## [YYYY-MM-DD HH:MM] ingest | Source title | topic/article.md
   ```

## Multi-topic sources

If the source spans multiple topics, create articles in both topics and cross-link them.

## Scope decision (single-file vs fan-out)

Before doing any work, decide which mode to use:

- **Single-file mode** — if the target is one specific file (e.g., `/compile raw/04. law-and-regulation/훈령-2129.pdf`) or fewer than 3 files total. The main agent does the read → convert → write → index update sequentially.
- **Fan-out mode** — if the target spans an entire `raw/` subfolder OR more than 3 files OR no target is given (default). The main agent dispatches one Explore subagent per **independent subfolder**, then merges. Subfolders that are independent of each other:
  - `raw/02. Individual recording logs/` → typically Layer 5–6 (interview content)
  - `raw/03. Kakao talk data/` → typically Layer 4–6 (operational evidence)
  - `raw/04. law & regulation/` → typically Layer 1–3 (regulation anchors)
  - `raw/06. Investigation by the Military Prosecutor's Office/` → typically Layer 6
  - `raw/07. Scanned files/` → all layers (partition by record-number range)
  - `ai-research/` → variable

## Procedure (single-file mode)

1. Re-read `CLAUDE.md` — **Project Purpose**, **Language**, **PDF and scanned source conversion** sections (Ingest section is now in this file, not CLAUDE.md).
2. **Use the `evidence-linker` skill** for every Person reference and every `Record No. NNNNN` mention. Do not grep the mapping JSONs directly. The skill returns `(ok|redact|unknown)` for names and `(layer, source PDF)` for record numbers. On `unknown`, halt and ask James to update Aurora.
3. Convert the source per the PDF section (cache as `*.converted.md` next to the original; never re-convert).
4. For every cited fact, include a `Record No. NNNNN` citation in `## Verbatim` or `## Key Takeaways`. File-level citations alone are not acceptable.
5. Every article has a `**Layer:**` line directly under `**Source:**`.
6. After writing articles, update affected `_index.md`, `wiki/_master-index.md`, `wiki/timeline.md` (if events changed), `wiki/_fractures.md` (if fractures surfaced), and append to `wiki/log.md`.
7. **Run `book-spot-check` skill** for every new claim atom (it dispatches a forked Haiku subagent). Add the returned chapter references to the atom's `## Open Questions` section.
8. Report: files written, fractures flagged, atoms promotable to Aurora.

## Procedure (fan-out mode)

1. Re-read `CLAUDE.md` (same as single-file).
2. Identify the in-scope subfolders. For each, compute the file delta (files newer than the last ingest entry in `wiki/log.md` for that subfolder). Skip subfolders with zero new files.
3. **Dispatch one Explore subagent per subfolder, in a single message with multiple Agent calls.** Each subagent receives:
   - The subfolder path
   - The list of new files to process
   - Instructions to: convert (cache `*.converted.md`), draft wiki articles **into a temporary list returned in the response — do NOT call Write yet**, invoke `evidence-linker` for every name/record, invoke `book-spot-check` for every claim atom drafted
   - Output contract: a structured list of `{target_wiki_path, content, citations, pseudonym_hits, spot_check_result}` per draft article
   - Hard rule: subagents do NOT touch `wiki/_master-index.md`, `wiki/timeline.md`, `wiki/_fractures.md`, or `wiki/log.md` — those are shared state and only the main agent writes them
4. **Merge step (main agent, sequential):**
   a. For each draft returned by each subagent, the main agent calls `Write` to materialize it. The PreToolUse `check-pseudonym.sh` hook runs as a defense-in-depth check.
   b. Update `wiki/_master-index.md`, affected `_index.md` files, `wiki/timeline.md`, `wiki/_fractures.md` — these are shared and must be merged by a single writer to avoid conflicts.
   c. Append a single `wiki/log.md` entry summarizing the whole fan-out pass.
5. Final report: per-subfolder counts of (files written, fractures, promotable atoms, pseudonym hits caught by hook).

## Hard rules (both modes)

- **Never invent `Record No.` citations.** If a number is unclear, flag under `## Open Questions`.
- **Never write to `raw/`** except `*.converted.md` cache files alongside their PDFs.
- **Never bypass `evidence-linker` for name/record lookups.**
- **Never let a subagent touch shared index files** in fan-out mode — that is the merge-step responsibility of the main agent, by design.
- If a subagent reports any `unknown` pseudonym, halt the entire fan-out before the merge step and surface to James.
- Subagents must return drafts as data, not as side-effects. This keeps the main agent in control of the actual write order and lets the PreToolUse hook see every write.

---
description: Run a book-anchored Re-verify pass — dispatches one Explore subagent per layer (1–7) in parallel and merges into a single audit report under output/.
argument-hint: [layer-numbers-or-empty]
allowed-tools: Read Grep Glob Write Edit Bash(date *)
---

Run the **Re-verify (재검증)** operation as defined in `CLAUDE.md`.

Target layers: $ARGUMENTS (if empty, run all 7 layers in parallel).

## Procedure

1. Re-read the **Re-verify** section of `CLAUDE.md` and the **Aurora integration → 7-layer proof system** section so layer↔chapter mapping is fresh.
2. List every wiki article tagged with each layer by grepping `wiki/layers/layer-N` references and `**Layer:**` lines under `wiki/`. Build per-layer file lists.
3. Resolve the corresponding book chapter file(s) under `raw/01. book-beyond-cybersecurity/vault-converted-korean/` (and English equivalents) for each layer using the `0{N+6}-3-…-제{N}층위-…md` pattern. If a layer's chapter file is unclear, list the candidates and pick by content match — do not guess.
4. **Dispatch one Explore subagent per layer in parallel** (single message, multiple Agent tool calls). Each subagent receives:
   - Its layer number
   - The exact list of wiki files to check
   - The exact list of book chapter files to anchor against
   - The pseudonym caution from `CLAUDE.md` (any new real name halts the pass)
   - The output contract: a per-file consistency table with columns `wiki_file | book_section | record_no_trace | verdict` where verdict ∈ `CONSISTENT | WIKI_NEEDS_PATCH | BOOK_NEEDS_FOLLOWUP | NEW_ATOM_NEEDED`
   - Explicit instruction NOT to write any files — only return the table
5. Merge the seven subagent reports into `output/reverification-report-YYYY-MM-DD.md` with sections per layer plus a top-level rollup of counts by verdict.
6. For each `WIKI_NEEDS_PATCH` row, ask the user to confirm before applying patches. The book is authoritative; the wiki conforms to it. Log each patch as `fix` in `wiki/log.md`.
7. For each `NEW_ATOM_NEEDED` row, draft the atom under `wiki/claims/` and link from the relevant hub.
8. For each `BOOK_NEEDS_FOLLOWUP` row, escalate to `wiki/_contradictions.md` and a dedicated claim atom.
9. Append one entry to `wiki/log.md` in the form:
   ```
   ## [YYYY-MM-DD HH:MM] reverify | layers: <list> | output/reverification-report-YYYY-MM-DD.md
   ```

## Token-budget guardrails

- The full 7-layer pass is estimated at 80~120k tokens. If the user passes a subset of layers, only dispatch those.
- Subagents must not read each other's outputs. The blind principle does not apply (this is interpretation-stage work and contextual reading is required) but each subagent's scope is its own layer only — cross-layer comparison is the main agent's job during merge.
- If a subagent reports more than ~10 `WIKI_NEEDS_PATCH` findings, pause and ask the user before proceeding to step 6 — that volume is a signal that the layer hub itself may be miscalibrated, not just individual atoms.

## What not to do

- Do not modify `raw/`, `vault-converted-*`, or `vault-legacy-wiki-*`. They are immutable.
- Do not write the per-layer reports to disk independently — only the merged report goes under `output/`.
- Do not promote any patch to Aurora during this pass. Re-verify is a wiki-side operation; Aurora promotion is `/promote-to-aurora`.

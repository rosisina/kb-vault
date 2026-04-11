---
description: Audit the wiki per CLAUDE.md Lint rules using parallel layer-partitioned subagents and write the merged report to output/.
allowed-tools: Read Grep Glob Write Bash(jq *) Bash(date *)
argument-hint: [layer-numbers-or-empty]
---

Run the **Lint** operation as defined in `CLAUDE.md` §Lint, using a **fan-out architecture** so the main agent never holds the whole vault in context.

Target: $ARGUMENTS (if empty, lint all 7 layers in parallel; if a layer subset is given, only those).

## Architecture

The lint operation is a **compiler pass**, not a quality essay. Decompose it as follows:

1. **Build per-layer file lists** (main agent, fast, single message):
   - `Glob` `wiki/**/*.md`
   - For each file, `Grep` for `**Layer:**` line and parse the layer numbers
   - Bucket files into 7 layer lists (a file with multiple layers appears in each)

2. **Dispatch in parallel** (single message, multiple Agent calls):
   - **One Explore subagent per layer** (1 through 7), each receiving its layer's file list
   - **One `pseudonym-scanner` agent** receiving the full wiki file list (it is fast and read-only, no need to partition)
   - **One `layer-auditor` agent** receiving the full wiki file list (same)

3. **Each Explore subagent's contract** (per-layer):
   - Run the 7 standard checks from CLAUDE.md §Lint on its file list only
   - Run the 5 augmented checks below on its file list only
   - Return a per-layer findings table — do NOT write any file
   - Format:
     ```markdown
     # Layer N findings
     | File | Check | Severity | Detail |
     |---|---|---|---|
     ```

4. **Merge** (main agent): combine the 7 layer reports + the pseudonym-scanner report + the layer-auditor report into `output/lint-report-YYYY-MM-DD.md`. Section by check type, then a per-layer roll-up at the bottom.

5. **Append** one entry to `wiki/log.md`:
   ```
   ## [YYYY-MM-DD HH:MM] lint | layers: <list> | output/lint-report-YYYY-MM-DD.md
   ```

## Augmented checks (run on every layer subagent in addition to the 7 standard ones)

1. **Pseudonym compliance** — handled by the `pseudonym-scanner` agent dispatched in parallel; layer subagents do NOT re-do this check (avoid duplicate work).
2. **Evidence citation coverage** — every article should contain at least one `Record No. NNNNN` citation, or explicitly declare `## Open Questions` about why not.
3. **Layer assignment correctness** — handled by the `layer-auditor` agent dispatched in parallel; layer subagents do NOT re-do this check.
4. **Aurora alignment** — every claim page should be serializable to a Cypher `MERGE` for a `FalsificationResult` node. Flag any that are missing `counterHypothesis` or `falsificationCondition`.
5. **Bilingual consistency** — articles whose source is Korean-only but body is English (or vice versa) get flagged per the Language rules.

## Subagent dispatch pattern (template)

When dispatching, every Explore subagent receives:

- Its layer number
- The exact list of file paths to lint
- Instructions to invoke the `evidence-linker` skill for any Record No. resolution it needs (do not grep the mapping JSON directly)
- An explicit "do not write any file — return findings only" instruction
- The output contract template above

The two specialized agents (`pseudonym-scanner`, `layer-auditor`) need only their `subagent_type` and a one-line scope instruction — their full system prompts already live in `.claude/agents/`.

## Hard rules

- **Do not apply any fixes during lint.** Wait for human approval of each fix afterward.
- **Never modify `raw/`.**
- **Layer subagents must not cross-reference each other's outputs** — that is the main agent's job during merge.
- If a layer subagent reports more than ~20 findings, do not truncate — pass them all through to the merged report. The main agent decides what to surface first.
- If `pseudonym-scanner` returns ANY violations, mark the entire lint pass as **CRITICAL** in the report header. A pseudonym leak is the highest-severity defect this vault recognizes.

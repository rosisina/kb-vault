---
description: Run the Research operation — search the web for sources on a topic, fetch them in parallel via subagents, and save each cleaned source as its own immutable file in ai-research/.
argument-hint: <topic-or-question>
allowed-tools: Read Write Glob Grep Bash(date *) Bash(ls *)
---

Run the **Research** operation. This file is the canonical procedure — CLAUDE.md no longer duplicates the Research section as of 2026-04-11 split.

Topic / question: $ARGUMENTS

## Core principle: one source, one file

Each URL becomes its own immutable markdown file in `ai-research/` with this exact frontmatter:

```
---
url: https://example.com/article
fetched: YYYY-MM-DD
summary: One-line description of what this source covers
---

[Full article content in markdown, cleaned, not summarized]
```

File names are descriptive lowercase-hyphenated, ASCII only, no Korean characters. Examples: `kiatis-removal-2017-mnd-press.md`, `dod-otne-guidelines-2010-discussion.md`. Files are immutable once written; on slug collision, append `-2`, `-3`, etc.

## Architecture

Research is a **parallel fan-out** by URL, not a sequential fetch loop. The main agent does the search-and-rank step alone, then dispatches one subagent per URL to fetch+clean+save. The main agent then runs `/compile` (or its inline equivalent) to ingest the saved files into `wiki/`.

## Procedure

### Stage 1 — Search and rank (main agent, single message)

1. Run `WebSearch` for the topic. Aim for 4–8 high-quality sources. Prioritize:
   - Primary sources (court documents, official statements, regulation text) over commentary
   - Sources whose date is verifiable
   - Sources in the language the wiki article will be written in (Korean for Korean topics, English for English topics)
3. For each candidate URL, decide on a slug for the eventual filename: lowercase-hyphenated, descriptive, no Korean characters. Format: `<topic-slug>-<source-slug>.md`. Example: `kiatis-removal-2017-mnd-press-release.md`.
4. Confirm none of the chosen filenames already exist in `ai-research/` (`Glob` check). Files in `ai-research/` are immutable — if a slug collides, append `-2`, `-3`, etc.

### Stage 2 — Parallel fetch (one subagent per URL, single message with multiple Agent calls)

For each URL, dispatch a `general-purpose` subagent with these instructions:

- `WebFetch` the URL with a prompt like *"Return the full article body as clean markdown. Strip nav, footers, ads, and cookie banners. Preserve headings, lists, blockquotes, dates, and any cited document references. Do not summarize."*
- Construct the file with the exact frontmatter shown above (one-source-one-file section)
- `Write` the file to the supplied target path under `ai-research/`
- Return: `{slug, target_path, byte_count, summary, fetch_status}`

### Stage 3 — Verify (main agent)

1. Confirm every dispatched subagent reported success. If any failed, record under `## Open Questions` of the eventual wiki article and proceed with the remaining sources.
2. List the files written.

### Stage 4 — Ingest (main agent)

Either:
- **Inline ingest** — proceed directly into the `/compile` Procedure (single-file mode if 1–3 files, fan-out mode if more) using the freshly saved `ai-research/` files as the source, OR
- **Defer** — return the file list to James and let him invoke `/compile ai-research/` separately

Default to inline ingest unless James said otherwise in the topic prompt.

### Stage 5 — Log

Append one entry to `wiki/log.md`:
```
## [YYYY-MM-DD HH:MM] research | <topic> | ai-research/<file1>.md, ai-research/<file2>.md, ...
```

## Hard rules

- **One source, one file.** Never combine multiple sources into a single `ai-research/` file. CLAUDE.md §Research is explicit on this.
- **`ai-research/` files are immutable once written.** Subagents must Write (create), never Edit. If a subagent's first Write fails, retry with a `-2` suffix rather than overwriting.
- **Save the FULL cleaned content.** Summarization happens in `wiki/`, not here. The `ai-research/` file is the source of truth for downstream lint/citation verification.
- **Subagents do not modify `wiki/` or `wiki/log.md`.** Only the main agent does Stage 4 and 5.
- **Use `general-purpose` subagent type, not `Explore`.** WebFetch/WebSearch are not in the Explore agent's tool set.
- **Pseudonyms still apply at ingest time.** The PreToolUse `check-pseudonym.sh` hook will fire when Stage 4 wiki articles are written, not when `ai-research/` files are written. That is intentional — `ai-research/` may legitimately contain real names from primary sources, just like `raw/`.

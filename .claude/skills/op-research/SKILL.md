---
name: op-research
description: Research a topic via web search and save sources into ai-research/. Triggered when the user says "research {topic}", "조사해줘", or when a query reveals gaps the wiki cannot answer from existing sources. One source one file rule — each URL becomes its own markdown file with frontmatter. After saving all sources, hand off to op-ingest for compilation into wiki/.
allowed-tools: Read Write Grep Glob WebFetch WebSearch Bash(ls *) Bash(wc *)
argument-hint: <topic-or-question>
disable-model-invocation: false
---

# Research Operation

Triggered when the human asks you to research a topic, or when a query reveals gaps the wiki cannot answer from existing sources.

## Procedure

1. **Search the web** for relevant, high-quality sources on the topic.
2. **One source, one file.** For EACH URL or source you find, save it as its OWN separate markdown file in `ai-research/`. Do NOT combine multiple sources into one file. If you found 4 URLs, that is 4 files. Use this format for each:
   ```
   ---
   url: https://example.com/article
   fetched: YYYY-MM-DD
   summary: One-line description of what this source covers
   ---

   [Full article content in markdown, cleaned, not summarized]
   ```
3. **File names** should be descriptive and lowercase hyphenated: `ai-research/qmd-github-readme.md`, `ai-research/qmd-hackernews-discussion.md`.
4. **Save the FULL cleaned content** from each source, not a summary. The wiki article is where summarization happens, not here. These files are the source of truth for citation verification.
5. **Do NOT overwrite existing files** in `ai-research/`. Always create new files. If a name collision occurs, suffix with `-2`, `-3`, etc.
6. **After saving ALL sources**, hand off to the `op-ingest` skill to compile them into `wiki/`. A single wiki article can cite multiple `ai-research/` files in its `**Source:**` line.
7. **In the wiki article's `**Source:**` line**, list every `ai-research/` file used so the lint pass can verify each claim back to its original source.

## Notes

- The human can review `ai-research/` at any time to see what you found.
- Files in `ai-research/` are immutable once saved.
- Use `general-purpose` subagent for URL-level fan-out (WebFetch is not in Explore tool set).
- If searching for Korean sources, prefer `:한국어` / `lang:ko` filters where supported.
- For library/framework documentation, prefer the `context7` MCP if available over generic web search.

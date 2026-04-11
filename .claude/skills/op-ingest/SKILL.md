---
name: op-ingest
description: Ingest a new raw/ source into the wiki. Triggered when the user says "compile", "컴파일", "ingest", drops new files in raw/, or invokes /compile. Reads the raw file in full, identifies topics, creates or updates wiki articles per the vault contract (Source/Layer/Aurora node/Key Takeaways/Verbatim/Related/Open Questions sections), updates topic _index.md and _master-index.md, appends a log entry to wiki/log.md. Use this skill for any wiki write that derives from a raw/ source.
allowed-tools: Read Grep Glob Write Edit Bash(pdftotext *) Bash(markitdown *) Bash(python3 *) Bash(jq *) Bash(rg *) Bash(ls *) Bash(wc *)
argument-hint: <raw-file-path-or-folder>
disable-model-invocation: false
---

# Ingest Operation

The ingest operation compiles a raw source into the wiki under the vault's article contract.

## When to invoke

- User says "compile" / "컴파일" / "ingest" / "컴파일해줘"
- User drops a new file under `raw/`
- User invokes `/compile <path>`
- Another skill (e.g., `op-research`) hands off compiled `ai-research/` files for ingestion

## Procedure

For each new raw file:

1. **Read the raw file in full.** If it is a PDF, first convert via `pdftotext` or `markitdown` and save the intermediate `.converted.md` next to the original (suffix `.converted.md`). The cache prevents re-conversion in future sessions.
2. **Identify the core topic(s)** the file covers.
3. **Check `wiki/_master-index.md`** to see if a matching topic folder already exists.
4. **If the topic exists**, read the topic's `_index.md` and any related articles, then write or update a wiki article covering the new source. Add backlinks from any articles it touches.
5. **If the topic does not exist**, create a new folder under `wiki/` with a lowercase hyphenated name. Create an `_index.md` inside it. Write the first wiki article for this topic.
6. **Before writing the first article in a new topic folder**, skim `wiki/_examples/` (`example-entity-page.md`, `example-concept-page.md`, `example-source-summary.md`) for shape. Match the closest template.

## Wiki article contract (mandatory)

Every wiki article must include:

- A top-level `# Title` (bilingual format where applicable: `# English (한국어)`).
- A `**Source:** path/to/raw/file.md` line immediately under the title. Multiple sources are listed comma-separated.
- A `**Layer:** [[../layers/layer-N|Layer N]]` line immediately after `**Source:**`. If the article spans layers, list all of them.
- (Optional but encouraged) An `**Aurora node:**` line giving the corresponding Cypher `MERGE` shape, e.g. `:Evidence {evidenceId: "E-L4-0127", docPage: 2891}`. This makes serialization to Aurora trivial.
- A short intro paragraph (2 to 4 sentences) summarizing the article.
- A `## Key Takeaways` section with bullet points. Tag claims with `[진리성]` / `[타당성]` / `[진실성]` where relevant. Every takeaway should cite at least one `Record No. NNNNN` or directive citation.
- (Event, claim, and contested-fact pages only) A `## Verbatim` section with exact Korean (or English) quotes and `Record No.` citations. No paraphrase.
- A `## Related` section with `[[wikilinks]]` to 3 to 8 related pages elsewhere in the wiki.
- (Where applicable) `## Open Questions` flagging gaps, OCR uncertainty, or contradictions with other articles.

## Index updates

7. Update the topic's `_index.md` to list the new article.
8. Update `wiki/_master-index.md` if a new topic was created or an existing topic changed meaningfully.

## Log

9. Append one line to `wiki/log.md` in this format:
   ```
   ## [YYYY-MM-DD HH:MM] ingest | Source title | topic/article.md
   ```

## Multi-topic sources

10. If the source spans multiple topics, create articles in both topics and cross-link them.

## Notes

- Raw files are typically PDFs that must first be converted to markdown.
- A single ingest pass may touch 10 to 15 wiki files, which is expected. Do all related updates in one run rather than spreading them across sessions.
- Pseudonym policy applies: every Person reference must use the pseudonym from `../defense-kg-platform/kg/pseudonym_mapping.json`. New real names halt the pass and require James's mapping addition.
- The spot-check rule from the Re-verify operation applies to every newly written claim atom: immediately after writing, perform a 1-minute book grep and record book chapter references.

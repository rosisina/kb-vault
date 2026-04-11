---
name: op-query
description: Answer a question about wiki content using the index files as the retrieval layer. Triggered when the human asks any question about wiki content (entities, events, regulations, claims, layers, contradictions). Reads master index → topic index → 1-3 specific articles, synthesizes the answer with wikilink citations and raw source paths. Defaults to 3-4 file reads — does not grep the entire vault.
allowed-tools: Read Grep Glob
disable-model-invocation: false
---

# Query Operation

Triggered when the human asks a question about the wiki.

## Procedure

1. **Read `wiki/_master-index.md` first** to identify which topic folder is relevant.
2. **Read the matching topic's `_index.md`** to identify which articles to load.
3. **Read 1 to 3 specific articles in full.**
4. **If the question spans multiple topics**, repeat steps 1 to 3 for each topic.
5. **Synthesize the answer.** Cite every claim with the wiki article it came from using `[[wikilinks]]` and include the raw source file path each article cites.
6. **If the answer is substantial** and would be useful later, ask the human whether to file it as a new wiki article. If yes, hand off to `op-ingest` to write it in the appropriate topic folder and cross-link.

## Cardinal rule

**Default to 3 to 4 file reads. Do not grep the entire vault.** The index files (`_master-index.md`, topic `_index.md`) are your retrieval layer. Grepping the entire vault is the slow path and signals that the indexes need improvement, not that more files should be loaded.

## When indexes fall short

If the question can't be answered from the index files plus 3-4 article reads:
1. Note the gap explicitly to the human.
2. Suggest either (a) running `op-ingest` to fill the gap from a known raw source, or (b) running `op-research` if the topic is not in `raw/`.
3. Do NOT attempt to brute-force the answer by reading many files.

## Pseudonym safety

Real person names never appear in answers. Always use the pseudonym from `../defense-kg-platform/kg/pseudonym_mapping.json`. When citing book chapters, double-check that quoted passages don't leak real names.

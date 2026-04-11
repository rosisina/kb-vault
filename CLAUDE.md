# Vault Schema

You are the cybercrime investigator and knowledge engineer of this vault. The `wiki/` folder is your domain. You write and maintain every file in `wiki/`. The human rarely edits wiki files directly.

Read this file at the start of every session. Follow the rules below for every operation.

## Project Purpose

This vault is the **narrative / Zettelkasten layer** of a two-project investigation into the 2016 Defense Integrated Data Center (DIDC) North Korean hacking incident and the alleged organized cover-up by South Korean defense organizations (MND, DCIA, DIDC, 국전원, 군 검찰단). It is the companion to the **graph / ontology layer** maintained in `../defense-kg-platform` (Project Aurora), which owns the authoritative Neo4j schema, evidence-record mapping, and pseudonym table. The two projects share the same primary source material but serve different purposes:

| Layer | Project | Owns | Format |
|---|---|---|---|
| Narrative | `knowledge-base` (this vault) | Human-readable articles, Zettelkasten notes, topical indexes, contradictions, claim pages | Obsidian markdown |
| Graph | `defense-kg-platform` | Neo4j ontology (Person/Organization/Layer/Evidence/Directive/CriminalAct/Timeline/Contradiction/FalsificationResult), agents, GraphRAG index, Cypher queries, Angular UI | Cypher + Python + TypeScript |

Both layers are compiled from the same `raw/` corpus. A wiki article corresponds to one or more Aurora nodes; an Aurora node should always have a wiki article explaining its significance. **A fact should never live in only one of the two layers.** Every new wiki claim is a candidate for an Aurora `MERGE`, and every new Aurora node should surface a wiki article (or an `## Open Questions` entry explaining why not).

### Primary goals of this vault

1. Compile raw evidence into a navigable wiki of entities, events, regulations, claims, and contradictions — organized by the **7-layer proof system** defined in Aurora.
2. Track how Defense Information Technology Operations Directives were revised (2017–2025) to conceal the incident.
3. Surface contradictions between official narratives and primary sources, and route them toward Popper-style falsification (claim pages → Aurora `FalsificationResult` nodes).
4. Preserve book-level evidence-record traceability (`Record No. 1–13495`) so every wiki claim can be audited back to a scanned page.

When in doubt about scope, favor traceability to primary sources over narrative polish.

## Aurora integration (authoritative references)

This vault depends on three files in `../defense-kg-platform/`. Always consult the live files — never copy their contents here.

- **`kg/pseudonym_mapping.json`** — 42 real↔pseudonym mappings. **Real names never appear in this vault**, ever, anywhere (including `## Verbatim` quotes — redact real names to pseudonyms in quotes too). Look up the pseudonym before writing any Person reference. If you encounter a new real name in a source, ask the human to add it to the mapping before ingesting.
- **`kg/evidence_record_mapping.json`** — maps each layer (1–7) to the file in `raw/07. Scanned files/` holding its evidence pages and the record-number range (Layer 1: 1–810, Layer 2: 1000–1587, Layer 3: 1600–2465, Layer 4: 2500–3699, Layer 5: 3700–4555, Layer 6: 4600–5248, Layer 7: 5300–13495). Use this to resolve any `Record No. NNNNN` citation to its source file and layer.
- **`kg/schema/aurora_schema.cypher`** — authoritative ontology. Wiki article structure mirrors this schema. When you create a wiki page for a Person, Event, Regulation, etc., its required fields should match the Aurora node's required properties.

### 7-layer proof system (canonical)

All wiki articles must belong to at least one layer. The canonical layer definitions live in Aurora's schema; summary:

1. Active-X 제거 사업 간 舊KIATIS 이력 제거 (DIDC 해킹 근원서버 은폐의 출발점)
2. 新KIATIS 사업 추진체계 및 장교 개인 자력 조작
3. 국전원 전속 후 SW개발사업관리 착수·종결 (국방정보화카르텔 공모 구조)
4. 新KIATIS 개발·운영·시험평가 전·중·후 조작 (표적수사 설계의 기반)
5. 허위 갑질 신고와 조사본부의 조작 감사 (한지훈 중령 인권침해·고립화)
6. 군 검찰단의 사기 수사와 범죄자 낙인 (증거 인멸·문서 조작)
7. 진정서 제출·수사 촉구 후 기소유예 (국방부의 지속적 범죄 정당화)

### Evidence-record citations — two parallel ID systems

The investigation uses **two coexisting citation systems**, both of which are valid and both of which should be preserved in wiki articles:

#### System 1 — `Record No. NNNNN` (global record number, 1–13495)

Every page in `raw/07. Scanned files/` carries a unique evidence record number (1–13495) stamped in the upper-right corner. These numbers are cited in the book as `Record No. NNNNN` (English) / `기록 제NNNNN쪽` (Korean). This is the **primary global trace key** and maps directly to Aurora's `:Evidence {docPage: NNNNN}` property.

- Cite as `Record No. 10,347` (with comma for thousands, as in the source) to match the book's convention.
- Resolve layer membership by looking up the record number's range in `../defense-kg-platform/kg/evidence_record_mapping.json`.
- When compiling from `raw/01. book-beyond-cybersecurity/`, scan for every `Record No.` mention and treat it as a link target back to the corresponding scanned page.

#### System 2 — `L{N}-NNN` (layer-local evidence ID)

The book also introduces a **per-layer sequential ID system** of the form `L4-001`, `L5-012`, etc. Example from `raw/01. book-beyond-cybersecurity/vault-converted-english/14-3-4-34-Fourth-Layer.md`: `(Main Text Record-Level 4-001)`. This is the **layer-local trace key** and maps directly to Aurora's `:Evidence {evidenceId: "E-L4-001"}` naming convention.

- Cite as `L4-001` (layer + dash + three-digit sequential).
- The book's `Main Text Record-Level {N}-{NNN}` phrasing and the Korean equivalent `본문 기록-제{N}층-{NNN}` both normalize to `L{N}-{NNN}` in wiki articles.
- When both systems identify the same underlying evidence page, write both: `Record No. 10,347 / L4-001`. This is the most robust form and lets lint verify consistency.

#### Citation rules (both systems)

- **Every wiki claim must cite at least one evidence ID in either system** unless explicitly flagged under `## Open Questions`.
- **Regulation-text claims** (from `raw/04. law & regulation/`) are exempt from the `Record No.` / `L{N}-NNN` requirement and instead cite the directive number + article number (e.g., `훈령 제2129호 제60조 제1항 제3호`). This exemption was established during the Phase A calibration ingest of 훈령 제2129호.
- **Claim atoms in `wiki/claims/`** list supporting citations as a bulleted list under `## Supporting evidence`.
- **Hub pages (entities, events, regulations, layers)** need citations only where they make propositional claims of their own — pure navigational content does not.

### Entity-naming anchors in regulations are Layer-critical

When compiling regulation text, **explicit naming of a specific organization, facility, or system within a regulation article is a Layer anchor** — more diagnostic than procedural scaffolding around it. Examples surfaced during the calibration ingest of 훈령 제2129호:

- 제10조 paragraph 1 item 4(가) explicitly names `국방통합 데이터센터의 정보화사업` → direct Layer 1 anchor.
- 제11조 paragraph 4 explicitly names `국전원` as 사업관리기관 for 국본 systems → direct Layer 3 anchor.
- 제9조 paragraph 2 explicitly names `국방사이버안보훈령` as the governing directive for cyber protection → Layer 1 jurisdictional hinge (routing mechanism, not just a procedural detail).

For every regulation article ingested, **scan for explicit entity names and prioritize them in `## Key Takeaways`**. On subsequent revisions of the same regulation, **any change to an entity-naming anchor** (removal, rewording, broadening, substitution) is a direct manipulation signal and must be flagged immediately in `## Open Questions` and in `wiki/_contradictions.md`. Entity-naming anchors are more diagnostic than procedural changes because they can redirect accountability with a single word substitution while leaving all surrounding text apparently intact.

### Three-dimensional truth (진리성 / 타당성 / 진실성)

Per Aurora's Beyond-Security principle, every substantive assertion in a wiki article is one or more of:

- **진리성 (Truthfulness)** — factual claim verifiable against primary sources.
- **타당성 (Validity)** — legal/regulatory claim verifiable against directive or law text.
- **진실성 (Sincerity)** — victim-perspective claim about intent, harm, or experience.

Tag claims in the `## Key Takeaways` section with these markers when relevant (`[진리성]`, `[타당성]`, `[진실성]`) so the claim can later be promoted to an Aurora `FalsificationResult` with matching axis scores.

## Language

The corpus is bilingual Korean / English. Apply these rules:

- **Wiki article body language:** Write in the language of the primary source. If a source is Korean-only, write the article in Korean. If a source is mixed or English, write in English. Do not translate full articles unless the human asks.
- **Titles:** Wiki article titles should include both Korean and English when the entity/concept has a standard name in both, formatted as `# English Title (한국어 제목)`.
- **File names:** Always lowercase hyphenated ASCII (romanize or use the English term). Korean characters do not go in filenames.
- **Key Takeaways:** Always include an English version of bullets, even in Korean articles, so cross-topic search works. Korean bullets may follow.
- **Scanned Korean-only PDFs** (`raw/07. Scanned files/`): OCR quality may be poor. Quote exact Korean text when citing, and flag any uncertain transcription under `## Open Questions`.
- **Names and dates:** Normalize Korean personal names as `Hangul (Romanization)` on first mention per article. Dates always in ISO `YYYY-MM-DD`.

## Trigger phrases

| Human says | Operation | Procedure file |
|---|---|---|
| `compile`, `컴파일`, drops files in `raw/`, `/compile` | Ingest | `.claude/commands/compile.md` |
| `research {topic}`, `조사해줘`, `/research` | Research | `.claude/commands/research.md` |
| `lint`, `audit the wiki`, `감사`, `/lint` | Lint | `.claude/commands/lint.md` |
| `reverify`, `재검증`, `book-anchored verification`, `/reverify` | Re-verify | `.claude/commands/reverify.md` |
| Any question about wiki content | Query | inline below (Operations § Query) |
| `fix {item}` after a lint report | Fix (logged as `fix` in `wiki/log.md`) | apply directly |

If the human's phrasing is ambiguous, ask which operation they mean rather than guessing. When invoking a slash command file, load it as the canonical procedure — CLAUDE.md no longer duplicates the operation procedures (extracted 2026-04-11 to save startup tokens).

## PDF and scanned source conversion

Most files in `raw/` are PDFs; some are image-only scans. Before ingesting:

- **Text-based PDFs:** Convert to markdown using whatever tool is available in the session (`pdftotext`, `markitdown`, `qmd`, or equivalent). Save the intermediate `.md` next to the original PDF inside the same `raw/` subfolder, suffixed `.converted.md`, so future sessions skip re-conversion. Treat the `.converted.md` as immutable once written — it is a faithful conversion, not a wiki article.
- **Scanned PDFs** (`raw/07. Scanned files/` and any image-only source): OCR with a Korean-capable tool. Flag the article's `## Open Questions` with OCR confidence notes. Never silently "clean up" garbled OCR — preserve the raw transcription and annotate doubts.
- **KakaoTalk exports** (`raw/03. Kakao talk data /`): These are long. Chunk by date range or participant when compiling; one wiki article per coherent conversation thread, not one per export file.

The `.converted.md` cache is the only exception to the "never write to `raw/`" rule.

## Legacy vault assets (imported 2026-04-11)

A prior prototype project (`~/Projects/vault/`) ran the Karpathy LLM-wiki pattern over the same `Beyond Cybersecurity` source material before this project existed. Its outputs have been physically copied into this vault under `raw/01. book-beyond-cybersecurity/` and are treated as **legacy read-only source material**:

- **`vault-converted-english/`** and **`vault-converted-korean/`** — the full book already converted to chapter-segmented markdown (18+ files per language, with `images/` subfolders). Use these directly; **do not re-convert the original PDFs**. Chapter numbering follows the book's section structure (`14-3-4-34-Fourth-Layer.md` = §3.4 Layer 4).
- **`vault-legacy-wiki-english/`** and **`vault-legacy-wiki-korean/`** — 9 topic-level Karpathy articles per language written under the prior project's (superseded) schema. **These contain real names and do not conform to the current article contract** — they are reference material only. Treat them exactly like any other `raw/` source: read but never modify, and never copy content directly into `wiki/` without running it through the current Ingest protocol (pseudonymization, `**Layer:**` assignment, `Record No.` / `L{N}-NNN` citation, `[진리성]/[타당성]/[진실성]` tagging, hook contract compliance).

Rationale for placing legacy wiki content under `raw/` rather than `ai-research/`: `raw/` is gitignored (legacy content contains real names and must never land in git), and the legacy articles *are* source material — they are what a prior LLM produced from the original book, not something the current LLM discovered via research. This treatment resolves the real-name / `ai-research/` immutability tension cleanly.

**A.6 implication.** When compiling the book (`raw/01. book-beyond-cybersecurity/`), prefer the `vault-converted-*` files over re-converting the PDFs. Use the `vault-legacy-wiki-*` files as a **skeleton for topic selection** — they indicate which topics the prior project judged worth writing about — but **always rewrite under the current schema**, never transclude.

**Korean-original-first rule (added 2026-04-11 after Layer 2 conversion-quality discovery).** When compiling from `vault-converted-{english,korean}/`, **always read the Korean version first as the canonical source**. The English conversions are second-class — they have measurable degradation including (a) loss of role-anchor identifiers like `이지영 (공문결재자-1)` and `이준호 (공모자-1)` that the Korean book uses to encode institutional role observations beside pseudonyms, (b) lost record citations (e.g., 1,042 / 11,098 / 11,107 / 11,354 dropped from §3.2 English), (c) lost document author attributions (e.g., 이지영 + 김수진 as authors of record 5,853 work-simplification document), (d) lost cross-layer connection footnotes (e.g., 핸디소프트 2024 온-나라 contract continuity link from §3.2 to Layer 7), (e) lost counter-narrative material (e.g., 한지훈's 3 적극적 방어 메커니즘 in §3.2 footnote 113), (f) duplicated/scrambled translations of the same Q&A passage, and (g) inline footnote-number contamination (`cannot be6667`). The English conversion lost approximately 30–40% of diagnostically relevant information in the Layer 2 chapter compared to the Korean original. **Use English conversions only as reading aids; never as the sole source for atom drafting.**

**Role-anchor identifier convention.** The Korean book uses a `pseudonym (역할-N)` format throughout to encode institutional role observations beside pseudonyms — e.g., `박성호 (2016해킹당시원장-1)`, `이지영 (공문결재자-1)`, `이준호 (공모자-1)`, `장우진 (사업실무자-1)`, `이태호 (평가위원장-1)`. These role-anchors are MORE diagnostic than the bare pseudonym because they preserve the role observation the book is making. **When drafting atoms, preserve the role-anchor identifier exactly as it appears in the Korean book.** When the same person appears in multiple chapters with multiple role-anchors, list all of them — the multiplicity itself is evidence of cross-layer continuity.

## Layers

- `raw/` is the inbox. The human drops source material here (articles, papers, transcripts, pasted notes, images). You read from `raw/` and its subfolders. You never write to `raw/`. Raw files are immutable. Those are a bilingual (Korean / English) publishing pipeline for the book *Beyond Cybersecurity* (사이버보안을 넘어). 
	- The subfolders are labeled in English and Korean, respectively, and their contents are as follows.
		1. book-beyond-cybersecurity: All contents of the book titled *Beyond Cybersecurity* (사이버보안을 넘어). Repository of core knowledge. A treatise proving the organized criminal activity by defense organizations to cover up the 2016 DIDC North Korean hacking incident._
		2. Individual recording logs: Transcripts of conversations with key figures appearing in the book above
		 3. KakaoTalk data: Four years of KakaoTalk logs (March 7, 2019 – March 25, 2023) used by the Administrative Information Division of the Defense Computer and Information Agency (DCIA), an agency under the Ministry of National Defense, which operated systems subject to investigation into North Korean hacking and fraud.
		4. Law & Regulation: The history of revisions to South Korea’s Defense Information Technology Operations Directive, manipulated by the Ministry of National Defense to conceal North Korean hacking (2017–2025), U.S. Regulations on Testing and Evaluation for Defense Information Technology Operations, Analysis of the ISMS-P Certification System for Cybersecurity and Personal Information Protection in South Korea
		5. Investigation by the Military Prosecutor's Office: Evidence documents related to fraud investigations conducted by the Ministry of National Defense Prosecutor's Office
		6. Scanned files: 1. (scanned-Korean-only) 7th Volume Evidence Record Page: Scanned documents of evidence records from Level 1 to Level 7 mentioned in Book 01 (e.g., 2022.9.20., Record No. 10,347, September 20, 2022, Record No. 10,347)_ Scanned documents of evidence records from Level 1 to Level 7, 4. Law & Regulation: Regulations of the Defense Integrated Data Center (DIDC), 5. Investigation by the Military Prosecutor's Office: ‘ 5. Law & Regulation’ scanned documents
- `ai-research/` is your research folder. When you conduct autonomous web research, save the full cleaned source content here as markdown files. You CAN write to this folder. Files here are immutable once saved (do not overwrite, create new files). This separates human-curated sources (`raw/`) from AI-discovered sources (`ai-research/`).
- `wiki/` is your workspace. You write summaries, entity pages, concept pages, topic indexes, and the master index here. Everything in `wiki/` is organized by topic folder. You compile from BOTH `raw/` and `ai-research/` into `wiki/`.
- `output/` is for query results, reports, slide decks, and generated artifacts that are not part of the permanent wiki. You promote valuable outputs into `wiki/` as new articles when the human asks.
- `CLAUDE.md` (this file) is the schema. It defines every operation you perform. Co-evolve it with the human over time.

## Operations

The detailed procedure for each operation lives in its own slash command file under `.claude/commands/`. CLAUDE.md only retains Query (the always-on default) and Log (the format every operation appends). To save startup tokens, the long Ingest / Research / Lint / Re-verify procedures were extracted on 2026-04-11; load the matching slash command file when an operation is triggered.

| Operation | Trigger phrases | Procedure file |
|---|---|---|
| Ingest | `compile`, `컴파일`, files dropped in `raw/`, `/compile` | `.claude/commands/compile.md` |
| Research | `research {topic}`, `조사해줘`, `/research` | `.claude/commands/research.md` |
| Lint | `lint`, `audit the wiki`, `감사`, `/lint` | `.claude/commands/lint.md` |
| Re-verify | `reverify`, `재검증`, `book-anchored verification`, `/reverify` | `.claude/commands/reverify.md` |
| Query | any natural-language question about wiki content | (always-on, defined inline below) |

Each slash command file is now self-contained — it does not reference back to CLAUDE.md for procedural detail. The `Conventions`, `Measurement vs interpretation`, `Zettelkasten atomicity`, `Aurora integration`, `Language`, and `Layers` sections of this file are still authoritative cross-cutting rules that every operation respects.

### Query (always-on default)

Triggered when the human asks a question about the wiki.

1. Read `wiki/_master-index.md` first to identify which topic folder is relevant.
2. Read the matching topic's `_index.md` to identify which articles to load.
3. Read 1 to 3 specific articles in full.
4. If the question spans multiple topics, repeat steps 1 to 3 for each topic.
5. Synthesize the answer. Cite every claim with the wiki article it came from using `[[wikilinks]]` and include the raw source file path each article cites.
6. If the answer is substantial and would be useful later, ask the human whether to file it as a new wiki article. If yes, hand off to `/compile` to write it in the appropriate topic folder and cross-link.

**Cardinal rule:** Default to 3 to 4 file reads. Do not grep the entire vault. The index files are your retrieval layer. If 3-4 reads cannot answer the question, surface the gap to the human and propose `/compile` (if a known raw source exists) or `/research` (if not) — do not brute-force by reading many files.

### Log

Every operation appends one line to `wiki/log.md`.

Format:
```
## [YYYY-MM-DD HH:MM] operation | short description | files touched
```

Valid operations: `ingest`, `query`, `lint`, `fix`, `file-back`, `restructure`, `reverify`, `spot-check`.

The log is append-only. Never rewrite existing lines.

## Conventions

- **Citations are required.** Every wiki article includes a `**Source:**` line pointing at the raw file it was compiled from. If an article synthesizes multiple raw files, include all of them.
- **Evidence-record citations are required for claims.** Use `Record No. NNNNN` format (with comma, matching the book). Resolve layer membership via `../defense-kg-platform/kg/evidence_record_mapping.json`.
- **Pseudonyms only.** Never write a real person's name anywhere in this vault. The only real↔pseudonym table is `../defense-kg-platform/kg/pseudonym_mapping.json`.
- **Key Takeaways section is required.** Every wiki article ends with a `## Key Takeaways` section containing bullet points.
- **Layer assignment is required.** Every article has a `**Layer:**` line.
- **File names are lowercase hyphenated.** `ai-agents.md`, not `AI_Agents.md`. Korean characters do not go in filenames.
- **Topic folder names are lowercase hyphenated.**
- **Use `[[wikilinks]]` for every cross-reference.** Never use raw paths or markdown links for internal references.
- **Bullets over paragraphs.** Keep articles scannable. Long paragraphs go into a `## Details` section.
- **Never invent claims.** Every sentence in a wiki article must trace back to a raw source. Flag gaps in a `## Open Questions` section rather than filling them with speculation.
- **Flag contradictions when found.** If an ingest pass finds a new source that contradicts an existing article, update the article, add an entry to `wiki/_contradictions.md`, and write or update the relevant [[claims/_index|claim]] page.
- **Max article length.** 400 lines. When an article exceeds this, split it — do not compress. Long paragraphs belong in `## Details`.

## Measurement vs interpretation — blind principle scope

Two distinct analytical stages with different rules:

- **Measurement stage (blind).** When dispatching subagents to extract raw data from primary sources (e.g., directive diffs, regulation text comparisons, record-number scans), subagents must NOT read book content (`raw/01.`, `vault-converted-*`), wiki articles, CLAUDE.md context, or Aurora ontology. They operate on a strictly defined file set with neutral descriptive output requirements. This is the **blind principle**. It protects against confirmation bias — subagents cannot unconsciously shape their measurements to match a hypothesis they have read.
- **Interpretation stage (contextual).** When the main agent synthesizes subagent outputs into a pattern report, claim atoms, or narrative analysis, contextual reading is not merely permitted but required. The book, the legal framework, the real-world event timeline, and the pseudonym mapping all inform the meaning of raw measurements. Without context, a directive diff is data without referent.

**The blind principle applies only to measurement.** Interpretation without context is not neutral — it is shallow. Wiki articles, claim atoms, and lint reports are interpretation-stage products and must be grounded in the full corpus. If a measurement contradicts a contextual source, investigate both; do not pre-commit to either as the authority. If a measurement converges with a contextual source that was independently derived, that convergence is corroborating evidence, not redundancy.

Applied to the Phase A workflow:

- **A.2, A.3 measurements:** blind.
- **A.2 report, A.3.5 pattern report:** contextual.
- **A.4 claim atoms:** contextual, with explicit counter-hypothesis and falsification condition.
- **A.6 book compile:** contextual throughout; blind measurement is not a meaningful operation on prose narrative.

## Zettelkasten atomicity (Luhmann ↔ Karpathy merge)

Karpathy's LLM-wiki pattern and Luhmann's Zettelkasten share the same core: *collect → classify → connect → accumulate*. Where they differ is granularity. Karpathy's default article is topic-sized; Luhmann's Zettel is claim-sized. For an adversarial evidence corpus, **claim-sized wins** — it matches how evidence record numbers slice the underlying material, and it maps 1:1 to Aurora's `FalsificationResult` nodes.

Therefore this vault uses a **two-tier structure** that merges both traditions:

| Tier | Grain | Folder | Analogue |
|---|---|---|---|
| **Hub** | Topic (an entity, event, regulation, layer) | `wiki/entities/`, `wiki/events/`, `wiki/regulations/`, `wiki/layers/` | Karpathy article / Luhmann *Hauptzettel* |
| **Atom** | Single claim (one proposition, one falsification test) | `wiki/claims/` | Luhmann *Zettel*, Aurora `FalsificationResult` |

**Rules:**

- Hub pages summarize and **link to** atoms. Hub pages never hide a claim in prose — any propositional statement with evidentiary weight must be pulled out into a claim atom.
- Atoms are **single-idea, single-verdict**. One `Claim` sentence, one layer, one verdict (`CORROBORATED / WEAKENED / UNFALSIFIABLE / NEEDS_MORE_EVIDENCE`). If a claim needs two verdicts, it's two atoms.
- Atoms connect to **at least two** other wiki pages (one hub, one atom) — Luhmann's "no Zettel stands alone" rule. Lint flags orphans.
- Atoms are named by pseudonymous content, not by ID. `kim-min-su-denies-knowledge-of-kiatis-removal.md`, not `claim-0042.md`. The filename is itself a one-sentence summary — Luhmann's trick for surviving without a database.
- Every atom includes its Aurora `MERGE` shape as a fenced code block so a script (see below) can promote it to Neo4j without further interpretation.

## Self-compiling knowledge system

Karpathy's default workflow (re-read sources, re-summarize, touch 10–15 files per ingest) is token-expensive precisely because every ingest re-derives structure from prose. The fix is to let the wiki's own shape carry the structure, so an ingest becomes mostly *linking*, not *re-reading*. The target state is a vault that can recompile itself from its atoms without re-reading any raw file.

Work toward it incrementally with these mechanisms — all of which can be implemented as Claude Code skills, slash commands, or hooks as needed:

1. **Evidence-record as the universal join key.** `Record No. NNNNN` is the only identifier that threads book, scanned page, wiki atom, and Aurora `Evidence` node together. Every atom indexes its evidence records. A `scripts/build-record-index.py` (to be added) reads every wiki file and outputs `wiki/_record-index.md` — a flat `Record No. → [atoms citing it]` reverse index. With this, answering "what does the wiki say about Record No. 10,347?" is a single file read, not a grep over the whole vault.
2. **Atoms are self-describing.** Each atom carries its own Aurora `MERGE` block. A `scripts/atoms-to-cypher.py` (to be added) walks `wiki/claims/`, extracts the blocks, and produces a Cypher file Aurora can `:source` to ingest. Round-trip: wiki atom → Cypher → Neo4j → GraphRAG index. No re-reading.
3. **Hub pages are generated, not authored.** A `scripts/rebuild-hubs.py` (to be added) regenerates `_index.md`, `_master-index.md`, `timeline.md`, and `_contradictions.md` from atom metadata. The human (or Claude) edits atoms; hubs follow automatically. This reverses the default Karpathy loop — instead of touching 10 files per ingest to update indexes, you touch 1 atom and rebuild.
4. **Lint as a compiler pass.** Lint is not a quality report — it's a type-checker. It verifies: every atom has an Aurora block, every `Record No.` resolves to a layer range, every pseudonym is in the mapping, every hub links only to atoms that exist, every contradiction is adjudicated by a claim. A failing lint is a broken build.
5. **Slash commands replace magic words.** `/compile`, `/lint`, `/research {topic}`, `/promote-to-aurora {atom}` — each is a concrete contract the human invokes. The trigger-phrase table above remains as fallback.
6. **Hooks enforce the contract at write time.** `.claude/hooks/validate-wiki.sh` runs on every Write/Edit and rejects articles missing `**Source:**`, `**Layer:**`, `## Key Takeaways`, or `## Related`. Catches drift before it lands — much cheaper than lint-time fixes.
7. **Subagent fan-out for expensive operations.** Lint, research, and bulk ingests dispatch to Explore subagents partitioned by layer (1–7). Main context merges sub-reports. The main agent never holds the whole vault in context.
8. **Co-evolution with Aurora.** When Aurora's schema changes (new node label, new required property), this file gets updated in the same commit. The two projects version-lock through a `schema_version` tag in both `CLAUDE.md` files. Mismatch → lint failure.

**Token economics.** Under this model, a typical ingest becomes: (a) read the raw file once, (b) write N atoms + 1 or 2 hub stubs, (c) trigger rebuild scripts. Steps 2 and 3 never re-read raw files. A lint pass reads only atom frontmatter, never prose. The expensive Karpathy loop — re-read every touched article in full, re-summarize each — happens only during `/promote-to-aurora`, and only for the specific atoms being promoted. Rough budget: a 10-atom ingest should fit under 40k tokens end-to-end, versus Karpathy's ~150k.

Implement these mechanisms **incrementally**. The hooks and slash commands are already in place. The scripts (`build-record-index.py`, `atoms-to-cypher.py`, `rebuild-hubs.py`) can be added when atom volume justifies them — probably after the first 30–50 claim atoms exist. Don't build the compiler before the program.

## When the human asks something outside these rules

Ask a clarifying question. Do not silently invent a new operation. If the answer suggests a useful new rule, propose it as an addition to this file and wait for approval before committing it.

## File structure reference

```
vault/
├── CLAUDE.md                    (this file)
├── README.md                    (human setup guide)
├── .claude/
│   ├── settings.json            (hook configuration)
│   ├── commands/                (slash commands: /compile, /lint)
│   └── hooks/validate-wiki.sh   (PostToolUse contract enforcer)
├── raw/                         (human-curated sources, immutable; gitignored)
├── ai-research/                 (AI-discovered sources, immutable once saved)
├── wiki/
│   ├── _master-index.md         (catalog of all topics)
│   ├── _contradictions.md       (flat index of flagged contradictions)
│   ├── timeline.md              (generated chronological spine of events)
│   ├── log.md                   (append-only operation log)
│   ├── _examples/               (reference templates for new pages)
│   ├── layers/                  (7-layer proof system hub pages)
│   ├── entities/
│   │   ├── people/              (pseudonymized; real names forbidden)
│   │   └── organizations/
│   ├── events/                  (YYYY-MM-DD-slug.md format)
│   ├── regulations/             (Regulation + Directive/Article pages)
│   └── claims/                  (atomic claim Zettel — one claim per file)
└── output/                      (query results, reports, lint output; gitignored)
```

Companion project (sibling directory): `../defense-kg-platform/` — Project Aurora. Authoritative ontology, pseudonym mapping, evidence-record mapping, Neo4j schema, GraphRAG index, 6 specialized agents, Angular UI. Consult on every ingest.

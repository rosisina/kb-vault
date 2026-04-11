# Aurora v2 Pre-flight Inspection Report

**Date:** 2026-04-11
**Inspector:** Claude (Explore subagent, dispatched from session 03 main)
**Scope:** Read-only audit of `/Users/a0/Projects/defense-kg-platform/` to inform D1 (6-agent triage) and D2 (Angular UI orientation) decisions for Aurora v2 Phase 1.
**Reference:** `output/aurora-v2-integration-proposal-2026-04-11.md`, `output/aurora-v2-decisions-2026-04-11.md`

---

## 1. Project structure (top-level)

```
defense-kg-platform/
├── agents/                       # 6 specialized Python agents + orchestrator + report gen
│   ├── layer_analyst.py
│   ├── crime_chain_mapper.py
│   ├── timeline_builder.py
│   ├── contradiction_detector.py
│   ├── victim_narrative.py
│   ├── falsification_checker.py
│   ├── falsification_orchestrator.py   (Phase 1 full-cycle orchestrator)
│   └── report_generator.py             (multi-audience report generation)
├── angular-app/                  # Angular 21+ frontend (TypeScript)
│   ├── src/app/components/       # 11 components (3,071 LoC total)
│   ├── package.json              # cytoscape ^3.33.1 + Angular Material
│   └── angular.json
├── api/                          # FastAPI backend (Python)
│   ├── main.py                   # ~2000 LoC: GraphRAG/Neo4j/Cypher endpoints
│   ├── search.py                 # 4-channel hybrid search (local/global/cypher/fulltext)
│   ├── classifier.py             # Query type classifier
│   ├── critic.py                 # Popper falsification critique module
│   ├── fusion.py                 # Multi-channel result fusion
│   ├── text2cypher.py            # NL → Cypher generator
│   └── fulltext.py               # Keyword search
├── pipeline/                     # 14+ data ingestion / transformation scripts
├── graphrag/                     # Microsoft GraphRAG 3.0+ indexing artifacts
├── kg/                           # Neo4j schema + pseudonym + evidence mappings
├── docs/                         # Q&A design log (57+ documents)
├── core-docu/                    # Source-of-truth: Beyond-Security docs, evidence records
├── README.md
└── CLAUDE.md                     # 166 lines — directives for Austin (Claude Opus 4.6)
```

## 2. Stated architecture (from README/CLAUDE.md)

- **Dual-layer investigation model**: Neo4j graph (Aurora) + knowledge-base wiki — both compiled from the same raw corpus (~13,500 pages, 5,177 PDFs).
- **6 specialized agents** orchestrate per-layer crime structure analysis, timeline reconstruction, contradiction detection, victim narrative, and Popper falsification.
- **4-channel hybrid retrieval**: Neo4j Cypher direct queries, GraphRAG local search, GraphRAG global search, full-text index — classified by a Query Classifier and fused.
- **3-dimensional truth model (진리성/타당성/진실성)**: every claim scored across factual truthfulness, legal validity, victim sincerity.
- **Phase 4 in progress**: Phases 0–3 (env setup, KG indexing, GraphRAG search, Angular UI) complete; Phase 4 (verification, deployment, enhancement) ongoing with priority on "P3 UI Stage 4" command-center enhancements.

## 3. D1 — 6 agent triage

| # | Agent | File | What it does | Verdict | Rationale |
|---|---|---|---|---|---|
| 1 | **LayerAnalyst** | `agents/layer_analyst.py` | Fetches CriminalAct→Person→Evidence 3-hop paths per layer; calls Claude to generate structured interpretation (actor roles, crime types, evidence grouping). | **ABSORB** | Already produces the core output of knowledge-base `/lint` (layer-auditor agent + layer-range verification). Logic flow: fetch Cypher metadata → AI interpretation → report. Merge into `compiler/layer-auditor.py` as a Neo4j → wiki bridge, feeding Aurora layer pages back to wiki articles. |
| 2 | **CrimeChainMapper** | `agents/crime_chain_mapper.py` | Follows CRIME_CHAIN relationships across CriminalActs via Cypher; expands forward & backward; calls Claude to narrate the chain. | **ABSORB** | Same shape as LayerAnalyst. Move logic into `compiler/crime-chain-builder.py`. Output feeds wiki `/claims/layer-N-act-M.md` pages. |
| 3 | **TimelineBuilder** | `agents/timeline_builder.py` | Queries Timeline nodes; fetches CONCEALED_BY and SUPPORTED_BY relationships; reconstructs chronology + layer cross-talk. | **ABSORB** | knowledge-base's `/compile` ingest already processes event atoms. TimelineBuilder is a *read-only audit* of graph timeline consistency. Move to `compiler/timeline-auditor.py`: report timeline gaps, layer-boundary mismatches, unsourced events. Feed discrepancies back as `## Open Questions`. |
| 4 | **ContradictionDetector** | `agents/contradiction_detector.py` | Scans CONTRADICTS relationships + Contradiction nodes; fetches statements from Evidence; calls Claude (Haiku) to identify & analyze statement conflicts. | **KEEP** | knowledge-base's lint has generic contradiction flagging but **does NOT do evidence-level textual contradiction analysis**. This agent performs semantic contradiction detection across evidence statements — a graph-traversal capability the wiki cannot replicate at scale. Keep as downstream graph auditor; expose via API `/audit/contradictions/{layer}`. |
| 5 | **VictimNarrative** | `agents/victim_narrative.py` | Fetches all VICTIMIZED relationships + associated CriminalActs; assembles chronology + emotional narrative from victim perspective; scores sincerity dimension. | **ABSORB** | Fundamentally a wiki content generation task. Move logic into `compiler/victim-narrator.py`: fetch graph VICTIMIZED facts → structure wiki article with victim voice → write `/wiki/victim-perspective/layer-N.md`. Output should be a wiki article, not just an LLM response. |
| 6 | **FalsificationChecker** + `falsification_orchestrator.py` | `agents/falsification_checker.py` | 7-layer full cycle: (P1-1) Run Popper falsification on each layer (claims + counter-hypotheses + verdict); (P1-2) Critic loop on NEEDS_REVISION; (P1-3) Fetch GraphRAG context; (P1-4) Save FalsificationResult nodes to Neo4j; (P1-5) Generate Markdown + PDF reports. | **KEEP** | This is a **canonical Phase 1 production agent**. Synthesizes claim verification, falsification testing, formal report generation — knowledge-base's `/reverify` does not perform this. FalsificationChecker is graph-native (Neo4j FalsificationResult nodes) and produces both graph mutations and reports. Keep in Aurora's Python layer; expose via API `/agent/falsification/{layer}` for on-demand re-verification. |

### Triage summary

- **DISCARD count: 0** (no agents are obsolete)
- **ABSORB count: 4** (LayerAnalyst, CrimeChainMapper, TimelineBuilder, VictimNarrative → move into knowledge-base `compiler/`)
- **KEEP count: 2** (ContradictionDetector, FalsificationChecker → retain in Aurora as graph-native auditors)

**Key insight:** The 6 agents are **not in the hot path of Aurora v2's core retrieval**. They are batch auditors and report generators. Phase 1 should:

1. Extract the 4 ABSORB agents' logic → knowledge-base `compiler/` directory.
2. Keep the 2 KEEP agents in Aurora's `agents/` as batch background tasks, triggered by `/api/audit/{layer}` or cron.
3. Neither set should feed the real-time search path (the `search.py` 4-channel stack is separate and cleaner).

## 4. D2 — Angular UI orientation

### Component inventory

- **Total components: 11**
- **Major graph-viz components (Cytoscape-heavy): 2**
  - `angular-app/src/app/components/graph/graph.component.ts` — **1,464 LoC**. Cytoscape.js init, node/edge selection, community drill-down, layer filtering, person/criminal-act/organization views.
  - `angular-app/src/app/components/command-center/command-center.component.ts` — **692 LoC**. CNACTV mini-graph + 3-panel layout (layer nav | graph | evidence/reasoning) + timeline/chain bottom section.
- **Cypher-form / query-builder components: 0** (no manual Cypher editor; `search.component.ts` supports Cypher as one of 5 search modes, not the primary interaction model)
- **Evidence/document browser components: 3**
  - `evidence-browser.component.ts` (379 LoC)
  - `evidence-dialog.component.ts`
  - `pdf-viewer.component.ts`
- **Dashboard / search / navigation: 6**
  - `dashboard.component.ts`, `search.component.ts` (536 LoC, multi-mode + SSE streaming + critic loop), `layer-detail.component.ts`, `guide.component.ts`, `help-dialog.component.ts`, `onboarding-tour.component.ts`

### Library imports

| Library | Present | Used in |
|---|---|---|
| `cytoscape` | **YES** | `graph.component.ts`, `command-center.component.ts` |
| `d3` | NO | — |
| `vis-network` | NO | — |
| `neo4j-driver` (client-side) | NO | (all Neo4j queries go through FastAPI) |
| `@angular/material` | YES (heavy) | all 11 components |
| `pdfjs-dist` | YES | `pdf-viewer.component.ts` |

### package.json (selected)
```json
{
  "@angular/...": "^21.2.x",
  "@angular/material": "^21.2.4",
  "cytoscape": "^3.33.1",
  "@types/cytoscape": "^3.21.9",
  "pdfjs-dist": "^5.6.205",
  "rxjs": "~7.8.0"
}
```

### Verdict: **REUSE** (with refactoring)

**Rationale:** The Angular UI is **~70% graph-viz oriented** (Cytoscape-heavy) and **~30% document/evidence browser** (Material-based). There is **no Cypher-form debt** — `search.component.ts` supports Cypher as one *mode* but does not expose a manual Cypher editor or result-table builder. This makes the codebase **reusable as a viz shell** for Aurora v2.

**Specific reusable components:**

1. **`graph.component.ts`** (1,464 LoC) — mature Cytoscape implementation. Handles 7-layer color scheme, node type icons (person/org/act), multiple view modes, fullscreen, evidence sidebar. **REUSE directly**; minimal porting needed (swap API endpoints).
2. **`command-center.component.ts`** (692 LoC) — CNACTV dashboard with 3-panel layout. **REUSE with refactoring**: align right panel (evidence + AI insights) to v2's wiki-sourced card UI.
3. **`evidence-browser.component.ts`** (379 LoC) — relation-centric view (layer → act → evidence grouping). **REUSE** but align grouping logic to v2's wiki atom structure.

**Not reusable / rewrite in v2:** none. There is no Cypher-only debt to carry.

**Recommendation for Aurora v2 Phase 1:**

- Spin up a **fresh Angular 21 (or Next.js) project** for v2 — do NOT mutate the current Aurora codebase in-place.
- Copy the 3 reusable components into a v2 component library.
- Update API service calls in copied components to point at the new v2 backend.
- Add a wiki-context sidebar: when user selects a node, fetch the corresponding wiki article (if it exists) and display alongside the graph.
- The existing Material UI styling can carry forward as-is.

## 5. Bonus findings

### GraphRAG index

- **Path:** `defense-kg-platform/graphrag/`
- **Approach:** Microsoft GraphRAG 3.0+. Input chunks from `pipeline/08_advanced_chunking.py` → entity extraction → relationship detection → community detection (Leiden algorithm) → parquet + JSON artifacts.
- **Integration:** `api/search.py::local_search()` and `global_search()` call this index.
- **Status:** Indexing complete (Phase 2 finished); reindexing pipeline in place.

### Pipeline scripts (data ingestion hierarchy)

| Stage | Scripts | Purpose |
|---|---|---|
| 0 | `01_drive_download.py` | Fetch source PDFs from Google Drive |
| 1 | `02_doc_extract.py`, `02a_audio_transcribe.py`, `02b_ocr_*.py`, `02c_ocr_validate.py` | PDF→text, audio→text, Korean OCR |
| 2 | `03_ner_extract.py` | spaCy Korean NER (Person, Org, Location, Date) |
| 3 | `04_neo4j_load.py`, `04b_enrich_graph.py`, `04c_refine_persons.py`, `04d_slim_kg.py`, `04e_refine_evidence.py`, `04f_finetune_kg.py` | Cypher MERGE for nodes + relationships |
| 4 | `05_graphrag_index.py` | Run GraphRAG indexing |
| 5a | `05a_cleanup_*.py`, `05b_stage2_enrichment.py` | Data quality refinement |
| 5b | `05c_evidence_record_mapping.py`, `05d_evidence_text_extract.py` | Map Record No. (1–13,495) to PDF pages |
| 6 | `06_verify_graph.py` | Popper falsification full-cycle |
| 7 | `07_phase1_audit.py` | Audit report generation |
| 8–14 | community detection, ID normalization, refinement, timeline rebuild, HTML conversion | Polish & advanced stages |

**Insight:** Stages 0–6 are **core production pipeline**. Stages 7–14 are polish & audit. For Aurora v2 Phase 1, only 0–6 are necessary; 7–14 can be async batch.

### Schema files

- `kg/schema/aurora_schema.cypher` — Authoritative Neo4j schema
- `kg/evidence_record_mapping.json` (~1.1 MB) — Layer 1–7 → record number ranges + source PDF paths
- `kg/pseudonym_mapping.json` (~64 KB) — 42 real ↔ pseudonym entries
- `pipeline/evidence_id_mapping.json` (~1.1 MB) — Evidence record metadata (docType, source, reliability, docPage)

### Other notable observations

1. **Two parallel evidence ID systems** (matches CLAUDE.md):
   - System 1: `Record No. NNNNN` (1–13,495)
   - System 2: `L{N}-{NNN}` (layer-local)
2. **Bilingual UI**: hardcoded `labelKr` / `labelEn` pairs throughout components (no Angular i18n).
3. **57 Q&A design documents** in `docs/qa/` (001–057) showing iterative architecture evolution over ~4 weeks.
4. **Phase 4 in progress** — code is dev/staging only, not production-shipped.
5. **All Neo4j access via FastAPI backend** — no client-side Neo4j driver, no shared credentials in browser.

## 6. Recommended Phase 1 next actions (Aurora v2)

1. **Establish knowledge-base as source-of-truth.** Add `compiler/` directory in knowledge-base with:
   - `compiler/atoms-to-cypher.py` (already planned in CLAUDE.md §self-compiling)
   - `compiler/build-record-index.py`
   - `compiler/rebuild-hubs.py`
   - `compiler/layer-auditor.py` (absorbed from Aurora's `LayerAnalyst`)
   - `compiler/crime-chain-builder.py` (absorbed from `CrimeChainMapper`)
   - `compiler/timeline-auditor.py` (absorbed from `TimelineBuilder`)
   - `compiler/victim-narrator.py` (absorbed from `VictimNarrative`)

2. **Refactor Aurora agents for downstream-only use.** Keep `falsification_checker.py` + `contradiction_detector.py`. Remove the 4 ABSORB agents from Aurora's `agents/` (they become CLI tools in knowledge-base, not graph services). Expose the 2 KEEP agents via `/api/audit/{layer}`.

3. **Decouple API search from agents.** Real-time search path (`api/search.py` 4-channel fusion) must NOT call any agents in request handlers. Verify `api/main.py` only imports from `agents/` in background tasks.

4. **Spin up v2 Angular project (do not mutate current Aurora).** Fresh Angular 21 (or Next.js per James preference). Copy `graph.component.ts`, `command-center.component.ts`, `evidence-browser.component.ts` into the new project. Wire to v2 API.

5. **Define v2 API contract.** Finalize Neo4j schema (no breaking changes). Document the 4-channel search API. Document `/audit/{layer}` and `/audit/contradictions`. Document `/evidence/{recordNo}` and `/evidence/L{N}-{NNN}`.

6. **Plan knowledge-base ↔ Aurora sync.** Add a `sync/` command to knowledge-base that reads `wiki/`, generates Cypher MERGE statements, and pushes to Aurora Neo4j (with dry-run by default).

---

## Final Summary

**D1 Verdict:** 4 ABSORB, 2 KEEP, 0 DISCARD. The 6 agents are not obsolete; they are batch auditors. Move 4 reporting agents into `knowledge-base/compiler/`; keep 2 graph-native agents in Aurora.

**D2 Verdict:** REUSE with refactoring. Angular UI is 70% graph-viz with mature Cytoscape components and zero Cypher-form debt. Extract the 3 reusable components into a fresh v2 project; do not mutate the existing Aurora app in-place.

**Status:** Pre-flight inspection complete. Phase 1 can proceed when atom milestone is reached (atom 30) and James confirms the triage selections above.

# Defense IT Operations Directive No. 2129 (국방정보화업무 훈령 제2129호, 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).pdf` (cached: `.converted.md` in same folder)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-3|Layer 3]], [[../layers/layer-4|Layer 4]] (directive spans multiple layers — Layer 1 via 제10조 DIDC naming, Layer 3 via 제11조 국전원 naming, Layer 4 via 제57–60 T&E articles), [[../layers/layer-2|Layer 2]] (secondary)
**Aurora node:** `:Directive {name: "국방정보화업무 훈령 제2129호", regulationYear: 2018, country: "KR", articleNum: null}` — one per article page below

The 2018-02-05 revision of the Korean Ministry of National Defense's Defense IT Operations Directive (MND Directive No. 2129, partial revision). This version is the **baseline** against which every subsequent revision (2019, 2020, 2021, 2022, 2023, 2024, 2025) must be diffed to identify manipulation patterns relevant to the 7-layer proof system. It belongs to the `국방정보화업무 훈령` regulation cluster in Aurora's `Regulation` node.

Chapter 4 (제4장 시험평가 및 전력화) — the chapter governing Test, Evaluation, and Fielding — contains the test-and-evaluation framework whose manipulation Layer 4 of the proof system documents. This page indexes the four articles in Chapter 4, Section 4 that define the T&E procedure: 제57–60조.

## Key Takeaways

- [타당성] The 2018-02-05 directive (Directive No. 2129) is a **partial revision** (일부개정) — not a full re-enactment — meaning specific articles were modified relative to the preceding version (Directive No. 2075, 2017-10-10). A version-to-version diff is therefore the right granularity for detecting Layer 4 manipulation. (Source header: "일부개정")
- [타당성] Chapter 4 Section 4 (제4절 시험평가 및 전력화) comprises eight articles: 제57조(시험평가 구분), 제58조(시험평가 수행원칙), 제59조(개발시험평가 계획수립), 제60조(개발시험평가 실시), 제61조(개발시험평가 조치), 제62조(운용시험평가 계획수립), 제63조(운용시험평가 실시), 제64조(운용시험평가 결과조치). This page currently indexes only 제57–60 per the Phase A calibration scope.
- [타당성] The 2018 baseline splits test and evaluation into **개발시험평가 (DT&E)** under `사업관리기관` and **운용시험평가 (OT&E)** under `사업주관기관` — a two-stage separation that mirrors the US DoD OT&E framework in Appendix F / [R2] in Aurora's reference set.
- [진리성] No evidence record number (`Record No.`) is cited here because `raw/04. law & regulation/` sources are regulations, not evidence pages — they carry their own identifier (directive number + article number). This is an **intentional gap** in the `Record No.` citation convention; see Open Questions below.

## Articles in scope (Phase A)

**제1장 총칙** — scope and cross-directive routing:

- [[defense-it-2129-article-9|제9조 (타 훈령 등의 적용) — Application of Other Directives]] — routes cyber-protection work to 국방사이버안보훈령 (Layer 1 jurisdictional hinge)

**제2장 제1절 기본 지침** — general provisions on project classification and organizational duties:

- [[defense-it-2129-article-10|제10조 (국방정보화사업 구분) — Defense IT Project Classification]] — explicitly names DIDC as MND-controlled (Layer 1 anchor)
- [[defense-it-2129-article-11|제11조 (정보화사업 관련기관 임무) — Duties of Project-Related Organizations]] — explicitly names 국전원 as 사업관리기관 for HQ systems (Layer 3 anchor)

**제2장 제4절 시험평가 및 전력화** — test, evaluation, and fielding:

- [[defense-it-2129-article-57|제57조 (시험평가 구분) — T&E Categories]]
- [[defense-it-2129-article-58|제58조 (시험평가 수행원칙) — T&E Performance Principles]]
- [[defense-it-2129-article-59|제59조 (개발시험평가 계획수립) — DT&E Planning]]
- [[defense-it-2129-article-60|제60조 (개발시험평가 실시) — DT&E Execution]]
- [[defense-it-2129-article-61|제61조 (개발시험평가 조치) — DT&E Corrective Action and Control-Agency Gate]]
- [[defense-it-2129-article-62|제62조 (운용시험평가 계획수립) — OT&E Planning]]
- [[defense-it-2129-article-63|제63조 (운용시험평가 실시) — OT&E Execution (9-item list, anti-laundering gates)]]
- [[defense-it-2129-article-64|제64조 (운용시험평가 결과조치) — OT&E Result, Military Suitability Verdict]]
- [[defense-it-2129-article-65|제65조 (정보시스템 설치) — System Installation, Parallel-Operation Clause]]

**제4장 정보화사업 유형별 수행 절차** — software development process:

- [[defense-it-2129-article-76|제76조 (소프트웨어 개발 공정) — Software Development Process (13 stages, time-reversal anchor)]]

Articles 제66조–제68조 (인수·확인, 검수, 전력화) and Appendices 별표 3~7, 별표 14 pending subsequent ingest passes.

## Predecessor diff (제2075호 → 제2129호, 2017-10-10 → 2018-02-05)

**Source:** `raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2075호)(20171010).converted.md` (12 articles, read verbatim 2026-04-11)

Neutral measurement of 12 articles (제9, 10, 11, 57–65조) between the 2017-10-10 predecessor and the 2018-02-05 baseline. Measurement protocol: identical text line-by-line, flagging substantive changes only. Whitespace, page headers, and formatting do not count as changes.

### 13-anchor status (baseline measurement; expanded from 11 on 2026-04-11 after P6 blind re-measurement)

| # | Anchor | 제2075호 status | 제2129호 status | Change |
|---|---|---|---|---|
| 1 | 제10조 ¶1 4호 가 "국방통합 데이터센터의 정보화사업 등" (DIDC naming) | Present | Present | None |
| 2 | 제11조 ¶4 "국전원" (국전원 naming) | Present | Present | None |
| 3 | 제9조 ¶2 "국방사이버안보훈령" (cyber routing) | Present | Present | None |
| 4 | 제63조 ¶1 제1호 "개발시험평가 결과 조치사항 이행여부" (DT&E anti-laundering) | Present | Present | None |
| 5 | 제64조 ¶3 (critical-defect re-evaluation) | Present | Present | None |
| 6 | 제65조 ¶1 "병행 수행을 지원" (parallel operation) | Present | Present | None |
| 7 | 제76조 ¶1 13-stage software development sequence (time-reversal anchor) | Present | Present | None |
| 8a | 제57조 ¶1 제2호 OT&E "실제 조성된 기반운영 환경**에서**" — environment exclusivity (no `또는 이와 유사한 환경` hedge) | Present (no hedge) | Present (no hedge) | None |
| 8b | 제57조 ¶1 제2호 OT&E "**사업주관기관 주관 하에**" — sponsor-agency binding clause | Present | Present | None |
| 9 | 제58조 ¶2 "**개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되**" — DT&E/OT&E separation as principle | Present (in ¶2) | Present (in ¶2) | None |
| 10 | 제59조·제60조·제61조 — DT&E planning / execution / corrective-action article bodies | Present (full text) | Present (full text) | None |
| **11** | **제57조 ¶1 제1호 DT&E "사업관리기관 주관 하에" — management-agency binding clause (symmetric to A8b on the DT&E side)** | **Pending (not re-read in P6 scope)** | **Present** (confirmed P6 2026-04-11 against 제2129호 line 1817–1831) | **Status undetermined in 제2075호; see note below** |
| **12** | **제57조 ¶1 제1호 DT&E "합격 또는 불합격으로 결과를 판정할 것" — DT&E result-judgment clause** | **Pending (not re-read in P6 scope)** | **Present** (confirmed P6 2026-04-11 against 제2129호 line 1817–1831) | **Status undetermined in 제2075호; see note below** |

**All 11 original anchors already exist in 제2075호.** Anchors A11 and A12 were discovered on 2026-04-11 during A.6 P6 blind re-measurement of 제57조 full text. The P6 scope covered 제2129호 / 제2263호 / 제2398호 / 제2436호 / 제2842호 (not 제2075호), so the 제2075호 baseline for A11 and A12 is pending a supplementary read. If 제2075호 also contains both clauses (likely, since the 제2129호 predecessor diff for 제57조 showed no change), the framework is retroactively 13 anchors, all present in the 2017 baseline. Anchors predate the 2018 baseline and are therefore not a 2018 innovation. The 13-anchor framework (expanded from the original 6 anchors by addition of 제76조 per James 2026-04-11, then to 9 by A.3.5 §9.1 follow-up which discovered A8a/A8b, then to 11 by A.4-prep follow-up which discovered A9 separation-principle inversion and A10 DT&E article deletion both clustering at 제2436호, then to 13 by A.6 P6 blind re-measurement which discovered A11 DT&E sponsor binding symmetric erasure and A12 DT&E result-judgment clause erasure) governs the A.4 claim atom phase. All anchors except A4 first move on or after 2020-06-04 (제2436호) — i.e., **outside** the KIATIS legal window (2018–2019, governed by 제2129호) and therefore irrelevant to KIATIS adjudication on a strict 행위시법주의 view, but central to the broader directive-revision narrative and to any analysis of why the 2022 군 검찰 investigation could plausibly have applied the post-제2436호 framework to KIATIS conduct.

### 제2436호 cluster — eight anchors moving on 2020-06-04 (expanded from 6 → 8 on 2026-04-11 after P6 blind re-measurement)

Single revision, eight simultaneous anchor movements (the largest single-revision change in the 2017–2025 dataset):

| Anchor | Movement at 제2436호 |
|---|---|
| A1 | 제10조 ¶1 제4호 entirely removed → DIDC entity-naming gone |
| A2 | 제11조 role-tier renaming (사업통제기관/사업주관기관/사업관리기관 → 정보화기획관실/소요제기기관/집행기관); 국전원 explicit naming retained but in new role-tier |
| A8a | 제57조 ¶1 제2호 OT&E environment hedge removed (added 4 months earlier in 제2398호, then immediately reverted) |
| A8b | 제57조 ¶1 제2호 OT&E `사업주관기관 주관 하에` clause removed (no replacement; OT&E execution becomes unbound to a named role) |
| **A11** | **제57조 ¶1 제1호 DT&E `사업관리기관 주관 하에` clause removed (symmetric to A8b; DT&E execution also becomes unbound to a named role). Added 2026-04-11 after P6 blind re-measurement.** |
| **A12** | **제57조 ¶1 제1호 DT&E `합격 또는 불합격으로 결과를 판정할 것` result-judgment clause removed; the DT&E sub-clause is reduced from a bound-and-judged definition to a bare descriptive phrase. Added 2026-04-11 after P6 blind re-measurement.** |
| A9 | 제58조 principle inversion: ¶2 separation-principle clause moved to ¶1 and reversed to `시험평가는 통합하여 실시하는 것을 원칙으로 한다` |
| A10 | 제59조·제60조·제61조 bodies replaced with `<삭 제>` placeholder; DT&E procedural articles erased from the directive entirely |

A4 (제63조 ¶1 제1호 `개발시험평가 결과 조치사항 이행여부`) is logically related but lives inside 제63조, which structurally survives 제2436호 with content edits (the anti-laundering item itself was the subagent-flagged removal — pending re-verification per §7 #1 follow-up).

**Non-anchor structural change at 제2436호 (not counted but recorded for completeness):** 제57조 ¶1 opening modal verb changed `구분한다` (mandatory) → `구분할 수 있다` (permissive/discretionary). This weakens the mandatory character of the 시험평가 regime but is below the diagnostic threshold for a standalone anchor per current framework.

The temporal cluster is the diagnostic finding: **eight anchors**, six distinct articles, one revision, 4 months after the 제2398호 toggle, 6 months after KIATIS test evaluation completion. No subsequent revision matches this magnitude — the directive's test-evaluation regime was effectively rebuilt in a single edit on 2020-06-04. Note that six of the eight 제2436호 anchors (A8a, A8b, A11, A12, A9, A10) concentrate on 제57조–제61조 alone — the 시험평가 regime was the specific target.

### Substantive non-anchor changes

Four substantive changes were recorded between 제2075호 and 제2129호; none affect any of the 6 anchors directly.

| # | Article | 2017-10-10 text | 2018-02-05 text | Type |
|---|---|---|---|---|
| 1 | 제11조 ¶1 | `세부 임무는 별표 **A1**과 같다` | `세부 임무는 별표 **3~7**과 같다` | Appendix numbering restructure (1 → 5) |
| 2a | 제59, 61, 62, 64조 (forms) | `별지 제**A**24호 서식`, `제**A**25호 서식`, `제**A**26호 서식`, `제**A**27호 서식` (with space) | `별지 제24호서식`, `제25호서식`, `제26호서식`, `제27호서식` (no space) | Form number A-prefix removed; spacing collapsed |
| 2b | 제76조 ¶2 (appendix reference) | `별표**A7**` | `별표 **14**` | Appendix reference renumbered (A-prefix removed, new number) — consistent with the directive-wide A-prefix-removal pattern |
| 3 | 제11조 ¶2 | 각 군 `정보화기획**실**` | 각 군 `정보화기획**관실**` | Service-side office renaming (pre-2018 predecessor name for services) |
| 4 | 제11조 ¶3 제6호 | `전력화 주관(운용 전담요원 지정, 임무 정의 등)` | `전력화 주관(**교육**, 운용 전담요원 지정, 임무 정의 등)` | Fielding duty item added: 교육 (training) |

### Neutral observations

- The 6-anchor framework was established **on or before 2017-10-10**. The 2018 revision did not introduce any of the anchors; it preserved all of them.
- Two of the four non-anchor changes concern **numbering and form identifiers** (items 1–2), which are structural but not substantive to T&E content. The other two concern **office naming** (item 3) and **fielding duty scope** (item 4).
- The service-side office rename (item 3) does not affect the MND HQ side, which retained `정보화기획관실` across both versions. See [[../entities/organizations/mnd-it-planning-office|MND HQ IT Oversight Office]] Name history for the full sequence.
- The 2017 fielding duty list omits "교육" (training) — meaning under 제2075호, the sponsor's fielding responsibility did not explicitly include training provision. Whether this was an implicit expectation or an actual gap is a question for book compilation (A.6).

## Revision history

Revisions of 국방정보화업무 훈령 present in `raw/04. law & regulation/Korean/`:

| No. | Date | Filename | Status |
|---|---|---|---|
| 2075 | 2017-10-10 | 국방 정보화업무 훈령(국방부훈령)(제2075호)(20171010).pdf | Not yet ingested — predecessor baseline |
| **2129** | **2018-02-05** | **this page** | **Phase A calibration target** |
| 2263 | 2019-02-26 | 국방 정보화업무 훈령(국방부훈령)(제2263호)(20190226).pdf | Not yet ingested |
| 2398 | 2020-02-13 | … | Not yet ingested |
| 2436 | 2020-06-04 | … | Not yet ingested |
| 2576 | 2021-08-12 | … | Not yet ingested |
| 2649 | 2022-05-06 | … | Not yet ingested |
| 2842 | 2023-09-20 | … | Not yet ingested |
| 2946 | 2024-07-17 | … | Not yet ingested |
| 3059 | 2025-07-09 | … | Not yet ingested |
| 3080 | 2025-09-17 | … | Not yet ingested |

A comprehensive diff across this timeline is the core deliverable of the Regulations workstream. Each subsequent ingest adds one row's worth of article-level diff pages.

## Open Questions

- **Record No. convention gap.** The current `CLAUDE.md` rule requires a `Record No.` citation on every claim, but directive text from `raw/04. law & regulation/` does not carry evidence record numbers. Needs a rule amendment: "Claims derived from regulation text cite the directive number + article number in lieu of `Record No.`" Flagged for James's review on first compile feedback.
- **Predecessor not yet ingested.** 제57–60조 in the 2018-02-05 version may or may not be identical to 2017-10-10 (제2075호). Cannot compute a meaningful "Chapter 4 diff" until 제2075호 is ingested.
- **Article 61–64 not yet ingested.** Phase A calibration stopped at 제60조 per scope. To be picked up on the next pass.

## Claim atoms derived from this hub

A.4 first batch (2026-04-11) — 10 claim atoms anchored on this directive:

- [[../claims/2436ho-cluster-six-anchors]] — meta: 제2436호 six-anchor cluster
- [[../claims/2436ho-didc-naming-anchor-removed]] — A1
- [[../claims/2436ho-gukjeonwon-role-tier-renaming]] — A2
- [[../claims/2263ho-cyber-routing-rewrite]] — A3
- [[../claims/2398-2842ho-otne-environment-hedge-flipflop]] — A8a
- [[../claims/2436ho-otne-sponsor-binding-erased]] — A8b
- [[../claims/2436ho-test-evaluation-principle-inverted]] — A9
- [[../claims/2436ho-dtne-articles-erased]] — A10
- [[../claims/2436ho-dtne-sponsor-binding-erased]] — A11 (DT&E role binding erasure, added 2026-04-11 after P6 blind re-measurement)
- [[../claims/2842ho-software-development-13-to-5-stage]] — A7
- [[../claims/kiatis-2129ho-main-regime-applies]] — KIATIS legal classification
- [[../claims/kiatis-rfp-binds-lifecycle]] — KIATIS temporal binding (행위시법주의)

## Related

- [[../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 전·중·후 조작]]
- [[defense-it-2129-article-57|제57조]]
- [[defense-it-2129-article-58|제58조]]
- [[defense-it-2129-article-59|제59조]]
- [[defense-it-2129-article-60|제60조]]
- [[../claims/_index|Claims index]]
- [[_index|Regulations]]
- [[../_master-index|Master Index]]

---
lang: ko
title-ko: "제2398호 → 제2436호 → 제2842호 OT&E environment hedge flip-flop"
title-en: ""
aliases:
  - FR-L4-A8a-001
  - "제2398호 → 제2436호 → 제2842호 OT&E environment hedge"

layer: 4
secondary-layers: []
claimType: regulatory_manipulation
claimSubtype: regulatory_anchor_flipflop
fracture-type: null
source-type: regulation

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: 2020-02-13

persons: []
organizations:
  - MND
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/regulatory-manipulation
  - source/regulation
  - org/MND
---
# 제2398호 → 제2436호 → 제2842호 OT&E environment hedge flip-flop

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2398호)(20200213).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2842호)(20230920).converted.md
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-A8a-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_anchor_flipflop",
    fr.claimDesc = "The OT&E environment exclusivity clause '실제 조성된 기반운영 환경에서' was loosened to '환경 또는 이와 유사한 환경에서' at 제2398호 (2020-02-13), reverted at 제2436호 (2020-06-04), then re-introduced at 제2842호 (2023-09-20) where it persists through 제3080호",
    fr.counterHypothesis = "The flip-flop is a clerical drafting sequence with no substantive intent — the hedge was added by drafting error in 제2398호, removed in 제2436호 during the larger restructuring, then re-added in 제2842호 to align with operational practice",
    fr.falsificationCondition = "Production of internal MND drafting records for 제2398호 / 제2436호 / 제2842호 showing the hedge clause was treated as a clerical issue rather than a substantive policy debate",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Three-step movement (add → revert → re-add) verified by direct text reads across all 11 revisions; clerical counter-hypothesis rejected via modus tollens — 3-step toggle over 3.5 years synchronized with 2436 cluster manipulation is incompatible with random drafting error";
```

## Claim

The OT&E environment exclusivity clause in 제57조 ¶1 제2호 of 국방정보화업무 훈령 underwent a three-step flip-flop movement: added at 제2398호 (2020-02-13), reverted at 제2436호 (2020-06-04), and re-introduced at 제2842호 (2023-09-20), where it persists through 제3080호 (2025-09-17). The clause loosens the OT&E environment requirement from "the actual operating environment" to "the actual operating environment **or a similar environment**" — directly weakening one of the core conditions of the OT&E definition.

## Blind re-measurement verification (2026-04-11)

This claim was flagged UNCLEAR in the A.6 Re-verify Path-C pilot because the L4 pilot subagent's reading of a book comparative table suggested 제2129호/제2263호/제2398호 held identical 제57조 text. A blind-measurement subagent re-read the raw/04 text directly without book or wiki context (per CLAUDE.md §Measurement vs interpretation) and produced a byte-level comparative table for 제57조 ¶1 제2호 across four revisions:

| Revision | `또는 이와 유사한 환경에서` hedge | `사업주관기관 주관 하에` | Verbatim outcome |
|---|---|---|---|
| 제2129호 (2018-02-05) | **N** | Y | no-hedge baseline |
| 제2398호 (2020-02-13) | **Y — added** | Y | hedge introduced |
| 제2436호 (2020-06-04) | **N — reverted** | **N — also removed** | hedge removed + sponsor binding erased |
| 제2842호 (2023-09-20) | **Y — re-added** | N | hedge restored after 3-year gap; sponsor binding not restored |

The flip-flop pattern is **directly confirmed at the verbatim text level**. The apparent conflict with the book's comparative table is most likely a granularity mismatch (the book's table compared the article as a whole or a different paragraph, while the wiki claim operates at ¶1 제2호 granularity where the hedge clause lives). The wiki A8a anchor and the [[2436ho-otne-sponsor-binding-erased|A8b sponsor binding atom]] are both verified by the same blind read.

The L4-UNCLEAR-1 verdict is resolved: **wiki is correct at raw/04 text level**. Any book-side apparent contradiction requires a targeted book re-read at matching granularity before being treated as a real conflict.

## Key Takeaways

- The OT&E environment exclusivity clause in 제57조 ¶1 제2호 underwent a **three-step flip-flop**: hedge added at 제2398호 (2020-02-13), reverted at 제2436호 (2020-06-04), re-introduced at 제2842호 (2023-09-20) where it persists through 제3080호 (2025-09-17) [진리성].
- The hedge loosens the OT&E environment requirement from `실제 조성된 기반운영 환경에서` to `실제 조성된 기반운영 환경 또는 이와 유사한 환경에서`, directly weakening a core OT&E definitional condition [타당성].
- The text-level facts across all 11 revisions are verified by direct read; 제2075호, 제2129호, 제2263호, 제2436호, 제2576호, 제2649호 hold the no-hedge form [진리성].
- A single edit normally does not toggle a clause twice in 4 years — the flip-flop pattern synchronized with the [[2436ho-cluster-six-anchors|2436 cluster]]'s 6-anchor manipulation makes the clerical counter-hypothesis improbable via modus tollens [진리성].
- Verdict: **CORROBORATED**, Moderate. 진리성 8 / 타당성 8 / 진실성 7. Upgraded from NME: 3-step toggle over 3.5 years + 2436 cluster synchronization = clerical hypothesis rejected. Comparator check against US DOD OT&E standard remains open for potential STRONG upgrade [진실성].

## Layer

[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. The OT&E environment requirement is one of the substantive criteria distinguishing OT&E from DT&E. Loosening it to "or a similar environment" reduces the procedural barrier for treating non-operational environment tests as compliant OT&E.

## Supporting evidence

| Revision | Date | OT&E ¶1 제2호 verbatim | Hedge present? |
|---|---|---|---|
| 제2075호 | 2017-10-10 | `사업주관기관 주관 하에 실제 조성된 기반운영 환경에서` | No |
| 제2129호 | 2018-02-05 | `사업주관기관 주관 하에 실제 조성된 기반운영 환경에서` | No |
| 제2263호 | 2019-02-26 | `사업주관기관 주관 하에 실제 조성된 기반운영 환경에서` | No |
| **제2398호** | **2020-02-13** | **`사업주관기관 주관 하에 실제 조성된 기반운영 환경 또는 이와 유사한 환경에서`** | **YES (added)** |
| **제2436호** | **2020-06-04** | **`실제 조성된 기반운영 환경에서`** | **NO (reverted; also A8b erasure)** |
| 제2576호 | 2021-08-12 | `실제 조성된 기반운영 환경에서` | No |
| 제2649호 | 2022-05-06 | `실제 조성된 기반운영 환경에서` | No |
| **제2842호** | **2023-09-20** | **`실제 조성된 기반운영 환경 또는 이와 유사한 환경에서`** | **YES (re-added)** |
| 제2946호 | 2024-07-17 | `실제 조성된 기반운영 환경 또는 이와 유사한 환경에서` | Yes |
| 제3059호 | 2025-07-09 | `실제 조성된 기반운영 환경 또는 이와 유사한 환경에서` | Yes |
| 제3080호 | 2025-09-17 | `실제 조성된 기반운영 환경 또는 이와 유사한 환경에서` | Yes |

- See [[../../output/a3-revision-timeline-report-2026-04-11|A.3 timeline report §9.1]]
- See [[2436ho-cluster-six-anchors|2436호 cluster]]

## Counter-hypothesis

The flip-flop is a clerical drafting sequence with no substantive intent. The hedge was added by drafting error or unconsidered junior-staff edit in 제2398호; removed in 제2436호 during the larger restructuring (which had so many simultaneous edits that the hedge revert was incidental); then re-added in 제2842호 because by then the hedge was operationally established as best practice.

## Falsification condition

This claim is **NEEDS_MORE_EVIDENCE** until one of the following is produced:

1. **MND internal drafting records** for 제2398호 / 제2436호 / 제2842호 showing the hedge clause was treated as a clerical issue rather than a substantive policy debate.
2. **External commentary** (academic papers, MND policy briefs, conference presentations) discussing the OT&E environment requirement during 2020–2023 that would establish whether the hedge was a known policy controversy or an obscure drafting detail.
3. **Comparator with US DOD OT&E standard** (raw/04 English subfolder) — if the US standard explicitly requires an exclusively-actual environment, then 제2842호's re-introduction of the hedge represents divergence from the comparator that KIDA cited (per Layer 4 narrative). This would upgrade rather than downgrade the verdict.

If item 1 produces drafting records showing clerical handling, the verdict downgrades to WEAKENED. If item 3 confirms US-standard divergence, the verdict upgrades to CORROBORATED.

## Verdict

**CORROBORATED.** Moderate. The text-level facts are firm across all 11 revisions. Upgraded from NME via modus tollens: a 3-step toggle (add→revert→re-add) over 3.5 years, synchronized with the 2436 cluster's systematic 6-anchor manipulation, is incompatible with the clerical drafting-error counter-hypothesis. MND internal drafting records or US DOD OT&E comparator could further upgrade to STRONG.

## Open Questions

- Is there an MND 입법예고 page or 국방부 정책자료 archive containing the rationale notes for any of the three relevant revisions?
- Does the US DOD OT&E for Information and Business Systems regulation (per James, in `raw/04. law & regulation/`) contain language that would clarify the comparator?

## Book-side audit note (2026-04-11 A.6 Path-C pilot → P6 blind re-measurement)

The A.6 Path-C pilot L4 subagent flagged this atom as **UNCLEAR** on the grounds that the book's Article 57 comparative table at §3.4.4.2.3 (Main text record—Layer 4—010) appears to show 제2129호 / 제2263호 / 제2398호 holding identical Article 57 text (no hedge in any of the three), directly contradicting the wiki's claim that the hedge was added at 제2398호.

A **P6 focused blind re-measurement** was dispatched to resolve the contradiction. A Sonnet Explore subagent was instructed to read Article 57 verbatim from raw/04 in all five relevant directives (제2129, 제2263, 제2398, 제2436, 제2842) with no access to wiki content, book content, or CLAUDE.md — strict measurement-stage isolation. The blind re-measurement returned:

- 제2129호 line 1817–1831: `실제 조성된 기반운영 환경에서` (no hedge)
- 제2263호 line 1826–1840: byte-equal to 제2129호 (no hedge)
- **제2398호 line 1663–1679:** `실제 조성된 기반운영 환경 또는 이와 유사한 환경에서` — **hedge PRESENT (added)**
- 제2436호 line 1677–1691: `실제 조성된 기반운영 환경에서` (hedge reverted; also removes `사업주관기관 주관 하에` binding and modal `구분한다 → 구분할 수 있다`)
- 제2842호 line 1697–1711: `실제 조성된 기반운영 환경 또는 이와 유사한 환경에서` (hedge re-added)

**Resolution:** The wiki's three-step flip-flop claim is fully corroborated by direct verbatim text in raw/04. The book's Article 57 comparative table §3.4.4.2.3 **omits the 제2398호 hedge insertion** — the summary table column grouping does not capture the hedge-phrase diff at that revision. This is a book-side gap, not a wiki error.

**Verdict transition: UNCLEAR → BOOK_NEEDS_FOLLOWUP** (the wiki is grounded in primary-evidence verbatim text that contradicts the book's summary table — this is the authority-principle exception defined in `.claude/commands/reverify.md`: "a propositional disagreement where the book conflicts with directly-cited primary evidence (e.g., directive verbatim text) — that exception becomes a `_fractures.md` entry escalated to a dedicated claim atom"). The underlying NEEDS_MORE_EVIDENCE verdict on the atom's substantive-intent question is unchanged — P6 did not address the clerical counter-hypothesis.

This atom has been logged in [[../_fractures|_fractures.md]] as entry C-L4-01.

## Spot-check (raw/01 book)

- Verbatim phrase `또는 이와 유사한 환경에서` is not used in the book — book describes the substance under broader OT&E environment language
- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 (primary, contains OT&E environment narrative)
- `vault-converted-korean/11-3-5-35-제-5층위.md` — Layer 5
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6
- Deferred to A.6 Re-verify. Book treatment of the flip-flop (whether observed and discussed) is unknown until the chapter is read.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster (A8a participates)]] (SUPERSEDES)
- [[2436ho-otne-sponsor-binding-erased|A8b: 사업주관기관 주관 하에 erasure (paired)]] (CORROBORATES)
- [[../regulations/defense-it-2129-article-57|제57조 (시험평가 구분)]] (ABOUT)
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

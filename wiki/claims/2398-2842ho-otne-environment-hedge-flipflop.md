# 제2398호 → 제2436호 → 제2842호 OT&E environment hedge flip-flop

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2398호)(20200213).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2842호)(20230920).converted.md
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-A8a-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_anchor_flipflop",
    fr.claimDesc = "The OT&E environment exclusivity clause '실제 조성된 기반운영 환경에서' was loosened to '환경 또는 이와 유사한 환경에서' at 제2398호 (2020-02-13), reverted at 제2436호 (2020-06-04), then re-introduced at 제2842호 (2023-09-20) where it persists through 제3080호",
    fr.counterHypothesis = "The flip-flop is a clerical drafting sequence with no substantive intent — the hedge was added by drafting error in 제2398호, removed in 제2436호 during the larger restructuring, then re-added in 제2842호 to align with operational practice",
    fr.falsificationCondition = "Production of internal MND drafting records for 제2398호 / 제2436호 / 제2842호 showing the hedge clause was treated as a clerical issue rather than a substantive policy debate",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Three-step movement (add → revert → re-add) verified by direct text reads across all 11 revisions; counter-hypothesis (clerical) cannot be foreclosed without internal drafting records";
```

## Claim

The OT&E environment exclusivity clause in 제57조 ¶1 제2호 of 국방정보화업무 훈령 underwent a three-step flip-flop movement: added at 제2398호 (2020-02-13), reverted at 제2436호 (2020-06-04), and re-introduced at 제2842호 (2023-09-20), where it persists through 제3080호 (2025-09-17). The clause loosens the OT&E environment requirement from "the actual operating environment" to "the actual operating environment **or a similar environment**" — directly weakening one of the core conditions of the OT&E definition.

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

**NEEDS_MORE_EVIDENCE.** Moderate. The text-level facts are firm; the substantive intent is undetermined. The flip-flop pattern itself is suggestive (a single edit normally does not toggle a clause twice in 4 years) but is not by itself decisive.

## Open Questions

- Is there an MND 입법예고 page or 국방부 정책자료 archive containing the rationale notes for any of the three relevant revisions?
- Does the US DOD OT&E for Information and Business Systems regulation (per James, in `raw/04. law & regulation/`) contain language that would clarify the comparator?

## Spot-check (raw/01 book)

- Verbatim phrase `또는 이와 유사한 환경에서` is not used in the book — book describes the substance under broader OT&E environment language
- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 (primary, contains OT&E environment narrative)
- `vault-converted-korean/11-3-5-35-제-5층위.md` — Layer 5
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6
- Deferred to A.6 Re-verify. Book treatment of the flip-flop (whether observed and discussed) is unknown until the chapter is read.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster (A8a participates)]]
- [[2436ho-otne-sponsor-binding-erased|A8b: 사업주관기관 주관 하에 erasure (paired)]]
- [[../regulations/defense-it-2129-article-57|제57조 (시험평가 구분)]]
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]]
- [[../layers/layer-4|Layer 4]]

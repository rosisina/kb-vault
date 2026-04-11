# 제2436호 (2020-06-04) is a six-anchor cluster — single-revision rebuild of the test-evaluation regime

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2398호)(20200213).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-CLUSTER-2436"})
SET fr.layer = 4,
    fr.claimType = "regulatory_revision_cluster",
    fr.claimDesc = "국방정보화업무 훈령 제2436호 (2020-06-04) is a single-revision cluster of six simultaneous anchor movements that collectively rebuild the directive's test-evaluation regime, with no other revision in 2017–2025 matching its magnitude",
    fr.counterHypothesis = "The six co-occurring movements at 제2436호 are statistically expected for a major revision and reflect periodic restructuring rather than coordinated rebuild",
    fr.falsificationCondition = "Demonstration that any of the eight other revisions in the dataset (제2263호, 제2398호, 제2576호, 제2649호, 제2842호, 제2946호, 제3059호, 제3080호) contains six or more simultaneous anchor movements",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "제2436호 single-revision movement count is 6/11 anchors; the next-largest revision (제2842호) moves 1 anchor; cluster ratio is at least 6:1";
```

## Claim

The 제2436호 revision (2020-06-04) of 국방정보화업무 훈령 is a coordinated single-revision cluster moving six of the eleven baseline anchors simultaneously: A1 (DIDC naming), A2 (role-tier renaming), A8a (OT&E environment hedge), A8b (OT&E sponsor binding), A9 (separation-principle inversion), and A10 (DT&E article deletion). No other revision in the 2017–2025 dataset moves more than one anchor at a time. The 제2436호 cluster reconstructs the directive's test-evaluation regime in a single edit.

## Layer

[[../layers/layer-1|Layer 1]] (DIDC trace removal — A1) and [[../layers/layer-4|Layer 4]] (test evaluation manipulation — A8a, A8b, A9, A10). The cluster is the regulatory pivot that links the two layers structurally: the same revision that erases the DIDC accountability hook also removes the procedural framework that would have constrained DIDC-related test evaluation.

## Supporting evidence

- A1 — 제2129호 제10조 ¶1 4호 (lines 584–588) vs. 제2436호 제10조 (lines 552–589): 4호 axis entirely absent in 제2436호. See [[2436ho-didc-naming-anchor-removed]].
- A2 — 제2129호 제11조 ¶1 (lines 602–606) names `사업통제기관·사업주관기관·사업관리기관`; 제2436호 제11조 ¶1 (line 591) renames to `정보화기획관실, 소요제기기관, 집행기관`.
- A8a — 제2398호 제57조 ¶1 제2호 (line 1671) introduced `또는 이와 유사한 환경에서`; 제2436호 (line 1685) removes it. Net 4-month flip.
- A8b — 제2129호 제57조 ¶1 제2호 begins `사업주관기관 주관 하에 실제 조성된…`; 제2436호 (line 1685) begins `실제 조성된…` — `사업주관기관 주관 하에` clause removed with no replacement.
- A9 — 제2129호 제58조 ¶2 has `개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되`; 제2436호 제58조 ¶1 (line 1700) inverts to `시험평가는 통합하여 실시하는 것을 원칙으로 한다`. Principle reversal in the same article.
- A10 — 제2129호 제59·60·61조 contain full DT&E procedural text; 제2436호 (lines 1725, 1728, 1731) replaces all three article bodies with `<삭 제>` placeholder.
- Negative cluster comparator: search of all eight other revisions yields zero with multiple simultaneous movements. The next-largest single-revision change is 제2842호 (re-addition of A8a hedge after 3-year absence), a single-anchor movement.
- See [[../regulations/defense-it-operations-directive-2129|directive hub]] §"제2436호 cluster" table.

## Counter-hypothesis

The six co-occurring movements at 제2436호 are statistically expected for any "major" directive revision and reflect periodic restructuring of administrative directives rather than coordinated rebuild. Defense IT directives may receive episodic comprehensive revisions every several years; 제2436호 happens to be one such episode and the simultaneity is an artifact of the revision interval.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. Any of the other eight revisions in the dataset (제2263호 / 제2398호 / 제2576호 / 제2649호 / 제2842호 / 제2946호 / 제3059호 / 제3080호) is shown to move six or more anchors simultaneously, demonstrating that 제2436호's cluster magnitude is not exceptional. (Easily falsifiable by re-running A.3 measurements; this has been done — none qualify.)
2. Production of the 제2436호 revision rationale (제·개정 이유서) showing that the six movements are administratively independent and were bundled by scheduling convenience rather than substantive coupling.
3. Demonstration that anchor selection is biased toward 제2436호 by hindsight — i.e., that the eleven anchors were chosen from a larger pool because they happened to move at 제2436호. (Anchor list was fixed in the calibration ingest of 2026-04-11 before the cluster was discovered, then expanded by independent verifications; cluster was the conclusion, not the premise.)

If item 1 is produced, the verdict downgrades to WEAKENED. If item 2 is produced with credible justification, the verdict downgrades to NEEDS_MORE_EVIDENCE.

## Verdict

**CORROBORATED.** Strong. Cluster magnitude exceeds the next-largest single-revision change by a factor of at least 6:1 in the eleven-anchor framework, and the six movements span four distinct articles (제10조, 제11조, 제57조, 제58조, 제59~61조 group), making the "scheduling convenience" counter-hypothesis structurally implausible without independent corroboration from a 입법예고 document.

## Open Questions

- Does the 제2436호 입법예고 / 규제영향분석서 exist and is it publicly retrievable? (Pending A.5 web research target.)
- Did the 2020-04 to 2020-06 timeframe contain any external trigger (e.g., audit, NIS report, internal MND directive review) that could plausibly motivate a coordinated edit of this magnitude?
- The temporal distance from KIATIS test evaluation completion (2019-12) to 제2436호 effective date (2020-06-04) is six months. Is this consistent with a "post-incident regulatory adjustment" timeline based on comparable cases? (Empirical question requiring base-rate data.)

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter discusses the 2020-06 directive event cluster. Deferred to A.6 Re-verify.

## Related

- [[2436ho-didc-naming-anchor-removed|A1: DIDC naming anchor removed]]
- [[2436ho-gukjeonwon-role-tier-renaming|A2: role-tier renaming]]
- [[2398-2842ho-otne-environment-hedge-flipflop|A8a: OT&E environment hedge flip-flop]]
- [[2436ho-otne-sponsor-binding-erased|A8b: OT&E sponsor binding erased]]
- [[2436ho-test-evaluation-principle-inverted|A9: separation principle inverted]]
- [[2436ho-dtne-articles-erased|A10: DT&E articles erased]]
- [[../regulations/defense-it-operations-directive-2129|Hub: 훈령 제2129호]]
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]]
- [[../layers/layer-4|Layer 4]]

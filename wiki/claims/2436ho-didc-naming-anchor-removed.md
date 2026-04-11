# 제2436호 removes the DIDC entity-naming anchor from 제10조

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md
**Layer:** [[../layers/layer-1|Layer 1]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-001"})
SET fr.layer = 1,
    fr.claimType = "regulatory_anchor_removal",
    fr.claimDesc = "제2436호 (2020-06-04) removed the explicit naming of 국방통합 데이터센터의 정보화사업 from 제10조 ¶1 제4호 by deleting the entire 4호 axis",
    fr.counterHypothesis = "제10조 ¶1 4호 was removed as part of a routine restructuring of project-classification axes, with no intent to remove DIDC accountability — the DIDC accountability framework was relocated to a separate provision or to 국방사이버안보훈령",
    fr.falsificationCondition = "Production of the relocation provision (in 제2436호 itself or in a contemporaneous separate directive) that names DIDC as a controlled scope, OR a regulatory impact statement / explanatory note from MND showing the 4호 deletion was paired with relocated DIDC controls",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "DIDC entity-naming anchor present in baseline (제2075호 / 제2129호) is entirely removed at 제2436호 with no replacement provision identified in the same directive";
```

## Claim

On 2020-06-04, 국방정보화업무 훈령 제2436호 removed the entire 제10조 ¶1 제4호 axis ("사업통제기관에 따른 구분"), thereby eliminating the explicit naming of `국방통합 데이터센터의 정보화사업 등` as a 국방부 통제 사업 from the directive.

## Layer

[[../layers/layer-1|Layer 1]] — Active-X 제거 사업 간 舊KIATIS 이력 제거 (DIDC 해킹 근원서버 은폐의 출발점). Removing the directive-level anchor that names DIDC removes the regulatory hook from which DIDC accountability can be traced backward into the 2016 hacking incident.

## Supporting evidence

- 제2129호 (2018-02-05) 제10조 ¶1 제4호 (lines 584–588): `4. 사업통제기관에 따른 구분 / 가. 국방부 통제 사업 : 전군지원사업, 국본사업, 기타 지정된 주요사업(국방통합 데이터센터의 정보화사업 등) / 나. 위임 사업 : 기관사업, 기타 위임된 사업(운영 및 유지보수사업 등)`
- 제2436호 (2020-06-04) 제10조 ¶1 (lines 552–589): only 1호, 2호, 3호 axes remain; no 4호; no DIDC mention anywhere in 제10조
- 제2576호, 제2649호, 제2842호, 제2946호, 제3059호, 제3080호 (verified by direct read): 4호 axis remains absent, DIDC remains unnamed in 제10조 — monotonic, no reversal
- See [[../regulations/defense-it-operations-directive-2129|directive hub]] §11-anchor table A1
- See [[../../output/a3-revision-timeline-report-2026-04-11|A.3 timeline report]]

## Counter-hypothesis

The 4호 axis removal was a routine restructuring of project-classification taxonomy with no intent to remove DIDC accountability. DIDC oversight was either (a) relocated to another provision in 제2436호 or in a contemporaneous directive, or (b) made implicit through the 1호–3호 axes via the 국본 사업 category (제3호 나목), under which DIDC informationization projects would automatically fall.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. A 제2436호 article (other than 제10조) that explicitly names `국방통합 데이터센터` or `DIDC` as a controlled or oversight-bound scope.
2. A separate MND directive issued contemporaneously with 제2436호 (between 2020-04 and 2020-08) that takes over the DIDC-naming function.
3. A regulatory impact statement (입법예고 / 규제영향분석서) for 제2436호 stating that the 4호 deletion was paired with relocation of DIDC controls.
4. Evidence that the 1호–3호 axes alone fully reproduce the 국방부 통제 designation effect for DIDC, such that the 4호 deletion was redundant.

If any of items 1–3 are produced, the verdict downgrades to WEAKENED. If item 4 is produced and accepted, the verdict downgrades to UNFALSIFIABLE.

## Verdict

**CORROBORATED.** Strong. Pending negative verification of items 1–3 above (no contemporaneous relocation provision found in the converted file set, but full search of MND directives between 2020-04 and 2020-08 has not been performed and is queued for A.5).

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter contains substantive coverage of the 제2436호 / DIDC removal context. Deferred to A.6 Re-verify.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster: six anchors moving on 2020-06-04]]
- [[2436ho-gukjeonwon-role-tier-renaming|2436호 retiers 사업통제/주관/관리 → 정보화기획관실/소요제기/집행]]
- [[../regulations/defense-it-2129-article-10|제2129호 제10조]]
- [[../entities/organizations/didc|DIDC]]
- [[../layers/layer-1|Layer 1]]
- [[../topics/defense-informatization-cartel|Defense Informatization Cartel]]

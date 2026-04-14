---
lang: ko
title-ko: "제2436호 erases 제59·60·61조 (DT&E planning, execution, corrective action) from the directive body"
title-en: ""
aliases:
  - FR-L4-A10-001
  - "제2436호 erases 제59·60·61조 (DT&E planning,"

layer: 4
secondary-layers: []
claimType: regulatory_manipulation
claimSubtype: regulatory_article_erasure
fracture-type: F-MS
source-type: regulation

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: 2020-06-04

persons: []
organizations:
  - 국전원
  - MND
  - 국본
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/regulatory-manipulation
  - source/regulation
  - fracture/F-MS
  - org/국전원
  - org/MND
  - org/국본
---
# 제2436호 erases 제59·60·61조 (DT&E planning, execution, corrective action) from the directive body

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-A10-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_article_erasure",
    fr.claimDesc = "제2436호 (2020-06-04) replaced the bodies of 제59조 (개발시험평가 계획수립), 제60조 (개발시험평가 실시), and 제61조 (개발시험평가 조치) with the placeholder '<삭 제>', removing the directive's procedural framework for DT&E execution",
    fr.counterHypothesis = "The DT&E procedural framework was relocated to a separate directive (e.g., 시험평가훈령 or 국방사이버안보훈령) that took effect on or before 2020-06-04, leaving 훈령 제2436호's deletion as a re-routing rather than an erasure",
    fr.falsificationCondition = "Production of a separate directive in force on 2020-06-04 that contains DT&E planning, execution, and corrective-action procedures equivalent to the deleted 제59·60·61조 content",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Three articles erased to <삭 제> placeholder; remains erased in 제2576호 through 제3080호; no relocation provision identified in the converted directive set";
```

## Claim

On 2020-06-04, 국방정보화업무 훈령 제2436호 replaced the bodies of 제59조 (개발시험평가 계획수립), 제60조 (개발시험평가 실시), and 제61조 (개발시험평가 조치) with the formal placeholder `<삭 제>`. The directive's entire procedural framework for DT&E planning, execution, and corrective action was erased in a single revision and never restored through 제3080호.

## Key Takeaways

- 제2436호 (2020-06-04) replaced the bodies of 제59조 (개발시험평가 계획수립), 제60조 (개발시험평가 실시), and 제61조 (개발시험평가 조치) with the placeholder `<삭 제>`, erasing the directive's entire procedural framework for DT&E planning, execution, and corrective action in a single revision [진리성] (raw/04 제2436호 lines 1725, 1728, 1731).
- The erasure persists unrestored through 제2576호, 제2649호, and onward to 제3080호 — no subsequent revision reinstates the DT&E procedural articles [진리성].
- Erasing the DT&E framework removes the textual basis for `what does the directive require for DT&E?`, rendering DT&E evidence **missing-by-default** rather than **missing-by-violation** — a structural shift in how accountability is measured [타당성].
- No relocation provision has been identified in the converted directive set; the counter-hypothesis (DT&E procedures relocated to 시험평가훈령 or 국방사이버안보훈령) requires positive evidence not yet in the corpus [진리성].
- Verdict: **CORROBORATED**, Strong. 진리성 9 / 타당성 9 / 진실성 7. KIATIS is bound by the pre-deletion 제59~61조 under [[kiatis-rfp-binds-lifecycle]]; the erasure matters for post-2020-06-04 projects and for how 2022 reviewers frame KIATIS DT&E evidence [진실성].

## Layer

[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. The DT&E procedural framework is the regulatory mechanism that, if followed, would force evidence to be created at each step of DT&E. Erasing the framework removes the textual basis for the question "what does the directive require for DT&E?" and renders DT&E evidence missing-by-default rather than missing-by-violation.

## Supporting evidence

- 제2129호 (2018-02-05) 제59조: full body — DT&E plan preparation by 사업관리기관 (국전원 for 국본 systems), submission to 사업통제기관 for approval, scope of plan
- 제2129호 제60조: full body — DT&E execution by 사업관리기관, criteria for evaluation, integration with development phases
- 제2129호 제61조: full body — DT&E corrective action requirements, re-test if defects found
- 제2436호 (2020-06-04) (lines 1725, 1728, 1731): `제59조(개발시험평가 계획수립) <삭 제>` / `제60조(개발시험평가 실시) <삭 제>` / `제61조(개발시험평가 조치) <삭 제>`
- Persistence verification: same `<삭 제>` placeholder confirmed in 제2576호 (lines 1734, 1737, 1740) and 제2649호 (lines 1743, 1746, 1749) by direct read
- See [[2436ho-test-evaluation-principle-inverted|paired change A9 — separation principle inverted]]
- See [[../regulations/defense-it-operations-directive-2129|directive hub]]

## Counter-hypothesis

The DT&E procedural framework was not erased but **relocated** to a separate directive (시험평가훈령, 국방사이버안보훈령, or a new specialized directive) that took effect on or before 2020-06-04. Under this hypothesis, 제2436호's deletion is a structural re-routing — DT&E planning, execution, and corrective action are now governed by a different document, not by no document.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. A separate MND directive in force on 2020-06-04 containing DT&E planning procedures functionally equivalent to the deleted 제59조.
2. A separate directive containing DT&E execution procedures functionally equivalent to 제60조.
3. A separate directive containing DT&E corrective-action requirements functionally equivalent to 제61조.
4. A 제2436호 입법예고 / 제·개정 이유서 explicitly stating that the deletion was paired with relocation to a named target directive.

If items 1–3 are produced (all three or for the substantive content), the verdict downgrades to WEAKENED. If item 4 is produced and the named target directive is verified to contain the relocated content, the verdict downgrades to UNFALSIFIABLE.

## Verdict

**CORROBORATED.** Strong. No relocation provision has been identified in the converted directive set. The strongest version of the counter-hypothesis requires positive evidence not in evidence; the deletion-as-relocation hypothesis is logically possible but requires production of the relocation target.

## Open Questions

- Is there a 시험평가훈령 in `raw/04. law & regulation/` (Korean or English subfolder)? If so, ingest is queued for A.5 to test the relocation hypothesis directly.
- Did 국방사이버안보훈령 absorb DT&E procedural responsibility for any subset of defense IT projects post-2020-06-04?

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 (primary)
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6
- Deferred to A.6 Re-verify.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster meta-claim]] (SUPERSEDES)
- [[2436ho-test-evaluation-principle-inverted|A9: separation principle inverted (paired)]] (CORROBORATES)
- [[kiatis-2129ho-main-regime-applies|KIATIS bound by pre-deletion 제59~61조]] (CORROBORATES)
- [[../regulations/defense-it-2129-article-58|제58조 (still references 제59~64조 as procedural backbone in baseline)]] (ABOUT)
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]] (ABOUT)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

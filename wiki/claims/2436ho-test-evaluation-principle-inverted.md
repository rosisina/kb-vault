# 제2436호 inverts 제58조 from "separation principle" to "integration principle"

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2436호)(20200604).converted.md, raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2649호)(20220506).converted.md
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-A9-001"})
SET fr.layer = 4,
    fr.claimType = "regulatory_principle_inversion",
    fr.claimDesc = "제2436호 (2020-06-04) inverted the test-evaluation principle from 'separate as principle, integrate by exception' (제2129호 제58조 ¶2) to 'integrate as principle, separate by exception' (제2436호 제58조 ¶1) — a direct semantic reversal of the regulatory default for DT&E/OT&E execution",
    fr.counterHypothesis = "The inversion is a re-statement of pre-existing practice rather than a substantive change of the legal default; integrated execution had been the de facto norm even under 제2129호 and 제2436호 merely conformed the directive text to existing practice",
    fr.falsificationCondition = "Production of (a) any 사업통제기관 written approval under 제2129호 제58조 ¶2 permitting integrated execution for any project 2018–2020, in numbers consistent with 'integrated as norm', OR (b) MND audit / inspection records 2018–2020 treating integrated execution as compliant without requiring exception approval",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Direct text comparison: 제2129호 ¶2 'separate as principle' → 제2436호 ¶1 'integrate as principle'; semantic inversion of the same article in the same directive";
```

## Claim

On 2020-06-04, 국방정보화업무 훈령 제2436호 inverted the test-evaluation principle in 제58조 from `개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되` (separation as principle, integration as exception) to `시험평가는 통합하여 실시하는 것을 원칙으로 한다` (integration as principle, separation as exception). This is a semantic reversal of the regulatory default in the same article of the same directive, not a clarification or restatement.

## Layer

[[../layers/layer-4|Layer 4]] — 新KIATIS 개발·운영·시험평가 전·중·후 조작. The inversion converts the regulatory default for test-evaluation execution. Any post-2020-06-04 review of pre-2020-06-04 conduct must apply the older default (separation principle) to be lawful under 행위시법주의.

## Supporting evidence

- 제2129호 (2018-02-05) 제58조 ¶2 (verbatim, paragraph): `국방부 통제사업의 시험평가 절차는 제59조에서 제64조까지의 내용을 준용하며 개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되, 필요시 사업통제기관의 승인을 받아 동시에 실시할 수 있다.`
- 제2436호 (2020-06-04) 제58조 ¶1 (line 1700): `제57조의 구분에도 불구하고, 시험평가는 통합하여 실시하는 것을 원칙으로 한다(통합하여 실시하는 경우 이후 "시험평가"로 명칭한다.). 다만, 사업의 특성이 있는 경우 분리하여 수행할 수 있으며, 분리 수행여부는 집행기관과 소요제기기관이 협의하여 결정한다.`
- 제2649호 (2022-05-06) 제58조 ¶1 (line 1718): identical 제2436호 inversion text — pattern persists.
- 11-revision verification: pre-제2436호 ¶1 was about COTS (`상용정보통신제품 도입 시…`), confirming that the inversion is a structural rewrite (¶2 contents promoted to ¶1 with reversed polarity, ¶1 contents demoted), not a paragraph reordering.
- See [[../regulations/defense-it-2129-article-58|제58조 page]]
- See [[2436ho-cluster-six-anchors|2436호 cluster]] for the simultaneity context

## Counter-hypothesis

The inversion is a re-statement of pre-existing practice. Integrated DT&E/OT&E execution had been the de facto norm even under 제2129호 (the "exception" was the rule), and 제2436호 merely conformed the directive text to existing practice without changing the legal default.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. A statistically significant set of 사업통제기관 written approvals under 제2129호 제58조 ¶2 permitting integrated execution for projects 2018–2020, of a magnitude consistent with "integrated as norm". A handful of approvals would not satisfy this; "norm" requires majority practice.
2. MND audit, inspection, or 감사원 reports 2018–2020 treating integrated execution as compliant without requiring 제58조 ¶2 exception approval — i.e., showing that 사업통제기관 approval was administratively presumed and not enforced.
3. An academic or policy commentary contemporaneous with 제2129호 (2018–2019) describing integrated execution as the default Korean practice for defense IT projects.

If item 1 or 2 is produced, the verdict downgrades to WEAKENED. If item 3 alone is produced, it does not affect the verdict (academic description is not a substitute for regulatory practice).

## Verdict

**CORROBORATED.** Strong. The semantic inversion is undeniable on direct text comparison; the counter-hypothesis requires producing positive evidence that does not currently exist in the corpus and cannot exist in the directive's own text (which is what the directive says, not what was practiced). 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` — Layer 2 chapter
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 chapter (primary, contains 분리/통합 원칙 narrative)
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (prosecutor's framework choice on the principle)
- Deferred to A.6 Re-verify. The book likely contains the precise claim about which prosecutor framework was applied; this atom's verdict and falsification structure should be cross-checked.

## Related

- [[2436ho-cluster-six-anchors|2436호 cluster meta-claim]]
- [[2436ho-dtne-articles-erased|A10: DT&E article deletion (paired change)]]
- [[kiatis-2129ho-main-regime-applies|KIATIS bound by 제2129호 separation principle]]
- [[../regulations/defense-it-2129-article-58|제58조]]
- [[../topics/test-evaluation-manipulation|Test Evaluation Manipulation]]
- [[../layers/layer-4|Layer 4]]

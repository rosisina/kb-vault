# 제2576호: 제62-64조에서 '운용' 접두어 제거 — DT/OT 제도적 구분 완전 소멸

**Source:** raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2576호)(20210812).converted.md 제62조, 제63조, 제64조 제목 (lines 1743-1800)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-OTE-PREFIX-DROPPED"})
SET fr.layer = 4,
    fr.claimType = "terminology_manipulation",
    fr.claimSubtype = "terminology_substitution",
    fr.claimDesc = "DT/OT 제도적 구분 완전 소멸. 제58조 전환+제59-61조 삭제+제62-64조 접두어 제거의 3단계 공격.",
    fr.counterHypothesis = "제2436호 통합원칙 채택 후 '운용' 접두어는 불필요한 잔여 표현이며 삭제는 편집적 정비",
    fr.falsificationCondition = "2021년 시점 다른 한국 정부 IT 지침이 DT/OT 분리 절차 조항을 유지하고 있었음을 보여주는 사례",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 6,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "DT/OT 제도적 구분 완전 소멸. 제58조 전환+제59-61조 삭제+제62-64조 접두어 제거의 3단계 공격.";
```

## Claim

제2075호의 '운용시험평가 계획수립/실시/결과조치'(제62-64조)가 제2576호에서 '시험평가 계획수립/실시/결과조치'로 변경. 제59-61조(DT&E) 삭제 + 제62-64조 '운용' 접두어 제거 = 개발시험평가와 운용시험평가의 제도적 구분 완전 소멸. 제58조 통합원칙 전환, 제57조 구분의 임의화와 함께 3단계 종합 공격.

## Key Takeaways

- 6 separate test-eval articles (59-64) collapsed to 3 generic ones (62-64 without '운용' prefix) [타당성]
- Combined with 제58조 inversion and 제57조 modality change, completes terminological collapse of DT/OT distinction [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

제2436호 통합원칙 채택 후 '운용' 접두어는 불필요한 잔여 표현이며 삭제는 편집적 정비

## Falsification condition

2021년 시점 다른 한국 정부 IT 지침이 DT/OT 분리 절차 조항을 유지하고 있었음을 보여주는 사례

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 8 / 진실성 6.

## Spot-check

- `vault-converted-korean/국방 정보화업무 훈령(국방부훈령)(제2576호)(20210812).converted.md` lines 1743-1800

## Related

- [[2436ho-test-evaluation-principle-inverted]] (SUPERSEDES)
- [[2436ho-dtne-articles-erased]] (SUPERSEDES)
- [[layer4-dtot-separation-principle-violated]] (RELATED)

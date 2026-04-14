# 검찰단장의 무혐의 촉구 회피 — 32년 군인의 호소에 대한 조직적 방어

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/13-3-7-37-제7층위-진정서.md §3.7.1.2 (lines 20-39)
**Layer:** [[../layers/layer-7|Layer 7]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L7-PROSECUTION-CHIEF-EVASION"})
SET fr.layer = 7,
    fr.claimType = "institutional_obstruction",
    fr.claimSubtype = "innocence_plea_deflection",
    fr.claimDesc = "검찰단장 안세준(준장)은 한지훈의 무혐의 촉구 전화(2022.9.28, Record 11,202~11,204)에서 '아직 보고 받지 못했다', '수사팀에서 결론을 내야 한다'며 직접 개입을 회피하였다. 진정서(2022.10.4, Record 5,671~5,675) 제출에도 불구하고 기소유예 결정이 유지되었다",
    fr.counterHypothesis = "검찰단장은 수사 독립성을 존중하여 개별 사건에 개입하지 않는 것이 정상적 절차이며, 회피가 아닌 원칙 준수이다",
    fr.falsificationCondition = "검찰단장이 피의자의 무혐의 주장을 검토하고 수사팀에 재검토를 지시한 기록의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "검찰단장은 한지훈이 제출한 40장 증명문서의 내용을 검토하겠다고 했으나, 기소유예 결정이 유지된 결과로 보아 실질적 검토가 이루어지지 않았다. 한지훈의 아들 질환, 가족 파괴, 정신과 치료 등 극심한 피해 상황에서의 호소가 무시됨.";
```

## Claim

한지훈은 국방부 검찰단장 안세준(준장)에게 2022년 9월 28일 전화하여 무혐의 처리를 촉구하였다(기록 제11,202쪽~제11,204쪽). 한지훈은 32년 군 경력, 아들의 중병, 가족 파괴, 정신과 치료 중인 극한 상황을 설명하며 "무혐의입니다. 제가 대상이 아닙니다"라고 호소했다.

검찰단장의 대응: "아직 보고 받지 못했다", "수사팀에서 결론을 내야 한다", "제가 거기다 해라 마라 할 수 있는 사안은 아니다" — 사실상 회피.

이후 2022.10.4. 검찰단장에게 정식 진정서 제출(기록 제5,671쪽~제5,675쪽)에도 불구하고 기소유예 결정이 유지되었다. 또한 검찰단 인권담당감독관에게도 진정서 제출(기록 제5,603쪽, 제5,628쪽)하였으나 결과 변동 없었다.

피의자 신문에서 검찰관과 수사관이 舊KIATIS의 15년간 VPN 미사용을 인정했음에도 불기소 이유서에는 이 사실이 반영되지 않았다.

## Key Takeaways

- The prosecution chief (안세준, brigadier general) deflected 한지훈's innocence plea by claiming procedural boundaries — despite having received detailed evidence documentation [진리성]
- 한지훈's 40-page evidence document proving his innocence was submitted but did not change the 기소유예 outcome — suggesting it was never substantively reviewed [진리성]
- The extreme personal cost (child's illness, family destruction, psychiatric treatment, tooth loss) was communicated directly but produced no protective response [진실성]
- Prosecutors acknowledged in interrogation that 舊KIATIS operated 15 years without VPN — but this was not reflected in the non-prosecution report [진리성]

## Supporting evidence

- **Record No. 11,202~11,204** — 한지훈-검찰단장 안세준 대화 (2022.9.28.)
- **Record No. 5,671~5,675** — 검찰단장에게 제출한 진정서 (2022.10.4.)
- **Record No. 5,603, 5,628** — 인권담당감독관에게 제출한 진정서

## Counter-hypothesis

검찰단장의 대응은 수사 독립성을 존중하는 정상적 절차이며, 피의자의 직접 호소에 개입하지 않는 것이 오히려 적법하다.

## Falsification condition

검찰단장이 한지훈의 증명문서를 검토하고 수사팀에 재검토를 지시한 공식 기록.

## Verdict

**CORROBORATED.** Moderate. 진리성 8 / 타당성 8 / 진실성 10. 피해자의 극한 상황에서의 호소가 제도적으로 무시된 구조적 문제.

## Spot-check

- `vault-converted-korean/13-3-7-37-제7층위-진정서.md` lines 20-39

## Related

- [[han-ji-hoon-dan-jang-phone-call-2022-09-28|2 shared records — 2022-09-28 단장 통화]] (RELATED)
- [[prosecution-non-prosecution-self-contradiction]] — L6 불기소 이유서 모순 (RELATED)
- [[../layers/layer-7|Layer 7]] (PART_OF_LAYER)

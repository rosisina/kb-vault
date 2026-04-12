# 기소유예 6혐의(10.11) → 불명예제대(10.31) — 20일 간격의 설계

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/03-executive-summary--핵심-요약.md 핵심요약 §2 (lines 400)
**Layer:** [[../layers/layer-7|Layer 7]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L7-KISO-YUYE-DISCHARGE-20DAYS"})
SET fr.layer = 7,
    fr.claimType = "factual_core",
    fr.claimDesc = "기소유예(10.11)→불명예제대(10.31) 20일. 32년 군경력 종결.",
    fr.counterHypothesis = "기소유예는 정당한 검찰 재량이며 제대는 독립적 군 행정 절차",
    fr.falsificationCondition = "20일이 장교 제대의 표준 처리 기간임을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "기소유예(10.11)→불명예제대(10.31) 20일. 32년 군경력 종결.";
```

## Claim

2022.10.11 6가지 혐의 기소유예 → 2022.10.31 32년 군 생활 불명예제대. 20일 시간 간격은 기소유예가 불명예제대의 수단으로 설계되었음을 시사한다.

## Key Takeaways

- 기소유예→dishonorable discharge 20 days apart — speed suggests designed mechanism [진리성]
- 32-year career terminated; family destroyed [진실성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

기소유예는 정당한 검찰 재량이며 제대는 독립적 군 행정 절차

## Falsification condition

20일이 장교 제대의 표준 처리 기간임을 보여주는 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 8 / 타당성 7 / 진실성 10.

## Spot-check

- `vault-converted-korean/03-executive-summary--핵심-요약.md` lines 400

## Related

- [[han-ji-hoon-kiso-yuye-is-criminal-stigma]]
- [[../layers/layer-7|Layer 7]]

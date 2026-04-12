# 新KIATIS 지연을 통한 한지훈 제거 — 2022.2.8 진실 발견 후 '개발 부실' 프레이밍

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.5.2 (lines 747-761)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-5|Layer 5]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-DELAY-LEADER-ELIMINATION"})
SET fr.layer = 6,
    fr.claimType = "victim_targeting",
    fr.claimDesc = "진실 발견→제거 동기→'개발 부실' 프레이밍의 순차 구조.",
    fr.counterHypothesis = "한지훈에 대한 책임 추궁은 실제 개발 관리 부실에 기반",
    fr.falsificationCondition = "한지훈의 개발 관리에 실질적 부실을 보여주는 독립 감리 보고서",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "진실 발견→제거 동기→'개발 부실' 프레이밍의 순차 구조.";
```

## Claim

新KIATIS 전력화 지연의 제3 전략 목적은 2022-02-08 회의에서 舊KIATIS 보안 위반 진실을 발견한 한지훈을 '개발 부실' 책임자로 프레이밍하여 제거하는 것이었다. 지연 자체가 의도적이었기 때문에 그 책임을 개발관리팀장에게 전가하는 것이 가능했다.

## Key Takeaways

- 한지훈's truth discovery at 2022-02-08 meeting made his removal the cartel's most urgent objective [진실성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

한지훈에 대한 책임 추궁은 실제 개발 관리 부실에 기반

## Falsification condition

한지훈의 개발 관리에 실질적 부실을 보여주는 독립 감리 보고서

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 7 / 진실성 9.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 747-761

## Related

- [[new-kiatis-delay-three-strategic-objectives]]
- [[layer5-48hr-retaliation-causal-link]]
- [[../layers/layer-6|Layer 6]]

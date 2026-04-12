# L5→L6→L7 결론선행 체인: 감사→기소→제도거부 3단계 동일 패턴 반복

**Source:** wiki/claims/layer5-predetermined-audit-conclusion.md + prosecution-knew-innocence-continued-case.md + han-ji-hoon-rebuttal-rejected-by-eight-institutions.md §3.5.2.1 + §3.6.3.3.5 + §3.7 (lines cross-reference)
**Layer:** [[../layers/layer-7|Layer 7]], [[../layers/layer-5|Layer 5]] (secondary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CB-05-PREDETERMINED-CHAIN"})
SET fr.layer = 7,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "cross_layer_pattern",
    fr.claimDesc = "L5→L6→L7 결론선행 3단계 체인. 동일 패턴의 3회 반복 = 설계된 거부 파이프라인.",
    fr.counterHypothesis = "각 층위의 결과는 독립적으로 결정되었으며 패턴 유사성은 우연",
    fr.falsificationCondition = "각 층위에서 결론에 선행하는 독립적 증거 수집이 이루어졌음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "L5→L6→L7 결론선행 3단계 체인. 동일 패턴의 3회 반복 = 설계된 거부 파이프라인.";
```

## Claim

Layer 5의 43일 결론선행(감사결론→조사), Layer 6의 무혐의 인지 후 수사 계속, Layer 7의 8개 기관 일괄 거부는 단일 패턴의 3단계 반복: 결론이 증거에 선행하고, 모순이 발견되어도 결론이 변경되지 않으며, 외부 시정 메커니즘도 동일 패턴을 답습. 3개 독립 층위에서 동일 패턴 반복 = 설계된 거부 파이프라인.

## Key Takeaways

- Same predetermined-conclusion pattern repeats across L5 (audit), L6 (prosecution), L7 (institutional rejection) [진리성]
- Three-layer repetition proves design, not coincidence — a rejection pipeline [타당성]

## Supporting evidence

- **Record No. 3,965**
- **Record No. 11,188**
- **Record No. 5,679**

## Counter-hypothesis

각 층위의 결과는 독립적으로 결정되었으며 패턴 유사성은 우연

## Falsification condition

각 층위에서 결론에 선행하는 독립적 증거 수집이 이루어졌음을 보여주는 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 10.

## Spot-check

- `vault-converted-korean/layer5-predetermined-audit-conclusion.md + prosecution-knew-innocence-continued-case.md + han-ji-hoon-rebuttal-rejected-by-eight-institutions.md` lines cross-reference

## Related

- [[layer5-predetermined-audit-conclusion]] (CAUSES)
- [[prosecution-knew-innocence-continued-case]] (CAUSES)
- [[han-ji-hoon-rebuttal-rejected-by-eight-institutions]] (OPPOSES)
- [[../layers/layer-7|Layer 7]] (PART_OF_LAYER)

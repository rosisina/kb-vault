# L5 증인 파괴 → L6 증인 소환: 독립성 파괴 후 순응적 증언 수확

**Source:** wiki/claims/layer5-six-month-witness-destruction-tactics.md + prosecution-witness-list-reveals-cartel.md §3.5.1.6 + §5.3.4 (lines cross-reference)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-5|Layer 5]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CB-04-WITNESS-PIPELINE"})
SET fr.layer = 6,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "cross_layer_mechanism",
    fr.claimDesc = "L5 증인파괴→L6 증인소환 파이프라인. 독립성 파괴 후 순응적 증언 수확.",
    fr.counterHypothesis = "증인 격리와 증인 소환은 독립적 행정·법적 조치",
    fr.falsificationCondition = "검찰 증인이 강압 여부 심사를 거쳤고, 격리 전 입장과 일관된 증언을 한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "L5 증인파괴→L6 증인소환 파이프라인. 독립성 파괴 후 순응적 증언 수확.";
```

## Claim

Layer 5에서 6개월간 체계적 증인 파괴 전술(독방 격리, PC 차단, 동료 침묵 유도)을 실행한 후, Layer 6에서 동일 조직이 '파괴된' 증인들을 참고인으로 소환. L5 증인 파괴 → L6 증인 활용의 순차 파이프라인: 먼저 독립적 증언 능력을 파괴한 후, 조직 서사에 순응하는 증언만 수확.

## Key Takeaways

- L5 destroyed witness independence through isolation tactics; L6 then summoned same witnesses [진리성]
- Sequential pipeline: destroy independence first, harvest compliant testimony second [진실성]

## Supporting evidence

- **Record No. 10,034**
- **Record No. 11,162**

## Counter-hypothesis

증인 격리와 증인 소환은 독립적 행정·법적 조치

## Falsification condition

검찰 증인이 강압 여부 심사를 거쳤고, 격리 전 입장과 일관된 증언을 한 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 10.

## Spot-check

- `vault-converted-korean/layer5-six-month-witness-destruction-tactics.md + prosecution-witness-list-reveals-cartel.md` lines cross-reference

## Related

- [[layer5-collective-witness-abandonment-selective-memory]] (CAUSES)
- [[prosecution-witness-list-reveals-cartel]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

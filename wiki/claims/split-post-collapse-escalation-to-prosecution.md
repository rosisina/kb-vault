# 공모 붕괴 후 축소 대신 확대 — 경고장 유지 + 군검찰 표적수사 전환

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md §3.5.2.4.4 (lines 270-273)
**Layer:** [[../layers/layer-5|Layer 5]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-POST-COLLAPSE-ESCALATION"})
SET fr.layer = 5,
    fr.claimType = "conspiracy_escalation",
    fr.claimDesc = "공모 붕괴→5단계 확대 대응→군검찰 표적수사 전환. 축소 불가 → 확대만 가능.",
    fr.counterHypothesis = "경고장 유지와 수사 전환은 독립적 사유에 기반한 정상 절차",
    fr.falsificationCondition = "경고장 유지의 핵심 사유가 붕괴된 후에도 적법한 행정 관행임을 보여주는 선례",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "공모 붕괴→5단계 확대 대응→군검찰 표적수사 전환. 축소 불가 → 확대만 가능.";
```

## Claim

업체 확인서로 출퇴근 조작이 붕괴된 후, 정상적이라면 경고장 철회·이지영 문책이 이루어져야 했다. 그러나 5단계 대응 실행: 조작 실패 은폐→이지영 미문책→경고장 유지→다른 사유 추가→군검찰 표적수사 전환(2022.4.25). 공모의 부분적 실패가 축소가 아닌 확대(escalation)로 이어짐.

## Key Takeaways

- When conspiracy partially collapsed, organization escalated instead of retreating — 5-step response ending in military prosecution [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

경고장 유지와 수사 전환은 독립적 사유에 기반한 정상 절차

## Falsification condition

경고장 유지의 핵심 사유가 붕괴된 후에도 적법한 행정 관행임을 보여주는 선례

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 9.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 270-273

## Related

- [[layer5-fraud-investigation-triangular-model]]
- [[layer5-fabricated-warning-letter]]
- [[../layers/layer-5|Layer 5]]

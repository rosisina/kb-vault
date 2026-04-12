# 법무관리관실 경고장이 조사본부 자체 조사결과를 무시 — 출퇴근 조작 주장 붕괴에도 유지

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md §3.5.2.3.9 (lines 247-250)
**Layer:** [[../layers/layer-5|Layer 5]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-WARNING-OVERRIDES-INVESTIGATION"})
SET fr.layer = 5,
    fr.claimType = "institutional_override",
    fr.claimDesc = "조사본부 자체 조사에서 붕괴된 주장이 경고장에 그대로 유지 — 결론 선행 증거.",
    fr.counterHypothesis = "경고장은 출퇴근 이외의 다른 갑질 사유를 반영한 것이며, 출퇴근 건은 경고장 근거에 포함되지 않았다",
    fr.falsificationCondition = "경고장의 구체적 사유 목록에 출퇴근 관련 항목이 없음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "조사본부 자체 조사에서 붕괴된 주장이 경고장에 그대로 유지 — 결론 선행 증거.";
```

## Claim

법무관리관실의 경고장(2022-05-23)은 조사본부의 자체 조사에서 출퇴근 조작 주장이 2개 업체 확인서 제시로 붕괴되었음에도, 한지훈에게 불리한 내용을 그대로 유지하였다. 이는 법무관리관실이 조사본부의 실제 조사결과를 무시하고 김민수가 원하는 결론을 도출한 증거이다.

## Key Takeaways

- 법무관리관실's warning letter retained unfavorable findings even after 조사본부's own investigation found the attendance fabrication collapsed [진리성]
- This proves 법무관리관실 overrode internal investigation results to produce the cartel leader's desired outcome [타당성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

경고장은 출퇴근 이외의 다른 갑질 사유를 반영한 것이며, 출퇴근 건은 경고장 근거에 포함되지 않았다

## Falsification condition

경고장의 구체적 사유 목록에 출퇴근 관련 항목이 없음을 보여주는 기록

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 8 / 진실성 9.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 247-250

## Related

- [[warning-letter-reflects-only-lee-jiyoung]]
- [[layer5-fabricated-warning-letter]]
- [[../layers/layer-5|Layer 5]]

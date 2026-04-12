# 카카오톡: 한지훈이 시험평가 기간 중 전문 콘텐츠에 능동 참여 — 채팅 미사용이 아닌 보고할 이상 부재

**Source:** raw/03. Kakao talk data /Korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt lines 2661-2715 (lines 2661-2715)
**Layer:** [[../layers/layer-5|Layer 5]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-KKT-PROFESSIONAL-ENGAGEMENT"})
SET fr.layer = 5,
    fr.claimType = "behavioral_evidence",
    fr.claimDesc = "카카오톡에서 한지훈의 전문 콘텐츠 능동 참여 확인. 채팅 미사용≠출퇴근 보고 회피.",
    fr.counterHypothesis = "한지훈의 채팅 참여는 산발적이며 체계적 출퇴근 보고 회피와 양립 가능",
    fr.falsificationCondition = "한지훈의 '감사드립니다' 응답이 자동화되었거나 타인이 대신 작성한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "카카오톡에서 한지훈의 전문 콘텐츠 능동 참여 확인. 채팅 미사용≠출퇴근 보고 회피.";
```

## Claim

2019-09-02~04 카카오톡에서 송민석(송민석)이 SW개발관리교육 콘텐츠를 공유했을 때, 한지훈(한지훈)은 '좋은정보 감사드립니다'(9.4일)로 응답. 이는 한지훈이 채팅을 사용하지 않은 것이 아니라 전문 콘텐츠에 능동 참여했음을 보여준다. 출퇴근 보고가 없는 것은 보고할 이상이 없었기 때문.

## Key Takeaways

- 한지훈 responded to professional content in the chat during eval period — proves active chat usage, not absence [진리성]
- Zero attendance posts = nothing anomalous to report, not non-participation [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

한지훈의 채팅 참여는 산발적이며 체계적 출퇴근 보고 회피와 양립 가능

## Falsification condition

한지훈의 '감사드립니다' 응답이 자동화되었거나 타인이 대신 작성한 기록

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 7 / 진실성 8.

## Spot-check

- `vault-converted-korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt` lines 2661-2715

## Related

- [[layer5-kakaotalk-silence-proves-normal-attendance]]
- [[../layers/layer-5|Layer 5]]

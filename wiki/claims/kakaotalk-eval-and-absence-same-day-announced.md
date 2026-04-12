# 카카오톡: 시험평가 시작과 송민석 교육 부재가 동일 채널에서 동시 공유 — 조직 전체 인지

**Source:** raw/03. Kakao talk data /Korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt lines 2660-2661 (lines 2660-2661)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-KKT-EVAL-ABSENCE-SAME-DAY"})
SET fr.layer = 4,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "organizational_awareness",
    fr.claimDesc = "카카오톡에서 시험평가 시작+팀장 부재 동시 공지. 조직 전체 인지의 실시간 기록.",
    fr.counterHypothesis = "교육 일정은 사전 배정이므로 동시 공지가 의도성을 증명하지 않는다",
    fr.falsificationCondition = "국방대 교육 일정이 시험평가 확정 이전에 배정된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "카카오톡에서 시험평가 시작+팀장 부재 동시 공지. 조직 전체 인지의 실시간 기록.";
```

## Claim

2019-09-02 카카오톡에서 시험평가 위원 참석 공지와 송민석(송민석)의 국방대 교육 부재 공지가 동일 채널에서 동시에 공유되었다. 모든 팀원이 '시험평가 시작 + 팀장 부재'를 동시에 인지 — 부재의 의도적 성격을 조직 전체가 목격한 실시간 기록.

## Key Takeaways

- KakaoTalk shows evaluation start and team leader absence announced in the same channel on the same day — organizational awareness of the overlap [진리성]

## Supporting evidence

- **Record No. 1,946**

## Counter-hypothesis

교육 일정은 사전 배정이므로 동시 공지가 의도성을 증명하지 않는다

## Falsification condition

국방대 교육 일정이 시험평가 확정 이전에 배정된 기록

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 7 / 진실성 7.

## Spot-check

- `vault-converted-korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt` lines 2660-2661

## Related

- [[deliberate-absence-key-personnel-during-evaluation]] (CORROBORATES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

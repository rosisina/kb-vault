# 유지보수 PM이 시험평가 시 샤크라맥스 미사용 확인 — 국전원·DIDC 간 합의 미달

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취133-2 (lines 5837-5925)
**Layer:** [[../layers/layer-4|Layer 4]], [[../layers/layer-1|Layer 1]] (secondary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-CHAKRA-NOT-USED-TESTEVAL"})
SET fr.layer = 4,
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "testimony_admission",
    fr.claimDesc = "PM 증언: 샤크라맥스 미사용은 국전원-DIDC 합의 미달에 의한 것. 한지훈 미통보.",
    fr.counterHypothesis = "샤크라맥스 미사용은 한지훈의 의도적 은폐이며 조직 간 분쟁이 아니다",
    fr.falsificationCondition = "한지훈이 샤크라맥스 문제를 공식 통보받았음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "PM 증언: 샤크라맥스 미사용은 국전원-DIDC 합의 미달에 의한 것. 한지훈 미통보.";
```

## Claim

도지호 PM(43개체계 유지보수)이 2022-08-02 통화에서, 新KIATIS 시험평가 시 샤크라맥스(DB접근통제) 미사용을 확인. 이유: 국전원과 DIDC 간 '써야 한다/안 써도 된다'는 합의가 확정(fix)되지 않았음. '구체계도 안 썼는데 왜 써야 되냐'는 논란이 시험평가 전부터 존재. 한지훈(사업관리팀장)은 이 미사용 사실을 고지받지 못함.

## Key Takeaways

- PM confirms ChakraMax NOT used during test eval — inter-organizational agreement never finalized [진리성]
- 한지훈 was never notified of ChakraMax non-use — regulatory gap later exploited by prosecution [진실성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

샤크라맥스 미사용은 한지훈의 의도적 은폐이며 조직 간 분쟁이 아니다

## Falsification condition

한지훈이 샤크라맥스 문제를 공식 통보받았음을 보여주는 기록

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 7 / 진실성 9.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 5837-5925

## Related

- [[four-kiatis-environments-non-identical]] (CORROBORATES)
- [[didc-sop-db-access-control-mandatory]] (CORROBORATES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

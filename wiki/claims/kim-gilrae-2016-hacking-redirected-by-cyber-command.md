# 이근태 (초대 데이터센터장): 2016 해킹 조사가 사이버사령관에 의해 DIDC로 전환

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취264-1 (lines 15902-15911)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-HACKING-REDIRECTED-CYBER-CMD"})
SET fr.layer = 1,
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "insider_testimony",
    fr.claimDesc = "이근태: 2016 해킹 조사가 사이버사령관에 의해 DIDC로 의도적 전환. 2022 수사와 동일 패턴.",
    fr.counterHypothesis = "조사가 포렌식 증거에 따라 자연스럽게 DIDC로 확대된 것이며 의도적 전환이 아니다",
    fr.falsificationCondition = "사이버사령부 조사기록에서 포렌식 증거 경로에 따른 자연적 확대를 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 5,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "이근태: 2016 해킹 조사가 사이버사령관에 의해 DIDC로 의도적 전환. 2022 수사와 동일 패턴.";
```

## Claim

이근태 (초대 데이터센터장)는 2022.9.21 녹취에서 '사실은 한경수(사이버사령관)이가 우리쪽으로 방향을 팍 틀어가지고'라고 진술. 2016 해킹 조사가 사이버사령부에서 시작되어 의도적으로 DIDC로 방향 전환됨. 이근태는 이 패턴이 2022 KIATIS 수사와 '거의 비슷'하다고 평가.

## Key Takeaways

- Founding DIDC commander testifies the 2016 investigation was deliberately redirected from Cyber Command to DIDC [진리성]
- Investigation 'started from Hauri antivirus server' then was 'steered toward us' — deliberate redirection [진리성]
- 이근태 draws explicit parallel with 2022 KIATIS prosecution — recurring institutional deflection [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

조사가 포렌식 증거에 따라 자연스럽게 DIDC로 확대된 것이며 의도적 전환이 아니다

## Falsification condition

사이버사령부 조사기록에서 포렌식 증거 경로에 따른 자연적 확대를 보여주는 기록

## Verdict

**NEEDS_MORE_EVIDENCE.** STRONG. 진리성 7 / 타당성 5 / 진실성 8.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 15902-15911

## Related

- [[layer6-didc-center1-true-hacking-host]] (RELATED)
- [[prosecution-principal-actor-in-cartel]] (RELATED)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

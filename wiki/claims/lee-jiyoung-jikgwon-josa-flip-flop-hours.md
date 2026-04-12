# 이지영의 직권조사 의뢰→철회 수시간 내 번복 — '없었던 걸로 하시죠'

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취019-020 (lines 2344-2399)
**Layer:** [[../layers/layer-5|Layer 5]], [[../layers/layer-7|Layer 7]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-JIKGWON-FLIP-FLOP"})
SET fr.layer = 5,
    fr.claimType = "institutional_cover_up",
    fr.claimDesc = "녹취019→020: 직권조사 권고→수시간 내 철회→'없었던 걸로'. 상위 의사결정의 은폐 경로 차단.",
    fr.counterHypothesis = "번복은 절차적 요건 확인 후 정상적 재검토이다",
    fr.falsificationCondition = "직권조사가 법적 사유로 거부된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "녹취019→020: 직권조사 권고→수시간 내 철회→'없었던 걸로'. 상위 의사결정의 은폐 경로 차단.";
```

## Claim

이지영은 2022-02-21 녹취019에서 '인사TF장이 직권조사 의뢰를 하는 게 맞다고 조언했다'고 전달. 수시간 후 녹취020에서 '그건 또 아니래요. 제가 한 말은 없었던 거로 하시죠'로 완전 번복. 상위 의사결정에 의해 직권조사 경로가 즉시 차단됨.

## Key Takeaways

- 직권조사 was formally considered then vetoed within hours — higher-level suppression [진리성]
- 'Pretend I never said it' explicitly attempts to erase the decision trail [진리성]
- 국전원 chose NOT to investigate through official channels despite internal recognition [타당성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

번복은 절차적 요건 확인 후 정상적 재검토이다

## Falsification condition

직권조사가 법적 사유로 거부된 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 8.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 2344-2399

## Related

- [[layer5-false-gapjil-report-organizational-conspiracy-structure]]
- [[../layers/layer-5|Layer 5]]

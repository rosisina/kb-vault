# 최동욱 변호사가 검찰의 '지연' 프레이밍을 의뢰인에게 전달 — 실제로는 일정 앞당기는 중

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취190-1 (lines 9325-9342)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-LAWYER-PROSECUTION-FRAMING"})
SET fr.layer = 6,
    fr.claimType = "attorney_prosecution_alignment",
    fr.claimDesc = "일정 3일 앞당기기 요청→변호사가 '지연' 프레이밍 반복. 검찰 내러티브 의뢰인 전달.",
    fr.counterHypothesis = "최동욱은 검찰과의 관계 관리 차원에서 협조적 태도의 중요성을 설명한 것이다",
    fr.falsificationCondition = "최동욱이 검찰에 한지훈의 일정 앞당기기 요청을 전달하고 옹호한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "일정 3일 앞당기기 요청→변호사가 '지연' 프레이밍 반복. 검찰 내러티브 의뢰인 전달.";
```

## Claim

한지훈이 피의자 신문 일정을 수요일에서 금요일로 3일 앞당기자고 요청했을 때, 최동욱은 '수사하는 사람들 입장에는 지금까지 딜레이 시켜 줬어요'라고 검찰 측 내러티브를 반복. 한지훈: '수요일날 하자고 하는 건데 제가 금요일날로 사흘을 앞당기자고 하는 거 잖습니까?' 변호사가 검찰의 프레이밍을 의뢰인에게 내면화시키는 역할.

## Key Takeaways

- 최동욱 accused 한지훈 of 'delaying' the investigation when he was actually trying to ADVANCE the schedule by 3 days [진리성]
- Defense lawyer importing prosecution framing into attorney-client conversations [타당성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

최동욱은 검찰과의 관계 관리 차원에서 협조적 태도의 중요성을 설명한 것이다

## Falsification condition

최동욱이 검찰에 한지훈의 일정 앞당기기 요청을 전달하고 옹호한 기록

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 8 / 진실성 9.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 9325-9342

## Related

- [[choi-dongwook-resignation-threat-coercive-control]]
- [[prosecution-knew-innocence-continued-case]]
- [[../layers/layer-6|Layer 6]]

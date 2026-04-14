---
lang: ko
title-ko: "이근태: 최동욱 변호사가 기소유예를 최대 목표로 설정했음을 폭로"
title-en: ""
aliases:
  - FR-L6-LAWYER-KISO-YUYE-TARGET
  - "이근태: 최동욱 변호사가 기소유예를 최대 목표로 설정했음을 폭로"

layer: 6
secondary-layers: [7]
claimType: testimony_evidence
claimSubtype: third_party_disclosure
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 7
sincerity: 9
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 최동욱
  - 이근태
  - 한지훈
organizations: []
has-verbatim: false

tags:
  - layer/L6
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/testimony-evidence
  - source/recording
  - person/최동욱
  - person/이근태
  - person/한지훈
  - cross-layer
---
# 이근태: 최동욱 변호사가 기소유예를 최대 목표로 설정했음을 폭로

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취264-1 (lines 15988-16001)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-7|Layer 7]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-LAWYER-KISO-YUYE-TARGET"})
SET fr.layer = 6,
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "third_party_disclosure",
    fr.claimDesc = "이근태: 최동욱 변호사가 기소유예를 '문제 없다'로 설정. 한지훈에게 미전달된 방어 전략 폭로.",
    fr.counterHypothesis = "기소유예가 증거 상황에서 현실적으로 최선의 결과였다",
    fr.falsificationCondition = "검찰 증거가 완전 무혐의가 비현실적일 만큼 강력했음을 보여주는 법적 평가",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "녹취264-1 1차 음성증거: 이근태 '기소유예만 되도 문제는 없는 거니까' — 변호사 최동욱의 방어 전략 상한을 명시적으로 폭로. 피의자 한지훈에게 미전달된 전략으로 정보 비대칭 입증.";
```

## Claim

이근태는 2022.9.21 녹취에서 최동욱 변호사를 직접 만난 결과를 전달: '증거불충분 내지는 혐의 없음으로 종결되면 좋은 거고. 기소유예만 되도 문제는 없는 거니까'. 변호사가 기소유예를 '문제 없는' 결과로 설정한 것은 피고인에게 전달되지 않은 방어 전략이다.

## Key Takeaways

- 최동욱 privately considered 기소유예 acceptable — defense strategy aligned with prosecution framing [진리성]
- This was disclosed through third-party channel (이근태), not directly to 한지훈 — information asymmetry [진리성]
- 기소유예 = permanent criminal stigma, not 'no problem' — defense lawyer fundamentally misassessed consequences [진실성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

기소유예가 증거 상황에서 현실적으로 최선의 결과였다

## Falsification condition

검찰 증거가 완전 무혐의가 비현실적일 만큼 강력했음을 보여주는 법적 평가

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 7 / 진실성 9. 1차 음성증거(녹취264-1)에서 변호사의 기소유예 목표 설정이 명시적으로 확인됨.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 15988-16001

## Related

- [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] (RELATED)
- [[prosecution-knew-innocence-continued-case]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

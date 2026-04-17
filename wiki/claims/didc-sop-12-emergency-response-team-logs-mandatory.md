---
lang: ko
title-ko: "DIDC 부대예규 제12호 제17조: 긴급대응반 상황근무일지·침해사고 기록일지 의무"
title-en: ""
aliases:
  - FR-L1-DIDC-ERT-LOGS
  - "DIDC 부대예규 제12호 제17조: 긴급대응반 상황근무일지·침해사고 기록일지 의무"

layer: 1
secondary-layers: [6]
claimType: procedural_violation
claimSubtype: procedural_artifact_mandatory
fracture-type: F-AA
source-type: sop

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L1
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/sop
  - fracture/F-AA
  - org/DIDC
  - cross-layer
---
# DIDC 부대예규 제12호 제17조: 긴급대응반 상황근무일지·침해사고 기록일지 의무

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md 제17조③-6 (lines 341-355)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-ERT-LOGS"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_artifact_mandatory",
    fr.claimDesc = "긴급대응반 2종 일지(상황근무+침해사고) 의무. INFOCON 연동으로 2016 실시간 기록 존재 필수.",
    fr.counterHypothesis = "2016 사건이 INFOCON 상향 기준에 미달하였거나 사이버사령부 자체 대응팀이 처리하였다",
    fr.falsificationCondition = "2016 침해사고 기록일지, 상황근무일지, INFOCON 수준 기록의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "긴급대응반 2종 일지(상황근무+침해사고) 의무. INFOCON 연동으로 2016 실시간 기록 존재 필수.";
```

## 주장 (Claim)

### 한국어

DIDC 부대예규 제12호 제17조③-6은 긴급대응반의 '침해사고 기록일지'와 '상황근무일지' 유지를 의무화. 북한 해킹은 최소 II급(강화된 준비태세) 이상으로 INFOCON 상향이 예상되며, 이는 자동으로 긴급대응반 편성을 유발. 제27-32조의 INFOCON 체계와 연동하여, 2016 사건의 실시간 대응 타임라인이 이 일지들에 기록되어야 한다.

### English

DIDC Unit Regulation No. 12 Article 17③-6 mandates maintenance of an emergency response team's 'cyber intrusion incident logbook' and 'duty operations logbook.' A North Korean hacking incident would be expected to trigger an INFOCON elevation to at least Level II (heightened readiness), which automatically activates emergency response team formation. In conjunction with the INFOCON system under Articles 27–32, the real-time response timeline for the 2016 incident must be recorded in these logbooks.

## 핵심 요약 (Key Takeaways)
- 제17조③-6 mandates two contemporaneous logs: situation duty log + incident record log [타당성]
- NK hacking should trigger INFOCON II+ escalation → automatic ERT formation under 제17조 [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
2016 사건이 INFOCON 상향 기준에 미달하였거나 사이버사령부 자체 대응팀이 처리하였다

## 반증 조건 (Falsification Condition)
2016 침해사고 기록일지, 상황근무일지, INFOCON 수준 기록의 제시

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/01.(Korean) DIDC_사이버방호_예규.md` lines 341-355

## 관련 (Related)
- [[didc-sop-12-incident-scene-preservation-mandatory]] (CORROBORATES)
- [[didc-sops-cover-2016-hacking-period]] (CORROBORATES)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

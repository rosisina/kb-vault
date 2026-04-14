---
lang: ko
title-ko: 불기소결정서가 시험환경≠실제환경을 인정하면서 한지훈에게만 책임 전가
title-en: ""
aliases:
  - FR-L6-ADMITS-NOT-ACTUAL-BLAMES-VICTIM
  - 불기소결정서가 시험환경≠실제환경을 인정하면서 한지훈에게만 책임 전가

layer: 6
secondary-layers: [4]
claimType: prosecution_misconduct
claimSubtype: selective_prosecution
fracture-type: F-SE
source-type: investigation

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-12

record-nos: [1253, 1392]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - MND
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/investigation
  - fracture/F-SE
  - person/한지훈
  - org/MND
  - has/record-nos
  - cross-layer
---
# 불기소결정서가 시험환경≠실제환경을 인정하면서 한지훈에게만 책임 전가

**Source:** raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(20221014) Fraudulent Proof of Notification of the Reason for Non-Prosecution(English, Korean).converted.md IV.1.카.(2) (lines 1-509)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-ADMITS-NOT-ACTUAL-BLAMES-VICTIM"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "selective_prosecution",
    fr.claimDesc = "불기소결정서가 환경 미준수를 인정하면서 한지훈에게만 일방적으로 적용. 체계적 원인 미조사.",
    fr.counterHypothesis = "검찰의 수사 범위는 특정 혐의에 한정되며 시스템적 원인 조사는 별도 사안이다",
    fr.falsificationCondition = "검찰이 VPN 미적용 환경의 체계적 원인을 분석하고 수사 범위 제한 사유를 공식 기록한 문서",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "불기소결정서가 환경 미준수를 인정하면서 한지훈에게만 일방적으로 적용. 체계적 원인 미조사.";
```

## Claim

불기소결정서 IV.1.카.(2)에서 'KIATIS 시험평가는 SSL-VPN을 적용하여 실제 조성된 기반운영 환경에서 실시되었어야 함에도 불구하고 이를 준수하지 않은 채 실시된 사실이 인정된다'고 명시. 그러나 이 인정을 한지훈에 대한 기소유예에만 사용하고, VPN 미적용 환경을 만든 주체(舊KIATIS 15년 운영자, RFP에 VPN을 '해당없음'으로 기재한 자, 사업통제기관 역할을 회피한 국방부)는 수사하지 않았다.

## Key Takeaways

- Non-prosecution ADMITTED the regulatory violation but weaponized it exclusively against 한지훈 [진리성]
- WHO created the VPN-less environment (15-year operators, RFP drafters, MND) was never investigated [타당성]

## Supporting evidence

- **Record No. 1,253**
- **Record No. 1,392**

## Counter-hypothesis

검찰의 수사 범위는 특정 혐의에 한정되며 시스템적 원인 조사는 별도 사안이다

## Falsification condition

검찰이 VPN 미적용 환경의 체계적 원인을 분석하고 수사 범위 제한 사유를 공식 기록한 문서

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 9.

## Spot-check

- `vault-converted-korean/(20221014) Fraudulent Proof of Notification of the Reason for Non-Prosecution(English, Korean).converted.md` lines 1-509

## Related

- [[prosecution-identity-fallacy-deception-technique]] (CORROBORATES)
- [[victim-blaming-structural-to-individual]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

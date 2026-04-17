---
lang: ko
title-ko: 불기소결정서 참작사유가 한지훈의 '정상적 업무수행'을 기술 — 범죄 의도 부재의 자인
title-en: 불기소결정서 참작사유가 한지훈의 '정상적 업무수행'을 기술 — 범죄 의도 부재의 자인
aliases:
  - FR-L6-MITIGATING-IS-NORMAL-WORK
  - 불기소결정서 참작사유가 한지훈의 '정상적 업무수행'을 기술 — 범죄 의도 부재의 자인

layer: 6
secondary-layers: [7]
claimType: prosecution_misconduct
claimSubtype: prosecution_self_contradiction
fracture-type: F-SC
source-type: investigation

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 9
sincerity: 9
analysisDate: 2026-04-12

record-nos: [1200]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations: []
has-verbatim: false

tags:
  - layer/L6
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/investigation
  - fracture/F-SC
  - person/한지훈
  - has/record-nos
  - cross-layer
---
# 불기소결정서 참작사유가 한지훈의 '정상적 업무수행'을 기술 — 범죄 의도 부재의 자인

**Source:** raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(20221014) Fraudulent Proof of Notification of the Reason for Non-Prosecution(English, Korean).converted.md IV.1.카.(8) (lines 1-509)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-7|Layer 7]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-MITIGATING-IS-NORMAL-WORK"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_self_contradiction",
    fr.claimDesc = "참작사유='업체 소통+프로그램 완성+일정 충족'=정상적 업무수행. 범죄 의도 부재의 자인.",
    fr.counterHypothesis = "참작사유는 기소유예에서 표준적으로 기재되며 무죄를 의미하지 않는다",
    fr.falsificationCondition = "동일한 참작사유가 명백한 범죄 의도가 인정된 유사 사건에서도 동일하게 기재된 사례",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 8,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "참작사유='업체 소통+프로그램 완성+일정 충족'=정상적 업무수행. 범죄 의도 부재의 자인.";
```

## 주장 (Claim)

### 한국어

불기소결정서 참작사유(IV.1.카.(8))에서 '피의자는 아무런 전과가 없고, KIATIS개발을 완수하고자 개발 업체들과 지속 소통한 점이 인정되며, 프로그램의 완성과 사업 일정을 모두 충족시키기 위한 목적으로 동기에 참작할 사유가 있다'고 기재. 이 참작사유는 '업체와 지속 소통', '프로그램 완성', '일정 충족' 등 정상적 사업관리 행위를 기술하고 있으며, 이 자체가 범죄 의도(고의)의 부재를 자인하는 것이다.

### English

The non-prosecution decision document's mitigating factors (IV.1.카.(8)) state: 'The suspect has no prior criminal record, it is recognized that he continuously communicated with development companies to complete KIATIS development, and there are mitigating circumstances in the motive aimed at completing the program and meeting the project schedule.' These mitigating factors describe normal project management activities such as 'continuous communication with companies,' 'program completion,' and 'meeting schedules' — which itself is a self-admission of the absence of criminal intent (mens rea).

## 핵심 요약 (Key Takeaways)
- 불기소 결정의 참작사유는 표준적 사업관리 행위를 기술 — 업체 소통, 프로그램 완성, 일정 준수 [진리성]
- Non-prosecution's mitigating factors describe standard project management behavior — developer communication, program completion, schedule adherence [진리성]
- 이 참작사유는 책임 경감이 아닌 무죄의 증거 — 유능한 사업관리자라면 당연히 하는 행위를 기술 [타당성]
- These mitigating factors are evidence of INNOCENCE, not reduced culpability — they describe what any competent project manager would do [타당성]

## 지지 증거 (Supporting Evidence)
- **Record No. 1,200**

## 반대 가설 (Counter-hypothesis)
참작사유는 기소유예에서 표준적으로 기재되며 무죄를 의미하지 않는다

## 반증 조건 (Falsification Condition)
동일한 참작사유가 명백한 범죄 의도가 인정된 유사 사건에서도 동일하게 기재된 사례

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 8 / 타당성 9 / 진실성 9.

## 원전 확인 (Spot-check)
- `Korean/(20221014) Fraudulent Proof of Notification of the Reason for Non-Prosecution(English, Korean).converted.md` lines 1-509

## 관련 (Related)
- [[prosecution-non-prosecution-self-contradiction]] (CORROBORATES)
- [[prosecution-baeim-charge-self-contradictory]] (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

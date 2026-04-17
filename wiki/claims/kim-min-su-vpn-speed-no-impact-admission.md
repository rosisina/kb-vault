---
lang: ko
title-ko: 김민수의 VPN 속도 무관 발언 — 위계공무집행방해 혐의 근거를 스스로 부정
title-en: 김민수의 VPN 속도 무관 발언 — 위계공무집행방해 혐의 근거를 스스로 부정
aliases:
  - FR-L6-VPN-SPEED-SELF-CONTRADICTION
  - 김민수의 VPN 속도 무관 발언 — 위계공무집행방해 혐의 근거를 스스로 부정

layer: 6
secondary-layers: [4]
claimType: cross_layer_analysis
claimSubtype: self_contradiction
fracture-type: F-CE
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: 2022-10-13

persons:
  - 김민수
organizations:
  - 국전원
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/cross-layer-analysis
  - source/recording
  - fracture/F-CE
  - person/김민수
  - org/국전원
  - cross-layer
---
# 김민수의 VPN 속도 무관 발언 — 위계공무집행방해 혐의 근거를 스스로 부정

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취013 (lines 2204-2208)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-VPN-SPEED-SELF-CONTRADICTION"})
SET fr.layer = 6,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "self_contradiction",
    fr.claimDesc = "녹취013에서 김민수 '속도 안 떨어진다' 발언. 검찰 핵심 논거 자체를 국전원장이 부정.",
    fr.counterHypothesis = "김민수의 VPN 발언은 일반적 견해이며 KIATIS 시험환경에 특정적으로 적용할 수 없다",
    fr.falsificationCondition = "KIATIS 시험 네트워크에서 VPN 삽입 시 유의미한 속도 저하가 발생했음을 보여주는 기술적 증거",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "녹취013에서 김민수 '속도 안 떨어진다' 발언. 검찰 핵심 논거 자체를 국전원장이 부정.";
```

## 주장 (Claim)

### 한국어

김민수 (핵심 의사결정자-1)는 2022-10-13 녹음에서 'VPN을 연결해서 속도가 뚝 떨어지진 않는다'고 발언. 이는 군검찰이 적용한 위계공무집행방해의 핵심 논거(VPN 미사용으로 속도 차이 발생→시험결과 왜곡)를 국전원장 본인이 부정하는 발언이다.

### English

김민수 (핵심 의사결정자-1) stated in the October 13, 2022 recording that 'connecting VPN doesn't dramatically drop the speed.' This statement by 국전원 director himself negates the military prosecution's core argument for obstruction of official duties (VPN non-use causes speed difference → distorts test results).

## 핵심 요약 (Key Takeaways)
- 김민수 stated VPN does not cause significant speed drops — undermining the prosecution's core charge premise [진리성]
- This creates a direct contradiction: organization's top technical authority negates the technical basis of criminal charges [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
김민수의 VPN 발언은 일반적 견해이며 KIATIS 시험환경에 특정적으로 적용할 수 없다

## 반증 조건 (Falsification Condition)
KIATIS 시험 네트워크에서 VPN 삽입 시 유의미한 속도 저하가 발생했음을 보여주는 기술적 증거

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 2204-2208

## 관련 (Related)
- [[prosecution-six-charges-collapse-vpn-nonexistence]] (CAUSES)
- [[four-kiatis-environments-non-identical]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

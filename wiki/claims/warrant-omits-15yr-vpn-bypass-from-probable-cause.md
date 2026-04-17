---
lang: ko
title-ko: 압수수색 영장이 舊KIATIS 15년 VPN 미사용 사실을 영장판사에게 은닉
title-en: ""
aliases:
  - FR-L6-WARRANT-OMITS-15YR-VPN
  - 압수수색 영장이 舊KIATIS 15년 VPN 미사용 사실을 영장판사에게 은닉

layer: 6
secondary-layers: [1]
claimType: prosecution_misconduct
claimSubtype: judicial_deception
fracture-type: F-MS
source-type: investigation

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations: []
has-verbatim: false

tags:
  - layer/L6
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/investigation
  - fracture/F-MS
  - cross-layer
---
# 압수수색 영장이 舊KIATIS 15년 VPN 미사용 사실을 영장판사에게 은닉

**Source:** raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(220718) Confiscation, Search and Verification Warrants(ver 0.8) (English, Korean).converted.md 영장 범죄사실 기재 (lines 1-405)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-WARRANT-OMITS-15YR-VPN"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "judicial_deception",
    fr.claimDesc = "영장이 15년 VPN 미사용을 판사에게 은닉하여 거짓된 신규성 전제로 영장 발부를 받음.",
    fr.counterHypothesis = "舊KIATIS의 VPN 미사용은 영장 발부 시점에서 수사가 아직 진행 중이므로 범죄사실에 포함할 의무가 없었다",
    fr.falsificationCondition = "검찰이 영장 발부 전에 舊KIATIS의 VPN 미사용 사실을 인지하지 못했음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "영장이 15년 VPN 미사용을 판사에게 은닉하여 거짓된 신규성 전제로 영장 발부를 받음.";
```

## 주장 (Claim)

### 한국어

압수수색 영장의 범죄사실 기재에서 舊KIATIS가 15년간(2007~2022) VPN 없이 DB 직접접속으로 운영된 사실이 완전히 누락되었다. 판사가 이 사실을 알았다면 '기만'(위계)의 요소가 약화됨 — 평가위원들은 DB 직접접속이 표준 관행임을 이미 알고 있었을 가능성이 높다. 영장의 범죄사실은 거짓된 신규성(false novelty) 전제 위에 구축되었다.

### English

The criminal facts section of the search and seizure warrant completely omits the fact that Legacy KIATIS was operated without VPN and with direct DB access for 15 years (2007–2022). If the judge had known this fact, the element of 'deception' (위계) would be weakened — the evaluation committee members likely already knew that direct DB access was standard practice. The warrant's criminal facts were built on the premise of false novelty.

## 핵심 요약 (Key Takeaways)
- Warrant secured judicial authorization by omitting 15-year VPN-free operation history — constructing a false novelty premise [진리성]
- If the judge knew DB direct access was the 15-year norm, the 'deception' element of 위계공무집행방해 would be undermined [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
舊KIATIS의 VPN 미사용은 영장 발부 시점에서 수사가 아직 진행 중이므로 범죄사실에 포함할 의무가 없었다

## 반증 조건 (Falsification Condition)
검찰이 영장 발부 전에 舊KIATIS의 VPN 미사용 사실을 인지하지 못했음을 보여주는 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/(220718) Confiscation, Search and Verification Warrants(ver 0.8) (English, Korean).converted.md` lines 1-405

## 관련 (Related)
- [[prosecution-six-charges-collapse-vpn-nonexistence]] (RELATED)
- [[old-kiatis-direct-db-access-without-vpn]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

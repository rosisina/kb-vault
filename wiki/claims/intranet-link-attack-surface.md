---
lang: ko
title-ko: "C-L1-11: 舊KIATIS 인터넷+인트라넷 이중 연동 = 2016 해킹 브릿지 공격면"
title-en: ""
aliases:
  - FR-C-L1-11
  - "C-L1-11: 舊KIATIS 인터넷+인트라넷 이중 연동 = 2016 해킹 브릿지 공격면"

layer: 1
secondary-layers: [4, 6]
claimType: cross_layer_analysis
claimSubtype: contradiction_pair
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 8
sincerity: 7
analysisDate: 2026-04-12

record-nos: [1117, 1125]
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L1
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/cross-layer-analysis
  - source/book
  - fracture/F-CE
  - org/DIDC
  - has/record-nos
  - cross-layer
---
# C-L1-11: 舊KIATIS 인터넷+인트라넷 이중 연동 = 2016 해킹 브릿지 공격면

**Source:** raw/01. book-beyond-cybersecurity/Korean/07-3-1-31-제1층위-ActiveX.md §3.1.1.3 (lines 25-28)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-4|Layer 4]] (secondary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-C-L1-11"})
SET fr.layer = 1,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "contradiction_pair",
    fr.claimDesc = "舊KIATIS 이중 연동(인터넷+인트라넷) = 해킹 브릿지 공격면. 단순 웹사이트 아닌 국방망 관문.",
    fr.counterHypothesis = "인트라넷 연동은 계획되었으나 실제 운용되지 않았으며 문서는 목표를 기술한 것이다",
    fr.falsificationCondition = "舊KIATIS에 인트라넷 데이터 연동이 없었음을 보여주는 네트워크 트래픽 로그 또는 구성 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "舊KIATIS 이중 연동(인터넷+인트라넷) = 해킹 브릿지 공격면. 단순 웹사이트 아닌 국방망 관문.";
```

## 주장 (Claim)

### 한국어

舊KIATIS는 인터넷 기반이면서 동시에 인트라넷(국방망)과 데이터를 송수신하는 이중 연동 구조였다(기록 제1,117쪽, 제1,125쪽). 단순 인터넷 홈페이지가 아니라 2016 DIDC 해킹 시 인터넷→국방망 공격 경로를 제공한 bridge 시스템이었으며, 이를 은폐할 동기가 커버업의 핵심이다.

### English

舊KIATIS was a dual-linked structure that simultaneously operated on the internet and transmitted/received data with the intranet (defense network) (Records No. 1,117 and 1,125). It was not a simple internet homepage — it was a bridge system that provided the internet-to-defense-network attack path during the 2016 DIDC hacking. The motivation to conceal this dual-link structure is central to the cover-up.

## 핵심 요약 (Key Takeaways)
- 舊KIATIS는 인터넷-국방망 이중 연동 구조로 2016년 해킹 당시 공격 경로(bridge) 역할 [진리성]
- 舊KIATIS had dual internet-intranet linkage making it a bridge attack surface during 2016 hacking [진리성]
- 은폐 동기 강화: 단순 홈페이지가 아닌 국방망 진입 경로 [진리성]
- Cover-up motive intensifies: not a simple website but a gateway to the defense network [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 1,117**
- **Record No. 1,125**

## 반대 가설 (Counter-hypothesis)
인트라넷 연동은 계획되었으나 실제 운용되지 않았으며 문서는 목표를 기술한 것이다

## 반증 조건 (Falsification Condition)
舊KIATIS에 인트라넷 데이터 연동이 없었음을 보여주는 네트워크 트래픽 로그 또는 구성 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 8 / 타당성 8 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/07-3-1-31-제1층위-ActiveX.md` lines 25-28

## 관련 (Related)
- [[old-kiatis-direct-db-access-without-vpn]] (RELATED)
- [[old-kiatis-hosted-inside-other-server-15-years]] (RELATED)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

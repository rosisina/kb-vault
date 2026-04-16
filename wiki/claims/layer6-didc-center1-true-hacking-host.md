---
lang: ko
title-ko: DIDC 1센터(용인)가 2016 해킹의 실제 거점 — 2센터(계룡대) 아닌 1센터
title-en: DIDC 1센터(용인)가 2016 해킹의 실제 거점 — 2센터(계룡대) 아닌 1센터
aliases:
  - FR-L6-DIDC-CENTER1-TRUE-HOST
  - DIDC 1센터(용인)가 2016 해킹의 실제 거점 — 2센터(계룡대) 아닌 1센터

layer: 6
secondary-layers: [1]
claimType: evidence_concealment
claimSubtype: factual_concealment
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 10
analysisDate: 2026-04-12

record-nos: [6609, 6620]
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/evidence-concealment
  - source/book
  - fracture/F-CE
  - org/DIDC
  - org/군검찰단
  - has/record-nos
  - cross-layer
---
# DIDC 1센터(용인)가 2016 해킹의 실제 거점 — 2센터(계룡대) 아닌 1센터

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md §3.6.1 (lines 6-13)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-DIDC-CENTER1-TRUE-HOST"})
SET fr.layer = 6,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "factual_concealment",
    fr.claimDesc = "정리01: DIDC 1센터=진짜 해킹 거점. 정리02: 군검찰단=전범기관. Records 6,620/6,609에서 확인.",
    fr.counterHypothesis = "DIDC 2센터(계룡대)가 실제 해킹 거점이며, 1센터(용인)의 연루는 2차적이다",
    fr.falsificationCondition = "2016년 해킹 합동조사 결과에서 DIDC 1센터(용인)가 해킹 거점이 아님을 명시한 공식 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "정리01: DIDC 1센터=진짜 해킹 거점. 정리02: 군검찰단=전범기관. Records 6,620/6,609에서 확인.";
```

## 주장 (Claim)

### 한국어

제6층위 정리01에 따르면, 2016년 북한 해킹의 실제 최대 숙주(最大 宿主)는 공개적으로 발표된 DIDC 2센터(계룡대)가 아닌 DIDC 1센터(용인)이다. 舊KIATIS가 인터넷 홈페이지 서버 내에서 15년간 VPN 없이 운용되었고, 이 서버가 DIDC 1센터에 위치하였기 때문이다. 군검찰단은 이 사실의 은폐를 위해 사기수사를 자행한 '전범기관'(정리02)이다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- Layer 6 Theorem 01: DIDC Center 1 (Yongin), not Center 2 (Gyeryongdae), was the true maximum host of the 2016 North Korean hacking [진리성]
- Layer 6 Theorem 02: The military prosecution is a 'war criminal institution' (전범기관) that conducted judicial murder to conceal this fact [진리성]
- The public narrative naming Center 2 was itself part of the cover-up [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 6,620**
- **Record No. 6,609**

## 반대 가설 (Counter-hypothesis)
DIDC 2센터(계룡대)가 실제 해킹 거점이며, 1센터(용인)의 연루는 2차적이다

## 반증 조건 (Falsification Condition)
2016년 해킹 합동조사 결과에서 DIDC 1센터(용인)가 해킹 거점이 아님을 명시한 공식 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 10.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 6-13

## 관련 (Related)
- [[prosecution-principal-actor-in-cartel]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

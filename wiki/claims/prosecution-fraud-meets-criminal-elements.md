---
lang: ko
title-ko: 군검찰단의 사기수사가 형사범죄·사이버범죄의 성립요소를 충족
title-en: ""
aliases:
  - FR-L6-FRAUD-MEETS-CRIMINAL-ELEMENTS
  - 군검찰단의 사기수사가 형사범죄·사이버범죄의 성립요소를 충족

layer: 6
secondary-layers: []
claimType: prosecution_misconduct
claimSubtype: prosecution_fraud_classification
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/book
  - fracture/F-CE
  - org/군검찰단
---
# 군검찰단의 사기수사가 형사범죄·사이버범죄의 성립요소를 충족

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md §3.6.2.1 (lines 19-28)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-FRAUD-MEETS-CRIMINAL-ELEMENTS"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_fraud_classification",
    fr.claimDesc = "군검찰단의 사기수사는 형사범죄(사기, 직권남용, 증거인멸, 허위공문서작성)와 사이버범죄(디지털 증거 조작, 온-나라 시스템 문서 변조)의 성립요소를 동시에 충족하는 복합 범죄(hybrid state crime)이다. 27개의 Record No.가 이를 뒷받침한다",
    fr.counterHypothesis = "군검찰단의 수사는 재량 범위 내의 정상적 검찰 활동이며, 수사상 판단 오류가 있더라도 범죄 성립요소를 충족하지 않는다",
    fr.falsificationCondition = "군검찰단의 수사 과정이 검찰 윤리강령과 군형사소송법의 절차적 요건을 충족했음을 보여주는 내부 감사 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "§3.6.2.1에서 형사범죄와 사이버범죄의 성립요소를 체계적으로 대조. 27개 Record No.가 각 요소를 뒷받침. 동일성 오류, 선별적 증거 인용, 시간역전 조작 등이 고의성 입증.";
```

## 주장 (Claim)

### 한국어

군검찰단의 사기수사는 형사범죄와 사이버범죄의 성립요소를 동시에 충족하는 복합범죄(hybrid state crime)로 분류된다.

**형사범죄 성립요소:**
- 사기: 동일성 오류를 고의적으로 사용하여 법적 판단을 기만
- 직권남용: 수사권을 이용하여 무혐의 대상자를 범죄자로 만듦
- 증거인멸: 舊KIATIS 15년 VPN 미사용 사실 등 핵심 증거 의도적 누락
- 허위공문서작성: 압수수색 영장, 수사개시 통보 등에 허위 사실 기재

**사이버범죄 성립요소:**
- 디지털 증거 조작: 온-나라 시스템 문서의 시간역전 조작
- 시스템 무단 접근/변조: 온-나라 유지보수 업체(핸디소프트)의 동조 하에 문서 변조

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The military prosecution's fraud investigation meets the elements of both criminal offenses (fraud, abuse of authority, evidence destruction, false document creation) and cybercrime (digital evidence manipulation) [타당성]
- This constitutes a "hybrid state crime" — crimes committed by state actors using both traditional and cyber means [타당성]
- 27 Record Numbers support the classification across criminal and cyber elements [진리성]

## 지지 증거 (Supporting Evidence)
- **§3.6.2.1 전체 (27개 Record No.)** — 형사범죄·사이버범죄 성립요소 체계적 대조

## 반대 가설 (Counter-hypothesis)
군검찰단의 수사는 재량 범위 내 정상적 활동이며, 판단 오류가 있더라도 고의적 범죄가 아니다.

## 반증 조건 (Falsification Condition)
군검찰단 수사 과정이 검찰 윤리강령과 군형사소송법을 준수했음을 보여주는 감사 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 19-28

## 관련 (Related)
- [[prosecution-identity-fallacy-deception-technique]] — L6 동일성 오류 (CORROBORATES)
- [[prosecution-non-prosecution-self-contradiction]] — L6 불기소 모순 (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

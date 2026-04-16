---
lang: ko
title-ko: 조작 공문 수신자가 행정담당 인원에 국한 — DIDC 배제
title-en: 조작 공문 수신자가 행정담당 인원에 국한 — DIDC 배제
aliases:
  - FR-L4-RECIPIENTS-ADMIN-ONLY
  - 조작 공문 수신자가 행정담당 인원에 국한 — DIDC 배제

layer: 4
secondary-layers: []
claimType: document_fabrication
claimSubtype: document_fabrication_distribution
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: [4758]
evidence-ids: []
event-date: null

persons:
  - 양미숙
organizations:
  - DIDC
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/document-fabrication
  - source/book
  - person/양미숙
  - org/DIDC
  - org/국전원
  - org/MND
  - has/record-nos
---
# 조작 공문 수신자가 행정담당 인원에 국한 — DIDC 배제

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.7.3.6 (lines 664-721)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-RECIPIENTS-ADMIN-ONLY"})
SET fr.layer = 4,
    fr.claimType = "document_fabrication",
    fr.claimSubtype = "document_fabrication_distribution",
    fr.claimDesc = "2020.8.20일자 조작 공문의 국전원 수신자는 행정담당 인원(양미숙 주무관 등)에 국한되어 실무적 역할이 없는 인원이며, 1인 결재로 처리되었다. DIDC는 모든 수신자에서 배제되었다. 이는 공문이 실질적 정책 협의가 아닌 형식적 서류로 생산된 것임을 보여준다",
    fr.counterHypothesis = "수신자 선정은 당시 업무 분장에 따른 정상적 배분이며, DIDC 배제는 해당 안건이 DIDC 소관이 아니었기 때문이다",
    fr.falsificationCondition = "해당 공문의 수신자가 실무적 역할을 가진 인원을 포함하며, DIDC 미포함이 규정상 적절한 것임을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 4,758에서 수신자 확인. 양미숙 주무관(행정담당)만 수신, 1인 결재. 시험평가 환경 구성의 핵심 당사자인 DIDC가 배제된 것은 공문의 형식성을 입증.";
```

## 주장 (Claim)

### 한국어

2020년 8월 20일자 국방부 "시험평가 개선방안" 공문(기록 제4,758쪽)의 국전원 수신자는 양미숙 주무관(행정담당) 등 실질적 실무 역할이 없는 행정담당 인원에 국한되었으며, 1인 결재로 처리되었다.

DIDC는 모든 수신자에서 배제되었다. 시험평가 환경의 보안 구성(VPN, 방화벽, DB접근제어)을 직접 담당하는 DIDC가 시험평가 개선방안 공문에서 제외된 것은, 이 공문이 실질적 정책 협의 목적이 아닌 형식적 문서(소급 정당화용)로 생산되었음을 보여준다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The fabricated document's recipients were limited to administrative personnel with no substantive role — indicating formality, not genuine consultation [진리성]
- Single-person approval was used — bypassing normal multi-level review [진리성]
- DIDC's exclusion from all recipients is particularly damning given its central role in test-evaluation environment construction [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 4,758** — 공문 수신자 현황

## 반대 가설 (Counter-hypothesis)
수신자 선정은 업무 분장에 따른 정상 배분이다.

## 반증 조건 (Falsification Condition)
수신자가 실무적 역할을 가진 인원을 포함했음을 보여주는 기록.

## 평결 (Verdict)
**CORROBORATED.** Moderate. 진리성 8 / 타당성 8 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 664-721

## 관련 (Related)
- [[fabricated-document-2020-produced-in-2022]] — L4 조작 공문 시간역전 (OPPOSES)
- [[didc-excluded-from-test-eval-reform]] — L4 DIDC 배제 (OPPOSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

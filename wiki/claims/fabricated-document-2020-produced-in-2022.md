---
lang: ko
title-ko: 2020.8.20 국방부 공문의 2022년 소급 조작 — '인도 단계' 용어의 시간역전
title-en: 2020.8.20 국방부 공문의 2022년 소급 조작 — '인도 단계' 용어의 시간역전
aliases:
  - FR-L4-FABRICATED-DOC-2020-IN-2022
  - 2020.8.20 국방부 공문의 2022년 소급 조작 — '인도 단계' 용어의 시간역전

layer: 4
secondary-layers: []
claimType: document_fabrication
claimSubtype: document_fabrication_temporal
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-11

record-nos: [4757, 4821]
evidence-ids: []
event-date: null

persons: []
organizations:
  - 국전원
  - 군검찰단
  - MND
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/document-fabrication
  - source/book
  - fracture/F-MS
  - org/국전원
  - org/군검찰단
  - org/MND
  - has/record-nos
---
# 2020.8.20 국방부 공문의 2022년 소급 조작 — '인도 단계' 용어의 시간역전

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.7.3.6 (lines 664-721)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-FABRICATED-DOC-2020-IN-2022"})
SET fr.layer = 4,
    fr.claimType = "document_fabrication",
    fr.claimSubtype = "document_fabrication_temporal",
    fr.claimDesc = "2020.8.20일자 국방부 '시험평가 개선방안' 공문은 실제로 2022년 군검찰단 수사 시점에 소급 조작된 것이다. 이 공문에 '인도 단계'라는 용어가 사용되어 있으나, 이 용어는 제2842호(2023.9.20.) 훈령에서야 최초 도입된 개념으로 2020년에는 존재하지 않았다 — 물리법칙 위반(시간역전)",
    fr.counterHypothesis = "'인도 단계' 용어가 2020년 내부 논의에서 이미 사용되고 있었고, 훈령 공식 반영은 2023년이지만 개념 자체는 선행했다",
    fr.falsificationCondition = "2020년 이전 문서에서 '인도 단계' 용어가 사용된 사례의 제시, 또는 온-나라 시스템 메타데이터에서 2020년 실제 생산을 확인",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "물리법칙 위반: 2023.9.20 훈령(제2842호)의 용어가 2020년 문서에 등장 — 시간을 거슬러 올라갈 수 없으므로 소급 조작 확정. 군검찰단 수사 시점(2022.7~10)과 일치.";
```

## 주장 (Claim)

### 한국어

2020년 8월 20일자 국방부 "시험평가 개선방안" 공문(기록 제4,757쪽)은 실제로 2022년 군검찰단 수사 시점에 소급 조작된 문서이다. 이 공문에 '인도 단계'라는 용어가 사용되어 있으나, '인도 단계'는 제2842호 훈령(2023.9.20.)에서야 최초 도입된 개념이다. 2020년 시점에는 이 용어가 어떤 훈령에도 존재하지 않았으므로, 이 공문은 물리법칙(시간의 비가역성)을 위반하는 시간역전 현상을 보인다.

이는 단순한 행정 오류가 아니다. 국전원 행정정보화과가 온-나라 시스템 유지보수 업체(핸디소프트)의 동조 하에 디지털 문서를 소급 조작할 수 있는 유일한 위치에 있다(기록 제4,821쪽~제4,833쪽).

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The term '인도 단계' appears in a document dated 2020.8.20 but was only introduced in 훈령 제2842호 (2023.9.20) — a physics-law violation proving retroactive fabrication [진리성]
- The fabrication timing aligns with the military prosecution investigation period (2022.7~10) [진리성]
- Only 국전원's administrative IT team had the technical capability to retroactively modify 온-나라 system documents [타당성]

## 지지 증거 (Supporting Evidence)
- **Record No. 4,757** — 시험평가 개선방안 공문 (2020.8.20일자)
- **Record No. 4,821~4,833** — 관련 증거자료

## 반대 가설 (Counter-hypothesis)
'인도 단계' 용어가 2020년 내부 논의에서 이미 사용되었고, 훈령 반영은 사후적이었다.

## 반증 조건 (Falsification Condition)
2020년 이전 문서에서 '인도 단계' 용어 사용 사례 제시.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8. 물리법칙 위반은 반박 불가.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 664-721

## 관련 (Related)
- [[mnd-test-eval-simplification-timed-to-evaluation-day]] — L4 시간역전 패턴 (OPPOSES)
- [[mnd-fabricated-indo-stage-terminology-blame-shift]] — L4 인도단계 용어 조작 (OPPOSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

---
lang: ko
title-ko: 감리업체 DT/OT 테스트 결과보고서의 팀장 배제 — 대부분 '부적합' 결과 은폐
title-en: 감리업체 DT/OT 테스트 결과보고서의 팀장 배제 — 대부분 '부적합' 결과 은폐
aliases:
  - FR-L4-DTOT-REPORT-HIDDEN
  - 감리업체 DT/OT 테스트 결과보고서의 팀장 배제 — 대부분 '부적합' 결과 은폐

layer: 4
secondary-layers: []
claimType: evidence_concealment
claimSubtype: report_hidden_single_approval
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-11

record-nos: [2762, 2767, 2773, 5835]
evidence-ids: []
event-date: null

persons:
  - 이준호
  - 이지영
  - 박서준
  - 한지훈
  - 김민수
organizations:
  - 군검찰단
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/evidence-concealment
  - source/book
  - fracture/F-MS
  - person/이준호
  - person/이지영
  - person/박서준
  - person/한지훈
  - person/김민수
  - org/군검찰단
  - org/국유단
  - has/record-nos
---
# 감리업체 DT/OT 테스트 결과보고서의 팀장 배제 — 대부분 '부적합' 결과 은폐

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.2.3 (lines 163-190)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DTOT-REPORT-HIDDEN"})
SET fr.layer = 4,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "report_hidden_single_approval",
    fr.claimDesc = "국유단이 2019.9.24 발송한 감리용역 DT/OT 테스트 지원결과보고서(79p)를 이준호가 2019.10.7 접수 후 '1인 결재'하여 개발관리팀장에게 미보고하였다. 이 보고서의 감리업체 점검결과는 대부분 '부적합'으로 되어 있으며, 군검찰단 수사의 핵심 자료이다",
    fr.counterHypothesis = "DT/OT 결과보고서의 '부적합' 판정은 개발 요구기능이 아닌 데이터 부재에 관한 것이며, 최종 감리결과에서는 '적합'으로 판정되었으므로 은폐 의도가 없었다",
    fr.falsificationCondition = "이준호의 1인 결재가 당시 팀장 부재 등 정당한 사유에 의한 것임을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "79페이지 감리결과보고서(Record 2,773~2,852)의 요구사항별 점검결과가 대부분 '부적합'. 감리업무일지(Record 2,767~2,771)에 최소 8명 참석 기록. 이 보고서는 이후 군검찰단 수사의 핵심 공문이 됨. 팀장 배제 패턴의 또 다른 사례.";
```

## 주장 (Claim)

### 한국어

국유단이 2019년 9월 24일 발송한 "6.25전사자 종합정보체계 성능개선 감리용역 DT/OT 테스트 지원 결과(통보, 국유단장 결재)"를 이준호 (공모자-1)가 2019년 10월 7일 접수하여 "1인 결재" 후 개발관리팀장 한지훈에게 미보고하였다(기록 제2,762쪽).

이 보고서(79페이지, 기록 제2,773쪽~기록 제2,852쪽)의 감리업체(한국전산감리원) 점검결과는 대부분 '부적합'으로 기재되어 있다. 감리업무일지(기록 제2,767쪽~2,771쪽)에는 최소 8명 이상 참석이 기록되어 있다.

이 보고서는 군검찰단의 인지수사와 고소수사 사건 여부를 판단하는 핵심 공문이다. 또한 박서준·이지영, 박서준·이지영·김민수 결재로 8개월에 걸쳐 군검찰단과 수차례 공문이 송수신되었으며, 대부분 한지훈을 배제하고 결재하여 군검찰단으로 전달되었다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The 79-page audit DT/OT test result report was hidden from the team leader via single-person approval by 이준호 — continuing the systematic exclusion pattern [진리성]
- The audit company's inspection results were mostly "non-compliant" (부적합) — this document became central to the prosecution's case [진리성]
- 박서준·이지영·김민수 signed off on 8 months of correspondence with the prosecution — all excluding 한지훈 from the approval chain [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 2,762** — 감리용역 DT/OT 테스트 지원 결과 공문 (이준호 1인결재)
- **Record No. 2,767~2,771** — 감리업무일지 (8명+ 참석 기록)
- **Record No. 2,773~2,852** — DT/OT 테스트 지원 결과보고서 79페이지
- **Record No. 5,835~5,852, 3,938, 6,700** — 군검찰단 제출 자료 목록

## 반대 가설 (Counter-hypothesis)
이준호의 1인결재는 업무 효율성을 위한 일상적 결재 방식이며, 보고서 내용이 최종 감리결과에서 해소되었으므로 은폐 의도가 없었다.

## 반증 조건 (Falsification Condition)
이준호의 1인결재가 팀장 부재 등 정당한 사유임을 보여주는 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 163-180

## 관련 (Related)
- [[gukjeonwon-pre-evaluation-team-leader-exclusion]] — L4 팀장 배제 패턴 (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

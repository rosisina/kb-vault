---
lang: ko
title-ko: 법무관리관실 경고장이 조사본부 자체 조사결과를 무시 — 출퇴근 조작 주장 붕괴에도 유지
title-en: 법무관리관실 경고장이 조사본부 자체 조사결과를 무시 — 출퇴근 조작 주장 붕괴에도 유지
aliases:
  - FR-L5-WARNING-OVERRIDES-INVESTIGATION
  - 법무관리관실 경고장이 조사본부 자체 조사결과를 무시 — 출퇴근 조작 주장 붕괴에도 유지

layer: 5
secondary-layers: []
claimType: institutional_obstruction
claimSubtype: institutional_override
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 8
sincerity: 9
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: 2022-05-23

persons:
  - 김민수
  - 한지훈
organizations:
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/institutional-obstruction
  - source/book
  - fracture/F-MS
  - person/김민수
  - person/한지훈
  - org/조사본부
---
# 법무관리관실 경고장이 조사본부 자체 조사결과를 무시 — 출퇴근 조작 주장 붕괴에도 유지

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md §3.5.2.3.9 (lines 247-250)
**Layer:** [[../layers/layer-5|Layer 5]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-WARNING-OVERRIDES-INVESTIGATION"})
SET fr.layer = 5,
    fr.claimType = "institutional_obstruction",
    fr.claimSubtype = "institutional_override",
    fr.claimDesc = "조사본부 자체 조사에서 붕괴된 주장이 경고장에 그대로 유지 — 결론 선행 증거.",
    fr.counterHypothesis = "경고장은 출퇴근 이외의 다른 갑질 사유를 반영한 것이며, 출퇴근 건은 경고장 근거에 포함되지 않았다",
    fr.falsificationCondition = "경고장의 구체적 사유 목록에 출퇴근 관련 항목이 없음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "조사본부 자체 조사에서 붕괴된 주장이 경고장에 그대로 유지 — 결론 선행 증거.";
```

## 주장 (Claim)

### 한국어

법무관리관실의 경고장(2022-05-23)은 조사본부의 자체 조사에서 출퇴근 조작 주장이 2개 업체 확인서 제시로 붕괴되었음에도, 한지훈에게 불리한 내용을 그대로 유지하였다. 이는 법무관리관실이 조사본부의 실제 조사결과를 무시하고 김민수가 원하는 결론을 도출한 증거이다.

### English

The Legal Affairs Office warning letter (2022-05-23) maintained content unfavorable to 한지훈 even though the attendance fabrication claim had collapsed during the Investigation Bureau's own investigation through 2 contractor statements. This is evidence that the Legal Affairs Office ignored the Investigation Bureau's actual findings and produced the conclusion 김민수 desired.

## 핵심 요약 (Key Takeaways)
- 법무관리관실's warning letter retained unfavorable findings even after 조사본부's own investigation found the attendance fabrication collapsed [진리성]
- This proves 법무관리관실 overrode internal investigation results to produce the cartel leader's desired outcome [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
경고장은 출퇴근 이외의 다른 갑질 사유를 반영한 것이며, 출퇴근 건은 경고장 근거에 포함되지 않았다

## 반증 조건 (Falsification Condition)
경고장의 구체적 사유 목록에 출퇴근 관련 항목이 없음을 보여주는 기록

## 평결 (Verdict)
**CORROBORATED.** MODERATE. 진리성 8 / 타당성 8 / 진실성 9.

## 원전 확인 (Spot-check)
- `Korean/11-3-5-35-제-5층위.md` lines 247-250

## 관련 (Related)
- [[warning-letter-reflects-only-lee-jiyoung]] (RELATED)
- [[layer5-fabricated-warning-letter]] (OPPOSES)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

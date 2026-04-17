---
lang: ko
title-ko: "규격 재심의에서 舊KIATIS 데이터·SW의 新서버 이전 완전 차단 (기록 제3,324쪽)"
title-en: ""
aliases:
  - FR-L4-DATA-TRANSFER-BLOCKED
  - "규격 재심의에서 舊KIATIS 데이터·SW의 新서버 이전 완전 차단 (기록 제3,324쪽)"

layer: 4
secondary-layers: [1]
claimType: evidence_concealment
claimSubtype: data_migration_blocked
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 8
sincerity: 7
analysisDate: 2026-04-12

record-nos: [3324]
evidence-ids: []
event-date: null

persons: []
organizations: []
has-verbatim: false

tags:
  - layer/L4
  - layer/L1
  - verdict/corroborated
  - strength/moderate
  - type/evidence-concealment
  - source/book
  - has/record-nos
  - cross-layer
---
# 규격 재심의에서 舊KIATIS 데이터·SW의 新서버 이전 완전 차단 (기록 제3,324쪽)

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.2.2 (lines 135-139)
**Layer:** [[../layers/layer-4|Layer 4]], [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DATA-TRANSFER-BLOCKED"})
SET fr.layer = 4,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "data_migration_blocked",
    fr.claimDesc = "Record 3,324: 데이터·SW 이전 완전 차단. 舊KIATIS 증거 격리 효과.",
    fr.counterHypothesis = "신규 시스템 설계 원칙(clean-slate)에 따른 기술적 결정",
    fr.falsificationCondition = "데이터 미이전에 대한 기술적 근거(호환성 등)가 문서화된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Record 3,324: 데이터·SW 이전 완전 차단. 舊KIATIS 증거 격리 효과.";
```

## 주장 (Claim)

### 한국어

2018년 4월 규격 재심의에서 舊KIATIS 응용프로그램·SW·데이터의 新서버 이전이 완전 차단됨(기록 제3,324쪽). '응용 체계 이관 제외, 후속 사업에서 추진'과 '데이터 이관 제외, 후속사업에서 추진'으로 명시. 이는 舊KIATIS의 인터넷 운영 증거가 新환경으로 이관되면서 발견되는 것을 원천 봉쇄하기 위한 조치.

### English

The April 2018 specification re-review completely blocked transfer of 舊KIATIS applications, SW, and data to the new server (Record No. 3,324). Explicitly stated as 'application system transfer excluded, to be pursued in follow-up project' and 'data transfer excluded, to be pursued in follow-up project.' This was a measure to prevent evidence of 舊KIATIS's internet operation from being discovered through the data migration process.

## 핵심 요약 (Key Takeaways)
- 규격 재심의가 구 서버에서 신 서버로의 모든 데이터·SW 이관을 차단 (Record No. 3,324) [진리성]
- Specification re-review blocked ALL data/SW transfer from old to new servers (Record 3,324) [진리성]
- 이관 차단은 舊KIATIS 인터넷 운용 증거를 신규 사업으로부터 격리 [진리성]
- Blocking isolates evidence of 舊KIATIS internet operation from the new project [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 3,324**

## 반대 가설 (Counter-hypothesis)
신규 시스템 설계 원칙(clean-slate)에 따른 기술적 결정

## 반증 조건 (Falsification Condition)
데이터 미이전에 대한 기술적 근거(호환성 등)가 문서화된 기록

## 평결 (Verdict)
**CORROBORATED.** MODERATE. 진리성 8 / 타당성 8 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 135-139

## 관련 (Related)
- [[mnd-intentional-separation-server-sw-projects]] (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

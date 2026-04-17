---
lang: ko
title-ko: 김민수의 '어떻게 아니' 허위 진술 — 경력 기록과 직접 모순
title-en: 김민수의 '어떻게 아니' 허위 진술 — 경력 기록과 직접 모순
aliases:
  - FR-L4-KIM-MINSU-FALSE-IGNORANCE
  - 김민수의 '어떻게 아니' 허위 진술 — 경력 기록과 직접 모순

layer: 4
secondary-layers: [5]
claimType: witness_manipulation
claimSubtype: false_testimony
fracture-type: F-SC
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 8
analysisDate: 2026-04-12

record-nos: [6748, 6755, 6760, 11055, 11056]
evidence-ids: []
event-date: null

persons:
  - 김민수
  - 박성호
organizations:
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L4
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/witness-manipulation
  - source/book
  - fracture/F-SC
  - person/김민수
  - person/박성호
  - org/국전원
  - org/MND
  - has/record-nos
  - cross-layer
---
# 김민수의 '어떻게 아니' 허위 진술 — 경력 기록과 직접 모순

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.7.4 (lines 723-777)
**Layer:** [[../layers/layer-4|Layer 4]], [[../layers/layer-5|Layer 5]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-KIM-MINSU-FALSE-IGNORANCE"})
SET fr.layer = 4,
    fr.claimType = "witness_manipulation",
    fr.claimSubtype = "false_testimony",
    fr.claimDesc = "Records 11,055-56(무지) vs Records 6,748/6,760/6,755(경력). 직접 모순.",
    fr.counterHypothesis = "정보화기획실 재직이 KIATIS와 무관한 업무였을 수 있다",
    fr.falsificationCondition = "김민수의 재직 기간 업무가 KIATIS와 무관했음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Records 11,055-56(무지) vs Records 6,748/6,760/6,755(경력). 직접 모순.";
```

## 주장 (Claim)

### 한국어

김민수는 '내가 그걸 어떻게 아니. 오기도 전에 일을'이라고 진술(기록 제11,055~11,056쪽). 그러나 경력기록(기록 제6,748/6,760/6,755쪽)은 2016년 해킹 당시 정보화기획실 재직, 2015~2017년 국전원 개발관리팀장으로 박성호와 근무. 무지 주장은 경력과 직접 모순되는 허위 진술.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- '내가 그걸 어떻게 아니'는 2016년 해킹 당시 국방부 재직을 보여주는 경력기록과 직접 모순 [진리성]
- 'How would I know' directly contradicted by career records placing him at MND during 2016 hacking [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 11,055**
- **Record No. 11,056**
- **Record No. 6,748**
- **Record No. 6,760**
- **Record No. 6,755**

## 반대 가설 (Counter-hypothesis)
정보화기획실 재직이 KIATIS와 무관한 업무였을 수 있다

## 반증 조건 (Falsification Condition)
김민수의 재직 기간 업무가 KIATIS와 무관했음을 보여주는 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 723-777

## 관련 (Related)
- [[kim-min-su-central-cross-layer-cartel-figure]] (OPPOSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

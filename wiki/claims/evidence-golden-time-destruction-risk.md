---
lang: ko
title-ko: 증거 보전의 골든타임 — 디지털 증거 인멸과 관련자 기억 소실 위험
title-en: 증거 보전의 골든타임 — 디지털 증거 인멸과 관련자 기억 소실 위험
aliases:
  - FR-L7-EVIDENCE-GOLDEN-TIME
  - 증거 보전의 골든타임 — 디지털 증거 인멸과 관련자 기억 소실 위험

layer: 7
secondary-layers: [1, 4]
claimType: methodology
claimSubtype: operational_urgency
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 7
sincerity: 9
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations: []
has-verbatim: false

tags:
  - layer/L7
  - layer/L1
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/methodology
  - source/book
  - cross-layer
---
# 증거 보전의 골든타임 — 디지털 증거 인멸과 관련자 기억 소실 위험

**Source:** raw/01. book-beyond-cybersecurity/Korean/15-5-5-결론-및.md §5.3.1
**Layer:** [[../layers/layer-7|Layer 7]], [[../layers/layer-1|Layer 1]] (secondary), [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L7-EVIDENCE-GOLDEN-TIME"})
SET fr.layer = 7,
    fr.claimType = "methodology",
    fr.claimSubtype = "operational_urgency",
    fr.claimDesc = "12,495쪽 확보했으나 핵심 디지털 증거 접근 불가. 골든타임 경과 시 진실 규명 불가능.",
    fr.counterHypothesis = "기존 12,495쪽으로 충분하며 추가 증거 보전은 불필요하다",
    fr.falsificationCondition = "기존 증거만으로 기소 충분하다는 법적 평가",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "§5.3.1: '디지털 증거의 특성상 완전한 삭제가 가능하므로 지금 당장 보전 조치를 취하지 않으면 결정적 증거들을 영원히 잃을 수 있다.' L1의 Active-X 제거사업 악용 사례가 실제 증거인멸 선례를 입증.";
```

## 주장 (Claim)

### 한국어

12,495쪽 확보했지만 구두 지시, 비공식 회의록, 삭제된 전자문서, 개인 간 대화 등은 접근 불가능했다. 디지털 증거는 완전 삭제가 가능하므로 즉각적 보전 조치 없이는 결정적 증거를 영원히 잃을 수 있다. 2018년부터 관련자들이 전보·전역으로 흩어진 상황에서 골든타임을 놓치면 진실 규명 자체가 불가능해진다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)

- 12,495 pages secured but oral instructions, deleted documents, private communications remain inaccessible [진리성]
- Digital evidence is permanently deletable — immediate preservation critical [진리성]
- Related personnel scattered since 2018 — witness memory degradation ongoing [진리성]

## 지지 증거 (Supporting Evidence)

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)

기존 12,495쪽으로 충분하며 추가 증거 보전은 불필요하다

## 반증 조건 (Falsification Condition)

기존 증거만으로 기소 충분하다는 법적 평가

## 평결 (Verdict)

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 7 / 진실성 9. §5.3.1 명시적 진술 + L1 증거인멸 선례(Active-X 제거사업)로 뒷받침.

## 원전 확인 (Spot-check)

- `Korean/15-5-5-결론-및.md` §5.3.1

## 관련 (Related)

- [[on-nara-2024-upgrade-evidence-destruction-risk]] (RELATED)
- [[../layers/layer-7|Layer 7]] (PART_OF_LAYER)

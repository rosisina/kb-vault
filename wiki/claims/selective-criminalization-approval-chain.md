---
lang: ko
title-ko: "C-L6-16: 방화벽 결재 3인 중 중간 검토자만 피의자 — 최종 결재자·기안자 배제"
title-en: "C-L6-16: 방화벽 결재 3인 중 중간 검토자만 피의자 — 최종 결재자·기안자 배제"
aliases:
  - FR-C-L6-16
  - "C-L6-16: 방화벽 결재 3인 중 중간 검토자만 피의자 — 최종 결재자·기안자 배제"

layer: 6
secondary-layers: [5]
claimType: cross_layer_analysis
claimSubtype: contradiction_pair
fracture-type: F-SE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-12

record-nos: [3948, 4842]
evidence-ids: []
event-date: null

persons:
  - 최영수
  - 이준호
  - 한지훈
organizations: []
has-verbatim: false

tags:
  - layer/L6
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/cross-layer-analysis
  - source/book
  - fracture/F-SE
  - person/최영수
  - person/이준호
  - person/한지훈
  - has/record-nos
  - cross-layer
---
# C-L6-16: 방화벽 결재 3인 중 중간 검토자만 피의자 — 최종 결재자·기안자 배제

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.4.11.4 (lines 680-683)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-5|Layer 5]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-C-L6-16"})
SET fr.layer = 6,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "contradiction_pair",
    fr.claimDesc = "결재선 3인 중 1인만 피의자. 최종 결재자=참고인, 기안자=배제. 선별적 범죄자 만들기.",
    fr.counterHypothesis = "검토자가 기술적 검증 의무의 일차적 책임자이므로 정당한 피의자 지정",
    fr.falsificationCondition = "팀장(검토자)이 과장(결재자)보다 방화벽 결정에 대해 더 큰 형사 책임을 진다는 법리 분석",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "결재선 3인 중 1인만 피의자. 최종 결재자=참고인, 기안자=배제. 선별적 범죄자 만들기.";
```

## Claim

방화벽 정책적용 공문의 결재선(기안자 이준호, 검토자 한지훈, 결재자 최영수) 중 중간 검토자만 피의자 지정. 최종 결재자(30년 IT 전문가, 서기관)는 참고인, 기안자는 배제. 최영수는 5시간 참고인 조사에서 방화벽 포트 개방의 기술적 정당성을 진술하였으나 검찰은 이를 반박하지 못함. 결재선 내 선택적 범죄자 만들기 = 표적수사.

## Key Takeaways

- Of 3-person approval chain (drafter/reviewer/approver), only the reviewer was charged [진리성]
- 최영수 (final approver, 30-year IT expert) testified 5 hours the action was technically justified — prosecution could not rebut [진리성]
- Selective targeting within single approval chain = textbook targeted prosecution [타당성]

## Supporting evidence

- **Record No. 3,948**
- **Record No. 4,842**

## Counter-hypothesis

검토자가 기술적 검증 의무의 일차적 책임자이므로 정당한 피의자 지정

## Falsification condition

팀장(검토자)이 과장(결재자)보다 방화벽 결정에 대해 더 큰 형사 책임을 진다는 법리 분석

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 9.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 680-683

## Related

- [[prosecution-firewall-port-opening-vs-it-standard-practice]] (CAUSES)
- [[prosecution-selective-criminalization-firewall-approval-chain]] (CAUSES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

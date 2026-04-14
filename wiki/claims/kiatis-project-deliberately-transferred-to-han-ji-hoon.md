---
lang: ko
title-ko: KIATIS 사업의 의도적 업무 떠넘기기 — 행정운영팀→계획팀 이관
title-en: KIATIS 사업의 의도적 업무 떠넘기기 — 행정운영팀→계획팀 이관
aliases:
  - FR-L3-KIATIS-TRANSFER
  - KIATIS 사업의 의도적 업무 떠넘기기 — 행정운영팀→계획팀 이관

layer: 3
secondary-layers: []
claimType: conspiracy_structure
claimSubtype: organizational_manipulation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-11

record-nos: [1712, 11107]
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 이태호
  - 오현수
organizations:
  - 국전원
has-verbatim: false

tags:
  - layer/L3
  - verdict/corroborated
  - strength/strong
  - type/conspiracy-structure
  - source/book
  - fracture/F-MS
  - person/한지훈
  - person/이태호
  - person/오현수
  - org/국전원
  - has/record-nos
---
# KIATIS 사업의 의도적 업무 떠넘기기 — 행정운영팀→계획팀 이관

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/09-3-3-33-제3-층위.md §3.3.1.2 (lines 24-37)
**Layer:** [[../layers/layer-3|Layer 3]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-KIATIS-TRANSFER"})
SET fr.layer = 3,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "organizational_manipulation",
    fr.claimDesc = "KIATIS 사업은 원래 행정정보운영팀의 소관 업무였으나, 국전원 공무원들이 한지훈 중령의 행정정보계획팀으로 의도적으로 이관하였다. 오현수 (실무자-5)와 이태호 중령 등 복수 인물이 '떠넘겼다'고 진술하였으며, 이는 향후 KIATIS 관련 문제 발생 시 책임을 군인 팀장에게 전가하기 위한 사전 설계이다",
    fr.counterHypothesis = "KIATIS 이관은 조직 개편에 따른 정상적 업무 재분배이며, 계획팀의 분장사무에 정보체계 개발관리가 포함되어 있으므로 부적절한 이관이 아니다",
    fr.falsificationCondition = "KIATIS 이관이 공식적인 분장사무 변경 또는 국전원장 지시에 의한 정당한 업무 조정임을 보여주는 공문의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "오현수 실무자의 수차례 '떠넘겼다' 진술 + 이태호 중령의 동일 진술 + 피의자신문조서에서의 확인. 4개 팀이 각각 사업+운영을 동시 수행하던 구조에서 한지훈 팀만 7-8개 사업을 집중 배정.";
```

## Claim

KIATIS 사업은 원래 행정정보운영팀의 소관 업무였으나, 국전원 공무원들이 한지훈 중령의 행정정보계획팀으로 의도적으로 이관하였다. 피의자신문조서에서 한지훈은 "키아티스는 행정정보운영팀입니다"라고 명확히 진술하였고, 오현수 (실무자-5)는 "이 사업은 행정정보운영팀 사업인데 저희한테 떠넘겼다"고 수차례 발언하였다. 이태호 중령도 동일한 진술을 하였으며, 이태호는 "공무원들이 군인을 '졸'로 본다"는 취지의 발언도 하였다(기록 제11,107쪽~제11,108쪽).

한지훈의 팀은 14개 사업 중 7~8개를 수행하면서, 부과장 및 총괄담당 업무까지 병행하는 과중한 부담을 안았다(기록 제1,712쪽).

## Key Takeaways

- KIATIS was originally under the 행정정보운영팀 but was deliberately transferred to 한지훈's team — multiple witnesses (오현수, 이태호) independently testified to this "dumping" [진리성]
- 이태호 중령 stated that civilians viewed military officers as "pawns" (졸) — revealing the institutional culture that enabled the targeting (Record No. 11,107~11,108) [진실성]
- 한지훈's team was overloaded with 7-8 of 14 projects plus deputy section chief duties — creating conditions for a scapegoat narrative [진리성]

## Supporting evidence

- **Record No. 11,107~11,108** — 이태호 중령 대화 (공무원의 군인 비하 + KIATIS 떠넘기기)
- **Record No. 1,712** — 14개 사업 중 7개를 한지훈 팀이 수행한 기록

## Counter-hypothesis

KIATIS 이관은 조직 개편에 따른 정상적 업무 재분배이며, 계획팀의 분장사무에 해당하는 정당한 배정이다.

## Falsification condition

공식적인 분장사무 변경 명령 또는 국전원장 지시에 의한 업무 조정 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 9. 복수 독립 증인의 일관된 진술.

## Spot-check

- `vault-converted-korean/09-3-3-33-제3-층위.md` lines 24-37

## Related

- [[gukjeonwon-pre-evaluation-team-leader-exclusion]] — L4 팀장 배제 (RELATED)
- [[park-sung-ho-officer-disparagement-publicized]] — L3 장교 비하 (RELATED)
- [[../layers/layer-3|Layer 3]] (PART_OF_LAYER)

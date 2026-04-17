---
lang: ko
title-ko: DIDC는 국방사이버안보 훈령 제54조에 의한 '통합보안관제(2차)' 책임 부대 — 한지훈 아님
title-en: DIDC는 국방사이버안보 훈령 제54조에 의한 '통합보안관제(2차)' 책임 부대 — 한지훈 아님
aliases:
  - FR-CSR-002
  - DIDC는 국방사이버안보 훈령 제54조에 의한 '통합보안관제(2차)' 책임 부대 —

layer: 1
secondary-layers: [4, 6]
claimType: institutional_obstruction
claimSubtype: institutional_accountability
fracture-type: F-CE
source-type: regulation

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 7
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L1
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/institutional-obstruction
  - source/regulation
  - fracture/F-CE
  - person/한지훈
  - org/DIDC
  - cross-layer
---
# DIDC는 국방사이버안보 훈령 제54조에 의한 '통합보안관제(2차)' 책임 부대 — 한지훈 아님

**Source:** raw/09. 사이버안보 훈령(당시)/cyber security reguration.md 제54조 제1항 제2호(나) (lines 494-496)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-4|Layer 4]] (secondary), [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CSR-002"})
SET fr.layer = 1,
    fr.claimType = "institutional_obstruction",
    fr.claimSubtype = "institutional_accountability",
    fr.claimDesc = "DIDC=통합보안관제(2차) 명시 지정. 보안 책임은 기관(DIDC)에 있지 개인(한지훈)에 없다.",
    fr.counterHypothesis = "KIATIS가 DIDC에 호스팅되지 않았거나 DIDC 관제 범위에서 제외되었다",
    fr.falsificationCondition = "DIDC 공식 보안관제 범위에서 KIATIS가 제외된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "DIDC=통합보안관제(2차) 명시 지정. 보안 책임은 기관(DIDC)에 있지 개인(한지훈)에 없다.";
```

## 주장 (Claim)

### 한국어

제54조 제1항 제2호(나)는 국방통합데이터센터를 '통합보안관제(2차)' 책임 부대로 명시 지정. 업무대상은 '데이터센터 소관'. DIDC가 KIATIS를 포함한 소관 체계에 대한 보안관제 의무를 가졌으며, 한지훈 개인이 아닌 DIDC라는 기관이 보안 책임의 제도적 주체이다.

### English

Article 54 Paragraph 1 Item 2(나) explicitly designates the Defense Integrated Data Center (DIDC) as the responsible unit for 'integrated security monitoring (secondary tier),' covering 'data center jurisdiction.' DIDC bore the institutional security monitoring duty for all systems under its jurisdiction, including KIATIS — making DIDC the institutional subject of security accountability, not 한지훈 as an individual.

## 핵심 요약 (Key Takeaways)
- Art. 54 ¶1(2)(나) explicitly names DIDC as 2nd-tier security monitoring center for its hosted systems [타당성]
- DIDC — not 한지훈 — bore the institutional duty for cyber threat detection and response [진리성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
KIATIS가 DIDC에 호스팅되지 않았거나 DIDC 관제 범위에서 제외되었다

## 반증 조건 (Falsification Condition)
DIDC 공식 보안관제 범위에서 KIATIS가 제외된 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/cyber security reguration.md` lines 494-496

## 관련 (Related)
- [[didc-sops-cover-2016-hacking-period]] (RELATED)
- [[victim-blaming-structural-to-individual]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

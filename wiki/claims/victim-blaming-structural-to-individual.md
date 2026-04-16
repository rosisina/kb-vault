---
lang: ko
title-ko: 15년간 방치된 구조적 취약점의 책임을 개인에게 전가 — 피해자 비난 전술
title-en: 15년간 방치된 구조적 취약점의 책임을 개인에게 전가 — 피해자 비난 전술
aliases:
  - FR-L6-VICTIM-BLAMING
  - 15년간 방치된 구조적 취약점의 책임을 개인에게 전가 — 피해자 비난 전술

layer: 6
secondary-layers: [1, 4]
claimType: methodology
claimSubtype: analytical_framework
fracture-type: F-SE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-12

record-nos: [3236, 4855]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - layer/L1
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - fracture/F-SE
  - person/한지훈
  - org/군검찰단
  - has/record-nos
  - cross-layer
---
# 15년간 방치된 구조적 취약점의 책임을 개인에게 전가 — 피해자 비난 전술

**Source:** raw/01. book-beyond-cybersecurity/Korean/05-2-2-이론적-배경.md §2.1.1 (lines 13)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-1|Layer 1]] (secondary), [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-VICTIM-BLAMING"})
SET fr.layer = 6,
    fr.claimType = "methodology",
    fr.claimSubtype = "analytical_framework",
    fr.claimDesc = "15년 구조적 취약점→개인 책임전가. Records 4,855/3,236. 피해자 비난 전술.",
    fr.counterHypothesis = "사업관리팀장으로서 시험평가 보안 설정 책임이 있으며 시스템 역사와 무관하다",
    fr.falsificationCondition = "한지훈이 VPN/DB접근제어 조달 권한과 예산을 보유하고 의도적으로 거부한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "15년 구조적 취약점→개인 책임전가. Records 4,855/3,236. 피해자 비난 전술.";
```

## 주장 (Claim)

### 한국어

군검찰단은 VPN/DB접근제어 미사용을 한지훈의 혐의로 제기했으나(기록 제4,855쪽), 해당 시스템은 2019.8.27~2021.4.23 부재(기록 제3,236~3,270쪽). 舊KIATIS는 애초부터 15년간 보안장비 없이 운영. 피해자가 의도적으로 해제한 것처럼 서사 조작 — 피해자 비난(Victim Blaming).

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- Prosecution charged non-use of systems that did not exist (Records 4,855/3,236-3,270) [진리성]
- Transferring 15-year systemic failure to individual = Victim Blaming [진실성]

## 지지 증거 (Supporting Evidence)
- **Record No. 4,855**
- **Record No. 3,236**

## 반대 가설 (Counter-hypothesis)
사업관리팀장으로서 시험평가 보안 설정 책임이 있으며 시스템 역사와 무관하다

## 반증 조건 (Falsification Condition)
한지훈이 VPN/DB접근제어 조달 권한과 예산을 보유하고 의도적으로 거부한 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 9.

## 원전 확인 (Spot-check)
- `Korean/05-2-2-이론적-배경.md` lines 13

## 관련 (Related)
- [[prosecution-six-charges-collapse-vpn-nonexistence]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

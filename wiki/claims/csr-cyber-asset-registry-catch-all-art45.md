---
lang: ko
title-ko: "제45조 사이버자산 현황 관리 — 미등록이면 네트워크 차단, 등록이면 취약점 탐지 필수"
title-en: "제45조 사이버자산 현황 관리 — 미등록이면 네트워크 차단, 등록이면 취약점 탐지 필수"
aliases:
  - FR-CSR-011
  - "제45조 사이버자산 현황 관리 — 미등록이면 네트워크 차단, 등록이면 취약점 탐지 필수"

layer: 1
secondary-layers: [4]
claimType: procedural_violation
claimSubtype: catch_all_duty
fracture-type: F-AA
source-type: regulation

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 5
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations: []
has-verbatim: false

tags:
  - layer/L1
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/regulation
  - fracture/F-AA
  - cross-layer
---
# 제45조 사이버자산 현황 관리 — 미등록이면 네트워크 차단, 등록이면 취약점 탐지 필수

**Source:** raw/09. 사이버안보 훈령(당시)/cyber security reguration.md 제45조 (lines 401-409)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-CSR-011"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "catch_all_duty",
    fr.claimDesc = "제45조 catch-all: 미등록→차단, 등록+취약→차단. 어느 경우든 15년 방치=위반.",
    fr.counterHypothesis = "舊KIATIS가 사이버자산 현황에 정상 등록되어 수용 가능 위험으로 분류되었다",
    fr.falsificationCondition = "DIDC의 사이버자산 현황에 舊KIATIS가 네트워크 구성과 위험 분류와 함께 등록된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 5,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "제45조 catch-all: 미등록→차단, 등록+취약→차단. 어느 경우든 15년 방치=위반.";
```

## 주장 (Claim)

### 한국어

제45조 제1항은 사이버자산 현황을 '수시로 관리'하고 '미등록 또는 취약점 위험도가 높은 장비·체계는 원칙적으로 네트워크 접근을 제한'하도록 의무화. 舊KIATIS가 미등록이면 네트워크 차단 대상, 등록되었으면 VPN 미적용이 취약점으로 탐지 필수. 어느 경우든 15년간 방치는 제45조 위반.

### English

Article 45 Paragraph 1 mandates 'continuous management' of cyber asset status and, in principle, network access restriction for 'unregistered or high-vulnerability-risk equipment and systems.' If 舊KIATIS was unregistered, it should have been subject to network blocking; if registered, the absence of VPN would have been mandatorily detected as a critical vulnerability. Either way, 15 years of non-action constitutes a violation of Article 45.

## 핵심 요약 (Key Takeaways)
- 제45조는 포괄적 의무 규정: 미등록 체계는 네트워크 차단 대상, 등록된 고위험 취약 체계도 동일하게 차단 대상 [타당성]
- Art. 45 creates a catch-all: unregistered systems must be network-restricted; registered high-vulnerability systems must also be restricted [타당성]
- 어느 경우든(미등록 또는 등록-취약) KIATIS의 15년 무방비 운용은 차단되었어야 함 [진리성]
- Either path (unregistered OR registered-but-vulnerable) should have prevented 15 years of unprotected KIATIS operation [진리성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
舊KIATIS가 사이버자산 현황에 정상 등록되어 수용 가능 위험으로 분류되었다

## 반증 조건 (Falsification Condition)
DIDC의 사이버자산 현황에 舊KIATIS가 네트워크 구성과 위험 분류와 함께 등록된 기록

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 5.

## 원전 확인 (Spot-check)
- `Korean/cyber security reguration.md` lines 401-409

## 관련 (Related)
- [[csr-annual-vulnerability-assessment-duty-violated]] (CORROBORATES)
- [[old-kiatis-direct-db-access-without-vpn]] (CORROBORATES)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

---
lang: ko
title-ko: "DIDC 부대예규 제12호 제40조+별지 제10호: 7대 보안체계 적용절차 — KIATIS에 적용되었어야"
title-en: "DIDC 부대예규 제12호 제40조+별지 제10호: 7대 보안체계 적용절차 — KIATIS에 적용되었어야"
aliases:
  - FR-L1-DIDC-7LAYER-SECURITY
  - "DIDC 부대예규 제12호 제40조+별지 제10호: 7대 보안체계 적용절차 —"

layer: 1
secondary-layers: [4]
claimType: procedural_violation
claimSubtype: procedural_artifact_mandatory
fracture-type: null
source-type: sop

verdict: CORROBORATED
strength: MODERATE
truthfulness: 7
validity: 10
sincerity: 7
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
  - 국전원
has-verbatim: false

tags:
  - layer/L1
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/procedural-violation
  - source/sop
  - org/DIDC
  - org/국전원
  - cross-layer
---
# DIDC 부대예규 제12호 제40조+별지 제10호: 7대 보안체계 적용절차 — KIATIS에 적용되었어야

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md 제40조, 별지 제10호 (lines 574-890)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-7LAYER-SECURITY"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_artifact_mandatory",
    fr.claimDesc = "7대 보안체계 적용 의무. KIATIS에 SSL VPN·DB접근제어 미적용은 이 SOP 위반.",
    fr.counterHypothesis = "KIATIS 보안체계 배포는 국전원이 관리하여 DIDC 별지 제10호 절차 적용 대상이 아니었다",
    fr.falsificationCondition = "KIATIS에 대한 별지 제10호 보안체계 적용 기록 7건, 또는 대체 절차에 의한 보안 배포 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 10,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "7대 보안체계 적용 의무. KIATIS에 SSL VPN·DB접근제어 미적용은 이 SOP 위반.";
```

## 주장 (Claim)

### 한국어

DIDC 부대예규 제12호 제40조+별지 제10호는 DIDC에 배치되는 모든 시스템에 Anti-DDoS, IPS, 방화벽, SSL VPN, 웹방화벽, DB암호화, Anti-Virus의 7대 보안체계 적용을 의무화. 각 체계별 리드타임(방화벽 7일, 웹방화벽 3일, Anti-Virus 7일)과 실무자 회의를 요구. KIATIS는 DIDC에 배치된 시스템이므로 이 절차를 거쳐야 하나, SSL VPN과 DB접근제어가 미적용된 채 운영되었다.

### English

DIDC Unit Regulation No. 12 Article 40 and Annex No. 10 mandate application of 7 security systems — Anti-DDoS, IPS, Firewall, SSL VPN, Web Application Firewall, DB Encryption, and Anti-Virus — to every system deployed at DIDC. Each system requires a lead time (Firewall: 7 days, WAF: 3 days, Anti-Virus: 7 days) and a practitioner review meeting. KIATIS, as a system deployed at DIDC, should have undergone this procedure, yet was operated without SSL VPN and DB access control.

## 핵심 요약 (Key Takeaways)
- 별지 제10호 mandates 7-system security deployment chain for every DIDC-hosted application [타당성]
- KIATIS was deployed at DIDC but SSL VPN and DB access control were NOT applied — violation of this SOP [진리성]
- Lead time requirements create pre-deployment documentation that should exist for KIATIS [타당성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
KIATIS 보안체계 배포는 국전원이 관리하여 DIDC 별지 제10호 절차 적용 대상이 아니었다

## 반증 조건 (Falsification Condition)
KIATIS에 대한 별지 제10호 보안체계 적용 기록 7건, 또는 대체 절차에 의한 보안 배포 기록

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 10 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/01.(Korean) DIDC_사이버방호_예규.md` lines 574-890

## 관련 (Related)
- [[didc-sop-firewall-vpn-trail-mandatory]] (CAUSES)
- [[didc-sop-db-access-control-mandatory]] (CAUSES)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

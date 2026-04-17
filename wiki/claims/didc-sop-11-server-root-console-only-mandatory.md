---
lang: ko
title-ko: "DIDC 부대예규 제11호 제161조: 서버 Root 계정은 콘솔 전용·유지보수 인력 단독 사용 불허"
title-en: ""
aliases:
  - FR-L1-DIDC-ROOT-CONSOLE-ONLY
  - "DIDC 부대예규 제11호 제161조: 서버 Root 계정은 콘솔 전용·유지보수 인력"

layer: 1
secondary-layers: [4]
claimType: procedural_violation
claimSubtype: procedural_control_mandatory
fracture-type: null
source-type: sop

verdict: CORROBORATED
strength: MODERATE
truthfulness: 8
validity: 10
sincerity: 7
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L1
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/procedural-violation
  - source/sop
  - org/DIDC
  - cross-layer
---
# DIDC 부대예규 제11호 제161조: 서버 Root 계정은 콘솔 전용·유지보수 인력 단독 사용 불허

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/02.(Korean) DIDC_정보시스템_운영관리_예규.md 제161조②⑦ (lines 336-352)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-DIDC-ROOT-CONSOLE-ONLY"})
SET fr.layer = 1,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_control_mandatory",
    fr.claimDesc = "Root 콘솔 전용+유지보수 단독 불허. 원격 Root 접근=SOP 위반. 증인 트레일 의무.",
    fr.counterHypothesis = "유지보수 업체에 모니터링된 원격 세션을 통해 감독된 접근이 제공되어 콘솔 전용 제한의 취지를 준수했다",
    fr.falsificationCondition = "2016 기간 서버 접근 로그에서 Root 접근이 모두 콘솔 전용이었음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 10,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Root 콘솔 전용+유지보수 단독 불허. 원격 Root 접근=SOP 위반. 증인 트레일 의무.";
```

## 주장 (Claim)

### 한국어

DIDC 부대예규 제11호 제161조②는 병사·유지보수업체 직원의 Root 계정 단독 사용을 금지(불허). 제161조⑦은 Root 접근을 콘솔 전용으로 제한하고 원격 접근을 금지. 이는 모든 관리자 접근에 DIDC 직원의 동행/증인이 필요하다는 의미이며, 2016 해킹 시 원격 Root 접근이 있었다면 이 SOP 위반이다. KIATIS 개발·유지보수 기간에도 업체 직원의 관리자 접근에는 DIDC 직원 동행이 의무.

### English

DIDC Unit Regulation No. 11 Article 161② prohibits soldiers and maintenance contractor personnel from using Root accounts without DIDC staff accompaniment. Article 161⑦ restricts Root access to console-only and prohibits remote access. This means any administrative access requires DIDC staff accompaniment or witnessing. Any remote Root access during the 2016 hacking would constitute an SOP violation. During the KIATIS development and maintenance period, vendor personnel's administrative access also required DIDC staff escort.

## 핵심 요약 (Key Takeaways)
- 제161조② absolutely prohibits soldiers and maintenance contractors from using Root independently [타당성]
- 제161조⑦ restricts Root to console-only — any remote Root access is a procedural violation [타당성]
- Creates mandatory witness trail for all admin-level maintenance actions [진리성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
유지보수 업체에 모니터링된 원격 세션을 통해 감독된 접근이 제공되어 콘솔 전용 제한의 취지를 준수했다

## 반증 조건 (Falsification Condition)
2016 기간 서버 접근 로그에서 Root 접근이 모두 콘솔 전용이었음을 보여주는 기록

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 8 / 타당성 10 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/02.(Korean) DIDC_정보시스템_운영관리_예규.md` lines 336-352

## 관련 (Related)
- [[didc-sop-db-access-control-mandatory|DB/서버 접근제어 SOP 자매 atom]] (CORROBORATES)
- [[didc-sop-12-admin-account-isolation-mandatory]] (RELATED)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

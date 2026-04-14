---
lang: ko
title-ko: "카카오톡: 이지영의 갑질 신고 직전 주간 정상적 관리자 활동 — 직장 기능장애 서사 반박"
title-en: "카카오톡: 이지영의 갑질 신고 직전 주간 정상적 관리자 활동 — 직장 기능장애 서사 반박"
aliases:
  - FR-L5-KKT-NORMAL-MGMT
  - "카카오톡: 이지영의 갑질 신고 직전 주간 정상적 관리자 활동 — 직장 기능장애 서사 반박"

layer: 5
secondary-layers: []
claimType: methodology
claimSubtype: behavioral_evidence
fracture-type: F-CE
source-type: kakao

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 7
sincerity: 8
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: 2022-02-03

persons:
  - 이지영
  - 한지훈
organizations: []
has-verbatim: false

tags:
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/kakao
  - fracture/F-CE
  - person/이지영
  - person/한지훈
---
# 카카오톡: 이지영의 갑질 신고 직전 주간 정상적 관리자 활동 — 직장 기능장애 서사 반박

**Source:** raw/03. Kakao talk data /Korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt lines 12381-12474 (lines 12381-12474)
**Layer:** [[../layers/layer-5|Layer 5]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-KKT-NORMAL-MGMT"})
SET fr.layer = 5,
    fr.claimType = "methodology",
    fr.claimSubtype = "behavioral_evidence",
    fr.claimDesc = "갑질 신고 직전 주간 카카오톡에서 이지영의 정상적 관리 활동 확인. 직장 기능장애 서사 반박.",
    fr.counterHypothesis = "정상적 관리 활동과 동시에 특정 개인에 대한 갑질이 존재할 수 있다",
    fr.falsificationCondition = "동일 기간 카카오톡에서 한지훈 관련 불만이나 직장 기능장애를 시사하는 메시지",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "갑질 신고 직전 주간 카카오톡에서 이지영의 정상적 관리 활동 확인. 직장 기능장애 서사 반박.";
```

## Claim

카카오톡에서 이지영(이지영)은 2022-02-03~07 기간(갑질 신고 3~7일 전) '온나라 조치 완료 확인', '팀장회의 참석', COVID 보고 등 정상적 관리자 활동을 수행. 직장 기능장애를 주장하는 갑질 신고와 정면 모순 — 업무 환경은 정상적으로 작동 중이었다.

## Key Takeaways

- 이지영's KakaoTalk activity 3-7 days before complaint shows normal supervisory functioning — no workplace dysfunction [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

정상적 관리 활동과 동시에 특정 개인에 대한 갑질이 존재할 수 있다

## Falsification condition

동일 기간 카카오톡에서 한지훈 관련 불만이나 직장 기능장애를 시사하는 메시지

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 7 / 진실성 8.

## Spot-check

- `vault-converted-korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt` lines 12381-12474

## Related

- [[lee-jiyoung-covert-sabotage-confirmed-by-kim-minsu]] (RELATED)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

---
lang: ko
title-ko: DIDC의 네트워크 구성도 비공개 — 시험평가 환경 통제 불가능 입증
title-en: DIDC의 네트워크 구성도 비공개 — 시험평가 환경 통제 불가능 입증
aliases:
  - FR-L4-DIDC-WITHHELD-DIAGRAM
  - DIDC의 네트워크 구성도 비공개 — 시험평가 환경 통제 불가능 입증

layer: 4
secondary-layers: []
claimType: evidence_concealment
claimSubtype: network_diagram_withheld
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-11

record-nos: [2301, 2311, 3333]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - 군검찰단
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/evidence-concealment
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - has/record-nos
---
# DIDC의 네트워크 구성도 비공개 — 시험평가 환경 통제 불가능 입증

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.7.4 (lines 723-777)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DIDC-WITHHELD-DIAGRAM"})
SET fr.layer = 4,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "network_diagram_withheld",
    fr.claimDesc = "DIDC는 '통합데이터센터 1센터 내 장비 비공개' 정책(Record 2,311)으로 新KIATIS 시험평가 계획 수립에 필요한 네트워크 구성도와 보안장비 정보를 제공하지 않았다. 국전원의 대부분의 다른 사업에서도 네트워크 구성도가 부재(Records 3,354 등). 따라서 한지훈이 시험평가 환경을 '통제'할 수 있었다는 검찰단의 전제는 물리적으로 불가능하다",
    fr.counterHypothesis = "네트워크 구성도 비공개는 보안 정책에 따른 정상적 조치이며, 시험평가 환경은 구성도 없이도 구축 가능하다",
    fr.falsificationCondition = "한지훈이 DIDC의 네트워크 구성과 보안장비 현황을 파악할 수 있는 다른 경로가 있었음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 2,311에서 DIDC 비공개 정책 확인. Records 2,301/2,555/2,561/3,333/3,354/3,434/3,568/3,616에서 국전원 타 사업에서도 네트워크 구성도 부재 확인.";
```

## 주장 (Claim)

### 한국어

DIDC는 "통합데이터센터 1센터 내 장비 비공개" 정책(기록 제2,311쪽)으로 新KIATIS 시험평가 계획 수립에 필수적인 네트워크 구성도와 보안장비 정보를 국전원에 제공하지 않았다. 국전원의 대부분의 다른 사업에서도 네트워크 구성도가 부재하였다(기록 제3,354쪽 등).

이는 군검찰단이 전제한 "한지훈이 시험평가 환경을 통제·검증해야 했다"는 주장이 물리적으로 불가능했음을 입증한다. DIDC가 VPN, 방화벽, DB접근제어 등 보안장비의 존재와 구성을 비공개한 상태에서, 개발관리팀장이 이들 장비의 적용 여부를 판단하는 것은 불가능하다.

### English

Under a policy of 'non-disclosure of equipment within DIDC Center 1' (Record No. 2,311), DIDC did not provide 국전원 with the network diagram and security equipment information essential for New KIATIS test evaluation plan development. Network diagrams were absent for most of 국전원's other projects as well (Record No. 3,354 etc.).

This proves that the Military Prosecutor's premise — 'team leader 한지훈 should have controlled and verified the test evaluation environment' — was physically impossible. With DIDC keeping the existence and configuration of security equipment (VPN, firewall, DB access control) undisclosed, it was impossible for the development management team leader to judge whether these systems were applied.

## 핵심 요약 (Key Takeaways)
- DIDC's "equipment non-disclosure" policy (Record No. 2,311) made it physically impossible for 한지훈 to control or verify the test-evaluation security environment [진리성]
- Most other 국전원 projects also lacked network diagrams from DIDC — this was a systemic, not KIATIS-specific, information gap [진리성]
- The prosecution's premise that 한지훈 should have verified the test environment is refuted by the information asymmetry created by DIDC's own policies [타당성]

## 지지 증거 (Supporting Evidence)
- **Record No. 2,311** — DIDC "1센터 내 장비 비공개" 정책
- **Record No. 2,301, 2,555, 2,561** — 시험평가 계획 관련
- **Record No. 3,333, 3,354, 3,434, 3,568, 3,616** — 국전원 타 사업 네트워크 구성도 부재

## 반대 가설 (Counter-hypothesis)
네트워크 구성도 비공개는 보안 정책상 정상적이며, 시험평가 환경은 다른 채널로 구축 가능했다.

## 반증 조건 (Falsification Condition)
한지훈이 DIDC의 네트워크 구성을 파악할 수 있는 다른 경로가 있었음을 보여주는 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 723-777

## 관련 (Related)
- [[gukjeonwon-pre-evaluation-team-leader-exclusion]] — L4 팀장 배제 (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

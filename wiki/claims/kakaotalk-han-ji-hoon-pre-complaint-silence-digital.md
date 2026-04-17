---
lang: ko
title-ko: "카카오톡: 2022.2.3~14 한지훈 메시지 부재 — 공식 신고(2.10) 이전부터 디지털 격리 시작"
title-en: "카카오톡: 2022.2.3~14 한지훈 메시지 부재 — 공식 신고(2.10) 이전부터 디지털 격리 시작"
aliases:
  - FR-L5-KKT-PRE-COMPLAINT-SILENCE
  - "카카오톡: 2022.2.3~14 한지훈 메시지 부재 — 공식 신고(2.10) 이전부터"

layer: 5
secondary-layers: []
claimType: technical_proof
claimSubtype: digital_forensic_evidence
fracture-type: null
source-type: kakao

verdict: CORROBORATED
strength: MODERATE
truthfulness: 7
validity: 6
sincerity: 8
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 이지영
  - 박서준
  - 송민석
  - 양미숙
organizations: []
has-verbatim: false

tags:
  - layer/L5
  - verdict/corroborated
  - strength/moderate
  - type/technical-proof
  - source/kakao
  - person/한지훈
  - person/이지영
  - person/박서준
  - person/송민석
  - person/양미숙
---
# 카카오톡: 2022.2.3~14 한지훈 메시지 부재 — 공식 신고(2.10) 이전부터 디지털 격리 시작

**Source:** raw/03. Kakao talk data /Korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt lines 12378-12479 (lines 12378-12479)
**Layer:** [[../layers/layer-5|Layer 5]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-KKT-PRE-COMPLAINT-SILENCE"})
SET fr.layer = 5,
    fr.claimType = "technical_proof",
    fr.claimSubtype = "digital_forensic_evidence",
    fr.claimDesc = "2022.2.3~14 한지훈 메시지 0건. 공식 신고(2.10) 이전 디지털 격리 가능성.",
    fr.counterHypothesis = "한지훈의 침묵은 일반적 포스팅 빈도와 일치하며 격리와 무관",
    fr.falsificationCondition = "전체 카카오톡 분석에서 한지훈이 2.3~14 기간에 포스팅한 기록, 또는 동일 패턴의 침묵이 다른 시기에도 존재",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 6,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "2022.2.3~14 한지훈 메시지 0건. 공식 신고(2.10) 이전 디지털 격리 가능성.";
```

## 주장 (Claim)

### 한국어

2022.2.3~14 기간 카카오톡에서 한지훈의 메시지가 0건인 반면 다른 팀원(이지영, 양미숙, 송민석, 박서준)은 정상 활동. 공식 갑질 신고(2.10) 이전인 2.3부터 이미 디지털 수준의 격리가 시작되었을 가능성 — 사전 기획된 고립화 시점을 2.10에서 2월 초로 앞당기는 증거.

### English

During the period 2022.2.3–14, 한지훈 sent 0 messages on KakaoTalk while other team members (이지영, 양미숙, 송민석, 박서준) showed normal activity. The digital-level isolation had already begun as early as February 3 — before the official harassment complaint (2.10) — potentially pushing the premeditated isolation start date from 2.10 back to early February.

## 핵심 요약 (Key Takeaways)
- Zero messages from 한지훈 during Feb 3-14 while all other team members posted normally — digital isolation may have started BEFORE the formal complaint [진리성]
- This pushes the pre-planning timeline from Feb 10 to early February [진리성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
한지훈의 침묵은 일반적 포스팅 빈도와 일치하며 격리와 무관

## 반증 조건 (Falsification Condition)
전체 카카오톡 분석에서 한지훈이 2.3~14 기간에 포스팅한 기록, 또는 동일 패턴의 침묵이 다른 시기에도 존재

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 6 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt` lines 12378-12479

## 관련 (Related)
- [[harassment-complaint-48hrs-premeditated-isolation]] (RELATED)
- [[layer5-isolation-office-premeditated]] (RELATED)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

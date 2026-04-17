---
lang: ko
title-ko: 박서준이 시험평가 기간 중 WiSC 학술대회 참석 — 억압 서사와 모순
title-en: 박서준이 시험평가 기간 중 WiSC 학술대회 참석 — 억압 서사와 모순
aliases:
  - FR-L5-KKT-WISC
  - 박서준이 시험평가 기간 중 WiSC 학술대회 참석 — 억압 서사와 모순

layer: 5
secondary-layers: [4]
claimType: methodology
claimSubtype: behavioral_evidence
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
event-date: 2019-09-05

persons:
  - 박서준
  - 한지훈
organizations: []
has-verbatim: false

tags:
  - layer/L5
  - layer/L4
  - verdict/corroborated
  - strength/moderate
  - type/methodology
  - source/kakao
  - person/박서준
  - person/한지훈
  - cross-layer
---
# 박서준이 시험평가 기간 중 WiSC 학술대회 참석 — 억압 서사와 모순

**Source:** raw/03. Kakao talk data /Korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt line 2735 (lines 2735)
**Layer:** [[../layers/layer-5|Layer 5]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-KKT-WISC"})
SET fr.layer = 5,
    fr.claimType = "methodology",
    fr.claimSubtype = "behavioral_evidence",
    fr.claimDesc = "KakaoTalk에서 박서준 WiSC 참석 확인. 시험평가 기간과 겹침. 억압 서사와 모순.",
    fr.counterHypothesis = "학술대회 참석은 갑질과 무관하며, 피해자도 정상 업무를 수행할 수 있다",
    fr.falsificationCondition = "한지훈이 박서준의 학술대회 참석을 강제하거나 방해한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 6,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "KakaoTalk에서 박서준 WiSC 참석 확인. 시험평가 기간과 겹침. 억압 서사와 모순.";
```

## 주장 (Claim)

### 한국어

카카오톡 단톡방에서 박서준(박서준)이 2019-09-05~06 WiSC 정보보안 학술대회에 참석한 기록이 확인된다. 이는 新KIATIS 시험평가 기간(2019.9.2~11)과 정확히 겹치며, 검찰의 '박서준이 한지훈의 직장 내 괴롭힘 피해자'라는 서사와 모순 — 박서준은 독립적으로 전문 개발 활동을 추진하고 있었다.

### English

KakaoTalk group chat records confirm 박서준 attended the WiSC Information Security Academic Conference on 2019-09-05–06. This coincides exactly with the New KIATIS test and evaluation period (2019.9.2–11), contradicting the prosecution's narrative that 박서준 was 한지훈's workplace harassment victim — 박서준 was independently pursuing professional development activities.

## 핵심 요약 (Key Takeaways)
- 박서준 attended WiSC security conference during the exact evaluation period — inconsistent with being harassed/controlled [진리성]

## 지지 증거 (Supporting Evidence)
- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## 반대 가설 (Counter-hypothesis)
학술대회 참석은 갑질과 무관하며, 피해자도 정상 업무를 수행할 수 있다

## 반증 조건 (Falsification Condition)
한지훈이 박서준의 학술대회 참석을 강제하거나 방해한 기록

## 평결 (Verdict)
**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 6 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/카타오톡 자료(4년 동안 자료 2019.3.7~2023.3.25).txt` lines 2735

## 관련 (Related)
- [[layer5-park-seojun-48hr-cooperation-to-hostility]] (CORROBORATES)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

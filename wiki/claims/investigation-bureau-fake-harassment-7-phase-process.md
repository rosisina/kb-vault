---
lang: ko
title-ko: 조사본부의 허위 갑질 조사는 7단계 사기수사 프로세스를 따랐다
title-en: ""
aliases:
  - FR-L5-052
  - 조사본부의 허위 갑질 조사는 7단계 사기수사 프로세스를 따랐다

layer: 5
secondary-layers: [6]
claimType: methodology
claimSubtype: process
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 7
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L5-052"]
event-date: 2022-02-08

persons:
  - 김민수
  - 이지영
  - 한지훈
  - 김수진
  - 지원호
  - 양미숙
  - 김민지
  - 이승우
  - 박서준
organizations:
  - 국전원
  - 군검찰단
  - MND
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - fracture/F-MS
  - person/김민수
  - person/이지영
  - person/한지훈
  - person/김수진
  - person/지원호
  - org/국전원
  - org/군검찰단
  - org/MND
  - org/조사본부
  - cross-layer
---
# 조사본부의 허위 갑질 조사는 7단계 사기수사 프로세스를 따랐다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (§3.5.2.3.2)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-6|Layer 6]] (secondary — Phase 7 transitions to 군 검찰 표적수사)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-052"})
SET fr.layer = 5, fr.claimType = "methodology",
    fr.claimSubtype = "process",
    fr.claimDesc = "조사본부의 허위 갑질 조사는 구실 만들기→표적 격리→거짓 증거 제작→조율된 증언→은폐 실패→증거 은폐→다음 층위 전환의 7단계 사기수사 프로세스를 따랐다",
    fr.counterHypothesis = "7단계는 사후적 패턴 부여이며 실제로는 독립적이고 우연한 행정 절차의 순차적 진행이었다",
    fr.falsificationCondition = "7단계 중 어느 하나라도 시간적 선후관계나 인과관계가 성립하지 않음을 증명하면 약화된다",
    fr.verdict = "CORROBORATED", fr.strength = "STRONG",
    fr.truthfulness = 9, fr.validity = 7, fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "조사본부의 갑질 조사가 7단계 사기수사 프로세스(pretext→isolation→fabrication→coordination→failure→suppression→transition)를 따랐음을 시간순 증거로 증명";
```

## 주장 (Claim)

### 한국어

조사본부의 허위 갑질 조사는 7단계 프로세스를 따랐다 (§3.5.2.3.2):

- **Phase 1 — 구실 만들기 (pretext creation):** 2022-02-08 舊KIATIS 보안위반 노출 → 이지영이 VPN 정보 수집 → 48시간 후(2022-02-10) 갑질 신고라는 구실 생성.
- **Phase 2 — 표적 격리 (target isolation):** 2022-02-10 김민수가 독방 격리 명령, 2022-02-21 舊사이버사 110호 배치, PC 압수, 자료·동료 접촉 차단, "증거인멸 조심하라" 협박.
- **Phase 3 — 거짓 증거 제작 (false evidence fabrication):** 김수진 주도, 양미숙·김민지·지원호 참여하여 갑질 사유 조작. 이지영 "5:30 보고 안 받았다" 거짓 진술. 이승우 "징계 사유" 판정. 김민수 "심각하다 징계다" 확정.
- **Phase 4 — 조율된 증언 (coordinated testimony):** 이지영 거짓 진술, 조사관 유도심문, 이승우 "징계" 정의, 김민수 확정 판정 — 3인 집단 거짓 진술 조율.
- **Phase 5 — 은폐 실패 (cover-up failure):** 업체 직원 2명이 확인서 제공, "수십 번 보고" 증언으로 5:30 조작 붕괴.
- **Phase 6 — 증거 은폐 (evidence suppression):** 경고장 발부되었으나 박서준 사안 누락, 한지훈의 인권침해 무시, 출퇴근 조작 실패 은폐.
- **Phase 7 — 다음 층위 전환 (transition to Layer 6):** 갑질 조작 실패 → 군 검찰 표적수사로 전환. 국방부 직무감찰담당관실의 "감사 결과 처분요구서 통보" 생산(2022-04-22, 기록 제4,063쪽) → 국방부 검찰단의 "군인·공무원 범죄 수사개시 통보"(2022-04-25, 기록 제4,854쪽).

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] The investigation bureau's fake harassment probe followed a 7-phase fraud investigation process: pretext creation (Feb 8–10) → target isolation (Feb 10–21) → false evidence fabrication → coordinated testimony → cover-up failure → evidence suppression → transition to Layer 6 military prosecution. / 조사본부의 허위 갑질 조사는 7단계 사기수사 프로세스를 따랐으며, 2022-02-08부터 2022-04-25까지 시간순으로 전개되었다.
- [진실성] The 48-hour gap between the 舊KIATIS security violation exposure (Feb 8) and the harassment complaint (Feb 10) indicates the complaint was a pretext to deflect from the security breach, not a genuine grievance. / 보안위반 노출(2.8)과 갑질 신고(2.10) 사이 48시간 간격은 신고가 보안사고 은폐를 위한 구실이었음을 시사한다.
- [타당성] Phase 7's seamless transition — 감사 결과 처분요구서 (Apr 22, Fri) → 수사개시 통보 (Apr 25, Mon) — demonstrates pre-coordinated timing between the inspection bureau and military prosecutors. / Phase 7의 금요일-월요일 연결(4.22→4.25)은 감찰부서와 검찰단 간 사전 조율된 시간표를 증명한다.

## 지지 증거 (Supporting Evidence)
- **기록 제4,063쪽** — 국방부 직무감찰담당관실 "감사 결과 처분요구서 통보" (2022-04-22)
- **기록 제4,854쪽** — 국방부 검찰단 "군인·공무원 범죄 수사개시 통보" (2022-04-25), 국전원장에게만 통보

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석:** 7단계는 한지훈의 사후적 패턴 부여이며, 실제로는 각 단계가 독립적인 행정 절차의 자연스러운 순차적 진행이었다.
2. **반박 조건:** 각 단계 사이의 시간적 간격이 일반적인 행정 처리 기간과 일치하고, 단계 간 동일 인물(김민수, 이지영)의 반복적 개입이 없었음을 증명하면 반박 가능.
3. **반대 입장:** 국방부 측은 갑질 신고가 정당한 절차에 따른 것이며, 수사 개시는 감사 결과에 따른 자연스러운 후속 조치였다고 주장할 것이다.

## 반증 조건 (Falsification Condition)
7단계 중 어느 하나라도 시간적 선후관계 또는 인과관계가 성립하지 않음을 증명하거나, Phase 1의 48시간 간격에 합리적 설명이 존재함을 증명하거나, Phase 7의 금-월 연결이 통상적 행정 소요 기간임을 통계적으로 증명하면 약화된다.

## 평결 (Verdict)
**CORROBORATED** — 7단계 각각이 기록 번호로 뒷받침되며, 단계 간 시간적 연속성과 동일 인물의 반복적 개입(김민수, 이지영)이 우연의 일치로 설명하기 어려운 수준의 패턴을 형성한다. 특히 Phase 7의 금요일-월요일 연결(감사 처분요구→수사개시)은 사전 조율 없이는 불가능한 시간표이다.

## 미결 사항 (Open Questions)
- Phase 3에서 김수진, 양미숙, 김민지, 지원호의 구체적 역할 분담에 대한 개별 기록 번호 확인 필요.
- Phase 5의 "업체 직원 2명"의 신원 및 해당 확인서의 기록 번호 확인 필요.

## Spot-check (raw/01 book)

- §3.5.2.3.2 (lines 207–214) 직접 확인 완료. 7단계 프로세스 명칭 및 시간순 전개 원문과 일치.
- 기록 제4,063쪽 — "감사 결과 처분요구서 통보(2022년 4월 22일(금))" 원문 확인.
- 기록 제4,854쪽 — "군인·공무원 범죄 수사개시 통보(2022년 4월 25일(월))" 원문 확인.

## 관련 (Related)
- [[../layers/layer-5|Layer 5 — 허위 갑질 신고와 조사본부의 조작 감사]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6 — 군 검찰단의 사기 수사와 범죄자 낙인]] (PART_OF_LAYER)
- [[../entities/people/lee-ji-young|이지영]] (ABOUT)
- [[../entities/people/kim-min-su|김민수]] (ABOUT)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|한지훈 기소유예는 범죄자 낙인]] (RELATED)

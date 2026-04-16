---
lang: ko
title-ko: "조사본부-법무관리관실-국전원의 사전 공모: 이지영의 거짓 귀속과 김민수의 자백적 발언이 삼각 공모를 증명한다"
title-en: ""
aliases:
  - FR-L5-054
  - "조사본부-법무관리관실-국전원의 사전 공모: 이지영의 거짓 귀속과 김민수의 자백적 발언이"

layer: 5
secondary-layers: []
claimType: conspiracy_structure
claimSubtype: pre_collusion_triple_conspiracy
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-11

record-nos: [11062]
evidence-ids: ["L5-054"]
event-date: null

persons:
  - 이지영
  - 김민수
  - 한지훈
  - 박서준
  - 이승우
organizations:
  - 국전원
  - MND
  - 조사본부
  - DCIA
has-verbatim: false

tags:
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/conspiracy-structure
  - source/book
  - fracture/F-CE
  - person/이지영
  - person/김민수
  - person/한지훈
  - person/박서준
  - person/이승우
  - org/국전원
  - org/MND
  - org/조사본부
  - org/DCIA
  - has/record-nos
---
# 조사본부-법무관리관실-국전원의 사전 공모: 이지영의 거짓 귀속과 김민수의 자백적 발언이 삼각 공모를 증명한다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (§3.5.2.1.2)
**Layer:** [[../layers/layer-5|Layer 5]] (primary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-054"})
SET fr.layer = 5,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "pre_collusion_triple_conspiracy",
    fr.claimDesc = "Lee Ji-young's false attribution of the gag order to the Inspector General's office and Kim Min-su's self-contradicting statements — claiming ignorance of the audit while later demanding 'you think this outcome came because you did well?' — prove pre-coordination among DCIA (국전원), MND Investigation Bureau (조사본부), and MND Legal Affairs Office (법무관리관실).",
    fr.counterHypothesis = "Lee Ji-young genuinely relayed the Inspector General's confidentiality instruction; Kim Min-su's later statement was a reaction to the audit result, not evidence of prior coordination.",
    fr.falsificationCondition = "Production of a written confidentiality directive from the Inspector General's office to Lee Ji-young, combined with evidence that Kim Min-su learned of the audit outcome only after its completion.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "이지영's 2022-03-24 statement attributing gag order to 감사관실 is false attribution (기록 제11,062쪽); 김민수 claimed total ignorance of the audit but later said '네가 잘해서 이렇게 나온 줄 알아?' — proving pre-coordination with 법무관리관실.";
```

## 주장 (Claim)

### 한국어

2022년 3월 24일, 이지영 (공문결재자-1)은 한지훈에게 "감사관실에서 양측에 다 얘기하지 말라는 거를 저한테 애기했기 때문에 제가 어떻게 할 수 없어요"라고 말했다(기록 제11,062쪽). 이 발언은 **거짓 귀속(false attribution)**이다 — 이지영 자신이 한지훈과 박서준 사이의 정보 교환을 차단하기 위해 감사관실(조사본부)을 핑계로 사용한 것이었다. "양측에 마찬가지"라는 발언은 **거짓 중립성(false neutrality)**을 가장한 것이다.

김민수는 2022년 5월 4일 한지훈에게 "몰라. 내가 조사에 대해서 일체 모른다고 했잖아. 나한테 얘기 못하게 되어 있고"라고 발언했다. 그러나 감사 결과가 나오자, 김민수는 "네가 잘해서 이렇게 나온 줄 알아?"라고 다그쳤다. **조사에 대해 "일체 모른다"고 했던 자가 감사 결과를 마치 자신이 관여한 것처럼 발언한 것은 법무관리관실(감사관실)과의 사전 조율을 스스로 자백한 것이다.**

경고장 내용도 조작되었다: 이승우가 "다른 것은 욕설 성 관련 일등은 전혀 없는데"라고 자백했음에도 경고장에는 추가 갑질 사유가 포함되었고, 출퇴근 조작이 업체 확인서로 붕괴한 사실은 경고장에 언급조차 되지 않았다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 이지영의 "감사관실에서 말하지 말라고 했다"는 발언(기록 제11,062쪽)은 거짓 귀속이다. 실제로는 이지영 자신이 한지훈-박서준 간 정보 교환을 차단한 것이다. / Lee Ji-young's attribution of the gag order to the Inspector General's office (Record No. 11,062) is false attribution — she herself was blocking information exchange between Han Ji-hoon and Park Seo-jun.
- [진리성] 김민수의 자기모순적 발언 — "일체 모른다" 후 "네가 잘해서 이렇게 나온 줄 알아?" — 은 법무관리관실과의 사전 조율을 자백한 것이다. / Kim Min-su's self-contradicting statements — claiming ignorance then demanding 'you think the result came because you did well?' — are a self-confession of pre-coordination with the Legal Affairs Office.
- [타당성] 경고장에서 증명된 조작을 삭제하고 증명되지 않은 내용을 추가한 것은 문서 조작의 직접 증거다. / The warning letter deleted disproven claims (commuting fraud collapsed by contractor witness statements) while adding unproven ones — direct evidence of document fabrication.
- [진실성] 한지훈은 이 삼각 공모 구조 속에서 정보 차단·결론 사전결정·증거 조작의 복합적 피해를 경험했다. / Han Ji-hoon experienced compound harm from information blockade, predetermined conclusions, and evidence fabrication within this triangular conspiracy.

## 지지 증거 (Supporting Evidence)
- **기록 제11,062쪽** — 2022-03-24 이지영의 거짓 귀속 발언 녹취 기록
- **Book §3.5.2.1.2** — 조사본부-법무관리관실-국전원의 사전 공모 분석
- **이승우의 자백** — "다른 것은 욕설 성 관련 일등은 전혀 없는데" (갑질 부재 자인)
- **업체 직원 2명 확인서** — 출퇴근 조작 붕괴 (이지영의 "기억나지 않는다" 거짓 진술 반증)

## 반대 가설 (Counter-hypothesis)
이지영은 실제로 감사관실로부터 양측에 대한 비밀유지 지시를 받았으며, 김민수의 "네가 잘해서 나온 줄 알아?" 발언은 감사 결과가 나온 후 사후적으로 반응한 것일 뿐 사전 조율의 증거가 아니다.

**반증 조건:** 감사관실이 이지영에게 양측 비밀유지를 지시한 공식 문서가 존재하고, 김민수가 감사 결과를 사후에 통보받았다는 기록이 존재할 경우 이 반가설이 성립한다.

**대립 입장:** 김민수와 이지영은 각자 독립적으로 행동했으며, 시간적 일치는 우연의 산물이라는 입장.

## 반증 조건 (Falsification Condition)
1. **감사관실 공식 비밀유지 지시 문서** — 이지영에게 양측 비밀유지를 지시한 조사본부의 공식 문서 원본
2. **김민수의 감사 결과 사후 통보 기록** — 감사 결과가 완료된 후에야 김민수에게 통보되었다는 기록
3. **경고장 작성 과정 문서** — 경고장이 조사 결과를 충실히 반영했음을 보여주는 내부 문서

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 9. 이지영의 거짓 귀속(기록 제11,062쪽)과 김민수의 자기모순적 발언은 시간적으로 조율된 삼각 공모의 독립적 증거다. 경고장의 선별적 삭제·추가는 문서 수준의 조작 증거를 추가한다.

## 미결 사항 (Open Questions)
- 이지영이 "감사관실에서 말하지 말라고 했다"고 최초 발언한 정확한 맥락에서 다른 참석자가 있었는지 미확인
- 김민수의 "네가 잘해서 나온 줄 알아?" 발언의 정확한 날짜와 녹취 기록 위치 추가 확인 필요

## Spot-check (raw/01 book)

- `Korean/11-3-5-35-제-5층위.md` §3.5.2.1.2 (lines 120–123): 이지영의 거짓 귀속, 김민수의 자기모순 발언, 경고장 조작 — 모두 일치.

## 관련 (Related)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/kim-min-su|김민수]] (ABOUT)
- [[../entities/people/lee-ji-young|이지영]] (ABOUT)
- [[layer5-predetermined-audit-conclusion|조사본부 결론 사전결정]] (CORROBORATES)
- [[layer5-fabricated-warning-letter|허위 경고장]] (OPPOSES)
- [[layer5-park-seojun-nominal-complainant|박서준 명목상 신고자]] (CORROBORATES)
- [[lee-ji-young-double-play-park-seo-jun-incitement-han-ji-hoon-blocking|이지영 이중 플레이]] (CORROBORATES)

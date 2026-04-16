---
lang: ko
title-ko: "이지영의 이중 플레이: 박서준에게 신고 유도, 한지훈에게 정보 차단"
title-en: ""
aliases:
  - FR-L5-053
  - "이지영의 이중 플레이: 박서준에게 신고 유도, 한지훈에게 정보 차단"

layer: 5
secondary-layers: []
claimType: methodology
claimSubtype: action
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 7
sincerity: 9
analysisDate: 2026-04-11

record-nos: [11063]
evidence-ids: ["L5-053"]
event-date: 2022-02-18

persons:
  - 이지영
  - 박서준
  - 한지훈
  - 김민수
  - 이진한
organizations:
  - 국전원
  - 군검찰단
  - MND
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - fracture/F-MS
  - person/이지영
  - person/박서준
  - person/한지훈
  - person/김민수
  - person/이진한
  - org/국전원
  - org/군검찰단
  - org/MND
  - org/조사본부
  - has/record-nos
---
# 이지영의 이중 플레이: 박서준에게 신고 유도, 한지훈에게 정보 차단

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (§3.5.3.1.2)
**Layer:** [[../layers/layer-5|Layer 5]] (primary)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-053"})
SET fr.layer = 5, fr.claimType = "methodology",
    fr.claimSubtype = "action",
    fr.claimDesc = "이지영은 박서준에게 '개인이 신청하는 걸로 해라'라고 신고를 유도하면서, 한지훈에게는 '양측에 애기 말라'며 정보를 차단하는 이중 플레이를 구사했다",
    fr.counterHypothesis = "이지영은 과장으로서 양측 모두에게 동일한 절차적 안내를 한 것이며 의도적 이중 플레이가 아니었다",
    fr.falsificationCondition = "이지영이 한지훈에게도 동일한 신고 절차 정보를 제공했거나, 박서준에게도 동일한 정보 차단을 적용했음을 증명하면 약화된다",
    fr.verdict = "CORROBORATED", fr.strength = "STRONG",
    fr.truthfulness = 9, fr.validity = 7, fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "이지영이 박서준에게는 개인 신고를 유도하고 한지훈에게는 정보를 차단하는 방향별 차별적 발화(이중 플레이)를 구사했음을 녹취록으로 증명";
```

## 주장 (Claim)

### 한국어

이지영 (공문결재자-1)은 박서준과 한지훈을 상대로 방향별 차별적 발화 전략, 즉 이중 플레이를 구사했다 (§3.5.3.1.2).

2022-02-18 증거 기록에서, 이지영은 박서준에게 다음과 같이 신고를 유도했다: "그런 거는 전혀 없어요 그냥 뭐 그 원장님한테 원차원에서 신고를 해달라고 요청을 해가지고 그건 아니다 라고 애기를 한 상태이고 그래서 개인이 신청하는 걸로 해라라고 해 놓은 상태라서" (기록 제11,063쪽). "원차원에서 신고"(조직 책임)는 거부하고, "개인이 신청하는 걸로 해라"를 지시함으로써 조직 책임을 회피하고 박서준 개인의 신고로 프레이밍했다.

동시에 한지훈에게는 "감사관실에서 애기하지 말라고 했다"는 거짓 귀속(false attribution)을 사용하여 정보를 차단했다. "양측에 마찬가지예요 박 중위 한 테도 마찬가지고 이중령님 한 테도 마찬가지고"라는 발언은 거짓 중립성(false neutrality)이었다 — 실제로는 조사본부와 긴밀히 협력하며 한지훈에게 불리한 거짓 진술을 제공하고 있었다.

이지영의 발화는 대상별로 명확히 구분되었다: 박서준에게는 **지시(directive)** — "개인 신고 해라"; 한지훈에게는 **금지(prohibition)** — "양측에 애기 말라"; 감사관실에는 **조율(coordination)** — 직접 연락하여 사전 준비. 또한 '21~'22년 국전원과 국방부 검찰단·조사본부 간 KIATIS 문서 송수신 현황(〈표 3-5-3〉)은 이지영이 박서준 (사업실무자-1)과 함께 문서 접수·생산·발송의 핵심 결재자로 반복적으로 등장함을 보여주며(기록 제4,826쪽), 갑질 신고 기간과 검찰 수사 협조 기간이 중첩됨을 증명한다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 이지영 directed 박서준 to file an individual complaint ("개인이 신청하는 걸로 해라") while blocking 한지훈 from information ("양측에 애기 말라"), constituting a directionally differentiated speech strategy documented in recording transcripts (Record No. 11,063). / 이지영은 녹취록에 기록된 대로 박서준에게는 개인 신고를 지시하고 한지훈에게는 정보를 차단하는 방향별 차별적 발화 전략을 구사했다.
- [타당성] The document transmission table (기록 제4,826쪽) shows 이지영 as a repeated signatory on 12+ documents exchanged between 국전원 and 군 검찰단/조사본부 during 2021–2022, with the harassment investigation and prosecution cooperation periods overlapping. / 문서 송수신 현황은 이지영이 2021~2022년간 국전원-검찰단 간 12건 이상의 문서에 결재자로 반복 등장하며, 갑질 조사와 수사 협조 기간이 중첩됨을 보여준다.
- [진실성] 이지영's false attribution ("감사관실에서 애기하지 말라고 했다") and false neutrality ("양측에 마찬가지") were deliberate gaslighting tactics that isolated 한지훈 from the truth about who was orchestrating the complaint. / 이지영의 거짓 귀속과 거짓 중립 발언은 한지훈을 진실로부터 격리시키기 위한 의도적 가스라이팅이었다.

## 지지 증거 (Supporting Evidence)
- **기록 제11,063쪽** — 2022-02-18 이지영-박서준 대화 녹취록: "개인이 신청하는 걸로 해라라고 해 놓은 상태"
- **기록 제4,826쪽** — '21~'22년 국전원↔검찰단·조사본부 간 KIATIS 문서 송수신 현황 (〈표 3-5-3〉), 이지영 반복 결재

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석:** 이지영은 과장으로서 양측 모두에게 동일한 절차적 안내를 한 것이며, "개인이 신청하는 걸로 해라"는 신고 절차에 대한 중립적 설명이었고, "양측에 애기 말라"는 조사의 공정성을 위한 표준적 조치였다.
2. **반박 조건:** 이지영이 한지훈에게도 동일한 신고 절차 정보를 제공했음을 증명하거나, 박서준에게도 동일하게 정보를 차단했음을 증명하면 이중 플레이 주장이 약화된다.
3. **반대 입장:** 국전원 측은 이지영이 관리자로서 갈등 양측에 대해 조사 기간 중 접촉을 자제하도록 안내한 것은 통상적 절차라고 주장할 수 있다.

## 반증 조건 (Falsification Condition)
이지영이 한지훈에게도 박서준과 동일한 수준의 정보(신고 내용, 절차, 진행 상황)를 제공했음을 증명하거나, "감사관실에서 애기하지 말라고 했다"는 발언이 실제 감사관실의 지시에 의한 것임을 감사관실 측 기록으로 증명하면 약화된다.

## 평결 (Verdict)
**CORROBORATED** — 녹취록(기록 제11,063쪽)에서 이지영의 발화가 대상별로 명확히 구분됨이 직접 확인된다. 박서준에게는 개인 신고를 유도하는 지시적 발화, 한지훈에게는 정보를 차단하는 금지적 발화가 동일 시기에 이루어졌다. 문서 송수신 현황(기록 제4,826쪽)은 이지영이 검찰단과의 수사 협조에서도 핵심 결재자임을 추가로 증명한다.

## 미결 사항 (Open Questions)
- "감사관실에서 애기하지 말라고 했다"의 실제 출처 확인 필요 — 감사관실 내부 문서에 해당 지시가 존재하는지 여부.
- 〈표 3-5-3〉의 12건 문서 각각의 기록 번호 상세 확인 필요.

## Spot-check (raw/01 book)

- §3.5.3.1.2 (lines 288–303) 직접 확인 완료. "개인이 신청하는 걸로 해라" 인용 원문과 일치.
- 기록 제11,063쪽 — "그런 거는 전혀 없어요...개인이 신청하는 걸로 해라라고 해 놓은 상태" 원문 확인.
- 기록 제4,826쪽 — "6.25 전사자 종합정보체계 점검 및 조치방안 검토 요청" 문서의 생산/발송 "박서준·이진한·이지영·김민수" 확인.

## 관련 (Related)
- [[../layers/layer-5|Layer 5 — 허위 갑질 신고와 조사본부의 조작 감사]] (PART_OF_LAYER)
- [[../entities/people/lee-ji-young|이지영]] (ABOUT)
- [[../entities/people/park-seo-jun|박서준]] (ABOUT)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[investigation-bureau-fake-harassment-7-phase-process|조사본부 허위 갑질 7단계 프로세스]] (CORROBORATES)

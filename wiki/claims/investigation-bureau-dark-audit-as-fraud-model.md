---
lang: ko
title-ko: 조사본부의 허위 갑질조사가 '깜깜이 수사'로서 사기수사의 전형적 모델을 증명한다
title-en: ""
aliases:
  - FR-L5-DARK-AUDIT-001
  - 조사본부의 허위 갑질조사가 '깜깜이 수사'로서 사기수사의 전형적 모델을 증명한다

layer: 5
secondary-layers: []
claimType: procedural_violation
claimSubtype: procedural_rights_violation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 10
analysisDate: 2026-04-11

record-nos: [11040, 11066]
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 김민수
  - 이지영
  - 박서준
  - 이태호
organizations:
  - 군검찰단
  - MND
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/book
  - fracture/F-MS
  - person/한지훈
  - person/김민수
  - person/이지영
  - person/박서준
  - person/이태호
  - org/군검찰단
  - org/MND
  - org/조사본부
  - has/record-nos
---
# 조사본부의 허위 갑질조사가 '깜깜이 수사'로서 사기수사의 전형적 모델을 증명한다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (§3.5.2.3.1)
**Layer:** [[../layers/layer-5|Layer 5]] (primary — 허위 갑질 신고와 조사본부의 조작 감사)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-DARK-AUDIT-001"})
SET fr.layer = 5,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_rights_violation",
    fr.claimDesc = "조사본부의 갑질 조사는 '깜깜이 수사'의 세 가지 차원(절차적 불투명성, 정보적 차단, 증거적 비대칭)을 모두 사용하였다. 김민수의 PC 압수(기록 제11,040쪽)와 이지영의 PC 이동 차단(기록 제11,066쪽)은 한지훈이 31년간 보관한 모든 KIATIS 관련 증거에 대한 접근을 원천 차단한 것이다.",
    fr.counterHypothesis = "PC 압수와 이동 제한은 증거 보전을 위한 표준적 조사 절차이며, 갑질 조사의 비밀 유지는 피조사자와 신고자 모두를 보호하기 위한 조치이다.",
    fr.falsificationCondition = "PC 압수가 공식 증거보전 명령에 따른 것이며, 한지훈에게 압수 사유와 반환 절차가 고지되었음을 보여주는 문서가 제시되면, '깜깜이 수사'에서 '절차적 증거 보전'으로 재평가된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "§3.5.2.3.1은 깜깜이 수사의 세 차원(절차적·정보적·증거적 어둠)을 정의하고, PC 압수(기록 제11,040쪽), PC 이동 차단(기록 제11,066쪽), 자료 열람 금지, '증거인멸 조심하라'는 협박을 통해 한지훈의 방어권이 체계적으로 박탈되었음을 증명한다.";
```

## 주장 (Claim)

### 한국어

§3.5.2.3.1은 조사본부의 허위 갑질조사를 "깜깜이 수사"로 규정하고, 이것이 사기수사의 전형적 모델임을 세 가지 차원의 어둠(darkness)을 통해 증명한다:

1. **절차적 불투명성 (procedural darkness)**: 한지훈은 수사 절차, 혐의 내용, 조사 일정을 전혀 알 수 없었다. 2022년 2월 9일 갑질 신고 사실만 통보받았고, 이지영은 "박서준이 신고했다(기록 제11,066쪽)"는 거짓 정보를 전달하며 가스라이팅하였다.

2. **정보적 차단 (informational darkness)**: 한지훈은 자신에 대한 진술, 증거, 조사 결과에 접근할 수 없었다. 3월 25일 조사본부 조사에서 29개 질문에 답변했으나 자신의 진술서를 제공받지 못했다.

3. **증거적 비대칭 (evidential darkness)**: 김민수는 2022년 2월 14일 "개인물품을 챙겨라, PC는 나중에 갔다 달라고 그러면 되니까"라고 말하며 PC를 압수하였다(기록 제11,040쪽). 이지영은 2월 22일 "피씨를 가져갈 수 없을 텐데, 피씨를 들고 이동하진 않잖아요?"라며 PC 이동을 차단하였다(기록 제11,066쪽). 이태호는 "세명 다 열람금지야"라고 하여 자료 열람을 금지하였다.

한지훈은 31년 전산장교로서 2007년부터 2022년까지 모든 KIATIS 관련 문서를 PC에 보관하고 있었다. 이 문서들은 무죄를 증명할 수 있는 결정적 증거였으나, PC 압수로 인해 접근이 원천 차단되었다. 김민수의 "증거인멸 조심하라"는 협박은 동료 접촉·자료 확인·본인 서적 열람까지 모두 금지하는 효과를 가져왔다.

### English

§3.5.2.3.1 characterizes the Defense Counterintelligence Agency's false harassment investigation as a "깜깜이 수사" (dark investigation) and demonstrates it as a typical model of fraud investigation through three dimensions of darkness:

1. **Procedural Darkness**: 한지훈 could not know the investigation procedures, charges, or investigation schedule. He was only notified on February 9, 2022 that a harassment complaint had been filed, and 이지영 gaslighted him by conveying false information that "박서준 filed the complaint" (Record No. 11,066).

2. **Informational Darkness**: 한지훈 could not access statements, evidence, or investigation results concerning himself. On March 25, he answered 29 questions during the investigation but was not provided his own statement.

3. **Evidential Darkness**: On February 14, 2022, 김민수 said "pack your personal belongings — you can request the PC later" while seizing the PC (Record No. 11,040). On February 22, 이지영 blocked PC transfer saying "you can't take the PC, you don't move around carrying a PC" (Record No. 11,066). 이태호 prohibited access to materials: "all three are forbidden from viewing."

한지훈, as a 31-year computer officer, had retained all KIATIS-related documents from 2007 to 2022 on his PC. These documents were decisive evidence proving his innocence, but PC seizure cut off access entirely. 김민수's threat to "be careful of evidence tampering" had the effect of prohibiting contact with colleagues, checking materials, and even accessing his own books.

## 핵심 요약 (Key Takeaways)
- [진리성] PC 압수(기록 제11,040쪽)와 PC 이동 차단(기록 제11,066쪽)이 음성 녹취 기록으로 확인된다 / PC seizure (Record No. 11,040) and PC transfer blocking (Record No. 11,066) are confirmed by audio recording transcripts
- [타당성] 갑질 조사 피조사자에 대한 PC 압수, 자료 열람 금지, 진술서 미교부는 방어권 보장의 기본 원칙 위반 / PC seizure, document access prohibition, and failure to provide statement copies violate fundamental defense rights
- [진실성] 31년 경력 전산장교의 모든 업무 기록이 담긴 PC 압수는 자기 변호 증거에 대한 접근을 원천 차단 — "깜깜이" 그 자체 / Seizing the PC containing all work records of a 31-year IT officer completely blocked access to exculpatory evidence — the very essence of "darkness"
- [진실성] 김민수의 "증거인멸 조심하라"는 동료 접촉, 자료 확인, 서적 열람까지 금지하는 포괄적 협박이었다 / 김민수's "be careful of evidence destruction" was a comprehensive threat prohibiting colleague contact, document review, and even reading books

## 지지 증거 (Supporting Evidence)
- **기록 제11,040쪽** — 김민수의 PC 압수 발언 음성 녹취 (2022.2.14.): "개인물품을 챙겨라 PC는 어떻게 나중에 사용해야 하는데 나중에 갔다 달라고 그러면 되니까". L7 범위(5,300~13,495).
- **기록 제11,066쪽** — 이지영의 PC 이동 차단 발언 음성 녹취 (2022.2.22.): "피씨를 가져갈 수 없을 텐데 피씨를 들고 이동하진 않잖아요?" + "박서준이 신고했다"는 거짓 정보 전달. L7 범위.

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석**: PC 압수와 이동 제한은 갑질 조사의 증거 보전을 위한 표준적 행정 절차이며, 비밀 유지는 신고자(박서준) 보호와 피조사자의 명예 보호를 위한 조치이다.
2. **반박 조건**: PC 압수에 대한 공식 명령서와 한지훈에 대한 압수 사유 고지 기록이 제시되면, "깜깜이"에서 "절차적 증거 보전"으로 재평가된다.
3. **방어 가능한 반대 입장**: 갑질 조사는 그 특성상 비밀리에 진행되는 것이 일반적이며, 피조사자에게 조사 내용을 사전 공개하면 증거 인멸 위험이 있다.

## 반증 조건 (Falsification Condition)
(a) PC 압수가 공식 증거보전 명령에 따른 것이며 한지훈에게 압수 사유와 반환 절차가 고지되었음을 보여주는 공문, 또는 (b) 조사본부의 갑질 조사 절차가 국방부 감사 규정에 부합하는 표준 절차였음을 보여주는 규정 문서가 제시되면, verdict가 하향 조정된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 10. PC 압수와 PC 이동 차단이 음성 녹취 기록(기록 제11,040쪽·제11,066쪽)으로 직접 확인된다. 진실성 점수가 최고인 이유는 31년 경력자의 모든 업무 기록 접근 차단이 가져온 방어 불능 상태의 심각성과, "증거인멸 조심하라"는 협박의 인권 침해적 성격 때문이다.

## 미결 사항 (Open Questions)
- 김민수의 PC 압수가 공식 명령서에 의한 것인지, 아니면 구두 지시에 의한 것인지 확인 필요
- 3월 25일 조사본부 조사의 29개 질문 내용과 한지훈의 답변 전문 — 별도 원자 작성 여부 검토
- 자매 원자 [[layer5-isolation-office-premeditated]]·[[layer5-fabricated-warning-letter]]과의 시간적 연결 — 격리(2월), 깜깜이 수사(3월), 경고장(4월)의 순서적 구조

## Spot-check (raw/01 book)

- `Korean/11-3-5-35-제-5층위.md` §3.5.2.3.1 (line 204) — "깜깜이 수사" 정의와 세 가지 차원의 어둠 — CONFIRMED
- `Korean/11-3-5-35-제-5층위.md` §3.5.2.3.1 (line 204) — 기록 제11,040쪽 김민수 PC 압수 발언 — CONFIRMED
- `Korean/11-3-5-35-제-5층위.md` §3.5.2.3.1 (line 204) — 기록 제11,066쪽 이지영 PC 이동 차단 발언 — CONFIRMED

## 관련 (Related)
- [[layer5-isolation-office-premeditated|독방 격리의 사전 계획성 — 깜깜이 수사의 물리적 기반]] (RELATED)
- [[layer5-fabricated-warning-letter|허위 경고장 — 깜깜이 수사의 최종 산출물]] (OPPOSES)
- [[layer5-48hr-retaliation-causal-link|48시간 내 보복 인과관계]] (RELATED)
- [[layer5-park-seojun-nominal-complainant|박서준의 명목상 신고자 지위]] (RELATED)
- [[../layers/layer-5|Layer 5 — 허위 갑질 신고와 조사본부의 조작 감사]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6 — 깜깜이 수사가 군 검찰단 사기수사의 모델이 됨]] (PART_OF_LAYER)

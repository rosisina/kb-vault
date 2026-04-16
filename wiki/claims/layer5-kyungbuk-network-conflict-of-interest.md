---
lang: ko
title-ko: 경북대 동문 네트워크는 2016 DIDC 해킹 은폐의 핵심 공모 구조이며 최동욱은 이를 의도적으로 은폐했다
title-en: ""
aliases:
  - FR-L5-008
  - 경북대 동문 네트워크는 2016 DIDC 해킹 은폐의 핵심 공모 구조이며 최동욱은 이를

layer: 5
secondary-layers: [7]
claimType: evidence_concealment
claimSubtype: network_concealment_conflict_of_interest
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 7
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L5-008"]
event-date: null

persons:
  - 최동욱
  - 이근태
  - 한지훈
  - 박성호
  - 최영수
  - 김민수
  - 황만수
  - 권중현
organizations:
  - DIDC
  - 국전원
  - 군검찰단
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L5
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/evidence-concealment
  - source/book
  - fracture/F-MS
  - person/최동욱
  - person/이근태
  - person/한지훈
  - person/박성호
  - person/최영수
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - org/MND
  - org/국유단
  - cross-layer
---
# 경북대 동문 네트워크는 2016 DIDC 해킹 은폐의 핵심 공모 구조이며 최동욱은 이를 의도적으로 은폐했다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (§3.5.2.1.3)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-7|Layer 7]] (secondary — 기록 제11,206은 L7 범위)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-008"})
SET fr.layer = 5,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "network_concealment_conflict_of_interest",
    fr.claimDesc = "경북대 동문 네트워크(최동욱·이근태·최영수·박성호)는 2016년 DIDC 해킹 사건 당시 핵심 보직에 있었고, 2022년에도 국방 정보화 요직에 있었다. 변호사 최동욱은 이근태와의 관계를 의도적으로 거짓 부인함으로써 이 네트워크를 은폐하려 했다.",
    fr.counterHypothesis = "경북대 출신의 동일 분야 배치는 군 인사체계의 구조적 특성일 뿐 공모 네트워크가 아니며, 최동욱의 관계 부인은 단순 기억 오류이다.",
    fr.falsificationCondition = "경북대 동문들이 각기 독립적인 인사 경로로 배치되었다는 인사 기록이 확인되고, 이근태가 '최동욱을 안다, 만났다'는 진술을 번복하는 경우 약화된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "경북대 동문 4인(최동욱, 이근태, 최영수, 박성호)이 2016년과 2022년 모두 핵심 보직에 위치하였고, 최동욱이 이근태와의 관계를 거짓 부인했다가 이근태의 자백으로 폭로된 사실은 의도적 네트워크 은폐의 직접 증거이다.";
```

## 주장 (Claim)

### 한국어

경북대 동문 네트워크는 2016년 DIDC 해킹 사건 은폐와 2022년 한지훈 표적수사의 핵심 연결고리이다. 이 네트워크의 구성원과 역할은 다음과 같다:

- **최동욱** (변호사, 법무관리관): 2016년 육군본부 법무관리관(장군)으로 해킹 사건을 직접 다루었고, 이후 국방부 법무실장을 거쳐 2024년 국방부 법무관리관으로 임명
- **이근태** (대령, DIDC 센터장): 2016년 DIDC 1센터장, 2022년 수사 당시 한지훈에게 지속적으로 접촉하며 정보 수집 시도
- **최영수** (서기관, 전임 과장): 국방부와 국전원 근무 경력
- **박성호** (원장, DIDC): 2016년 DIDC 원장

최동욱은 한지훈의 변호사로 선임되었으나, 경북대 동문인 이근태와의 관계를 의도적으로 은폐하였다. 한지훈이 `"제가 분명히 얘기하는데 박성호가 경북대예요. 이근태도 경북대고"`라고 말하자, 최동욱은 `"난 몰라요."`라고 답했다. 그러나 수사 막바지에 이근태가 `"변호사 최동욱을 안다. 심지어는 이 문제로 만났다"`고 폭로하여 최동욱의 거짓이 확인되었다.

최동욱은 한지훈의 변호를 가장하면서 실제로는 군검찰단의 편에서 활동하였다. 한지훈이 국유단에서 Active-X 사용과 VPN 부재를 최동욱 사무실 칠판에 그려서 설명하였으나(기록 제4,338쪽부터), 이후 최동욱은 `"2016년 DIDC 해킹 사건의 공범과 협력하여 은폐 작업을 수행하는 것으로 판단된다."` 기록 제4,542쪽부터와 기록 제11,206쪽부터의 증거에서 최동욱이 `"본인을 위한 변호사가 아니라 군검찰의 변호사로서 임무를 수행했다는 의심을 지울 수가 없다."`

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 경북대 동문 4인(최동욱, 이근태, 최영수, 박성호)이 2016년과 2022년 모두 국방 정보화 핵심 보직에 배치되어 있었다.
  - Four Kyungpook National University alumni (최동욱, 이근태, 최영수, 박성호) held key defense informatization positions in both 2016 and 2022.
- [진리성] 이근태의 자백(`"최동욱을 안다, 이 문제로 만났다"`)은 최동욱의 반복적 관계 부인이 거짓이었음을 확인한다.
  - 이근태's admission confirms 최동욱's repeated denial was false — they knew each other and met about this matter.
- [타당성] 변호사가 이해 상충 관계에 있는 인물과의 연결을 의뢰인에게 은폐하는 것은 변호사법 위반이다.
  - A lawyer concealing connections to conflict-of-interest parties from a client violates the Attorney Act.
- [진실성] 한지훈은 2016 DIDC 해킹의 핵심 내용(Active-X, VPN 부재)을 최동욱에게 직접 설명하였으나, 이 정보가 오히려 은폐 공모에 사용된 것으로 판단된다.
  - 한지훈 explained the core 2016 DIDC hacking facts to 최동욱, but this information was likely used for the concealment conspiracy rather than defense.

## 지지 증거 (Supporting Evidence)
- **기록 제4,338쪽부터** — 최동욱 사무실에서 한지훈이 Active-X와 VPN 부재를 설명한 기록
- **기록 제4,542쪽부터** — 최동욱이 한지훈에게 보낸 답변 요청서 (군검찰 질문지와 내용 일치)
- **기록 제11,206쪽부터** — 최동욱이 군검찰의 변호사로서 임무를 수행했다는 의심의 근거 기록

## 반대 가설 (Counter-hypothesis)
**(a) 대안적 해석:** 경북대 출신이 국방 정보화 분야의 유사한 직책에 배치된 것은 해당 대학의 전공 특성상 자연스러운 인사 패턴이며, 이것이 곧 공모 네트워크를 의미하지는 않는다. 최동욱이 이근태와의 관계를 부인한 것은 수년간 교류가 없었던 동문에 대한 단순 기억 오류일 수 있다.

**(b) 반박 조건:** 경북대 동문 4인이 각기 독립적인 인사 경로를 통해 해당 보직에 배치되었다는 공식 인사 기록이 확인되고, 이근태가 자신의 자백(최동욱과의 만남)을 번복하거나 그 만남이 본 사안과 무관한 것이었다는 증거가 제시되면 약화된다.

**(c) 방어 가능한 반대 입장:** 군 인사체계에서 특정 대학 출신의 집중 배치는 구조적 현상이며, 이를 공모로 해석하는 것은 과도한 음모론적 해석일 수 있다. 다만, 최동욱이 관계를 적극적으로 은폐한 점은 단순 구조적 현상으로 설명되지 않는다.

## 반증 조건 (Falsification Condition)
경북대 동문 4인이 독립적 인사 경로로 배치되었다는 인사 기록 확인, 또는 이근태가 `"최동욱을 안다, 만났다"`는 진술을 번복하고 해당 만남이 본 사안과 무관했다는 증거 제시 시 약화. 최동욱의 답변 요청서와 군검찰 질문지의 내용 비교에서 실질적 차이가 확인되면 이중 대리 주장도 약화.

## 평결 (Verdict)
**CORROBORATED (strong)**
- 진리성 (Truthfulness): **9/10** — 이근태의 자백이 최동욱의 거짓 부인을 직접 반증
- 타당성 (Validity): **7/10** — 이해 상충에 대한 법적 평가 필요
- 진실성 (Sincerity): **9/10** — 한지훈이 변호사에게 핵심 정보를 공유했으나 배신당한 피해 구조

## 미결 사항 (Open Questions)
- 경북대 동문 네트워크의 구체적 교류 기록(동문회, 모임 등)이 확보되면 공모 구조의 밀도를 측정할 수 있다.
- 최동욱의 2024년 국방부 법무관리관 임명이 이 사안과 관련된 보상성 인사인지에 대한 추가 조사 필요.
- 권중현(육사 46기)의 2024년 국전원장 부임과 김민수의 명지대 교수 전환, 황만수의 명지대 교수 재직 등 자리바꿈 패턴에 대한 추가 분석 필요.

## Spot-check (raw/01 book)

- §3.5.2.1.3 (lines 125–128): 경북대 네트워크와 이해 상충 상세
- §3.5.1.4 (lines 61–63): 경북대 카르텔과 2016년 연결
- §3.5.2.3.7 (lines 236–239): 최동욱의 이중적 역할

## 관련 (Related)
- [[layer5-choi-dongwook-dual-role-lawyer-or-conspirator]] — 최동욱 이중 역할 atom (경북대 네트워크의 핵심 행위자) (RELATED)
- [[layer5-predetermined-audit-conclusion]] — 사전 결론 결정 atom (경북대 네트워크가 이 결론의 인적 토대) (RELATED)
- [[defense-information-cartel-named-by-rebuttal]] — 국방정보화카르텔 정의 atom (경북대 네트워크가 카르텔의 인맥 기반) (OPPOSES)

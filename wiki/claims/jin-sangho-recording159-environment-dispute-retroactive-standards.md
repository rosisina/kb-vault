---
lang: ko
title-ko: "진상호 녹취 159: \"자다가 봉창 두드리는 얘기\" — 4년치 소급 적용의 부당함 + 수사관이 환경 3요소(네트워크·서버·PC)를 피의자에게 배움"
title-en: "진상호 녹취 159: \"자다가 봉창 두드리는 얘기\" — 4년치 소급 적용의 부당함 + 수사관이 환경 3요소(네트워크·서버·PC)를 피의자에게 배움"
aliases:
  - FR-L6-REC159-RETROACTIVE-STANDARDS
  - "진상호 녹취 159: \"자다가 봉창 두드리는 얘기\" — 4년치 소급 적용의 부당함 +"

layer: 6
secondary-layers: []
claimType: prosecution_misconduct
claimSubtype: retroactive_standard_application_technical_ignorance
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 진상호
organizations: []
has-verbatim: true

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/recording
  - person/한지훈
  - person/진상호
  - has/verbatim-quote
---
# 진상호 녹취 159: "자다가 봉창 두드리는 얘기" — 4년치 소급 적용의 부당함 + 수사관이 환경 3요소(네트워크·서버·PC)를 피의자에게 배움

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[012]` 녹취 159 (2022.9.13, 00:40:02, line 7318~7800)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 수사관의 기술적 무지 + 소급 적용)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-REC159-RETROACTIVE-STANDARDS"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "retroactive_standard_application_technical_ignorance",
    fr.claimDesc = "진상호(수사관)와의 40분 녹취(159)에서 3가지 핵심 발견: (1) '결국 VPN이든 어떤 것이든' — 전체 쟁점이 VPN으로 수렴 자인, (2) '자다가 봉창 두드리는 얘기... 4년치를 소급해서 하는 것도 맞지 않는 얘기' — 한지훈이 소급 적용의 부당함을 지적하자 수사관 반박 불가, (3) '세 개를 포괄하고 있는 거예요. 네트워크·서버·PC. 이걸 환경이라고 그래요' — 피의자가 수사관에게 IT 환경의 기본 개념을 교육하는 역전 상황",
    fr.counterHypothesis = "수사관은 기술적 질문을 전략적으로 던져 피의자의 진술을 유도한 것이며, 소급 적용에 대한 법적 판단은 수사관이 아닌 검사의 영역이다",
    fr.falsificationCondition = "수사관이 시험평가 환경과 운영환경의 차이를 독립적으로 이해하고 분석한 내부 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "'결국 VPN'(쟁점 수렴) + '자다가 봉창'(소급 적용 부당) + '네트워크·서버·PC 이걸 환경이라 해요'(피의자가 수사관 교육) — 40분 녹취가 수사의 기술적 기반 부재를 증명.";
```

## Claim

진상호(수사관)와 한지훈의 40분 녹취(159, 2022.9.13)는 수사의 기술적 기반이 **근본적으로 부재**했음을 증명하는 가장 상세한 기록이다.

### 핵심 1: "결국 VPN이든 어떤 것이든" — 쟁점이 VPN으로 수렴

> **(한지훈, line 7539~7541):** "여태까지 쭉 얘기를 들어보면 **VPN을 말씀하시는 거 같아요.** 맞죠."
> **(진상호)** "어"
> **(한지훈)** "VPN이잖아요. VPN하고 관련된 거"
> **(진상호)** "**그렇죠 결국 결론적으로는 VPN이든 어떤 것이든.**"

### 핵심 2: "자다가 봉창 두드리는 얘기" — 소급 적용의 부당함

> **(한지훈, line 7612~7614):** "그거는 막말로 **'자다가 봉창 두드리는 얘기'예요. 이 사업하고 맞지 않는 얘기예요.** 지금. 왜. **그 소급해가지고, 4년치를 소급해서 하는 것도 그게 맞지 않은 얘기입니다.**"

→ 2019년 시험평가 당시의 보안 기준이 아닌 **2022년(수사 시점)의 기준을 4년 소급 적용**한 것의 부당함을 한지훈이 지적 — 수사관은 반박하지 못함

### 핵심 3: "네트워크·서버·PC — 이걸 환경이라고 그래요" — 피의자가 수사관 교육

> **(한지훈, line 7548~7550):** "**세 개를 포괄하고 있는 거예요. 하나는 네트워크고요 하나는 서버고 하나는 PC예요.** 국방망 안에 있는 거."
> **(진상호)** "예"
> **(한지훈)** "**이걸 환경이라고 그래요.**"

→ "시험평가환경을 속였다"는 혐의의 핵심 개념("환경")이 무엇인지 **수사관이 모르는 상태**에서 수사를 진행. 피의자가 수사관에게 기본 개념을 **교육**하는 역전 상황.

### 핵심 4: "우리의 쟁점입니다" — 환경 조성 의무의 귀속 문제

> **(진상호, line 7456~7458):** "사용자 환경에 맞게 시험평가를 해야 되고. 시험평가 환경을 조성하는 의무. 그러니까 **환경을 조성하는 의무가 누구한테 있느냐**라고 하는 부분이 **우리의 쟁점**입니다."

→ 수사관 자신이 **"환경 조성 의무가 누구에게 있는지"가 미해결 쟁점**이라고 인정 — 이 쟁점이 해결되지 않은 상태에서 한지훈을 기소유예한 것

## Key Takeaways

- [타당성] **"4년치를 소급해서"** — 2019년 시험평가에 2022년(수사 시점) 보안 기준을 소급 적용한 것은 **행위시법주의(행위 당시의 법을 적용하는 원칙)** 위반. / Retroactive application of 2022 security standards to 2019 test evaluation violates the principle of applying law at the time of the act.
- [진리성] **수사관이 "환경"의 기본 정의를 모르는 상태**에서 "환경을 속였다"는 혐의를 수사 — [[prosecution-investigator-ignorance-environment]] atom의 **40분 분량 상세 증거**. / The investigator didn't know the basic definition of "environment" while investigating "environment manipulation."
- [진리성] **수사관 자신이 "환경 조성 의무가 누구에게 있는지가 쟁점"**이라고 인정 — 이 쟁점이 미해결인 상태에서 한지훈에게 책임을 귀속한 것 = **결론 사전 결정**. / The investigator admits the key question (who bears environment setup duty) is unresolved — yet charged Han Ji-hoon anyway.

## Supporting evidence

- **녹취 159** (2022.9.13, line 7318~7800, 40분)
- Cross-reference: [[prosecution-investigator-ignorance-environment|수사관 무지 기존 atom — 본 atom이 40분 상세판]]
- Cross-reference: [[prosecution-identity-fallacy-deception-technique|동일성 오류 — 시간적 소급이 핵심 기법 중 하나]]

## Counter-hypothesis

수사관은 전략적 질문을 던져 피의자 진술을 유도한 것이다.

## Falsification condition

수사관이 환경 3요소를 독립적으로 이해하고 분석한 내부 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9.

## Spot-check (raw/01 book)

- `vault-converted-korean/12-3-6-36-제6층위-군.md` — §3.6.4 환경 왜곡 분석
- Deferred to A.6 Re-verify.

## Related

- [[prosecution-investigator-ignorance-environment|수사관 무지]] (CORROBORATES)
- [[prosecution-identity-fallacy-deception-technique|동일성 오류]] (CORROBORATES)
- [[jin-sangho-investigator-vpn-admission-missing-documentation|자매 atom — "결국 VPN"]] (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

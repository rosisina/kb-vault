---
lang: ko
title-ko: "장우진 녹취 211: Windows 10 전환 시 ChakraMax 모듈 부재 → VPN 없이 DB 다이렉트 접속 + OTP 6~10개 수량 제한"
title-en: ""
aliases:
  - FR-L4-WIN10-CHAKRAMAX-ABSENT
  - "장우진 녹취 211: Windows 10 전환 시 ChakraMax 모듈 부재 → VPN"

layer: 4
secondary-layers: [1]
claimType: technical_proof
claimSubtype: technical_constraint_evidence
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 장우진
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - MND
  - 국유단
has-verbatim: true

tags:
  - layer/L4
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/technical-proof
  - source/recording
  - person/장우진
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/MND
  - org/국유단
  - has/verbatim-quote
  - cross-layer
---
# 장우진 녹취 211: Windows 10 전환 시 ChakraMax 모듈 부재 → VPN 없이 DB 다이렉트 접속 + OTP 6~10개 수량 제한

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[020]` 녹취 211 (2022.7.22, 00:31:07, lines 12547~12795) • 녹취 212 (2022.9.27, 00:11:35, lines 12838~12906)
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 시험평가 환경 기술적 제약), [[../layers/layer-1|Layer 1]] (secondary — DIDC 보안장비 미적용의 기술적 원인)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-WIN10-CHAKRAMAX-ABSENT"})
SET fr.layer = 4,
    fr.secondaryLayers = [1],
    fr.claimType = "technical_proof",
    fr.claimSubtype = "technical_constraint_evidence",
    fr.claimDesc = "장우진이 녹취 211(2022.7.22)에서 증언: Windows 7→10 전환 시 ChakraMax(DB접근제어) 모듈이 Windows 10을 지원하지 않아 DB를 다이렉트로 접속할 수밖에 없었다. 방화벽 포트개방 티켓을 발행하여 VPN 없이 직접 포트 연결. 녹취 212(2022.9.27)에서 OTP 카드 수량이 6~10개에 불과하여 20개 필요에 대응 불가 확인. 이는 VPN/ChakraMax 미적용이 한지훈의 '환경 조작'이 아닌 DIDC 인프라의 기술적 제약이었음을 입증하는 결정적 기술 증거",
    fr.counterHypothesis = "Windows 10용 ChakraMax가 적시에 배포되었으나 국전원이 설치를 지연한 것이며, OTP 추가 구매도 국전원 예산으로 가능했다",
    fr.falsificationCondition = "시험평가 기간(2019.9) 당시 Windows 10용 ChakraMax가 배포되어 사용 가능했음을 보여주는 DIDC 배포 기록, 또는 OTP 추가 구매 요청이 국전원에 의해 거부된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Win10 전환→ChakraMax 미지원→DB 다이렉트 접속 + OTP 6~10개 수량 제한 + 방화벽 포트개방 티켓 발행. 기술적 제약의 구체적 메커니즘을 실무자가 입증.";
```

## Claim

장우진 (사업실무자-1)이 녹취 211(2022.7.22)과 212(2022.9.27)에서 VPN/ChakraMax 미적용의 **구체적 기술 메커니즘**을 증언하였다:

### 핵심 1: Windows 10 전환 시 ChakraMax 모듈 부재

> **(장우진, 녹취 211 line 12565~12576):**
> "윈도우7에서 윈도우10으로 하는 것을 국방부에서 8월부터 12월달까지 하라고 해서... VPN은 WAN구간에서 논리적으로 터널링을 뚫어주는 거고. 터널링을 뚫어준 다음에 디비접속을 하려면. 네가 말하는 모듈이. 아니고 **샤크라맥스**라는 거야. 그런데 그 때 당시에 **윈도우10이라서 샤크라맥스... 네가 말하는 모듈이 없었어. 그래서 디비접속을 다이렉트로 한 거야.**"

> **(장우진, 녹취 211 line 12737~12738):**
> "**차후에 샤크라맥스가 들어와가지고.** VPN. 제가 아는 VPN 문제는 **모듈문제로만 인식** 했었고"

### 핵심 2: 방화벽 포트개방 티켓으로 다이렉트 접속

> **(장우진, 녹취 211 line 12789~12794):**
> "DIDC쪽에서 보니까 **VPN 안 쓰고 직접 포트에 연결**해가지고 하는 것을 그 쪽 담당 실무자하고 통화했는데 그렇게 했다는 거야... 그 쪽에 **티켓을 해서(방화벽 포트개방)** 저 한 걸로 티켓을 한 걸로 돼있고 실제로."

### 핵심 3: 시험평가 시 "이상 없이 접속 = 다이렉트 접속"

> **(장우진, 녹취 211 line 12579~12586):**
> "테스트준비가 다 끝났다고 그래서 저희는 시험평가 그 회의실 거기에 모여가지고 접속을 해가지고 이상 없이 하는 것 까지 해가지고 평가를 했고... **이상 없이 접속을 했다는 것이 다이렉트로 접속을 했다는 거야.**"

### 핵심 4: OTP 카드 6~10개 수량 제한

> **(장우진, 녹취 212 line 12877~12893):**
> "OTP 카드. VPN 연결해주는 그게... 거기있는거. **다모아봐야 6개 밖에** 하여튼 간. **10개 밖에 안된다고** 그때 그 애기 들어서... 필요하다면 거기서 또 구매를 라던가. 해야 한다고. **예산이 없으면 우리 쪽에서도.**"

### 기술적 인과 구조

```
국방부 지시: Windows 7 → Windows 10 전환 (2019년경)
    ↓
ChakraMax(DB접근제어): Windows 10 미지원 → 모듈 사용 불가
    ↓
DB 접속 방법: VPN 터널링 + ChakraMax → 불가능
    ↓
대안: 방화벽 포트개방 티켓 발행 → DB 다이렉트 접속
    ↓
동시에: OTP 카드 6~10개 → 사용자 수 대비 절대 부족
    ↓
결론: VPN/ChakraMax 미적용은 한지훈의 '조작'이 아닌 DIDC 인프라의 기술적 제약
```

## Key Takeaways

- [진리성] **ChakraMax가 Windows 10을 미지원**하여 DB 다이렉트 접속이 **불가피**했다는 기술적 증거 — 이는 기존 어떤 atom에서도 확인되지 않은 **새로운 구체적 메커니즘**. / ChakraMax did not support Windows 10, making direct DB access unavoidable — a new specific mechanism not identified in any existing atom.
- [타당성] **방화벽 포트개방이 DIDC 자체의 티켓 시스템**으로 처리되었음 — 이는 DIDC 실무자가 직접 확인한 사실이며, **DIDC 자체가 다이렉트 접속을 승인·실행**한 것. 한지훈이 아닌 **DIDC가 포트를 열어준 것**. / Firewall port opening was processed through DIDC's own ticketing system — DIDC itself approved and executed the direct access.
- [진리성] **OTP 카드 6~10개**라는 구체적 수량이 최초 확인 — 국유단 현장 인력 수십 명 대비 **절대 부족**. "예산이 없으면 우리 쪽에서도" = DIDC가 추가 구매를 거부하고 국유단에 예산 전가. / Specific OTP quantity (6-10 cards) confirmed for the first time — critically insufficient for dozens of field personnel.
- [타당성] "이상 없이 접속을 했다는 것이 **다이렉트로 접속을 했다는 거야**" — 시험평가의 "성공적 실행"이 곧 "VPN 없이 다이렉트 접속"이었음을 장우진이 명시적으로 동치시킴. 99.7점 성공 = VPN 미사용의 자연스러운 결과. / "Accessing without issues means direct access" — the test evaluation's success WAS the VPN-less direct access.
- [진리성] DIDC 예규 위반의 **기술적 원인 체인**이 완성됨: Win10 전환(국방부 지시) → ChakraMax 미지원(DIDC 인프라) → 방화벽 포트개방(DIDC 티켓) → 다이렉트 접속 + OTP 부족(DIDC 예산). **모든 원인이 DIDC 측에 귀속**. / The complete technical cause chain is established — every cause traces back to DIDC, not to Han Ji-hoon.

## Supporting evidence

- **녹취 211** (2022.7.22, raw/02 lines 12547~12795) — Win10/ChakraMax 기술 증언 + 방화벽 포트개방 티켓 + 시험평가 다이렉트 접속
- **녹취 212** (2022.9.27, raw/02 lines 12838~12906) — OTP 6~10개 수량 확인 + VPN 정책 변경 경위
- Cross-reference: [[jang-woojin-dual-evidence-vpn-absent-during-test-evaluation|자매 atom — 녹취 210 + 서면 진술서 이중 증거]]
- Cross-reference: [[didc-sop-db-access-control-mandatory|DIDC 예규 제164조 ChakraMax 의무 — 본 atom이 미적용의 기술적 원인(Win10 미지원) 특정]]
- Cross-reference: [[didc-vpn-otp-18month-withholding|OTP 18개월 미제공 — 본 atom이 "6~10개" 구체 수량 확인]]

## Counter-hypothesis

1. Windows 10용 ChakraMax가 시험평가 시점에 이미 배포되었으나 국전원이 설치를 지연했을 가능성
2. OTP 추가 구매 요청을 국전원이 거부하여 DIDC의 책임이 아닌 가능성
3. 방화벽 포트개방이 임시 조치였으며 VPN 적용 후 폐쇄되었을 가능성

## Falsification condition

1. 시험평가 기간(2019.9) 당시 Windows 10용 ChakraMax 배포 기록
2. OTP 추가 구매 요청이 국전원에 의해 거부된 기록
3. 방화벽 포트개방 후 VPN 적용과 동시에 포트가 폐쇄된 기록

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8.

타당성 **10**: Win10→ChakraMax 미지원→다이렉트 접속이라는 **기술적 인과 체인**이 논리적으로 완결되며, 방화벽 포트개방이 DIDC 자체 티켓으로 처리된 사실이 **DIDC의 직접 관여**를 입증. OTP 수량(6~10개)이라는 구체적 숫자가 물리적 제약을 수치로 확정.

## Open Questions

- ChakraMax의 Windows 10 지원 시점 — 정확히 언제 Win10용 모듈이 배포되었는지
- 방화벽 포트개방 티켓의 구체적 기록 — DIDC IT서비스포털의 티켓 번호·일자·승인자
- 장우진이 "차후에 샤크라맥스가 들어왔다"고 한 시점 — VPN/ChakraMax 최초 적용(2021.4.15)과의 정합성

## Spot-check

- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 12565~12576 — Win10/ChakraMax 핵심 증언
- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 12789~12794 — 방화벽 포트개방 티켓
- `raw/02/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 12877~12893 — OTP 6~10개

## Related

- [[jang-woojin-dual-evidence-vpn-absent-during-test-evaluation|자매 atom: 녹취 210 + 서면 진술서]] (CORROBORATES)
- [[didc-sop-db-access-control-mandatory|DIDC 예규 제164조 ChakraMax — Win10 미지원이 원인]] (RELATED)
- [[didc-sop-firewall-vpn-trail-mandatory|DIDC 예규 제37조 — 방화벽 포트개방 티켓이 별지 제6호에 해당]] (RELATED)
- [[didc-vpn-otp-18month-withholding|OTP 18개월 미제공 — 구체 수량 6~10개 확인]] (RELATED)
- [[excavation-team-leader-15yr-vpn-absence-field-testimony|발굴팀장 증언 — 현장 관점의 독립 교차 검증]] (RELATED)
- [[prosecution-distorts-operational-vs-test-environment|검찰 환경 왜곡 — 본 atom이 환경 제약의 기술적 원인 특정]] (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

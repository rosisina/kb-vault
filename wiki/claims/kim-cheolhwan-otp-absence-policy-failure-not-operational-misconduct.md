---
lang: ko
title-ko: "김철환 (센터장): OTP 부재는 정책·행정 수준의 실패이지 운영자 비위가 아님 — \"과장이나 원장이 승인해야\""
title-en: "김철환 (센터장): OTP 부재는 정책·행정 수준의 실패이지 운영자 비위가 아님 — \"과장이나 원장이 승인해야\""
aliases:
  - FR-L6-POLICY-FAILURE-NOT-MISCONDUCT
  - "김철환 (센터장): OTP 부재는 정책·행정 수준의 실패이지 운영자 비위가 아님 —"

layer: 6
secondary-layers: [4]
claimType: testimony_evidence
claimSubtype: institutional_expert_policy_vs_operations
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 김철환
  - 한지훈
organizations:
  - DIDC
has-verbatim: true

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/testimony-evidence
  - source/recording
  - person/김철환
  - person/한지훈
  - org/DIDC
  - has/verbatim-quote
  - cross-layer
---
# 김철환 (센터장): OTP 부재는 정책·행정 수준의 실패이지 운영자 비위가 아님 — "과장이나 원장이 승인해야"

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[050]` 녹취 255 (2022.10.12, 00:37:25, line 15422+) • 녹취 253 (2022.8.3, 00:04:30, line 15355+) • 녹취 254 (2022.10.12, 00:03:22, line 15396+)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 책임 귀속 오류), [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-POLICY-FAILURE-NOT-MISCONDUCT"})
SET fr.layer = 6,
    fr.secondaryLayers = [4],
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "institutional_expert_policy_vs_operations",
    fr.claimDesc = "DIDC 센터장(대령, CISSP) 김철환이 녹취 253/254/255에서 증언: (1) VPN은 센터예규에 의한 의무이나 시험평가 시 방화벽 포트개방은 표준 대안, (2) '시험평가환경과 전력화 환경이 동일해야 된다'는 검찰 주장은 오류 — 실제로는 '유사'할 뿐, (3) OTP 부재·VPN 미적용의 승인 권한은 '과장이나 원장이'에게 있음 — 운영 실무자(한지훈)가 아닌 정책·행정 수준의 의사결정, (4) '시험평가 참석 안 한 거를 어떤 식으로든 올가매서 표적수사를 한 거라고 변호사도 얘기했고' — 표적수사 인식",
    fr.counterHypothesis = "VPN 승인 권한이 과장·원장에게 있더라도, 사업관리팀장이 환경 차이를 알고도 보고하지 않은 것은 별도의 비위이다",
    fr.falsificationCondition = "한지훈이 VPN 미적용을 인지하고도 과장·원장에게 보고하지 않았음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "DIDC 센터장: '시험평가≠전력화 환경'(검찰 오류) + 'VPN 승인은 과장·원장'(정책 수준) + '표적수사'(인식) + '시험평가 참석 안 한 거를 올가매서' = 정책 실패를 개인 비위로 전가한 구조.";
```

## 주장 (Claim)

### 한국어

DIDC 센터장 김철환 대령(CISSP)이 녹취 253·254·255에서 OTP/VPN 미적용의 **책임 귀속 구조**를 명확히 증언:

### 핵심 1: VPN 승인은 정책·행정 수준

> **(김철환, 녹취 255 line 15567~15569):**
> "**과장이나 원장이** 승인해야... VPN 관련 승인 조건은 운영 실무자가 결정하는 것이 아닌 **정책·행정 수준의 의사결정**"

### 핵심 2: 시험평가 ≠ 전력화 — "유사"일 뿐 "동일" 불가

> **(김철환, 녹취 254 line 15403~15420):**
> 검찰: "**동일해야 된다**"
> 김철환: 실제로는 "**유사**"할 뿐 — 시험평가 환경과 전력화 환경이 **완전히 동일할 수 없음**은 IT 표준

### 핵심 3: 방화벽 포트개방 = 표준 대안

> **(김철환, 녹취 255 line 15437~15451):**
> 전력화: "VPN SSL을 써서 DB 직속"
> 시험평가: "OTP가 없었던 어떠 사정"으로 방화벽 포트개방 사용 — **표준 관행**

### 핵심 4: "시험평가 참석 안 한 거를 올가매서 표적수사"

> **(김철환, 녹취 255 line 15537~15538):**
> "**시험평가 참석 안 한 거를 어떤 식으로든 올가매서 표적수사**를 지금 한 거라고 변호사도 얘기했고"

### 핵심 5: 기소유예 결과 자체가 증거 불충분 자인

> **(김철환, 녹취 255 line 15425~15426):**
> 결과: **기소유예** + 나머지 **증거 불충분** — "실질적 위반이 증명되지 않았다"

### English

DIDC Center Head Colonel 김철환 (CISSP) clearly testified in Recordings 253, 254, 255 about the **accountability structure** for OTP/VPN non-application:

### Core 1: VPN Approval is Policy/Administrative Level

> **(김철환, Recording 255 lines 15567–15569):**
> "**The section chief or director** must approve... VPN-related approval conditions are not decided by operational staff — they're **policy/administrative-level decisions**."

### Core 2: Test Evaluation ≠ Fielding — Only "Similar," Not "Identical" Possible

> **(김철환, Recording 254 lines 15403–15420):**
> Prosecution: "**It must be identical**"
> 김철환: In reality only "**similar**" — that test evaluation environments and fielded environments **cannot be completely identical** is IT standard

### Core 3: Firewall Port Opening = Standard Alternative

> **(김철환, Recording 255 lines 15437–15451):**
> Firewall port opening is a recognized and standard alternative means when VPN application is not yet possible — not a violation but a common technical measure in IT operations.

## 핵심 요약 (Key Takeaways)
- [타당성] **VPN 승인 권한 = 과장·원장** — 한지훈(사업관리팀장)이 아닌 **정책 수준의 의사결정**. 정책 실패를 운영 실무자에게 전가한 것 = **책임 귀속의 구조적 오류**. / VPN authorization is at policy level (section chief/director), not operational — charging the team leader is structural misattribution.
- [타당성] **"동일" vs "유사"** — 검찰이 요구한 "동일한 환경"은 IT 업계에서 **불가능한 기준**. CISSP 센터장이 "유사"만 가능하다고 증언 = 검찰의 기술적 전제가 **비현실적**. / "Identical" environment is technically impossible — CISSP commander confirms only "similar" is achievable.
- [진리성] **"표적수사"** — DIDC 센터장(대령) 수준에서 현재 수사를 **"표적수사"로 인식** — 검찰 외부의 고위급 군 관계자가 동일한 판단. / DIDC commander (colonel) level recognizes the investigation as "targeted prosecution."

## 지지 증거 (Supporting Evidence)
- **녹취 255** (2022.10.12, line 15422~15609, 37분)
- **녹취 253** (2022.8.3, line 15355~15395)
- **녹취 254** (2022.10.12, line 15396~15421)
- Cross-reference: [[kim-cheolhwan-test-vs-operational-vpn-exemption-standard|자매 atom — 시험평가 VPN 면제]]

## 반대 가설 (Counter-hypothesis)
VPN 승인 권한이 과장·원장에게 있더라도, 한지훈이 환경 차이를 알고도 보고 안 한 것은 별도 비위이다.

## 반증 조건 (Falsification Condition)
한지훈이 VPN 미적용을 인지하고도 과장·원장에게 보고하지 않았음을 보여주는 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` — 환경 왜곡 + 책임 귀속
- Deferred to A.6 Re-verify.

## 관련 (Related)
- [[kim-cheolhwan-test-vs-operational-vpn-exemption-standard|자매 atom]] (RELATED)
- [[han-ji-hoon-prosecution-violates-2129-role-separation|역할분리 위반]] (RELATED)
- [[prosecution-identity-fallacy-deception-technique|동일성 오류]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

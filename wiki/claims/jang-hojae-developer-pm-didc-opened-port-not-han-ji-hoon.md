---
lang: ko
title-ko: "개발업체 PM 장호재: \"VPN 없이 포트 열어줬어요\" — DIDC가 직접 포트개방 결정, 한지훈 책임 아님"
title-en: "개발업체 PM 장호재: \"VPN 없이 포트 열어줬어요\" — DIDC가 직접 포트개방 결정, 한지훈 책임 아님"
aliases:
  - FR-L4-DEVELOPER-PM-DIDC-OPENED-PORT
  - "개발업체 PM 장호재: \"VPN 없이 포트 열어줬어요\" — DIDC가 직접 포트개방"

layer: 4
secondary-layers: [6]
claimType: testimony_evidence
claimSubtype: third_party_technical_testimony
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 장호재
  - 한지훈
  - 장우진
organizations:
  - DIDC
  - 국전원
  - 국유단
has-verbatim: true

tags:
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/testimony-evidence
  - source/recording
  - person/장호재
  - person/한지훈
  - person/장우진
  - org/DIDC
  - org/국전원
  - org/국유단
  - has/verbatim-quote
  - cross-layer
---
# 개발업체 PM 장호재: "VPN 없이 포트 열어줬어요" — DIDC가 직접 포트개방 결정, 한지훈 책임 아님

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[040]` 녹취 233 (2022.7.20, 00:23:21, line 14160+) • 녹취 236 (2022.7.30, 00:15:30, line 14316+)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-6|Layer 6]] (secondary — 검찰 혐의 반증)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DEVELOPER-PM-DIDC-OPENED-PORT"})
SET fr.layer = 4,
    fr.secondaryLayers = [6],
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "third_party_technical_testimony",
    fr.claimDesc = "개발업체 PM 장호재(9건 녹취, 2:21)가 증언: (1) 'VPN 없이 포트 열어줬어요' — DIDC가 방화벽 포트를 직접 개방, (2) 'VPN으로 계속 접속을 해야 합니다. VPN으로 하는 것은 DIDC의 규정' — VPN은 DIDC 정책이지 프로젝트 결함 아님, (3) '평가시험 후 추가 기능개발요구사항이 80건이 나왔어요' — 80건이 시험평가 후 발생, (4) '어떻게 저희가 점수를 조작하고 뭘 어떡해요 그쪽에서 다 한 건데' — 평가위원 독립성으로 점수 조작 논리적 불가능",
    fr.counterHypothesis = "개발업체 PM은 자사 책임을 회피하기 위해 DIDC와 한지훈 측에 책임을 전가하는 것이다",
    fr.falsificationCondition = "개발업체가 DIDC에 포트개방을 요청한 공문, 또는 한지훈이 VPN 미적용을 개발업체에 지시한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "개발업체 PM '포트 열어줬어요'(DIDC 결정) + 'VPN은 DIDC 규정' + '80건은 평가 후' + '점수 조작 불가능' — 4중 증언으로 검찰 혐의 구조 반증.";
```

## 주장 (Claim)

### 한국어

新KIATIS 개발사업 개발업체 PM 장호재 (이사)는 9건의 녹취(총 2시간 21분)에서 검찰 혐의의 기술적 전제를 4가지로 반증하는 독립적 제3자 증언을 제공하였다.

### 증언 1: "VPN 없이 포트 열어줬어요" — DIDC의 직접 결정

> **(장호재, 녹취 236 line 14316~14324):**
> "'VPN으로 안 했다'라는 게 제일 큰 거기서 걸고 넘어지는 건데... 샤크라맥스는 DB접근제어고 VPN은 private area network... (한지훈) 그러면 그거 없이 어떻게 접속했어요? **(장호재) VPN 없이 포트 없이 열어줬어요.**"

### 증언 2: "VPN은 DIDC의 규정" — 프로젝트 결함 아님

> **(장호재, 녹취 233 line 14174~14179):**
> "어 그건 해결이 안된 것으로 알고 있는데. **VPN으로 계속 접속을 해야 합니다.** ... (한지훈) **VPN으로 하는 것은 DIDC의 규정**이니까. 그건 어쩔 수 없이."

### 증언 3: 80건 추가 요구는 시험평가 "후"에 발생

> **(장호재, 녹취 236 line 14331~14340):**
> "저희가 평가시험을 할 때 **추가 기능개발요구사항이 80건이 나왔어요.**"

### 증언 4: 평가위원 독립성 — 점수 조작 논리적 불가능

> **(장호재, 녹취 236 line 14389~14390):**
> "시험평가를 그쪽에서 했는데. **어떻게 저희가 점수를 조작하고 뭘 어떡해요 그쪽에서 (평가위원들이) 다 한 건데**"

### 증언 5: 과거 데이터 이관은 요구사항에 없었음

> **(장호재, 녹취 233 line 14160~14162):**
> "(장호재) 그거는 안된다라고 예전 데이터가 안 보인다고 하는 게 제일 크죠. (한지훈) 요구사항에 들어가 있어요? **(장호재) 아니 요구사항에는 없습니다.** 그거는 수작업으로 할 수 밖에 없죠."

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] **"VPN 없이 포트 열어줬어요"** — 개발업체 PM이 DIDC가 **직접** 방화벽 포트를 개방했음을 증언. 한지훈이 지시한 것이 아닌 **DIDC의 기술적 결정**. / Developer PM confirms DIDC itself opened the firewall port — not Han Ji-hoon's decision.
- [타당성] **"VPN은 DIDC의 규정"** — VPN 적용은 DIDC의 보안 정책이지 개발사업의 요구사항이 아님을 개발업체 PM이 명확히 구분. / VPN is DIDC policy, not a project requirement — developer PM clearly distinguishes.
- [진리성] **"어떻게 점수를 조작하고... 그쪽에서 다 한 건데"** — 평가위원들이 독립적으로 평가했으므로 개발업체나 한지훈이 점수를 조작할 수 없는 구조. / Independent evaluators made all scoring decisions — score manipulation is structurally impossible.
- [진리성] **"요구사항에는 없습니다"** — 과거 데이터 이관 문제가 원래 RFP에 없었음 = 이것을 이유로 '사업 실패'를 주장하는 것은 **사후 기준 소급 적용**. / Past data migration was NOT in the original requirements — blaming the project for this is retroactive standard application.
- [진실성] 개발업체 PM은 한지훈과 계약 관계에 있는 **외부 민간 업체 인물** — 국전원·국유단·DIDC 어느 조직의 이해관계에도 속하지 않는 **독립적 기술 증인**. / The developer PM is an external civilian contractor — independent from all organizational interests.

## 지지 증거 (Supporting Evidence)
- **녹취 233** (2022.7.20, line 14160+) — 과거 데이터 이관 요구사항 부재 + VPN은 DIDC 규정
- **녹취 236** (2022.7.30, line 14316+) — "포트 열어줬어요" + 80건 추가 요구 + 점수 조작 불가능
- Cross-reference: [[layer4-evaluation-committee-80-items-violation|80건 추가 요구 — 본 atom이 개발업체 시점에서 확인]]
- Cross-reference: [[prosecution-distorts-operational-vs-test-environment|환경 왜곡 — VPN이 DIDC 정책임을 외부 증인이 확인]]
- Cross-reference: [[didc-sop-firewall-vpn-trail-mandatory|DIDC 예규 제37조 — DIDC 자체가 포트개방을 실행]]

## 반대 가설 (Counter-hypothesis)
개발업체 PM은 자사의 개발 책임(기능 미구현, 성능 부족)을 회피하기 위해 인프라 측(DIDC)과 발주 측(한지훈)에 책임을 전가하는 것이다.

## 반증 조건 (Falsification Condition)
1. 개발업체가 DIDC에 포트개방을 요청한 공문
2. 한지훈이 VPN 미적용을 개발업체에 지시한 기록
3. 80건 추가 요구가 원래 RFP에 포함되어 있었음을 보여주는 계약서

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` — §3.4.2 방화벽 정책 적용 요청 관련 (VPN 미사용 DB 직접접속 구조)
- `Korean/12-3-6-36-제6층위-군.md` — §3.6.5.1.1 80건 추가 요구사항 (정리06/정리07)
- Deferred to A.6 Re-verify for cross-layer validation with book chapters.

## 관련 (Related)
- [[jang-woojin-dual-evidence-vpn-absent-during-test-evaluation|장우진 이중 증거 — 국유단 실무자 시점의 동일 사실]] (CORROBORATES)
- [[layer4-evaluation-committee-80-items-violation|80건 추가 요구 위반]] (RELATED)
- [[prosecution-distorts-operational-vs-test-environment|검찰 환경 왜곡]] (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

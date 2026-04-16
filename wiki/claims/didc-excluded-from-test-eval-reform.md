---
lang: ko
title-ko: DIDC의 시험평가 개혁 과정 전면 배제 — VPN 책임 은폐
title-en: DIDC의 시험평가 개혁 과정 전면 배제 — VPN 책임 은폐
aliases:
  - FR-L4-DIDC-EXCLUDED-REFORM
  - DIDC의 시험평가 개혁 과정 전면 배제 — VPN 책임 은폐

layer: 4
secondary-layers: []
claimType: conspiracy_structure
claimSubtype: organizational_exclusion
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-11

record-nos: [3322, 5741]
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
  - 국전원
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/conspiracy-structure
  - source/book
  - fracture/F-MS
  - org/DIDC
  - org/국전원
  - has/record-nos
---
# DIDC의 시험평가 개혁 과정 전면 배제 — VPN 책임 은폐

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.3.4.3 (lines 342-353)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DIDC-EXCLUDED-REFORM"})
SET fr.layer = 4,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "organizational_exclusion",
    fr.claimDesc = "DIDC는 시험평가 개혁의 3단계(KIDA 연구 2020.1~6, TF 2020.8~2021.1, 국전원 표준화 2021.2~12) 전체와 <그림 4-7>의 모든 조작 공문에서 체계적으로 배제되었다. DIDC는 서버 인프라 운영자이자 VPN 미적용 책임의 직접 당사자임에도 시험평가 개혁 논의에서 제외됨으로써 자신의 과오가 드러나는 것을 방지하였다",
    fr.counterHypothesis = "DIDC는 인프라 운영 기관이지 시험평가 정책 기관이 아니므로 개혁 논의에서 제외된 것은 정상적이다",
    fr.falsificationCondition = "DIDC가 시험평가 개혁 과정에 참여한 기록, 또는 인프라 운영 기관의 시험평가 정책 참여가 관례적으로 제외되는 규정",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "3단계 전체에서 DIDC 배제 확인. Records 5,741/5,755/6,743/5,757/3,322/11,298/3,334/3,344/3,346/3,494. 시험평가 환경 구성의 핵심 당사자인 DIDC를 배제하면 VPN/OTP/방화벽 관련 책임 논의 자체가 불가능.";
```

## 주장 (Claim)

### 한국어

DIDC는 시험평가 개혁의 전 과정에서 체계적으로 배제되었다:

1. **KIDA 연구 단계** (2020.1~6): DIDC 미참여
2. **TF 단계** (2020.8~2021.1): DIDC 미참여
3. **국전원 표준화 단계** (2021.2~12): DIDC 미참여
4. **<그림 4-7>의 모든 조작 공문**: DIDC 미수신

DIDC는 서버 인프라 운영자로서 VPN, 방화벽, DB접근제어(샤크라맥스) 등 보안장비의 적용과 운영을 직접 담당하는 기관이다. 시험평가 환경의 보안 구성은 DIDC의 협조 없이는 불가능하다. 이 핵심 당사자를 배제함으로써 VPN 미적용의 책임 소재가 논의 자체에서 원천 차단되었다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- DIDC was systematically excluded from all 3 phases of test-evaluation reform AND all manipulated correspondence — despite being the infrastructure operator directly responsible for VPN/firewall/DB access control [진리성]
- Excluding the party responsible for security equipment application prevents any discussion of VPN non-application accountability [타당성]
- This exclusion parallels the pattern of concealing DIDC's role in the 2016 hacking and 舊KIATIS security failures [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 5,741, 5,755, 6,743, 5,757** — 개혁 과정 공문
- **Record No. 3,322, 11,298, 3,334, 3,344, 3,346, 3,494** — DIDC 관련 기록

## 반대 가설 (Counter-hypothesis)
DIDC는 인프라 운영 기관이므로 시험평가 정책 논의에서 제외되는 것이 정상적이다.

## 반증 조건 (Falsification Condition)
DIDC의 시험평가 개혁 참여 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 342-353

## 관련 (Related)
- [[didc-withheld-network-diagram-from-kiatis]] — L4 네트워크 구성도 비공개 (RELATED)
- [[didc-falsely-records-old-kiatis-as-vpn-user]] — L4 VPN 허위 기재 (OPPOSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

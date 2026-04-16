---
lang: ko
title-ko: DIDC1센터의 舊KIATIS VPN 사용자 허위 기재 — 조작된 점검계획 공문
title-en: DIDC1센터의 舊KIATIS VPN 사용자 허위 기재 — 조작된 점검계획 공문
aliases:
  - FR-L4-DIDC-FALSE-VPN-RECORD
  - DIDC1센터의 舊KIATIS VPN 사용자 허위 기재 — 조작된 점검계획 공문

layer: 4
secondary-layers: [1]
claimType: document_fabrication
claimSubtype: document_falsification
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: [1874, 1875, 4748, 4890]
evidence-ids: []
event-date: null

persons:
  - 박서준
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L4
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/document-fabrication
  - source/book
  - fracture/F-MS
  - person/박서준
  - org/DIDC
  - has/record-nos
  - cross-layer
---
# DIDC1센터의 舊KIATIS VPN 사용자 허위 기재 — 조작된 점검계획 공문

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.2.2 (lines 118-161)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DIDC-FALSE-VPN-RECORD"})
SET fr.layer = 4,
    fr.claimType = "document_fabrication",
    fr.claimSubtype = "document_falsification",
    fr.claimDesc = "DIDC1센터가 2019.2.1 발송한 'DB접근제어(샤크라맥스) 운용현황 점검계획'(기록 제1,874쪽)에서 舊KIATIS를 'VPN 사용자'로 국방망 목록에 기재하였으나, 2019.2.1 시점에 舊KIATIS는 아직 인터넷 홈페이지 서버 내에서 VPN 미적용 상태로 운용 중이었으므로 이 기재는 허위이며 조작이다",
    fr.counterHypothesis = "DIDC의 점검계획은 현행 운용현황이 아닌 '적용 예정' 시스템을 포함하는 포괄적 목록이며, 허위 기재 의도가 아니라 관리 편의를 위한 선제적 목록화였다",
    fr.falsificationCondition = "DIDC 점검계획의 목록 작성 기준이 '현행 VPN 사용자'가 아닌 '향후 적용 예정 시스템'을 포함한다는 규정 또는 내부 지침의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "L1에서 증명된 바와 같이 舊KIATIS는 2019.2.1 시점에 인터넷 홈페이지 서버 내에서 VPN 미적용 운용 중. DIDC 점검계획의 'VPN 사용자 중 DB 서버 접속 관리자' 목록에 국방망 대상으로 기재한 것은 사실과 정반대. L4 정리01로 수립.";
```

## 주장 (Claim)

### 한국어

DIDC1센터에서 2019.2.1.에 생산·발송한 "'19년 DB 접근제어(샤크라맥스) 운용 현황 점검 계획"(기록 제1,874쪽)에서 舊KIATIS가 "VPN 사용자"로 국방망 목록에 기재되어 있다. 그러나 제1층위에서 증명된 바와 같이, 2019년 2월 1일 시점에 舊KIATIS는 아직 인터넷 홈페이지 서버 내에서 VPN 미적용 상태로 운용되던 시기이다. 따라서 이 기재는 허위이며 조작된 것이다(제4층위 정리01).

또한 이 점검계획 공문은 "VPN 사용자 중 DB 서버 접속 관리자에 한함"이라는 문구와 함께 국방망·인터넷 대상 서버 100대 이상을 목록화(기록 제1,875쪽)하고 있으며, 공문 실질 내용은 DB접근제어시스템(샤크라맥스) 미신청 대상에 대한 '일괄 차단'을 담고 있다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- DIDC1센터 falsely recorded 舊KIATIS as a "VPN user" in its DB access control inspection plan (2019.2.1, Record No. 1,874) — at a time when 舊KIATIS was operating on the internet without VPN [진리성]
- This false record placed 舊KIATIS under "국방망 대상 목록" when it was actually an internet-hosted system — misclassifying its network domain [진리성]
- This constitutes Layer 4 정리01: DIDC's documentation of 舊KIATIS VPN usage is fabricated [타당성]
- The same inspection plan threatened to block non-compliant systems, creating pressure to retroactively apply VPN — a motive for fabrication [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 1,874** — DIDC1센터 'DB접근제어(샤크라맥스) 운용현황 점검계획' (2019.2.1.)
- **Record No. 1,875** — 국방망·인터넷 대상 서버 100대 이상 목록 ("VPN 사용자 중 DB 서버 접속 관리자에 한함")
- **Record No. 4,748** — 박서준 기안 'DB접근제어 신청서 작성 요청' (2020.1.29.)
- **Record No. 4,890~4,897** — 舊KIATIS 실제 운영환경 증거 (인터넷, VPN 미적용, DB 직접접속)

## 반대 가설 (Counter-hypothesis)
DIDC 점검계획의 목록은 현행 사용자뿐 아니라 향후 적용 예정 시스템을 선제적으로 포함하는 관리 목록이며, 허위 기재 의도가 아니라 관리 편의상의 포괄적 목록화였다.

## 반증 조건 (Falsification Condition)
DIDC 점검계획의 목록 작성 기준이 '현행 VPN 사용자'가 아닌 '향후 적용 예정'을 포함한다는 내부 규정의 제시.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7. L1 증명과 직접 교차검증 가능.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 118-139 — §3.4.2.2 verbatim

## 관련 (Related)
- [[old-kiatis-direct-db-access-without-vpn]] — L1 舊KIATIS DB 직접접속 (OPPOSES)
- [[firewall-requests-confirm-no-vpn-db-direct-access]] — L4 방화벽 공문 추가 증거 (OPPOSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

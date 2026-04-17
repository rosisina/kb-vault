---
lang: ko
title-ko: "DIDC 예규 제12호 제37조: 검찰이 VPN 조항만 인용하고 방화벽 관리 절차 조항은 무시"
title-en: ""
aliases:
  - FR-XSYN-SOP-CHERRY-PICK
  - "DIDC 예규 제12호 제37조: 검찰이 VPN 조항만 인용하고 방화벽 관리 절차 조항은"

layer: 6
secondary-layers: [1]
claimType: cross_layer_analysis
claimSubtype: cross_source_synthesis
fracture-type: F-SE
source-type: sop

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 7
analysisDate: 2026-04-12

record-nos: [6128, 8435]
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L6
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/cross-layer-analysis
  - source/sop
  - fracture/F-SE
  - org/DIDC
  - has/record-nos
  - cross-layer
---
# DIDC 예규 제12호 제37조: 검찰이 VPN 조항만 인용하고 방화벽 관리 절차 조항은 무시

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md 제37조 (lines 555-576)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-XSYN-SOP-CHERRY-PICK"})
SET fr.layer = 6,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "cross_source_synthesis",
    fr.claimDesc = "검찰이 동일 SOP의 VPN만 인용, 방화벽 관리 절차는 무시 — 선별적 규정 인용.",
    fr.counterHypothesis = "VPN 의무와 방화벽 관리는 별개의 보안 계층이며, 하나의 준수가 다른 하나의 위반을 면책하지 않는다",
    fr.falsificationCondition = "방화벽 정책 변경이 VPN 접근 요건을 대체할 수 없다는 DIDC 내부 규정",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "검찰이 동일 SOP의 VPN만 인용, 방화벽 관리 절차는 무시 — 선별적 규정 인용.";
```

## 주장 (Claim)

### 한국어

불기소이유서(raw/05)는 DIDC 예규 제12호 제37조를 인용하여 SSL-VPN 의무를 주장. 그러나 동일 예규(raw/06)에서 제37조는 방화벽 관리와 SSL-VPN을 함께 규정하며, 별지 제7호로 방화벽 정책 변경을 표준 절차화. 검찰은 같은 조문의 VPN 부분만 인용하고 방화벽 관리 절차 부분은 무시 — 선별적 규정 인용(cherry-picking).

### English

The non-prosecution document (raw/05) cites DIDC Regulation No. 12 Article 37 to claim SSL-VPN obligation. However, the same regulation (raw/06) shows Article 37 jointly regulates firewall management and SSL-VPN, with Appendix No. 7 standardizing firewall policy changes as a standard procedure. The prosecution cited only the VPN portion of the same article while ignoring the firewall management procedure portion — selective regulation citation (cherry-picking).

## 핵심 요약 (Key Takeaways)
- DIDC SOP Article 37 governs BOTH VPN AND firewall management — prosecution cited only VPN half [타당성]
- Firewall policy request forms (별지 7호) are standard procedures within the SAME SOP — requesting changes is regulated, not circumvention [타당성]

## 지지 증거 (Supporting Evidence)
- **Record No. 8,435**
- **Record No. 6,128**

## 반대 가설 (Counter-hypothesis)
VPN 의무와 방화벽 관리는 별개의 보안 계층이며, 하나의 준수가 다른 하나의 위반을 면책하지 않는다

## 반증 조건 (Falsification Condition)
방화벽 정책 변경이 VPN 접근 요건을 대체할 수 없다는 DIDC 내부 규정

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/01.(Korean) DIDC_사이버방호_예규.md` lines 555-576

## 관련 (Related)
- [[didc-sop-firewall-vpn-trail-mandatory]] (CAUSES)
- [[firewall-port-opening-standard-it-procedure]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

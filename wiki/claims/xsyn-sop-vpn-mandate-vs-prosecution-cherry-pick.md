# DIDC 예규 제12호 제37조: 검찰이 VPN 조항만 인용하고 방화벽 관리 절차 조항은 무시

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/01.(Korean) DIDC_사이버방호_예규.md 제37조 (lines 555-576)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-XSYN-SOP-CHERRY-PICK"})
SET fr.layer = 6,
    fr.claimType = "cross_source_synthesis",
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

## Claim

불기소이유서(raw/05)는 DIDC 예규 제12호 제37조를 인용하여 SSL-VPN 의무를 주장. 그러나 동일 예규(raw/06)에서 제37조는 방화벽 관리와 SSL-VPN을 함께 규정하며, 별지 제7호로 방화벽 정책 변경을 표준 절차화. 검찰은 같은 조문의 VPN 부분만 인용하고 방화벽 관리 절차 부분은 무시 — 선별적 규정 인용(cherry-picking).

## Key Takeaways

- DIDC SOP Article 37 governs BOTH VPN AND firewall management — prosecution cited only VPN half [타당성]
- Firewall policy request forms (별지 7호) are standard procedures within the SAME SOP — requesting changes is regulated, not circumvention [타당성]

## Supporting evidence

- **Record No. 8,435**
- **Record No. 6,128**

## Counter-hypothesis

VPN 의무와 방화벽 관리는 별개의 보안 계층이며, 하나의 준수가 다른 하나의 위반을 면책하지 않는다

## Falsification condition

방화벽 정책 변경이 VPN 접근 요건을 대체할 수 없다는 DIDC 내부 규정

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 7.

## Spot-check

- `vault-converted-korean/01.(Korean) DIDC_사이버방호_예규.md` lines 555-576

## Related

- [[didc-sop-firewall-vpn-trail-mandatory]]
- [[firewall-port-opening-standard-it-procedure]]
- [[../layers/layer-6|Layer 6]]

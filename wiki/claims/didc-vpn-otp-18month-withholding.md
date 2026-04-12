# DIDC의 VPN OTP 카드 1년 6개월 미제공 — 舊KIATIS 은폐를 위한 의도적 지연

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md §3.4.2.3 (lines 163-190)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-6|Layer 6]] (secondary — Record No. 4,748 in L6 range), [[../layers/layer-7|Layer 7]] (secondary — Record No. 11,302 in L7 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-VPN-OTP-WITHHOLDING"})
SET fr.layer = 4,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "evidence_concealment_technical",
    fr.claimDesc = "DIDC는 新KIATIS에 VPN 사용을 위한 OTP 카드를 1년 6개월간 제공하지 않았다. 이는 VPN OTP를 제공하면 舊KIATIS가 15년간 VPN 없이 운영된 사실이 드러나기 때문이다. 장우진 상사의 증언(Record 11,302)에 따르면 VPN 관련 논의가 시작된 시기는 2019년 5~7월이다",
    fr.counterHypothesis = "OTP 카드 미제공은 행정적 지연이나 재고 부족에 의한 것이며, 의도적 은폐와 무관하다",
    fr.falsificationCondition = "OTP 카드 미제공이 행정적·기술적 사유에 의한 것임을 보여주는 DIDC 내부 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 11,302에서 장우진 '그전에는 VPN은 쓰지를 안 했습니다' 확인. VPN 논의가 2019.5~7월 시작되었으나 실제 적용은 2021.4.15 이후. DIDC 부대예규 별지 제7호에 OTP 항목이 2019.6.4~2020.1.29 사이에 신규 추가됨.";
```

## Claim

DIDC는 新KIATIS에 VPN 사용을 위한 OTP 카드를 약 1년 6개월간(2019.9~2021.4) 제공하지 않았다. 장우진 (사업실무자-1)의 증언(기록 제11,302쪽):

"그전에는 VPN은 쓰지를 안 했습니다. 사업 초창기에 만약 VPN 써야 된다고 그러면 제안요청서부터 해가지고 VPN 얘기가 나왔을 건데. 그게 없었습니다."

VPN 논의가 시작된 시기(2019.5~7월)에도 DIDC는 OTP 카드를 제공하지 않았다. DIDC 부대예규 별지 제7호(SSL VPN 계정 신청서)에 "OTP 인증 매체(카드형) 일련번호(S/N)" 항목이 2019.6.4.~2020.1.29. 사이에 신규 추가된 것은 OTP 카드 자체의 도입 시기가 이 기간임을 시사한다.

OTP 카드 미제공의 동기: VPN OTP를 新KIATIS에 제공하면, 왜 舊KIATIS에는 15년간 제공하지 않았는지에 대한 질문이 불가피해지며, DIDC의 보안 과오가 드러나게 된다.

## Key Takeaways

- DIDC withheld VPN OTP cards for ~18 months because providing them to 新KIATIS would expose that 舊KIATIS never had VPN for 15 years [진리성]
- 장우진's testimony confirms "VPN was never mentioned before" the project — the VPN issue emerged mid-project [진리성]
- The OTP field was newly added to DIDC's SSL VPN form between 2019.6.4 and 2020.1.29 — suggesting OTP was not part of the existing infrastructure [진리성]

## Supporting evidence

- **Record No. 11,302** — 장우진 상사 대화 (VPN 미사용 확인, OTP 시기)
- **Record No. 4,748** — 박서준 기안 DB접근제어 신청서 (2020.1.29, OTP 항목 포함)

## Counter-hypothesis

OTP 카드 미제공은 행정 지연이나 재고 부족에 의한 것이다.

## Falsification condition

DIDC 내부 기록에서 OTP 미제공의 행정적·기술적 사유가 확인되는 기록.

## Verdict

**CORROBORATED.** Moderate. 진리성 8 / 타당성 8 / 진실성 7.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 143-149

## Related

- [[firewall-requests-confirm-no-vpn-db-direct-access]] — L4 VPN 미사용 증거 (RELATED)
- [[didc-falsely-records-old-kiatis-as-vpn-user]] — L4 DIDC 허위 기재 (OPPOSES)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

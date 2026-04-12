# 검사의 기소 근거 전환 — VPN에서 방화벽으로 핵심 논거 이동

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.4.3.1 (lines 328-371)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-CHARGE-SHIFT-VPN-TO-FIREWALL"})
SET fr.layer = 6,
    fr.claimType = "prosecution_narrative_shift",
    fr.claimDesc = "검사 임형규는 한지훈의 반박문서(Record 4,979~5,163) 제출 이후, 기소 핵심 논거를 'VPN 미사용'에서 '방화벽 포트 개방'으로 전환하였다(2022.9.28 대화 Record 11,157~11,160, 2022.10.11 대화 Record 11,188). VPN 논거가 논리적으로 성립 불가능함(舊KIATIS가 15년간 VPN 없이 운영)을 인지한 후의 전환이며, 독립적 기술 전문가 자문 없이 수행되었다",
    fr.counterHypothesis = "검사는 수사 과정에서 증거를 재평가하여 더 적확한 법적 근거로 전환한 것이며, 이는 정상적인 법적 판단이다",
    fr.falsificationCondition = "방화벽 포트 개방이 VPN과 독립적인 별도의 위법 행위로 성립함을 보여주는 기술적·법적 분석",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Record 11,157~11,160에서 검사의 VPN→방화벽 논거 전환 확인. Record 11,188에서 검사가 '정의롭게 했다고 생각한다'고 하면서 독립 전문가 미자문 인정. 한지훈의 40장 반박문서(Record 4,979~5,163)가 VPN 논거를 붕괴시킨 후의 전환.";
```

## Claim

검사 임형규는 한지훈과의 녹음된 대화(2022.9.28, 기록 제11,157쪽~제11,160쪽; 2022.10.11, 기록 제11,188쪽)에서, 기소 핵심 논거를 'VPN 미사용에 의한 조작'에서 '방화벽 포트 개방'으로 전환하였음이 확인된다.

이 전환의 배경: 한지훈이 제출한 40장 반박 문서 '해명과 증명'(기록 제4,979쪽~제5,163쪽)이 VPN 기반 논거를 논리적으로 붕괴시켰기 때문이다. 舊KIATIS가 15년간 VPN 없이 운영된 사실이 입증되면 "VPN 미사용 = 조작"이라는 전제 자체가 성립 불가능해진다.

검사는 "정의롭게 했다고 생각한다"(기록 제11,188쪽)고 진술하면서도, 외부 기술 전문가 자문 없이, 독립적 제3자 평가 없이, 카르텔 관련 참고인만으로 수사를 진행했음을 인정하였다.

## Key Takeaways

- Prosecutor shifted core charge from VPN non-use to firewall port opening after 한지훈's written rebuttal collapsed the VPN-based logic [진리성]
- No independent technical expert was consulted during the entire 10+ month investigation [진리성]
- The prosecutor claimed to have acted "justly" while admitting all witnesses were case-related parties — no neutral third-party evaluation [타당성]

## Supporting evidence

- **Record No. 11,157~11,160** — 검사-한지훈 대화 (2022.9.28)
- **Record No. 11,188** — 검사-한지훈 대화 (2022.10.11)
- **Record No. 4,979~5,163** — 한지훈 '해명과 증명' 문서

## Counter-hypothesis

증거 재평가에 의한 정상적 법적 판단 전환이다.

## Falsification condition

방화벽 포트 개방이 VPN과 별도로 위법함을 보여주는 분석.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 328-371

## Related

- [[firewall-port-opening-standard-it-procedure]] — L6 방화벽 표준 절차
- [[prosecution-identity-fallacy-deception-technique]] — L6 동일성 오류
- [[../layers/layer-6|Layer 6]]

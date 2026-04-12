# 녹취록이 VPN 공개 논의 확인 — 검찰 '은폐' 내러티브의 독립 반박

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취001 (2022-02-08) (lines 478-556)
**Layer:** [[../layers/layer-6|Layer 6]], [[../layers/layer-4|Layer 4]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-XSYN-VPN-PUBLIC"})
SET fr.layer = 6,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "cross_source_synthesis",
    fr.claimDesc = "녹취(raw/02)가 VPN 공개 논의를 확인 → 영장(raw/05)의 '은폐' 주장을 독립 반박.",
    fr.counterHypothesis = "2022 회의는 2019 시험평가 우회와 별개이며, 운영상 VPN 문제 인식과 시험환경 VPN 우회 은폐는 별개 사실이다",
    fr.falsificationCondition = "한지훈이 평가위원에게 VPN 우회를 구체적으로 숨기라고 지시한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "녹취(raw/02)가 VPN 공개 논의를 확인 → 영장(raw/05)의 '은폐' 주장을 독립 반박.";
```

## Claim

2022-02-08 녹취록에서 한지훈은 VPN 속도 문제를 DIDC 담당자, 과장, 국유단, 유지보수PM, 실무자 전원과 공개 논의. '2018년 DIDC 규정으로 VPN으로 반드시 하게 되어있어'라고 VPN 규정 인지를 명확히 표시. 그러나 영장(raw/05)은 '시험평가위원들에게 사실을 전혀 알리지 아니하였다'고 기재. 녹취록의 공개 토론은 검찰 '은폐' 내러티브를 독립적으로 반박.

## Key Takeaways

- Recording independently confirms VPN speed problems were publicly discussed with entire team — not concealment [진리성]
- 한지훈's recorded statement about DIDC VPN regulation directly contradicts warrant's concealment claim [진리성]

## Supporting evidence

- **Record No. 1,292**
- **Record No. 612**

## Counter-hypothesis

2022 회의는 2019 시험평가 우회와 별개이며, 운영상 VPN 문제 인식과 시험환경 VPN 우회 은폐는 별개 사실이다

## Falsification condition

한지훈이 평가위원에게 VPN 우회를 구체적으로 숨기라고 지시한 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 9.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 478-556

## Related

- [[firewall-port-opening-standard-it-procedure]] (CORROBORATES)
- [[prosecution-distorts-operational-vs-test-environment]] (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

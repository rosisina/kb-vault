# 舊KIATIS는 인트라넷(국방망)과 연동하여 데이터를 송·수신 — 사업계획서·제안요청서 교차 확인

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/07-3-1-31-제1층위-ActiveX.md §3.1.1.3 (lines 25–28)
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-2|Layer 2]] (secondary — records 1,117 and 1,125 fall in L2 range 1000–1587)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-INTRANET-LINK"})
SET fr.layer = 1,
    fr.claimType = "technical_proof",
    fr.claimSubtype = "system_architecture_fact",
    fr.claimDesc = "舊KIATIS operated with intranet (국방망) data linkage as documented in 이태호 (평가위원장-1)'s 2018-08 사업계획서 (Record No. 1,117) which lists '인트라넷 홈페이지 연동' in the system requirements, confirmed by 국유단's RFP review report specifying 국유단 홈페이지(인트라넷) as the linkage target with data items: 조사, 발굴, 감식, 유가족 정보 (Record No. 1,125)",
    fr.counterHypothesis = "The intranet linkage was planned but never operationally implemented in 舊KIATIS, making the 사업계획서 entry aspirational rather than descriptive",
    fr.falsificationCondition = "Production of network traffic logs or DIDC configuration records showing 舊KIATIS had no intranet data linkage during its operational period, OR a 사업계획서 errata correcting the entry",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Two independent official documents — 이태호's 사업계획서 and 국유단's RFP review report — both record 舊KIATIS as linked to the intranet (국방망) for data transmission. This establishes that 舊KIATIS was not a standalone internet system but bridged into the defense network, making it a direct attack surface during the 2016 DIDC hacking.";
```

## Claim

舊KIATIS는 인트라넷(국방망)과 연동하여 데이터를 송·수신하는 구조였다. 이태호 (평가위원장-1)가 2018년 8월 작성한 新KIATIS 사업계획서(기록 제1,117쪽)의 체계 요구사항 목록에 "인트라넷 홈페이지 연동"이 명시되어 있으며, 국유단의 제안요청서(안) 검토 결과 보고에서도 연동 대상체계를 "국유단 홈페이지(인트라넷)"로 적시하고 연동 항목을 "조사, 발굴, 감식, 유가족 정보"로 기술하고 있다(기록 제1,125쪽). 이는 舊KIATIS가 인터넷 기반 시스템이면서 동시에 국방망과 데이터를 교환하는 이중 연동 구조였음을 의미하며, 2016 DIDC 해킹 시 인터넷→국방망 경로의 공격 표면(attack surface)으로 기능했음을 시사한다.

## Key Takeaways

- 舊KIATIS had documented intranet (국방망) data linkage — not a standalone internet system but a bridge into the defense network [진리성]
- Two independent official documents (사업계획서 Record No. 1,117 + 국유단 RFP review Record No. 1,125) cross-confirm the linkage specification [진리성]
- The intranet linkage establishes 舊KIATIS as a potential 2016 DIDC hacking attack surface via internet→intranet data path [진리성]
- 이태호 (평가위원장-1) authored the 사업계획서 — same actor who later chairs the evaluation committee, establishing continuity of knowledge about system architecture [진리성]
- Records 1,117 and 1,125 fall in L2 range (1000–1587), making this a Layer 1 claim with Layer 2 evidentiary provenance — cross-layer evidence [진리성]

## Supporting evidence

- **Record No. 1,117** — 新KIATIS 사업계획서 (2018-08, 이태호 작성): 체계 요구사항 목록 연동 항목에 "인트라넷 홈페이지 연동" 명시
- **Record No. 1,125** — 국유단 '新KIATIS 제안요청서(안) 검토 결과 보고': 연동 대상체계를 "국유단 홈페이지(인트라넷)"로 적시, 연동 항목 = 종합 현황(조사, 발굴, 감식, 유가족 정보)

## Counter-hypothesis

1. **Aspirational specification:** The intranet linkage entry in the 사업계획서 was a planned feature for 新KIATIS, not a description of 舊KIATIS's actual operational architecture. Under this reading, 舊KIATIS may have been purely internet-based without any intranet data exchange.
2. **Indirect linkage:** The data exchange may have occurred through manual processes (USB, email) rather than automated system-to-system linkage, meaning the "연동" entry describes a human workflow rather than a network connection.
3. **Secure linkage:** Even if 舊KIATIS linked to the intranet, the linkage may have been properly secured through mechanisms not documented in these records, mitigating the attack surface concern.

## Falsification condition

This claim is **CORROBORATED** unless:
1. Network configuration records from DIDC or 국전원 demonstrating that 舊KIATIS had no automated data linkage to the intranet/국방망 during its operational period are produced.
2. A correction or errata to the 사업계획서 showing the "인트라넷 홈페이지 연동" entry was erroneously included is found.

## Verdict

**CORROBORATED.** Strong. 진리성 8 / 타당성 8 / 진실성 7. Two independent official documents converge on the same architectural fact. The cross-layer provenance (L2 records documenting L1 substance) strengthens traceability.

## Open Questions

- What was the specific data exchange protocol between 舊KIATIS (internet) and the intranet? Was it automated or manual?
- Did the 2016 DIDC hacking investigation examine this internet→intranet linkage as a potential attack vector?
- Are there DIDC network configuration records that document the 舊KIATIS connection to 국방망?

## Spot-check

- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` lines 25–28 — verbatim source for both record citations
- Cross-reference with [[kiatis-server-laundering-dcia-to-didc1]] for server migration path

## Related

- [[kiatis-server-laundering-dcia-to-didc1]] — server migration path showing how 舊KIATIS ended up in DIDC1 (RELATED)
- [[kiatis-rfp-tech-table-proves-sw-only-internet-structure]] — RFP tech table confirming internet-based SW-only architecture (RELATED)
- [[../layers/layer-1|Layer 1]] — DIDC hacking cover-up origin (PART_OF_LAYER)
- [[../layers/layer-2|Layer 2]] — New KIATIS project framework (evidentiary provenance) (PART_OF_LAYER)

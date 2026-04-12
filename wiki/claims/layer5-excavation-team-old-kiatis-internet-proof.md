# 국유단 발굴단계 업무의 인터넷 수행 — 舊KIATIS 인터넷 운용의 실무 증거

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md §3.5.4.1.1 (lines 480-531)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-1|Layer 1]] (secondary), [[../layers/layer-4|Layer 4]] (secondary — Record No. 3,229 in L4 range), [[../layers/layer-6|Layer 6]] (secondary — Record No. 5,245 in L6 range), [[../layers/layer-7|Layer 7]] (secondary — Record No. 10,028/10,323/10,331/10,344 in L7 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-EXCAVATION-INTERNET-PROOF"})
SET fr.layer = 5,
    fr.claimType = "technical_proof",
    fr.claimSubtype = "operational_evidence",
    fr.claimDesc = "국유단의 발굴단계 업무(유해 발굴, 현장 데이터 입력, 사진 촬영·업로드)는 인터넷 환경에서 수행되었으며, 이는 舊KIATIS가 인터넷 기반 시스템이었음을 실무 차원에서 확증한다. 발굴 현장(산악, 비무장지대 등)에서 국방망 접속은 물리적으로 불가능하므로 인터넷 사용은 운용상 필수였다",
    fr.counterHypothesis = "발굴 현장에서의 데이터 입력은 오프라인으로 수행 후 사후 업로드하였으며, 실시간 인터넷 접속은 필수가 아니었다",
    fr.falsificationCondition = "발굴 현장에서 국방망을 통해 KIATIS에 접속한 기록 또는 오프라인 데이터 입력·사후 동기화 절차가 존재했음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "발굴 현장(DMZ, 산악지역)에서 국방망 접속은 물리적 불가능. 舊KIATIS가 인터넷에서 운용된 것은 운용상 필수. 정리01~03과 일관.";
```

## Claim

국유단의 핵심 업무인 유해 발굴 작업은 비무장지대(DMZ)와 산악지역 등 야외에서 수행된다. 이 현장에서는 국방망(인트라넷) 접속이 물리적으로 불가능하므로, 현장 데이터 입력과 사진 업로드는 인터넷을 통해 수행할 수밖에 없다.

이는 舊KIATIS가 인터넷 기반 시스템으로 운용될 수밖에 없었던 운용상의 필연성을 보여주며, 제1층위의 정리01~03(인터넷 운용, 서버 세탁, 인트라넷 연동)을 실무 차원에서 확증한다.

## Key Takeaways

- Excavation teams operated in DMZ/mountain areas where 국방망 access was physically impossible — internet-based KIATIS was operationally mandatory [진리성]
- This operational necessity confirms Layer 1's proof that 舊KIATIS was an internet system [진리성]
- The prosecution's implicit premise that KIATIS should have operated on 국방망 ignores the physical realities of field operations [타당성]

## Supporting evidence

- **Record No. 3,229** — 관련 증거 (L4 range)
- **Record No. 5,245** — 관련 증거 (L6 range)
- **Record No. 10,028, 10,323, 10,331, 10,344** — 국유단 실무자 대화 기록 (L7 range)

## Counter-hypothesis

발굴 현장에서는 오프라인 데이터 입력 후 사후 업로드하는 절차가 있었다.

## Falsification condition

국방망 기반 현장 데이터 입력 기록 또는 오프라인 동기화 절차 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 480-531

## Related

- [[old-kiatis-direct-db-access-without-vpn]] — L1 DB 직접접속 (RELATED)
- [[old-kiatis-hosted-inside-other-server-15-years]] — L1 타 서버 내 운용 (RELATED)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)

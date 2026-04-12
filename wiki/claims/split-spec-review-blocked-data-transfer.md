# 규격 재심의에서 舊KIATIS 데이터·SW의 新서버 이전 완전 차단 (기록 제3,324쪽)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md §3.4.2.2 (lines 135-139)
**Layer:** [[../layers/layer-4|Layer 4]], [[../layers/layer-1|Layer 1]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DATA-TRANSFER-BLOCKED"})
SET fr.layer = 4,
    fr.claimType = "evidence_concealment",
    fr.claimDesc = "Record 3,324: 데이터·SW 이전 완전 차단. 舊KIATIS 증거 격리 효과.",
    fr.counterHypothesis = "신규 시스템 설계 원칙(clean-slate)에 따른 기술적 결정",
    fr.falsificationCondition = "데이터 미이전에 대한 기술적 근거(호환성 등)가 문서화된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Record 3,324: 데이터·SW 이전 완전 차단. 舊KIATIS 증거 격리 효과.";
```

## Claim

2018년 4월 규격 재심의에서 舊KIATIS 응용프로그램·SW·데이터의 新서버 이전이 완전 차단됨(기록 제3,324쪽). '응용 체계 이관 제외, 후속 사업에서 추진'과 '데이터 이관 제외, 후속사업에서 추진'으로 명시. 이는 舊KIATIS의 인터넷 운영 증거가 新환경으로 이관되면서 발견되는 것을 원천 봉쇄하기 위한 조치.

## Key Takeaways

- Specification re-review blocked ALL data/SW transfer from old to new servers (Record 3,324) [진리성]
- Blocking isolates evidence of 舊KIATIS internet operation from the new project [진리성]

## Supporting evidence

- **Record No. 3,324**

## Counter-hypothesis

신규 시스템 설계 원칙(clean-slate)에 따른 기술적 결정

## Falsification condition

데이터 미이전에 대한 기술적 근거(호환성 등)가 문서화된 기록

## Verdict

**CORROBORATED.** MODERATE. 진리성 8 / 타당성 8 / 진실성 7.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 135-139

## Related

- [[mnd-intentional-separation-server-sw-projects]]
- [[../layers/layer-4|Layer 4]]

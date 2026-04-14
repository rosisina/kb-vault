# C-L5-04 확장: 경고장의 존재하지 않는 직위 기재 — 행정정보계획팀장(미존재) vs 자원정보화과 국방정보화사업담당(공식)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md §3.5.1.3 (lines 49-60)
**Layer:** [[../layers/layer-5|Layer 5]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-C-L5-04-EXT"})
SET fr.layer = 5,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "contradiction_pair",
    fr.claimDesc = "경고장+신문조서 모두 미존재 직위 기재. 카르텔 비공식 정보 공유의 증거.",
    fr.counterHypothesis = "직위 오류는 단순 행정적 실수이다",
    fr.falsificationCondition = "법무관리관실이 국방인사정보체계에서 직위를 확인하고 기재한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "경고장+신문조서 모두 미존재 직위 기재. 카르텔 비공식 정보 공유의 증거.";
```

## Claim

법무관리관실 경고장(2022.5.23)은 한지훈의 직위를 '행정정보계획팀장'으로 기재하였으나, 이 직위는 자원정보화과에도 행정정보화과에도 존재하지 않는다. 한지훈의 2022.2.28 기준 공식 직위는 '자원정보화과 국방정보화사업담당'(기록 제1,586쪽). 동일한 오류가 피의자신문조서(기록 제4,878쪽)에도 나타나 — 카르텔 구성원이 비공식 명칭을 법무관리관실과 군검찰단에 동시 전달한 것.

## Key Takeaways

- Warning letter uses non-existent job title '행정정보계획팀장' — this title exists in NEITHER division [진리성]
- Same error appears in prosecution's interrogation record (Record 4,878) — proving shared information source [진리성]
- Official title was '자원정보화과 국방정보화사업담당' (Record 1,586) — not verified through official personnel system [타당성]

## Supporting evidence

- **Record No. 1,586**
- **Record No. 1,584**
- **Record No. 4,878**
- **Record No. 4,064**

## Counter-hypothesis

직위 오류는 단순 행정적 실수이다

## Falsification condition

법무관리관실이 국방인사정보체계에서 직위를 확인하고 기재한 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 9.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 49-60

## Related

- [[warning-letter-reflects-only-lee-jiyoung]] (OPPOSES)
- [[layer5-fabricated-warning-letter]] (OPPOSES)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

# 3개 독립 소스가 80건을 '추가요구사항'으로 삼각 확인 — 검찰 '하자' 프레이밍 반박

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취001 lines 287-311 (lines 287-311)
**Layer:** [[../layers/layer-4|Layer 4]], [[../layers/layer-6|Layer 6]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-XSYN-80ITEMS-TRIANGULATED"})
SET fr.layer = 4,
    fr.claimType = "cross_source_synthesis",
    fr.claimDesc = "녹취+책+영장 3소스 삼각확인: 80건=추가요구사항≠하자.",
    fr.counterHypothesis = "80건 중 상당수가 시험평가 전 이미 존재한 결함이었을 수 있다",
    fr.falsificationCondition = "80건 목록에서 50% 이상이 2019-09 평가 전부터 존재한 버그임을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "녹취+책+영장 3소스 삼각확인: 80건=추가요구사항≠하자.";
```

## Claim

녹취록(raw/02)에서 한지훈은 '추가요구사항이에요 미흡사항이 아니고'라고 실시간 구분. 책(raw/01 §3.6.5.3.1)은 80건을 전력화 지연 수단으로 분석. 영장(raw/05)은 '개발상 하자를 은폐'로 규정. 3개 독립 소스(녹취, 책, 영장)가 동일 사안에 대해 삼각 확인: 80건=추가요구≠하자.

## Key Takeaways

- Three independent sources triangulate: recording (추가요구사항), book (delay mechanism), warrant (하자) — the recording proves the real-time terminology was '추가요구' not '하자' [진리성]

## Supporting evidence

- **Record No. 5,950**
- **Record No. 3,987**

## Counter-hypothesis

80건 중 상당수가 시험평가 전 이미 존재한 결함이었을 수 있다

## Falsification condition

80건 목록에서 50% 이상이 2019-09 평가 전부터 존재한 버그임을 보여주는 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 8.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 287-311

## Related

- [[80-items-violate-national-contract-law]]
- [[cartel-requirement-inflation-80-items-delay]]
- [[../layers/layer-4|Layer 4]]

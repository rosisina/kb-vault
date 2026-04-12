# 제2263호 별표1: 국방통합정보관리소→국방통합데이터센터 — 용어 정의 수준 기관명 세탁

**Source:** raw/08. 용어 변천사/(국방 정보화 업무 훈령) 용어정의 변천사(2018~2025년).converted.md Section 1 vs 2 (lines 1-985)
**Layer:** [[../layers/layer-1|Layer 1]], [[../layers/layer-3|Layer 3]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-GLOSSARY-DIDC-RENAME"})
SET fr.layer = 1,
    fr.claimType = "terminology_entity_rename",
    fr.claimDesc = "별표1 기관명 세탁: 해킹 당시 명칭 제거. 제10조 삭제보다 15개월 선행.",
    fr.counterHypothesis = "실제 조직 명칭 변경을 반영한 정상적 업데이트",
    fr.falsificationCondition = "국방통합정보관리소→국방통합데이터센터의 공식 직제 개편 명령",
    fr.verdict = "NEEDS_MORE_EVIDENCE",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 8,
    fr.sincerity = 6,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "별표1 기관명 세탁: 해킹 당시 명칭 제거. 제10조 삭제보다 15개월 선행.";
```

## Claim

제2129호 별표1의 '국방통합정보관리소'가 제2263호에서 '국방통합데이터센터'로 교체. 2016 해킹 당시 기관명을 훈령 용어 정의에서 말소하여 해킹-기관 연결고리를 단절. 제10조 DIDC 앵커 제거(제2436호)보다 15개월 앞선 선행 조치.

## Key Takeaways

- Glossary-level DIDC rename precedes Article 10 anchor deletion by 15 months — two-phase identity laundering [타당성]
- Any audit referencing '국방통합정보관리소' finds no match after 제2263호 [진리성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

실제 조직 명칭 변경을 반영한 정상적 업데이트

## Falsification condition

국방통합정보관리소→국방통합데이터센터의 공식 직제 개편 명령

## Verdict

**NEEDS_MORE_EVIDENCE.** MODERATE. 진리성 7 / 타당성 8 / 진실성 6.

## Spot-check

- `vault-converted-korean/(국방 정보화 업무 훈령) 용어정의 변천사(2018~2025년).converted.md` lines 1-985

## Related

- [[2436ho-didc-naming-anchor-removed]]
- [[2263ho-cyber-routing-rewrite]]
- [[../layers/layer-1|Layer 1]]

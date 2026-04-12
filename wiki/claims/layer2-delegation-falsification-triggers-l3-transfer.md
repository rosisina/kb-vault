# 新KIATIS 위임사업 허위 분류가 Layer 3 국전원 이관의 원인 구조

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md §3.2 (lines 11-18)
**Layer:** [[../layers/layer-2|Layer 2]] (primary), [[../layers/layer-3|Layer 3]] (secondary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-DELEGATION-FALSIFICATION-L3-BRIDGE"})
SET fr.layer = 2,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "delegation_falsification_causal_bridge",
    fr.claimDesc = "新KIATIS를 '기관 위임 사업'으로 허위 분류(기록 제1,140)한 것이 국전원으로의 사업관리 이관(Layer 3)을 구조적으로 가능하게 했다. 직할사업이었다면 국방부 본부가 직접 통제하여 국전원 이관 자체가 발생하지 않았을 것이다.",
    fr.counterHypothesis = "新KIATIS는 실제로 위임사업 요건을 충족했으며, 국전원 이관은 위임사업 분류와 무관한 독립적 인사 결정이었다",
    fr.falsificationCondition = "新KIATIS가 훈령 제2129호 제11조 제2항의 위임사업 요건을 실질적으로 충족했음을 보여주는 문서",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "사업계획서(기록 제1,140)에 '기관 위임 사업'으로 명기 + 훈령 제11조 제2항(기록 제7,496)의 요건 미충족 + 이 허위 분류가 국전원 사업관리 이관의 제도적 전제조건임을 본서 §3.2에서 인과적으로 논증";
```

## Claim

新KIATIS 성능개선사업은 국방부 직할사업임에도 사업계획서(기록 제1,140쪽)에서 '기관 위임 사업'으로 허위 분류되었다. 훈령 제2129호 제11조 제2항(기록 제7,496쪽)에 따르면 위임사업은 특정 요건을 충족해야 하나, 新KIATIS는 이를 충족하지 못했다. 이 허위 분류는 Layer 3에서 국전원으로의 사업관리 이관을 제도적으로 가능하게 한 원인 구조다 — 직할사업이었다면 국방부 본부가 직접 통제하여 국전원 이관 자체가 발생하지 않았다.

## Key Takeaways

- Business plan (Record No. 1,140) falsely designated New KIATIS as "기관 위임 사업" (institutional delegation project) [진리성]
- Ordinance Article 11 Section 2 (Record No. 7,496) requirements for delegation were NOT met — false classification [타당성]
- This false classification was the STRUCTURAL PREREQUISITE for Layer 3 transfer to 국전원 — without it, MND HQ would have retained direct control [진리성]
- Authorization document (Record No. 1,057, dated 2018.7.9) formalized the false delegation [진리성]
- **Cross-layer causal chain: L2 false classification → L3 institutional transfer → L4 evaluation manipulation enablement** [타당성]

## Supporting evidence

- **Record No. 1,140** — 사업계획서 '기관 위임 사업' 명기
- **Record No. 1,057** — 인가 문서 (2018.7.9.)
- **Record No. 1,119** — 사업계획서 허위 위임 지정
- **Record No. 7,496** — 훈령 제11조 제2항 (위임사업 요건)
- **Record No. 1,056, 1,074, 1,535** — 예산 결정 관련 문서

## Counter-hypothesis

新KIATIS는 실제로 위임사업 요건을 충족했으며, 국전원 이관은 위임사업 분류와 무관한 독립적 인사·조직 결정이었다.

## Falsification condition

新KIATIS가 훈령 제2129호 제11조 제2항의 위임사업 요건을 실질적으로 충족했음을 보여주는 문서 제시.

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 8. 사업계획서 + 훈령 요건 미충족 + 인과적 논증이 수렴.

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` lines 11-18 — 위임사업 허위 분류 논의
- `vault-converted-korean/09-3-3-33-제3-층위.md` — L3 국전원 이관 결과

## Related

- [[kiatis-mnd-controlled-not-delegated]] (CAUSES)
- [[layer3-kiatis-team-transfer-forced-handoff]] (CAUSES)
- [[kiatis-project-deliberately-transferred-to-han-ji-hoon]] (CAUSES)
- [[../layers/layer-2|Layer 2]] (PART_OF_LAYER)
- [[../layers/layer-3|Layer 3]] (PART_OF_LAYER)

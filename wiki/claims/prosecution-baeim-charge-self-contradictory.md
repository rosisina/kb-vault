# 업무상 배임 혐의의 자기모순 — 99.73점 인정하면서 손해 주장

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.4.8 (lines 612-642)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-BAEIM-SELF-CONTRADICTION"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_logical_contradiction",
    fr.claimDesc = "군검찰단은 업무상배임으로 1억7천만원 국가 손해를 주장하며 준공금 지급을 문제 삼았으나(Record 714/717), 동시에 99.73점 군사용 적합 판정(Record 394)과 압수수색에서 개발업체와의 금전 관계 부재(Record 1,150)를 인정하여 자기모순에 빠졌다. 최종적으로 '증거 불충분 혐의없음'으로 처리하여 애초 혐의 자체가 근거 없었음을 자인하였다",
    fr.counterHypothesis = "배임 혐의와 99.73점은 별개의 법적 쟁점이며, 준공금 지급 절차의 하자가 결과와 무관하게 배임이 될 수 있다",
    fr.falsificationCondition = "준공금 지급 절차에 구체적 위법 사항이 있었음을 보여주는 감사 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Record 714/717에서 준공금 지급 확인. Record 394에서 99.73점 확인. Record 1,150에서 금전관계 부재 확인. Record 704에서 장호재(개발PM) 진술. 배임 혐의를 제기하면서 스스로 증거 불충분을 인정한 모순.";
```

## Claim

군검찰단의 업무상배임 혐의는 내적 모순으로 인해 자기 붕괴한다:

1. **손해 주장:** 준공금 1억7천만원 지급이 국가 손해(기록 제714쪽, 제717쪽)
2. **성공 인정:** 99.73점 군사용 적합 판정(기록 제394쪽)으로 사업 목적 달성
3. **금전 부재:** 압수수색에서 개발업체와의 금전 관계 미발견(기록 제1,150쪽)
4. **자기 철회:** 최종적으로 "증거 불충분 혐의없음"으로 처리

장호재(개발PM) 진술(기록 제704쪽)에서도 Web GIS 엔진 비용(기록 제831쪽) 등 기술적 사항이 확인되었으나 배임의 고의성은 입증되지 않았다.

배임 혐의의 실질적 기능: 기소유예 처분의 정당성을 보강하기 위한 보조 수단 — "6개 혐의 중 1개는 기소유예, 5개는 혐의없음"이라는 구조를 만들어 범죄자 낙인의 효과를 극대화.

## Key Takeaways

- 배임 charge claims 170M won damages while acknowledging 99.73-point success and no financial relationship with developers — logically irreconcilable [진리성]
- The charge was ultimately dropped as "insufficient evidence" — a tacit admission it was groundless from the start [타당성]
- The charge's real function was to create a multi-count structure maximizing criminal stigma of the 기소유예 [진실성]

## Supporting evidence

- **Record No. 714, 717** — 준공금 지급
- **Record No. 394** — 99.73점 평가결과
- **Record No. 1,150** — 압수수색 금전관계 부재
- **Record No. 704** — 장호재 진술
- **Record No. 831** — Web GIS 엔진 비용

## Counter-hypothesis

준공금 지급 절차의 하자가 결과와 무관하게 배임이 될 수 있다.

## Falsification condition

준공금 지급에 구체적 위법이 있었음을 보여주는 감사 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 612-642

## Related

- [[prosecution-non-prosecution-internal-contradiction]] — L6 불기소 모순 (CORROBORATES)
- [[layer6-997-reframed-as-deficient-development]] — L6 부실개발 재프레이밍 (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

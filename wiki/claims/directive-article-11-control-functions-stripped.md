# 훈령 제11조 사업통제기관 핵심 기능의 체계적 삭제

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md §3.4.4.4.2 (lines 383-402)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-ARTICLE-11-STRIPPED"})
SET fr.layer = 4,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "control_function_deletion",
    fr.claimDesc = "사업통제기관의 4대 핵심 기능이 훈령 개정을 통해 체계적으로 삭제됨: 제2398호(2020.2.13)에서 '시험평가 계획·결과 승인' 삭제(Record 8,168), 제2436호(2020.6.4)에서 '사업계획 승인' 삭제(Record 8,272). 또한 제2436호에서 '사업통제기관'이라는 용어 자체를 '정보화기획관실(각 군)'로 교체하여 新KIATIS 불법 위임을 노출할 수 있는 어휘를 제거하였다",
    fr.counterHypothesis = "훈령 개정은 국방 행정 효율화를 위한 정상적 규정 정비이며, 특정 사건과 무관하다",
    fr.falsificationCondition = "훈령 개정이 新KIATIS 사건 이전에 기획되었음을 보여주는 사전 정책검토 문서",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Records 7,512/8,087/8,168/8,272/8,260에서 연속적 삭제 패턴 확인. '사업통제기관→정보화기획관실' 용어 교체는 불법 위임을 은폐하는 어휘 조작. 제2436호는 '사업주관기관→소요제기기관', '사업관리기관→집행기관'으로도 교체.";
```

## Claim

사업통제기관의 4대 핵심 기능이 훈령 개정을 통해 연속적으로 삭제되었다:

| 기능 | 삭제 훈령 | 일자 | Record |
|---|---|---|---|
| 시험평가 계획·결과 승인 | 제2398호 | 2020.2.13 | 8,168 |
| 사업계획 승인 | 제2436호 | 2020.6.4 | 8,272 |

또한 제2436호에서는 용어 자체를 교체하여 불법 위임을 은폐:
- "사업통제기관" → "정보화기획관실(각 군)"
- "사업주관기관" → "소요제기기관"
- "사업관리기관" → "집행기관"

이 용어 교체는 新KIATIS에서 국유단이 불법적으로 수행한 "사업통제기관" 역할을 사후적으로 정당화하기 위한 어휘 조작이다. 기존 용어가 사라지면 위반 사실 자체가 지칭 불가능해진다(기록 제8,260쪽, 제9,008쪽, 제8,902쪽).

## Key Takeaways

- Two core control functions (test evaluation approval, project plan approval) were deleted across two consecutive directive revisions (2020.2.13, 2020.6.4) [타당성]
- The terminology itself was replaced: "사업통제기관" → "정보화기획관실" — eliminating the vocabulary that could expose the 新KIATIS illegal delegation [타당성]
- The timing (both in 2020, after 新KIATIS evaluation in 2019) aligns with retroactive justification [진리성]

## Supporting evidence

- **Record No. 7,512** — 훈령 기준선
- **Record No. 8,087** — 제2398호 관련
- **Record No. 8,168** — 시험평가 승인 삭제
- **Record No. 8,272** — 사업계획 승인 삭제
- **Record No. 8,260** — 용어 교체

## Counter-hypothesis

훈령 개정은 국방 행정 효율화 정책이며 특정 사건과 무관하다.

## Falsification condition

新KIATIS 이전에 기획된 사전 정책검토 문서.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` lines 383-402

## Related

- [[2436ho-cluster-six-anchors]] — 2436호 조작 클러스터 (RELATED)
- [[mnd-test-eval-simplification-timed-to-evaluation-day]] — 시험평가 간소화 (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

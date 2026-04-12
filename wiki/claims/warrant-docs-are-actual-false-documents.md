# 군검찰단의 영장·수사개시 통보 자체가 실제 허위공문서

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.3.3.3 (lines 213-232)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-WARRANT-IS-FALSE-DOCUMENT"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_document_fraud",
    fr.claimDesc = "군검찰단이 한지훈에게 부과한 '허위공문서 작성 및 동행사' 혐의는 역설적으로 군검찰단 자신의 문서(압수수색 영장, 수사개시 통보, 불기소 이유서)에 해당한다. 이 문서들은 동일성 오류, 시간역전, 선별적 증거 인용 등 허위 내용을 담고 있으며, 한지훈은 이를 '증명 문서'(Record 5,008)에서 입증하여 국방부장관·군검찰단장에게 제출하였다",
    fr.counterHypothesis = "검찰 문서는 수사상 판단과 법리적 해석을 반영한 것이며, 판단의 오류가 있더라도 '허위공문서'에 해당하지 않는다",
    fr.falsificationCondition = "검찰 문서의 내용이 당시 알려진 사실에 기반한 선의의 판단이었음을 보여주는 내부 검토 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "한지훈의 증명문서(Record 4,979~5,021)에서 검찰 문서의 허위 내용을 조항별로 입증. Record 5,008에서 '허위공문서 작성 및 동행사가 논고자가 아니라 군검찰단인 것을 증명' 제시. 수십 가지 반사 부과 가능 판단.";
```

## Claim

군검찰단이 한지훈에게 부과한 6개 혐의 중 '허위공문서 작성 및 동행사'는 역설적으로 군검찰단 자체의 문서에 해당한다. 한지훈은 2022.9월 국방부장관과 군검찰단장에게 제출한 '압수·수색·검증 영장에 대한 해명과 증명'(기록 제4,979쪽~제5,021쪽)에서 이를 입증하였다.

구체적으로 기록 제5,008쪽에서 "허위공문서 작성 및 동행사가 논고자가 아니라 군검찰단인 것을 증명"하여 제시하였으며, 나머지 5개 죄명뿐 아니라 수십 가지 범죄를 군검찰단에 반사 부과할 수 있었다고 판단하였다.

검찰 문서의 허위 내용:
- 압수수색 영장: 동일성 오류, "사용할"이라는 미래형 동사로 시간역전
- 수사개시 통보: 동일한 동일성 오류 패턴
- 불기소 이유서: 기소유예+99.73점 모순, 핵심 사실 누락

## Key Takeaways

- The prosecution's own documents (warrant, investigation notice, non-prosecution report) contain the very falsehoods they charged 한지훈 with — a supreme irony [진리성]
- 한지훈 proved this in his 40+ page evidence document (Records 4,979-5,021) submitted to MND Minister and prosecution chief [진리성]
- The prosecution's "허위공문서" charge reflects back as a mirror — they are the actual false document creators [타당성]

## Supporting evidence

- **Record No. 4,979~5,021** — 한지훈 증명문서 (해명과 증명)
- **Record No. 5,008** — 허위공문서 작성 주체가 군검찰단임을 증명

## Counter-hypothesis

검찰 문서는 법리적 해석을 반영한 것이며 허위공문서에 해당하지 않는다.

## Falsification condition

검찰 문서 내용이 선의의 판단이었음을 보여주는 내부 검토 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 213-232

## Related

- [[prosecution-false-document-charge-self-contradiction]] — L6 허위공문서 자기모순 (OPPOSES)
- [[prosecution-non-prosecution-internal-contradiction]] — L6 불기소 모순 (OPPOSES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

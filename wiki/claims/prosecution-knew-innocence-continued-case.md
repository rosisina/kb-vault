# 군검찰단의 무혐의 인지 후 수사 계속 — 수사관 대화에서 확인

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.3.3.5 (lines 245-290)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-KNEW-INNOCENCE-CONTINUED"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "continued_despite_innocence",
    fr.claimDesc = "군검찰단 수사관은 한지훈의 무혐의를 인지하면서도 수사를 계속하였다. 수사관과의 대화(Record 11,188)에서 이를 확인할 수 있다. 99.73점 성공작을 '부실개발'로 재프레이밍하고, 80건 추가 요구사항은 사후 평가 시 부과된 것임에도 원래 요구사항인 양 취급하였다",
    fr.counterHypothesis = "수사관은 무혐의를 인지한 것이 아니라 추가 증거를 수집하기 위해 수사를 계속한 것이며, 피의자의 주장과 수사 결과는 별개이다",
    fr.falsificationCondition = "수사관이 한지훈의 무혐의 주장을 검토하고 그럼에도 유죄 증거가 있다고 판단한 내부 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 11,188에서 수사관의 무혐의 인지 확인. 99.73점 적합판정을 부실개발로 재프레이밍한 것은 객관적 증거의 의도적 왜곡. 80건 추가 요구는 평가 기간 중 사후 부과.";
```

## Claim

군검찰단 수사관은 한지훈의 무혐의를 인지하면서도 수사를 계속하였다(기록 제11,188쪽의 대화에서 확인).

수사의 핵심 기만:
1. **99.73점 성공작의 재프레이밍:** 평가위원회에서 "군사용 적합" 판정을 받은 사실(99.73점)을 "부실개발"로 재프레이밍하여, 성공한 사업을 실패한 것처럼 서사를 구성
2. **80건 추가 요구사항의 허위 기원:** 시험평가 기간 중 사후 부과된 80건의 추가 요구사항을 원래 계약 요구사항인 양 취급하여 "미충족"을 주장

수사관 자신이 "훌륭하신 분이라고 많이 들었습니다"(기록 제11,176쪽)라고 진술한 것과 기소유예 결정 사이의 괴리는 수사의 결론이 사전에 결정되어 있었음을 보여준다.

## Key Takeaways

- Military prosecutor's investigator recognized 한지훈's innocence in dialogue (Record No. 11,188) but continued the investigation [진리성]
- The 99.73-point success was reframed as "deficient development" — deliberate distortion of objective evidence [진리성]
- 80 additional requirements were imposed DURING evaluation but treated as original requirements to fabricate "non-compliance" [타당성]
- The investigator's own positive assessment ("we heard a lot that he's an excellent person," Record No. 11,176) contradicts the criminal finding [진실성]

## Supporting evidence

- **Record No. 11,188** — 수사관 대화 (무혐의 인지)
- **Record No. 11,176** — 수사관 긍정적 평가 진술

## Counter-hypothesis

수사관은 추가 증거 수집을 위해 수사를 계속했으며, 피의자 주장과 수사 결과는 별개이다.

## Falsification condition

수사관의 내부 판단 기록에서 유죄 증거가 있다고 판단한 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 10.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 245-290

## Related

- [[prosecution-non-prosecution-internal-contradiction]] — L6 불기소 모순 (CORROBORATES)
- [[prosecution-fraud-meets-criminal-elements]] — L6 사기수사 범죄 성립 (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

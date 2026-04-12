# 영장 '허위의 사실' vs 불기소결정서 '평가를 그대로 기재' — 동일 문서에 대한 진실성 역전

**Source:** raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(220718) Confiscation, Search and Verification Warrants(ver 0.8) (English, Korean).converted.md 영장 vs 불기소결정서 교차비교 (lines 1-405)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-WARRANT-VS-NONPROSECUTION-REVERSAL"})
SET fr.layer = 6,
    fr.claimType = "cross_document_contradiction",
    fr.claimDesc = "같은 검찰이 같은 문서에 대해 판사에게는 '허위', 피의자에게는 '사실'이라고 진술. 3개월 간격의 진실성 역전.",
    fr.counterHypothesis = "영장 단계의 '허위' 판단은 잠정적 평가이며, 수사 후 '사실 그대로' 결론은 정상적 수사 결과",
    fr.falsificationCondition = "영장 발부와 불기소결정 사이에 문서의 진실성 판단을 변경한 구체적 새로운 증거가 발견된 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "같은 검찰이 같은 문서에 대해 판사에게는 '허위', 피의자에게는 '사실'이라고 진술. 3개월 간격의 진실성 역전.";
```

## Claim

영장(2022.7.18)에서 검찰은 동일한 시험평가 결과 문서를 '허위의 사실'이 포함된 것으로 기술하여 판사의 승인을 받았다. 그러나 불기소결정서(2022.10.07) IV.2.사.(1)에서 '대위 이준호가 작성한 위 각 문서는 실제로 이루어진 시험평가 위원들의 평가를 그대로 기재한 것에 불과하므로 표시된 내용과 진실이 부합하지 않는다고 할 수 없고'로 정반대 판단. 같은 검찰이 같은 문서에 대해 판사에게는 '허위', 피의자에게는 '사실 그대로'라고 상반된 진술.

## Key Takeaways

- The prosecution told the JUDGE the documents contained '허위의 사실' to obtain the warrant [진리성]
- Three months later told the SUSPECT the same documents '평가를 그대로 기재한 것에 불과' [진리성]
- Same prosecution office, same documents, opposite truth claims to different audiences [타당성]

## Supporting evidence

- **Record No. 394**
- **Record No. 1,481**
- **Record No. 1,483**

## Counter-hypothesis

영장 단계의 '허위' 판단은 잠정적 평가이며, 수사 후 '사실 그대로' 결론은 정상적 수사 결과

## Falsification condition

영장 발부와 불기소결정 사이에 문서의 진실성 판단을 변경한 구체적 새로운 증거가 발견된 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check

- `vault-converted-korean/(220718) Confiscation, Search and Verification Warrants(ver 0.8) (English, Korean).converted.md` lines 1-405

## Related

- [[warrant-docs-are-actual-false-documents]]
- [[prosecution-false-document-charge-self-contradiction]]
- [[../layers/layer-6|Layer 6]]

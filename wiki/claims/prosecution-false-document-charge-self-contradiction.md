# 불기소결정서의 허위공문서작성 혐의에서 군검찰이 스스로 평가 결과의 정당성을 인정하면서 동시에 허위라고 주장하는 자기모순을 드러냈다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md (§3.6.4.7, lines 582–610)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-1|Layer 1]] (secondary — Record No. 394 in L1), [[../layers/layer-2|Layer 2]] (secondary — Records 1,481 / 1,483 in L2)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-B3-003"})
SET fr.layer = 6,
    fr.secondaryLayers = [1, 2],
    fr.claimType = "prosecution_self_contradiction_false_document",
    fr.claimDesc = "The 불기소결정서 charges 허위공문서작성 regarding three documents: the evaluation result report (Record No. 394/L1), the result report to 국전원장 (Record No. 1,481/L2), and the result notification to 국유단 (Record No. 1,483/L2). However, the same 불기소결정서 explicitly states that 이준호's documents '실제로 이루어진 시험평가 위원들의 평가를 그대로 기재한 것에 불과하므로 표시된 내용과 진실이 부합하지 않는다고 할 수 없다' — acknowledging the 99.7점 result was genuine. Additionally, the prosecution admits 한지훈 '시험평가 과정에 직접 참여한 것도 아니어서 기재된 내용이 허위라는 사실을 인식하고 문서를 결재한 것이라고 단정할 수도 없다.' This negates both the objective and subjective elements of 허위공문서작성죄 while still raising the charge — a textbook self-contradiction.",
    fr.counterHypothesis = "The prosecution raised the charge procedurally to examine all possible offenses comprehensively, and the self-contradiction was a natural outcome of the investigative process rather than evidence of fraudulent prosecution",
    fr.falsificationCondition = "Evidence that the 허위공문서작성 charge was raised as a required procedural step under military prosecution rules (e.g., mandatory comprehensive charging), and that the self-contradictory language was standard legal drafting for 증거불충분 dispositions",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 불기소결정서 simultaneously calls the evaluation result '허위' (in the charge description) and 'faithfully recording actual evaluation results' (in the disposition). It also negates subjective intent for 한지훈 (non-participation). Both objective and subjective elements of 허위공문서작성죄 are self-negated by the prosecution's own text, yet the charge was raised — constituting a logical contradiction (모순율 위반) that proves the prosecution worked backward from a predetermined conclusion.";
```

## Claim

군검찰단의 불기소결정서(L6-031-1)에서 **허위공문서작성** 혐의에 대해, 군검찰은 이준호 (공모자-1)가 작성한 3건의 문서를 지목하였다:
1. 개발·운용시험평가 결과 보고서 (Record No. 394 / L1, 2019.9.17.)
2. 개발·운용시험평가 결과 보고 전자문서 (Record No. 1,481 / L2, 2019.9.19.) — 국전원장 박성호에게 보고
3. 개발·운용시험평가 결과 통보 전자문서 (Record No. 1,483 / L2, 2019.9.20.) — 국유단 계획과장에게 통보

그러나 **동일한 불기소결정서 내에서** 군검찰은 "대위 이준호가 작성한 위 각 문서는 2019년 9월 2일부터 2019년 9월 11일까지 **실제로 이루어진 시험평가 위원들의 평가를 그대로 기재한 것에 불과하므로** 표시된 내용과 진실이 부합하지 않는다고 할 수 없다"고 인정하였다. 또한 한지훈에 대해 "시험평가 과정에 직접 참여한 것도 아니어서 기재된 내용이 **허위라는 사실을 인식하고 문서를 결재한 것이라고 단정할 수도 없다**"고 명시하였다.

이는 허위공문서작성죄의 **객관적 구성요건**(내용의 허위성)과 **주관적 구성요건**(고의)을 모두 자기 부정하면서도 피의사실로 제기한 것이며, 논리학의 기본 원칙인 **모순율(A이면서 동시에 ¬A)을 위반**한 것이다.

## Key Takeaways

- The prosecution simultaneously labels the evaluation documents as "허위" (in the charge) and "faithfully recording actual evaluation results" (in the disposition) — a direct logical contradiction [타당성].
- 대법원 2013도5752 판결에 의하면 허위공문서작성죄의 "허위"란 "표시된 내용과 진실이 부합하지 아니하여" 공공 신용을 위태롭게 하는 경우인데, 군검찰이 스스로 "진실이 부합"한다고 인정했으므로 범죄 성립 불가 [타당성].
- The prosecution negates 한지훈's subjective intent (고의) — he did not participate in the evaluation process and could not have known the content was false — yet still raised the charge [진리성].
- The identity-error technique from §3.6.4.4 (동일성 오류) is the mechanism producing this self-contradiction: the prosecution equates 이준호's routine notification documents with the evaluation committee's formal verdict, collapsing their distinct legal status [진리성].
- The self-contradiction proves the prosecution worked backward from a predetermined conclusion ("한지훈 is guilty") and retrofitted charges without verifying internal logical consistency [진실성].

## Supporting evidence

- Record No. 394 (L1) — 개발·운용시험평가 결과 보고서 (2019.9.17)
- Record No. 1,481 (L2) — 시험평가 결과 보고 전자문서 (2019.9.19), 위원장 김경진·국전원장 박성호 결재
- Record No. 1,483 (L2) — 시험평가 결과 통보 전자문서 (2019.9.20), 한지훈·최영수 결재
- L6-031-1 (본문기록-제6층위-031-1) — 불기소결정서 원문 (허위공문서작성 혐의 전문)
- 대법원 2013.10.24. 선고 2013도5752 판결 — 허위공문서작성죄 법리 기준

## Counter-hypothesis

1. **Comprehensive charging requirement:** Military prosecution rules require raising all theoretically possible charges and then disposing of them individually; the self-contradiction was a natural artifact of the comprehensive review process, not evidence of fraud.
2. **Two-stage analysis:** The charge description reflects the initial hypothesis; the disposition reflects the investigation outcome. The apparent contradiction is standard legal drafting where the charge allegation and the evidentiary finding are formally separate.
3. **Partial falsity theory:** The prosecution may have considered the documents partially false — the evaluation scores were genuine but the "군사용 적합" conclusion was false because the evaluation environment did not match the operational environment.

## Falsification condition

This claim is CORROBORATED unless:
1. Military prosecution procedural rules are produced showing that the charge-description / disposition contradiction is standard legal drafting format, not a logical error.
2. The prosecution's internal analysis distinguishes between the evaluation scores (genuine) and the "군사용 적합" conclusion (allegedly false due to environment mismatch), providing a coherent non-contradictory basis for the charge.
3. A legal precedent is produced where 허위공문서작성죄 was upheld despite the prosecution acknowledging the document faithfully recorded actual proceedings.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 9. The self-contradiction is textually explicit within the same document — there is no ambiguity. The prosecution negates both elements of the crime (objective: content is truthful; subjective: defendant lacked awareness) yet still raises the charge. This is the strongest internal evidence of 사기수사 because it is the prosecution's own text contradicting itself. 타당성 is maximum because the legal logic failure is demonstrable against the cited 대법원 precedent.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 582–610 — CONFIRMED: §3.6.4.7 contains the full 불기소결정서 text for 허위공문서작성 charge and the self-contradictory disposition
- §3.6.4.7.1–3.6.4.7.5 (lines 586–608) contain five sub-analyses of this self-contradiction
- Deferred to A.6 Re-verify.

## Open Questions

- Does the full 불기소결정서 (raw/05) contain additional context around the 허위공문서작성 charge that the book excerpt does not reproduce?
- Are there documented cases in Korean military law where 불기소결정서 self-contradictions have been used as grounds for 재정신청 (judicial review of non-prosecution)?
- Did 한지훈's (20220929) rebuttal specifically identify this self-contradiction as evidence of 사기수사?

## Related

- [[prosecution-non-prosecution-identity-error-fraud|L6: 불기소결정서 동일성 오류]]
- [[prosecution-distorts-operational-vs-test-environment|L6: 실제운영-시험평가 환경 왜곡]]
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|L6: 제58조 ¶4 misapplication]]
- [[prosecution-selective-criminalization-firewall-approval-chain|L6: 선택적 범죄자 만들기]]
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|L6: 기소유예 범죄 낙인]]
- [[../entities/people/han-ji-hoon|한지훈]]
- [[../entities/people/lee-jun-ho|이준호]]
- [[../layers/layer-6|Layer 6]]

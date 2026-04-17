---
lang: ko
title-ko: "군검찰의 선택적 범죄자 만들기 — 방화벽 정책적용 공문의 결재자·기안자 면책, 검토자만 피의자 지정"
title-en: "군검찰의 선택적 범죄자 만들기 — 방화벽 정책적용 공문의 결재자·기안자 면책, 검토자만 피의자 지정"
aliases:
  - FR-L6-B2-002
  - "군검찰의 선택적 범죄자 만들기 — 방화벽 정책적용 공문의 결재자·기안자 면책, 검토자만"

layer: 6
secondary-layers: [5]
claimType: prosecution_misconduct
claimSubtype: selective_criminalization_firewall_chain
fracture-type: F-SE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 10
analysisDate: 2026-04-11

record-nos: [3948]
evidence-ids: []
event-date: null

persons:
  - 최영수
  - 한지훈
  - 이준호
  - 박서준
organizations:
  - MND
  - 조사본부
has-verbatim: false

tags:
  - layer/L6
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/book
  - fracture/F-SE
  - person/최영수
  - person/한지훈
  - person/이준호
  - person/박서준
  - org/MND
  - org/조사본부
  - has/record-nos
  - cross-layer
---
# 군검찰의 선택적 범죄자 만들기 — 방화벽 정책적용 공문의 결재자·기안자 면책, 검토자만 피의자 지정

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.4.11.4, lines 680–683)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-5|Layer 5]] (secondary — Record No. 3,948 falls in L5 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-B2-002"})
SET fr.layer = 6,
    fr.secondaryLayer = 5,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "selective_criminalization_firewall_chain",
    fr.claimDesc = "The firewall policy application request document (공문) had a three-person approval chain: drafter 이준호, reviewer 한지훈, approver 최영수. The military prosecution designated only the middle reviewer (한지훈) as the accused. The final approver 최영수 — a 30-year IT expert, 서기관, and 과장 with authority to reject the document — was treated as a mere witness. The drafter 이준호 was excluded entirely. 최영수 testified for 5 hours that the firewall port opening was technically justified, and the prosecution could not rebut his arguments. This selective targeting within a single approval chain is evidence of targeted prosecution (표적수사).",
    fr.counterHypothesis = "The prosecution targeted the reviewer because the reviewer bore the primary duty of technical verification in the approval chain, and the reviewer's position (팀장) carried the operational responsibility for the port-opening decision",
    fr.falsificationCondition = "Production of a legal analysis showing that 팀장 (reviewer) bears greater criminal liability than 과장 (approver) for a port-opening decision under military administrative law, OR evidence that 최영수 and 이준호 were separately investigated and cleared on documented grounds",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "In a three-person approval chain (drafter-reviewer-approver), only the middle reviewer was charged. The approver with veto authority testified 5 hours in favor of the port opening's legitimacy and was uncharged. This pattern is diagnostic of targeted prosecution.";
```

## 주장 (Claim)

### 한국어

"방화벽 정책적용 요청" 공문의 결재 구조는 기안자 이준호 (공모자-1), 검토자 한지훈, 결재자 최영수로 구성되었다. 군검찰은 이 결재 체계에서 **중간 검토자인 한지훈만을 피의자로 지정**하여 범죄자로 만들었다.

최종 결재자 최영수는 30년 IT 전문가이자 서기관·과장으로서 결재 승인을 거부할 권한이 있었음에도 참고인에 불과했다. 최영수는 군검찰 조사에서 방화벽 포트 개방이 기술적으로 정당하다고 **5시간 동안 주장**했으며, 군검찰은 그의 논리를 반박하지 못했다. 기안자 이준호에 대해서는 수사관이 한지훈에게 "온지 얼마 되지 않는다"며 노골적으로 수사 제외 사유를 말했다.

국방부 조사본부는 별도로 대위(진) 박서준의 교육입교 연기 건에서 "팀장이 권한이 없는데 가지 못하게 했다"는 취지로 질문하면서도 (Record No. 3,948), 방화벽 결재에서는 결재 권한이 더 큰 과장을 면책했다. 동일한 수사기관이 동일한 "권한" 논리를 선택적으로 적용한 것이다.

### English

The approval chain for the "firewall policy application request" document consisted of drafter 이준호 (공모자-1), reviewer 한지훈, and final approver 최영수. From this approval chain, the military prosecutors **designated only the middle reviewer 한지훈 as the suspect** and turned him into a criminal.

Final approver 최영수, as a 30-year IT expert and senior officer, had the authority to refuse approval but was only a reference witness. 최영수 **argued for 5 hours** in the military prosecution investigation that firewall port opening was technically justified, and the military prosecution could not rebut his logic. For drafter 이준호, the investigator openly told 한지훈 "he hasn't been here long" as the reason for excluding him from the investigation.

The MND Investigation Bureau separately questioned in 박서준 (Lieutenant level)'s training enrollment deferral case "the team chief blocked him from going despite not having authority" (Record No. 3,948), but in the firewall approval they exempted the section chief with even greater approval authority. The same investigative agency selectively applied the same "authority" logic.

## 핵심 요약 (Key Takeaways)
- In the firewall policy request approval chain (drafter 이준호 → reviewer 한지훈 → approver 최영수), only the reviewer was charged — the approver with veto authority was a witness, the drafter was excluded entirely [진리성].
- 최영수 (과장, 서기관, 30-year IT expert) testified for 5 hours that the port opening was technically justified; the prosecution could not rebut his arguments but still charged only 한지훈 [진리성].
- The same investigation body (국방부 조사본부) applied "authority" logic inconsistently: questioning whether 팀장 had authority over 교육입교 연기 (Record No. 3,948) while ignoring that 과장 had greater authority over the firewall approval [타당성].
- Dozens of other firewall port-opening documents existed in 행정정보화과 during 2019, but only 한지훈's was investigated — a hallmark of targeted prosecution [진실성].
- Verdict: **CORROBORATED**, Strong. This is one of the clearest patterns of selective criminalization in the case: same document, same approval chain, only the target is charged [진실성].

## 지지 증거 (Supporting Evidence)
- Record No. 3,948 (L5) — 국방부 직무감찰담당관실·조사본부의 한지훈 대상 갑질 조사 질의 (교육입교 연기 관련 "권한" 질문)
- §3.6.4.11.4 (제6층위 본문, lines 680–683) — 결재 구조 기술 및 선택적 기소 분석
- 최영수의 5시간 기술적 정당성 주장 증언 (군검찰 조사)
- 행정정보화과 2019년 방화벽 포트개방 문건 수십 건 존재 (§3.6.4.11.4)

## 반대 가설 (Counter-hypothesis)
1. **Reviewer-specific duty:** The prosecution targeted 한지훈 because the 팀장/reviewer bore the primary operational duty of technical verification, distinct from the 과장's administrative approval role — making the reviewer's criminal liability greater under applicable military law.
2. **Separate investigation:** 최영수 and 이준호 were separately investigated and cleared on individually documented grounds that are not visible in the public case file.
3. **Scope of charge:** The 위계공무집행방해 charge was specifically about the "deception" (위계) element, which the prosecution attributed to the reviewer's technical knowledge, not the approver's administrative action.

## 반증 조건 (Falsification Condition)
This claim is CORROBORATED unless:
1. A legal analysis or military precedent is produced showing that 팀장 (reviewer) bears categorically greater criminal liability than 과장 (final approver) for a port-opening decision under military administrative or criminal law.
2. Documented investigation records for 최영수 and/or 이준호 are produced showing they were substantively investigated and cleared on specific grounds.
3. The prosecution's internal charge sheet articulates why the "deception" (위계) element attaches to the reviewer but not the final approver who signed the same document.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 10. The selective targeting is facially evident from the approval chain structure: three signatories, one charged. The approver's 5-hour unrebutted testimony further weakens any claim that the port opening was objectively criminal. 진실성 is maximum because this pattern directly caused 한지훈's criminal stigma.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 680–683 — CONFIRMED: §3.6.4.11.4 describes the selective criminalization
- `Korean/11-3-5-35-제-5층위.md` — CONFIRMED: L5 chapter references Record No. 3,948 in the context of 갑질 조사
- Deferred to A.6 Re-verify.

## 미결 사항 (Open Questions)
- Was 최영수's 5-hour testimony recorded and preserved in the case file (raw/05)? If so, it would be direct evidence the prosecution proceeded despite an unrebutted expert defense.
- How many other firewall port-opening documents from 행정정보화과 (2019) can be identified and compared to 한지훈's document?
- Did 한지훈's (20220929) rebuttal document specifically argue the selective targeting within the approval chain?

## 관련 (Related)
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|L6 atom: 제58조 ¶4 misapplication]] (CAUSES)
- [[layer5-48hr-retaliation-causal-link|L5 atom: 48-hour retaliation chain]] (CAUSES)
- [[layer5-choi-youngsu-testimony-exposes-joseo-fabrication|L5 atom: 최영수 testimony]] (CAUSES)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|L6 atom: 기소유예 stigma harm]] (CAUSES)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/choi-young-su|최영수]] (ABOUT)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

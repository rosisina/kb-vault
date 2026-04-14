---
lang: ko
title-ko: "한지훈의 기소유예 처분은 면책이 아니라 형사 낙인이며, 32년 군 경력자에게 가해진 Layer 6 핵심 피해 그 자체이다"
title-en: ""
aliases:
  - FR-L6-002
  - "한지훈의 기소유예 처분은 면책이 아니라 형사 낙인이며, 32년 군 경력자에게 가해진"

layer: 6
secondary-layers: [7]
claimType: human_rights_violation
claimSubtype: criminal_disposition_harm
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 10
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L6-001", "L6-002"]
event-date: null

persons:
  - 한지훈
  - 최영수
  - 임형규
  - 안세준
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/human-rights-violation
  - source/book
  - fracture/F-CE
  - person/한지훈
  - person/최영수
  - person/임형규
  - person/안세준
  - org/군검찰단
  - cross-layer
---
# 한지훈의 기소유예 처분은 면책이 아니라 형사 낙인이며, 32년 군 경력자에게 가해진 Layer 6 핵심 피해 그 자체이다

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[011]` recordings 140/142/144/145/146 (한지훈↔임형규 verbatim) and recording 159 (lines 3537–3577, 한지훈↔최영수 직접 토의) • raw/05. Investigation by the Military Prosecutor's Office/ (기소유예 결정문 — pending ingest) • raw/01. book-beyond-cybersecurity/ (Layer 6/7 chapters)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-7|Layer 7]] (secondary — petition response)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-002"})
SET fr.layer = 6,
    fr.claimType = "human_rights_violation",
    fr.claimSubtype = "criminal_disposition_harm",
    fr.claimDesc = "The 기소유예 (deferred prosecution) disposition issued against 한지훈 by 군 검찰단 in October 2022 is, under Korean criminal procedure, a substantive criminal disposition that acknowledges criminal facts while withholding formal indictment — not exoneration. For a 32-year career officer whose conduct was lawful (per FR-L6-001), the 기소유예 outcome constitutes a continuous harm comprising: unlawful warrant + 압수수색 + 피의자 조사 + 기소유예 stigma + reputation damage + criminal branding + family harm + post-discharge social isolation",
    fr.counterHypothesis = "기소유예 is functionally equivalent to no-prosecution and does not constitute criminal stigma in Korean legal practice; the 한지훈 case's reputational and social harms are independent of the 기소유예 disposition and would have followed any investigation outcome",
    fr.falsificationCondition = "Production of (a) Korean Supreme Court rulings or 헌법재판소 decisions treating 기소유예 as functionally equivalent to 무혐의 for stigma purposes, OR (b) empirical evidence that 기소유예 recipients in Korea are not subject to background-check disclosure or career consequences distinct from 무혐의 recipients",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "한지훈 himself stated in raw/02 line 3540 (`내가 왜 기소유예를 당합니까? 제가 문제가 없는데`) and line 3541 (`무혐의지. 기소유예는 범죄사실이 있`); his interlocutor 최영수 acknowledged the same: `기각이 되야 되는데 왜 유예는 뭐 예요`. Korean criminal procedure 기소유예 is a 불기소 처분 of the 'criminal facts exist but prosecution deferred' type, structurally distinct from 무혐의 (no facts) and 기각 (rejected). For a person whose conduct was lawful, 기소유예 is a procedural injury, not a relief.";
```

## Claim

The 기소유예 (deferred prosecution) disposition issued against 한지훈 by 군 검찰단 in October 2022 is **not exoneration**. Under Korean criminal procedure, 기소유예 is a 불기소 처분 of the 'criminal facts exist, prosecution deferred' type — structurally distinct from 무혐의 (no criminal facts) and 기각 (case rejected). For a 32-year career officer whose underlying conduct was lawful (per [[han-ji-hoon-prosecution-violates-2129-role-separation]]), the 기소유예 outcome constitutes the central Layer 6 harm: it brands the recipient as criminal-but-undeserving-of-formal-prosecution rather than acknowledging that no criminal facts ever existed. The complete harm structure comprises:

1. **Unlawful warrant + 압수수색** — search and seizure executed on a charge structurally inapplicable to the 사업관리팀장 role
2. **피의자 조사** — being subjected to suspect interrogation
3. **기소유예 처분** — final disposition that brands the recipient with criminal facts despite no formal indictment
4. **평판 손상** — reputation damage to a person who acted lawfully
5. **32년 군 경력자에 대한 범죄자 낙인** — criminal stigma on a 32-year military career
6. **가족 피해** — family harm
7. **전역 후 사회적 고립** — post-discharge social isolation

## Key Takeaways

- Under Korean criminal procedure (형사소송법 제247조 기소편의주의), 기소유예 is a 불기소 처분 of the `범죄혐의가 인정되나` (criminal suspicion recognized) discretionary type — structurally distinct from 무혐의 (no criminal facts) and 기각 (case rejected) [타당성]
- 한지훈 himself rejects the exoneration framing (raw/02 recording 159 line 3540): `내가 왜 기소유예를 당합니까? 제가 문제가 없는데` — and articulates the structural distinction at line 3541: `무혐의지. 기소유예는 범죄사실이 있` [진실성]
- The interlocutor 최영수 concurs (raw/02 line 3546): `사실은 기소유예 조차도 안되야 되는데` — confirming that even 기소유예 should not have been the disposition for lawful conduct [진실성]
- The prosecutor's own 압수수색 yielded zero contractor-collusion evidence (raw/02 recording 142 line 6105: `업체와 관련 있다 거나 그런 거는 없다`), so the proper consequence of the contractor-collusion charge was 무혐의, not 기소유예 [진리성]
- The 기소유예 disposition was approved by the 단장 (안세준) via 결재 chain, not solely by 임형규 (raw/02 recording 142): `이것을 할 때는 단장님한테 다 결재를 받습니다` [진리성]
- For a 32-year career officer whose underlying conduct was lawful, the 기소유예 outcome is the central Layer 6 harm — criminal branding via deferred prosecution — not relief [진실성]

## Layer

[[../layers/layer-6|Layer 6]] (primary) — `군 검찰단의 사기 수사와 범죄자 낙인`. The "범죄자 낙인" (criminal branding) phrase is the layer's own framing. This atom is the explicit articulation of what that branding consists of and why the 기소유예 outcome — which a procedural surface reading might treat as protective — is in fact the branding mechanism itself. [[../layers/layer-7|Layer 7]] (secondary) — the 진정서 (petition) response in raw/02 [014] / raw/01 chapter 13 is precisely a response to the 기소유예 stigma, not to a "case dropped" outcome.

## Supporting evidence

- **한지훈's own framing of 기소유예 as injury (raw/02 recording 159, lines 3537–3577):**
  - Line 3537: `(최영수) 기소유예? 그래, 기소 유예가 되 야지 당연히.` — interlocutor initially treats it as a positive outcome
  - Line 3540: `(본인) 아니, 내가 왜 기소유예를 당합니까? 제가 문제가 없는데.` — 한지훈 immediately rejects the framing
  - Line 3541: `(최영수) 기각이 되야 되는데 왜 유예는 뭐 예요 (본인) 무혐의지. 기소유예는 범죄사실이 있` — joint articulation that the *correct* disposition would have been 기각 (dismissal) or 무혐의 (no charges), and that 기소유예 carries the implication of `범죄사실이 있` (criminal facts exist)
  - Line 3546: `그래, 기소 가치가 없다는 거야. 사실은 기소유예 조차도 안되야 되는데, 그래도` — interlocutor acknowledges that even 기소유예 should not have been the disposition
  - Line 3554: `제가 궁금한 건 변호사는 어떻게 할 건데. 기소유예 조차도 부당하다고 다시 항소` — explicit consideration of appealing the 기소유예 itself as unjust
  - Line 3559: `로 끝. 그 안 밖에 기소유예로 받았으니까. 네가 이건 좀 기소유예 정확한` — confirms the 기소유예 was the *final* disposition
  - Line 3577: `등법원, 대법원까지 가는데. 이길 가능성이 매우 낮다. 기소유예 한 건가지고` — interlocutor's caution about appeal feasibility

- **The 단장 결재 chain that produced the 기소유예 (per [[im-hyung-gyu]] verbatim, raw/02 recording 142):** `이것을 할 때는 단장님한테 다 결재를 받습니다.` — the 기소유예 disposition was approved by [[ahn-se-jun]] (군검찰단장), not solely by 임형규.

- **The 압수수색 negative finding that should have produced 무혐의 (raw/02 recording 142, line 6105):** `(군검사) 그런데 그거는 말씀하신 데로 뭐. 저번에 압수수색해보니까 업체와 관련 있다 거나 그런 거는 없다는 것.` — the prosecutor admitted to 한지훈 that no contractor-collusion evidence was found. The proper consequence of a contractor-collusion charge with zero contractor-collusion evidence is 무혐의, not 기소유예.

- **Korean criminal procedure on 기소유예** (general legal knowledge, pending Korean case-law citation in A.5 web research):
  - 기소유예 = 불기소 처분 (non-prosecution disposition) of the discretionary type under 형사소송법 제247조 (검사의 기소편의주의)
  - Distinguishing feature: 기소유예 acknowledges that `범죄혐의가 인정되나` (criminal suspicion is recognized) while exercising prosecutorial discretion to defer indictment
  - This is structurally distinct from `혐의없음` (무혐의), which is a finding of `범죄혐의 부존재` (no criminal suspicion exists)
  - 기소유예 records appear in personal background checks and may be invoked in subsequent proceedings under specific circumstances
  - For a public servant or military officer, the disposition carries career and reputational consequences distinct from 무혐의

## Counter-hypothesis

기소유예 is functionally equivalent to no-prosecution and does not constitute criminal stigma in Korean legal practice. Under this hypothesis, the 한지훈 case's reputational and social harms are independent of the 기소유예 disposition and would have followed *any* investigation outcome (including 무혐의), because the harm comes from the existence of the investigation itself, not from its disposition. The 기소유예 vs. 무혐의 distinction would then be a semantic legal nicety with no real-world consequence.

## Falsification condition

This claim is **CORROBORATED** unless one of the following is produced:

1. **Korean Supreme Court or Constitutional Court rulings** treating 기소유예 as functionally equivalent to 무혐의 for purposes of personal stigma, employment, or background checks. Specific cases would substantially weaken the claim.
2. **Empirical evidence** that 기소유예 recipients in Korea are not subject to background-check disclosure or career consequences distinct from 무혐의 recipients. Statistical or sociological data would be most decisive.
3. **A 형사소송법 amendment or 검찰사무규칙 provision** treating 기소유예 records as not maintained or not disclosable.
4. **Demonstration that 한지훈's reputation, family situation, or post-discharge circumstances would have been identical under a 무혐의 outcome** — i.e., that the harm is fully attributable to the investigation itself, not the disposition. This is the strongest version of the counter-hypothesis but is empirically unverifiable as a counterfactual.

If items 1–3 are produced with substantive content, the verdict downgrades to WEAKENED. Item 4 cannot be falsified directly but can be argued from comparator cases.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 10. The 진실성 (sincerity / victim-perspective) score is the maximum because the harm is articulated by the victim himself in raw/02 recordings 142 and 159, and the framing (`내가 왜 기소유예를 당합니까? 제가 문제가 없는데` / `무혐의지. 기소유예는 범죄사실이 있`) is precisely the structural distinction that the atom claims. The atom is in some sense self-evidencing — 한지훈's own statement that 기소유예 is unjust to a person whose conduct was lawful is the fact the atom asserts.

## Spot-check (raw/01 book)

- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 chapter (primary, will contain detailed treatment of the 기소유예 stigma and procedural harm)
- `vault-converted-korean/13-3-7-37-제7층위-진정서.md` — Layer 7 chapter (the petition response, framed as response to 기소유예 stigma)
- `vault-converted-korean/15-5-5-결론-및.md` — Conclusion (will likely contain the harm-structure summary)
- Deferred to A.6 Re-verify. The book is the primary source for the harm framework and should supply verbatim citations for each of the seven harm components.

## Open Questions

- **Is the 기소유예 결정문 itself in raw/05?** The verbatim text of the disposition would let the wiki extract the prosecutor's stated reasoning, which is the most directly falsifiable Layer 6 evidence.
- **Did 한지훈 file an 항소 / 헌법소원 against the 기소유예?** Per recording 159 line 3554, this was actively considered. The outcome of any appeal is queued.
- **Is there contemporaneous Korean legal commentary** distinguishing 기소유예 from 무혐의 for stigma purposes? A.5 web research target.
- **For atom completeness, the seven harm components should each be linked to a verbatim source citation.** This atom currently establishes the structure; A.6 Re-verify should attach a Record No. or recording reference to each numbered component.

## Related

- [[han-ji-hoon-prosecution-violates-2129-role-separation|paired Layer 6 atom: prosecution charge structurally inapplicable to 사업관리팀장]] (RELATED)
- [[han-ji-hoon|한지훈 entity hub]] (RELATED)
- [[im-hyung-gyu|임형규 (담당 검사)]] (RELATED)
- [[ahn-se-jun|안세준 (군검찰단장, 결재 승인자)]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../layers/layer-7|Layer 7 (petition response)]] (PART_OF_LAYER)
- [[../topics/fraud-investigation|Fraud Investigation]] (ABOUT)
- [[../topics/whistleblower-protection-and-reform|Whistleblower Protection and Reform]] (ABOUT)
- [[../topics/banality-vs-sophistication-of-evil|Banality vs Sophistication of Evil]] (ABOUT)

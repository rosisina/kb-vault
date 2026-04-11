# Test Evaluation Manipulation (시험평가 조작)

**Source:** `raw/01. book-beyond-cybersecurity/vault-converted-english/14-3-4-34-Fourth-Layer.md` • `raw/01. book-beyond-cybersecurity/vault-legacy-wiki-english/Test-Evaluation-Manipulation.md` (legacy synthesis) • [[../regulations/defense-it-operations-directive-2129|훈령 제2129호]] articles 제57–64조 and 제76조 (applicable directive)
**Layer:** [[../layers/layer-4|Layer 4]] (primary)
**Aurora node:** N/A — process/concept page.

**Test Evaluation Manipulation (시험평가 조작)** is the core Layer 4 narrative of *Beyond Cybersecurity*. Layer 4 is the most extensive and structurally central of the seven layers: it alleges that the test and evaluation (시험평가) process for the [[../events/2018-2019-kiatis-performance-improvement-project|New KIATIS performance improvement project]] was systematically manipulated before, during, and after execution. The regulatory scaffolding for this layer is the Chapter 4 Section 4 test-evaluation framework in [[../regulations/defense-it-operations-directive-2129|훈령 제2129호]] — the directive that was applicable to the KIATIS project under its RFP.

## Five types of alleged manipulation

### 1. KIDA research report fabrication

- [[../entities/organizations/kida|Korea Institute for Defense Analyses (KIDA)]] allegedly produced a fabricated research report to justify DT&E/OT&E integration.
- Used as academic basis for subsequent MND directive revisions (see [[../regulations/defense-it-operations-directive-2129|제2129호 forward diff]] showing the evolution of the DT&E/OT&E separation regime across revisions 제2263호 → 제2436호 → 제2842호).
- The book argues that KIDA's citation of the US **DOD Operational Test and Evaluation (OT&E) for Information and Business Systems** regulation as justification for integration is **false**, because the actual US regulation requires strict organizational and substantive separation of DT&E and OT&E. *Pending US regulation ingest for direct textual verification.*

### 2. Retroactive regulation revision (lex temporis violation)

- MND directives were revised **after the fact** to conceal violations in the test evaluation process.
- The KIATIS project (2018–2019) was legally subject to [[../regulations/defense-it-operations-directive-2129|훈령 제2129호 (2018-02-05)]] as the RFP-named directive, which mandates DT&E/OT&E separation under [[../regulations/defense-it-2129-article-58|제58조 ¶2]]. Any application of later revisions (제2436호 onward, which introduced integration-principle language) to 2018–2019 KIATIS conduct is **retroactive** — a violation of the lex temporis delicti principle in criminal law.
- See [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS event page]] §"Three possible legal paths for a test integration claim" for the formal legal argument.

### 3. Exclusion of the project management team leader

- The author — the project management team leader — was allegedly intentionally excluded from the test evaluation planning process.
- This excluded the person with the deepest technical knowledge of the system, which violates the separation-of-functions principle embedded in [[../regulations/defense-it-2129-article-11|제11조]]'s three-tier organizational structure.
- The exclusion also set up the scapegoat geometry that became Layer 5 (false power-abuse report).

### 4. Firewall policy manipulation

- Network security policies in the test evaluation environment were allegedly manipulated.
- The manipulation served to **conceal the inconsistency** between the Old KIATIS operational environment (Internet, no VPN) and the New KIATIS test environment (Defense Network).
- This manipulation is the technical core of the [[kiatis-systems#the-four-environment-comparison-layer-6-core-evidence|four-environment comparison]] that becomes the basis for Layer 6's fraud-investigation claim.

### 5. Time reversal manipulation (시간 역전현상)

- Official document dates were allegedly backdated.
- The book uses **temporal forensics** to prove this manipulation — comparing claimed document timestamps against the chronology implied by [[../regulations/defense-it-2129-article-76|제76조]]'s 13-stage software development sequence. A document for stage N that is dated after a document for stage N+K is temporally inconsistent with the mandatory ordering.
- The 13-stage sequence in 제76조 of the 2018-02-05 directive is the baseline against which time-reversal is measured. The consolidation of this sequence to 5 phases in 제2842호 (2023-09-20) makes later time-reversal detection procedurally harder because within-phase ordering is no longer strictly defined — a post-hoc loosening of the temporal-consistency standard.

## Logical proof via truth function tables

The book applies mathematical and logical proof using truth function tables to demonstrate the test evaluation manipulation:

- Old KIATIS environment ≠ New KIATIS test environment (the network domains themselves differ).
- A 99.7-point evaluation result was allegedly manipulated to appear as a failure.
- The logical proof is constructed so that **any one of the four environments being identical to any other** is a falsifiable sub-claim — the prosecution's case requires at least one such identity to hold.

## Comparison with US DoD OT&E standards

The book compares the ROK military's test evaluation procedures against US Department of Defense Operational Test & Evaluation (DOT&E) standards, arguing that ROK procedures are **non-compliant with international norms** on separation of DT&E from OT&E. The US regulation is in `raw/04. law & regulation/` (pending ingest) and serves as the independent textual check on KIDA's alleged fabrication (see Type 1 above).

## Key Takeaways

- [타당성] The KIATIS project was legally subject to [[../regulations/defense-it-operations-directive-2129|훈령 제2129호]] under which DT&E (conducted by [[../entities/organizations/gukjeonwon|국전원]]) and OT&E (conducted by [[../entities/organizations/dma-defense-pow-mia-accounting-agency|DMA]]) must be separated — the 6.25억 contract value forecloses the 5억 미만 delegated-regime exception.
- [진리성] Five distinct manipulation types (KIDA fabrication, retroactive revision, team-leader exclusion, firewall policy, time reversal) are documented in Layer 4, each with independent evidence. The book argues that any one of them is independently sufficient to establish the layer.
- [진리성] Time reversal manipulation is measurable against the 13-stage sequence of [[../regulations/defense-it-2129-article-76|제76조]]; any deliverable dated out of sequence is direct evidence of backdating.
- [진리성] The KIDA research report's alleged misrepresentation of the US DoD OT&E regulation is the highest-value falsifiable sub-claim in this layer: textual comparison of KIDA's citation against the actual US regulation text would either corroborate or refute it definitively.
- [진실성] Layer 4 is the **most extensively evidenced** layer and presents the core physical evidence (firewall logs, truth function tables, regulation revision history, 99.7-point evaluation result). It is structurally central because it is the layer most directly referenced by the 2022 military prosecutor's office investigation (Layer 6).

## Claim atoms (A.4 first batch, 2026-04-11)

Layer 4 propositional content is now distilled into atomic claim Zettels. This topic page is the narrative reading layer; the atoms below are the audit/falsification layer.

- [[../claims/2436ho-cluster-six-anchors]] — meta: 제2436호 (2020-06-04) is a six-anchor cluster reconstructing the entire test-evaluation regime in a single revision (CORROBORATED, strong)
- [[../claims/2436ho-test-evaluation-principle-inverted]] — A9: 분리 원칙 → 통합 원칙 inversion (CORROBORATED, strong)
- [[../claims/2436ho-dtne-articles-erased]] — A10: 제59·60·61조 erased to `<삭 제>` (CORROBORATED, strong)
- [[../claims/2398-2842ho-otne-environment-hedge-flipflop]] — A8a: OT&E environment hedge flip-flop (NEEDS_MORE_EVIDENCE, moderate)
- [[../claims/2436ho-otne-sponsor-binding-erased]] — A8b: 사업주관기관 주관 하에 erasure (CORROBORATED, moderate)
- [[../claims/2842ho-software-development-13-to-5-stage]] — A7: 13-stage → 5-phase consolidation, time-reversal detection erosion (NEEDS_MORE_EVIDENCE, moderate)
- [[../claims/kiatis-2129ho-main-regime-applies]] — KIATIS bound by 제58조 ¶2 main regime (CORROBORATED, strong)
- [[../claims/kiatis-rfp-binds-lifecycle]] — KIATIS conduct measured against 제2129호 by 행위시법주의 (CORROBORATED, strong)
- [[../claims/kida-otne-citation-misrepresents-us-standard]] — KIDA's citation of US DoD OT&E guidelines misrepresents the US standard by selective omission; US comparator established 2026-04-11 (NEEDS_MORE_EVIDENCE, moderate; awaits KIDA report)

## Related

- [[7-layer-proof-system|7-Layer Proof System]]
- [[kiatis-systems|KIATIS Systems]]
- [[fraud-investigation|Fraud Investigation]]
- [[defense-informatization-cartel|Defense Informatization Cartel]]
- [[../events/2018-2019-kiatis-performance-improvement-project|2018–2019 KIATIS Performance Improvement Project]]
- [[../regulations/defense-it-operations-directive-2129|훈령 제2129호 (applicable directive)]]
- [[../regulations/defense-it-2129-article-58|제58조 (DT&E/OT&E separation principle, 5억 threshold)]]
- [[../regulations/defense-it-2129-article-60|제60조 (DT&E 7-item list)]]
- [[../regulations/defense-it-2129-article-63|제63조 (OT&E 9-item list, anti-laundering gate)]]
- [[../regulations/defense-it-2129-article-76|제76조 (13-stage software process, time-reversal anchor)]]
- [[../entities/organizations/kida|KIDA]]
- [[../entities/organizations/gukjeonwon|국전원 (DT&E)]]
- [[../entities/organizations/dma-defense-pow-mia-accounting-agency|DMA (OT&E)]]
- [[../layers/layer-4|Layer 4 hub]]

# Layer 6 — Fraud Investigation and Criminal Stigmatization (군 검찰단의 사기 수사와 범죄자 낙인)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md (book §3.6), raw/02. Individual recording logs/ (recordings 140/142/144/145/146/159), raw/05. Investigation by the Military Prosecutor's Office/, ../defense-kg-platform/kg/evidence_record_mapping.json
**Layer:** 6
**Evidence record range:** Record No. 4,600–5,248

## Thesis

Layer 6 is the **criminalization phase** of the 7-layer structure: the Military Prosecutor's Office (군 검찰단) conducts a targeted investigation against 한지훈 for the KIATIS performance-improvement project, culminating in a 기소유예 (deferred prosecution) disposition on 2022-10-07. The book frames this not as a prosecution that failed but as an **institutional fraud investigation (사기수사)** — the investigative authority is itself the instrument of concealment rather than of adjudication.

Two legally-decisive Layer 6 facts anchor the thesis: (a) under 훈령 제2129호 제11조 the 사업관리팀장 role is structurally barred from test-evaluation execution (the authority belongs to 사업주관기관 under 제57조 ¶1 제2호), so the prosecution's `시험평가환경을 속였다` warrant charge cannot stand against a 사업관리팀장; and (b) the 불기소이유서 textually misapplies 제58조 ¶4 (the 5억-미만 exception clause for 제3항 projects) to KIATIS, a 6.25억 project that does not qualify under any ¶3 path. The 기소유예 outcome is therefore **criminal stigma, not exoneration** — under Korean criminal procedure, a 불기소 처분 of the `범죄혐의가 인정되나` discretionary type, structurally distinct from 무혐의.

## Atoms (3 primary + cross-layer)

### Foundational Layer 6 claims

- [[../claims/han-ji-hoon-prosecution-violates-2129-role-separation]] — The 사업관리팀장 role under 제2129호 제11조 is structurally barred from test-evaluation execution; 압수수색 produced no contractor-collusion evidence per 임형규's own admission. **CORROBORATED (strong)**
- [[../claims/han-ji-hoon-kiso-yuye-is-criminal-stigma]] — 기소유예 is NOT exoneration; it is a 불기소 처분 of the `범죄혐의가 인정되나` type, structurally distinct from 무혐의. Inflicts a 7-component continuous harm on a 32-year military-career officer. **CORROBORATED (strong)**
- [[../claims/prosecution-misapplies-2129-article-58-4-to-kiatis]] — The 불기소이유서 cites 제2129호 제58조 ¶4 as legal basis, but ¶4 is the exception clause for 제3항 projects (5억 미만); KIATIS at 6.25억 does not qualify under any ¶3 path. Textual misapplication of the directive. **CORROBORATED (strong)**

### Cross-layer references (Layer 6 secondary)

- [[../claims/han-ji-hoon-rebuttal-rejected-by-eight-institutions]] — Steps 3–6 of the rejection chain (군검찰단장, 검사, 수사관, 인권담당) are Layer 6 continuations; steps 7–8 extend into Layer 7.
- [[../claims/defense-information-cartel-named-by-rebuttal]] — 5-organization cartel definition names the 국방부 검찰단 as a cartel member, making Layer 6 part of the cartel's operational structure.
- [[../claims/kiatis-rfp-binds-lifecycle]] — 행위시법주의 doctrine establishing 제2129호 as the applicable regime during KIATIS 2018~2019 conduct — prerequisite for the Layer 6 ¶4 misapplication claim.
- [[../claims/firewall-policy-form-approved-by-wrong-officer]] — Layer 1 SOP violation used in the Layer 6 charging document; doubly significant because the same form is the prosecution's evidence.

## Contradictions

- [[../_fractures]] — L6 entries track the gap between the book's fraud-investigation thesis and the prosecution's stated legal reasoning. The 제58조 ¶4 misapplication finding is the strongest L6 contradiction: a single textual error in the 불기소이유서 that the prosecution itself cannot defend without admitting the charge foundation collapses.

## Regulations

- [[../regulations/defense-it-operations-directive-2129|훈령 제2129호 hub]] — the directive the prosecution failed to apply correctly
- [[../regulations/defense-it-2129-article-11|제11조 (사업관리기관 / 사업주관기관 role separation)]] — the structural basis for the role-separation defense
- [[../regulations/defense-it-2129-article-58|제58조 (시험평가 계획 수립)]] — the article whose ¶4 the prosecution textually misapplied

## Events

- [[../events/2018-2019-kiatis-performance-improvement-project|2018~2019 KIATIS 성능개선사업]] — the subject of the 2022 investigation

## Entities

- [[../entities/people/han-ji-hoon|한지훈]] — subject of investigation, author of the case
- [[../entities/people/im-hyung-gyu|임형규]] — 국방부 군검찰단 검사 (executing prosecutor, August 2022 handover)
- [[../entities/people/ahn-se-jun|안세준]] — 국방부 군검찰단장 (decisional approver; every prosecution decision requires 단장 결재)
- [[../entities/people/jin-sang-ho|진상호]] — 국방부 군검찰단 수사관 (investigator)
- [[../entities/organizations/kida|KIDA]] — Layer 4 academic-justification actor whose report may have been used by the MPO as authority during the 2022 investigation

## Topics

- [[../topics/fraud-investigation|Fraud Investigation (사기수사)]] — the legal-theoretical frame for Layer 6
- [[../topics/defense-informatization-cartel|Defense Informatization Cartel]] — the organizational actor set in which Layer 6 operates
- [[../topics/banality-vs-sophistication-of-evil|Banality vs Sophistication of Evil]] — theoretical framing applied to the prosecution conduct
- [[../topics/apt-style-individual-targeting|APT-Style Individual Targeting]] — meta-framework

## Aurora correspondence

This hub corresponds to Aurora `:Layer {layer: 6}` node and aggregates all `:FalsificationResult` nodes serialized from the 3 primary atoms + secondary-layer contributions. Each primary atom carries its own `MERGE` block; promotion to Aurora is per-atom, not per-hub.

## Open Questions

- **What directive framework did the 2022 prosecution actually apply?** 임형규's raw/02 statements do not specify whether the investigation used 제2129호 (KIATIS-applicable per 행위시법주의) or a later directive. Pending raw/05 case file verbatim ingest. This is the **central Layer 6 evidentiary question** and affects every claim atom in this layer.
- **What is 안세준's full 결재 chain for this case?** raw/02 line 6105: `이것을 할 때는 단장님한테 다 결재를 받습니다`. The sign-off documents are presumably in raw/05 but not yet surfaced as verbatim.
- **Was 임형규's predecessor (January–July 2022) prosecutor's draft opinion preserved?** The August 2022 handover structure raises the question whether the handover was used to insulate the case from findings by the original prosecutor.
- **Is there a `진상호 (수사관)` interrogation transcript in raw/05** that would corroborate the dismissive-register claim (raw/02 recording 140 line 6024)?

## Key Takeaways

- [진리성] **Layer 6 is the criminalization phase** — the 2022 military prosecutor investigation, its 압수수색검증 warrant, and the 기소유예 disposition form a continuous operational sequence with the 2016 DIDC hacking cover-up (Layer 1) as its motive.
- [타당성] **The 사업관리팀장 role is structurally barred from test-evaluation execution** under 훈령 제2129호 제11조 (사업관리기관) and 제57조 ¶1 제2호 (사업주관기관). The prosecution's `시험평가환경을 속였다` charge against a 사업관리팀장 cannot stand under the directive's own text.
- [타당성] **The 불기소이유서 textually misapplies 제58조 ¶4 to KIATIS** — ¶4 is the exception clause for 제3항 projects (5억 미만), and KIATIS at 6.25억 does not qualify under any ¶3 path. This is a discrete textual error, not a matter of interpretation.
- [진실성] **기소유예 is criminal stigma, not exoneration** — per Korean criminal procedure, 기소유예 is a 불기소 처분 of the `범죄혐의가 인정되나` discretionary type, structurally distinct from 무혐의. For a 32-year-career officer whose conduct was lawful, the outcome is a 7-component continuous harm (unlawful warrant + 압수수색 + 피의자 조사 + 기소유예 stigma + 평판 손상 + 범죄자 낙인 + 가족 피해 + 사회적 고립).
- [진리성] **압수수색 produced no contractor-collusion evidence** — verbatim from 임형규 (raw/02 recording 142 line 6105): `그런데 그거는 말씀하신 데로 뭐. 저번에 압수수색해보니까 업체와 관련 있다 거나 그런 거는 없다는 것.` The warrant's central allegation failed evidentially, yet the investigation continued.
- [진실성] **The prosecution's decisional locus is the 단장 (안세준), not the 검사 (임형규)** — per 임형규's own admission that every prosecution decision requires 단장 결재, the institutional responsibility for the 기소유예 outcome belongs to the 군검찰단장 office, not the individual prosecutor.
- **Layer 6은 범죄화 단계.** 군 검찰단의 사기수사와 기소유예 낙인이 한지훈 중령에게 가해진 Layer 6 핵심 피해 그 자체이다. 사업관리팀장 역할은 훈령상 시험평가 실행에서 구조적으로 배제되어 있음에도 불구하고 `시험평가환경을 속였다`는 영장이 청구되었고, 불기소이유서는 제58조 ¶4를 텍스트상 잘못 적용하였다.

## Related

- [[_index|Layers index]]
- [[../_master-index|Master index]]
- [[../_fractures|Fractures]]
- [[../claims/_index|Claims]]
- [[layer-5|← Layer 5]]
- [[layer-7|Layer 7 →]]

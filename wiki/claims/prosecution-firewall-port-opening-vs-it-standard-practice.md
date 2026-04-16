---
lang: ko
title-ko: IT 상식과의 괴리 — 군검찰이 전 세계 IT 표준 실무인 방화벽 포트 개방을 범죄로 규정
title-en: IT 상식과의 괴리 — 군검찰이 전 세계 IT 표준 실무인 방화벽 포트 개방을 범죄로 규정
aliases:
  - FR-L6-B2-003
  - IT 상식과의 괴리 — 군검찰이 전 세계 IT 표준 실무인 방화벽 포트 개방을 범죄로 규정

layer: 6
secondary-layers: [5]
claimType: prosecution_misconduct
claimSubtype: prosecution_contradicts_it_standard_practice
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 10
analysisDate: 2026-04-11

record-nos: [4338, 4542]
evidence-ids: []
event-date: null

persons:
  - 임형규
  - 최동욱
  - 한지훈
organizations:
  - DIDC
  - 국전원
has-verbatim: false

tags:
  - layer/L6
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/book
  - fracture/F-CE
  - person/임형규
  - person/최동욱
  - person/한지훈
  - org/DIDC
  - org/국전원
  - has/record-nos
  - cross-layer
---
# IT 상식과의 괴리 — 군검찰이 전 세계 IT 표준 실무인 방화벽 포트 개방을 범죄로 규정

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.4.11.6, lines 690–693)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-5|Layer 5]] (secondary — Record No. 4,338 falls in L5 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-B2-003"})
SET fr.layer = 6,
    fr.secondaryLayer = 5,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_contradicts_it_standard_practice",
    fr.claimDesc = "The military prosecution treated firewall port opening during test/development as criminal conduct (위계공무집행방해). However, firewall port opening is standard IT practice worldwide — used by Microsoft, Amazon, Google, and all IT enterprises. In development/test environments, ports are opened as needed for testing, then hardened at operational deployment. The prosecution's technical ignorance is evidenced by the questions in the 참고인 진술서, 피의자 신문조서, and the questions provided by lawyer 최동욱 (Record No. 4,338ff, Record No. 4,542ff), which demonstrate misunderstanding of firewall, VPN, and DB access concepts. Prosecutor 임형규 himself acknowledged it was not a 'technical' issue but a matter of accepting the cartel's fabricated narrative about the port opening.",
    fr.counterHypothesis = "The prosecution's charge was not about the port opening itself but about the manner of requesting it (위계 = deception in the process), making IT industry practice irrelevant to the legal question",
    fr.falsificationCondition = "Production of a technical expert report commissioned by the prosecution that analyzed the specific port-opening action and concluded it deviated from standard IT practice in a materially significant way",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The prosecution criminalized a standard IT practice (firewall port opening in test environments) while demonstrating technical ignorance in its own investigation documents. Prosecutor 임형규 admitted the issue was not technical but narrative-based.";
```

## 주장 (Claim)

### 한국어

군검찰은 시험평가 환경에서의 방화벽 포트 개방을 "위계에 의한 공무집행방해"로 규정했으나, 방화벽 포트 개방은 **전 세계 IT 업계의 표준 실무**이다. 개발 및 시험 환경에서 필요한 포트를 개방하여 테스트하고 운영 단계에서 보안을 강화하는 것은 Microsoft, Amazon, Google 등 모든 IT 기업이 사용하는 표준 방법이다. 2019년부터 2022년까지 국전원 단톡방에서도, 장애 발생 시 처리에서도 동일한 방식으로 수행되었다.

군검찰의 기술적 무지는 한지훈을 대상으로 한 참고인 진술서, 피의자 신문조서, 그리고 변호사 최동욱이 제공한 질문지 (Record No. 4,338부터, Record No. 4,542부터)에서 명백히 드러난다. 이 문서들은 방화벽, VPN, 데이터베이스 접속 등의 기술적 개념을 정확히 이해하지 못하고 있다는 증거이다.

검사 임형규는 스스로 "기술적으로 완성도가 얼마나 되느냐 잘했냐 못했냐 이게 쟁점이 아니라"라고 발언하며, 쟁점이 기술적 문제가 아니라 3년 후에 카르텔이 조작한 내용으로 "방화벽 포트가 개방"이 문제가 있다는 논리를 받아들인 것임을 자인했다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- Firewall port opening in development/test environments is universal IT standard practice (Microsoft, Amazon, Google, all enterprises) — the prosecution criminalized a routine technical operation [진리성].
- The prosecution's own investigation documents (참고인 진술서, 피의자 신문조서, lawyer 최동욱's questions from Record No. 4,338ff and Record No. 4,542ff) demonstrate misunderstanding of firewall, VPN, and DB access concepts [진리성].
- Prosecutor 임형규 admitted on record that the issue was "not technical" — effectively acknowledging the charge was based on the cartel's post-hoc narrative, not on technical analysis [진리성][진실성].
- 한지훈, a 32-year IT professional, was subjected to gaslighting: forced to question whether his entire career's professional practices were wrong [진실성].
- The prosecution applied DIDC 예규 interpretations that contradict the regulations' own purpose and standard IT practice [타당성].

## 지지 증거 (Supporting Evidence)
- Record No. 4,338 (L5) — 참고인 진술서·피의자 신문조서 시작 (변호사 최동욱 제공 질문지)
- Record No. 4,542 (L5) — 추가 질문지 시작
- §3.6.4.11.6 (제6층위 본문, lines 690–693) — IT 상식과의 괴리 분석
- 검사 임형규 발언 (각주 560): "기술적으로 완성도가 얼마나 되느냐 잘했냐 못했냐 이게 쟁점이 아니라"
- 2019–2022 국전원 단톡방 — 동일한 방화벽 포트 개방 실무가 지속적으로 수행됨
- 행정정보화과 2019년 방화벽 포트 개방 문건 수십 건 존재

## 반대 가설 (Counter-hypothesis)
1. **Process vs. substance:** The prosecution's charge was not about the port opening itself being technically wrong, but about the manner of requesting it — specifically, that the request form or justification contained deceptive elements (위계). Under this hypothesis, IT industry practice is irrelevant because the charge targets the process of authorization, not the technical action.
2. **DIDC-specific security context:** Military networks have heightened security requirements that make civilian IT practices inapplicable. The DIDC 예규 establishes a stricter standard than commercial IT environments, and the prosecution's interpretation of 예규 was within the range of reasonable legal construction.
3. **Prosecutor's statement recontextualized:** 임형규's "not technical" statement may have meant that the legal charge transcends technical correctness — i.e., even a technically sound action can constitute 위계 if the authorization was obtained deceptively.

## 반증 조건 (Falsification Condition)
This claim is CORROBORATED unless:
1. A technical expert report commissioned or reviewed by the prosecution is produced showing that the specific port-opening action deviated from standard IT practice in a materially significant way (not just that it violated a bureaucratic form requirement).
2. An authoritative analysis demonstrating that DIDC 예규 prohibits port opening in test environments — as distinct from operational environments — is produced.
3. The prosecution's investigation file contains documented technical expert consultation that informed the charge, countering the claim of technical ignorance.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 10. The gap between global IT standard practice and the prosecution's position is objectively verifiable. The investigation documents (Record No. 4,338ff) serve as direct evidence of technical misunderstanding. Prosecutor 임형규's own statement undermines the technical basis of the charge. 진실성 is maximum because this pattern weaponized professional gaslighting against a 32-year IT expert.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 690–693 — CONFIRMED: §3.6.4.11.6 IT 상식과의 괴리
- Record No. 4,338 / Record No. 4,542 references verified in source text
- Prosecutor 임형규 statement verified in footnote 560
- Deferred to A.6 Re-verify.

## 미결 사항 (Open Questions)
- Can the specific questions from Record No. 4,338 and Record No. 4,542 be extracted and catalogued as individual evidence of technical misunderstanding?
- Did the prosecution consult any independent IT security expert during the investigation? If not, the absence itself is evidence.
- Are the 2019–2022 단톡방 messages about port opening preserved in raw/03? If so, they would corroborate that the practice was routine and organizational, not individual.

## 관련 (Related)
- [[prosecution-selective-criminalization-firewall-approval-chain|L6 atom: selective targeting in approval chain]] (CAUSES)
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|L6 atom: 제58조 ¶4 misapplication]] (OPPOSES)
- [[prosecution-distorts-operational-vs-test-environment|L6 atom: operational vs test environment distortion]] (OPPOSES)
- [[layer5-choi-dongwook-dual-role-lawyer-or-conspirator|L5 atom: 최동욱 dual role]] (OPPOSES)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|L6 atom: 기소유예 stigma]] (OPPOSES)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/im-hyung-gyu|임형규 (검사)]] (ABOUT)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

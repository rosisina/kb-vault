---
lang: ko
title-ko: 최동욱 변호사의 수개월간 기술적 무지 — 산출물·DT/OT·훈령을 모르면서 2천만원 수임
title-en: 최동욱 변호사의 수개월간 기술적 무지 — 산출물·DT/OT·훈령을 모르면서 2천만원 수임
aliases:
  - FR-L6-LAWYER-TECHNICAL-IGNORANCE
  - 최동욱 변호사의 수개월간 기술적 무지 — 산출물·DT/OT·훈령을 모르면서 2천만원 수임

layer: 6
secondary-layers: []
claimType: attorney_misconduct
claimSubtype: attorney_incompetence
fracture-type: F-CE
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 10
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 최동욱
  - 한지훈
organizations: []
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/attorney-misconduct
  - source/recording
  - fracture/F-CE
  - person/최동욱
  - person/한지훈
---
# 최동욱 변호사의 수개월간 기술적 무지 — 산출물·DT/OT·훈령을 모르면서 2천만원 수임

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md 녹취198+202+205 (lines 10655-10983)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-LAWYER-TECHNICAL-IGNORANCE"})
SET fr.layer = 6,
    fr.claimType = "attorney_misconduct",
    fr.claimSubtype = "attorney_incompetence",
    fr.claimDesc = "수개월+2천만원 수임에도 산출물·DT/OT·훈령 미이해. 효과적 방어 구조적 불가능.",
    fr.counterHypothesis = "최동욱은 일반 군사법 변호사로서 의뢰인이 제공한 기술 자료에 의존하는 것이 합리적 분업이다",
    fr.falsificationCondition = "최동욱이 국방정보화업무훈령이나 KIATIS 사업 문서를 독자적으로 검토한 기록, 또는 기술 자문을 의뢰한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "수개월+2천만원 수임에도 산출물·DT/OT·훈령 미이해. 효과적 방어 구조적 불가능.";
```

## Claim

최동욱 변호사는 수개월간 한지훈을 수임하면서도 개발시험평가/운영시험평가 구분, 국방정보화업무훈령 역할 정의, 제안요청서 VPN 제외 조항 등 사건의 기술적 실체를 전혀 파악하지 않았다. 한지훈: '장로님은 전혀 내용을 모르시면서... 이천만원 넘게 주고 하는데, 내용도 모르시고 판단이 안 서요?' 최동욱은 '산출물'이 무엇인지도 모른다고 인정.

## Key Takeaways

- Despite months of representation and 20M+ KRW fees, 최동욱 never learned basic case concepts — DT/OT distinction, 훈령 role definitions, RFP VPN exclusion [진리성]
- 한지훈 directly confronted the lawyer's ignorance in recorded conversation [진실성]
- A lawyer who cannot understand the charges cannot provide effective defense [타당성]

## Supporting evidence

- *(regulation-text claim — Record No. exempt per CLAUDE.md)*

## Counter-hypothesis

최동욱은 일반 군사법 변호사로서 의뢰인이 제공한 기술 자료에 의존하는 것이 합리적 분업이다

## Falsification condition

최동욱이 국방정보화업무훈령이나 KIATIS 사업 문서를 독자적으로 검토한 기록, 또는 기술 자문을 의뢰한 기록

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 10.

## Spot-check

- `vault-converted-korean/(Korean) individual_recording_logs_beyond_cybersecurity.md` lines 10655-10983

## Related

- [[choi-dongwook-resignation-threat-coercive-control]] (CORROBORATES)
- [[layer5-choi-dongwook-dual-role-lawyer-or-conspirator]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

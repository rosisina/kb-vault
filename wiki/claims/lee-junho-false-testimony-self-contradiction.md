---
lang: ko
title-ko: 이준호의 허위 진술 — 자신의 공문이 반박
title-en: 이준호의 허위 진술 — 자신의 공문이 반박
aliases:
  - FR-L6-LEEJUNHO-FALSE-TESTIMONY
  - 이준호의 허위 진술 — 자신의 공문이 반박

layer: 6
secondary-layers: []
claimType: witness_manipulation
claimSubtype: witness_self_contradiction
fracture-type: F-SC
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 10
validity: 9
sincerity: 7
analysisDate: 2026-04-12

record-nos: [1171, 1239, 6168]
evidence-ids: []
event-date: null

persons:
  - 이준호
  - 최영수
organizations:
  - DIDC
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/witness-manipulation
  - source/book
  - fracture/F-SC
  - person/이준호
  - person/최영수
  - org/DIDC
  - has/record-nos
---
# 이준호의 허위 진술 — 자신의 공문이 반박

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md §3.6.4.6.8 (lines 489-580)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-LEEJUNHO-FALSE-TESTIMONY"})
SET fr.layer = 6,
    fr.claimType = "witness_manipulation",
    fr.claimSubtype = "witness_self_contradiction",
    fr.claimDesc = "이준호 (공모자-1)는 '실제 기반운영환경에서는 DB에 바로 접근하는 방식으로 운용할 수 없다'(Record 1,171)고 진술하였으나, 시험평가 종료 3주 후인 2019.10.2에 자신이 작성한 방화벽 정책 요청서(Record 6,168)는 舊KIATIS와 新KIATIS 모두에 대해 VPN 없이 DB 직접접속을 요청하고 있어, 자신의 진술을 직접 반박한다",
    fr.counterHypothesis = "이준호의 진술은 '정상적 운용환경에서는 DB 직접접속이 불가능해야 한다'는 당위적 진술이며, 2019.10.2 요청서는 임시 조치였다",
    fr.falsificationCondition = "이준호의 2019.10.2 방화벽 요청이 예외적 임시 조치였음을 보여주는 DIDC 승인 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Record 1,171에서 이준호 진술 'DB 바로 접근 불가'. Record 6,168에서 이준호 자신의 2019.10.2 요청서가 DB 직접접속 요청. 시험평가 종료(9.11) 3주 후에도 동일 구조 유지 — 진술과 행위의 직접 모순.";
```

## Claim

이준호 (공모자-1)의 참고인 진술(기록 제1,171쪽): "실제 기반운영환경에서는 DB에 바로 접근하는 방식으로 운용할 수 없다."

그러나 이준호 자신이 시험평가 종료(2019.9.11) 3주 후인 2019년 10월 2일에 작성한 방화벽 정책 요청서(기록 제6,168쪽)는 舊KIATIS와 新KIATIS 서버 모두에 대해 VPN 없이 DB 직접접속을 요청하고 있다. 이는 시험평가 이후에도 DB 직접접속이 표준 운용 방식이었음을 이준호 자신의 공문이 증명하는 것이다.

또한 최영수의 진술(기록 제1,239쪽)도 동일한 맥락을 확인한다.

## Key Takeaways

- 이준호's testimony "cannot access DB directly in real environment" (Record No. 1,171) is directly contradicted by his own firewall request 3 weeks after evaluation (Record No. 6,168) requesting DB direct access [진리성]
- This self-contradiction is the strongest form of evidence — the witness's own document refutes his own testimony [진리성]
- DB direct access continued as standard practice even after the evaluation — the prosecution's entire "test environment ≠ real environment" premise collapses [타당성]

## Supporting evidence

- **Record No. 1,171, 1,173** — 이준호 참고인 진술
- **Record No. 6,168** — 이준호의 2019.10.2 방화벽 정책 요청서
- **Record No. 1,239** — 최영수 진술

## Counter-hypothesis

이준호의 진술은 당위적 진술이며, 10.2 요청서는 임시 조치였다.

## Falsification condition

2019.10.2 요청이 예외적 임시 조치였음을 보여주는 DIDC 승인 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 10 / 타당성 9 / 진실성 7.

## Spot-check

- `vault-converted-korean/12-3-6-36-제6층위-군.md` lines 489-580

## Related

- [[firewall-requests-confirm-no-vpn-db-direct-access]] — L4 방화벽 추가 증거 (OPPOSES)
- [[prosecution-identity-fallacy-deception-technique]] — L6 동일성 오류 (OPPOSES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

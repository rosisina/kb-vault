---
lang: ko
title-ko: 국유단의 사업통제+주관기관 이중역할 — 전례 없는 위반 구조
title-en: 국유단의 사업통제+주관기관 이중역할 — 전례 없는 위반 구조
aliases:
  - FR-L2-DUAL-CAP-UNPRECEDENTED
  - 국유단의 사업통제+주관기관 이중역할 — 전례 없는 위반 구조

layer: 2
secondary-layers: []
claimType: regulatory_manipulation
claimSubtype: regulatory_structural_violation
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-11

record-nos: [1131, 3331, 5853, 10053]
evidence-ids: []
event-date: null

persons:
  - 이지영
  - 김수진
  - 한지훈
organizations:
  - 국전원
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L2
  - verdict/corroborated
  - strength/strong
  - type/regulatory-manipulation
  - source/book
  - fracture/F-CE
  - person/이지영
  - person/김수진
  - person/한지훈
  - org/국전원
  - org/MND
  - org/국유단
  - has/record-nos
---
# 국유단의 사업통제+주관기관 이중역할 — 전례 없는 위반 구조

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md §3.2.1.2 (lines 23-70)
**Layer:** [[../layers/layer-2|Layer 2]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-DUAL-CAP-UNPRECEDENTED"})
SET fr.layer = 2,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_structural_violation",
    fr.claimDesc = "新KIATIS 사업에서 국유단이 사업통제기관과 사업주관기관을 동시에 담당하는 이중역할(Dual Cap) 구조는 국방정보화사업 역사상 전례가 없다. 동일 과(행정정보화과)에서 동일 시기에 진행된 '국방 조직정원 정보체계 고도화 사업'(2017.4~2019.1)은 훈령을 정상 준수(사업통제기관=국방부, 사업주관기관=국방부 조직총괄과)하여 대조 사례를 제공한다",
    fr.counterHypothesis = "국유단의 이중역할은 국방부의 묵시적 위임 하에 이루어진 것이며, 소규모 사업에서는 관행적으로 허용되는 구조이다",
    fr.falsificationCondition = "국유단 또는 유사 기관이 사업통제+주관기관을 동시 수행한 다른 국방정보화사업 사례의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Record 1,131/1,140/1,474에서 국유단 이중역할 확인. 대조 사례: 조직정원체계 사업은 사업통제=정보화기획관실, DT/OT 각각 별도 승인. 이지영·김수진이 두 사업 모두의 정보화기획관실 담당 — 新KIATIS만 역할 회피는 의도적.";
```

## Claim

新KIATIS 사업에서 국유단이 사업통제기관과 사업주관기관을 동시에 담당하는 "이중역할(Dual Cap)" 구조(사업계획서 기록 제1,131쪽, 사업계획보고 기록 제1,140쪽, 최종 제안요청서 기록 제1,474쪽)는 국방정보화사업 역사상 전례가 없는 구조이다.

**대조 사례:** 동일 과(행정정보화과)에서 동일 시기에 진행된 「국방 조직정원 정보체계 고도화 구축 사업」(2017.4~2019.1, 기록 제3,331쪽, 제6,753쪽)은 훈령을 정상 준수:
- 사업통제기관: 국방부 정보화기획관실
- 사업주관기관: 국방부 조직총괄과
- 사업관리기관: 국전원
- DT/OT 각각 별도 승인

특히 정보화기획관실 담당자가 동일인물(이지영 과장, 김수진 주무관)이면서, 조직정원체계 사업에서는 4대 기능을 정상 수행하고 新KIATIS 사업에서만 전면 회피한 것은 의도적임이 명백하다.

## Key Takeaways

- The Dual Cap structure (국유단 as both 사업통제 + 사업주관기관) is unprecedented in defense IT project history [진리성]
- A directly comparable project in the same office at the same time followed regulations correctly — proving the violation was deliberate, not systemic [진리성]
- The same MND officials (이지영, 김수진) performed their statutory role in one project but evaded it in KIATIS — targeting, not negligence [타당성]

## Supporting evidence

- **Record No. 1,131, 1,140, 1,474** — 新KIATIS 사업의 국유단 이중역할
- **Record No. 3,331, 6,753** — 대조 사례: 조직정원체계 사업 (정상 준수)
- **Record No. 5,853** — 시험평가 절차 간소화 공문 (시간역전)
- **Record No. 10,053** — 피의자신문조서 (한지훈의 당황 진술)

## Counter-hypothesis

국유단 이중역할은 국방부의 묵시적 위임이며, 소규모 사업의 관행이다.

## Falsification condition

유사 이중역할 구조의 다른 국방정보화사업 사례.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check

- `vault-converted-korean/08-3-2-32-제2-층위.md` lines 42-69

## Related

- [[kiatis-mkia-multi-cap-inscription|3 shared records — 국유단 이중역할 자매 atom]] (RELATED)
- [[new-kiatis-is-mnd-controlled-not-delegated-project]] — L2 통제사업 확인 (RELATED)
- [[directive-article-11-control-functions-stripped]] — L4 제11조 기능 삭제 (RELATED)
- [[../layers/layer-2|Layer 2]] (PART_OF_LAYER)

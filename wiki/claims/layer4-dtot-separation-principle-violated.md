---
lang: ko
title-ko: 新KIATIS 개발·운용시험평가 통합 실시 — 분리 원칙 위반
title-en: 新KIATIS 개발·운용시험평가 통합 실시 — 분리 원칙 위반
aliases:
  - FR-L4-DTOT-SEPARATION-VIOLATED
  - 新KIATIS 개발·운용시험평가 통합 실시 — 분리 원칙 위반

layer: 4
secondary-layers: []
claimType: procedural_violation
claimSubtype: regulatory_violation
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 7
analysisDate: 2026-04-11

record-nos: [8012, 9003]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/book
  - fracture/F-CE
  - person/한지훈
  - org/국전원
  - org/MND
  - has/record-nos
---
# 新KIATIS 개발·운용시험평가 통합 실시 — 분리 원칙 위반

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md §3.4.3.2 (lines 226-275)
**Layer:** [[../layers/layer-4|Layer 4]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DTOT-SEPARATION-VIOLATED"})
SET fr.layer = 4,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "regulatory_violation",
    fr.claimDesc = "新KIATIS 시험평가(2019.9.2~11)는 개발시험평가(DT)와 운용시험평가(OT)를 통합하여 실시하였다. 이는 훈령 제2129호/제2263호 제58조 ②의 '국방부 통제사업은 DT와 OT를 분리 수행함을 원칙'에 위반된다. 동시 실시를 위해서는 사업통제기관(국방부) 승인이 필수이나 승인 기록이 없다",
    fr.counterHypothesis = "新KIATIS는 SW 5억 미만 사업으로 제58조 ③에 의해 기관위임이 가능하며, 통합 실시가 허용된다",
    fr.falsificationCondition = "新KIATIS가 제58조 ③의 대상(5억 미만 또는 위임 승인)임을 보여주는 기록, 또는 국방부의 통합 실시 승인 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "훈령 제58조 ②에 의거 통제사업은 DT/OT 분리 원칙. 新KIATIS 예산 6.25억으로 5억 초과. 국방부 통합 승인 기록 미발견. 국전원이 임의로 통합 실시한 것은 제2층위의 위임사업 불법전환과 연동.";
```

## 주장 (Claim)

### 한국어

新KIATIS 시험평가(2019.9.2~11)는 개발시험평가(DT)와 운용시험평가(OT)를 통합하여 "개발·운용시험평가"로 실시되었다. 이는 훈령 제2129호/제2263호 제58조 ②를 위반한다:

> "② 국방부 통제 사업의 시험평가 절차는 개발시험평가와 운용시험평가를 분리하는 것을 원칙으로 하되, 필요시 **사업통제기관의 승인을 받아** 동시에 실시할 수 있다."

新KIATIS 사업 예산은 6.25억원으로 제58조 ③의 5억 미만 기준을 초과하므로, 기관위임 대상이 아니다. 국방부의 통합 실시 승인 기록도 발견되지 않았다.

한지훈의 피의자신문조서 진술: "정보화 훈령은 개발시험평가하고 운용시험평가를 분리하는 게 원칙입니다... 운용시험평가가 원래 없었는데 통째로 들어갔습니다" (본문기록-제4층위-015-1).

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- DT/OT integration violated Article 58(2)'s separation principle for MND-controlled projects [타당성]
- Budget of 6.25 billion KRW exceeded the 5-billion threshold for Article 58(3) delegation [타당성]
- No MND approval for integration was found — the integration was unilaterally executed by 국전원 [진리성]
- 한지훈's own interrogation testimony explains the regulatory basis for separation [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 8,012** — 훈령 제58조 (시험평가 수행 원칙)
- **Record No. 9,003, 9,010** — 훈령 용어 정의 (DT/OT)

## 반대 가설 (Counter-hypothesis)
新KIATIS는 기관위임 대상이며 통합 실시가 허용된다.

## 반증 조건 (Falsification Condition)
5억 미만 대상 확인 또는 국방부 통합 승인 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 7.

## 원전 확인 (Spot-check)
- `Korean/10-3-4-34-제4-층위.md` lines 226-240

## 관련 (Related)
- [[new-kiatis-is-mnd-controlled-not-delegated-project]] — L2 통제사업 확인 (RELATED)
- [[kida-recommends-gukjeonwon-centered-integration]] — L4 KIDA 통합 권고 (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)

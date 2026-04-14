---
lang: ko
title-ko: "新KIATIS 사업의 예산 필수 소요 요구 기능(SW, HW)에 대한 의도적 예산 축소"
title-en: ""
aliases:
  - FR-L2-051
  - "新KIATIS 사업의 예산 필수 소요 요구 기능(SW, HW)에 대한 의도적 예산 축소"

layer: 2
secondary-layers: [6]
claimType: temporal_manipulation
claimSubtype: intentional_budget_reduction
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 8
sincerity: 8
analysisDate: 2026-04-11

record-nos: [4866]
evidence-ids: ["L2-051"]
event-date: null

persons:
  - 한지훈
organizations:
  - 국전원
  - 국유단
  - 조달청
has-verbatim: false

tags:
  - layer/L2
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/국전원
  - org/국유단
  - org/조달청
  - has/record-nos
  - cross-layer
---
# 新KIATIS 사업의 예산 필수 소요 요구 기능(SW, HW)에 대한 의도적 예산 축소

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md (§3.2.1.3)
**Layer:** [[../layers/layer-2|Layer 2]] (primary), [[../layers/layer-6|Layer 6]] (secondary — Record No. 4,866~4,871 in L6 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-051"})
SET fr.layer = 2,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "intentional_budget_reduction",
    fr.claimDesc = "The 新KIATIS project was a pure software development contract under the National Contract Act with a budget of 6.25억 KRW determined by the Public Procurement Service (조달청). However, 국유단's requirement-inflation (80 additional requirements during evaluation) against this fixed budget reveals that the required functionality was structurally unfundable — the budget was intentionally compressed relative to the actual scope, setting up conditions for project delay and eventual blame-shifting to the project manager (한지훈).",
    fr.counterHypothesis = "The 6.25억 budget was adequate for the original scope; the 80 additional requirements emerged naturally during evaluation and were not foreseeable at budget-determination time.",
    fr.falsificationCondition = "Documentation showing that the 6.25억 budget was sufficient to cover both the original RFP scope and the 80 additional requirements, or that the additional requirements were funded by a separate budget allocation.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Book §3.2.1.3 documents that 新KIATIS was a pure SW contract (6.25억, 조달청-determined) but 국유단's 80 additional evaluation requirements structurally exceeded this budget. Understanding the delay requires cross-referencing Layer 4 (evaluation manipulation), Layer 5 (갑질 false complaint), and Layer 6 (prosecution blame-shift).";
```

## Claim

국전원에서 사업 관리를 수행한 新KIATIS 사업은 국가계약법에 따른 순수 소프트웨어 개발 용역 사업이었다 (기록 제4,866~4,871쪽). 국유단에서 소요 제기한 요구 기능에 대한 소프트웨어 개발 예산은 6.25억 원이며, 이는 조달청에서 산정 금액을 결정한 사안이다 (기록 제1,056쪽, 제1,074쪽, 제1,535쪽). 그런데 新KIATIS 개발·운용 시험평가에서 평가위원회의 심의·의결로 **추가 요구사항 80건**이 발생했다. 이 80건의 추가 요구는 사전에 조달청이 산정한 6.25억 예산으로는 구조적으로 충족할 수 없는 규모였으며, 이는 프로젝트 지연과 책임 전가(한지훈에 대한 범죄자 낙인)를 위한 사전 조건으로 기능했다.

## Key Takeaways

- [진리성] 新KIATIS 사업은 순수 소프트웨어 개발 용역(6.25억, 조달청 산정)이었으며 국유단의 소요 제기에 따른 것이다 (기록 제4,866~4,871, 기록 제1,056/1,074/1,535). 新KIATIS was a pure SW development contract at 6.25억 KRW as determined by the Public Procurement Service.
- [진리성] 시험평가 과정에서 평가위원회가 80건의 추가 요구사항을 발생시켰으며, 이는 원래 제안요청서 범위를 초과하는 것이다 (§3.2.1.3). 80 additional requirements emerged during evaluation, exceeding the original RFP scope.
- [타당성] 제안요청서에 명시된 개발 요구 기능에 대한 충족 여부를 확인해야 하며, 추가 80건의 근본 원인 이해를 위해 제4·5·6층위의 교차 분석이 필요하다 (§3.2.1.3). Cross-layer analysis (L4/L5/L6) is required to understand the root cause of the 80 additional requirements.
- [진실성] 新KIATIS의 실제 사용 지연 원인은 단순 개발 부실이 아니라 구조적 예산 축소와 요구사항 팽창의 결합이다 — 이것이 한지훈에 대한 "부실개발" 범죄자 낙인의 토대가 되었다 (§3.2.1.3, footnotes 107/108). The actual cause of deployment delay was structural budget-scope mismatch, not developer incompetence — yet this became the basis for criminalizing 한지훈.

## Supporting evidence

- **기록 제4,866~4,871쪽** — 新KIATIS 사업이 국가계약법에 따른 순수 소프트웨어 개발 용역임을 확인하는 문서 (§3.2.1.3)
- **기록 제1,056쪽** — 국유단 사업추진 요청 문서 (2018-07-09, footnote 105 참조)
- **기록 제1,074쪽** — 조달청 예산 산정 관련 문서 (§3.2.1.3)
- **기록 제1,535쪽~제1,536쪽** — 최종 제안요청서 개발 대가 산정 가이드 (§3.2.1.3 footnote 103)
- **Book §3.2.1.3** verbatim: `국유단에서 소요 제기한 요구 기능에 대한 소프트웨어 개발 예산은 6.25억이며, 이는 조달청에서 그 산정 금액에 관해 결정한 사안이다.`

## Counter-hypothesis

1. **주장:** 6.25억 예산은 원래 범위에 대해 적정했으며, 80건의 추가 요구는 시험평가 과정에서 자연스럽게 발생한 것으로 예산 결정 시점에 예측할 수 없었다.
2. **논리:** 소프트웨어 개발에서 시험평가 단계의 추가 요구는 일반적이며, 이를 "의도적 예산 축소"로 보는 것은 사후적 해석에 불과하다.
3. **필요 증거:** 80건의 추가 요구가 원래 제안요청서의 합리적 범위 내에 있었고, 추가 예산 배정이 정상적으로 이루어졌다는 기록.

## Falsification condition

1. 80건의 추가 요구사항에 대한 별도 예산 배정이 이루어졌다는 문서.
2. 추가 요구사항이 원래 제안요청서 범위 내의 세부 사양 조정에 해당함을 보여주는 요구사항 분석 문서.
3. 국유단이 추가 요구사항 발생 시 적절한 예산 증액을 추진했다는 기록.

## Verdict

**CORROBORATED.** Moderate. 진리성 8 / 타당성 8 / 진실성 8. 6.25억 예산과 순수 SW 계약 성격은 기록 제4,866~4,871 및 기록 제1,056/1,074/1,535에 의해 확인된다. 그러나 "의도적" 축소라는 주관적 의도 판단은 제4/5/6층위의 교차 증거(80건 추가 요구의 구체적 내용, 유지보수 단계에서의 추진 과정)에 의존하므로 moderate로 판정한다. 예산 규모와 요구 범위의 구조적 불일치는 사실로 확인되지만, 이것이 사전 설계된 것인지는 패턴 증거(제4층위의 시험평가 조작, 제6층위의 책임 전가)로 추론되는 것이다.

## Open Questions

- 80건 추가 요구사항의 구체적 목록 및 각 항목의 원래 제안요청서 대비 신규성 분석 필요 — [[layer4-evaluation-committee-80-items-violation]] 교차 참조.
- 조달청의 6.25억 산정 근거 문서(기록 제1,074)의 세부 분석: 어떤 기능 범위에 대해 산정되었는지.
- 국유단이 사업설명회(기록 제1,308)에서 "분석과 설계 통제", "TF에 의한 성능평가" 등 포괄적 역할을 선언한 사실과 예산 범위의 괴리.

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` lines 71–74: §3.2.1.3 원문과 일치. "국가계약법에 따른 순수 소프트웨어 개발 용역 사업" 확인. 6.25억 확인. 기록 제4,866~4,871, 제1,056, 제1,074, 제1,535 모두 확인. 추가 요구사항 80건 확인.
- `vault-converted-korean/08-3-2-32-제2-층위.md` lines 66–68: §3.2.1.2 문맥에서 사업통제기관으로서의 국유단의 비정상적 역할 구조 확인.

## Related

- [[../layers/layer-2|Layer 2]] (PART_OF_LAYER)
- [[layer4-evaluation-committee-80-items-violation|평가위원회 80건 추가 요구사항 위반]] (RELATED)
- [[cartel-requirement-inflation-80-items-delay|카르텔의 요구사항 팽창과 지연]] (RELATED)
- [[gukyu-dan-data-absence-delays-new-kiatis|국유단 데이터 부재로 인한 新KIATIS 지연]] (RELATED)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/organizations/gukjeonwon|국전원]] (ABOUT)

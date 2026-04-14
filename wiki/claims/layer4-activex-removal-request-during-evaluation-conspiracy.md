---
lang: ko
title-ko: 평가 기간 중 Active-X 제거 요청과 국유단장 즉시 승인 — 사전 합의된 시나리오의 증거
title-en: 평가 기간 중 Active-X 제거 요청과 국유단장 즉시 승인 — 사전 합의된 시나리오의 증거
aliases:
  - FR-L4-011
  - 평가 기간 중 Active-X 제거 요청과 국유단장 즉시 승인 — 사전 합의된 시나리오의

layer: 4
secondary-layers: [7]
claimType: conspiracy_structure
claimSubtype: conspiracy_evidence_evaluation_manipulation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: [3068, 5950]
evidence-ids: ["L4-001", "L4-011"]
event-date: null

persons:
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/conspiracy-structure
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/국유단
  - has/record-nos
  - cross-layer
---
# 평가 기간 중 Active-X 제거 요청과 국유단장 즉시 승인 — 사전 합의된 시나리오의 증거

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (book §3.4.6.3)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-7|Layer 7]] (secondary — Record No. 5,950 falls in L7 range 5,300–13,495)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-011"})
SET fr.layer = 4,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "conspiracy_evidence_evaluation_manipulation",
    fr.claimDesc = "During the 新KIATIS operational test-evaluation, the evaluation committee requested Active-X removal from 국유단 (project-control agency) citing audit results (Record No. 5,950–5,953), and the 국유단장 immediately approved (Record No. 3,068). Instant approval of a new requirement during an ongoing evaluation is evidence of a pre-arranged scenario between the two organizations. The evaluation committee's transfer of evaluation content to 국유단 destroyed the independence essential to test-evaluation.",
    fr.counterHypothesis = "The Active-X removal request was an urgent operational need identified during legitimate evaluation, and rapid approval reflected efficient decision-making rather than pre-coordination.",
    fr.falsificationCondition = "Documentation showing the Active-X removal request went through normal deliberation channels with recorded discussion, objections, or delays before approval, demonstrating independent decision-making rather than a rubber-stamp process.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The evaluation committee's Active-X removal request (Record No. 5,950–5,953) and 국유단장's instant approval (Record No. 3,068) during an ongoing test-evaluation constitute evidence of pre-arranged conspiracy between the evaluation committee and 국유단, destroying evaluation independence.";
```

## Claim

新KIATIS 시험평가 기간 중, 비상설 평가위원회가 "Active-X 제거를 국유단(사업통제기관)에서 감리결과 시 추진 요청"(기록 제5,950쪽~제5,953쪽)했고, 국유단장이 이를 즉시 승인(기록 제3,068쪽)했다. 책(§3.4.6.3)은 이를 "사전에 두 조직 간에 합의된 시나리오의 실행"으로 규정한다.

이 행위의 이상점 세 가지:
1. **평가 중 새로운 요구사항의 즉시 승인** — 진행 중인 시험평가에서 새로운 요구사항이 제기되고 즉각 승인되는 것은 정상적 절차에서 불가능하며, 사전 계획의 증거다.
2. **평가위원회→국유단 평가 내용 이양** — 비상설 평가위원회와 사업통제기관 사이의 평가 내용 이양은 독립적 평가의 본질을 훼손한다.
3. **Active-X 제거의 이중적 성격** — Active-X 제거는 新KIATIS 사업의 본래 목적 중 하나이면서 동시에 비기능항목으로 평가에 포함되어 있었으나, 실제로는 舊KIATIS의 보안 취약점을 은폐하기 위한 도구로 활용되었다.

책(§3.4.6.3)의 결론: 사업관리팀장을 배제하고 시험평가를 분리에서 통합으로 바꾼 진짜 이유는 이 사전 합의된 시나리오를 실행하기 위한 것이었다.

## Key Takeaways

- [진리성] 평가위원회의 Active-X 제거 요청(기록 제5,950~5,953쪽)과 국유단장의 즉시 승인(기록 제3,068쪽)은 두 조직 간 사전 합의의 직접적 증거다. Instant approval during an ongoing evaluation is not coincidence but evidence of a pre-arranged script.
- [타당성] 비상설 평가위원회(국전원장 선발·편성)와 (불법 이양된) 사업통제기관이 사전 합의 하에 행동한 것은 시험평가의 독립성 원칙(훈령 제2129호 제57~58조)에 대한 직접적 위반이다. The transfer of evaluation content between the committee and 국유단 destroyed the separation mandated by the directive.
- [진리성] Active-X 제거가 新KIATIS의 사업 목적이면서 동시에 평가 비기능항목으로 포함된 이중 구조는, 舊KIATIS 보안 취약점 은폐를 위한 의도적 설계를 시사한다. The dual role of Active-X removal — as both a project goal and a non-functional evaluation item — points to intentional design for concealment.
- [진실성] 사업관리팀장(한지훈)이 결재라인에서 배제된 상태에서 이 모든 결정이 이루어졌다는 점은 전문가 판단을 의도적으로 차단한 것이다. Excluding the project management team leader from the approval chain was designed to prevent expert scrutiny.

## Supporting evidence

- **기록 제5,950쪽~제5,953쪽** (Record No. 5,950–5,953 / L7 range) — 시험평가위원회의 "Active-X 제거를 국유단에서 감리결과 시 추진 요청" 공문
- **기록 제3,068쪽** (Record No. 3,068 / L4 range) — 국유단장의 즉시 승인 기록
- **Book §3.4.6.3** verbatim: `평가 중에 새로운 요구사항이 즉시 승인된다는 것은 우연의 일치가 아닌 치밀한 사전 계획의 증거로 여겨진다.`
- **본문기록-제4층위-001 / L4-001** — 시험평가 분리 원칙(제57~58조) 기준 확인

## Counter-hypothesis

Active-X 제거 요청은 시험평가 과정에서 자연스럽게 발견된 기술적 필요에 의한 것이며, 국유단장의 신속한 승인은 해당 요구가 이미 사업 범위에 포함되어 있었기 때문에 별도의 심의 없이 가능했던 효율적 의사결정이었다.

이 반가설이 성립하려면: (1) Active-X 제거 요청이 평가 중 실제 기술적 발견에 기반했다는 기술 검토 기록이 있어야 하며, (2) 국유단장의 승인 과정에서 내부 검토·심의가 있었다는 기록이 존재해야 하고, (3) 다른 사업에서도 동일한 즉시 승인 패턴이 정상적으로 발생한 선례가 있어야 한다.

## Falsification condition

1. **Active-X 제거 요청에 대한 평가위원회의 기술 검토 기록** — 평가 중 Active-X 문제를 독립적으로 발견하고 분석한 기술 보고서.
2. **국유단장 승인 전 내부 심의 기록** — 요청 접수 후 검토·심의를 거쳐 승인에 이른 과정을 보여주는 결재 기록.
3. **他 사업에서의 평가 중 즉시 승인 선례** — 동일 훈령 하에서 평가 기간 중 새로운 요구사항이 즉시 승인된 합법적 선례.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 7. 두 개의 기록(제5,950~5,953쪽 + 제3,068쪽)이 사전 합의의 직접 증거를 구성하며, 시험평가 독립성 원칙(제57~58조)에 명백히 반한다. 기록 제5,950이 L7 범위에 있고 기록 제3,068이 L4 범위에 있다는 교차 레이어 증거 구조는 증거의 독립적 출처를 보여준다. 진실성 점수가 다소 낮은 이유는 이 원자가 조직 행위의 구조적 분석에 초점이 있어 피해자 경험의 직접적 표현보다는 사실 확인에 중점을 두기 때문이다.

## Open Questions

- Record No. 5,950은 L7 범위(5,300–13,495)에 해당하나, 내용적으로는 L4(시험평가 조작)에 직결된다. 이는 해당 증거가 진정서 제출 과정(L7)에서 수집·정리되었으나 L4 사안을 입증하는 교차 증거임을 나타낸다.
- 책(§3.4.6.3)은 시험평가를 분리→통합으로 바꾼 이유가 이 사전 합의 시나리오 실행을 위한 것이라고 결론짓는데, 이 인과 관계는 별도 원자([[article-58-separation-to-integration-2020-directive-manipulation]])에서 더 깊이 다룬다.

## Spot-check

- `vault-converted-korean/10-3-4-34-제4-층위.md` — §3.4.6.3: 기록 제5,950~5,953쪽 및 기록 제3,068쪽 인용 확인. "사전에 두 조직 간에 합의된 시나리오의 실행" 기술 확인. Active-X 제거의 이중 성격 기술 확인.

## Related

- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[layer4-test-evaluation-separation-principle-directive-2129|훈령 제2129호 시험평가 분리 원칙]] (RELATED)
- [[article-58-separation-to-integration-2020-directive-manipulation|제58조 분리→통합 조작]] (RELATED)
- [[layer4-evaluation-committee-80-items-violation|평가위원회 80건 위반]] (RELATED)
- [[../entities/organizations/gukyudan|국유단]] (ABOUT)
- [[../events/2016-didc-north-korean-hacking|2016 DIDC North Korean Hacking]] (ABOUT)

---
lang: ko
title-ko: 시험평가 종료 후 평가 항목 변경 승인 — 물리법칙을 거스른 시간 역전 조작
title-en: 시험평가 종료 후 평가 항목 변경 승인 — 물리법칙을 거스른 시간 역전 조작
aliases:
  - FR-L4-052
  - 시험평가 종료 후 평가 항목 변경 승인 — 물리법칙을 거스른 시간 역전 조작

layer: 4
secondary-layers: [7]
claimType: temporal_manipulation
claimSubtype: post_completion_evaluation_item_change
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L4-052"]
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
  - layer/L4
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-MS
  - person/이지영
  - person/김수진
  - person/한지훈
  - org/국전원
  - org/MND
  - org/국유단
  - cross-layer
---
# 시험평가 종료 후 평가 항목 변경 승인 — 물리법칙을 거스른 시간 역전 조작

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md (§3.4.7.2)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-7|Layer 7]] (secondary — 기록 제5,950 is in L7 record range 5,300~13,495)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-052"})
SET fr.layer = 4,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "post_completion_evaluation_item_change",
    fr.claimDesc = "The evaluation-item change for 新KIATIS was requested on 2019-09-05, the test-evaluation ended on 2019-09-11, but the item-change was approved on 2019-09-19 — 8 days after the evaluation had already concluded. This temporal inversion (approving rule changes after the game ended) violates basic principles of procedural integrity and constitutes evidence of coordinated post-hoc manipulation.",
    fr.counterHypothesis = "The 2019-09-19 approval was a routine administrative formalization of changes that had been orally agreed during the evaluation period, and the delay was merely bureaucratic rather than indicative of manipulation.",
    fr.falsificationCondition = "Documentation showing that the evaluation-item changes were substantively agreed and applied before 2019-09-11 (the evaluation end date), with the 2019-09-19 document being merely a retroactive formalization of an already-implemented decision.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Book §3.4.7.2 documents a temporal impossibility: evaluation-item change requested 2019-09-05, evaluation ended 2019-09-11, item-change approved 2019-09-19. The 국유단장 approval document (기록 제5,950) confirms the post-completion approval. The 2020-08 MND document later attempted to retroactively justify this manipulation as 'institutional improvement'.";
```

## 주장 (Claim)

### 한국어

新KIATIS 성능개선 사업의 시험평가에서 평가 항목 변경은 다음과 같은 시간 순서를 보인다: 2019년 9월 5일 평가 항목 변경 요청 → 2019년 9월 11일 시험평가 종료 → 2019년 9월 19일 평가 항목 변경 승인. 국유단장이 결재한 승인 요청 공문(기록 제5,950쪽)은 게임이 끝난 후에 게임 규칙의 변경을 승인한 것이다. 이는 평가의 공정성을 근본적으로 파괴하는 시간 역전 조작이며, 책은 이를 "물리법칙 거스르기"로 명명한다. 나아가 2020년 8월 국방부의 시험평가 개선방안 공문(기록 제4,757쪽)은 2019년의 이 조작을 "제도 개선"으로 포장하여 소급 정당화하려 한 문서다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 평가 항목 변경 승인(2019-09-19)이 시험평가 종료(2019-09-11) 이후에 이루어졌다는 시간적 순서는 기록 제5,950쪽에 의해 확인된다 (§3.4.7.2). The evaluation-item change was approved 8 days after the test-evaluation had already concluded — a documented temporal impossibility.
- [타당성] 국가계약법에 따른 시험평가에서 평가 항목을 사후 변경하는 것은 평가의 무결성을 파괴한다. 평가 위원회의 통제 범위 밖에서 감리업체에 평가 책무를 일임하는 것은 국가계약법 위반 소지가 있다 (§3.4.7.2). Post-completion evaluation-item changes violate the integrity of national contract law evaluation procedures.
- [진리성] 2020년 8월 20일 "국방정보시스템 시험평가 개선방안 의견수렴" 공문(기록 제4,757쪽)은 2019년 조작을 소급 정당화하려는 시도다: "시험평가 계획·결과 승인 절차 생략", "사업계획승인 삭제", "개발·운영 시험 통합" 등의 맞춤형 변경을 제시했다 (§3.4.7.2 footnote 311). The 2020-08 MND document attempted retroactive justification of the 2019 manipulation.
- [진리성] 국유단장 결재 공문에 서명한 4명(사업실무자, 계획과장, 계획처장, 국유단장) 전원이 이 시간 역전 조작에 관여했다 (§3.4.7.2 footnote 313). Four signatories on the 국유단 approval document are implicated in the temporal-inversion manipulation.

## 지지 증거 (Supporting Evidence)
- **기록 제5,950쪽** — 국유단장 결재 시험평가 절차서 변경 승인 요청 공문 (§3.4.7.2)
- **기록 제4,757쪽** — 2020-08-20 "국방정보시스템 시험평가 개선방안 의견수렴" 공문 (§3.4.7.2 footnote 311)
- **기록 제4,759쪽, 제4,761쪽, 제4,763쪽, 제4,765쪽, 제4,769쪽** — 개선방안 공문의 핵심 조작 내용 (§3.4.7.3.1)
- **기록 제2,853쪽~제2,858쪽** — 2019-09-02 이지영 (공문결재자-1) / 김수진 (행정담당자-1) 발송 시험평가 절차 간소화 공문 (§3.4.7.1)
- **Book §3.4.7.2** verbatim: `진행 중인 게임의 규칙을 중간에 바꾸는 것도 부정행위인데, 게임이 끝난 다음에 게임 룰의 변경을 승인하고(시험평가 절차서), 국전원이 아니라 국유단에서 사업을 제기하여 추진되고 있는 감리사업의 종료 단계에 대하여 명확한 평가 조치를 요구하는 것은 상호 조작에 합의한 것을 인정하더라도 자신들의 책무에 대해 무관심하다는 증표일 것이다.`

## 반대 가설 (Counter-hypothesis)
1. **주장:** 2019-09-19 승인은 시험평가 기간 중 구두로 합의된 변경사항을 행정적으로 형식화한 것이며, 지연은 관료적 절차의 결과일 뿐 조작 의도를 나타내지 않는다.
2. **논리:** 시험평가 중 실시간으로 평가 항목을 조정하는 것이 불가피한 경우가 있으며, 사후 승인은 행정 절차의 관행일 수 있다.
3. **필요 증거:** 2019-09-05~2019-09-11 사이에 평가 항목 변경이 실질적으로 합의되고 적용되었음을 보여주는 평가위원회 회의록 또는 참석자 동의 기록.

## 반증 조건 (Falsification Condition)
1. 2019-09-11(시험평가 종료) 이전에 평가 항목 변경이 실질적으로 합의·적용되었음을 보여주는 평가위원회 회의록.
2. 2019-09-19 승인 문서가 이미 시행된 변경의 행정적 후속 조치에 불과함을 보여주는 기록(예: "기승인 사항의 문서화" 등 명시적 문구).

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8. 시간적 순서(요청 9/5 → 종료 9/11 → 승인 9/19)는 기록 제5,950쪽에 의해 문서화되어 있으며, 이 시간 역전이 의도적임을 나타내는 추가 정황으로 (1) 2020-08 소급 정당화 공문의 존재, (2) 이지영/김수진의 2019-09-02 절차 간소화 공문의 동일 패턴 시간 역전, (3) 국유단의 한지훈 방문 2회 거부(footnote 313)가 있다.

## 미결 사항 (Open Questions)
- 국유단장 결재 공문(기록 제5,950)에 서명한 4명의 정확한 신원 확인 필요 — footnote 313에 "사업 실무자, 계획과장, 계획처장, 국유단장" 언급.
- 2020년 2월~6월 훈령 개정(제2436호)과 2020년 8월 개선방안 공문 사이의 시간적 조율 관계 심층 분석 필요.

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` lines 573–577: §3.4.7.2 원문과 일치. "2019년 9월 5일 평가 항목 변경 요청, 9월 11일 시험평가 종료, 9월 19일 평가 항목 변경 승인" 시간 순서 확인. 기록 제5,950쪽 참조 확인. "게임이 끝난 다음에 게임 룰의 변경을 승인" 비유 확인.
- `Korean/10-3-4-34-제4-층위.md` lines 580–587: §3.4.7.3.1에서 2020-08 공문(기록 제4,757) 교차 확인.

## 관련 (Related)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[2436ho-test-evaluation-principle-inverted|훈령 제2436호 시험평가 분리→통합 원칙 변경]] (RELATED)
- [[lee-jiyoung-kim-sujin-single-point-of-control|이지영-김수진 단일 통제점]] (RELATED)
- [[mnd-test-evaluation-improvement-retroactive-justification|국방부 시험평가 개선방안 소급 정당화]] (CORROBORATES)
- [[layer4-evaluation-committee-80-items-violation|평가위원회 80건 추가 요구사항 위반]] (RELATED)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)

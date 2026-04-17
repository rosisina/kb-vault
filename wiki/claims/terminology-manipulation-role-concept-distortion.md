---
lang: ko
title-ko: "용어 정의 조작: \"사업관리기관\"→\"집행기관\", \"사업주관기관\"→\"소요제기기관\" 변경은 新·舊KIATIS 책임 단절을 위한 의도적 개념 왜곡이다"
title-en: ""
aliases:
  - FR-L4-TERMINOLOGY-DISTORTION-001
  - "용어 정의 조작: \"사업관리기관\"→\"집행기관\", \"사업주관기관\"→\"소요제기기관\" 변경은"

layer: 4
secondary-layers: [2, 6]
claimType: terminology_manipulation
claimSubtype: role_concept_downgrade
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 9
sincerity: 7
analysisDate: 2026-04-11

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 김민수
organizations:
  - 국전원
  - 군검찰단
  - MND
has-verbatim: false

tags:
  - layer/L4
  - layer/L2
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/terminology-manipulation
  - source/book
  - fracture/F-MS
  - person/한지훈
  - person/김민수
  - org/국전원
  - org/군검찰단
  - org/MND
  - cross-layer
---
# 용어 정의 조작: "사업관리기관"→"집행기관", "사업주관기관"→"소요제기기관" 변경은 新·舊KIATIS 책임 단절을 위한 의도적 개념 왜곡이다

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md (§3.4.4.4.4)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-2|Layer 2]] (secondary — 기록 제1,372쪽은 L2 범위), [[../layers/layer-6|Layer 6]] (secondary — 기록 제4,781쪽은 L6 범위)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-TERMINOLOGY-DISTORTION-001"})
SET fr.layer = 4,
    fr.claimType = "terminology_manipulation",
    fr.claimSubtype = "role_concept_downgrade",
    fr.claimDesc = "The 국방정보화업무훈령 별표1 terminology was systematically altered from 제2263호 (2019-02-26) onward: 사업관리기관→집행기관, 사업주관기관→소요제기기관. This is not mere renaming but deliberate concept distortion — '관리' (active management) was downgraded to '집행' (passive execution), and '주관' (comprehensive oversight) was reduced to '소요제기' (requirement submission). The manipulation severs the terminological link to the 新·舊KIATIS accountability chain. 한지훈's own 참고인 진술조서 (기록 제4,781쪽, 2022-01-25) documents 국전원's actual 사업관리 function in his own words, contradicting the post-2019 '집행기관' framing.",
    fr.counterHypothesis = "The terminology change was a neutral administrative modernization to align with contemporary public procurement language; the terms '집행기관' and '소요제기기관' are standard government terminology with no intent to obscure accountability.",
    fr.falsificationCondition = "Evidence that '집행기관' and '소요제기기관' were already in common use in other MND directives or government-wide procurement regulations before the KIATIS controversy, adopted as part of a broader government-wide standardization initiative.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 8,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "§3.4.4.4.4 traces the terminology substitution from 제2263호 (2019-02-26) and demonstrates three convergent proofs: (1) '집행기관' downgrades 사업관리기관's active management role to passive execution, matching the 검수 관리 단계 payment-disbursement function (기록 제1,372쪽); (2) 김민수 (핵심 의사결정자-1)'s own 2022 magazine interview describes 국전원's mission as '정보화 사업 관리' — using the old terminology that the directive had already erased; (3) 한지훈's 참고인 진술조서 (기록 제4,781쪽) describes 국전원's actual function as 사업 전반 관리, contradicting the '집행' framing.";
```

## 주장 (Claim)

### 한국어

2019년 2월 26일 제2263호부터 국방정보화업무훈령의 별표1에서 핵심 용어가 일괄 변경되었다: **"사업관리기관"이 "집행기관"으로, "사업주관기관"이 "소요제기기관"**으로 명칭이 교체되었다. 이는 단순한 용어 정리가 아닌, **新·舊KIATIS의 책임으로부터의 단절을 위하여 당시에 사용한 용어를 지우려는 의도**로 보인다.

**"집행기관"이라는 용어는 "사업관리기관"**(사업의 발주 준비부터 종결까지 사업 계약, 일정 관리, 위험 관리, 형상 관리, 품질관리 및 개발 시험평가 등 기술적 차원에서 정보화 사업을 관리하는 임무를 수행하는 기관, 각주 296)**이라는 능동적 개념을 "집행"이라는 수동적 개념으로 격하**시켰다. 실제로 국전원의 "국방 정보시스템 사업 관리실무 지침서"의 "검수 관리 단계"에서 검수 완료 후 대가를 지급하는 역할로 전락한 것처럼 보인다 (기록 제1,372쪽).

이러한 용어 조작에도 불구하고, 국전원장 김민수 (핵심 의사결정자-1)가 2022년 8월호 월간 인물 잡지 인터뷰에서 "국방전산정보원은 **정보화 사업 관리**를 효율적으로 수행하는 것을 목표"로 한다고 밝혀, 사실상 구용어("사업관리")의 실질적 유효성을 스스로 인정하였다.

군 검찰단 검사의 2022년 1월 25일 참고인 진술조서(기록 제4,781쪽)에서도 한지훈은 국전원이 "사업 전반을 관리"하고 "개발시험평가를 주관"하며 "소요제기기관의 운영시험평가를 지원"한다고 진술하여, **"집행기관"이라는 축소된 용어와 정면으로 모순되는 실질적 역할**을 증언하였다.

### English

From Directive No. 2263 (2019-02-26), key terms in the Defense Informatization Business Directive's Annex 1 were collectively changed: **'사업관리기관 (project management agency)'** was replaced with **'집행기관 (executing agency)'** and **'사업주관기관 (project principal agency)'** was replaced with **'소요제기기관 (requirements-generating agency)'**. This appears to be an intent to erase the terms in use at the time to sever accountability from New/Old KIATIS.

The term '집행기관 (executing agency)' demoted '사업관리기관' — an agency performing active technical duties from project ordering preparation through conclusion (footnote 296) — to the passive concept of mere 'execution.' In practice, 국전원's guidelines reduced it to the role of paying consideration after acceptance completion (Record No. 1,372).

Despite this terminology manipulation, 국전원 director 김민수 himself stated in an August 2022 magazine interview that '국전원 aims to efficiently perform information project management (사업관리)' — effectively acknowledging the practical validity of the old term.

## 핵심 요약 (Key Takeaways)
- "사업관리기관"→"집행기관" 변경은 능동적 관리 개념을 수동적 집행 개념으로 격하시킨 의도적 개념 왜곡이다 [타당성]
- "사업주관기관"→"소요제기기관" 변경은 총괄적 책임을 단편적 역할로 축소한 것이다 [타당성]
- 김민수의 2022년 인터뷰에서 "사업관리"라는 구용어를 사용한 것은 용어 변경의 허구성을 스스로 드러낸 증거이다 [진리성]
- 한지훈의 참고인 진술(기록 제4,781쪽)은 국전원의 실질적 역할이 "사업 전반 관리"임을 증언하여 "집행기관" 프레임을 반박한다 [진리성]
- The terminology manipulation is traceable to 제2263호 (2019-02-26), preceding the 제2436호 cluster by 15 months — an earlier phase of the same directive manipulation campaign [진리성]
- 기록 제1,372쪽 (L2 범위)과 기록 제4,781쪽 (L6 범위)의 교차 계층 증거가 Layer 4 주장을 뒷받침한다 [진리성]

## 지지 증거 (Supporting Evidence)
- **기록 제1,372쪽** — 국전원 "국방 정보시스템 사업 관리실무 지침서" 검수 관리 단계: "집행기관"의 역할이 대가 지급으로 축소된 실태
- **기록 제4,781쪽** — 한지훈 참고인 진술조서 (2022-01-25): 국전원이 "KIATIS를 고도화하는 사업을 전반적으로 관리", "선정된 사업자를 통제하고 기술 지원을 하고 개발 일정을 관리", "개발시험평가를 주관"한다고 직접 진술
- **각주 296** — "사업관리기관"의 원래 정의: 사업 발주 준비~종결까지 계약·일정·위험·형상·품질관리 및 개발시험평가를 기술적 차원에서 관리하는 기관
- **김민수 2022년 8월 월간 인물 인터뷰** — "정보화 사업 관리를 효율적으로 수행하는 것을 목표"

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석**: "집행기관"과 "소요제기기관"은 정부 조달 전반에서 통용되는 표준 용어이며, 국방부가 범정부적 용어 통일 방침에 따라 변경한 것이다. 용어 변경이 책임 구조에 실질적 영향을 미치지 않았을 수 있다.
2. **반박 조건**: 기획재정부·행정안전부 등 다른 중앙행정기관의 정보화 사업 관련 훈령·지침에서 "집행기관"이라는 용어가 KIATIS 논란 이전에 동일한 의미로 사용되고 있었음이 확인되면 약화된다.
3. **반대 입장**: 용어의 변경이 곧 역할의 변경을 의미하지는 않으며, 실무적으로 국전원의 사업관리 기능은 용어와 무관하게 유지되었을 수 있다.

## 반증 조건 (Falsification Condition)
"집행기관" 및 "소요제기기관"이라는 용어가 KIATIS 논란 이전(2018년 이전)에 다른 국방부 훈령 또는 범정부 조달 법규에서 동일한 의미로 사용되고 있었음을 보여주는 문서가 발견되면 WEAKENED로 하향된다. 또한, 제2263호 개정 과정에서 용어 변경의 독립적 정책 근거(범정부 표준화 지침 등)가 확인되면 재평가된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 8 / 타당성 9 / 진실성 7. 세 가지 독립적 증거가 수렴한다: (1) 기록 제1,372쪽에서 "집행기관"의 역할이 검수 후 대가 지급으로 축소된 실태, (2) 김민수 원장의 2022년 인터뷰에서 구용어("사업관리")의 사실상 인정, (3) 한지훈의 참고인 진술(기록 제4,781쪽)에서 국전원의 실질적 역할이 "사업 전반 관리"임을 증언. 기록 제8,260쪽에서 이유 미제시가 확인된 점(§3.4.4.4.2 "그럴듯한 이유도 제시하지 않은 채")도 의도성을 지지한다.

## 미결 사항 (Open Questions)
- 제2263호(2019-02-26) 별표1 용어 변경의 입법 예고·부서 합의 기록 확보 필요
- "집행기관"이라는 용어가 다른 정부 부처 훈령에서도 사용되는지 비교 조사 필요
- 한지훈 참고인 진술조서(기록 제4,781쪽)의 전문 확보 — 발췌된 문답 이외의 맥락 확인 필요

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` §3.4.4.4.4 lines 412–417 — 기록 제1,372쪽, 제4,781쪽 직접 인용 — CONFIRMED
- 각주 296 사업관리기관 정의 — line 414 — CONFIRMED
- 김민수 인터뷰 인용 — line 414 — CONFIRMED
- 본문기록-제4층위-021 참조 — line 416 — CONFIRMED

## 관련 (Related)
- [[2436ho-gukjeonwon-role-tier-renaming]] — 동일 용어 변경의 제2436호 단위 분석 (사업통제기관 포함) (RELATED)
- [[kiatis-2129ho-main-regime-applies]] — KIATIS에 적용되는 구용어 체계("사업관리기관")의 법적 근거 (RELATED)
- [[han-ji-hoon-witness-statement-2022-01-25]] — 기록 제4,781쪽 참고인 진술의 Layer 6 맥락 (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-2|Layer 2 — 기록 제1,372쪽 소속]] (PART_OF_LAYER)

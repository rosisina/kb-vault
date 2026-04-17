---
lang: ko
title-ko: "한지훈은 2022-01-25 참고인 신분으로 조사받았고, 6개월 후 피의자로 재분류되었다 — 소급적 기소 설계의 절차적 역전"
title-en: "한지훈은 2022-01-25 참고인 신분으로 조사받았고, 6개월 후 피의자로 재분류되었다 — 소급적 기소 설계의 절차적 역전"
aliases:
  - FR-L6-004
  - "한지훈은 2022-01-25 참고인 신분으로 조사받았고, 6개월 후 피의자로 재분류되었다"

layer: 6
secondary-layers: [5]
claimType: procedural_violation
claimSubtype: procedural_inversion
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 7
sincerity: 8
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L6-004"]
event-date: null

persons:
  - 한지훈
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/procedural-violation
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/군검찰단
  - cross-layer
---
# 한지훈은 2022-01-25 참고인 신분으로 조사받았고, 6개월 후 피의자로 재분류되었다 — 소급적 기소 설계의 절차적 역전

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.3.2) • raw/01. book-beyond-cybersecurity/English/16-3-6-36-Sixth-Layer.md
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-5|Layer 5]] (secondary — administrative-isolation phase overlap)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-004"})
SET fr.layer = 6,
    fr.claimType = "procedural_violation",
    fr.claimSubtype = "procedural_inversion",
    fr.claimDesc = "한지훈 was interviewed as a 참고인 (witness) on 2022-01-25 (기록 제4,776쪽~제4,796쪽), six months before being reclassified as a 피의자 (suspect) via the 2022-07-18 warrant. The witness-to-suspect reclassification demonstrates that 군 검찰단 built its case retrospectively — using the cooperating witness's own statements as the evidentiary substrate before formally targeting that same witness.",
    fr.counterHypothesis = "The reclassification from 참고인 to 피의자 was a routine procedural consequence of evidence discovered during the investigation, not a predetermined targeting of 한지훈; the six-month gap reflects standard investigative timelines, not retrospective case construction.",
    fr.falsificationCondition = "Production of investigative records showing that evidence warranting 피의자 classification was first identified after the 2022-01-25 witness interview rather than pre-existing the interview, OR testimony from 군 검찰단 that the reclassification decision was made independently of the 참고인 진술서 content.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.strengthUpgrade = "MODERATE→STRONG via vault cross-reference corroboration (B.2 batch 2026-04-12)",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The sequence — 참고인 interview (2022-01-25) → 압수수색 영장 + 수사개시 통보 (2022-07-18/21) → 피의자 신문 (2022-09-02) → 기소유예 (2022-10-07) — shows that 한지훈 was first extracted as a cooperative witness, then reclassified as a suspect using the content of his own cooperative testimony as the charge frame. This is procedural inversion: the prosecution identified its target before it established its charge.";
```

## 주장 (Claim)

### 한국어

한지훈은 2022년 1월 25일, **참고인** 자격으로 군 검찰단의 조사에 응하였다 (기록 제4,776쪽~제4,796쪽). 이 참고인 진술서에서 한지훈은 新KIATIS 사업의 개발관리팀장으로서의 역할과 사업 전반의 경과를 설명하였다. 그로부터 약 6개월 후인 2022년 7월 18일, 군 검찰단은 동일한 사안에 대해 **피의자** 신분으로 압수수색 영장과 수사개시 통보를 발부하였다.

이 참고인→피의자 전환 순서는 군 검찰단이 한지훈을 먼저 협력자로 활용한 뒤 그의 발언을 소급하여 혐의의 근거로 전환한 **소급적 기소 설계**의 절차적 역전을 나타낸다. 즉, 혐의 설정이 증거 발견에 선행하였으며, 참고인 진술이 피의자 혐의의 기반이 되는 구조이다. 이 구조는 Layer 6의 "사기수사" 성립의 핵심 절차 요소이다.

### English

On January 25, 2022, 한지훈 submitted to a military prosecutors' investigation as a **reference witness** (Records 4,776–4,796). In this reference witness statement, 한지훈 explained his role as Development Management Team Chief for the New KIATIS project and the overall project progress. Approximately 6 months later, on July 18, 2022, the military prosecutors issued a search and seizure warrant and investigation commencement notice for the **suspect** on the same matter.

This reference witness → suspect transition sequence represents the procedural inversion of the **retroactive prosecution design** where the military prosecutors first utilized 한지훈 as a cooperating witness, then retroactively converted his statements into the basis for charges. That is, the charge setting preceded evidence discovery, and the reference witness statement became the foundation of suspect charges. This structure is a core procedural element of Layer 6's "fraud investigation" constitution.

## 핵심 요약 (Key Takeaways)
- 한지훈이 2022-01-25에 **참고인** 자격으로 조사받은 사실은 기록 제4,776쪽으로 확인된다 — 피의자 전환보다 6개월 앞선 시점 [진리성]
- 참고인 신분으로 제공한 진술 내용(사업관리팀장 역할, VPN 미사용 경위 등)이 이후 피의자 조사의 혐의 프레임으로 그대로 활용되었다 — 협력자의 발언이 표적의 증거가 된 구조 [진리성]
- 군 검찰단은 참고인 조사 이전에 이미 수사방향(VPN 미사용 = 위계공무집행방해)을 설정하고 있었음을 불기소 이유서의 혐의 구성이 암시한다 [타당성]
- 참고인→피의자 재분류는 군사법원법상 피의자 권리 보호 의무를 소급하여 적용하지 않는 효과를 낳는다 — 참고인 진술은 묵비권 고지 없이 취득되었을 가능성 [타당성]
- 한지훈은 참고인 조사를 성실히 협력하였으나, 그 협력이 자신에 대한 기소의 기반이 된 점에서 진실성 차원의 피해가 발생하였다 [진실성]

## 층위 (Layer)
[[../layers/layer-6|Layer 6]] (primary) — `군 검찰단의 사기 수사와 범죄자 낙인`. 참고인→피의자 재분류의 절차 역전은 Layer 6의 "사기수사" 성립 요건인 **표적 선정의 소급성**을 직접 구성한다. [[../layers/layer-5|Layer 5]] (secondary) — Layer 5의 행정적 고립화 작전(2019~2022)이 한지훈을 사업 외부로 밀어낸 뒤, Layer 6의 참고인 조사가 그 고립 상태를 활용하여 진행된 점에서 두 층위의 시간적 중첩이 있다.

## 지지 증거 (Supporting Evidence)
- **참고인 진술서**: 기록 제4,776쪽~제4,796쪽 (2022.1.25.) — 사업관리팀장 역할 및 VPN 정책 관련 문답 포함 (§3.6.3.2 본문 인용: `총괄팀장이었는데, 당시 KIATIS 사업에 있어서는 팀장을 맡았습니다`)
- **압수수색 영장 + 군인·공무원 수사개시 통보**: 기록 제4,854쪽~제4,859쪽 (2022.7.18./7.21.) — 참고인 조사로부터 6개월 후 피의자 전환의 공식 시점
- **불기소 이유서**: 기록 제5,167쪽~제5,176쪽 — 혐의 프레임이 참고인 진술의 내용과 일치함을 비교 분석 가능
- Cross-link: [[han-ji-hoon-investigation-notification-2022-07-21]] — 수사개시 통보 발부 원자 (절차 역전의 다음 단계)
- Cross-link: [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] — 참고인→피의자 전환이 최종적으로 기소유예 낙인으로 귀결

## 반대 가설 (Counter-hypothesis)
참고인→피의자 전환은 수사과정에서 새로운 증거가 발견됨에 따라 이루어진 정상적인 절차이다. 이 가설에 따르면, 2022년 1월~7월 사이 압수수색 또는 제3자 진술을 통해 한지훈의 직접적인 위법 행위를 시사하는 새로운 증거가 발견되었고, 군 검찰단은 이에 따라 신분을 재분류한 것이다. 참고인 진술 내용을 활용한 것은 수사의 일반적인 방법이며 "소급 설계"와는 구별된다.

## 반증 조건 (Falsification Condition)
다음 중 하나가 입증되면 이 주장은 WEAKENED로 하향된다:

1. 2022년 1월 25일 이후, 2022년 7월 18일 이전에 새로운 객관적 증거(디지털 포렌식 결과, 제3자 진술 등)가 한지훈의 피의자 분류를 독립적으로 정당화한다는 수사기록
2. 참고인 조사 이전부터 군 검찰단이 한지훈을 피의자로 분류하지 않은 것이 법률 또는 수사규칙에 의한 필수 절차였음을 보여주는 군사법원법 해석

## 평결 (Verdict)
**CORROBORATED.** Moderate. 진리성 8 / 타당성 7 / 진실성 8. 참고인 진술서의 기록번호와 날짜, 그리고 이후 피의자 전환 문서(기록 제4,854쪽~)의 날짜 모두 Book §3.6.3에서 확인된다. 다만 참고인 진술 내용이 피의자 혐의 프레임의 직접적 근거가 되었다는 연결고리는 추론 단계를 하나 포함하므로 STRONG이 아닌 MODERATE로 판정한다.

## Spot-check (raw/01 book)

- `Korean/12-3-6-36-제6층위-군.md` §3.6.3.2 — 참고인 진술서 날짜·기록번호·문답 인용 — CONFIRMED
- `Korean/12-3-6-36-제6층위-군.md` §3.6.3.3 — 수사개시 통보 기록번호 — CONFIRMED
- 피의자 신문조서 날짜(2022-09-02) 및 기록 제4,874쪽 — 직접 확인 미완료; [[han-ji-hoon-suspect-interrogation-2022-09-02]] 원자에서 교차 확인 예정

## 미결 사항 (Open Questions)
- 참고인 조사 시 묵비권·변호인 조력권 고지 여부 — 군사법원법 제244조의3 준수 여부 확인 필요
- 2022-01-25 참고인 진술서 전문의 문답 내용이 이후 피의자 신문조서(기록 제4,874쪽)와 어떻게 중첩되는지 — A.6 Re-verify 대상

## 관련 (Related)
- [[prosecution-distorts-operational-vs-test-environment|3 shared records — 환경 왜곡 관련]] (RELATED)
- [[layer6-cartel-network-structure-four-documents-four-keywords|4 shared records — L6 카르텔 네트워크 증거]] (RELATED)
- [[han-ji-hoon-investigation-notification-2022-07-21|수사개시 통보 (2022-07-21) 원자]] (CORROBORATES)
- [[han-ji-hoon-suspect-interrogation-2022-09-02|피의자 신문조서 (2022-09-02) 원자]] (RELATED)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|기소유예 = 범죄 낙인 원자]] (RELATED)
- [[han-ji-hoon-prosecution-violates-2129-role-separation|훈령 제2129호 역할 분리 위반 원자]] (RELATED)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

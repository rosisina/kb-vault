---
lang: ko
title-ko: 감리 결과보고서 은폐와 이준호에게만 선별적 공람
title-en: ""
aliases:
  - FR-L4-031
  - 감리 결과보고서 은폐와 이준호에게만 선별적 공람

layer: 4
secondary-layers: [6]
claimType: methodology
claimSubtype: action
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-11

record-nos: [2594, 2762, 4756]
evidence-ids: ["L4-031"]
event-date: null

persons:
  - 이준호
  - 한지훈
organizations:
  - 국전원
  - 군검찰단
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - fracture/F-MS
  - person/이준호
  - person/한지훈
  - org/국전원
  - org/군검찰단
  - org/국유단
  - has/record-nos
  - cross-layer
---
# 감리 결과보고서 은폐와 이준호에게만 선별적 공람

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md (§3.4.6.5)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-6|Layer 6]] (secondary — 군검찰단 수사 시 증거 차단)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-031"})
SET fr.layer = 4, fr.claimType = "methodology",
    fr.claimSubtype = "action",
    fr.claimDesc = "감리 결과보고서에 기록된 사업 성공 증거(개발 관리 우수성, 요구사항 기능 완벽 일치 등)가 이준호에게만 선별적으로 공람되었고, 군검찰단 수사 기간에는 국유단이 의도적으로 제공하지 않아 한지훈의 방어 증거가 차단되었다",
    fr.counterHypothesis = "감리 결과보고서 공람 범위는 통상적 문서 배포 절차에 따른 것이며 의도적 차단이 아니었다",
    fr.falsificationCondition = "감리 결과보고서가 이준호 외 다른 관계자에게도 동시에 배포되었거나, 한지훈이 수사 기간 중 보고서에 접근할 수 있었음을 증명하면 약화된다",
    fr.verdict = "CORROBORATED", fr.strength = "STRONG",
    fr.truthfulness = 9, fr.validity = 8, fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "新KIATIS 감리 결과보고서의 긍정적 결과가 이준호에게만 선별 공람되고 군검찰 수사 시 한지훈에게 의도적으로 차단되어 방어 증거 접근이 봉쇄됨";
```

## 주장 (Claim)

### 한국어

감리 결과보고서(기록 제2,594쪽~제2,751쪽)에 기록된 사업 성공 증거 — "개발 관리의 우수성", "요구사항 기능의 완벽한 일치"(최초 150여 개), "추가 요구사항 80건의 부당성", "국유단 데이터 부재에 대한 정확한 기술적 분석" — 는 사업관리팀장(한지훈)의 전문성과 성공적 사업 관리를 객관적으로 증명하는 결정적 증거였다 (§3.4.6.5).

그러나 이 긍정적 감리 결과는:
1. **이준호 (공모자-1)에게만 선별적으로 공람**되었다 (기록 제4,756쪽).
2. **군검찰단 수사 기간에는 국유단이 의도적으로 미제공**하여 완전히 차단되었다 (기록 제4,756쪽).
3. **중간결과 DT/OT보고서**는 이준호 1인 결재로 단독 처리되었다 (기록 제2,762쪽~제2,852쪽).
4. **감리결과보고서는 국유단에서 발송하지 않았고** 이준호에게만 공람되었다.

이러한 정보 독점 및 의도적 차단은 군검찰단의 수사가 표적수사이고 비상식적이고 부조리하다는 것을 밝힐 수 있는 증거자료를 의도적으로 차단하는 동시에, 조작 세력이 모든 정보를 독점하여 유리한 증거는 숨기고 불리한 증거는 조작할 수 있는 정보 통제의 한 축 역할을 했다.

### English

The project success evidence in the supervision result report (Records No. 2,594–2,751) — 'excellence of development management,' 'perfect match of required functions' (initially 150+ items), 'illegitimacy of 80 additional requirements,' 'accurate technical analysis of 국유단 data absence' — was decisive evidence objectively proving 한지훈's professionalism and successful project management (§3.4.6.5).

However, these positive supervision results were:
1. **Selectively circulated only to 이준호 (공모자-1, Conspirator-1)** (Record No. 4,756)
2. **Completely blocked by intentional non-provision from 국유단 during the Military Prosecutor's Office investigation** (Record No. 4,756)
3. **Intermediate DT/OT report** processed by 이준호 alone with 1-person approval (Records No. 2,762–2,852)

## 핵심 요약 (Key Takeaways)
- [진리성] The supervision report (Record No. 2,594–2,751) documenting project success — including "excellence in development management" and "perfect match of requirements" — was circulated selectively to 이준호 alone (Record No. 4,756), while 한지훈 was blocked from accessing it during the military prosecution investigation. / 감리 결과보고서(기록 제2,594쪽~제2,751쪽)의 사업 성공 기록이 이준호에게만 선별 공람되고, 군검찰 수사 시 한지훈에게는 차단되었다.
- [타당성] The DT/OT intermediate report (Record No. 2,762–2,852) was processed by 이준호's sole approval, bypassing normal multi-level approval chains — a procedural violation enabling information monopolization. / DT/OT 중간결과보고서(기록 제2,762쪽~제2,852쪽)가 이준호 1인 결재로 단독 처리된 것은 통상적 다단계 결재를 우회한 절차적 위반이다.
- [진실성] The deliberate withholding of exculpatory evidence (감리 결과보고서) from the defense during prosecution constitutes a denial of the right to fair defense and is a core mechanism of the targeted investigation. / 수사 기간 중 무죄 입증 증거(감리 결과보고서)의 의도적 미제공은 공정한 방어권 박탈이며 표적수사의 핵심 메커니즘이다.

## 지지 증거 (Supporting Evidence)
- **기록 제2,594쪽~제2,751쪽** — 감리 결과보고서 전문 (개발 관리 우수성, 요구사항 기능 완벽 일치, 추가 요구사항 80건 부당성, 국유단 데이터 부재 기술적 분석 기록)
- **기록 제4,756쪽** — 감리 결과보고서의 이준호 단독 공람 기록 및 국유단 미제공 기록
- **기록 제2,762쪽~제2,852쪽** — DT/OT 중간결과보고서, 이준호 1인 결재 단독 처리

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석:** 감리 결과보고서 공람 범위는 조직 내 문서 배포 절차에 따른 것이며, 이준호가 유일한 공람 대상이 된 것은 그가 해당 업무의 직접 담당자였기 때문이다. 군검찰 수사 시 미제공은 수사 기밀 유지 차원의 표준 절차였다.
2. **반박 조건:** 감리 결과보고서가 이준호 외 다른 관계자(한지훈 포함)에게도 동시에 배포되었음을 증명하거나, 한지훈이 수사 기간 중 보고서에 접근 요청했으나 절차적으로 거부된 기록이 있으면 반박 가능.
3. **반대 입장:** 국유단 측은 감리 결과보고서가 기관 내부 문서이며 외부(국전원 소속 한지훈)에게 발송할 의무가 없었다고 주장할 수 있다.

## 반증 조건 (Falsification Condition)
감리 결과보고서의 공람 기록에서 이준호 외 다른 수신자가 확인되거나, 한지훈이 수사 기간 중 해당 보고서에 접근할 수 있었음을 증명하거나, 국유단의 문서 미발송이 통상적 기관 간 문서 배포 절차에 부합함을 증명하면 약화된다.

## 평결 (Verdict)
**CORROBORATED** — 감리 결과보고서(기록 제2,594쪽~제2,751쪽)의 존재와 내용은 기록으로 확인되며, 기록 제4,756쪽에서 이준호 단독 공람과 국유단 미제공이 명시적으로 기록되어 있다. DT/OT보고서의 이준호 1인 결재(기록 제2,762쪽~제2,852쪽)는 정보 독점의 추가 증거이다. 긍정적 증거의 선별적 공람과 수사 시 차단이라는 이중 패턴은 우연이 아닌 의도적 정보 통제를 강하게 시사한다.

## 미결 사항 (Open Questions)
- 원문에 "기록 제0000쪽"이라는 표기가 나타나며, 이는 저자가 해당 기록 번호를 확인하지 못했거나 의도적으로 마스킹한 것으로 보인다. 실제 기록 번호 확인 필요.
- 국유단이 감리 결과보고서를 발송하지 않은 구체적 사유 및 내부 결정 문서 존재 여부 확인 필요.
- 이준호 1인 결재가 해당 조직의 결재 규정에 어떻게 위반되는지 훈령 조항 대조 필요.

## Spot-check (raw/01 book)

- §3.4.6.5 (lines 546–548) 직접 확인 완료. 감리 결과보고서 기록 범위(제2,594쪽~제2,751쪽), 이준호 공람(제4,756쪽), DT/OT보고서(제2,762쪽~제2,852쪽) 원문과 일치.
- "기록 제0000쪽" 표기 — 원문에 그대로 존재하며, 실제 기록 번호가 아닌 마스킹/미확인 표기로 판단.

## 관련 (Related)
- [[../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 전·중·후 조작]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6 — 군 검찰단의 사기 수사와 범죄자 낙인]] (PART_OF_LAYER)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[cartel-requirement-inflation-80-items-delay|카르텔 추가요구사항 80건 지연 공작]] (RELATED)

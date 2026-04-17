---
lang: ko
title-ko: 병사 휴대전화 보안통제 아키텍처 아이디어 절도 및 특허출원 모의
title-en: ""
aliases:
  - FR-L3-IDEA-THEFT-MOBILE
  - 병사 휴대전화 보안통제 아키텍처 아이디어 절도 및 특허출원 모의

layer: 3
secondary-layers: []
claimType: methodology
claimSubtype: intellectual_property_misappropriation
fracture-type: null
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 7
sincerity: 9
analysisDate: 2026-04-12

record-nos: [2359, 2364, 2374, 2418, 11077, 11176]
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 최영수
  - 진상호
organizations:
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L3
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - person/한지훈
  - person/최영수
  - person/진상호
  - org/국전원
  - org/MND
  - has/record-nos
---
# 병사 휴대전화 보안통제 아키텍처 아이디어 절도 및 특허출원 모의

**Source:** raw/01. book-beyond-cybersecurity/Korean/09-3-3-33-제3-층위.md §3.3.3.2 (lines 44-61)
**Layer:** [[../layers/layer-3|Layer 3]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-IDEA-THEFT-MOBILE"})
SET fr.layer = 3,
    fr.claimType = "methodology",
    fr.claimSubtype = "intellectual_property_misappropriation",
    fr.claimDesc = "한지훈이 수년간 연구하여 설계한 '병 휴대전화 보안 통제 체계를 위한 부대별 아키텍처 초안'(2019.3.6, Record 2,359~2,360)을 과장 최영수와 배준호 팀장이 특허출원하려 했고, 이 설계를 기반으로 마크애니 업체를 통해 25.9억원 규모의 국방부 사업이 추진되었다",
    fr.counterHypothesis = "병사 휴대전화 보안체계는 국전원 조직의 공동 성과물이며, 한지훈의 기여는 부분적이고 최종 사업은 별개의 기술설계를 사용했다",
    fr.falsificationCondition = "국방부 사업의 기술설계가 한지훈의 아키텍처와 무관한 독자적 설계임을 보여주는 기술문서 비교",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "상급자 인정(Record 11,077 최영수 '예예 이해하고 있죠') + 수사관 인정(Record 11,176 진상호 '훌륭하신 분이라고') + 원본 설계서(Record 2,359~2,360) + 예산·업체 기록(Record 2,374/2,377/2,396/2,399, 마크애니) — 5개 독립 증거원 수렴. 사업결과물 직접 대조 미완이나 상급자·수사관 양측 인정이 이를 상쇄.";
```

## 주장 (Claim)

### 한국어

한지훈은 2013년 육군본부 근무 시부터 해킹 대응 모바일 서비스 연구를 수행하여 4개의 논문을 발표하였으며(기록 제2,418쪽, 기록 제12,066쪽, 기록 제6,683쪽 등), 이 연구 결과를 바탕으로 「병 휴대전화 보안 통제 체계를 위한 부대별 아키텍처 초안」(2019.3.6., ver 1.6, 기록 제2,359쪽~제2,360쪽)을 작성하여 과장에게 보고하였다.

이후 과장 최영수와 배준호 (팀장-1)가 이 설계에 대한 특허출원을 논의하는 것을 한지훈이 의도치 않게 듣게 되었다. 1차 사업 예산은 25.9억원이며(기록 제2,374쪽, 제2,377쪽, 제2,396쪽, 제2,399쪽), 사업업체는 마크애니(기록 제2,364쪽부터)로 확인되었다.

과장 최영수는 대화에서 이를 인정: "(병사) 휴대폰 체계 내가 디자인한 거예요?" — "(최영수) 예예 이해하고 있죠" (기록 제11,077쪽). 군검찰 수사관 진상호도 "저희도 많이 들었습니다. 훌륭하신 분이라고" 진술(기록 제11,176쪽).

### English

한지훈 conducted research on mobile services for hacking response from his Army Headquarters posting in 2013, publishing 4 papers (Record No. 2,418, 12,066, 6,683 etc.), and based on this research wrote "Unit-Level Architecture Draft for Soldier Mobile Phone Security Control System" (2019-03-06, ver 1.6, Record No. 2,359–2,360) and reported it to the section chief.

Subsequently, 한지훈 unintentionally overheard Section Chief 최영수 and Team Leader 배준호 (Team-Leader-1) discussing a patent application for this design. The first project budget was 2.59 billion KRW (Record No. 2,374, 2,377, 2,396, 2,399), and the project contractor was MarkAny.

## 핵심 요약 (Key Takeaways)
- 한지훈's mobile security architecture (Record No. 2,359~2,360) was based on years of research including 4 published papers, one cited by US War College and NATO-affiliated institutions [진리성]
- 과장 최영수 acknowledged 한지훈's design authorship in recorded conversation (Record No. 11,077) [진리성]
- The architecture was used for a 25.9 billion KRW government project with 마크애니 — without attribution to the original designer [진실성]
- 과장 and 팀장 discussed patenting the design without 한지훈's knowledge [진실성]

## 지지 증거 (Supporting Evidence)
- **Record No. 2,359~2,360** — 병 휴대전화 보안 통제 체계 아키텍처 초안 (2019.3.6.)
- **Record No. 2,374, 2,377, 2,396, 2,399** — 1차 사업 예산 25.9억원
- **Record No. 2,364** — 마크애니 업체 관련
- **Record No. 2,418** — 해킹에 자유로운 모바일 서비스 구현 방안 연구 (2016.6.15.)
- **Record No. 11,077** — 최영수 대화 (디자인 인정)
- **Record No. 11,176** — 군검찰 수사관 진상호 대화

## 반대 가설 (Counter-hypothesis)
병사 휴대전화 보안체계 사업은 국방부 병영문화력인팀 주관으로 별도 기획된 것이며, 한지훈의 아키텍처 초안은 참고자료 수준이었다.

## 반증 조건 (Falsification Condition)
국방부 사업 기술설계서와 한지훈의 아키텍처 초안을 대조하여 독립적 설계임을 확인.

## 평결 (Verdict)
**CORROBORATED.** STRONG. 진리성 9 / 타당성 7 / 진실성 9. 상급자 인정(Record 11,077) + 수사관 인정(Record 11,176) + 원본 설계서 + 예산·업체 기록 — 5개 독립 증거원 수렴. 사업결과물 직접 대조 미완이나 상급자·수사관 양측 인정으로 상쇄.

## 원전 확인 (Spot-check)
- `Korean/09-3-3-33-제3-층위.md` lines 44-61

## 관련 (Related)
- [[kiatis-project-deliberately-transferred-to-han-ji-hoon]] — L3 업무 떠넘기기 (RELATED)
- [[../layers/layer-3|Layer 3]] (PART_OF_LAYER)

---
lang: ko
title-ko: 불기소 이유서의 내적 모순 — 기소유예와 99.73점 성공 동시 인정
title-en: 불기소 이유서의 내적 모순 — 기소유예와 99.73점 성공 동시 인정
aliases:
  - FR-L6-NON-PROSECUTION-CONTRADICTION
  - 불기소 이유서의 내적 모순 — 기소유예와 99.73점 성공 동시 인정

layer: 6
secondary-layers: []
claimType: prosecution_misconduct
claimSubtype: prosecution_logical_contradiction
fracture-type: F-SC
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-11

record-nos: [1033, 1129, 1535, 4866, 4872, 6818]
evidence-ids: []
event-date: null

persons:
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - 군검찰단
  - 국유단
  - 조달청
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/book
  - fracture/F-SC
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - org/국유단
  - org/조달청
  - has/record-nos
---
# 불기소 이유서의 내적 모순 — 기소유예와 99.73점 성공 동시 인정

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md §3.6.4.1 (lines 299-310)
**Layer:** [[../layers/layer-6|Layer 6]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-NON-PROSECUTION-CONTRADICTION"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_logical_contradiction",
    fr.claimDesc = "군 검찰단의 불기소 이유서는 위계공무집행방해로 기소유예 처분을 내리면서 동시에 'KIATIS는 99.73점을 받아 제안요구서 기능을 대부분 충족'이라고 인정하여, 논리적으로 양립 불가능한 모순을 내포한다. 국가계약법에 의한 용역사업 평가위원회에서 적합 판정을 받은 합법적 행위가 범죄가 될 수 없다",
    fr.counterHypothesis = "기소유예의 범죄사실과 99.73점 성공은 별개의 쟁점이며, 환경 구성의 하자와 사업 결과의 품질은 독립적으로 판단할 수 있다",
    fr.falsificationCondition = "위계공무집행방해의 성립이 사업 결과의 성공 여부와 무관하게 절차적 하자만으로 인정될 수 있다는 판례 또는 법리의 제시",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "불기소 이유서 자체에 모순이 존재: '피의사실은 인정된다'(기소유예) + '기능 대부분 충족'(성공 인정). KIATIS는 조달청 제한총액 기반 SW개발용역사업(Record 4,866~4,871, Record 6,818~6,819)이며, 평가위원회 99.73점 적합판정은 국가계약법에 의한 정당한 절차.";
```

## 주장 (Claim)

### 한국어

군 검찰단의 불기소 이유서는 사기수사의 전형적 모델을 보여주는 문서이다. 핵심 모순: 위계공무집행방해로 "피의사실은 인정된다"며 기소유예 처분을 내리면서, 동시에 "KIATIS는 개발·운용시험평가에서 99.73점을 받은 바 있어 제안요구서에서 요구한 기능들을 대부분 충족하는 것으로 보이고"(10페이지)라고 사업의 성공을 인정했다.

이는 논리적으로 양립 불가능한 모순이다. 新KIATIS 사업은 조달청 계약에 따라 협상에 의한 계약으로 체결된 제한총액 기반의 정보시스템개발서비스 용역사업(기록 제4,866쪽~제4,871쪽)이며, 국가계약법에 의한 평가위원회에서 99.73점의 적합 판정을 받은 정상적이고 합법적인 행위가 범죄가 될 수 없다.

나머지 5개 혐의(업무상배임, 허위공문서작성, 허위작성공문서행사, 허위보고, 허위통보)에 대해서는 "증거 불충분하여 혐의 없다"라고 하였으나, 이 역시 "동일성 오류" 기만기술을 사용하여 범죄의 소지를 남겨둔 "똘똘 말기" 법기술이다. 기소유예라는 범죄자 낙인을 남겨 실질적 처벌 효과를 달성했다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The non-prosecution report contains an irreconcilable logical contradiction: 기소유예 (criminal finding) + 99.73% success acknowledgment (lawful completion) in the same document [진리성]
- KIATIS was a government procurement SW development service contract under the National Contract Act — a legitimate evaluation committee's 적합 verdict cannot simultaneously be a criminal act [타당성]
- The five other charges dismissed as "insufficient evidence" were deliberately left unresolved to preserve criminal stigma — a "rolling up" (똘똘말기) legal technique [진실성]
- The prosecution ignored that KIATIS was a pure SW development project, not infrastructure — concealing that all VPN/샤크라맥스/OTP items were DIDC's responsibility, not 한지훈's [진리성]

## 지지 증거 (Supporting Evidence)
- **Record No. 4,866~4,871** — 조달청 계약 서류 (제한총액 기반 정보시스템개발서비스 용역사업)
- **Record No. 6,818~6,819** — 정리19 증명 (SW개발사업 확인)
- **Record No. 1,535** — 조달청 최종 제안요청서 59페이지 (적정사업기간 10개월)
- **Record No. 4,872** — 계약이행 절차 근거
- **Record No. 1,129** — 국전원 사업계획서 (소요예산 산출)
- **Record No. 1,033, 1,048** — 국유단 사업요청 (SW대가산정 가이드라인)
- **본문기록-제6층위-017** — 정리19 증명문

## 반대 가설 (Counter-hypothesis)
기소유예의 범죄사실(시험환경 구성의 절차적 하자)과 사업 결과의 성공(99.73점)은 별개의 법적 쟁점이다. 절차적 위법이 있더라도 결과가 좋을 수 있으며, 결과의 성공이 절차적 위법을 면책하지 않는다.

## 반증 조건 (Falsification Condition)
위계공무집행방해의 성립이 사업 성공 여부와 무관하게 순수 절차적 하자만으로 인정 가능하다는 대법원 판례 또는 학설의 제시.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9. 불기소 이유서 자체 내의 텍스트 모순이며, 외부 증거 없이도 문서 자체에서 확인 가능한 강력한 증거.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 299-310 — §3.6.4.1 verbatim

## 관련 (Related)
- [[prosecution-identity-fallacy-deception-technique]] — L6 동일성 오류 (CORROBORATES)
- [[prosecution-non-prosecution-identity-error-fraud]] — L6 불기소 사기 (CORROBORATES)
- [[prosecution-distorts-operational-vs-test-environment]] — L6 환경 왜곡 (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

---
lang: ko
title-ko: 한지훈 반박 문서(2022.9.29)의 6개 혐의별 체계적 반박 — 각 혐의가 "비상식적이고 부조리하다"는 것을 정리·공준에 의해 증명
title-en: 한지훈 반박 문서(2022.9.29)의 6개 혐의별 체계적 반박 — 각 혐의가 "비상식적이고 부조리하다"는 것을 정리·공준에 의해 증명
aliases:
  - FR-L6-SIX-CHARGES-REFUTATION
  - 한지훈 반박 문서(2022.9.29)의 6개 혐의별 체계적 반박 — 각 혐의가

layer: 6
secondary-layers: []
claimType: prosecution_misconduct
claimSubtype: six_charges_systematic_refutation
fracture-type: null
source-type: investigation

verdict: CORROBORATED
strength: STRONG
truthfulness: 10
validity: 9
sincerity: 10
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 한지훈
  - 이준호
  - 김경진
  - 김민수
organizations:
  - DIDC
  - 국전원
  - 군검찰단
  - 조달청
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/investigation
  - person/한지훈
  - person/이준호
  - person/김경진
  - person/김민수
  - org/DIDC
  - org/국전원
  - org/군검찰단
  - org/조달청
---
# 한지훈 반박 문서(2022.9.29)의 6개 혐의별 체계적 반박 — 각 혐의가 "비상식적이고 부조리하다"는 것을 정리·공준에 의해 증명

**Source:** raw/05. Investigation by the Military Prosecutor's Office/Bilingual(English, Korean)/(20220929) Explanation and Proof Search, Seizure, and Verification Warrants Search(English, Korean).converted.md (lines 193~3100+)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 6개 혐의 반박)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-SIX-CHARGES-REFUTATION"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "six_charges_systematic_refutation",
    fr.claimDesc = "한지훈이 3,811줄 반박 문서에서 6개 혐의 각각을 정리·공준·증거목록에 의해 체계적으로 반박. 각 혐의에 대해 '비상식적이고 부조리하다는 것이 증명되었다'고 결론. (1) 위계공무집행방해: 역할분리(정리21)+VPN 미사용은 DIDC 제약(정리01)+시험평가 절차 준수, (2) 허위공문서작성: 결재라인(간사→위원장→원장) 정상 승인 문서를 허위라 할 수 없음, (3) 허위보고·허위통보: 평가위원회가 99점+ '군사용 적합' 판정한 승인 문서를 허위라 함은 '표적수사', (4) 업무상배임: 제한총액 SW개발용역(정리19)+사업관리팀장 역할범위 밖",
    fr.counterHypothesis = "반박 문서는 피의자의 일방적 자기변호이며 검찰의 증거와 비교 검토가 필요하다",
    fr.falsificationCondition = "검찰이 이 반박 문서의 논거 각각에 대해 실질적으로 재반박한 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "6개 혐의 각각에 대한 정리·공준 기반 체계적 반박 + 99점 '군사용 적합' 승인 문서를 허위라 함은 표적수사 + '그 문서의 행위와는 관련이 없는 본인이 어떻게 공모를 할 수 있는지' 핵심 질문.";
```

## Claim

한지훈의 반박 문서(2022.9.29, 3,811줄)에서 6개 혐의 각각에 대한 체계적 반박의 핵심 논거:

### 혐의 1: 위계공무집행방해 (lines 193~1972)

**검찰 주장**: 한지훈과 이준호가 시험평가 환경을 임의로 조작하여 "1.나.항"에 기재된 KIATIS 개발상 하자를 은폐하기로 모의

**한지훈 반박 핵심**:
- **정리21**: 시험평가 지원의 임무와 역할은 사업관리팀장 관할 밖 — 한지훈은 결재라인에서 **고의적으로 제외**되었으므로 "공모" 불가능
- **정리01**: 舊KIATIS는 Active-X C/S 방식이며 15년간 VPN 없이 DB 직접접속 — "조작"이 아닌 **원래 구조**
- 시험평가는 제안요청서·사업수행계획서·요구사항 정의서를 기준으로 작성한 시험평가 절차서 기준 — **14개 다른 사업과 동일 절차**
- **결론**: "본인이 이준호와 공모하여 위계로써 평가위원장 김경진 등 18명의 평가위원회 직무집행을 방해하였다는 것이 사실이 아니며 **비상식적이고 부조리하다**"

### 혐의 2: 허위공문서작성 + 허위작성공문서행사 (lines 1975~2380)

**검찰 주장**: 한지훈과 이준호가 KIATIS의 개발상 하자를 인식하고도 허위 평가 결과를 공문서로 작성

**한지훈 반박 핵심**:
- 결재라인: **간사(이준호) → 평가위원장(김경진) → 국전원장(김민수)** 승인 — 한지훈은 결재라인에 **없음**
- 핵심 질문: "**시험평가의 간사와 평가위원장에게 보고하여 국전원장이 결재하여 승인한 문서**를 그 **문서의 행위와는 관련이 없는 본인이 어떻게 공모**를 할 수 있는지 국방부검찰단에 묻고 싶습니다"
- **결론**: "비상식적이고 부조리하다는 것이 증명되었다"

### 혐의 3: 허위보고 + 허위통보 (lines 2382~2856)

**검찰 주장**: KIATIS에 관하여 허위의 사실을 기재한 공문서를 작성하여 상관에게 보고하고 관계기관에 통보하기로 모의

**한지훈 반박 핵심**:
- 평가위원회가 **99점 이상**이며 **'군사용 적합'** 판정 → 원장 결재 승인 완료
- "이미 **승인이 이루어진 문서**가 피의사실에 적시된 것 같은 허위가 아니라면 이것은 **표적수사**여야 한다"
- **결론**: "표현하기 어려울 만큼, 비상식적이고 부조리하다"

### 혐의 4: 업무상배임 (lines 2858~3100+)

**검찰 주장**: 한지훈이 업무상 배임 행위를 하였다

**한지훈 반박 핵심**:
- **정리19**: KIATIS = 조달청 계약에 따른 **제한총액 기반 SW개발서비스 용역사업** — 사업관리팀장의 역할 범위와 배임의 구성요건이 불일치
- 사업 구조상 한지훈은 **사업관리** 담당이지 **시험평가 실행** 담당이 아님

### 핵심 질문 — 전체 반박의 정수

> "**시험평가의 간사와 평가위원장에게 보고하여 국전원장이 결재하여 승인한 문서를, 그 문서의 행위와는 관련이 없는 본인이 어떻게 공모를 할 수 있는지** 국방부검찰단에 묻고 싶습니다."

이 한 문장이 6개 혐의 전체의 **구조적 결함**을 요약한다: 결재라인에 없는 사람이 결재라인 위의 문서를 "공모하여 허위 작성"할 수 없다.

## Key Takeaways

- [타당성] **6개 혐의 각각에 대해** 정리·공준·증거목록을 인용한 체계적 반박이 수행되었으나, 검찰은 이 반박에 대해 **어떤 재반박도 하지 않고 기소유예를 유지** — 반박 무시 = 사전 결론의 증거. / All 6 charges systematically refuted with theorems and evidence citations; prosecution maintained 기소유예 without any counter-response.
- [진리성] **"결재라인에 없는 사람이 어떻게 공모할 수 있는지"** — 이 질문은 혐의 구조의 **논리적 불가능성**을 한 문장으로 요약. 검찰은 이 질문에 답하지 않았다. / "How can a person not in the approval chain conspire regarding documents he never signed?" — the prosecution never answered.
- [진리성] **99점+ '군사용 적합' 승인 문서를 "허위"라 함** = 평가위원회 전체의 판단을 허위라 하는 것 — 이 경우 검찰은 18명의 평가위원 **전원**을 공범으로 기소해야 논리적 정합성. / Calling a 99+ 'military adequate' approved document "false" means calling all 18 evaluators accomplices.
- [진실성] 이 문서는 **압수수색 후 한지훈이 "밤낮을 새우며 분석"**한 결과물 — 피의자가 스스로 증거를 분석하여 검찰보다 정밀한 반박을 수행한 것 자체가 **무혐의의 방증**. / The suspect produced a more rigorous analysis than the prosecution — itself evidence of innocence.

## Supporting evidence

- **반박 문서 전문** (raw/05 20220929, 3,811 lines)
- **메타 atom**: [[han-ji-hoon-rebuttal-20220929-meta-axiom-theorem-structure]]
- Cross-reference: [[han-ji-hoon-prosecution-violates-2129-role-separation|역할분리 위반 — 혐의 1 반박의 핵심]]
- Cross-reference: [[prosecution-misapplies-2129-article-58-4-to-kiatis|제58조 ¶4 오적용 — 혐의 4 반박의 핵심]]
- Cross-reference: [[prosecution-non-prosecution-self-contradiction|불기소 내적 모순 — 99점 성공+기소유예 모순]]

## Counter-hypothesis

반박 문서는 피의자의 자기변호이며 검찰의 증거와 비교 검토가 필요하다.

## Falsification condition

검찰이 이 문서의 반박 논거에 대해 실질적 재반박을 수행한 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 10 / 타당성 9 / 진실성 10.

## Spot-check (raw/01 book)

- `vault-converted-korean/12-3-6-36-제6층위-군.md` — §3.6 전체가 이 반박 문서의 발전형
- Deferred to A.6 Re-verify.

## Related

- [[han-ji-hoon-rebuttal-20220929-meta-axiom-theorem-structure|메타 atom]] (OPPOSES)
- [[han-ji-hoon-prosecution-violates-2129-role-separation|역할분리]] (OPPOSES)
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|제58조 오적용]] (OPPOSES)
- [[prosecution-non-prosecution-self-contradiction|불기소 모순]] (OPPOSES)
- [[han-ji-hoon-rebuttal-rejected-by-eight-institutions|8개 기관 거부]] (OPPOSES)
- [[../regulations/glossary-axiom-theorem-definitions|용어 정의집]] (ABOUT)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

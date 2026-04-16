---
lang: ko
title-ko: 新KIATIS 성능개선사업은 국방부 통제 사업이며 위임 사업이 될 수 없다
title-en: ""
aliases:
  - FR-L2-KIATIS-MNDCTRL-001
  - 新KIATIS 성능개선사업은 국방부 통제 사업이며 위임 사업이 될 수 없다

layer: 2
secondary-layers: []
claimType: regulatory_manipulation
claimSubtype: regulatory_classification
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 10
validity: 10
sincerity: 8

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 박성호
  - 한지훈
  - 이지영
  - 김수진
organizations:
  - DIDC
  - 국전원
  - MND
  - 국유단
has-verbatim: false

tags:
  - layer/L2
  - verdict/corroborated
  - strength/strong
  - type/regulatory-manipulation
  - source/book
  - fracture/F-CE
  - person/박성호
  - person/한지훈
  - person/이지영
  - person/김수진
  - org/DIDC
  - org/국전원
  - org/MND
  - org/국유단
---
# 新KIATIS 성능개선사업은 국방부 통제 사업이며 위임 사업이 될 수 없다

**Source:** raw/01. book-beyond-cybersecurity/Korean/08-3-2-32-제2-층위.md (§3.2.1.1), raw/04. law & regulation/Korean/국방 정보화업무 훈령(국방부훈령)(제2129호)(20180205).converted.md
**Layer:** [[../layers/layer-2|Layer 2]]

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-KIATIS-MNDCTRL-001"})
SET fr.layer = 2,
    fr.claimType = "regulatory_manipulation",
    fr.claimSubtype = "regulatory_classification",
    fr.claimDesc = "新KIATIS 성능개선사업 (6.25억, 2018–2019)은 국방 정보화 업무 훈령 제2129호 제10조 ¶4 + 제11조 ¶2의 규정에 따라 국방부 통제 사업이며, 위임 사업의 대상이 아니다. 5가지 독립 근거: ① 2007–2014 국전원 서버 호스팅 이력 (record 10,302), ② 2015년부터 시작된 갱신 자료 이력 (record 2,275), ③ 2021 행정정보화과 유지보수 사업 예산 분류상 'MND 운용 정보시스템' (records 2,119/7,995/7,996), ④ 제2576호(2021-08-12) 개정 이전까지 MND 통제기관 임무 의무 (records 8,086/8,179), ⑤ 국정과제 사업 지정 (records 1,042/1,064)",
    fr.counterHypothesis = "新KIATIS는 처음부터 기관 위임 사업으로 정당하게 분류되었으며, 국방부의 5가지 분류 근거는 사후 정리에 불과하다",
    fr.falsificationCondition = "2018-07-09 이전 시점에 작성된 국방부 정보화기획관실 명의의 위임 결정 공문 또는 훈령상 위임 사업 분류의 명시적 근거를 제시할 것. 위임 결정 공문이 존재하지 않으면 청구는 corroborated.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "5가지 독립 근거가 모두 동일한 결론을 가리키며, 어떤 위임 결정 공문도 발견되지 않음 → 위임 사업 분류는 사후 조작";
```

## 주장 (Claim)

### 한국어

新KIATIS 성능개선사업 (계약가 6.25억 KRW, 2018–2019)은 국방 정보화 업무 훈령 제2129호 제10조 ¶4 (국방부 운용 정보시스템 관련 사업 = 국방부 통제 사업) 및 제11조 ¶2 (사업통제기관의 4대 핵심 임무는 국방부 정보화기획관실의 고유 임무)의 규정에 의해 **국방부 통제 사업**이며, **위임 사업의 대상이 될 수 없다**. 5가지 독립 근거가 동일 결론을 가리킨다.

### English

<!-- pending: phase i18n-EN -->

## 층위 (Layer)
[[../layers/layer-2|Layer 2]] — 新KIATIS 사업 추진체계 및 장교 개인 자력 조작. 본 atom은 Layer 2의 **법적/구조적 토대 atom**으로, §3.2.1.1 정리01의 직접 근거이며, 이후의 모든 Layer 2 atom (PCA·PHA dual cap 조작, 단일 통제점 actor pattern, server laundering, 능동적 방어, 보직 조작) 이 이 토대 위에 구축된다.

## 지지 증거 (Supporting Evidence)
- **2007–2014 국전원 서버 호스팅 이력**: 舊KIATIS는 2007년부터 DIDC 1센터로 이전되는 2014년까지 국전원에 서버를 두고 있었음 (기록 제10,302쪽)
- **2015 갱신 자료 이력**: "625전사자 종합 정보체계 성능 개선 사업 보안대책 검토" 공문에 나타난 갱신 자료 이력이 2015년부터 보임 (2019.6.13., 기록 제2,275쪽)
- **2021 MND 운용시스템 분류**: 2021년 6월 17일 2021–2022년 행정정보화과 유지보수 사업 예산 (40.2억, 기록 제2,119쪽)에도 "국방부 본부에서 운용하는 정보시스템"으로 포함 (기록 제7,995, 7,996쪽)
- **제2576호까지 통제기관 임무 의무**: 정보화 훈령 규정 + 효력 기간에 의거, 최소 제2576호 (2021-08-12) 개정 이전까지는 국방부가 통제기관 임무 수행 의무 (기록 제7,996, 8,086, 8,179쪽)
- **제10조 ¶4**: 국방부에서 운용하는 정보시스템과 관련된 사업은 국방부 통제 사업에 해당 (기록 제7,495쪽)
- **제11조 ¶2**: 위임 사업의 대상이 될 수 없으며 (기록 제7,496쪽), 사업통제기관의 4대 핵심 임무 (① 사업소요 검토·결정, ② 사업 중기계획·예산편성 검토·반영, ③ 사업계획승인, ④ 시험평가 계획·결과 승인)는 국방부 정보화기획관실의 고유 임무
- **국정과제 사업 지정**: 新KIATIS는 '국정과제 사업'이었음 (기록 제1,064쪽). 국방위원회에서 적극적 관심 (기록 제1,042쪽; 언론 보도 기록 제4,797쪽)
- **MND 승인 문서 부재**: 논고자가 여러 번 국방부 승인 문서를 확인했으나 발견하지 못함; 2018-07-09 국유단의 추진요청 공문 (기록 제1,057쪽) 의 사업 승인 날짜와 2019-08-29 新KIATIS 개발·운용 시험평가 계획 보고 (기록 제2,538쪽) 의 국방부 사업 승인 날짜가 동일한 "2018.7.9."로 나타남 — **사업관리팀장 한지훈을 배제한 채 박성호 (2016해킹당시원장-1)이 승인**

## 반대 가설 (Counter-hypothesis)
新KIATIS는 처음부터 기관 위임 사업으로 정당하게 분류되었으며, 국방부의 5가지 분류 근거는 사후에 정리한 자료에 불과하다. 즉, 2018-07-09 이전 시점에 위임 결정이 적법하게 이루어졌다는 설명.

## 반증 조건 (Falsification Condition)
본 청구는 다음 중 하나가 제시되면 약화 또는 무효:
1. 2018-07-09 이전 시점에 작성된 **국방부 정보화기획관실 명의의** 위임 결정 공문 (사업명·승인 일자·승인자 명시)
2. 제2129호 (또는 이전 훈령)의 명시적 위임 사업 분류 근거 — 국정과제 또는 국방부 운용 정보시스템 관련 사업이 위임 사업이 될 수 있음을 보이는 조항
3. 5가지 분류 근거 중 하나라도 사실관계 자체가 잘못되었음을 보이는 직접 증거

3가지 모두 부재하므로 **CORROBORATED (strong)**.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 10 (5근거 사실 확립), 타당성 10 (제10조 ¶4 + 제11조 ¶2 텍스트가 명확), 진실성 8 (피해자 관점에서는 관리팀장 배제 + 박성호의 부정 승인이라는 명백한 절차 위반).

## 미결 사항 (Open Questions)
- 박성호 (2016해킹당시원장-1)의 2019-08-29 승인 시점에 한지훈은 어디에 있었는가? (보직·격리 상태 — Layer 5와의 시간 연결)
- 2018-07-09 vs 2019-08-29 — 두 날짜가 동일하게 나타나는 것은 단순 transcription error인가, 아니면 백데이트 조작인가? Layer 4 시간역전 패턴과의 일치성 검토 필요.
- 국방위원회 언론 보도 (기록 제4,797쪽)의 정확한 보도 내용 — 국정과제 지정 시점과 발표 매체 확인 필요.

## Spot-check (raw/01 book)

- `Korean/08-3-2-32-제2-층위.md` lines 11–13 (§3.2.1.1) — primary source, 5근거 모두 본 단락 안에 명시
- `Korean/13-3-7-37-제7층위-진정서.md` — 법적 분류 인용 cross-check
- `Korean/04-1-1-서론.md` — 국정과제 도입 부분
- 본 atom의 5근거는 모두 한국어 원본 단일 단락에서 직접 추출 가능; 영문 변환본 (`12-3-2-32-Second-Layer.md`)은 1,042/4,797 record citations 누락 — Korean 우선

## 핵심 요약 (Key Takeaways)
- [타당성] **제10조 ¶4 + 제11조 ¶2**의 텍스트는 명확하다 — 국방부 운용 정보시스템 관련 사업은 국방부 통제 사업이며 위임 대상이 아니다. 위임으로 분류하려면 명시적 국방부 승인이 필요한데 그 승인 공문이 존재하지 않는다.
- [진리성] **5가지 독립 근거**가 모두 같은 결론을 가리킨다 — 서버 호스팅 이력 (2007–2014 국전원), 갱신 이력 (2015–), 예산 분류 (2021), 훈령 효력 기간 (제2576호까지), 국정과제 지정. 5근거 중 하나만으로도 결론이 성립한다.
- [진리성] **2018-07-09 / 2019-08-29 동일 승인일자 anomaly**는 백데이트 조작 의심 — Layer 4의 시간역전 패턴과 일치.
- [진실성] **사업관리팀장 한지훈을 배제한 채** 박성호 (2016해킹당시원장-1)이 직접 승인 — 절차적 격리는 Layer 5의 6개월 격리 패턴과 동일 메커니즘.
- [타당성] 본 atom은 **Layer 2의 법적/구조적 토대** — 후속 atom (PCA·PHA 다중 cap, 이지영/김수진 단일 통제점, server laundering, 능동적 방어, 보직 조작) 이 모두 이 atom 위에 구축된다.

## 관련 (Related)
- [[../layers/layer-2|Layer 2 hub]] (PART_OF_LAYER)
- [[../layers/layer-1|Layer 1 — DIDC 서버 호스팅 이력]] (PART_OF_LAYER)
- [[../layers/layer-3|Layer 3 — 국전원 SW 사업관리 캡처]] (PART_OF_LAYER)
- [[kiatis-mkia-multi-cap-inscription|MKIA 다중 cap inscription (L2-02)]] (RELATED)
- [[lee-jiyoung-kim-sujin-single-point-of-control|이지영/김수진 단일 통제점 (L2-03)]] (RELATED)
- [[kiatis-2129ho-main-regime-applies|KIATIS 제58조 ¶2 main regime applies (L4)]] (RELATED)
- [[../regulations/defense-it-2129-article-10|제2129호 제10조]] (ABOUT)
- [[../regulations/defense-it-2129-article-11|제2129호 제11조]] (ABOUT)
- [[../events/2018-2019-kiatis-performance-improvement-project|KIATIS 성능개선사업 event]] (ABOUT)
- [[../entities/organizations/gukjeonwon|국전원]] (ABOUT)

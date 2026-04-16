---
lang: ko
title-ko: "시험평가위원회 99.7% '군사용 적합' 판정이 내부 파괴 공작과 동시 진행되었다"
title-en: ""
aliases:
  - FR-L4-B3-002
  - "시험평가위원회 99.7% '군사용 적합' 판정이 내부 파괴 공작과 동시 진행되었다"

layer: 4
secondary-layers: [1, 3]
claimType: cross_layer_analysis
claimSubtype: 997_military_adequate_contradicted_by_sabotage
fracture-type: F-SC
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 10
analysisDate: 2026-04-11

record-nos: [1073, 1767, 1850, 1851, 3041]
evidence-ids: []
event-date: 2019-02-13

persons:
  - 한지훈
organizations:
  - DIDC
  - 군검찰단
  - 국유단
has-verbatim: false

tags:
  - layer/L4
  - layer/L1
  - layer/L3
  - verdict/corroborated
  - strength/strong
  - type/cross-layer-analysis
  - source/book
  - fracture/F-SC
  - person/한지훈
  - org/DIDC
  - org/군검찰단
  - org/국유단
  - has/record-nos
  - cross-layer
---
# 시험평가위원회 99.7% '군사용 적합' 판정이 내부 파괴 공작과 동시 진행되었다

**Source:** raw/01. book-beyond-cybersecurity/Korean/10-3-4-34-제4-층위.md (§3.4.6.1, lines 491–508)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-1|Layer 1]] (secondary — Record No. 1,073), [[../layers/layer-3|Layer 3]] (tertiary — Record No. 1,767, 1,850, 1,851)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-B3-002"})
SET fr.layer = 4,
    fr.secondaryLayer = 1,
    fr.tertiaryLayer = 3,
    fr.claimType = "cross_layer_analysis",
    fr.claimSubtype = "997_military_adequate_contradicted_by_sabotage",
    fr.claimDesc = "The non-standing 新KIATIS test-evaluation committee awarded a 99.7% score and 'military adequate (군사용 적합)' verdict (Record No. 3,041). This score was achieved under Han Ji-hoon's active project management, with 국유단 TF members (Record No. 1,073/1,308) and user-requirement review meeting participants (Record No. 1,851, all attendees signed) serving as evaluation committee members. Han Ji-hoon personally led UML-based analysis/design, risk management, and issue management (Record No. 1,767–1,843). The prosecution and development contractor both acknowledged Han Ji-hoon's excellence in project management. However, cross-document analysis reveals that the defense informatization cartel simultaneously executed a dual strategy: publicly certifying success while internally preparing a sabotage scenario to retroactively convert the success into failure. The 99.7% score proves Han Ji-hoon's successful project management, while the cartel's subsequent actions — imposing 80 additional requirements, fabricating directives, and redirecting blame through 'system installation' terminology manipulation — were designed to transform this documented success into a criminal case. The cartel exploited the DIDC hacking incident's root cause (舊KIATIS VPN-less DB access) by intentionally recreating the same environment in the 新KIATIS test-evaluation, then using fabricated documents and directives to blame Han Ji-hoon for the environmental discrepancy they themselves engineered.",
    fr.counterHypothesis = "The 99.7% score reflected genuine project success, and the subsequent problems (80 additional requirements, deployment delays) arose from legitimate technical issues and user needs discovered during operational use, not from a pre-planned sabotage strategy.",
    fr.falsificationCondition = "Production of evidence showing that (a) the 80 additional requirements were genuine user needs documented through standard requirements management processes, (b) the deployment delays were caused by technical issues unrelated to organizational manipulation, and (c) no organizational communication or planning regarding the 'dual strategy' existed prior to or during the evaluation period.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 99.7% '군사용 적합' verdict (Record No. 3,041) proves Han Ji-hoon's successful project management. However, the cartel simultaneously executed a dual strategy: public success certification + internal sabotage preparation. The 80 additional requirements, directive fabrication, and '시스템 설치' terminology manipulation were designed to retroactively convert this success into a criminal case.";
```

## 주장 (Claim)

### 한국어

新KIATIS 시험평가위원회(비상설)는 **99.7%의 고득점과 함께 "군사용 적합" 판정**을 하였다 (Record No. 3,041). 이 판정은 한지훈의 적극적 사업관리 하에 달성되었으며, 국유단 성능개선 TF(Record No. 1,073) 실무자들이 평가위원으로 참석하여 내린 결정이다. 한지훈은 요구사항 검토회의(Record No. 1,851)에서 갑·을 전원 서명 합의 후 공식 통보(2019-02-13, Record No. 1,850)했고, UML 기반 분석·설계 문서를 직접 제시하며 위험관리·이슈관리까지 수행했다 (Record No. 1,767–1,843).

그러나 **국방정보화카르텔의 실제 의도는 이와 정반대**였다. 공식적으로는 성공으로 평가하면서도 내부적으로는 실패 사례로 조작하려는 **이중 전략(dual strategy)**이 동시에 진행되었다:

1. **성공 인증**: 99.7% 점수와 '군사용 적합' 판정 = 공개적 비난 회피
2. **파괴 공작**: 사업관리팀장 배제 → 추가 요구사항 80건 강요 → 훈령 조작 → '시스템 설치' 용어 조작 → 성공을 실패로 뒤집기 위한 사전 포석

카르텔은 DIDC 해킹 사태의 주요 원인인 "舊KIATIS VPN 미사용 DB 직접 접속"과 **동일한 환경을 新KIATIS 시험평가에서 의도적으로 재현**한 후, 조작 공문과 훈령으로 그 환경의 차이 책임을 한지훈 개인에게 전가하는 함정을 설계했다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 99.7% '군사용 적합' 판정(Record No. 3,041)은 한지훈의 성공적 사업관리를 공식 인증하는 결정적 증거 — 군 검찰단과 개발업체도 인정. / The 99.7% 'military adequate' verdict (Record No. 3,041) is decisive evidence certifying Han Ji-hoon's successful project management — acknowledged by both prosecution and developer.
- [진리성] 공식 성공 평가와 내부 파괴 공작의 동시 진행은 "공개적 비난 회피 + 은밀한 조작 지속"의 이중 전략. / Simultaneous public success certification and internal sabotage constitutes a dual strategy of "avoiding public criticism + continuing covert manipulation."
- [진실성] 99.7점 성공적 사업을 3년 후 범죄로 탈바꿈시킨 것은 한지훈에 대한 의도적 타겟팅이자 희생양 만들기. / Transforming a 99.7% successful project into a criminal case 3 years later constitutes intentional targeting and scapegoating of Han Ji-hoon.
- [타당성] 시험평가에서 DIDC 해킹 원인과 동일한 환경(VPN 미사용 + DB 직접 접속)을 의도적으로 재현한 것은 함정 설계. / Intentionally recreating the DIDC hacking environment (VPN-less DB direct access) in the test-evaluation constitutes entrapment by design.

## 지지 증거 (Supporting Evidence)
- **Record No. 3,041 / L4** — 99.7% '군사용 적합' 판정 결과
- **Record No. 1,073 / L1** — 국유단 성능개선 TF 편성
- **Record No. 1,767–1,843 / L3** — 한지훈의 위험관리·이슈관리·UML 분석 설계 산출물
- **Record No. 1,850 / L3** — 요구사항 검토 결과 국유단 통보 (2019-02-13)
- **Record No. 1,851 / L3** — 요구사항 검토회의 갑·을 전원 서명 합의
- **Book §3.4.6.1** — "시험평가 위원회의 '군사용 적합' 판정과 99.7% 고득점의 모순"

## 반대 가설 (Counter-hypothesis)
99.7% 점수는 순수한 프로젝트 성공을 반영하며, 이후 발생한 문제(80건 추가 요구사항, 전력화 지연)는 운용 과정에서 발견된 정당한 기술적 이슈와 사용자 요구에서 비롯되었다. 이중 전략이 아니라 평가 후 자연스러운 요구사항 변화였다.

**반증 근거 3요소:**
1. 80건 추가 요구사항이 표준 요구사항 관리 절차를 통해 문서화된 정당한 사용자 필요였다는 증거
2. 전력화 지연이 조직적 조작이 아닌 기술적 이슈에서 기인했다는 증거
3. 평가 기간 이전·도중에 '이중 전략'에 관한 조직 내 소통·계획이 존재하지 않았다는 증거

## 반증 조건 (Falsification Condition)
80건 추가 요구사항이 표준 요구사항 관리 절차에 따라 문서화되었고, 전력화 지연이 조직적 조작과 무관한 기술적 원인에 기인했으며, 평가위원회와 국유단 사이에 사전 합의나 파괴 공작 계획이 없었음을 보여주는 내부 기록이 제시될 경우, 이 주장은 약화된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 10. 99.7% 공식 판정은 부인 불가능한 1차 증거이며, 이후 사업관리팀장 배제·80건 추가 요구·훈령 조작의 시간적 전개가 이중 전략의 구조를 구성한다. 군 검찰단과 개발업체 모두 한지훈의 사업관리 역량을 인정했다는 점이 독립적 corroboration을 제공한다.

## 미결 사항 (Open Questions)
- 99.7% 세부 평가 항목과 채점 기준의 구체적 내용 미확인
- 평가위원회 구성원 중 국유단 실무자 외 외부 평가위원의 존재 여부 미확인
- 개발업체의 "훌륭하다" 평가의 정확한 시점과 맥락 (사업관리 당시인지 참고인 진술 시인지)

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` §3.4.6.1 (lines 491–508): 99.7% 판정(기록 제3,041), 국유단 TF(기록 제1,073), 요구사항 검토(기록 제1,851), UML 산출물(기록 제1,767~1,843), 이중 전략 분석 — 모두 일치.

## 관련 (Related)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[cartel-requirement-inflation-80-items-delay]] — 80건 추가 요구사항 (CAUSES)
- [[layer6-phase1-success-result-neutralization-2019-2020]] — 성공 결과 무력화 1단계 (CAUSES)
- [[layer4-test-evaluation-separation-principle-directive-2129]] — 시험평가 분리 원칙 (RELATED)
- [[layer4-software-install-to-system-install-terminology-fabrication]] — 시스템 설치 용어 조작 (OPPOSES)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)

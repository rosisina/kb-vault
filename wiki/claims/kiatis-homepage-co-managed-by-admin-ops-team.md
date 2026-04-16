---
lang: ko
title-ko: 舊KIATIS와 인터넷 홈페이지 서버는 행정정보 운영팀에서 공무원 팀장·실무자에 의해 함께 운용됨 — 피의자 신문조서 및 조직 현황 문서에 의한 증명
title-en: 舊KIATIS와 인터넷 홈페이지 서버는 행정정보 운영팀에서 공무원 팀장·실무자에 의해 함께 운용됨 — 피의자 신문조서 및 조직 현황 문서에 의한 증명
aliases:
  - FR-L1-HOMEPAGE-COMANAGEMENT
  - 舊KIATIS와 인터넷 홈페이지 서버는 행정정보 운영팀에서 공무원 팀장·실무자에 의해

layer: 1
secondary-layers: [6]
claimType: technical_proof
claimSubtype: operational_co_management_proof
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 8
analysisDate: 2026-04-11

record-nos: [16, 1019, 4723, 4879, 6759]
evidence-ids: []
event-date: 2019-12-17

persons:
  - 조성민
  - 윤도현
  - 오현수
  - 김민수
  - 이태호
  - 송민석
  - 한지훈
  - 최영규
  - 유길수
organizations:
  - DIDC
  - 국전원
  - MND
has-verbatim: false

tags:
  - layer/L1
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/technical-proof
  - source/book
  - fracture/F-CE
  - person/조성민
  - person/윤도현
  - person/오현수
  - person/김민수
  - person/이태호
  - org/DIDC
  - org/국전원
  - org/MND
  - has/record-nos
  - cross-layer
---
# 舊KIATIS와 인터넷 홈페이지 서버는 행정정보 운영팀에서 공무원 팀장·실무자에 의해 함께 운용됨 — 피의자 신문조서 및 조직 현황 문서에 의한 증명

**Source:** raw/01. book-beyond-cybersecurity/Korean/07-3-1-31-제1층위-ActiveX.md (book §3.1.1.7)
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-6|Layer 6]] (피의자 신문조서 출처)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-HOMEPAGE-COMANAGEMENT"})
SET fr.layer = 1,
    fr.claimType = "technical_proof",
    fr.claimSubtype = "operational_co_management_proof",
    fr.claimDesc = "Suspect interrogation transcript (Record No. 4,879/L6) and organizational chart (2019-12-17, Record No. 4,723/L6) prove that 행정정보 운영팀 managed both 舊KIATIS (625전사자 종합 정보체계) and internet/intranet 홈페이지 together. Before the 2020 reorganization under 김민수, the same team handled both development and operations. 조성민 (실무자-1) managed both KIATIS and homepage operations as a single person, later split to 윤도현 (실무자-2, KIATIS) and a junior officer (실무자-3, homepage).",
    fr.counterHypothesis = "KIATIS and the internet homepage were managed by separate organizational units with independent chains of responsibility, and their co-location in the same team was purely administrative convenience without security implications.",
    fr.falsificationCondition = "Production of organizational charts showing KIATIS and homepage operations under separate teams with separate chains of command before the 2020 reorganization.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Interrogation transcript (Record No. 4,879) and org chart (Record No. 4,723) prove co-management of KIATIS and homepage by the same team/person, establishing the attack surface co-location that made 2016 DIDC hacking possible.";
```

## 주장 (Claim)

### 한국어

피의자 신문조서(기록 제4,879쪽/L6)와 조직·담당자 현황(2019-12-17, 기록 제4,723쪽/L6)에 따르면, 행정정보 운영팀이 '625전사자 종합 정보체계'(舊KIATIS)와 인터넷·인트라넷 홈페이지를 함께 담당하였다.

- 2020년 차관 보고 이전: 행정정보화과의 4개 팀이 각각 사업과 운영을 같이 수행. 행정정보 운영팀에서 舊KIATIS를 담당.
- 조성민 (실무자-1): 625전사자 종합정보체계와 인터넷·인트라넷 업무를 모두 단독 담당
- 2019-11월 시점: 윤도현 (실무자-2)이 KIATIS를, 별도 실무자(실무자-3)가 홈페이지를 담당하는 형태로 분리되었으나, 이전에는 조성민 1인 담당
- 보안대책 검토(2019-06-17) 갱신 자력 이력에도 조성민 (실무자-1)을 비롯한 행정 운영팀 실무자 이력 확인(기록 제1,019쪽/L2)
- 세부 조직도: 운영팀장 송민석 (팀장-2), 주무관 윤도현 (실무자-2) 기술

피의자 신문에서 한지훈은 "지금까지 행정정보 운영팀이 담당하다가" 계획팀으로 떠넘겨졌다고 진술하였으며, 오현수 (실무자)도 "이 사업은 행정정보 운영팀 사업인데 저희한테 떠넘겼다"고 수차례 하소연하였다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 피의자 신문조서(Record No. 4,879/L6)는 행정정보 운영팀이 舊KIATIS와 홈페이지를 함께 운영했음을 한지훈의 직접 진술로 증명한다. The interrogation transcript is a direct evidentiary record from a formal legal proceeding.
- [진리성] 조직·담당자 현황(Record No. 4,723/L6, 2019-12-17)은 문서적 증거로서, 조성민 (실무자-1)이 양쪽 업무를 모두 단독 담당했음을 보여준다. A single person managing both KIATIS and the homepage establishes the human-factor attack surface co-location.
- [타당성] 舊KIATIS(인터넷 기반)와 인터넷 홈페이지 서버의 동일 팀·동일 인원 운용은 2016년 DIDC 해킹 사건에서 공격 표면(attack surface)의 공동 위치를 의미하며, 이는 Layer 1 은폐의 핵심 동기를 설명한다. Co-location of KIATIS and homepage under the same team/person is the structural explanation for why the cover-up had to extend to both systems.
- [진실성] 오현수 (실무자)의 "떠넘겼다" 하소연은 조직 내부의 업무 전가 패턴을 보여주며, 이태호 (평가위원장-1)도 동일 발언을 반복하였다. Multiple officers independently complained about the work being dumped on them.

## 지지 증거 (Supporting Evidence)
- **Record No. 4,879** / L6 — 피의자 신문조서: 행정정보화과 4개 팀 임무·역할, 행정정보 운영팀 KIATIS 담당 확인
- **Record No. 4,723** / L6 — 정보체계 별 주관 부서/담당자 현황 (2019-12-17): 행정정보 운영팀 → 625전사자 종합 정보체계 담당
- **Record No. 1,019** / L2 — 보안대책 검토 갱신 자력 이력: 조성민 (실무자-1) 등 행정 운영팀 실무자 기록
- **Record No. 16** / L1 — 과제카드: 국방부 홈페이지 유지보수로 기재 (§3.1.1.7 인용)
- **Record No. 6,759** / L7 — 김민수 (원장-1) 재직 기간 (2020-08-04~2024-09-08) 확인

## 반대 가설 (Counter-hypothesis)
舊KIATIS와 인터넷 홈페이지는 조직도상 같은 팀에 편제되어 있었으나, 실질적으로는 독립된 보안 경계와 책임 체계 하에서 운영되었다. 동일 팀 편제는 행정적 편의에 불과하며, 보안 관점에서는 별도 관리되었다.

이 반가설이 성립하려면: (1) 행정정보 운영팀 내에서 KIATIS와 홈페이지에 대한 별도의 보안 접근 통제 기록이 존재해야 하고, (2) 조성민 (실무자-1)이 양쪽 업무를 담당하면서도 별도의 인증·접근 체계를 사용했다는 기록이 있어야 하며, (3) 2016년 해킹 사건 이후 양쪽 시스템에 대한 독립적 보안 감사가 수행되었어야 한다.

## 반증 조건 (Falsification Condition)
1. **독립적 보안 경계 기록** — 동일 팀 내에서 KIATIS와 홈페이지에 대한 분리된 접근 통제·인증 체계가 적용되었음을 보여주는 보안 정책 문서.
2. **별도 보안 감사 기록** — 2016년 해킹 이후 양 시스템에 대해 독립적으로 수행된 보안 감사 보고서.
3. **조성민의 업무 분리 기록** — 1인 담당이었으나 실질적으로 분리 운영했음을 보여주는 업무 일지 또는 접근 로그.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 8. 피의자 신문조서(기록 제4,879쪽)와 조직도(기록 제4,723쪽)라는 두 가지 독립적 공식 문서가 동일 팀·동일 인원에 의한 공동 운용을 증명한다. 보안대책 검토 갱신 이력(기록 제1,019쪽)이 추가 확인. 다수 장교의 독립적 하소연("떠넘겼다")이 정황적으로 뒷받침한다.

## 미결 사항 (Open Questions)
- 실무자-3 (중위, 2019년 시점 홈페이지 담당)의 실명이 pseudonym mapping에 없음. 추후 매핑 필요.
- 임재욱 (실무자-4, 행정정보 통합팀, 이메일서버 담당)과 배준호 (팀장-1)도 pseudonym mapping에 없음. 매핑 필요.
- 유길수의 10년 동일 보직 근무와 최영규의 장비운용센터장 10년 근무(각주 57)는 국전원 내 장기 근무 패턴의 추가 증거이나, 본 atom의 핵심 주장과는 구분된다.

## 원전 확인 (Spot-check)
- `Korean/07-3-1-31-제1층위-ActiveX.md` — §3.1.1.7 lines 76–82: 기록 제4,879·4,723·1,019·16·6,759쪽 인용, 조성민·윤도현·송민석 기술, 오현수·이태호 하소연 일치 확인.

## 관련 (Related)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[kiatis-server-laundering-to-integrated-mail-server]] — §3.1.1.2 서버 세탁 확인 (RELATED)
- [[kiatis-server-laundering-dcia-to-didc1]] — L2-04 서버 세탁 전체 체인 (RELATED)
- [[kiatis-homepage-improvement-disguised-as-maintenance]] — §3.1.1.7 홈페이지 개선 사업 유지보수 둔갑 (RELATED)

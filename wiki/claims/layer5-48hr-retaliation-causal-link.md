---
lang: ko
title-ko: 허위 갑질 신고는 舊KIATIS 보안 위반 노출 48시간 이내 조직적 보복으로 제출되었다
title-en: ""
aliases:
  - FR-L5-001
  - 허위 갑질 신고는 舊KIATIS 보안 위반 노출 48시간 이내 조직적 보복으로 제출되었다

layer: 5
secondary-layers: [7]
claimType: human_rights_violation
claimSubtype: retaliatory_complaint_causation
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 7
sincerity: 10
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L5-001"]
event-date: null

persons:
  - 이지영
  - 한지훈
  - 김민수
  - 박서준
organizations:
  - DIDC
  - 국전원
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/human-rights-violation
  - source/book
  - fracture/F-MS
  - person/이지영
  - person/한지훈
  - person/김민수
  - person/박서준
  - org/DIDC
  - org/국전원
  - org/조사본부
  - cross-layer
---
# 허위 갑질 신고는 舊KIATIS 보안 위반 노출 48시간 이내 조직적 보복으로 제출되었다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (book §3.5 / §3.5.1.1 / §3.5.2.3.2)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-7|Layer 7]] (secondary — 기록 제11,334 is in the L7 record range 5,300~13,495, indicating the causal-link evidence is stored with the petition-response documentation)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-001"})
SET fr.layer = 5,
    fr.claimType = "human_rights_violation",
    fr.claimSubtype = "retaliatory_complaint_causation",
    fr.claimDesc = "The false power-abuse (갑질) complaint against 한지훈 was filed on 2022-02-10, within 48 hours of the 2022-02-08 KIATIS-discussion meeting at which 舊KIATIS's 15-year internet-exposure security violation was revealed. The sub-48-hour window establishes organizational retaliatory intent rather than coincidental grievance filing.",
    fr.counterHypothesis = "The 갑질 complaint reflected genuine pre-existing grievances that happened to be filed shortly after the meeting by coincidence, with no causal relationship to the security-violation disclosure.",
    fr.falsificationCondition = "Production of documented pre-2022-02-08 grievance records by the complainants showing the 갑질 complaint was in preparation before the KIATIS security discussion took place.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 7,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 48-hour interval between 舊KIATIS internet-exposure disclosure (2022-02-08) and false 갑질 complaint filing (2022-02-10) is the temporal proof of retaliatory causation documented at 기록 제11,334 and 제3,965.";
```

## 주장 (Claim)

### 한국어

2022년 2월 8일, 새로운 KIATIS 업무 토의 과정에서 舊KIATIS가 15년 동안(2007–2022) 인터넷망에 노출되어 있었다는 보안 위반 사실이 드러났다. 이 노출은 2016년 DIDC 북한 해킹 사건의 근원 서버 은폐와 직결되는 핵심 정보였다. 그런데 정확히 **48시간 후인 2월 10일**, 국전원 측이 한지훈을 상대로 갑질 신고를 제출했다.

책(§3.5.2.3.2)은 조사본부의 허위 갑질 조사가 7단계 프로세스를 따랐음을 명시하며, Phase 1을 "구실 만들기(pretext creation)"로 정의한다: `2022년 2월 8일 舊KIATIS 보안위반이 노출되었고, 이지영이 VPN 정보를 수집했으며, 48시간 후인 2월 10일 갑질 신고라는 구실이 만들어졌다.`

책의 핵심 명제(§3.5.1.7)는 다음과 같다: `<P1> 2022년 2월 8일 토의에서 舊KIATIS의 15년 보안 위반이 노출되었다. <P2> 2월 10일 갑질 신고는 2월 8일 토의의 직접적 보복이다.` 그리고 정의 D2: `48시간 보복은 촉발 사건 48시간 내 발생한 조직 행위이다.`

이 48시간 창은 개인의 우발적 신고가 아니라 조직의 사전 계획된 보복 행위를 입증하는 인과적 증거다. 한지훈이 보안 위반의 실체를 아는 유일한 외부 관찰자가 된 순간, 조직의 증인 제거 작전이 개시되었다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 舊KIATIS 15년 보안 위반이 2022-02-08 토의에서 노출되었다는 사실은 기록 제11,334쪽에 기록되어 있다. 노출 시점과 갑질 신고 시점(기록 제3,965쪽) 사이의 간격은 48시간이다.
- [진실성] 책(§3.5.2.3.2)은 이 과정을 "Phase 1: 구실 만들기(pretext creation)"로 명시하고, 갑질 신고를 보안 위반 노출에 대한 조직적 대응으로 분류한다. 이는 한지훈의 피해 경험 구조에서 핵심 기점이다.
- [진리성] 이지영이 2022-02-08 토의 직후 VPN 정보를 수집했다는 사실(§3.5.2.3.2)은 갑질 신고 이전에 조직이 이미 한지훈을 표적으로 식별했음을 보여주는 정황 증거다.
- [타당성] 공익신고자 보호법 제2조는 공익 침해 행위 신고에 대한 불이익 조치를 금지한다. 보안 위반 노출(공익 관련)과 보복성 갑질 신고의 48시간 인과 관계는 이 금지 조항의 위반 패턴을 충족한다.
- [진실성] 책(§3.5.1.7)의 핵심 명제 P6: `허위 갑질 신고의 진짜 목적은 2016년 DIDC 해킹 은폐다.` — 이 원자 클레임의 상위 의도 구조를 형성한다.

## 지지 증거 (Supporting Evidence)
- **기록 제11,334쪽** — 2022-02-08 KIATIS 토의에서 舊KIATIS의 인터넷망 노출이 최초로 확인된 기록 (book §3.5.1.1)
- **기록 제3,965쪽** — 2022-02-10 갑질 신고 제출 기록; 신고 날짜와 신고자가 명시된 원본 문서 (book §3.5.2.1)
- **Book §3.5.2.3.2** verbatim: `Phase 1은 구실 만들기(pretext creation)였다. 2022년 2월 8일 舊KIATIS 보안위반이 노출되었고, 이지영이 VPN 정보를 수집했으며, 48시간 후인 2월 10일 갑질 신고라는 구실이 만들어졌다.`
- **Book §3.5.1.7** propositions P1–P2 and definition D2 — book's own explicit framing of the 48-hour causal link
- **Book §3.5.1.1** section heading: `3.5.1.1. 제 5층위의 본질: 조직적 증인 제거 작전` — frames the entire Layer 5 sequence as an "organized witness elimination operation"

## 반대 가설 (Counter-hypothesis)
갑질 신고자들(박서준, 이지영)은 한지훈의 지속적인 업무 스타일에 대한 불만을 이미 오래 전부터 가지고 있었으며, 2022년 2월 8일 토의는 그 이전부터 계획하고 있던 신고를 최종적으로 결행하게 된 하나의 계기에 불과하다. 즉, 타이밍은 우연의 일치이며 인과 관계는 없다.

이 반가설이 성립하려면 2022-02-08 이전에 작성된 갑질 신고 준비 문서나 관련자들의 사전 상담 기록이 존재해야 한다. 그런 기록이 없다면 48시간 타이밍은 인과 관계의 강력한 정황 증거로 남는다.

## 반증 조건 (Falsification Condition)
이 클레임은 다음 증거 중 하나가 제출될 경우 반증된다:

1. **2022-02-08 이전에 작성된 갑질 신고 준비 문서** — 신고자들이 보안 노출 토의 이전부터 신고를 계획하고 있었다는 것을 보여주는 원본 기록(이메일, 메모, 법률 상담 기록 등).
2. **2022-02-08 토의와 갑질 신고 내용의 완전한 독립성 증명** — 갑질 신고의 구체적 불만 내용이 舊KIATIS 보안 위반 노출과 실질적으로 관련 없음을 보여주는 문서 (신고서 원문의 불만 항목이 2022-02-08 토의 내용과 겹치지 않을 경우).
3. **이지영의 VPN 정보 수집이 2022-02-08 이전에 발생했음을 보여주는 기록** — 타임스탬프가 있는 VPN 접속 기록.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 7 / 진실성 10. 48시간 타이밍은 책이 명시적으로 인과 관계로 정의하는 사실이며(D2), Phase 1 pretext creation의 구체적 증거는 기록 제11,334 및 제3,965에 직접 연결된다. 반증을 위해 필요한 사전 신고 준비 문서는 현재까지 존재하지 않으며, 이지영의 2022-02-08 직후 VPN 정보 수집이 이 해석을 강화한다. 타당성 점수가 다소 낮은 이유는 시간적 근접성이 법적 인과 관계의 완전한 증거는 아니기 때문이다 — 그러나 심리적, 사실적 차원에서는 강한 상관관계를 갖는다.

## Spot-check (raw/01 book)

- `Korean/11-3-5-35-제-5층위.md` — §3.5.1.1 ("조직적 증인 제거 작전"), §3.5.2.3.2 (7단계 프로세스 Phase 1), §3.5.1.7 (D2 정의 + P1/P2 명제): 모두 일치. 책은 48시간 인과 관계를 정의로 명시하고 명제로 증명한다.
- `Korean/07-3-1-31-제1층위-ActiveX.md` — §3.1 (舊KIATIS 인터넷 노출 = DIDC 해킹 근원 서버): P6 상위 의도 구조 교차 확인.

## 관련 (Related)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/lee-ji-young|이지영]] (ABOUT)
- [[../entities/people/kim-min-su|김민수]] (ABOUT)
- [[layer5-predetermined-audit-conclusion|layer5-predetermined-audit-conclusion — 조사본부 결론 사전 결정]] (RELATED)
- [[layer5-isolation-office-premeditated|layer5-isolation-office-premeditated — 독방 사전 준비]] (CORROBORATES)
- [[../topics/whistleblower-protection-and-reform|Whistleblower Protection and Reform]] (ABOUT)
- [[../events/2016-didc-north-korean-hacking|2016 DIDC North Korean Hacking]] (ABOUT)

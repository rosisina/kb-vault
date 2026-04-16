---
lang: ko
title-ko: "3단계: 이지영의 3.9억원 추가예산 요구공문으로 함정 발동, 전력화 지연을 범죄로 전환 (2021~2022.4)"
title-en: ""
aliases:
  - FR-L6-B3-002
  - "3단계: 이지영의 3.9억원 추가예산 요구공문으로 함정 발동, 전력화 지연을 범죄로 전환"

layer: 6
secondary-layers: [5]
claimType: temporal_manipulation
claimSubtype: three_phase_delay_mechanism_phase3
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 8
validity: 8
sincerity: 9
analysisDate: 2026-04-11

record-nos: [4854]
evidence-ids: ["L6-021"]
event-date: null

persons:
  - 이지영
  - 한지훈
organizations:
  - 국전원
has-verbatim: false

tags:
  - layer/L6
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-MS
  - person/이지영
  - person/한지훈
  - org/국전원
  - has/record-nos
  - cross-layer
---
# 3단계: 이지영의 3.9억원 추가예산 요구공문으로 함정 발동, 전력화 지연을 범죄로 전환 (2021~2022.4)

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.5.3, §3.6.5.3.3, lines 762–780)
**Layer:** [[../layers/layer-6|Layer 6]] (primary), [[../layers/layer-5|Layer 5]] (secondary — phase 3 triggers the L5→L6 transition)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-B3-002"})
SET fr.layer = 6,
    fr.secondaryLayer = 5,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "three_phase_delay_mechanism_phase3",
    fr.claimDesc = "Phase 3 (2021–2022.4) of the three-phase 新KIATIS deployment delay mechanism: 이지영 (공문결재자-1) issued a 3.9억원 additional budget request that activated the trap, converting the deployment delay from a technical issue to a criminal one. The military prosecution's intervention reframed the 개발관리팀장 from 'person responsible for development failure' to 'criminal suspect', and deployment was indefinitely postponed until the investigation concluded. This was the terminal phase designed to achieve permanent delay.",
    fr.counterHypothesis = "The 3.9억원 additional budget request was a routine administrative action to address genuine cost overruns, and the military prosecution's investigation was independently triggered by the budgetary anomaly, not as a coordinated trap",
    fr.falsificationCondition = "Evidence that the 3.9억원 request followed standard budget request procedures with proper technical justification reviewed by 사업통제기관, AND that the prosecution investigation was triggered by an independent complaint rather than coordinated referral from 국전원",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 8,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Phase 3 completes the three-phase temporal mechanism: Phase 1 neutralized the 99.7-point success (2019.9~2020), Phase 2 spread blame onto 한지훈 (2020~2021), Phase 3 activated the trap via 이지영's 3.9억원 request (2022.4) converting delay into criminal charges. The deployment was permanently suspended under investigation pretext. This is the parent-level framing connecting the sub-section atoms (Phase 1: FR-L6-021, Phase 2: FR-L6-PHASE2-BLAME-SHIFT-001).";
```

## 주장 (Claim)

### 한국어

新KIATIS 전력화 지연의 **시간적 메커니즘**(§3.6.5.3)은 3단계로 구성된다. 1단계(2019.9~2020)는 99.7점 성공 결과 무력화, 2단계(2020~2021)는 문제 확산과 책임 전가, 3단계(2021~2022.4)는 **이지영 (공문결재자-1)**의 2022년 4월 **3.9억원 추가 예산 요구공문**으로 함정을 발동시키고 전력화 지연을 **범죄 문제**로 전환하는 것이었다.

이 시점에서 한지훈은 "개발 실패의 책임자"에서 "범죄 혐의자"로 격하되었고, 전력화는 수사 완료까지 **무기한 연기**되었다. 이는 전력화 지연의 최종 단계이며, **영구적 지연을 위한 완벽한 명분**이 되었다. 6.25억원(新KIATIS) → 4억원(하자보수) → 3.9억원(GIS 엔진)으로 이어지는 예산 요구 패턴은 "의도적 예산 축소 → 실패 → 추가 예산" 악순환 구조의 완성이다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- The three-phase temporal mechanism (§3.6.5.3) is the parent-level framing connecting Phase 1 (§3.6.5.3.1, success neutralization) and Phase 2 (§3.6.5.3.2, blame shift) to the terminal Phase 3 (§3.6.5.3.3, trap activation and criminalization) [진리성].
- 이지영 (공문결재자-1) issued the 3.9억원 additional budget request in 2022.4 that triggered the L5→L6 transition from administrative to criminal proceedings [진리성].
- The budget escalation pattern (6.25억 → 4억 → 3.9억) constitutes an embedded budget recycling system — each cycle created new "failure" evidence for the next phase [타당성].
- Permanent deployment delay was the mechanism's objective: the investigation froze 전력화 indefinitely, protecting 舊KIATIS's 15-year security vulnerability from exposure [진실성].
- Phase 3 transformed 한지훈 from "development failure responsibility" to "criminal suspect" — the status change that enabled Layer 6 harm (기소유예 criminal stigma) [진실성].

## 지지 증거 (Supporting Evidence)
- §3.6.5.3 (lines 762–763) — "전력화 지연의 시간적 메커니즘분석" parent section header
- §3.6.5.3.3 (lines 776–778) — Phase 3 description: 이지영's 3.9억원 공문, 범죄 전환, 무기한 연기
- §3.6.5.4 (lines 781–783) — Conclusion: 국방정보화카르텔이 2016 해킹사건 은폐를 위해 의도적으로 조작한 시스템적 범죄
- Phase 1 atom: [[layer6-phase1-success-result-neutralization-2019-2020]]
- Phase 2 atom: [[layer6-phase2-blame-shift-2020-2021]]

## 반대 가설 (Counter-hypothesis)
1. **Routine budget request:** The 3.9억원 request was standard procurement for GIS engine acquisition following the independently identified performance bottleneck, not a trap-activation document.
2. **Independent investigation trigger:** The military prosecution's investigation was triggered by separate institutional oversight, not coordinated with 국전원 through 이지영's budget request.
3. **Coincidental timing:** The temporal alignment of the budget request and criminal investigation was coincidental; the deployment delay resulted from genuine unresolved technical issues, not a three-phase orchestrated mechanism.

## 반증 조건 (Falsification Condition)
This claim is CORROBORATED unless:
1. The 3.9억원 request is shown to have followed proper 사업통제기관 review and approval under 국방정보화업무훈령.
2. The prosecution investigation is shown to have been triggered by an independent complaint or audit, not by referral from 국전원.
3. Evidence demonstrates that the three phases operated independently (different actors, different motivations) rather than as a coordinated mechanism.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 8 / 타당성 8 / 진실성 9. The three-phase temporal mechanism is corroborated by the sequential actor continuity (이지영 appears in all three phases as 공문결재자-1), the escalating severity pattern (administrative → blame → criminal), and the alignment with the 舊KIATIS concealment objective. Phase 3's 3.9억원 request is the bridge from Layer 5 (false audit/harassment) to Layer 6 (prosecution). The pattern matches an APT-style progression from capability positioning to target elimination.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 762–780 — CONFIRMED: §3.6.5.3 three-phase mechanism with §3.6.5.3.3 Phase 3 detail
- Phase 1 atom (FR-L6-021) — exists, matches §3.6.5.3.1
- Phase 2 atom (FR-L6-PHASE2-BLAME-SHIFT-001) — exists, matches §3.6.5.3.2
- Deferred to A.6 Re-verify.

## 미결 사항 (Open Questions)
- What is the exact date of 이지영's 3.9억원 추가예산 요구공문? The text says "2022년 4월" but the exact date and Record No. are not specified in §3.6.5.3.3.
- Is there a direct documentary link between the 3.9억원 request and the prosecution's 수사개시 통보 (Record No. 4,854, 2022.4.25)?
- Did the 3.9억원 request bypass 사업통제기관 review, as predicted by the atom [[prosecution-omits-saup-tongje-gigwan-from-rfp-structure]]?

## 관련 (Related)
- [[layer6-phase1-success-result-neutralization-2019-2020|L6: Phase 1 성공 결과 무력화]] (RELATED)
- [[layer6-phase2-blame-shift-2020-2021|L6: Phase 2 문제 확산과 책임 전가]] (RELATED)
- [[cartel-requirement-inflation-80-items-delay|L6: 80건 추가 요구사항 지연 메커니즘]] (CORROBORATES)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|L6: 기소유예 범죄 낙인]] (RELATED)
- [[lee-ji-young-double-play-park-seo-jun-incitement-han-ji-hoon-blocking|L5: 이지영 이중 플레이]] (RELATED)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/lee-ji-young|이지영]] (ABOUT)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

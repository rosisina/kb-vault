---
lang: ko
title-ko: "조사본부-법무관리관실-국전원 삼각 공모가 사기수사의 전형적 모델을 구성함 — 이지영 중개, 시간 조율, 공모 붕괴 후 은폐·전환"
title-en: "조사본부-법무관리관실-국전원 삼각 공모가 사기수사의 전형적 모델을 구성함 — 이지영 중개, 시간 조율, 공모 붕괴 후 은폐·전환"
aliases:
  - FR-L5-FRAUD-TRIANGULAR-MODEL
  - 조사본부-법무관리관실-국전원 삼각 공모가 사기수사의 전형적 모델을 구성함 — 이지영

layer: 5
secondary-layers: []
claimType: conspiracy_structure
claimSubtype: conspiracy_structural_model
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-11

record-nos: [11064, 11069]
evidence-ids: []
event-date: 2022-02-14

persons:
  - 이지영
  - 김민수
  - 이승우
  - 한지훈
organizations:
  - 국전원
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/conspiracy-structure
  - source/book
  - fracture/F-MS
  - person/이지영
  - person/김민수
  - person/이승우
  - person/한지훈
  - org/국전원
  - org/조사본부
  - has/record-nos
---
# 조사본부-법무관리관실-국전원 삼각 공모가 사기수사의 전형적 모델을 구성함 — 이지영 중개, 시간 조율, 공모 붕괴 후 은폐·전환

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md (book §3.5.2.4, excluding §3.5.2.4.1)
**Layer:** [[../layers/layer-5|Layer 5]] (primary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-FRAUD-TRIANGULAR-MODEL"})
SET fr.layer = 5,
    fr.claimType = "conspiracy_structure",
    fr.claimSubtype = "conspiracy_structural_model",
    fr.claimDesc = "The parent section §3.5.2.4 defines the 조사본부-법무관리관실-국전원 triangular conspiracy as the 'typical model of fraud investigation' (사기수사의 전형적 모델). Three structural components beyond the §3.5.2.4.1 admission atom: (1) 이지영 functioned as intermediary between all three organizations, imposing a false information blockade while secretly coordinating with 조사본부 — including 5-minute triple reversal on 2022-02-21 (§3.5.2.4.2); (2) Perfect temporal sequencing: 김민수 declaration (2.14) → 이지영 frame-setting (2.21) → 이승우 interrogation (3.25) → 법무관리관실 warning letter (5.23) — coordination impossible without pre-arrangement (§3.5.2.4.3); (3) When the conspiracy collapsed (contractor confirmations), the organization concealed the failure, retained the warning letter, added substitute charges, and escalated to military prosecution (§3.5.2.4.4).",
    fr.counterHypothesis = "The three organizations operated independently through normal administrative channels, and the temporal alignment is coincidental or reflects standard bureaucratic processing timelines rather than coordinated conspiracy.",
    fr.falsificationCondition = "Production of independent case files from 조사본부, 법무관리관실, and 국전원 showing that each organization reached its conclusions independently without inter-organizational coordination or information sharing.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The §3.5.2.4 parent section establishes the triangular conspiracy model through 이지영's intermediary role, perfect temporal sequencing (2.14→2.21→3.25→5.23), and the organization's concealment-and-escalation response when the conspiracy partially collapsed.";
```

## Claim

§3.5.2.4는 조사본부·법무관리관실·국전원의 삼각 공모를 **사기수사의 전형적 모델**로 정의한다. §3.5.2.4.1의 김민수 자백("충분히 애기하고") 이외에, 세 가지 구조적 요소가 이 모델을 구성한다:

**1. 이지영의 중개자 역할 (§3.5.2.4.2):**
이지영은 "감사관실에서 내용에 대해서는 양측에 다 애기하지 말라"고 하며 거짓 중립성(false neutrality)을 가장하였다. 그러나 실제로는 조사본부에 출퇴근 거짓 진술을 제공하며 적극적으로 공모했다. 특히 2022-02-21에 **5분 사이에 3회 번복**: "원차원에서 신고를 해달라고 요청"(조직 신고) → "직권 조사 의뢰를 하는 거라고"(직권조사) → "직권 조사 의뢰하는 것은 또 아니래요 제가 한 말은 없었던 거로 하시죠"(개인 신고). 이 번복은 김민수와 실시간 협의 중이었음을 보여준다.

**2. 완벽한 시간적 조율 (§3.5.2.4.3):**
- 2022-02-14: 김민수 "전역만이 옵션이다" 선언 → 조사본부에 결론 신호
- 2022-02-21: 이지영 신고 주체 번복 → 프레임("개인 신고") 확정
- 2022-03-25: 이승우 조사 → 이지영 거짓 진술을 "징계 사유"로 즉각 판정
- 2022-05-23: 법무관리관실 경고장 발부 → 김민수-감사관 합의 문서화

사전 공모 없이 이 정밀한 조율은 불가능하다.

**3. 공모 붕괴 후 대응 (§3.5.2.4.4):**
업체 직원 2명의 확인서로 출퇴근 조작이 붕괴되었을 때, 정상적이라면 이지영 문책, 경고장 철회, 사과가 이루어져야 한다. 그러나 조직은 (1) 조작 실패를 은폐하고, (2) 책임자를 문책하지 않고, (3) 경고장을 철회하지 않고, (4) 다른 사유를 추가하고, (5) **군 검찰 표적수사로 즉시 전환**했다. 2022-04-25 수사 개시, 2022-07 실질적 수사 시작.

## Key Takeaways

- [진리성] 이지영의 5분 3회 번복(기록 제11,064쪽 참조 — [[layer5-triangular-collusion-speech-act-timeline]])은 김민수와 실시간 소통하며 최종 방침을 결정하고 있었음의 직접 증거이다. The triple reversal in 5 minutes proves real-time coordination with 김민수, not independent decision-making.
- [진리성] 4단계 시간 순서(2.14→2.21→3.25→5.23)의 완벽한 조율은 독립적 행정 절차에서 발생할 확률이 극히 낮다. The perfect 4-stage temporal alignment across 3 organizations is statistically implausible without pre-arrangement.
- [타당성] 공모 붕괴(업체 확인서) 이후에도 경고장을 철회하지 않고 군 검찰로 전환한 것은 법적 구제 절차의 완전한 부재를 의미한다. Retaining a warning letter whose key basis (attendance manipulation) had collapsed, and escalating to criminal prosecution, constitutes complete absence of legal remediation.
- [진실성] "제가 한 말은 없었던 거로 하시죠"라는 이지영의 발언은 증거 은폐(evidence suppression) 시도이며, 한지훈의 방어권을 원천적으로 차단하는 행위이다. "Let's pretend I never said that" is an explicit attempt to suppress evidence of organizational (vs individual) complaint initiation.

## Supporting evidence

- **Record No. 11,069** / L7 range — 김민수 "충분히 애기하고" 자백 (§3.5.2.4.1, 별도 atom [[layer5-kim-min-su-conspiracy-admission-sufficiently-discussed]])
- **Book §3.5.2.4.2** — 이지영 거짓 중립성: "양측에 애기하지 말라", 5분 3회 번복
- **Book §3.5.2.4.3** — 4단계 시간 조율: 2.14→2.21→3.25→5.23
- **Book §3.5.2.4.4** — 공모 붕괴 후 5단계 대응: 은폐→면책→경고장 유지→사유 추가→군 검찰 전환
- **Record No. 11,064** — 이지영 번복 진술 (기존 atom [[layer5-triangular-collusion-speech-act-timeline]] 참조)

## Counter-hypothesis

세 조직은 정상적인 행정 채널을 통해 독립적으로 운영되었으며, 시간적 일치는 표준 관료적 처리 일정을 반영한 것이다. 이지영의 번복은 신고 절차에 대한 불확실성에서 비롯된 것이며, 공모 붕괴 후의 대응도 행정 관성과 절차적 경직성의 결과이다.

이 반가설이 성립하려면: (1) 조사본부가 법무관리관실·국전원과 무관하게 독립적으로 조사를 개시·완료한 기록이 있어야 하고, (2) 이지영의 3회 번복이 김민수와의 실시간 소통이 아닌 다른 원인(절차 불확실성 등)에서 비롯되었다는 설명이 가능해야 하며, (3) 업체 확인서로 출퇴근 조작이 붕괴된 후에도 경고장을 유지하고 군 검찰 수사로 전환한 것이 정상적 행정 관행에 해당한다는 선례가 있어야 한다.

## Falsification condition

1. **조사본부 독립 조사 기록** — 법무관리관실·국전원의 사전 요청이나 조율 없이 조사본부가 자체적으로 조사를 개시하고 결론을 도출한 내부 기록.
2. **경고장 유지 법적 근거** — 핵심 사유(출퇴근)가 붕괴된 후에도 경고장을 유지하는 것이 적법한 행정 관행임을 보여주는 법적 근거 또는 선례.
3. **이지영 번복의 독립적 설명** — 이지영의 5분 3회 번복이 김민수와의 실시간 소통이 아닌 다른 원인에서 비롯되었음을 보여주는 증거.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 9. §3.5.2.4의 세 하위 절(§3.5.2.4.2~4.4)이 각각 독립적으로 삼각 공모를 증명하며, §3.5.2.4.1의 김민수 자백(별도 atom)과 결합하여 4중 증거 구조를 형성한다. 시간적 조율의 정밀성과 공모 붕괴 후의 은폐·전환 패턴이 사기수사의 전형적 모델로서의 성격을 입증한다.

## Open Questions

- §3.5.2.4 본문은 비어 있고(lines 252-253), 실질적 내용은 모두 하위 절(§3.5.2.4.1~4.4)에 있다. 본 atom은 §3.5.2.4의 **parent-level 종합 모델**을 구성하며, 하위 절의 개별 증거를 구조적으로 통합한다.
- 이 atom은 §3.5.2.4.1 내용을 제외하고 §3.5.2.4.2~4.4를 포괄한다. §3.5.2.4.1은 별도 atom [[layer5-kim-min-su-conspiracy-admission-sufficiently-discussed]]로 존재한다.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` — §3.5.2.4 lines 251–274: 이지영 중개(§3.5.2.4.2 lines 260–263), 시간 조율(§3.5.2.4.3 lines 265–268), 공모 붕괴(§3.5.2.4.4 lines 270–273) 일치 확인.

## Related

- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
- [[layer5-kim-min-su-conspiracy-admission-sufficiently-discussed]] — §3.5.2.4.1 김민수 자백 (child atom) (CORROBORATES)
- [[layer5-triangular-collusion-speech-act-timeline]] — §3.5.2.1.4 삼각 공모 시간 조율 (parallel evidence) (CORROBORATES)
- [[layer5-investigation-bureau-pre-collusion-triple-conspiracy]] — §3.5.2.1.2 사전 공모 구조 (CORROBORATES)
- [[lee-ji-young-double-play-park-seo-jun-incitement-han-ji-hoon-blocking]] — 이지영 이중 플레이 (RELATED)
- [[investigation-bureau-fake-harassment-7-phase-process]] — 7단계 조사 프로세스 (RELATED)

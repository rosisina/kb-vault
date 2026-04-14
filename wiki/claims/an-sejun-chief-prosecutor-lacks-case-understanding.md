---
lang: ko
title-ko: "군검찰단장 안세준: \"아직은 모르겠는데\" — 기소 후에도 사건 내용 미파악 + 처분 책임 회피"
title-en: "군검찰단장 안세준: \"아직은 모르겠는데\" — 기소 후에도 사건 내용 미파악 + 처분 책임 회피"
aliases:
  - FR-L6-ANSEJUN-CHIEF-PROSECUTOR-IGNORANCE
  - "군검찰단장 안세준: \"아직은 모르겠는데\" — 기소 후에도 사건 내용 미파악 + 처분 책임"

layer: 6
secondary-layers: []
claimType: prosecution_misconduct
claimSubtype: prosecutorial_oversight_failure
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 안세준
  - 한지훈
  - 임형규
  - 진상호
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/recording
  - person/안세준
  - person/한지훈
  - person/임형규
  - person/진상호
  - org/군검찰단
---
# 군검찰단장 안세준: "아직은 모르겠는데" — 기소 후에도 사건 내용 미파악 + 처분 책임 회피

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[007-1]` 녹취 174 (2022.9.29~10.6, 00:06:38)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 군검찰단장 직무 태만)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-ANSEJUN-CHIEF-PROSECUTOR-IGNORANCE"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecutorial_oversight_failure",
    fr.claimDesc = "군검찰단장(준장) 안세준이 녹취 174에서 2중 자인: (1) '제가 아직은 모르겠는데 무슨 내용인지 한 번 보겠습니다' — 피의자 조사 후에도 사건 실체 미파악, (2) '제가 거기다 해라 마라 할 수 있는 사안은 아니고 수사팀에서 결론을 내야' — 최고 지휘관이 처분 결정 권한/책임 회피",
    fr.counterHypothesis = "군검찰단장은 개별 사건 세부에 관여하지 않는 것이 정상적 지휘 체계이며, 수사팀 자율성 보장은 적절한 검찰 운영이다",
    fr.falsificationCondition = "군검찰단장이 한지훈 사건의 실체적 내용을 파악하고 있었으나 녹취에서 의도적으로 모른 척한 것이며, 실제로는 적극적 감독을 수행했음을 보여주는 내부 문서",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "군검찰단장 2중 자인: '아직 모르겠다'(사건 미파악) + '해라 마라 할 수 없다'(처분 책임 회피). 최고 지휘관의 방기가 표적수사 방치의 구조적 조건.";
```

## Claim

군검찰단장(준장) 안세준이 한지훈과의 직접 통화(녹취 174, 2022.9.29~10.6)에서 2가지 핵심 자인을 하였다:

1. **사건 내용 미파악**: "하여튼 수사팀에서 뭐 어떻게 제가 아직은 모르겠는데 무슨 내용인지 한 번 보겠습니다" — 피의자가 이미 조사를 받고, 3시간 심문을 당한 시점에서 군검찰단 최고 지휘관이 사건 실체를 모르고 있음
2. **처분 결정 회피**: "제가 거기다 해라 마라 할 수 있는 사안은 아니고 수사팀에서 결론을 내야" — 한지훈이 무혐의 처리를 요청하자 최고 지휘관이 결정 권한 자체를 부인

이 2중 자인은 군검찰단장이 사건에 대한 실질적 감독을 수행하지 않았음을 보여준다. 수사팀의 표적수사가 최고 지휘관의 방기(放棄) 속에서 진행된 것이다.

## Key Takeaways

- Chief Military Prosecutor (준장) admits "I don't yet know what this is about" AFTER the investigation was launched and the subject interrogated for 3 hours [진리성]
- Chief Prosecutor claims "I can't tell them what to do" — denying authority over case disposition despite being the highest prosecutorial authority [타당성]
- Structural oversight failure: the targeted prosecution proceeded under the chief's wilful ignorance [진리성]
- When combined with 검사 임형규's predetermined conclusion and 수사관 진상호's admissions, this completes a 3-level prosecutorial chain of failure (단장→검사→수사관) [진리성]

## Supporting evidence

- 녹취 174 (2022.9.29~10.6, 00:06:38) — raw/02 `[007-1]` 안세준 section
- 3-level prosecutorial chain: 안세준(단장, 방기) → [[lim-hyungkyu-admits-eval-environment-problems-still-charged|임형규(검사, 기정결론)]] → [[jin-sangho-investigator-vpn-admission-missing-documentation|진상호(수사관, 문서 누락)]]

## Counter-hypothesis

군검찰단장은 개별 사건의 세부 내용에 직접 관여하지 않는 것이 정상적 검찰 지휘 체계이다. 수사팀에 판단을 위임한 것은 수사 독립성 보장을 위한 적절한 조치이다.

## Falsification condition

군검찰단장이 사건 실체를 파악하고 있었으나 녹취에서 의도적으로 전략적 발언을 한 것이며, 내부적으로는 적극적 감독을 수행했음을 보여주는 기록 (예: 수사 지시서, 검찰단장 결재 문서, 내부 회의록).

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 8 / 진실성 9. 군검찰단장의 직접 녹음. 검사·수사관의 독립 녹취와 수렴하여 3단계 검찰 체계 전체의 부실을 구성.

## Spot-check

- raw/02 `[007-1]` 안세준 녹취 174 (2022.9.29~10.6)

## Related

- [[lim-hyungkyu-admits-eval-environment-problems-still-charged|임형규 검사 3중 자인]] (CORROBORATES)
- [[jin-sangho-investigator-vpn-admission-missing-documentation|진상호 수사관 3중 자인]] (CORROBORATES)
- [[cross-layer-predetermined-conclusion-L5-L6-L7|기정결론 cross-layer atom]] (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

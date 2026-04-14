---
lang: ko
title-ko: "검사 임형규: 시험평가 환경 문제 자인 + 외부 전문가 검증 거부 + 증거를 \"주장\"으로 격하"
title-en: ""
aliases:
  - FR-L6-LIM-EVAL-ENVIRONMENT-ADMISSION
  - "검사 임형규: 시험평가 환경 문제 자인 + 외부 전문가 검증 거부 + 증거를 \"주장\"으로"

layer: 6
secondary-layers: [4]
claimType: prosecution_misconduct
claimSubtype: prosecutor_admission_predetermined_conclusion
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 8
analysisDate: 2026-04-12

record-nos: []
evidence-ids: []
event-date: 2022-10-11

persons:
  - 한지훈
  - 임형규
  - 진상호
  - 김철환
organizations:
  - 군검찰단
has-verbatim: false

tags:
  - layer/L6
  - layer/L4
  - verdict/corroborated
  - strength/strong
  - type/prosecution-misconduct
  - source/recording
  - person/한지훈
  - person/임형규
  - person/진상호
  - person/김철환
  - org/군검찰단
  - cross-layer
---
# 검사 임형규: 시험평가 환경 문제 자인 + 외부 전문가 검증 거부 + 증거를 "주장"으로 격하

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[011]` 녹취 146 (2022.10.11, 00:11:16)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 검사 자인), [[../layers/layer-4|Layer 4]] (secondary — 시험평가)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-LIM-EVAL-ENVIRONMENT-ADMISSION"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecutor_admission_predetermined_conclusion",
    fr.claimDesc = "군검찰단 검�� 임형규가 녹취 146에서 3중 자인: (1) '시험평가가 이루어진 환경에는 문제가 있었다 라는 인정이 된다' — 환경 문제 인정하면서도 기소유예 처분, (2) '기술적으로 완성도가 얼마나 되느냐 이게 쟁점이 아니라' — 외부 전문가 검증 요구 거부, (3) '그거는 한지훈 중령님의 주장인 거잖아요. 세상에 안 억울한 사람이 어디 있겠어요?' — 공문서 기반 증거를 '주장'으로 격하하며 기정결론 유지",
    fr.counterHypothesis = "검사의 발언은 증거 종합 과정에서의 정상적 판단이며, 환경 문제 인정은 피의자 무과실과 별개",
    fr.falsificationCondition = "검사가 시험평가 환경 문제와 한지훈의 무과실을 구분하는 별도의 증거(예: 한지훈이 환경을 조성할 의무가 있었음을 보여주는 훈령 조항)를 실제로 수사 과정에서 확인했음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "검사 3�� 자인: 환경 문제 인정+외부 전문가 거부+증거를 '주장'으로 격하. 기정결론 기반 기소유예의 직접 증거.";
```

## Claim

군검찰단 검사 임형규가 한지훈과의 녹음 통화(녹취 146, 2022.10.11)에서 3가지 핵심 자인을 하였다:

1. **환경 문제 인정**: "그런 걸 종합을 해서, 어짼튼 그 시험평가가 이루어진 환경에는 문제가 있었다 라는 인정이 된다는 취지거든요" — 시험평가 환경 자체의 문제를 인정하면서도 한지훈을 기소유예 처분
2. **외부 전문가 검증 거부**: "프로그램을 잘 만들었다 못 만들었다 이게 그 중요한 것이 아니고요. 기술적으로 완성도가 얼마나 되느냐 이게 쟁점이 아니라" — 한지훈이 요청한 독립 외부 전문가 검증을 사실상 거부
3. **증거의 '주장' 격하**: "그거는 한지훈 중령님의 주장인 거잖아요. 세상에 안 억울한 사람이 어디 있겠어요?" — 훈령·공문서 기반 증거를 '의견'/'주장'으로 격하하며 기정결론 유지

이 3중 자인은 검찰이 증거에 기반한 수사가 아니라 기정결론에 기반한 표적수사를 수행했음을 직접 보여준다.

## Key Takeaways

- Prosecutor admits test evaluation environment had problems yet still charges the subject with 기소유예 [진리성]
- Prosecutor rejects external expert review request, dismissing technical evaluation as "not the issue" — bypassing required procedural safeguard [타당성]
- Prosecutor dismisses documentary evidence (훈령, 공문서) as mere "claims" and "opinions" — textbook predetermined conclusion [진리성]
- "세상에 안 억울한 사람이 어디 있겠어요?" reveals cynical disregard for wrongful prosecution concerns [진실성]
- Triple admission from single recording establishes pattern, not isolated remark [진리성]

## Supporting evidence

- 녹취 146 (2022.10.11, 00:11:16) — raw/02 `[011]` 임형규 section
- Converges with [[jin-sangho-investigator-vpn-admission-missing-documentation|수사관 진상호 3중 자인]] — investigator and prosecutor both make admissions against interest
- Converges with [[kim-cheolhwan-test-vs-operational-vpn-exemption-standard|김철환 센터장 '시험평가 VPN 면제=표준관행']] — expert testimony contradicts prosecution's position

## Counter-hypothesis

검사의 발언은 증거 종합 과정에서의 정상적 판단이며, 환경 문제 인정은 피의자의 직접적 과실과 별개의 사안이다. 기술적 완성도를 쟁점에서 배제한 것은 사기(위계) 혐의의 법리적 구성요건에 집중하기 위한 것이다.

## Falsification condition

검사가 (1) 시험평가 환경 문제와 한지훈의 의무/과실을 구분하는 별도 증거를 확보했거나, (2) 외부 전문가 대신 동등한 기술적 검증을 다른 방법으로 수행했거나, (3) 훈령·공문서 증거를 검토하고 반박하는 별도 수사기록이 있으면 반증.

## Verdict

**CORROBORATED.** STRONG. 진리성 9 / 타당성 9 / 진실성 8. 녹취 원문에서 직접 확인되는 검사 자인. 3건의 자인이 단일 녹취에서 수렴하며, 수사관 진상호·센터장 김철환 등 다른 증인의 독립 증언과 수렴.

## Spot-check

- raw/02 `[011]` 임형규 녹취 146 (2022.10.11)

## Related

- [[jin-sangho-investigator-vpn-admission-missing-documentation|수사관 진상호 3중 자인]] (CORROBORATES)
- [[jin-sangho-recording159-environment-dispute-retroactive-standards|수사관 진상호 환경 쟁점 녹취 159]] (CORROBORATES)
- [[kim-cheolhwan-test-vs-operational-vpn-exemption-standard|김철환 센터장 VPN 면제 표준관행]] (CORROBORATES)
- [[cross-layer-predetermined-conclusion-L5-L6-L7|기정결론 cross-layer atom]] (CORROBORATES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

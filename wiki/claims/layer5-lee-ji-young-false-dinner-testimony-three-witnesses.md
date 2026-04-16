---
lang: ko
title-ko: 이지영의 거짓 식사 증언이 3명의 독립 증인에 의해 붕괴되었다
title-en: ""
aliases:
  - FR-L5-B3-001
  - 이지영의 거짓 식사 증언이 3명의 독립 증인에 의해 붕괴되었다

layer: 5
secondary-layers: [7]
claimType: witness_manipulation
claimSubtype: false_testimony_dinner_report_three_witnesses
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-11

record-nos: [3889, 3893, 3945, 4053, 4054, 11112]
evidence-ids: []
event-date: null

persons:
  - 이지영
  - 한지훈
  - 이승우
  - 김민수
  - 김민지
organizations:
  - MND
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/witness-manipulation
  - source/book
  - fracture/F-CE
  - person/이지영
  - person/한지훈
  - person/이승우
  - person/김민수
  - person/김민지
  - org/MND
  - org/조사본부
  - has/record-nos
  - cross-layer
---
# 이지영의 거짓 식사 증언이 3명의 독립 증인에 의해 붕괴되었다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (§3.5.1.2, lines 44–47)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-7|Layer 7]] (secondary — Record No. 11,112–11,113 in L7 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-B3-001"})
SET fr.layer = 5,
    fr.secondaryLayer = 7,
    fr.claimType = "witness_manipulation",
    fr.claimSubtype = "false_testimony_dinner_report_three_witnesses",
    fr.claimDesc = "Lee Ji-young (공문결재자-1) falsely testified to MND investigators that Han Ji-hoon 'left at 5:30 PM without reporting to her.' Investigator Lee Seung-woo immediately ruled this a 'disciplinary offense.' Kim Min-su confirmed 'this is serious — disciplinary action.' This three-person coordinated false testimony collapsed when two contractor employees provided written confirmations (Record No. 4,053) that Han Ji-hoon reported to the section chief 'dozens of times' before leaving for dinner, and team member Sergeant Kim Min-ji independently testified to the same (Record No. 11,112–11,113). Lee Ji-young then retreated to 'I don't remember,' which the workspace layout evidence (Record No. 3,893) further disproves.",
    fr.counterHypothesis = "Lee Ji-young genuinely did not hear or notice Han Ji-hoon's dinner report due to work distraction, and her 'I don't remember' was honest uncertainty rather than a tactical retreat from a false statement.",
    fr.falsificationCondition = "Production of evidence showing that Lee Ji-young's workspace was physically separated from Han Ji-hoon's desk such that she could not have heard his report, or evidence that the two contractor employees were coached or incentivized to provide their confirmations.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Lee Ji-young's false testimony that Han Ji-hoon left without reporting was exposed by 3 independent witnesses (2 contractors + Sgt Kim Min-ji). The temporal coordination of Lee-Seung-woo-Kim Min-su response proves pre-arranged conclusion.";
```

## 주장 (Claim)

### 한국어

이지영 (공문결재자-1)은 2022년 3월 25일 조사본부 조사에서 한지훈이 **"저녁식사를 보고하지 않고 오후 5시 반에 나갔다"**고 거짓 진술했다. 이승우 사무관이 즉각 "징계 사유"로 판정했고, 김민수 원장이 "이건 심각하다 징계다"로 확정했다. 그러나 이 3인의 조율된 거짓 진술은 **3명의 독립 증인**에 의해 완전히 붕괴되었다:

1. **업체 직원 2명**이 "한지훈이 과장에게 수십 번 보고하고 갔다"는 확인서를 작성 (Record No. 4,053)
2. **중사 김민지**의 독립 증언 (Record No. 11,112–11,113)

이지영은 이후 "기억나지 않는다"로 후퇴했으나, 한지훈이 사전 작성한 "갑질 신고에 따른 예상 주장과 논증" (Record No. 3,889)에 기록된 이지영의 사무실 위치, 청력 자신감 발언, 중간 개입 업무 스타일 등이 이지영이 보고를 들을 수밖에 없는 환경임을 추가 입증한다 (Record No. 3,893).

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] 이지영의 "보고 없이 나갔다" 진술은 3명의 독립 증인(업체 직원 2명 + 김민지)에 의해 허위로 입증됨. / Lee Ji-young's testimony that Han Ji-hoon left without reporting was proven false by 3 independent witnesses (2 contractors + Sgt Kim Min-ji).
- [진리성] 이지영-이승우-김민수의 시간적 조율(진술→즉각 판정→확정)은 사전 공모 없이 불가능한 반응 속도. / The temporal coordination of Lee-Seung-woo-Kim Min-su (testimony → immediate ruling → confirmation) is impossible without pre-arrangement.
- [진실성] 32년 군 경력에서 매일 아침 6시 출근·밤 10시 퇴근하며 18시 이후 보안 결산을 대신 수행한 한지훈에게 "17:30 식사 후 복귀"를 징계 사유로 적용한 것은 비상식적 압박. / Applying "17:30 dinner departure" as disciplinary grounds against a 32-year officer who routinely worked 06:00–22:00 and performed security settlement duties after 18:00 is absurd.
- [타당성] 조사본부도 최종적으로 이지영의 주장이 허위임을 인정 — 그러나 경고장에는 여전히 "근무시간을 소홀히 한 문제점"으로 기재 (법무관리관실 허위 경고장과 연결). / The Investigation Bureau itself acknowledged Lee Ji-young's claim was false — yet the warning letter still cited "neglecting work hours."

## 지지 증거 (Supporting Evidence)
- **Record No. 4,053** — 업체 직원 2명의 "보고 후 퇴근" 확인서
- **Record No. 4,054** — 확인서 관련 추가 증거
- **Record No. 11,112–11,113** — 중사 김민지의 독립 증언
- **Record No. 3,889** — 한지훈이 2022-02-25 작성한 "갑질 신고에 따른 예상 주장과 논증"
- **Record No. 3,893** — 이지영과 한지훈의 사무실 위치 관계 기록
- **Record No. 3,945–3,946** — 29개 유도신문 질문 기록
- **Book §3.5.1.2** — "조사본부의 사기 수사: 결론을 먼저 정하고 증거를 맞추기"

## 반대 가설 (Counter-hypothesis)
이지영은 업무에 몰두하여 한지훈의 식사 보고를 진정으로 듣지 못했거나 인지하지 못했다. "기억나지 않는다"는 거짓말이 아니라 실제 기억 불확실성이었다. 이승우의 즉각 반응은 표준 조사 절차에 따른 것이지 사전 조율이 아니었다.

**반증 근거 3요소:**
1. 이지영의 사무실이 한지훈과 물리적으로 분리되어 보고를 들을 수 없었다는 배치도 증거
2. 업체 직원 2명의 확인서가 강요 또는 유인에 의해 작성되었다는 증거
3. 이승우가 이지영 진술 외에 독립적 증거에 기반하여 판정했다는 조사 기록

## 반증 조건 (Falsification Condition)
이지영의 좌석이 한지훈의 보고를 물리적으로 들을 수 없는 위치였음을 보여주는 사무실 배치도, 또는 업체 직원 2명의 확인서가 외부 압력 하에 작성되었음을 보여주는 증거가 제시될 경우 이 주장은 반박된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 9. 3명의 독립 증인이 이지영의 진술을 직접 반박하며, 이지영 자신이 "기억나지 않는다"로 후퇴한 것은 사실상의 자인이다. 이지영-이승우-김민수의 시간적 조율은 사전 공모의 구조적 증거다.

## 미결 사항 (Open Questions)
- 업체 직원 2명의 신원이 책에서 명시되지 않음 — 추가 확인 필요
- 이지영의 "기억나지 않는다" 발언의 정확한 시점과 맥락 (조사본부 조사 중인지 별도 확인 시인지)

## Spot-check (raw/01 book)

- `Korean/11-3-5-35-제-5층위.md` §3.5.1.2 (lines 44–47): 이지영 거짓 진술, 이승우 즉각 판정, 김민수 확정, 업체 직원 확인서(기록 제4,053), 김민지 증언(기록 제11,112~11,113) — 모두 일치.

## 관련 (Related)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
- [[layer5-predetermined-audit-conclusion]] — 동일 절(§3.5.1.2)의 결론-먼저 구조 (OPPOSES)
- [[layer5-triangular-collusion-speech-act-timeline]] — 삼각 공모 시간 조율 (OPPOSES)
- [[layer5-fabricated-warning-letter]] — 허위 경고장에 이 조작이 반영됨 (OPPOSES)
- [[../entities/people/lee-ji-young|이지영]] (ABOUT)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)

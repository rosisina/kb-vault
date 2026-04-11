# 한지훈은 PC 사업 평가위원장으로서 규격 문제 제기 후 다른 인원으로 평가위원장이 교체되었다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/09-3-3-33-제3-층위.md (§3.3.3.3)
**Layer:** [[../layers/layer-3|Layer 3]]

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L3-PC-EVAL-CHAIR-REPLACED-001"})
SET fr.layer = 3,
    fr.claimType = "evaluation_independence_violation",
    fr.claimDesc = "한지훈 중령이 특정 PC 사업의 평가위원장으로 선정되어 규격 문제를 제기하자, 평가위원회 자체가 취소되었고 이후 다른 인원으로 평가위원장이 교체되었다. 또한 200억 원 이상 규모 국방 인사정보체계 고도화 사업(2018-12~2022-03, 209.9억, 기록 제1,720쪽)의 토의에 총괄 담당으로 여러 번 참석하여 UML 등 개발도구 문제점·도입 불필요성을 지적한 이후 본인이 불편해져 참석하지 않는 상태로 배제되었다. 두 사례는 Layer 3 평가·토의 과정에서 '규격 문제를 제기하는 독립 판단자를 제거하는 패턴'의 일관된 실례이다.",
    fr.counterHypothesis = "평가위원장 교체와 토의 불참은 정상적 인사 조정·업무 조율의 일환이며 규격 문제 제기와 직접 인과 관계가 없다",
    fr.falsificationCondition = "평가위원회 취소 사유가 공문상 '위원 교체 필요' 이외의 독립적 사유(예: 사업 일정 변경·소요 철회)로 명시되어 있고, 대체 위원장이 동일한 규격 문제를 제기하였음이 Record No. 원문으로 확인되면 약화",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 8,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "독립 판단자 제거 패턴의 2건 실례 — Layer 4의 시험평가 조작 구조와 동일 mechanism";
```

## Claim

한지훈 중령의 국전원 재직 기간 중 평가·토의 과정에서 **규격/절차 문제를 제기한 독립 판단자가 해당 역할에서 제거되는 패턴**이 2건 발생하였다:

1. **PC 사업 평가위원장 교체** — 한지훈이 평가위원장으로 선정된 특정 PC 사업에서 규격 문제를 제기한 후 평가위원회 자체가 취소되었고, 이후 다른 인원으로 평가위원장이 교체되었다.
2. **국방 인사정보체계 고도화 사업(209.9억, 기록 제1,720쪽) 토의 배제** — 총괄 담당으로 여러 번 참석하여 UML 등 개발도구 문제점과 도입 불필요성을 지적한 이후, 본인이 불편해져 더 이상 참석하지 않는 방식으로 토의 과정에서 배제되었다.

두 사례는 Layer 4의 [[2436ho-test-evaluation-principle-inverted|시험평가 원칙 역전]]·[[layer4-evaluation-committee-80-items-violation|평가위원회 80개 추가요구 위반]]과 동일한 **독립 판단자 제거 mechanism**의 Layer 3 단계 실례이다.

## Layer

[[../layers/layer-3|Layer 3]] — 국전원 재직 기간 중 한지훈의 평가·토의 역할에서 발생한 사건. 본 atom은 Layer 4의 시험평가 조작이 갑작스러운 사건이 아닌 Layer 3 단계부터 지속된 패턴임을 보인다.

## Supporting evidence

- **Book §3.3.3.3 본문 (line 64):** "본인이 특정 사업(PC 사업으로 기억한다)의 평가 위원장으로 선정된 평가에서 규격에 대한 문제를 제기했다. 이에 따라 평가 위원회 자체가 취소되었고, 그 이후에는 다른 인원으로 평가 위원장을 대체하기도 하였다."
- **209.9억 사업 토의 배제:** "과장 최영수(최종승인자-1) 당시에 사업비가 200억 원 이상이었던 국방 인사정보 체계 고도화 사업(기록 제1,720쪽) 에는 토의 참석 요청으로 여러 번 총괄 담당으로 참석하였다. UML 도구 등 개발도구의 문제점, 이해하기 어려운 개발도구의 도입, 요구 기능에 대한 불필요성을 칠판에 써가며 설명한 적이 있다."
- **Footnote 141 (사업 기간):** "사업 기간은 2018.12~2022.3월(30개월), 예산은 209.9억 원."
- **Footnote 142 (PMO ↔ 한지훈 논의 + 이후 배제):** "사업 관리팀장 공군 중령 김동현 등 보통 10명 내외에 인원이 참석했었는데, 특히 사업 지원 업체(PMO)와 과장 최영수와 본인 간의 도입과 도입 불필요성에 대한 논의가 많았다. 그 이후에는 본인을 불편해하여 참석하지 않았다."
- **Cross-link:** [[layer4-evaluation-committee-80-items-violation]]의 평가위원회 80개 추가요구 위반 구조와 동일 mechanism — 평가 독립성 무력화.

## Counter-hypothesis

평가위원장 교체와 토의 불참은 정상적 인사 조정·업무 조율의 일환이다. PC 사업 평가위원회 취소는 소요 철회 등 독립적 사유에 의한 것일 수 있고, 209.9억 사업 토의 배제도 과장 최영수의 업무 판단에 따른 정상 흐름일 수 있다.

## Falsification condition

본 청구는 다음 중 하나가 제시되면 약화:
1. **PC 사업 평가위원회 취소 사유 공문** — 공문상 위원 교체 필요 이외의 독립적 사유(사업 일정 변경·소요 철회 등)가 명시되어 있는 경우.
2. **대체 평가위원장의 동일 규격 문제 제기** — 교체된 위원장이 같은 규격 문제를 제기하여 본질적으로 동일한 결론에 도달한 기록.
3. **209.9억 사업 토의 참석자 명단 공문** — 한지훈의 참석/불참이 과장 최영수의 의도가 아닌 정상적 업무 배정에 의한 것임을 보이는 회의록.

위 반증 증거가 부재한 상태 → **MODERATE**. PC 사업 Record No.가 특정되지 않아 STRONG 상향은 보류.

## Verdict

**CORROBORATED.** Moderate. 진리성 8 (본인 진술 + 1,720쪽 Record No. 확인), 타당성 7 (절차 위반 증거는 간접), 진실성 9 (피해자 경험 직접 기술).

## Open Questions

- **PC 사업 Record No. 특정** — 본문은 "PC 사업으로 기억한다"로 일시 불확실성 표현. 2019~2021 기간 한지훈이 평가위원장으로 선정된 PC 사업 공문 확보 필요.
- **209.9억 사업 회의록** — UML 논의가 이루어진 회의의 회의록이 기록 제1,720쪽 주변에 있는지 확인.
- **PMO 업체명** — footnote 142의 사업 지원 업체(PMO)가 어느 업체인지 기록상 확인 필요.

## Spot-check (raw/01 book)

- `vault-converted-korean/09-3-3-33-제3-층위.md` §3.3.3.3 (line 64) + footnote 141/142.
- `vault-converted-korean/10-3-4-34-제4-층위.md` — Layer 4 평가위원회 80개 위반 구조와 cross-check.

## Key Takeaways

- [진리성] **2건의 독립 판단자 제거 실례** — PC 사업 평가위원회 취소 + 209.9억 사업 토의 배제 — 두 건 모두 한지훈의 규격 문제 제기 직후 발생.
- [타당성] **Layer 4 평가 조작의 Layer 3 선행 mechanism** — Layer 4의 [[layer4-evaluation-committee-80-items-violation|80개 추가요구 위반]]은 본 atom의 독립 판단자 제거 패턴이 본격화된 후속 단계.
- [진리성] **209.9억 vs 6.25억 (KIATIS)** — 한지훈은 자기 사업 관리 + 동시에 30배 규모 사업 토의에 총괄 담당으로 참여 — Layer 3 역할 과부하 구조의 일부.
- [진실성] **"칠판에 써가며 설명"** — 객관적 근거 제시에도 불구하고 배제된 mechanism은 피해자 관점의 무력감을 설명.
- [타당성] 본 atom은 PC 사업 Record No.가 특정되면 STRONG 상향 가능 — Open Question 1번 closure 우선순위.

## Related

- [[../layers/layer-3|Layer 3 hub]]
- [[../layers/layer-4|Layer 4 hub]]
- [[layer4-evaluation-committee-80-items-violation|평가위원회 80개 위반 (L4)]]
- [[2436ho-test-evaluation-principle-inverted|2436호 시험평가 원칙 역전]]
- [[han-ji-hoon-three-braking-devices-active-defense|한지훈 3 적극적 방어 mechanism]]
- [[../entities/organizations/gukjeonwon|국전원]]

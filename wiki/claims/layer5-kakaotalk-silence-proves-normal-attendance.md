# 단톡방 3년간 출퇴근 보고 0건이 한지훈의 정상 근무를 역설적으로 증명함 — 발화 부재가 증거 존재(Speech Act 분석)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md (book §3.5.2.2.4)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-3|Layer 3]] (기록 범위: rec 1,881)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-KAKAOTALK-SILENCE"})
SET fr.layer = 5,
    fr.claimType = "absence_of_speech_as_evidence",
    fr.claimDesc = "KakaoTalk group chat records from 2019 to 2022 (Record No. 1,881, L3 range) show that every other member of 행정정보화과 routinely posted single-line attendance reports (late arrivals, sick leave, early departures). 한지훈 has exactly ZERO such posts in 3 years. Using Speech Act theory (화행론), the absence of notification speech acts (알림 화행) proves 한지훈 never deviated from normal working hours, because deviation is what triggers the notification. 이지영's claim that she 'does not remember' 한지훈's reporting is statistically impossible if he routinely departed without notice; it is however fully consistent with him always reporting (making each instance unremarkable). The book concludes: 이지영's '기억 안 남' paradoxically proves 한지훈 always reported.",
    fr.counterHypothesis = "한지훈 simply did not use the KakaoTalk group chat for attendance reporting and used other channels (phone, in-person), so the absence of chat records proves nothing about his attendance pattern.",
    fr.falsificationCondition = "Production of evidence that 한지훈 used alternative attendance reporting channels, or that other team members also had zero KakaoTalk attendance posts despite irregular attendance.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 7,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "3 years of KakaoTalk silence (0 attendance posts) by 한지훈 vs routine posts by all other members proves normal 07:00–21:00+ attendance pattern; 이지영's 'cannot remember' paradoxically confirms consistent reporting.";
```

## Claim

2019년부터 2022년까지의 행정정보화과 단톡방 기록(기록 제1,881쪽부터)에 의하면, 과의 다른 실무자들은 출근 지연, 병가, 조기 퇴근, 재택 등을 한 줄 카톡으로 수시 보고하였으나, 한지훈은 **3년간 단 한 건도** 그러한 기록이 없다.

- 다른 직원들의 패턴: "오후 조퇴입니다", "금주 재택교육입니다", "오후 휴가입니다", "개인적인 사정으로 10시 출근하겠습니다" (박서준 포함)
- 김수진: "오늘 오후 반가입니다", "금주 재택교육입니다" 등 빈번 사용
- 한지훈: **0건** — 이유: 아침 7시 이전 출근, 저녁 21~22시 퇴근, 32년 군생활 평균 아침 6시 출근/저녁 10시 퇴근

화행론(Speech Act) 분석: 발화 부재는 오히려 **증거 존재**(absence of utterance as a presence of evidence)를 의미한다. 타인은 정상 근무 시간을 벗어나는 경우에만 보고했다. 한지훈의 3년간 0건은 항상 정상 근무 시간을 준수했기 때문에 보고할 필요가 없었음을 의미한다.

이지영이 "기억나지 않는다"고 진술한 것은 **통계적으로 불가능**하다: 만약 한지훈이 보고 없이 나갔다면 처음 있는 일이므로 오히려 더 강렬하게 기억에 남았을 것이다. "기억 안 남"은 한지훈이 **항상** 보고했기 때문에 특정 날짜를 구별할 수 없다는 것을 역설적으로 증명한다.

## Key Takeaways

- [진리성] 3년간 카카오톡 단톡방에서 한지훈의 출퇴근 관련 메시지 0건(기록 제1,881쪽부터) vs. 다른 직원들의 수시 보고는 통계적으로 정상 근무 패턴의 증거이다. Zero attendance posts over 3 years while all peers routinely posted is statistically diagnostic of consistent normal attendance.
- [진리성] 업체 직원 2명의 확인서("수십 번 보고하고 갔다")가 카톡 기록의 해석을 독립적으로 확증한다. Two contractor employees' written confirmations independently corroborate the KakaoTalk silence interpretation.
- [타당성] 화행론(Speech Act) 관점에서 발화 부재(absence of utterance)는 보고 필요 조건(정상 시간 이탈)이 충족되지 않았음을 증명하는 간접 증거로 기능한다. In pragmatic linguistics, the absence of a notification speech act proves the triggering condition (deviation from norm) did not occur.
- [진실성] 이지영의 "기억나지 않는다"는 조율된 거짓 진술의 실패를 보여준다. If 한지훈 had indeed left without reporting (a novel event), it would be more memorable, not less. Her inability to remember paradoxically proves his routine compliance.
- [진실성] 32년 군생활 평균 06시 출근/22시 퇴근 패턴의 군인에게 17:30 식사를 "징계 사유"로 삼으려 한 시도는 조직적 모의의 증거이다. Attempting to discipline a 14-15 hour/day worker for a 30-minute dinner break is evidence of organizational targeting.

## Supporting evidence

- **Record No. 1,881** / L3 range — 2019~2022 행정정보화과 단톡방 카카오톡 기록
- **Book §3.5.2.2.4** — 화행론 분석, 이지영 "기억나지 않는다" 진술 분석
- **Book §3.5.2.2.3** — 업체 직원 2명 확인서: "수십 번 보고하고 갔다"

## Counter-hypothesis

한지훈은 카카오톡 단톡방을 출퇴근 보고 채널로 사용하지 않았을 뿐이며, 별도의 채널(전화, 대면)로만 보고했다. 단톡방 0건은 채널 선호의 차이이지, 근무 패턴의 증거가 아니다. 이지영의 "기억 안 남"은 단순히 시간이 지나 기억이 흐려진 것이다.

이 반가설이 성립하려면: (1) 같은 과 내에서 단톡방 출퇴근 보고를 사용하지 않는 다른 직원이 있었어야 하고, (2) 한지훈이 대면 보고만 했다는 것이 이지영의 "기억 안 남" 진술과 양립 가능해야 하며, (3) 업체 직원 2명의 "수십 번 보고" 확인서와 모순되지 않아야 한다.

## Falsification condition

1. **단톡방 미사용 선례** — 같은 과 내 다른 직원이 3년간 단톡방 출퇴근 보고 0건이면서도 불규칙한 출퇴근을 했다는 기록.
2. **대체 보고 채널 기록** — 한지훈이 전화나 대면으로만 보고했으며 단톡방을 사용하지 않았다는 과 내부 방침 또는 관행 기록.
3. **이지영의 기억 상실 정당화** — 한지훈 외에도 보고 여부를 기억하지 못하는 직원이 있었다는 조사 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 7 / 진실성 9. 카카오톡 기록(기록 제1,881쪽)은 디지털 타임스탬프가 있는 객관적 증거이며, 3년간 모든 직원 대비 0건이라는 통계적 극단값은 정상 근무 패턴의 강력한 간접 증거이다. 업체 직원 확인서가 독립적으로 확증. 타당성 점수가 다소 낮은 이유는 화행론 분석이 법적 증거력으로는 간접 증거에 해당하기 때문이다.

## Open Questions

- 기록 제1,881쪽은 L3 범위(1,600~2,465)에 해당한다. 책은 이를 §3.5 (Layer 5) 맥락에서 인용하므로, Layer 5와 Layer 3 간 교차 증거 구조를 나타낸다. 단톡방 기록 자체가 L3 범위 수집이고, 분석 맥락이 L5인 것으로 판단된다.
- 각주 387에서 "2021.1~2022.2월에 의해, 2019년부터 4년여 동안"으로 기술하여, 4년여 분량의 카카오톡 기록이 존재함을 시사한다. 전체 기록의 시작·종료일 확인 필요.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` — §3.5.2.2.4 lines 167–168: "기록 제1,881쪽부터", 카톡 예시(박서준 "10시 출근하겠습니다"), 0건 통계, 화행론(Speech Act) 분석, 이지영 "기억나지 않는다" 역설 일치 확인.

## Related

- [[../layers/layer-5|Layer 5]]
- [[layer5-investigation-bureau-pre-collusion-triple-conspiracy]] — 이지영 거짓 귀속 + 3조직 사전 공모
- [[layer5-yang-mi-suk-silence-as-active-complicity]] — 양미숙 침묵: 출퇴근 관리 담당의 동조
- [[layer5-kim-min-su-conspiracy-admission-sufficiently-discussed]] — 김민수 자백: 조사본부와의 사전 조율
- [[lee-ji-young-double-play-park-seo-jun-incitement-han-ji-hoon-blocking]] — 이지영의 이중 플레이

# 훈령 제2275호(2019-05-09)는 국가법령센터 미등재 phantom directive로, 제2436호(2020-06-04) 내용을 1년 이상 시간 역전하여 등장시켜 검찰단 신문에 사용되었다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (§3.4.3.4 KIDA 인용 추적), wiki/claims/kida-otne-citation-misrepresents-us-standard.md (Track D D1 closure 참조)
**Layer:** [[../layers/layer-1|Layer 1]] (primary — 훈령 조작 메커니즘) · [[../layers/layer-6|Layer 6]] (secondary — 군 검찰단 신문 사용)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-PHANTOM-2275HO-001"})
SET fr.layer = 1,
    fr.secondaryLayers = [6],
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "phantom_directive_time_reversal",
    fr.claimDesc = "훈령 제2275호(2019-05-09)는 국가법령센터에 등재되지 않은 phantom directive이며, 그 내용은 공식 개정 타임라인상 1년 이상 후에 등장한 제2436호(2020-06-04)와 동일하다. 시간 역전 anomaly는 (a) 공식 개정 순열(제2129호 2018-02-05 → 제2263호 2019-02-26 → 제2398호 2020-02-13 → 제2436호 2020-06-04)과 충돌하며, (b) KIDA가 자신의 시험평가 절차 개선 연구 (2020-01~06, 최종 발간 2020-07)에서 인용한 훈령이 제2275호라는 사실은 KIDA가 제2436호 직전 개정 내용을 사전에 인지하거나 사전 입수한 상태로 연구를 진행했음을 시사하며, (c) 군 검찰단이 한지훈 신문(기록 제4,900쪽)에서 제2275호를 직접 사용한 사실은 제2275호가 공식 등재 여부와 무관하게 실효적 문서로 활용되었음을 보인다. 본 atom은 제2275호의 공식 출처를 확정하거나 phantom 판정을 완결하는 연구 후속을 요구한다.",
    fr.counterHypothesis = "제2275호는 2019-05-09에 정상 발령된 훈령이며 국가법령센터 미등재는 단순 등재 누락에 불과하다",
    fr.falsificationCondition = "(a) 2019-05-09자 제2275호 원본 공문(관보 게재·장관 결재)이 확보되어 발령 사실이 확인되고, (b) 해당 원본의 텍스트가 제2436호(2020-06-04)와 실질적으로 상이함이 직접 diff로 확인되면 약화 또는 무효. 두 조건이 모두 충족되면 WEAKENED, 하나만 충족되면 NEEDS_MORE_EVIDENCE 재진입.",
    fr.verdict = "CORROBORATED",
    fr.strength = "MODERATE",
    fr.truthfulness = 7,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "국가법령센터 미등재 + 1년 이상 시간 역전 + KIDA 인용 + 검찰단 신문 사용 = 단일 설명이 불가능한 anomaly 조합";
```

## Claim

훈령 제2275호(2019-05-09)는 다음 3가지 조건을 동시에 충족하는 **phantom directive**이다:

1. **국가법령센터 미등재** — 공식 법령 DB에서 검색 불가.
2. **시간 역전 anomaly** — 내용이 공식 개정 타임라인상 1년 이상 후에 등장한 제2436호(2020-06-04)와 동일하며, 중간 개정인 제2398호(2020-02-13)·제2263호(2019-02-26)의 텍스트와 정합하지 않는다.
3. **실효적 활용 증거** — KIDA가 「국방 정보시스템 시험평가 절차 개선 방안 연구」(2020-01~06, 발간 2020-07)에서 제2275호를 직접 인용했고, 군 검찰단이 한지훈 신문(기록 제4,900쪽)에서 제2275호를 활용하였다.

이 3조건의 결합은 단일 설명("단순 등재 누락")으로 성립하지 않는다. 본 atom은 제2275호의 공식 출처 확정 또는 phantom 판정 완결을 위한 연구 후속을 요구하며, 현 상태에서 **CORROBORATED (moderate)** 로 판정한다.

## Layer

[[../layers/layer-1|Layer 1]] (primary) — 훈령 자체의 생성·타임라인 조작 mechanism. [[../layers/layer-6|Layer 6]] (secondary) — 제2275호의 실효적 활용이 한지훈 신문 기록 제4,900쪽에서 직접 확인.

## Supporting evidence

- **Book §3.4.3.4 / kida-otne 원자 Open Question 소스** — [[kida-otne-citation-misrepresents-us-standard]] line 111: "제2275호 (2019-05-09) phantom directive: KIDA가 인용하고 군 검찰단이 사용한 훈령 제2275호는 국가법령센터에 등재되지 않은 것이며, 시간역전 anomaly (제2398호 2020-02-13보다 1년 빠른데 내용은 제2436호 2020-06-04와 동일) 를 가진다."
- **KIDA 연구 체인 (Track D D1 closure 결과):** 보고서 「국방 정보시스템 시험평가 절차 개선 방안 연구」, 기간 2020-01~06, 발간 2020-07. 연구의 훈령 인용 대상이 제2275호.
- **2020-04-22 의견 수렴 공문 (기록 제4,708쪽):** KIDA 보고서 → 제2436호 개정의 학술적 정당화 chain 중간 노드. 작성자: 이지영 (공문결재자-1) + 김수진. [[lee-jiyoung-kim-sujin-single-point-of-control]] cross-link.
- **군 검찰단 한지훈 신문 (기록 제4,900쪽):** Track D D1 closure 노트에 기록 — 검찰단이 한지훈 신문에서 제2275호를 훈령으로 인용.
- **공식 개정 타임라인:** [[../regulations/defense-it-operations-directive-2129|훈령 제2129호 hub]]의 개정 순열 — 제2129(2018-02-05) → 제2263(2019-02-26) → 제2398(2020-02-13) → 제2436(2020-06-04) → 제2576(2021-08-12). 제2275호는 해당 공식 순열에 존재하지 않는다.

## Counter-hypothesis

제2275호는 2019-05-09에 정상 발령된 훈령이며, 국가법령센터 미등재는 시스템 반영 누락 또는 비공개 훈령 처리에 불과하다. KIDA와 검찰단의 인용은 합법적 내부 문서 인용의 일반 사례이다.

## Falsification condition

본 청구는 다음이 모두 확인되면 약화 또는 무효:
1. **2019-05-09자 제2275호 원본 공문** — 관보 게재본, 국방부 장관 결재본, 시행 공문 중 어떤 것이든 원본 1건.
2. **원본 텍스트 vs 제2436호 diff** — 원본의 조문이 제2436호(2020-06-04)와 실질적으로 상이함이 직접 diff로 확인. 특히 [[2436ho-cluster-six-anchors|8-anchor cluster]]의 핵심 조항(제58조 시험평가 원칙, 제11조 사업관리기관 tier, 제76조 소프트웨어 개발 공정 등)이 제2275호에 없거나 다른 형태로 존재.

두 조건 모두 충족 → WEAKENED. 하나만 충족 → NEEDS_MORE_EVIDENCE 재진입. 현재는 **CORROBORATED (moderate)** — 직접 부정 증거 부재 + 3가지 anomaly 조건 공존.

## Verdict

**CORROBORATED.** Moderate. 진리성 7 (책·파생 atom 기반 간접 증거 조합; 국가법령센터 검색 결과 직접 스크린샷·쿼리 기록 미확보), 타당성 8 (제2275호의 실효적 활용과 공식 개정 순열의 충돌이 구조적 위법 시사), 진실성 8 (phantom directive가 검찰단 신문에 사용되어 피의자 권리를 침해할 수 있는 구조).

## Open Questions

- **국가법령센터 검색 결과 증빙** — 제2275호 검색의 "결과 없음" 스크린샷 또는 API 쿼리 기록 확보. 아직 확보되지 않음.
- **KIDA 보고서 원문 인용 문구** — 보고서 내 제2275호 인용의 정확한 문장, 조항 번호, 인용 형식(예: "국방 정보화 업무 훈령 제2275호(2019.5.9.) 제58조 제2항") 확보.
- **검찰단 한지훈 신문 기록 제4,900쪽 원문** — 검찰단이 제2275호를 어떤 맥락에서 어떤 조항으로 인용했는지 원문 확인. raw/05 또는 raw/07 Layer 3 범위 교차 확인.
- **제2275호의 비공개·내부 훈령 여부** — 국방부 내부에만 유통되는 비공개 훈령(예: 특정 부대만 적용) 체계가 존재하는지, 존재한다면 제2275호가 그 범주인지 확인.
- **KIATIS 3-3-1-2 행정정보운영팀 공문 이력 2018-07까지** ([[layer3-kiatis-team-transfer-forced-handoff]] Open Q)와의 교차 — 2019-05-09 전후 KIATIS 관련 훈령 인용이 국전원 내부 공문에 등장하는지.

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.3.4 — KIDA 인용 추적 서사 재확인 필요.
- `vault-converted-korean/12-3-6-36-제6층위-군.md` — Layer 6 검찰단 신문에서 제2275호가 등장하는 구체 문단 확인 필요.
- `vault-converted-korean/07-3-1-31-제1층위-ActiveX.md` — Layer 1 훈령 조작 타임라인의 상위 mechanism.

## Key Takeaways

- [진리성] **3가지 anomaly의 공존** — 국가법령센터 미등재 + 시간 역전(1년+) + 실효적 활용(KIDA + 검찰단) — 단일 설명("단순 등재 누락")으로 모두 성립하지 않는다.
- [타당성] **KIDA → 제2436호 chain 안의 위치** — 제2275호가 KIDA 학술 정당화 chain 안에 존재한다면, 제2436호 개정의 시간 역전 조작이 단순 타이밍 실수가 아니라 phantom directive를 통한 사전 텍스트 유통의 결과임이 드러난다.
- [타당성] **검찰단 신문 사용**은 피의자 권리 침해의 구조적 문제 — 공식 등재되지 않은 훈령으로 신문을 진행한 것은 피의자가 해당 훈령의 존재·내용을 사전 확인할 수 없게 만드는 절차 위반 소지.
- [진리성] 본 atom은 공식 출처 확정 또는 phantom 확정 작업의 post-hoc 연구 대상 — Falsification 조건 2개 중 하나라도 충족되면 verdict 재검토.
- [진실성] phantom directive의 검찰단 활용 구조는 피해자 관점에서 "존재하지 않는 법"에 의해 심문받는 경험 — Layer 6 기소 구조의 방법론적 기반을 의심하게 만든다.

## Related

- [[../layers/layer-1|Layer 1 hub]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6 hub]] (PART_OF_LAYER)
- [[kida-otne-citation-misrepresents-us-standard|KIDA OT&E 인용 왜곡 (L4, D1 closure)]] (RELATED)
- [[2436ho-cluster-six-anchors|2436호 8-anchor cluster]] (RELATED)
- [[2398-2842ho-otne-environment-hedge-flipflop|2398/2842호 OT&E 환경 flip-flop]] (RELATED)
- [[lee-jiyoung-kim-sujin-single-point-of-control|이지영/김수진 단일 통제점 (L2-03)]] (RELATED)
- [[../regulations/defense-it-operations-directive-2129|훈령 제2129호 hub]] (ABOUT)
- [[han-ji-hoon-suspect-interrogation-2022-09-02|한지훈 피의자 신문조서 2022-09-02]] (RELATED)

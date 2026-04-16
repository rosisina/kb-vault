---
lang: ko
title-ko: 국방부 정보화기획관실이 사업통제기관 역할을 의도적으로 회피하여 新KIATIS 전력화를 불가능하게 만들었다
title-en: ""
aliases:
  - FR-L6-B3-004
  - 국방부 정보화기획관실이 사업통제기관 역할을 의도적으로 회피하여 新KIATIS 전력화를

layer: 6
secondary-layers: [7]
claimType: temporal_manipulation
claimSubtype: control_agency_role_evasion
fracture-type: F-AA
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 9
sincerity: 9
analysisDate: 2026-04-11

record-nos: [1, 11303]
evidence-ids: []
event-date: null

persons:
  - 장우진
  - 한지훈
organizations:
  - DIDC
  - 국전원
  - MND
  - 국본
  - 국유단
has-verbatim: false

tags:
  - layer/L6
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/temporal-manipulation
  - source/book
  - fracture/F-AA
  - person/장우진
  - person/한지훈
  - org/DIDC
  - org/국전원
  - org/MND
  - org/국본
  - org/국유단
  - has/record-nos
  - cross-layer
---
# 국방부 정보화기획관실이 사업통제기관 역할을 의도적으로 회피하여 新KIATIS 전력화를 불가능하게 만들었다

**Source:** raw/01. book-beyond-cybersecurity/Korean/12-3-6-36-제6층위-군.md (§3.6.5.1.3, lines 736–745)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 전력화 지연 구조적 원인), [[../layers/layer-7|Layer 7]] (secondary — Record No. 11,303 in L7)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-B3-004"})
SET fr.layer = 6,
    fr.secondaryLayer = 7,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "control_agency_role_evasion",
    fr.claimDesc = "국방부 정보화기획관실 deliberately evaded its 사업통제기관 role for 新KIATIS, specifically by intentionally skipping the '정보보호의 적절성' assessment at the 소요제기 stage (훈령 제23조·제24조). This evasion was not a technical judgment but a political decision to prevent 新KIATIS 전력화 from exposing 舊KIATIS's 15-year security vulnerability. 장우진 (사업실무자-1), who managed KIATIS for 10+ years at 국유단, independently attributed the deployment delay to '연계 데이터' and VPN issues (Record No. 11,303). When the 사업통제기관 abandons its role, deployment becomes structurally impossible — no other entity has the authority to approve 전력화.",
    fr.counterHypothesis = "국방부 정보화기획관실 did not evade its role but delegated specific functions to subordinate organizations as permitted under the directive's flexibility provisions; the deployment delay resulted from genuine technical complexity, not institutional evasion",
    fr.falsificationCondition = "Production of 국방부 정보화기획관실's documented assessment of 新KIATIS's 정보보호 적절성 at the 소요제기 or any subsequent stage, showing the assessment was performed rather than evaded",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "국방부 정보화기획관실 evaded its 사업통제기관 role at 소요제기 stage, specifically the '정보보호의 적절성' assessment (훈령 제23조·제24조). 장우진 (10+ years KIATIS experience at 국유단) independently attributed delay to VPN/data issues (Record No. 11,303). The evasion was political — 전력화 would expose 舊KIATIS's 15-year security vulnerability. Without 사업통제기관 action, 전력화 is structurally impossible.";
```

## 주장 (Claim)

### 한국어

新KIATIS 전력화 지연의 세 번째 구조적 원인은 **국방부 정보화기획관실**이 사업통제기관으로서의 역할을, **국전원**에서는 사업관리기관으로서의 역할을 **의도적으로 회피**한 것이다. 국방정보화업무훈령에 따르면 사업통제기관은 사업 추진 간 조정·통제·지원하는 기관으로서 사업의 성공적 완료와 전력화에 대한 최종 책임을 진다 (훈령 제11조, 제23조, 제24조).

특히 국방부 정보화기획관실의 **"정보보호의 적절성" 판단**을 소요제기 단계에서 의도적으로 회피한 것이 전력화 지연의 핵심 요인이었다. 이는 기술적 판단이 아닌 **정치적 판단**으로, 新KIATIS가 전력화되면 舊KIATIS의 15년간 보안취약점이 드러날 것을 우려한 **의도적 회피**였다.

국유단에서 10년 이상 KIATIS를 담당했던 **장우진 (사업실무자-1)**은 전력화 지연의 원인을 "연계 데이터"와 VPN으로 판단하였다 (Record No. 11,303). 사업통제기관이 자신의 역할을 포기하면 전력화는 불가능하다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- 국방부 정보화기획관실 deliberately evaded the "정보보호의 적절성" assessment at the 소요제기 stage (훈령 제23조·제24조) — the assessment that would have exposed 舊KIATIS's 15-year VPN-less operation [타당성].
- 장우진 (사업실무자-1, 10+ years KIATIS at 국유단) independently identified VPN and "연계 데이터" as the deployment delay causes (Record No. 11,303 / L7) — corroborating the structural rather than individual-blame explanation [진리성].
- Without 사업통제기관 action (조정·통제·지원), 전력화 is structurally impossible — no subordinate entity has the authority to approve deployment [타당성].
- The evasion was politically motivated: successful 전력화 would have replaced 舊KIATIS, exposing that the 2016 DIDC hacking root server had been operating without VPN for 15 years [진실성].
- 정리08 and 정리09 (§3.6.5.1.3): 국방부 정보화기획관실 is identified as the core criminal organization of 국방정보화카르텔 that manipulated the directive to conceal the 2016 hacking [진실성].

## 지지 증거 (Supporting Evidence)
- Record No. 11,303 (L7) — 장우진 (사업실무자-1) 증언: 전력화 지연 원인 = "연계 데이터" + VPN
- 훈령 제23조 (소요 제기) ¶1, ¶3 — 국본(정보화기획관실)의 가용예산·적정성 검토 의무
- 훈령 제24조 (소요 검토) ¶1 — 사업 타당성 검토 의뢰 의무 + 기반운영환경 DIDC 정보자원 활용 검토 의무
- 훈령 제11조 — 사업통제기관 임무 정의
- §3.6.5.1.3 (lines 735–745) — 사업통제기관 역할 회피와 책임 전가 분석
- 정리08, 정리09 (lines 739–741) — 국방부 정보화기획관실 = 국방정보화카르텔 핵심 범죄조직

## 반대 가설 (Counter-hypothesis)
1. **Delegation not evasion:** 국방부 정보화기획관실 delegated the "정보보호의 적절성" assessment to the executing agencies (국전원, DIDC) as permitted under the directive's institutional flexibility provisions, rather than evading the assessment entirely.
2. **Assessment performed elsewhere:** The 정보보호 적절성 assessment was performed at a different stage (e.g., during 규격심의 or 사업계획 승인) rather than at 소요제기, and was documented in records not cited by the book.
3. **Genuine technical complexity:** The deployment delay was caused by genuine, unforeseeable technical challenges (GIS performance, Active-X compatibility, VPN integration) that no amount of 사업통제기관 oversight could have prevented.

## 반증 조건 (Falsification Condition)
This claim is CORROBORATED unless:
1. A documented 정보보호 적절성 assessment by 국방부 정보화기획관실 for 新KIATIS is produced, showing the assessment was performed at any stage of the project lifecycle.
2. Formal delegation documents are produced showing 정보화기획관실 lawfully delegated the 정보보호 적절성 function to another entity.
3. Independent technical evidence demonstrates that the deployment delay was caused by technical factors beyond the control of 사업통제기관 oversight.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 9. The 사업통제기관's role evasion is structural: if 정보화기획관실 does not perform the 정보보호 적절성 assessment, no other entity has the authority to do so (훈령 제23·24조). 장우진's independent identification of VPN/data issues (Record No. 11,303) confirms the deployment blockers were known and attributable to institutional action (DIDC's OTP card non-provision, 국유단's data non-creation), not to the 개발관리팀장. The book's conclusion that this was political (protecting 舊KIATIS from exposure) follows logically from the evidence that 정보화기획관실 had the means and duty to act but chose not to.

## 원전 확인 (Spot-check)
- `Korean/12-3-6-36-제6층위-군.md` lines 735–745 — CONFIRMED: §3.6.5.1.3 describes 사업통제기관 역할 회피
- Record No. 11,303 cited in text — CONFIRMED: 장우진 testimony on VPN and data issues
- Note: The user-provided "rec 1" for this section is a parsing error — no Record No. 1 appears in §3.6.5.1.3. Only Record No. 11,303 is cited.
- Deferred to A.6 Re-verify.

## 미결 사항 (Open Questions)
- Is there a 국방부 정보화기획관실 internal record documenting the decision NOT to perform 정보보호 적절성 assessment for 新KIATIS?
- Did 장우진's testimony (Record No. 11,303) specifically name 정보화기획관실 or only identify the structural causes (VPN/data)?
- How does the 국방정보화업무훈령 regulate 사업통제기관 accountability when the agency fails to perform its mandated functions?

## 관련 (Related)
- [[prosecution-omits-saup-tongje-gigwan-from-rfp-structure|L6: 군검사 사업통제기관 역할 의도적 누락]] (RELATED)
- [[layer4-post-evaluation-illegal-control-transfer-to-gukyu-dan|L4: 국유단 사업통제기관 불법 자임]] (RELATED)
- [[gukyu-dan-data-absence-delays-new-kiatis|L6: 국유단 데이터 부재 전력화 지연]] (CORROBORATES)
- [[cartel-requirement-inflation-80-items-delay|L6: 80건 추가 요구사항 지연 메커니즘]] (CORROBORATES)
- [[kiatis-mnd-controlled-not-delegated|L2: 新KIATIS 국방부 통제 사업]] (RELATED)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/organizations/mnd|국방부]] (ABOUT)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

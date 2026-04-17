---
lang: ko
title-ko: "박서준의 신고 내용은 경고장에서 완전히 배제되었고 이지영의 주장만 반영되어, 박서준은 명의상 신고자였음이 증명된다"
title-en: ""
aliases:
  - FR-L5-005
  - "박서준의 신고 내용은 경고장에서 완전히 배제되었고 이지영의 주장만 반영되어, 박서준은"

layer: 5
secondary-layers: []
claimType: witness_manipulation
claimSubtype: nominal_complainant_structural_proof
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 9
analysisDate: 2026-04-11

record-nos: []
evidence-ids: ["L5-005"]
event-date: null

persons:
  - 박서준
  - 이지영
  - 김민수
  - 김수진
  - 한지훈
organizations:
  - 국전원
  - MND
  - 조사본부
has-verbatim: false

tags:
  - layer/L5
  - verdict/corroborated
  - strength/strong
  - type/witness-manipulation
  - source/book
  - fracture/F-CE
  - person/박서준
  - person/이지영
  - person/김민수
  - person/김수진
  - person/한지훈
  - org/국전원
  - org/MND
  - org/조사본부
---
# 박서준의 신고 내용은 경고장에서 완전히 배제되었고 이지영의 주장만 반영되어, 박서준은 명의상 신고자였음이 증명된다

**Source:** raw/01. book-beyond-cybersecurity/Korean/11-3-5-35-제-5층위.md (book §3.5.1.3 / §3.5.2.1.1 / §3.5.3.2)
**Layer:** [[../layers/layer-5|Layer 5]] (primary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-005"})
SET fr.layer = 5,
    fr.claimType = "witness_manipulation",
    fr.claimSubtype = "nominal_complainant_structural_proof",
    fr.claimDesc = "박서준's stated grievances were entirely absent from the 2022-05-23 경고장, while 이지영's single false claim was immediately incorporated. This selective incorporation proves 박서준 was a nominal front complainant, not an actual aggrieved party — the real complainant organization was 이지영 and 김민수, using 박서준's name as cover.",
    fr.counterHypothesis = "The 경고장 addressed only the most legally actionable grievance and excluded 박서준's less-specific complaints for procedural reasons, not because 박서준 was nominal.",
    fr.falsificationCondition = "Production of a separate legal document or follow-up communication from the 법무관리관실 explicitly addressing 박서준's stated grievances and providing procedural justification for their exclusion from the warning letter.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 2022-05-23 경고장 (기록 제4,078) contains zero reference to 박서준's stated grievances (기록 제3,945~3,946) but immediately incorporates 이지영's single claim, proving 박서준 was a nominal complainant deployed as organizational cover by 이지영 and 김민수.";
```

## 주장 (Claim)

### 한국어

2022년 5월 23일 국방부 법무관리관실이 발급한 경고장(기록 제4,078쪽)은 갑질 신고자로 등재된 두 사람 중 **박서준의 주장을 단 한 건도 반영하지 않았다.** 반면 이지영의 주장 단 하나는 즉시 경고장에 포함되었다. 박서준이 신고서(기록 제3,945~3,946쪽)에 기술한 내용들은 경고장에서 완전히 부재하다.

책(§3.5.1.3)은 이 절을 `법무관리관실의 경고장: 박서준 사안의 완전한 부재`라는 제목으로 별도로 다루며, 이 `완전한 부재`가 조작의 핵심 증거임을 분석한다. 박서준의 주장이 경고장에 포함될 수 없을 만큼 법적으로 취약했다면, 그 내용 자체가 명의상 신고자가 실질적인 피해가 없었음을 증명한다.

책(§3.5.3.2)은 신고자 정체의 3단 변화를 분석한다: `박서준 → 국전원 → 다시 박서준`. 이 변화 패턴은 박서준이 실질적 신고자가 아니라 조직(이지영·김민수 주도)이 사용한 법적 방패막이었음을 시사한다. 이지영 자신은 직접 신고하는 대신 박서준에게 신고를 유도했다: `"원에서 신고를 해달라고 요청을 해가지고"` (§3.5.3.1.2 이지영 발언).

책의 핵심 명제(§3.5.1.7) P3: `허위의 진짜 신고자는 개인이 아니라 김민수와 이지영, 김수진이 주도한 조직이다.`

### English

The warning letter issued by the MND Legal Affairs Office on May 23, 2022 (Record No. 4,078) **did not reflect a single one of 박서준's claims** out of the two people listed as harassment complainants. In contrast, 이지영's single claim was immediately included in the warning letter. The content 박서준 described in his complaint (Records 3,945–3,946) is completely absent from the warning letter.

The book (§3.5.1.3) treats this section separately under the title `Legal Affairs Office Warning Letter: Complete Absence of 박서준's Matter` and analyzes that this `complete absence` is key evidence of fabrication. If 박서준's claims were too legally weak to be included in the warning letter, the content itself proves the nominal complainant had no substantive harm.

The book (§3.5.3.2) analyzes the 3-stage change in complainant identity: `박서준 → 국전원 → back to 박서준`. This change pattern suggests 박서준 was not a substantive complainant but a legal shield used by the organization (led by 이지영 and 김민수). 이지영 herself induced 박서준 to file rather than filing directly: "They requested that the agency file the complaint" (§3.5.3.1.2 이지영 statement).

The book's core proposition (§3.5.1.7) P3: `The true false complainant is not an individual but the organization led by 김민수, 이지영, and 김수진.`

## 핵심 요약 (Key Takeaways)
- [진리성] 경고장(기록 제4,078쪽)에는 박서준의 신고서(기록 제3,945~3,946쪽) 내용이 단 하나도 반영되지 않았다. 이지영의 주장 하나만 반영되었다. 선택적 반영의 비대칭성은 신고자 의도의 구조적 차이를 보여준다.
- [진실성] 이지영은 박서준에게 신고를 유도했다(§3.5.3.1.2): `"원에서 신고를 해달라고 요청을 해가지고. 그건 아니다라고 얘기를 한 상태이고. 그래서 개인이 신청하는 걸로 해라라고 해 놓은 상태라서."` — 이지영 자신의 발언이 박서준이 이지영의 요청에 의해 신고한 것임을 자백한다.
- [진리성] 책(§3.5.3.2)은 신고자 정체가 3단 변화를 겪었음을 분석한다: 이 변화 자체가 실질적 신고자가 누구인지에 대한 조직 내 혼란과 사후 조정을 반영한다.
- [타당성] 명의상 신고자를 이용한 조직적 신고 행위는 허위 신고 및 공무 방해 구성 요건을 충족할 수 있다. 특히 실제 피해 없이 조직의 지시에 따라 신고서에 서명한 경우, 신고인의 법적 의무 위반 여부도 검토해야 한다.
- [진리성] 책(§3.5.3.1.6) `박서준의 48시간 변화: 협력에서 적대로` — 박서준의 태도 급변이 외부(이지영·김민수) 압력에 의한 것임을 시사한다.

## 지지 증거 (Supporting Evidence)
- **기록 제4,078쪽** — 2022-05-23 경고장: 박서준 주장 완전 부재, 이지영 주장만 포함 (book §3.5.1.3 / §3.5.2.1.1)
- **기록 제3,945~3,946쪽** — 박서준의 갑질 신고서 원본: 신고 내용 기재 (book §3.5.2.1.1)
- **Book §3.5.1.3** section heading: `법무관리관실의 경고장: 박서준 사안의 완전한 부재`
- **Book §3.5.2.1.1** section heading: `법무관리관실 경고장의 조작: 신고자 주장의 완전한 배제`
- **Book §3.5.1.7** proposition P3: `허위의 진짜 신고자는 개인이 아니라 김민수와 이지영, 김수진이 주도한 조직이다.`
- **Book §3.5.3.1.2** 이지영 verbatim 발언: `"원에서 신고를 해달라고 요청을 해가지고...개인이 신청하는 걸로 해라라고 해 놓은 상태라서."`
- **Book §3.5.3.2.1** analysis: 신고자 진술의 3단 변화 `박서준 → 국전원 → 다시 박서준`

## 반대 가설 (Counter-hypothesis)
법무관리관실은 두 신고자의 주장 중 법적으로 처리 가능한 항목(이지영의 구체적 주장)만을 경고장에 포함하고, 박서준의 주장은 법적 구성 요건을 갖추지 못했거나 다른 절차로 처리하기로 했다. 이는 박서준이 명의상 신고자라는 증거가 아니라, 법무관리관실의 통상적인 사안별 취사선택이다.

이 반가설이 성립하려면: (1) 박서준 주장에 대한 별도의 후속 법적 처리 기록이 있어야 하고, (2) 유사한 복수 신고인 사안에서 동일한 취사선택 패턴이 관행적으로 확인되어야 한다.

## 반증 조건 (Falsification Condition)
이 클레임은 다음 중 하나가 제출될 경우 반증 또는 약화된다:

1. **박서준 주장에 대한 별도 법률 검토 문서** — 법무관리관실이 박서준의 주장을 검토하고 법적 취약성(법적 구성 요건 불충족 등)을 이유로 배제했다는 내부 법무 검토 의견서.
2. **박서준에 대한 별도 후속 조치 기록** — 경고장과 별개로 박서준의 신고 내용을 처리한 다른 공문서 또는 행정 절차.
3. **복수 신고인 사안의 선례** — 유사한 갑질 조사에서 복수 신고인의 주장 중 일부만 경고장에 반영한 관행이 표준 절차임을 보여주는 사례.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 9. 박서준 주장의 `완전한 부재`는 경고장(기록 제4,078) 대 신고서(기록 제3,945~3,946)의 직접 대조로 확인된다. 이지영 자신의 발언(`신고를 해달라고 요청`을 박서준에게)은 신고자 관계의 구조를 자백한다. 책(§3.5.1.7) P3는 신고자 정체를 개인이 아닌 조직으로 명시한다.

## Spot-check (raw/01 book)

- `Korean/11-3-5-35-제-5층위.md` — §3.5.1.3, §3.5.2.1.1, §3.5.3.1.2, §3.5.3.2.1, §3.5.1.7 P3: 모두 일치. 책은 박서준의 명의상 역할을 독립적으로 여러 절에서 분석한다.

## 관련 (Related)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)
- [[../entities/people/park-seo-jun|박서준]] (ABOUT)
- [[../entities/people/lee-ji-young|이지영]] (ABOUT)
- [[../entities/people/kim-min-su|김민수]] (ABOUT)
- [[layer5-fabricated-warning-letter|layer5-fabricated-warning-letter — 허위 경고장]] (OPPOSES)
- [[layer5-predetermined-audit-conclusion|layer5-predetermined-audit-conclusion — 조사본부 결론 사전 결정]] (RELATED)
- [[../topics/whistleblower-protection-and-reform|Whistleblower Protection and Reform]] (ABOUT)

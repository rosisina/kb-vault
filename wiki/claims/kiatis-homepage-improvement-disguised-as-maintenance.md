---
lang: ko
title-ko: 국방부 홈페이지 개선 사업(2016.9.26~2017.4.24)은 과제카드에 '유지보수'로 둔갑하여 진행됨 — 보안 취약점 10대 항목 점검 사업의 정체 은폐
title-en: 국방부 홈페이지 개선 사업(2016.9.26~2017.4.24)은 과제카드에 '유지보수'로 둔갑하여 진행됨 — 보안 취약점 10대 항목 점검 사업의 정체 은폐
aliases:
  - FR-L1-HOMEPAGE-DISGUISED-MAINTENANCE
  - 국방부 홈페이지 개선 사업(2016.9.26~2017.4.24)은 과제카드에

layer: 1
secondary-layers: []
claimType: evidence_concealment
claimSubtype: project_identity_concealment
fracture-type: F-MS
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: [16]
evidence-ids: []
event-date: 2016-09-26

persons:
  - 한지훈
organizations:
  - DIDC
  - MND
has-verbatim: false

tags:
  - layer/L1
  - verdict/corroborated
  - strength/strong
  - type/evidence-concealment
  - source/book
  - fracture/F-MS
  - person/한지훈
  - org/DIDC
  - org/MND
  - has/record-nos
---
# 국방부 홈페이지 개선 사업(2016.9.26~2017.4.24)은 과제카드에 '유지보수'로 둔갑하여 진행됨 — 보안 취약점 10대 항목 점검 사업의 정체 은폐

**Source:** raw/01. book-beyond-cybersecurity/Korean/07-3-1-31-제1층위-ActiveX.md (book §3.1.1.7)
**Layer:** [[../layers/layer-1|Layer 1]] (primary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-HOMEPAGE-DISGUISED-MAINTENANCE"})
SET fr.layer = 1,
    fr.claimType = "evidence_concealment",
    fr.claimSubtype = "project_identity_concealment",
    fr.claimDesc = "The 국방부 홈페이지 개선 사업 (2016-09-26 to 2017-04-24, 7 months) was a security vulnerability remediation project centered on checking the '보안 취약점 10대 항목'. However, on the official task card (과제카드), it was disguised as '국방부 홈페이지 유지보수' — mere maintenance (Record No. 16/L1). The book explicitly notes this was likely a post-2016 DIDC hacking follow-up measure (각주 63). The timing (starting 10 days after the hacking incident disclosure) and the deliberate downgrading of a security project to 'maintenance' on paper constitute direct Layer 1 concealment evidence.",
    fr.counterHypothesis = "The '유지보수' classification on the task card was a legitimate administrative categorization reflecting the routine nature of security patching, not a deliberate concealment of the project's actual scope.",
    fr.falsificationCondition = "Production of the original project proposal or 사업계획서 showing that the project was always classified as 유지보수 from inception, with no evidence of deliberate reclassification from 개선사업 to 유지보수.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The 2016-09 to 2017-04 homepage security improvement project was disguised as 'maintenance' on the task card (Record No. 16), concealing a post-hacking security remediation effort.";
```

## 주장 (Claim)

### 한국어

2016-09-26부터 2017-04-24까지 7개월 동안 진행된 '국방부 홈페이지 개선 사업'은 **보안 취약점 10대 항목을 점검하는 것이 핵심 내용**이었으나, 과제카드에는 사업임에도 **'국방부 홈페이지 유지보수'로 둔갑**하여 진행되었다(기록 제00,016쪽).

- 사업 기간: 2016-09-26~2017-04-24 (7개월)
- 핵심 내용: 보안 취약점 10대 항목 점검
- 과제카드 기재: "국방부 홈페이지 유지보수" — 사업(개선)이 유지보수로 격하
- 시기적 맥락: 2016년 DIDC 해킹 사건 이후 10일 이내에 착수

책은 "2016년 DIDC 북한 해킹의 후속 조치 일환이리라"(각주 63)고 기술하며, 이 사업이 해킹 대응 조치였음을 시사한다. 보안 취약점 10대 항목 점검이라는 실질적 사업을 '유지보수'로 분류한 것은 2016년 해킹 사건의 심각성을 문서적으로 은폐하는 효과를 가진다.

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [진리성] Record No. 16 (L1)의 과제카드에서 "국방부 홈페이지 유지보수"로 기재된 사업의 실제 내용은 보안 취약점 10대 항목 점검이었다. The task card classification directly contradicts the project's actual security remediation scope.
- [타당성] '사업'과 '유지보수'는 국방 정보화 행정에서 법적·예산적으로 구분되는 범주이다. 사업을 유지보수로 분류하는 것은 감사·통제 대상에서 제외하는 효과를 가진다. Reclassifying a "project" as "maintenance" removes it from audit and oversight thresholds.
- [진리성] 사업 착수 시기(2016-09-26)가 DIDC 해킹 사건 직후인 점은 해킹 후속 조치로서의 성격을 강하게 시사한다. The project start date (10 days post-hacking) is a temporal anchor linking it to the incident response.
- [진실성] 한지훈이 이 과제카드를 확인하고 사업의 실체와 과제카드 기재 내용의 불일치를 적시한 것은 은폐 구조를 역추적한 결과이다. The discrepancy between task card and actual scope was discovered through the author's forensic tracing.

## 지지 증거 (Supporting Evidence)
- **Record No. 16** / L1 — 과제카드: "국방부 홈페이지 유지보수"로 기재된 보안 취약점 10대 항목 점검 사업
- **Book §3.1.1.7** — 각주 63: "2016년 DIDC 북한 해킹의 후속 조치 일환이리라"
- **Book §3.1.1.7** — 사업 기간 2016-09-26~2017-04-24 (7개월), 핵심 내용 보안 취약점 10대 항목

## 반대 가설 (Counter-hypothesis)
과제카드의 '유지보수' 분류는 해당 사업이 기존 홈페이지 인프라에 대한 정기 점검·패치의 성격이었기 때문에 행정적으로 올바른 분류였다. 보안 취약점 점검은 유지보수의 일부로서, 별도 사업으로 분류할 필요가 없었다.

이 반가설이 성립하려면: (1) 국방 정보화 행정에서 보안 취약점 10대 항목 점검이 '유지보수' 범주에 해당하는 사례 또는 규정이 존재해야 하고, (2) 7개월 기간의 보안 점검이 정기 유지보수 주기에 해당하는 기준이 있어야 하며, (3) 과제카드 작성 시점에 의도적 격하가 아닌 통상적 분류 기준이 적용되었음을 보여주는 기록이 있어야 한다.

## 반증 조건 (Falsification Condition)
1. **유지보수 분류 기준 문서** — 보안 취약점 10대 항목 점검이 '유지보수'로 분류되는 국방 정보화 행정 기준 또는 선례.
2. **원래 사업계획서** — 최초 기획 시점부터 '유지보수'로 분류되었음을 보여주는 사업계획서 또는 예산 문서.
3. **다른 유사 사업의 분류 사례** — 동일 시기 다른 보안 개선 사업이 동일하게 '유지보수'로 분류된 선례.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 7. 과제카드(기록 제16쪽)의 '유지보수' 기재와 실제 사업 내용(보안 취약점 10대 항목 점검)의 불일치는 문서적으로 확인된다. 시기적 맥락(2016년 해킹 직후)이 은폐 동기를 뒷받침한다. 진실성 점수가 다소 낮은 이유는 한지훈이 이 과제카드를 발견한 경위가 책에서 상세히 기술되지 않았기 때문이다.

## 미결 사항 (Open Questions)
- 기록 제16쪽은 L1 범위(1~810)에 해당하는 것이 확인된다. 단, 책에서는 "기록 제00016쪽"으로 5자리 표기되어 있어, 앞자리 0의 의미에 대한 확인이 필요하다.
- 보안 취약점 10대 항목의 구체적 내용이 과제카드에 기록되어 있는지, 아니면 별도 문서에만 존재하는지 확인 필요.

## 원전 확인 (Spot-check)
- `Korean/07-3-1-31-제1층위-ActiveX.md` — §3.1.1.7 line 82: "과제카드상 '유지보수'로 둔갑", "기록 제00016쪽", "보안 취약 10대 항목" 일치 확인.

## 관련 (Related)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[kiatis-homepage-co-managed-by-admin-ops-team]] — §3.1.1.7 행정정보 운영팀 공동 운용 (RELATED)
- [[kiatis-server-laundering-to-integrated-mail-server]] — §3.1.1.2 서버 세탁 (CORROBORATES)
- [[didc-sop-incident-report-mandatory]] — DIDC SOP 사고 보고 의무 (2016 해킹 대응 맥락) (RELATED)

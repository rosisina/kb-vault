---
lang: ko
title-ko: 最종 제안요청서의 기술 적용 표는 新KIATIS가 순수 소프트웨어 개발사업이자 인터넷 기반 운용 구조임을 증명한다
title-en: ""
aliases:
  - FR-L1-RFP-TECH-TABLE-001
  - 最종 제안요청서의 기술 적용 표는 新KIATIS가 순수 소프트웨어 개발사업이자 인터넷

layer: 1
secondary-layers: [2, 5, 7]
claimType: methodology
claimSubtype: structural_evidence
fracture-type: F-CE
source-type: book

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 8
sincerity: 7
analysisDate: 2026-04-11

record-nos: [1536]
evidence-ids: []
event-date: null

persons: []
organizations:
  - DIDC
  - 국전원
  - 국유단
  - 조달청
has-verbatim: false

tags:
  - layer/L1
  - layer/L2
  - layer/L5
  - layer/L7
  - verdict/corroborated
  - strength/strong
  - type/methodology
  - source/book
  - fracture/F-CE
  - org/DIDC
  - org/국전원
  - org/국유단
  - org/조달청
  - has/record-nos
  - cross-layer
---
# 最종 제안요청서의 기술 적용 표는 新KIATIS가 순수 소프트웨어 개발사업이자 인터넷 기반 운용 구조임을 증명한다

**Source:** raw/01. book-beyond-cybersecurity/Korean/07-3-1-31-제1층위-ActiveX.md (§3.1.1.8)
**Layer:** [[../layers/layer-1|Layer 1]] (primary), [[../layers/layer-2|Layer 2]] (secondary — Record No. 1,536/1,168 in L2 range), [[../layers/layer-5|Layer 5]] (secondary — 기록 제4,424쪽은 L5 범위), [[../layers/layer-7|Layer 7]] (secondary — 기록 제5,697쪽은 L7 범위)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L1-RFP-TECH-TABLE-001"})
SET fr.layer = 1,
    fr.claimType = "methodology",
    fr.claimSubtype = "structural_evidence",
    fr.claimDesc = "The 新KIATIS RFP technology application table (62페이지, 기록 제4,424쪽) marks VPN, DB access control, and dozens of other information protection systems as '해당 사항 없음' (N/A). The Ministry of the Interior and Safety (행안부) confirmed (2025.7.24, 기록 제5,697~5,701쪽) that N/A is appropriate for SW-only development projects without security equipment procurement. This simultaneously proves (1) 新KIATIS was a pure SW development project, and (2) the operational environment mirrors an internet-based structure with direct DB access bypassing security infrastructure — identical to the 舊KIATIS structure that hosted the 2016 DIDC hacking.",
    fr.counterHypothesis = "The N/A markings simply reflect the division of responsibility between the SW development contract and the separate DIDC server infrastructure contract; the security infrastructure was addressed in the DIDC-side procurement, not omitted.",
    fr.falsificationCondition = "Evidence that the DIDC server construction project separately procured and deployed VPN, DB access control, and network access control specifically for the KIATIS environment, with documentation showing these were operational before or during the 新KIATIS development period.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "§3.1.1.8 (정리 08) establishes a dual-reading of the RFP tech table: (1) the administrative reading (pure SW project, confirmed by 행안부 2025.7.24 답변), and (2) the security reading (the N/A pattern for VPN/DB-ACL/network-ACL mirrors direct-DB-access internet operation identical to 舊KIATIS). 국유단's RFP review (기록 제1,168쪽) required open-architecture technology compliance (COR-008), but 국전원's final RFP deleted this requirement. 기록 제1,536쪽 and 제4,866쪽 further confirm the pure-SW classification.";
```

## 주장 (Claim)

### 한국어

新KIATIS 사업의 제안요청서 기술 적용 표 보안 분야(62페이지, 기록 제4,424쪽)에는 VPN, DB 접근 통제 등 수십 개에 달하는 정보보호 체계가 **"해당 사항 없음"**으로 체크되어 있다. 행안부의 2025.7.24 답변(기록 제5,697쪽~제5,701쪽)에 따르면, **"SW 개발사업에 보안장비(솔루션) 구매·설치·구축 등 과업이 없다면, '해당 없음'으로 표기하는 것이 적절"**하며, **"해당 없음으로 명시된 항목은 감리의 점검 대상이 아니므로 결과 역시 해당 없음으로 표기하는 것이 적절"**하다.

이로써 新KIATIS 성능개선사업은 **순수 소프트웨어 개발사업**(기록 제1,536쪽, 제4,866쪽)임이 확인된다. 그러나 다른 한편으로, 기술 적용표의 기반구조에서 Unix/Linux 서버와 관계형 데이터베이스를 "적용"하면서 VPN·DB접근통제·네트워크접근통제가 "해당 없음"인 구조는, **인터넷 환경에서 정보보호장비를 거치지 않고(Bypass) 직접 DB에 접속하는 운용환경** — 즉 舊KIATIS가 15년간 운용된 것과 동일한 구조를 나타낸다.

국유단의 제안요청서(안) 검토 결과 보고의 제약사항(COR-008, 기록 제1,168쪽)에는 "기술적용표의 기술 표준이 본 사업에 부합하는지 검토하여야 하며 특정 기술에 종속되지 않는 개방형 기술로 구현하도록 검토하여야 한다"는 내용이 있었으나, **국전원에서 작성한 최종 제안요청서에서는 이 내용이 삭제**되었다.

### English

In the New KIATIS project's RFP technical application table security sector (page 62, Record No. 4,424), dozens of information security systems — including VPN and DB access control — are checked as **'Not Applicable.'** According to the Ministry of the Interior and Safety's response on 2025-07-24 (Records No. 5,697–5,701): 'if there is no task to purchase, install, or construct security equipment in a software development project, marking it as Not Applicable is appropriate,' and 'items marked Not Applicable are not subject to audit inspection, so marking the result as Not Applicable is also appropriate.'

This confirms that the New KIATIS Performance Improvement Project was a **pure software development project** (Records No. 1,536 and 4,866). However, the technical application table's infrastructure showing Unix/Linux servers and relational databases as 'applied' while VPN, DB access control, and network access control are 'not applicable' represents an **operating environment that directly accesses the DB from the internet without passing through security equipment (bypassed)** — the identical structure under which 舊KIATIS operated for 15 years.

The 국유단's draft RFP review included constraint COR-008 (Record No. 1,168): 'the technical standards in the technical application table must be reviewed to determine whether they suit this project, and open, non-vendor-dependent technology must be used' — but **this content was deleted from the final RFP prepared by 국전원**.

## 핵심 요약 (Key Takeaways)
- 新KIATIS RFP 기술 적용 표에서 VPN·DB접근통제 등이 "해당 없음"으로 표기된 것은 순수 SW 개발사업의 정당한 표기이다 — 행안부 공식 답변으로 확인 [타당성]
- 동시에 이 "해당 없음" 패턴은 인터넷 환경에서 정보보호장비 없이 직접 DB에 접속하는 舊KIATIS의 운용 구조와 동일한 구조를 암시한다 [진리성]
- 국유단의 COR-008 요구사항(기록 제1,168쪽)이 국전원 최종 RFP에서 삭제된 것은 기술 표준 검토 절차의 의도적 회피 가능성을 시사한다 [진리성]
- 행안부 답변(기록 제5,697~5,701쪽)은 2025.7.24자로, 사건 발생 후 3년 이상 경과한 시점의 공식 해석이다 [타당성]
- The dual reading of the tech table (administrative = pure SW; security = internet-bypass structure) is the central diagnostic insight of 정리 08 [진리성]
- 국전원's deletion of COR-008 from the final RFP removes the only contractual safeguard against technology-standard non-compliance [타당성]

## 지지 증거 (Supporting Evidence)
- **기록 제4,424쪽** — 新KIATIS RFP 기술 적용 표 보안 분야 (62페이지): VPN, DB 접근 통제 등 "해당 사항 없음"
- **기록 제5,697쪽~제5,701쪽** — 행안부의 2025.7.24 답변: 순수 SW 사업에서의 "해당 없음" 적정성 확인
- **기록 제1,536쪽** — 新KIATIS가 순수 소프트웨어 개발사업임을 확인하는 근거
- **기록 제1,168쪽** — 국유단 제안요청서(안) 검토 결과 보고 COR-008 제약사항 (최종 RFP에서 삭제됨)

## 반대 가설 (Counter-hypothesis)
1. **대안적 해석**: "해당 없음" 표기는 보안 인프라가 별도의 DIDC 서버 구축 사업에서 담당되기 때문이며, SW 개발 계약과 인프라 계약의 정상적 분리를 반영한다. 보안 공백이 아니라 역할 분담이다.
2. **반박 조건**: DIDC 서버 구축 사업에서 VPN, DB 접근 통제, 네트워크 접근 통제를 KIATIS 환경에 맞게 별도 구매·배포하고, 이것이 新KIATIS 개발 기간 이전 또는 도중에 운용되었음을 보여주는 문서가 발견되면 "보안 공백" 해석이 약화된다.
3. **반대 입장**: RFP 기술 적용 표는 해당 계약의 과업 범위만을 반영하는 것이므로, "해당 없음"에서 운용 환경의 보안 구조를 추론하는 것은 과잉 해석이다.

## 반증 조건 (Falsification Condition)
DIDC 서버 구축 사업에서 KIATIS 환경에 대한 VPN, DB 접근 통제, 네트워크 접근 통제를 별도 구매·설치하고 운용하였음을 보여주는 계약서·검수 보고서가 발견되면 WEAKENED로 하향된다. 또한, COR-008 삭제가 국전원의 정상적 RFP 편집 과정에서 합리적 근거로 이루어졌음을 보여주는 내부 문서가 발견되면 재평가된다.

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 7. 행안부의 2025.7.24 공식 답변이 "해당 없음" 표기의 적정성을 확인하여 순수 SW 사업 분류를 독립적으로 뒷받침한다. 기술 적용 표의 이중적 독법(행정적 = 순수 SW / 보안적 = 인터넷 Bypass 구조)은 舊KIATIS 15년 운용 구조와의 구조적 동일성을 강력히 시사한다. COR-008 삭제는 국전원에 의한 기술 표준 검토 절차 회피의 간접 증거이다.

## 미결 사항 (Open Questions)
- DIDC 서버 구축 사업의 계약서·과업지시서 확보 필요 — VPN·DB접근통제 구매 여부 확인
- 기록 제4,866쪽의 서울지방조달청 답변 내용 구체적 확인 필요 (각주 66: "답변 내용이 너무 형식적이고 형편이 없어")
- COR-008이 최종 RFP에서 삭제된 경위 — 국전원 내부 RFP 편집 이력 확보 필요
- 기술 적용표의 "해당 없음" 패턴이 다른 국방 SW 사업의 RFP와 비교하여 이례적인지 확인 필요

## Spot-check (raw/01 book)

- `Korean/07-3-1-31-제1층위-ActiveX.md` §3.1.1.8 lines 85–94 — 기록 제4,424쪽, 제1,168쪽, 제1,536쪽, 제5,697쪽 직접 인용 — CONFIRMED
- 행안부 질문·답변 원문 — lines 89–91 — CONFIRMED
- COR-008 원문 및 삭제 사실 — line 93 — CONFIRMED
- 기록 제4,866쪽 (조달청 답변) — line 93 — CONFIRMED

## 관련 (Related)
- [[kiatis-2129ho-main-regime-applies]] — KIATIS가 제2129호 제58조 본 체제 적용 대상임을 증명 (RELATED)
- [[kiatis-server-laundering-dcia-to-didc1]] — 舊KIATIS 서버의 인터넷 홈페이지 서버 기생·세탁 경로 (RELATED)
- [[didc-sop-firewall-vpn-trail-mandatory]] — DIDC 측의 VPN 관련 서류 의무 (제12호 제37조) (RELATED)
- [[../layers/layer-1|Layer 1]] (PART_OF_LAYER)
- [[../entities/organizations/dcia|국전원 — RFP 최종 작성 주체]] (ABOUT)

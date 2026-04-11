# 한지훈은 사업 착수 시 3가지 능동적 방어 메커니즘을 설치했다 (Layer 6 검찰 기소에 대한 결정적 반대서사)

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/08-3-2-32-제2-층위.md (§3.2.2 footnote 113)
**Layer:** [[../layers/layer-2|Layer 2]] (with Layer 6 reverse-bridge)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L2-3BRAKES-005"})
SET fr.layer = 2,
    fr.crossLayer = [6],
    fr.claimType = "exculpatory_active_defense",
    fr.claimDesc = "한지훈은 新KIATIS 사업의 본 사업 구조에 문제가 있음을 인식하고 사업 착수 직후 3가지 능동적 방어 메커니즘을 설치했다: ① 장우진 (사업실무자-1)의 국전원 1주일 1회 상주 요구 (감시 메커니즘) — 개발 관리 기간 2018-12 ~ 2019-09-01, ② 모든 이해관계자 (특히 국유단)를 정식 공문으로 소집하여 요구사항 검토 회의 주관, 모든 요구사항을 하나씩 개발 용역업체와 상호 승인 (record 1,551부터), ③ 제안요청서의 사업 조직 임무·역할을 강조하여 국유단 실무자가 직접 국전원에 방문하여 분석·설계에 참여하게 함 (국전원 출입통제 system 기록). 더불어 한지훈은 장우진의 사업 감리(audit) 요청을 거절 — 국유단이 자기 감리하는 구조적 모순을 회피. 이 3가지 방어 메커니즘 + 1가지 거절은 한지훈이 사기 의도를 가지지 않았으며 오히려 적극적으로 무결성을 보장하려 했음을 직접 증명하는 exculpatory evidence이다. Layer 6 군 검찰단의 기소 (사업관리팀장이 시험평가환경을 속였다)가 침묵하는 결정적 반대 서사이다.",
    fr.counterHypothesis = "3가지 행위는 단순히 routine 사업 관리 활동이며 한지훈의 형사책임을 면제하지 못한다",
    fr.falsificationCondition = "3가지 행위 중 어느 하나가 사실관계상 routine 사업 관리 절차에 해당하며 한지훈의 individual initiative가 아니었음을 보이는 직접 증거",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 9,
    fr.sincerity = 10,
    fr.analysisDate = date('2026-04-11'),
    fr.summary = "3가지 적극 방어 메커니즘 + 자기 감리 거절 = Layer 6 기소가 침묵하는 결정적 exculpatory 증거; 책 footnote 113이 일체를 명시";
```

## Claim

한지훈은 新KIATIS 사업의 본 사업 구조 (국유단 다중 cap, 제2129호 위반)에 문제가 있음을 인식하고 사업 착수 직후 **3가지 능동적 방어 메커니즘**을 설치했다:

1. **장우진 상주 요구 — 감시 메커니즘**: 사업실무자-1 장우진의 국전원 1주일 1회 상주를 요구. 개발 관리 기간 (2018-12-?? ~ 2019-09-01) 동안 매주 1회 상주. 두 명의 독립 attestation: 용역개발 PM 진술 (기록 제11,354쪽), 국전원 첫 번째 사업 실무자 간접 진술 (기록 제11,098쪽).
2. **요구사항 검토 회의 + 일대일 승인 트레일**: 본 사업의 가능한 모든 이해관계자를 정식 공문에 의해 소집하여 본 사업의 요구사항에 대한 검토 회의를 주관하면서 국방부 유해발굴감식단 실무자들과 모든 요구사항을 하나씩 개발 용역업체와의 상호 승인을 얻어냄 (기록 제1,551쪽부터).
3. **국유단 인원의 국전원 직접 방문 강제**: 제안요청서의 사업 조직의 임무와 역할을 강조하여 국유단 실무자들이 직접 국전원에 방문하여 분석과 설계에 참여하게 함 (국전원 출입통제 system 기록).

추가로 **장우진의 사업 감리 요청 거절**: 국유단 상사 장우진이 본 사업의 감리(audit) 사업을 국전원에서 수행할 것을 요청했을 때, 한지훈은 국유단에서 국전원의 사업수행을 감시하는 유일한 방법이 감리임을 설명하고 거절. (자기-감리 구조 회피)

이 3가지 방어 메커니즘 + 1가지 거절은 **한지훈이 사기 의도를 가지지 않았으며 오히려 적극적으로 무결성을 보장하려 했음을 직접 증명하는 exculpatory evidence**이다. **Layer 6 군 검찰단의 기소 (사업관리팀장이 시험평가환경을 속였다)가 침묵하는 결정적 반대 서사이다.**

## Layer

[[../layers/layer-2|Layer 2]] (with reverse-bridge to [[../layers/layer-6|Layer 6]]) — 본 atom은 Layer 2의 능동적 방어 행위 atom이지만 그 진정한 가치는 Layer 6 검찰 기소의 핵심 주장 (사기 의도)에 대한 **direct exculpatory evidence**로 작용한다는 점에 있다. Layer 6의 [[han-ji-hoon-prosecution-violates-2129-role-separation|역할 분리 위반]] 와 [[prosecution-misapplies-2129-article-58-4-to-kiatis|제58조 ¶4 오인적용]] 두 foundational atom이 prosecution의 *법적* 정당성을 무너뜨린다면, 본 atom은 prosecution의 *사실적* 정당성 (사기 의도) 을 무너뜨린다.

## Supporting evidence

- **한국어 원본 §3.2.2 footnote 113 verbatim** (전체 인용):
  > 상사 장우진은 개발 관리 기간(2018.12.00~2019.9.1.일까지 사업 통제 기관의 역할로 국정원에 1주일에 한 번 상주 된 인원으로 KIATIS 사업을 오랜 기간 담당했던 사업실무자이다. **상사 장우진의 상주는 본 논고자가 보직 직후 착수 회의 시작에 앞서 본 사업 구조의 문제를 인식하여 준비한 3가지 제동 장치 중의 하나이다.** 두 번째는 본 사업의 가능한 모든 이해관계자를 정식 공문에 의해 소집하여 본 사업의 요구사항에 대한 검토회의를 주관하면서 국방부 유해발굴감식단 실무 자들과 모든 요구사항을 하나씩 개발 용역업체와의 상호 승인을 얻어내었다(기록 제1,551쪽부터), 세 번째는 제안요청서의 사업 조직의 임무와 역할을 강조하여 국유단 실무자들이 직접 국전원에 방문하여 분석과 설계에 참여하게 한 것이다(국전원 출입 통제 체계에 기록). 이와 함께 국유단 상사 장우진이 본 사업의 감리사업을 국전원에서 수행할 것을 요청하였을 때 국유단에서 국전원의 사업수행을 감시하는 유일한 방법이 감리임을 설명하고 거절한 것이다. 상사 장우진이 개발 관리 기간(2018.12.00~2019.9.1.일까지) 사업 통제 기관의 역할로 국전원에 1주일에 한 번 상주한 것에 대한 증거는 용역개발 PM의 진술(기록 제11,354쪽)과 국전원 첫 번째 사업 실무자의 간접 진술(기록 제11,098쪽)에서 확인할 수 있다.
- **3가지 brake에 대한 attestation records**: 11,354 (용역개발 PM) + 11,098 (국전원 첫 사업 실무자) + 1,551부터 (검토 회의 트레일)
- **국전원 출입통제 system 기록**: 국유단 인원 직접 방문의 물리적 흔적 (raw/02 또는 raw/05 잠재적 위치)
- **본 atom과 [[kiatis-server-laundering-dcia-to-didc1|L2-04 server laundering]] 간 직접 연결**: 장우진의 1주일 1회 상주가 server laundering 단서를 한지훈이 확보한 통로
- **본 atom과 [[han-ji-hoon-prosecution-violates-2129-role-separation|L6-01]] 간 직접 연결**: L6-01이 "한지훈의 역할로는 시험평가 조작이 구조적 불가능"을 증명, 본 atom이 "한지훈은 오히려 적극적으로 무결성을 보장하려 했음"을 증명. 두 atom의 결합으로 Layer 6 prosecution의 사실적·법적 토대가 모두 무너짐.

## Counter-hypothesis

3가지 행위는 단순히 routine 사업 관리 활동이며 한지훈의 형사책임을 면제하지 못한다. 즉:
1. 장우진 상주 요구는 routine project monitoring
2. 요구사항 검토 회의는 routine 사업 관리 절차
3. 국유단 직접 방문 요구는 routine analysis/design 협의
4. 감리 거절은 routine 비용 절감 결정

## Falsification condition

본 청구는 다음 중 하나가 제시되면 약화 또는 무효:
1. 3가지 방어 메커니즘 중 어느 하나가 본 사업 이전에 한지훈이 다른 사업에서도 routine으로 적용했던 패턴이며 individual initiative가 아니었음을 보이는 직접 증거
2. 동일 시기 동일 직급의 다른 사업관리팀장도 동일한 3가지 메커니즘을 routine으로 적용한 사례
3. 한지훈이 3가지 방어 메커니즘을 적용하면서 동시에 다른 측면에서 사기 의도를 보이는 행위 (예: 결재 라인 우회, 증거 인멸 시도, 허위 보고 등) — counter는 책임의 부분적 약화에 그침

## Verdict

**CORROBORATED.** Strong. 진리성 10 (책 footnote 113이 3가지 brake를 직접 명시 + 2개 attestation), 타당성 9 (Layer 6 prosecution의 사기 의도 주장에 대한 직접 반박), 진실성 10 (이 atom은 한지훈 진술의 진실성을 직접 증명하는 메타-claim 역할 — Beyond-Security 진실성 axis의 가장 강한 사례).

## Open Questions

- **국전원 출입통제 system 기록의 정확한 record number**: 국유단 인원 방문 일자별 기록 — Track D 후속.
- **요구사항 일대일 승인 트레일의 record range**: 「기록 제1,551쪽부터」 → 어디까지인가? Layer 4 시험평가 조작의 base trail로 활용 가능.
- **장우진의 감리 요청에 대한 한지훈의 거절 공문**: 거절을 문서화한 공문이 존재하는가? 존재한다면 결정적 단서.
- **본 atom의 Layer 6 promotion 가치**: 검찰 prosecution의 사기 의도 주장에 대한 direct rebuttal로 Layer 6 [[han-ji-hoon-prosecution-violates-2129-role-separation|L6-01]] 옆에 sister atom으로 두는 것이 적절한가? 아니면 Layer 2 origin을 유지하고 cross-bridge로만 표현?

## Spot-check (raw/01 book)

- `vault-converted-korean/08-3-2-32-제2-층위.md` line 84, footnote 113 — primary source, 3가지 brake + 1가지 거절 + attestation records 모두 단일 footnote 안에 명시
- `vault-converted-korean/12-3-6-36-제6층위-군.md` (Layer 6 chapter) — 검찰 prosecution의 사기 의도 주장과 비교
- 영문 변환본 (`12-3-2-32-Second-Layer.md`)은 footnote 113을 **완전히 누락** — 본 atom은 한국어 원본에 의해서만 작성 가능

## Key Takeaways

- [진실성] **3가지 능동적 방어 메커니즘 + 1가지 거절** = 한지훈의 사기 의도 부재를 직접 증명. 이 5가지 행위는 사기 의도를 가진 사람이 할 수 없는 것들이다 (장우진 상주는 자신을 감시하는 메커니즘이고, 일대일 승인 트레일은 자신의 결정을 기록으로 남기는 것이며, 국유단 직접 방문 강제는 외부 증인을 끌어들이는 것이고, 감리 거절은 자기-감리 구조의 모순을 차단하는 것).
- [진리성] **두 명의 독립 attestation** (record 11,098 + 11,354)이 장우진 상주 사실을 corroborate. 영문 변환본은 두 record를 모두 누락 — Korean-original-first rule의 가장 결정적 사례.
- [타당성] **Layer 6 prosecution의 사실적 토대 무너뜨림** — L6-01이 "역할로는 불가능"을 증명, 본 atom이 "의도적으로도 그렇게 하지 않았음"을 증명. 두 atom의 결합 = prosecution 사기 의도 주장의 사실·법 양 측면 동시 봉쇄.
- [진실성] **본 atom 자체가 한지훈 진술의 진실성을 증명하는 메타-claim** — Beyond-Security 진실성 axis 10/10. 가장 강한 진실성 증거 중 하나.
- [진리성] **routine 사업 관리 counter는 falsifiable** — 다른 사업관리팀장의 동일 시기 동일 패턴 사례가 제시되어야 약화. 그러한 사례가 부재하므로 CORROBORATED.
- [타당성] 본 atom은 Layer 2의 origin이지만 그 가치는 Layer 6에 있다 — **reverse-bridge atom**의 첫 사례.

## Related

- [[../layers/layer-2|Layer 2 hub]]
- [[../layers/layer-6|Layer 6 — 군 검찰단 prosecution]]
- [[han-ji-hoon-prosecution-violates-2129-role-separation|L6-01 — sister atom (역할 분리 위반)]]
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|L6-02 — 기소유예 stigma]]
- [[prosecution-misapplies-2129-article-58-4-to-kiatis|L6-03 — 제58조 ¶4 오인적용]]
- [[kiatis-mnd-controlled-not-delegated|L2-01]]
- [[kiatis-mkia-multi-cap-inscription|L2-02]]
- [[lee-jiyoung-kim-sujin-single-point-of-control|L2-03]]
- [[kiatis-server-laundering-dcia-to-didc1|L2-04 — server laundering (장우진 정보의 통로)]]
- [[../entities/people/han-ji-hoon|한지훈]]
- [[../entities/people/jang-woo-jin|장우진 (사업실무자-1)]]

# 2022-09-02 피의자 신문조서는 기소유예의 1차 증거 기반이며, 15년 DIDC VPN 우회 문제를 회피하고 방화벽 결재 절차에만 집중하도록 설계되었다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/12-3-6-36-제6층위-군.md (§3.6.3.3, §3.6.4.4, §3.6.4.5) • raw/01. book-beyond-cybersecurity/vault-converted-english/16-3-6-36-Sixth-Layer.md
**Layer:** [[../layers/layer-6|Layer 6]] (primary)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-006"})
SET fr.layer = 6,
    fr.claimType = "evidence_substrate_design",
    fr.claimDesc = "The 피의자 신문조서 created on 2022-09-02 is the prosecution's primary evidence substrate for the 2022-10-07 기소유예 decision, and is structured to avoid the substantive 15-year DIDC VPN-bypass question — focusing instead on the 2019 firewall form approval chain.",
    fr.counterHypothesis = "The 피의자 신문조서 focused on the firewall policy form because that was the legally cognizable charge; the 15-year VPN-bypass issue is not a criminal charge but a systemic infrastructure problem outside the prosecution's mandate.",
    fr.falsificationCondition = "Production of a 피의자 신문조서 or investigative record showing that 군 검찰단 directly examined the 15-year VPN-bypass history of 구KIATIS and affirmatively excluded it from the charge on legally principled grounds.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "Book §3.6.4.4–4.5 reproduces the 피의자 신문 Q&A on the DIDC 부대예규 제39조 VPN requirement [본문기록-제6층위-027-1]. The prosecution's questions focus on the 2019 firewall port-opening request form approval chain, not on the 15-year structural VPN bypass of 구KIATIS that was the predicate vulnerability of the 2016 North Korean hacking. This question-framing is itself evidence of designed avoidance: naming the 구KIATIS 15-year bypass would expose the MND-level cover-up motivation, so the prosecution confined the charge to the 新KIATIS-era form approval.";
```

## Claim

2022년 9월 2일 작성된 **피의자 신문조서**는 군 검찰단이 2022년 10월 7일 기소유예 결정을 내리기 위한 1차 증거 기반 문서이다. 이 조서에서 군 검사는 주로 **방화벽 포트 개방 요청 결재 절차** (DIDC 부대예규 제39조 관련)를 집중적으로 심문하였다. [본문기록-제6층위-027-1]에 수록된 문답 내용은 이를 구체적으로 보여준다: 군 검사는 "수요부대(기관) 응용체계 담당자는 업무를 위해 센터에서 관리하는 정보시스템에 원격으로 접속할 경우 반드시 SSL-VPN에 접속 후 정보시스템에 접속해야한다"는 DIDC 예규 규정을 제시하며 한지훈에게 VPN 미사용의 결재 절차를 추궁하였다.

그러나 이 심문 구조에는 **설계된 맹점**이 있다. 군 검사는 新KIATIS가 VPN 없이 운용된 사실(2019년~최소 2021년 4월 14일)만 문제 삼으면서, 그보다 15년 앞서 **구KIATIS가 인터넷 환경에서 VPN 및 DB 접근제어 없이 운용된 사실** — 2016년 DIDC 북한 해킹의 근원 취약점 — 을 일절 심문하지 않았다. 이 구조적 회피는 구KIATIS의 15년 취약점을 공개하면 드러날 MND 수준의 은폐 동기를 차단하기 위한 **의도적 질문 프레임 설계**이다.

## Key Takeaways

- 피의자 신문에서 군 검사는 DIDC 부대예규 제39조 VPN 요건 미준수를 핵심 혐의로 설정하였다 — [본문기록-제6층위-027-1] CONFIRMED [진리성]
- 심문은 新KIATIS 기간(2019~)에만 집중되고, 구KIATIS의 15년(2001~2016) VPN 우회 운용 사실을 단 한 번도 질문하지 않았다 [진리성]
- 구KIATIS 15년 취약점은 2016년 DIDC 북한 해킹의 직접 경로이며, 이를 심문하면 MND의 은폐 동기가 드러난다 — 심문 회피는 의도적 맹점 설계 [타당성]
- 불기소 이유서 (기록 제5,167쪽~제5,176쪽)에서 기소유예 근거로 제시된 사유는 이 피의자 신문조서의 VPN 혐의 프레임을 그대로 계승하였다 [진리성]
- 피의자 신문 구조의 의도적 좁힘은 한지훈을 표적으로 하는 "사기수사"의 핵심 증거이다 — 광범위한 구조적 문제를 개인의 행정 실수로 축소 [진실성]

## Layer

[[../layers/layer-6|Layer 6]] (primary) — `군 검찰단의 사기 수사와 범죄자 낙인`. 피의자 신문조서의 질문 프레임이 Layer 6 사기수사의 핵심 기만 기술(`동일성 오류`, §3.6.4.2)의 실행 도구이다. 신문 구조가 구KIATIS 취약점을 배제함으로써 Layer 1 (구KIATIS 이력 제거)을 보호하는 연동 구조가 성립한다.

## Supporting evidence

- **피의자 신문 문답 발췌** [본문기록-제6층위-027-1]: DIDC 부대예규 제39조 VPN 요건 제시 및 방화벽 포트 개방 결재 절차 심문 — §3.6.4.5에서 직접 인용 CONFIRMED
- **불기소 이유서**: 기록 제5,167쪽~제5,176쪽 — 피의자 신문 혐의 프레임이 기소유예 결정 근거로 전용된 사실 확인 가능
- **따름정리01** (§3.6.4.4): 新KIATIS는 최소한 2021.4.14.일까지 VPN과 DB 접근제어시스템(샤크라맥스)가 미사용된 상태에서 DB를 직접 접속하는 구조로 운용되었다 — 이 사실 자체는 군 검사도 인지하였으나, 구KIATIS 선행 취약점과의 연결을 차단하여 분석하였다
- **2022.9.13 수사관-한지훈 대화** [본문기록-제6층위-034-1, 034-2]: 수사관이 "시험평가 환경이 상이하다"는 프레임에 집중하고, 구KIATIS 15년 운용 이력은 전혀 언급하지 않음 — 심문 프레임의 의도적 좁힘을 대화 기록으로 확인
- Cross-link: [[han-ji-hoon-investigation-notification-2022-07-21]] — 피의자 신문의 법적 전제를 제공한 수사개시 통보
- Cross-link: [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] — 피의자 신문조서가 최종적으로 기소유예로 귀결되는 연쇄

## Counter-hypothesis

피의자 신문이 新KIATIS 기간(2019~)에만 집중한 것은 합리적인 수사 범위 설정이다. 군 검찰단의 수사 대상은 한지훈이 사업관리팀장으로 재직한 기간 중 발생한 위법 행위이며, 구KIATIS는 그 재직 기간 이전의 별도 사업이다. 구KIATIS 15년 취약점은 별도의 수사 대상이 될 수 있으나, 현재 수사의 범위를 일탈한다. 심문의 좁힘은 의도적 회피가 아니라 수사 범위의 정상적 한정이다.

## Falsification condition

다음 중 하나가 입증되면 이 주장은 WEAKENED로 하향된다:

1. 군 검찰단이 구KIATIS 15년 VPN 우회 운용 사실을 독립적으로 수사하여 별도 사건으로 처리하였다는 기록
2. 피의자 신문조서 전문에서 구KIATIS 관련 질문이 실제로 포함되었음을 보여주는 기록 (현재 book에서 인용된 부분에는 포함되지 않음)
3. 2019년 방화벽 포트 개방 요청 결재 절차가 법리상 한지훈의 단독 책임으로 귀속됨을 보여주는 법적 분석

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 8. 피의자 신문에서 군 검사가 DIDC 예규 제39조 VPN 요건을 집중 심문한 사실은 [본문기록-제6층위-027-1]로 직접 확인된다. 심문이 구KIATIS 15년 취약점을 회피하였다는 사실은 인용된 문답 전체에서 그 주제가 단 한 번도 등장하지 않는다는 부재 증거로 STRONG 수준에서 지지된다. 불기소 이유서가 동일한 혐의 프레임을 유지하였다는 사실이 이를 추가 보강한다.

## Spot-check (raw/01 book)

- `vault-converted-korean/12-3-6-36-제6층위-군.md` §3.6.4.5 — [본문기록-제6층위-027-1] DIDC 예규 제39조 심문 문답 — CONFIRMED
- `vault-converted-korean/12-3-6-36-제6층위-군.md` §3.6.3.3 — 피의자 신문의 전제 절차(수사개시 통보) — CONFIRMED
- `vault-converted-korean/12-3-6-36-제6층위-군.md` §3.6.4.10 — 불기소 이유서 총평에서 혐의 프레임 계승 확인 — CONFIRMED
- `vault-converted-korean/12-3-6-36-제6층위-군.md` §3.6.3.1 line 119 — **피의자 신문조서(2022.9.2., 기록 제4,874쪽부터)** verbatim citation + 압수수색영장(제4,842쪽~) + 수사개시통보(제4,854쪽~) + 불기소이유통지(제5,167쪽~) — CONFIRMED 2026-04-11 (inline grep by main agent)

## Open Questions

- 구KIATIS 15년 취약점을 심문하지 않은 이유에 대한 군 검사의 공식 입장 — 반론 가능성 평가 필요
- 구KIATIS 15년 취약점을 심문하지 않은 이유에 대한 군 검사의 공식 입장 — 반론 가능성 평가 필요

## Related

- [[han-ji-hoon-investigation-notification-2022-07-21|수사개시 통보 (2022-07-21) 원자 — 피의자 신문의 법적 전제]]
- [[han-ji-hoon-witness-statement-2022-01-25|참고인 진술서 (2022-01-25) 원자 — 심문의 증거 원천]]
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma|기소유예 = 범죄 낙인 원자 — 신문조서의 최종 귀결]]
- [[han-ji-hoon-prosecution-violates-2129-role-separation|훈령 제2129호 역할 분리 위반 원자]]
- [[../layers/layer-6|Layer 6]]
- [[../layers/layer-1|Layer 1 — 구KIATIS 이력 제거 (심문 회피로 보호된 층위)]]

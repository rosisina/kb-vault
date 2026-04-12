# 최동욱 변호사는 한지훈의 변호인이 아니라 군검찰의 대리인으로서 이중적 역할을 수행했다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md (§3.5.2.3.7)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-6|Layer 6]] (secondary — 군검찰 대리 역할), [[../layers/layer-7|Layer 7]] (secondary — 기록 제11,234 / 제11,252는 L7 범위)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-007"})
SET fr.layer = 5,
    fr.claimType = "conflict_of_interest_dual_agency",
    fr.claimDesc = "변호사 최동욱은 한지훈의 변호인으로 선임되었으나, 실제로는 군검찰의 대리인 역할을 수행하였다. 피의자 신문 조서와 일치하는 답변 요청서를 한지훈에게 보냈고, 경북대 동문 네트워크(이근태)를 은폐하였으며, 한지훈을 '비정상'으로 진단하려 시도하였다.",
    fr.counterHypothesis = "최동욱은 성실한 변호 활동의 일환으로 군검찰 질문에 대비하기 위해 답변서를 준비시킨 것이며, 이근태와의 관계 부인은 기억 오류에 불과하다.",
    fr.falsificationCondition = "최동욱이 군검찰의 질문지를 사전에 입수할 수 없었다는 증거, 또는 답변 요청서 내용이 피의자 신문 조서와 실질적으로 상이하다는 증거가 제시되면 약화된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "최동욱 변호사가 한지훈에게 보낸 두 가지 답변 요청서(기록 제4,352; 제4,542)는 제2의 피의자 신문 조서 질문지와 일치하며, 경북대 동문 이근태와의 관계를 거짓 부인하고, 한지훈을 '비정상'으로 프레이밍하려 한 사실은 이중 대리(dual agency)의 직접 증거이다.";
```

## Claim

변호사 최동욱은 표면적으로는 한지훈의 변호인으로서 대리하였으나, 실제로는 국방부 검찰단의 대리 역할을 수행하였다. 이는 다음 세 가지 증거에 의해 뒷받침된다.

**첫째, 피의자 신문 조서와 일치하는 답변 요청서 작성.** 최동욱이 한지훈에게 보내온 두 가지 답변 요청서(기록 제4,352쪽부터, 기록 제4,542쪽부터)는 `"마치 제2의 피의자 신문 조서의 질문지와 일치하는 내용을 담고 있다."` 한지훈이 국방부 검찰단의 범죄 수사와 `"관련이 없음"`을 지속적으로 피력하였으나, 최동욱은 오히려 `"군검찰단의 편에서서 피의자 신문 시간의 연장과 2차 신문의 필요성을 본인에게 설득시키려고 노력하였다."`

**둘째, 경북대 동문 네트워크 은폐.** 한지훈이 `"제가 분명히 얘기하는데 박성호가 경북대예요. 이근태도 경북대고"`라고 말하자, 최동욱은 `"난 몰라요."`라고 거짓말을 했다. 그러나 수사 막바지에 이근태는 `"변호사 최동욱을 안다. 심지어는 이 문제로 만났다"`라고 폭로했다. 변호사가 의뢰인에게 거짓말을 한 것은 변호사 윤리의 근본적 위반이자 이해 상충의 명백한 증거이다.

**셋째, 한지훈을 '비정상'으로 프레이밍 시도.** 최동욱은 `"지금 판단하고 이런 것은 이런 스트레스 때문에 정상적이지 않다"`라고 말했다(기록 제11,252쪽부터). 한지훈은 `"정상적이지 않은 것은 제가 아니예요"`라고 반박하고, `"32년 된 사람이 지금 한 거를(독방 생활) 깜짝 놀랐지 않습니까. 장로님도 그런데 조치를 안 하시잖아요"`라며 최동욱의 무조치를 지적했다.

최동욱의 최소한의 형식적 협조 태도도 증거이다: `"세 시간 정도 안에서 협조할께요 방법은 오늘 미리 애기하든 그날 현장에서 하든 그거는 제가 하도록 할께요"`(기록 제11,234쪽).

## Key Takeaways

- [진리성] 최동욱이 한지훈에게 보낸 두 답변 요청서(기록 제4,352쪽; 제4,542쪽)가 피의자 신문 조서 질문지와 일치한다는 사실은 이중 대리의 물적 증거이다.
  - The two answer-request documents (Record No. 4,352; 4,542) sent by lawyer 최동욱 to 한지훈 match the content of a second suspect interrogation questionnaire — direct material evidence of dual agency.
- [진리성] 이근태가 `"최동욱을 안다, 이 문제로 만났다"`고 폭로함으로써 최동욱의 관계 부인이 거짓임이 확인되었다.
  - 이근태's admission that he knew 최동욱 and "even met him about this matter" confirms 최동욱's denial was false.
- [타당성] 변호사가 의뢰인에게 이해 상충 관계인의 존재를 거짓 부인하는 것은 변호사 윤리 위반이다.
  - A lawyer falsely denying a conflict-of-interest relationship to a client constitutes a fundamental breach of legal ethics.
- [진실성] 최동욱이 한지훈을 `"비정상"`으로 진단하려 시도한 것은 가스라이팅 전술로서, 한지훈의 주장 신뢰도를 훼손하려는 목적이 있었다.
  - 최동욱's attempt to label 한지훈 as "abnormal" was a gaslighting tactic designed to undermine the credibility of his claims.
- [진실성] 32년 경력 중령의 독방 생활에 대해 아무런 조치도 취하지 않은 최동욱의 무조치 자체가 공모 참여의 정황 증거이다.
  - 최동욱's inaction in the face of a 32-year lieutenant colonel's solitary confinement is circumstantial evidence of complicit participation.

## Supporting evidence

- **기록 제4,352쪽부터** — 최동욱이 한지훈에게 보낸 제1차 답변 요청서 (피의자 신문 조서 질문지와 내용 일치)
- **기록 제4,542쪽부터** — 최동욱이 한지훈에게 보낸 제2차 답변 요청서 (피의자 신문 조서 질문지와 내용 일치)
- **기록 제11,234쪽** — 최동욱의 최소한의 형식적 협조 발언 (`"세 시간 정도 안에서 협조할께요"`)
- **기록 제11,252쪽부터** — 최동욱의 한지훈 `"비정상"` 프레이밍 시도 및 한지훈의 반박

## Counter-hypothesis

**(a) 대안적 해석:** 최동욱은 성실한 변호사로서, 군검찰의 질문에 사전 대비하기 위해 답변서를 준비시킨 것이며, 이근태와의 관계 부인은 실제 기억 오류에 불과하다. `"비정상"` 발언은 의뢰인의 정신 건강을 진심으로 염려한 것이다.

**(b) 반박 조건:** 최동욱이 군검찰의 피의자 신문 질문지를 사전에 입수할 수 없는 위치에 있었다는 증거, 또는 답변 요청서와 피의자 신문 조서의 내용이 실질적으로 상이하다는 비교 분석 결과가 제시되면 이 주장은 약화된다.

**(c) 방어 가능한 반대 입장:** 형사 변호에서 검찰 질문을 예측하여 의뢰인에게 답변 연습을 시키는 것은 일반적 변호 관행이며, 이를 이중 대리로 해석하는 것은 과도할 수 있다. 다만 이 경우, 한지훈이 수사 관련 없음을 피력하는 상황에서 오히려 피의자 신문 연장을 설득한 것은 일반적 변호 관행의 범위를 벗어난다.

## Falsification condition

최동욱이 군검찰로부터 사전에 피의자 신문 질문지를 제공받지 않았다는 증거(커뮤니케이션 로그, 수임 기록 등)가 확보되거나, 답변 요청서의 내용이 피의자 신문 질문지와 실질적으로 상이함이 비교 분석에 의해 증명되면 이 주장은 약화된다. 또한 이근태가 `"최동욱을 안다, 만났다"`는 폭로를 번복하는 경우에도 핵심 증거가 약화된다.

## Verdict

**CORROBORATED (strong)**
- 진리성 (Truthfulness): **9/10** — 물적 증거(답변 요청서 2건)와 이근태의 자백이 핵심
- 타당성 (Validity): **8/10** — 변호사 윤리 위반은 법적 규범에 의해 판단 가능
- 진실성 (Sincerity): **10/10** — 한지훈의 독방 경험과 가스라이팅에 대한 피해 구조가 직접 증언으로 기록됨

## Open Questions

- 최동욱의 답변 요청서 2건의 전문(全文)과 실제 피의자 신문 조서 질문지의 정밀 대조가 필요하다. 현재는 책의 서술에 기반한 일치성 주장이며, 원본 대조는 미완.
- 최동욱과 이근태의 면담 시점·내용에 대한 추가 기록이 확인되면 공모 구조의 구체적 메커니즘을 밝힐 수 있다.
- 최동욱의 2016년 육군본부 법무관리관(장군) 시절 DIDC 해킹 사건 관여 정도에 대한 추가 조사가 필요하다.

## Spot-check (raw/01 book)

- §3.5.2.3.7 (lines 236–239): 최동욱의 이중적 역할 본문
- §3.5.1.4 (lines 61–63): 경북대 카르텔과 최동욱-이근태 관계 최초 언급
- §3.5.2.1.3 (lines 125–128): 경북대 네트워크와 이해 상충 상세

## Related

- [[layer5-park-seojun-nominal-complainant]] — 박서준 명목상 신고자 atom (최동욱의 대리 역할과 동일한 조직적 프레이밍 구조)
- [[layer5-predetermined-audit-conclusion]] — 사전 결론 결정 atom (최동욱이 이 결론의 실현에 기여)
- [[layer5-six-month-isolation-human-rights]] — 6개월 격리 인권 침해 atom (최동욱이 이를 목격하고도 무조치)
- [[han-ji-hoon-kiso-yuye-is-criminal-stigma]] — 기소유예 atom (최동욱의 이중 대리가 기소유예 결과에 기여)

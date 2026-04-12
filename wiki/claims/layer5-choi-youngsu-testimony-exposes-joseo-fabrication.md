# 최영수의 군검찰 증언은 조서 조작의 세 가지 체계적 기법을 폭로한다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md (§3.5.2.1.5)
**Layer:** [[../layers/layer-5|Layer 5]] (primary), [[../layers/layer-6|Layer 6]] (secondary — 군검찰 조서 조작은 L6 수사 사기의 직접 증거)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-009"})
SET fr.layer = 5,
    fr.claimType = "interrogation_record_fabrication",
    fr.claimDesc = "전임 행정정보화과장 최영수 서기관의 증언은 군검찰 조사 시 조서 조작의 세 가지 체계적 기법(진술서 미제공, 반박 무시 및 질문화, 예스/노 축소)을 폭로한다. 최영수는 5시간 동안 반박했으나 군검찰은 전혀 반영하지 않았다.",
    fr.counterHypothesis = "군검찰의 조서 작성은 표준적인 수사 절차를 따른 것이며, 최영수의 반박이 기록되지 않은 것은 해당 반박이 사안과 무관했기 때문이다.",
    fr.falsificationCondition = "군검찰이 최영수의 진술서 사본을 본인에게 제공했다는 기록, 또는 조서에 최영수의 반박이 실질적으로 기재되어 있다는 조서 원본 확인 시 약화된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 9,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "최영수의 증언: '자기 하고 싶은 말만 써', '내 반박한 놈을 지 질문으로 가져가고', '예스 노 만 써 쭉 읽어보면 동의한 것처럼 돼 미쳐 미쳐' — 기록 제11,080쪽, 제11,081쪽, 제11,091쪽.";
```

## Claim

전임 행정정보화과장 최영수 서기관(숭실대 박사, IT 전문가)은 2022년 10월 12일 증거 기록에서 군검찰 참고인 조사의 조서 조작 실태를 증언했다. 그의 증언은 세 가지 체계적 조작 기법을 폭로한다.

**첫째, 진술서 미제공.** 최영수는 `"아니 수사 참고인 자료에 내 진술서를 안 주는 거지요. 내 진술서를 안 주는 거지 내 진술서를 못 보는 거죠"`라고 말했다(기록 제11,091쪽). 피조사자가 자신의 진술 내용을 확인하고 정정할 기회를 박탈한 것이다.

**둘째, 반박 무시 및 질문 전환.** 최영수는 `"아우 그래서 자기 하고 싶은 말만 써 다 그랬을 거예요 다 우리 이준호하고 내가 가보니까 자기 하고 싶은 말만 인제 내 반박한 놈을 지 질문으로 가져가고 나한테는 예스 노 만 써 쭉 읽어보면 동의한 것처럼 돼 미쳐 미쳐"`라고 증언했다. 피조사자의 반박을 무시하고 그 내용을 조사관의 질문 형태로 왜곡한 것이다.

**셋째, 기술적 반박의 완전 무시.** 최영수는 DIDC 규정과 보안 훈령의 차이를 반박했다: `"야 디아이디씨(DIDC) 자체 예규 지 이게 국방부 전체 보안 훈령이냐 그게 그러려면 정본에(정보본부) 있는 훈령을 따라야 한다"`(기록 제11,080쪽). 또한 `"시에스(CS) 체계가 왜 보안이 안 좋냐 나는 시에스 체계가 더 낫다. 그거보다 VPN보다"`라며 Client-Server 방식이 VPN보다 보안이 우수하다고 주장했다. 그는 아침 9시부터 오후 2시까지 5시간 동안 반박했으나 군검찰은 전혀 듣지 않았고, 결국 자필로 1, 2, 3, 4 항목을 써서 조사실을 나왔다(기록 제11,081쪽).

군검찰이 최영수에게 `"이중령 편을 든다"`라며 격렬히 반응한 것은 최영수의 기술적 반박이 군검찰의 논리를 무너뜨리고 있었음을 의미한다.

## Key Takeaways

- [진리성] 최영수의 증언은 조서 조작의 세 가지 기법(진술서 미제공, 반박→질문 전환, 예스/노 축소)을 독립적 참고인의 직접 경험으로 증언한 것이다.
  - 최영수's testimony exposes three systematic interrogation record fabrication techniques (withholding transcripts, converting rebuttals into questions, reducing responses to yes/no) from an independent witness's direct experience.
- [타당성] 군사법원법상 피조사자에게 진술서 사본 미제공은 절차적 위반이며, 반박을 기록하지 않는 것은 조서의 증거능력에 영향을 미친다.
  - Under the Military Court Act, withholding transcript copies from the interviewee is a procedural violation, and failure to record rebuttals affects the evidentiary value of the interrogation record.
- [진리성] 30년 IT 전문가(숭실대 박사)인 최영수의 DIDC 규정 vs 국방부 훈령 구분 반박은 군검찰의 기술적 논리 오류를 지적한 것이다.
  - 최영수 (30-year IT expert, Soongsil PhD) correctly distinguished between DIDC internal regulations and MND-level security directives, exposing the prosecution's technical logic error.
- [진실성] 최영수가 `"이중령 편을 든다"`는 비난에도 불구하고 5시간 반박을 지속한 것은 사실에 대한 확신을 보여준다.
  - 최영수's persistence in rebuttals for 5 hours despite accusations of "taking 한지훈's side" demonstrates conviction about the facts.

## Supporting evidence

- **기록 제11,080쪽** — 최영수의 DIDC 규정 vs 국방부 훈령 구분 반박 및 CS 체계 보안 우위 주장
- **기록 제11,081쪽** — 최영수가 5시간 반박 후 자필로 4개 항목 작성하고 조사실 퇴장
- **기록 제11,091쪽** — 최영수의 `"내 진술서를 안 주는 거지요"` 증언 및 `"동의한 것처럼 돼 미쳐 미쳐"` 발언

## Counter-hypothesis

**(a) 대안적 해석:** 군검찰의 조서 작성은 표준적인 수사 절차를 따른 것이다. 참고인의 반박이 조서에 기재되지 않은 것은 해당 반박이 법적·기술적으로 사안과 무관하다고 판단했기 때문이며, 조서는 요약 형식으로 핵심만 기록하는 것이 관행이다.

**(b) 반박 조건:** 군검찰이 최영수에게 진술서 사본을 실제 제공했다는 수령 기록이 확인되거나, 조서 원본에 최영수의 반박 내용이 실질적으로 기재되어 있다는 것이 확인되면 약화된다.

**(c) 방어 가능한 반대 입장:** 수사 기관의 조서는 법적으로 참고인의 모든 발언을 기록할 의무가 없으며, 핵심 내용만 요약 기록하는 것이 일반적 관행이다. 다만, 5시간에 걸친 반박이 전혀 기록되지 않고 `"예스 노 만"` 남긴 것은 일반적 요약의 범위를 벗어난다.

## Falsification condition

군검찰 조서 원본에 최영수의 기술적 반박(DIDC 규정 vs 국방부 훈령 구분, CS 체계 보안 우위 주장)이 실질적으로 기재되어 있음이 확인되거나, 최영수가 진술서 사본을 수령했다는 기록이 제시되면 약화. 이준호가 최영수의 증언(`"우리 이준호하고 내가 가보니까"`)과 상이한 경험을 증언하는 경우에도 재평가 필요.

## Verdict

**CORROBORATED (strong)**
- 진리성 (Truthfulness): **9/10** — 최영수의 직접 경험 증언, 이준호의 동반 경험 언급으로 교차 검증 가능
- 타당성 (Validity): **8/10** — 진술서 미제공은 절차적 위반으로 법적 평가 가능
- 진실성 (Sincerity): **9/10** — 최영수가 비난을 감수하고 5시간 반박을 지속한 것은 진정성의 증거

## Open Questions

- 최영수의 자필 4개 항목의 구체적 내용이 확인되면 군검찰의 논리 오류를 더 정밀하게 특정할 수 있다.
- 이준호가 최영수와 동반 조사를 받았는지, 이준호의 조서에도 동일한 조작 패턴이 나타나는지 확인 필요.
- 최영수의 CS 체계 vs VPN 보안 주장에 대한 기술적 검증이 필요하다 (다만, 책은 이 주장이 舊KIATIS의 VPN 미사용을 정당화하려는 것으로 해석하며, 실제로는 국방 사이버안보 훈령 위반이라고 지적한다).

## Spot-check (raw/01 book)

- §3.5.2.1.5 (lines 135–138): 최영수 증언 본문
- §3.5.2.2.8 (lines 190–191): 조사본부 질문지 조작 비교

## Related

- [[layer5-audit-result-falsity-and-collusion-proof|3 shared records — 감사결과 허위 입증]]
- [[layer5-predetermined-audit-conclusion]] — 사전 결론 결정 atom (최영수 증언은 이 결론을 집행하는 조서 조작의 기법적 증거)
- [[layer5-fabricated-warning-letter]] — 경고장 조작 atom (조서 조작이 경고장 조작의 기반)
- [[han-ji-hoon-prosecution-violates-2129-role-separation]] — 검찰 역할 분리 위반 atom (조서 조작이 이 위반의 수사 단계 메커니즘)
- [[han-ji-hoon-suspect-interrogation-2022-09-02]] — 피의자 심문 atom (최영수의 참고인 조서 조작은 피의자 심문의 선행 패턴)

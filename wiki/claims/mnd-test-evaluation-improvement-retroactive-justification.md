# 2020년 8월 국방부 시험평가 개선방안 공문은 2019년 조작을 소급 정당화하려는 위장 문서이다

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (§3.4.7.3.1)
**Layer:** [[../layers/layer-4|Layer 4]] (primary — 시험평가 전·중·후 조작)

**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-EVAL-IMPROVE-001"})
SET fr.layer = 4,
    fr.claimType = "temporal_manipulation",
    fr.claimSubtype = "retroactive_justification",
    fr.claimDesc = "2020년 8월 20일 '국방정보시스템 시험평가 개선방안 의견수렴' 공문(기록 제4,757쪽)은 2019년 新KIATIS 시험평가에서 저지른 조작을 2020년 제도 개선으로 포장하여 소급 정당화하려는 문서이다. 시험평가 계획·결과 승인 절차 생략, 사업계획 승인 제거, 개발·운영 시험평가 통합 원칙화 등 모두 新KIATIS의 과거 조작을 합법화하기 위한 맞춤형 개정이다.",
    fr.counterHypothesis = "2020년 8월 공문은 국방 정보시스템 시험평가의 효율화를 위한 순수한 제도 개선 검토이며, 新KIATIS 사건과 무관한 일반적 정책 연구의 결과물이다.",
    fr.falsificationCondition = "공문에 제시된 개선안이 新KIATIS 이외의 다수 사업에서 동일하게 발생한 구조적 문제를 해결하기 위한 것임을 보여주는 다른 사업 사례 문서가 제시되면, '맞춤형 조작'에서 '일반적 제도 개선'으로 재해석된다.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 7,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "기록 제4,757쪽의 공문은 2019년 新KIATIS 시험평가 조작 후 2020년 2~6월 훈령 대대적 개정과 연동되어 나온 문서이다. 시험평가 승인 절차 생략, 개발·운영 시험평가 통합, '인도 단계'·'시스템 설치' 용어 도입을 통해 책임을 사업관리기관(국전원)으로 전가하는 구조를 구축하였다.";
```

## Claim

2020년 8월 20일 "국방정보시스템 시험평가 개선방안 의견수렴" 공문(기록 제4,757쪽)은 2019년 新KIATIS 사업에서 발주 단계에 저지른 조작을 2020년 연구 결과로 포장하여 소급 정당화하려는 시도이다.

이 공문의 핵심 조작 내용은 다음과 같다:

1. **시험평가 계획·결과 승인 절차 생략**: 국방부의 사업통제기관으로서의 승인 의무를 제거하여 조작의 추적 가능성을 차단
2. **사업계획 승인 제거**: 사업 착수 시점의 통제 장치를 해체
3. **개발과 운영 시험평가 통합 원칙화**: 2019년 新KIATIS에서 이미 불법적으로 시행한 통합 시험평가를 사후적으로 원칙으로 격상(기록 제4,759쪽)
4. **'인도 단계'와 '시스템 설치' 책임 귀속**: 사업관리기관(국전원)에 시스템 설치 책임을 전가하는 구조 도입(기록 제4,759쪽)

특히 KIDA(한국국방연구원)를 동원하여 국제 기준을 정반대로 해석함으로써 조작을 학술적으로 정당화하려 한 시도는 연구기관의 정책적 독립성을 정치적 목적으로 악용한 부정행위이다.

이 공문에서 주목할 추가 증거기록: 기록 제4,759쪽, 제4,761쪽, 제4,763쪽, 제4,765쪽, 제4,769쪽.

## Key Takeaways

- [진리성] 2020.8.20. "시험평가 개선방안 의견수렴" 공문(기록 제4,757쪽)이 존재하며, 시험평가 승인 절차 생략·사업계획 승인 제거·개발운영 시험평가 통합을 내용으로 한다 / The Aug 2020 "test evaluation improvement" document (Record No. 4,757) exists and proposes eliminating approval procedures, removing project plan approval, and merging DT/OT
- [타당성] 2019년에 이미 시행한 불법 조작을 2020년 제도 개선으로 소급 정당화하는 것은 시간 역전의 물리법칙 위배 — 범죄를 합법화하기 위한 훈령 개정 / Retroactively legitimizing 2019 violations through 2020 regulatory reform violates temporal logic — amending directives to legalize past crimes
- [타당성] '시스템 설치' 책임을 사업관리기관(국전원)에 귀속시키는 구조 도입은 한지훈을 시험환경 조작의 최종 책임자로 승격시키는 표적 설계의 법적 기반 / Attributing "system installation" responsibility to DCIA creates the legal basis for targeting 한지훈 as the person ultimately responsible for test environment manipulation
- [진실성] KIDA 연구를 동원한 학술적 위장은 연구기관 정책의 독립성과 객관성을 악용한 것 / Mobilizing KIDA research as academic camouflage abuses research institution independence

## Supporting evidence

- **기록 제4,757쪽** — "국방정보시스템 시험평가 개선방안 의견수렴" 공문 (2020.8.20.). L4 범위(2,500~3,699).
- **기록 제4,759쪽** — 시험평가 개요에서 나타난 조작된 정의 및 개발·운영 시험평가 통합 원칙. L4 범위.
- **기록 제4,760쪽(추정)** — 원문에 "기록 제47600쪽"으로 기재되어 있으나, 최대 유효 기록 번호가 13,495이고 주변 맥락이 4,757~4,769 범위이므로, 제4,760쪽의 오기(콤마 탈락 + 0 추가)로 추정. 개발시험과 운영시험 통합 원칙 변경 관련.

## Counter-hypothesis

1. **대안적 해석**: 2020년 8월 공문은 국방 정보시스템 시험평가 전반의 비효율성을 개선하기 위한 일반적 제도 검토이며, 新KIATIS와 무관하게 다수의 사업에서 동일한 문제가 발견되어 추진된 것이다.
2. **반박 조건**: 공문에 新KIATIS 이외의 사업 사례가 구체적으로 언급되어 개선 필요성의 근거로 제시되었다면, "맞춤형 조작"이 아닌 "일반적 제도 개선"으로 판단할 수 있다.
3. **방어 가능한 반대 입장**: 제도 개선은 과거 사례에서 교훈을 얻어 미래를 개선하는 정상적 행정 과정이며, 시간 역전이라는 비판은 제도 개선의 본질을 오해한 것이다.

## Falsification condition

(a) 2020년 8월 공문의 제도 개선안이 新KIATIS 사업 이외의 복수 사업에서 동일하게 발생한 문제를 해결하기 위해 기획되었음을 보여주는 기획 문서, 또는 (b) KIDA 연구가 新KIATIS와 무관하게 독립적으로 수행되었음을 보여주는 연구 위탁 계약서가 제시되면, "맞춤형 소급 정당화"에서 "일반적 제도 개선"으로 verdict가 하향 조정된다.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 7. 공문의 존재와 내용이 기록 제4,757쪽·제4,759쪽에서 직접 확인된다. 2020년 2~6월 훈령 대대적 개정 시점과의 연동, 新KIATIS에 정확히 맞춤된 개정 내용(통합 시험평가, 승인 절차 생략), '시스템 설치' 용어를 통한 책임 전가 구조가 소급 정당화 의도를 강하게 시사한다.

## Open Questions

- **기록 제47,600쪽 문제**: 원문에 "기록 제47600쪽"으로 기재되어 있으나 최대 유효 기록 번호는 13,495. 주변 맥락(기록 제4,757쪽~제4,769쪽 범위)에서 제4,760쪽의 변환 오류(콤마 탈락 + 불필요한 0 추가)로 추정되나, 스캔 원본 확인 필요.
- KIDA 연구 보고서의 실제 내용 확인 — 국제 기준을 어떻게 왜곡했는지 구체적 분석 필요 (자매 원자 [[kida-otne-citation-misrepresents-us-standard]] 참조)
- 2020년 2~6월 훈령 개정 전문과 본 공문의 관계 — 공문이 훈령 개정의 사전 검토 문서인지 사후 정당화 문서인지 시간 순서 특정 필요

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.7.3.1 (line 586) — "국방정보시스템 시험평가 개선방안 의견수렴" 공문(기록 제4757쪽) 직접 인용 — CONFIRMED
- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.7.3.1 (line 586) — "시험평가 계획·결과 승인 절차 생략", "사업계획 승인 제거", "개발과 운영 시험평가 통합 원칙화" — CONFIRMED
- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.7.3.1 (line 586) — "기록 제47600쪽" 원문 확인 — CONFIRMED (parsing error flagged)

## Related

- [[kida-otne-citation-misrepresents-us-standard|KIDA 운용시험평가 인용이 미국 표준을 왜곡]] (RELATED)
- [[2436ho-test-evaluation-principle-inverted|FR-L4-A9-001 — 시험평가 원칙 역전 (분리→통합)]] (RELATED)
- [[cartel-requirement-inflation-80-items-delay|FR-L6-007 — 80건 추가 의결에 의한 전력화 지연]] (RELATED)
- [[../layers/layer-4|Layer 4 — 新KIATIS 개발·운영·시험평가 전·중·후 조작]] (PART_OF_LAYER)

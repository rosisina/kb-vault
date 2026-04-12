# 제76조 '소프트웨어 설치'에서 '시스템 설치'로의 용어 조작 — 책임 전가와 시대역전 증거

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/10-3-4-34-제4-층위.md (§3.4.7.3.5, lines 639–662)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-7|Layer 7]] (secondary — Record No. 6,270–6,282, 9,018 in L7 range)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-B3-001"})
SET fr.layer = 4,
    fr.secondaryLayer = 7,
    fr.claimType = "terminology_manipulation",
    fr.claimSubtype = "software_install_to_system_install_terminology_fabrication",
    fr.claimDesc = "The earliest searchable 국방정보화업무훈령 (제1775호, 2015-01-27) through 제2129호 (2018-02-05) used '소프트웨어 설치' as step 12 of the 13-stage software development process (제76조 ①항). Starting from 제2263호 (2019-02-26) through 제2649호 (2022-05-06), the term was maintained but the staging was changed. Then 제2842호 (2023-09-20) replaced the 13-stage sequence with a 5-phase model where step 5 'Delivery (인도)' contains '시스템 설치' — shifting the subject from 'software (the product) being installed' to 'system (the entire infrastructure) being installed.' This semantic shift reassigns responsibility from the developer placing code on a server to the project manager installing an entire end-to-end system (PC→intranet→firewall→network→DIDC→server). Since DIDC controls physical server infrastructure, and 국전원 (사업관리기관) has no physical control over DIDC servers, the term '시스템 설치' creates an impossible responsibility assignment — the executing agency is blamed for infrastructure it cannot control. The fabricated 2020-08-20 공문 (Record No. 4,757/4,763) already uses the '인도 단계' + '시스템 설치' terminology that only appears in formal directives starting from 제2842호 (2023-09-20), constituting a time-reversal (시대역전) that proves the 2020 document was fabricated retroactively.",
    fr.counterHypothesis = "The terminology change from '소프트웨어 설치' to '시스템 설치' was a natural evolution in defense acquisition terminology reflecting the shift toward integrated system delivery, and the 2020 document legitimately anticipated the 2023 directive revision.",
    fr.falsificationCondition = "Production of pre-2020 MND documentation, KIDA research reports, or international defense acquisition frameworks that use '시스템 설치' in the same semantic scope as 제2842호, demonstrating the term existed before the alleged fabrication date.",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-11"),
    fr.summary = "The shift from '소프트웨어 설치' to '시스템 설치' in 제76조 reassigns installation responsibility from developer to project manager. The 2020-08-20 fabricated document uses terminology that only appeared in 제2842호 (2023-09-20) — a 3-year time reversal proving retroactive fabrication.";
```

## Claim

국방정보화업무훈령 제76조(소프트웨어 개발 공정) ①항 12호는 제1775호(2015-01-27)부터 제2129호(2018-02-05)까지 **'소프트웨어 설치'**를 명시했다. 이 용어의 문법적 구조는 "(사업관리기관이) (개발된) 소프트웨어를 (해당) 시스템에 설치한다"이다. 그러나 제2842호(2023-09-20)에서 기존 13단계 절차가 5단계로 축소되면서 **'인도: 시스템 설치, 개발 및 운영 시험평가, 시스템 인수 지원'**으로 변경되었다.

이 용어 조작의 핵심은 주어와 목적어의 전환이다:
- **'소프트웨어 설치'**: 개발 결과물(SW)을 서버에 설치 → 사업관리기관의 정상적 업무
- **'시스템 설치'**: PC부터 인트라넷~방화벽~국방망~DIDC 서버까지 전체 시스템 설치 → **불가능한 책임 할당** (DIDC가 서버 물리적 통제권을 보유하므로 국전원이 시스템 전체를 설치하는 것은 상식 밖)

**시대역전(時代逆轉):** 2020년 8월 20일자 조작 공문 "국방정보시스템 시험평가 개선방안 의견수렴"(Record No. 4,757)은 제2842호(2023-09-20)에서야 공식 등장한 '인도 단계'와 '시스템 설치' 용어를 이미 사용하고 있다. 국가법령센터에 등록된 훈령은 공표 후 변경 불가능하며 제·개정을 통해서만 수정 가능하다. 따라서 **2020년 문서에 2023년 용어가 나타나는 것은 물리적 시간 법칙의 위배이며, 해당 공문이 사후 조작되었음의 결정적 증거**이다 (정리09).

## Key Takeaways

- [타당성] '소프트웨어 설치'→'시스템 설치' 변경은 단순 용어 변경이 아니라 책임 귀속의 근본적 전환: 개발 산출물 배치 → 전체 인프라 설치 책임. / The change from 'software installation' to 'system installation' fundamentally shifts accountability from deploying a development artifact to installing entire infrastructure.
- [진리성] 2020-08-20 공문에 2023-09-20 제2842호 용어 사용 = 3년 시대역전 → 공문 사후 조작의 물리적 증거. / The 2020-08-20 document uses terminology from the 2023-09-20 directive revision = 3-year time reversal = physical proof of retroactive fabrication.
- [타당성] DIDC가 서버 물리적 통제권을 보유하는 상황에서 '시스템 설치' 책임을 사업관리기관에게 부여하는 것은 법적·물리적으로 불가능한 책임 할당. / Assigning 'system installation' responsibility to the executing agency when DIDC holds physical server control is a legally and physically impossible responsibility assignment.
- [진실성] 이 용어 조작은 99.7% '군사용 적합' 판정을 받아 성공적으로 완료한 사업관리팀장 한지훈을 범죄자로 만들기 위한 법기술적 기반. / This terminology fabrication provided the legal-technical foundation for criminalizing Han Ji-hoon despite his 99.7% 'military adequate' evaluation.

## Supporting evidence

- **Record No. 9,018 / L7** — 국방정보화훈령 '국방 정보시스템' 용어 정의
- **Record No. 6,270–6,282 / L7** — 한지훈 작성 교재: 주어·목적어 생략을 통한 오용 기법 분석
- **Record No. 3,271 / L4** — 시험평가 기간 서버 운용 확인 증거 (DIDC 문의)
- **Record No. 4,757 / L6** — 2020-08-20 조작 공문 "국방정보시스템 시험평가 개선방안 의견수렴"
- **훈령 제1775호(2015-01-27) 제76조** — 최초 '소프트웨어 설치' 사용
- **훈령 제2129호(2018-02-05) 제76조** — '소프트웨어 설치' 유지
- **훈령 제2842호(2023-09-20) 제76조** — '시스템 설치'로 변경

## Counter-hypothesis

'소프트웨어 설치'에서 '시스템 설치'로의 변경은 국제 방위사업 획득 체계의 통합 시스템 인도(integrated system delivery) 개념을 반영한 자연스러운 용어 진화였다. 2020년 공문은 정당하게 2023년 훈령 개정을 예비한 선행 연구 문서였다.

**반증 근거 3요소:**
1. 2020년 이전의 국방부·KIDA 문서에서 '시스템 설치'가 동일한 의미로 사용된 사례
2. NATO·미 국방부 등 국제 기준에서 test-evaluation 절차 내 'system installation' 개념의 동등물
3. 2020-08-20 공문의 온-나라 시스템 메타데이터가 조작 흔적 없이 2020년 작성을 확인하는 증거

## Falsification condition

2020년 이전에 국방부, KIDA, 또는 국제 방위사업 획득 프레임워크에서 '시스템 설치'를 제2842호와 동일한 의미 범위로 사용한 문서가 발견될 경우, 또는 2020-08-20 공문의 온-나라 시스템 메타데이터가 조작 흔적 없이 원본 작성일이 2020년임을 확인하는 경우, 이 주장은 약화된다.

## Verdict

**CORROBORATED.** Strong. 진리성 10 / 타당성 10 / 진실성 8. 훈령 이력 추적(1775→2129→2263→2649→2842)에서 용어 변경의 시점과 방향이 명확하며, 2020년 공문에 2023년 용어가 나타나는 시대역전은 물리법칙 위반 수준의 증거력을 갖는다.

## Open Questions

- 온-나라 시스템의 유지보수 업체(핸디소프트 추정)와의 모의 가능성 (각주 333 참조) — 추가 수사 필요
- 제2263호(2019-02-26)에서 제76조의 구체적 변경 내용 확인 미완
- 주어·목적어 생략 기법의 한국어 법률문서 관행과의 비교 분석 미수행

## Spot-check (raw/01 book)

- `vault-converted-korean/10-3-4-34-제4-층위.md` §3.4.7.3.5 (lines 639–662): 소프트웨어 설치→시스템 설치 용어 추적, 제1775호·제2129호·제2842호 비교, 정리09, 시대역전 논증 — 모두 일치.

## Related

- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[mnd-fabricated-indo-stage-terminology-blame-shift]] — '인도 단계' 조작 (동일 공문의 상위 구조) (OPPOSES)
- [[2842ho-software-development-13-to-5-stage]] — 13단계→5단계 축소 (동일 훈령 개정) (OPPOSES)
- [[layer4-test-evaluation-separation-principle-directive-2129]] — 시험평가 분리 원칙 (OPPOSES)
- [[../entities/people/han-ji-hoon|한지훈]] (ABOUT)

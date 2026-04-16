---
lang: ko
title-ko: "김철환 (데이터센터장 대령): \"평가할 때는 여건에 의해서 못 한 거지\" — 시험평가 환경의 VPN 면제는 표준 관행"
title-en: "김철환 (데이터센터장 대령): \"평가할 때는 여건에 의해서 못 한 거지\" — 시험평가 환경의 VPN 면제는 표준 관행"
aliases:
  - FR-L4-DATACENTER-CMD-TEST-EXEMPTION
  - "김철환 (데이터센터장 대령): \"평가할 때는 여건에 의해서 못 한 거지\" — 시험평가"

layer: 4
secondary-layers: [6]
claimType: testimony_evidence
claimSubtype: institutional_expert_testimony
fracture-type: null
source-type: recording

verdict: CORROBORATED
strength: STRONG
truthfulness: 9
validity: 10
sincerity: 8
analysisDate: 2026-04-13

record-nos: []
evidence-ids: []
event-date: null

persons:
  - 김철환
  - 한지훈
  - 장우진
organizations:
  - DIDC
  - MND
has-verbatim: true

tags:
  - layer/L4
  - layer/L6
  - verdict/corroborated
  - strength/strong
  - type/testimony-evidence
  - source/recording
  - person/김철환
  - person/한지훈
  - person/장우진
  - org/DIDC
  - org/MND
  - has/verbatim-quote
  - cross-layer
---
# 김철환 (데이터센터장 대령): "평가할 때는 여건에 의해서 못 한 거지" — 시험평가 환경의 VPN 면제는 표준 관행

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[050]` 녹취 251 (2022.8.2, 00:25:07, line 15220+)
**Layer:** [[../layers/layer-4|Layer 4]] (primary), [[../layers/layer-6|Layer 6]] (secondary — 검찰 혐의 반증)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L4-DATACENTER-CMD-TEST-EXEMPTION"})
SET fr.layer = 4,
    fr.secondaryLayers = [6],
    fr.claimType = "testimony_evidence",
    fr.claimSubtype = "institutional_expert_testimony",
    fr.claimDesc = "당시(2022) 데이터센터장 김철환 대령(학군 29기, CISSP 2001년 취득)이 증언: (1) VPN은 2001년부터 존재하는 필수 보안 요소이나, (2) '평가할 때는 여건에 의해서 못 한 거지. 실제 사용할 때는 당연히 VPN을 써야 되지. 근데 평가할 때는 어떤 여건이 안되면 그걸 제외하고 하는 경우가 있잖아' — 시험평가 환경에서 VPN 면제는 표준 관행임을 DIDC 최고위급 보안 전문가가 인정",
    fr.counterHypothesis = "김철환은 한지훈을 변호하려는 개인적 동기가 있으며, 시험평가 VPN 면제가 표준 관행이라는 주장은 근거가 없다",
    fr.falsificationCondition = "DIDC 또는 국방부의 시험평가 시 VPN 적용 의무를 명시한 규정, 또는 동일 시기 다른 사업에서 시험평가 시 VPN을 의무 적용한 사례",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 10,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "DIDC 센터장(CISSP 2001)+대령이 '시험평가 시 VPN 면제는 여건상 표준 관행'이라고 증언 — 검찰의 '환경 조작' 혐의를 DIDC 최고위급이 직접 부정.";
```

## 주장 (Claim)

### 한국어

당시(2022) 데이터센터장 김철환 대령(학군 29기)은 녹취 251(2022.8.2)에서 시험평가 환경과 실제 운용환경의 **구분이 표준 관행**임을 증언하였다. 김철환은 **CISSP(국제 정보보안 전문가) 자격을 2001년에 취득**한 보안 분야 최고위급 전문가이다.

### 핵심 증언

> **(김철환, 녹취 251 line 15265~15276):**
> "CISSP를 땄어요. 그게 2001년이야. 그때도 VPN이 있었어... 사이버안보훈령은 전체 크게 이런 말들이 되어 있어요. 그러니까 **이걸 안지켰다고 사이버훈령을 내건 거구나**... 그 때 평가했을 때가 아니가보다... **평가할 때는 여건에 의해서 못 한 거지. 실제 사용할 때는 당연히 VPN을 써야 되지 보안규정으로. 근데 평가할 때는 어떤 여건이 안되면 그걸 제외하고 하는 경우가 있잖아**"

> **(김철환, 녹취 251 line 15220~15230):**
> "VPN이 있어야 돼. 외부는... VPN이 아까 트렁크를 열지 않으면... **샤크라맥스를 못써 외부에서는**... 그러면 **둘 다 못쓰는 거고**... **한 몸이야**"

### English

<!-- pending: phase i18n-EN -->

## 핵심 요약 (Key Takeaways)
- [타당성] **CISSP 2001년 취득 + DIDC 센터장 대령** — 국방 보안 분야 최고위급 전문가가 "시험평가 시 VPN 면제는 여건상 표준 관행"이라고 증언. 비전문가의 의견이 아닌 **권위 있는 전문가 판단**. / The DIDC center commander with CISSP (since 2001) — the highest-ranking security expert — testifies VPN exemption during test evaluation is standard practice.
- [타당성] **"VPN과 샤크라맥스는 한 몸"** — VPN 없이는 ChakraMax(DB접근제어)도 작동 불가 = 두 보안장비가 **연동 구조**. VPN이 안 되면 ChakraMax도 자동으로 미적용 = 한지훈의 선택이 아닌 **기술적 연쇄**. / VPN and ChakraMax are interdependent — if VPN fails, ChakraMax also fails automatically.
- [진리성] **"이걸 안지켰다고 사이버훈령을 내건 거구나"** — 검찰이 사이버안보훈령 위반을 혐의의 근거로 사용했음을 김철환이 즉시 파악. 동시에 "평가할 때는 못 한 거지"로 **시험평가 맥락의 특수성**을 구분. / The center commander immediately identified the prosecution's use of cyber security directive as the charge basis, while distinguishing test evaluation context.
- [진리성] **시험평가 vs 운용환경 구분은 DIDC 센터장 수준에서도 인정되는 표준** — 검찰의 "시험평가환경을 속였다"는 혐의가 **DIDC 자체의 최고위급에 의해 부정**됨. / The test-vs-operational distinction is recognized as standard even at DIDC commander level.

## 지지 증거 (Supporting Evidence)
- **녹취 251** (2022.8.2, raw/02 line 15220+) — 김철환 핵심 증언
- **김철환 자격**: CISSP 2001년 취득, DIDC 데이터센터장 대령 (학군 29기)
- Cross-reference: [[prosecution-identity-fallacy-deception-technique|검찰 동일성 오류 — 시험환경≠운용환경을 혼동한 3차원 조작]]
- Cross-reference: [[layer4-old-new-kiatis-different-cyberspace|舊/新KIATIS 다른 사이버공간]]

## 반대 가설 (Counter-hypothesis)
김철환은 한지훈과의 개인적 관계에서 변호하려는 동기가 있으며, "시험평가 시 면제"가 공식 규정에 명시되어 있지 않다.

## 반증 조건 (Falsification Condition)
1. DIDC 또는 국방부의 시험평가 시 VPN 적용 의무를 명시한 규정
2. 동일 시기 다른 사업에서 시험평가 시 VPN을 의무 적용한 사례

## 평결 (Verdict)
**CORROBORATED.** Strong. 진리성 9 / 타당성 10 / 진실성 8.

## Spot-check (raw/01 book)

- `Korean/10-3-4-34-제4-층위.md` — §3.4.1.2 시험평가 환경 분리 원칙 (훈령 제57/58/62조)
- `Korean/12-3-6-36-제6층위-군.md` — §3.6.4.2 동일성 오류 분석
- Deferred to A.6 Re-verify.

## 관련 (Related)
- [[prosecution-identity-fallacy-deception-technique|검찰 동일성 오류]] (RELATED)
- [[layer4-old-new-kiatis-different-cyberspace|舊/新KIATIS 다른 사이버공간]] (RELATED)
- [[jang-woojin-win10-chakramax-absent-direct-db-access|장우진 Win10/ChakraMax 미지원 — 기술적 제약의 다른 측면]] (RELATED)
- [[../layers/layer-4|Layer 4]] (PART_OF_LAYER)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

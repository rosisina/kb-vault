# 수사관 진상호: "결국 VPN이죠" — 전체 사건이 VPN 문제로 귀결 + "나항" 기재 누락 자인

**Source:** raw/02. Individual recording logs/(Korean) individual_recording_logs_beyond_cybersecurity.md `[012]` 녹취 159 (2022.9.13, 00:40:02, line 7539+) • 녹취 152 (2022.8.31, 00:29:20, line 6414+)
**Layer:** [[../layers/layer-6|Layer 6]] (primary — 수사관 자인)
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L6-INVESTIGATOR-VPN-ADMISSION"})
SET fr.layer = 6,
    fr.claimType = "prosecution_misconduct",
    fr.claimSubtype = "prosecution_admission",
    fr.claimDesc = "군검찰단 수사관 진상호가 (1) '결국 결론적으로는 VPN이든 어떤 것이든' — 전체 사건이 VPN 문제로 귀결됨을 자인, (2) '위 1. 나항이라고 기재된 부분은 없고. 기재를 굳이 할 필요가 없어서 하지 않았습니다' — 수사개시 통보의 핵심 근거 누락을 자인, (3) '말씀드릴 의무는 없는 거 같고요' — 피의자에 대한 설명 의무 회피",
    fr.counterHypothesis = "수사관의 발언은 수사 과정의 정상적 판단이며, 기재 누락은 행정적 간소화이다",
    fr.falsificationCondition = "수사개시 통보의 '나항'이 실제로 존재하는 별도 문서로 기록되어 있었음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 9,
    fr.sincerity = 8,
    fr.analysisDate = date("2026-04-13"),
    fr.summary = "수사관 자인 3건: '결국 VPN'(사건 본질 자인) + '나항 기재 안 했다'(문서 누락 자인) + '말씀드릴 의무 없다'(설명 의무 회피).";
```

## Claim

군검찰단 수사관 진상호가 한지훈과의 녹음 통화에서 3가지 핵심 자인을 하였다:

### 자인 1: 사건 전체가 VPN 문제로 귀결

> **(녹취 159, line 7539~7541):**
> **(한지훈)** "여태까지 쭉 애기를 들어보면 **VPN을 말씀하시는 거 같아요.** 맞죠." **(진상호)** "어" **(한지훈)** "VPN이잖아요. VPN하고 관련된 거" **(진상호)** "**그렇죠 결국 결론적으로는 VPN이든 어떤 것이든.**"

### 자인 2: 수사개시 통보의 "나항" 기재 누락

> **(녹취 152, line 6563~6564):**
> **(진상호)** "예. **위 1. 나항이라고 기재된 부분은 없고.** 그 부분은 **기재를 굳이 할 필요가 없어서 하지 않았습니다.**"

### 자인 3: 설명 의무 회피

> **(녹취 152, line 6414):**
> **(진상호)** "에예 근데 **지금 말씀드릴 의무는 없는 거 같고요**"

### 범죄 연관

| 자인 | 범죄 연관 |
|---|---|
| **"결국 VPN"** | 6개 혐의(위계공무집행방해 등)가 **모두 VPN 문제로 수렴** — VPN은 DIDC의 보안 정책이지 한지훈의 책임이 아님(장우진·장호재·김철환 증언) → 혐의 전체의 기반이 **한지훈 관할 밖** |
| **"나항 기재 안 했다"** | 수사개시 통보 문서에서 핵심 근거를 **의도적으로 누락** — 허위공문서 작성의 정황 증거 |
| **"의무 없다"** | 피의자에 대한 혐의 설명 의무를 **회피** — 적법절차 위반 정황 |

## Key Takeaways

- [진리성] **"결국 VPN"** — 수사관 자신이 전체 사건이 VPN 문제임을 자인. VPN은 DIDC 정책 = **한지훈 관할 밖** → 혐의 구조의 근본적 결함을 수사관이 인정. / The investigator himself admits the entire case comes down to VPN — which is DIDC policy, outside Han Ji-hoon's authority.
- [타당성] **"나항 기재 안 했다"** — 수사개시 통보의 핵심 근거 누락을 수사관이 직접 자인. "굳이 할 필요가 없어서"는 **법적으로 허용되지 않는 정당화** — 수사 문서의 완전성 의무 위반. / Investigator admits omitting key documentation basis — legally impermissible justification.
- [진실성] **"말씀드릴 의무 없다"** — 피의자가 혐의의 근거를 질문했을 때 설명을 거부 = 적법절차 및 피의자 권리 침해. / Refusing to explain charge basis to the suspect violates due process rights.

## Supporting evidence

- **녹취 159** (2022.9.13, line 7539+) — "결국 VPN" 자인
- **녹취 152** (2022.8.31, line 6414+, 6563+) — "나항 미기재" + "의무 없다" 자인
- Cross-reference: [[prosecution-six-charges-collapse-vpn-nonexistence|6개 혐의 VPN 부재로 붕괴]]
- Cross-reference: [[prosecution-investigator-ignorance-environment|수사관 환경 정의 무지]]

## Counter-hypothesis

수사관의 발언은 수사 과정의 정상적 판단이며, "나항" 미기재는 행정적 간소화이다.

## Falsification condition

"나항"이 별도 문서로 존재하는 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 9 / 진실성 8.

## Spot-check (raw/01 book)

- `vault-converted-korean/12-3-6-36-제6층위-군.md` — §3.6.3 수사관 관련 분석
- Deferred to A.6 Re-verify.

## Related

- [[prosecution-six-charges-collapse-vpn-nonexistence|6개 혐의 VPN 붕괴]] (RELATED)
- [[prosecution-investigator-ignorance-environment|수사관 무지]] (CORROBORATES)
- [[warrant-docs-are-actual-false-documents|영장 자체가 허위공문서]] (OPPOSES)
- [[../layers/layer-6|Layer 6]] (PART_OF_LAYER)

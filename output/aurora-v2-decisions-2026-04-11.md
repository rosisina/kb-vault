# Aurora v2 결정 기록 (D1–D10)

**Date:** 2026-04-11
**Session:** 2026-04-11-session-03
**Decided by:** James
**Reference:** `output/aurora-v2-integration-proposal-2026-04-11.md`

이 파일은 Aurora v2 통합 전략에 대한 James의 10개 결정 사항을 영속 기록합니다. 향후 세션은 이 파일을 단일 진실원으로 참조합니다.

---

## 결정 일람

| # | 영역 | 결정 | 트리거 시점 | 후속 행동 |
|---|---|---|---|---|
| **D1** | Aurora 6 agent 운명 | **승인** — 점검 후 폐기/흡수/유지 triage 진행 | atom 30 도달 직전 | 제가 `defense-kg-platform/` agent 디렉토리 read → 권고안 작성 → James 최종 선택 |
| **D2** | Angular 재활용 vs Next.js 신규 | **승인** — 점검 후 결정 | Phase 1 종료 (atom 50 직전) | 제가 Aurora Angular 디렉토리 read → 그래프-viz 위주인지 Cypher-form 위주인지 평가 → 권고안 |
| **D3** | Monorepo 통합 시점 | **승인** — Phase 1 시작 시 통합 | atom 30 | `compiler/atoms-to-cypher.py`를 monorepo 구조 하에 배치 |
| **D4** | James 본인 가명 | **권고 승인** — 정식 self-pseudonym 등록 | atom 30~50 구간 | `defense-kg-platform/kg/pseudonym_mapping.json`에 새 entry 추가. 한국어 + 영어 가명 결정은 James |
| **D5** | CLAUDE.md 분할 | **권고 승인** — 일단 보류, atom 50에서 토큰 압박 재평가 | atom 50 | atom 50 시점에 세션 시작 토큰 측정 후 분할 여부 재결정 |
| **D6** | API 인증 모델 | **결정 보류 (c)** | Phase 2 후반 | Phase 2 작업 중 법률 검토 필요성이 구체화되면 재논의 |
| **D7** | 그래프 viz 라이브러리 | **권고 승인** — Cytoscape.js | Phase 3 시작 직전 (atom 100) | Phase 3 첫 작업으로 Cytoscape.js 셋업 |
| **D8** | 책 출간 모드 출력 형식 | **DOCX 우선, LaTeX 추후, Obsidian export 그대로 검토** | Phase 3 후반 | 1차: 기존 `md_to_docx.py` 패턴 확장. 2차: LaTeX 검토. 3차: Obsidian export 가능성 평가 |
| **D9** | UI 배포 형태 | **권고 승인** — localhost 웹앱 | Phase 3 | Phase 3에서 단일 SPA 배포. Electron/Tauri 미고려 |
| **D10** | 책 → atom 자동 분해 | **권고 승인** — 반자동 (`/compile raw/01.`이 atom 후보 추출 → James 승인) | A-01 deep dive 단계 (atom 100+) | atom 후보 추출 결과를 표 형식으로 James에게 제출하는 워크플로 설계 |

---

## D8 상세 — 책 출간 모드 단계별 진화

James의 결정: "**DOCX 우선, 추후 LaTeX 적용 검토, Obsidian export 그대로 검토**"

이는 *진화 경로*로 해석합니다:

| 단계 | 형식 | 시점 | 도구 |
|---|---|---|---|
| 1차 | DOCX | Phase 3 첫 export 기능 | 기존 `communicative-interaction/md_to_docx.py` 확장. 이미 검증된 도구. |
| 2차 (선택) | LaTeX | DOCX 충분치 않을 때 | `pandoc` + 커스텀 template. Record No. 자동 footnote. James의 LaTeX 환경 확인 후. |
| 3차 (검토) | Obsidian export | 가독성/가벼움 우선 시 | Obsidian 자체 PDF export 또는 `obsidian-export` CLI |

가장 중요한 invariant: **어느 형식이든 Record No. 인용은 자동 footnote/endnote로 처리**되어야 함. 수작업 인용 금지.

---

## 즉시 다음 액션

### 권한 요청 — Aurora 디렉토리 read 권한 부여 시점

D1과 D2는 *제가 `defense-kg-platform/`를 read*해야 권고안 작성 가능합니다. 권고안 자체는 atom 30 도달 직전에 필요하지만, 점검 작업은 *지금 시작*해도 무방합니다.

**선택지**:
- **(α) 지금 권한 부여** → 제가 점검 → 권고안 작성 → James 검토 → atom 30 도달 시 즉시 Phase 1 진입
- **(β) atom 30 도달 시 권한 부여** → 그때 점검·권고·결정 모두 한 번에 진행 (현재 atom 20 → 10개 더 ingest 후)

권고: (α). Phase 1 진입을 막힘 없이 시작하려면 사전 점검이 유리.

### Content track 즉시 다음 작업

권고: **regulatory cluster 진행** (session 02 §4 queue 그대로 유지)
- A-04 잔여: 별표 3~7, 별표 14, 제66~68조, US DoD OT&E, 3 technical re-verification
- A-08 closure
- A-06 추가 작업: DIDC 엔티티 페이지 확장 + 별표 7호/별표 17호 atom 추가 가능성

이 트랙으로 atom 20 → ~30 도달.

### 첫 git commit

여전히 미수행. 새로 추가된 인프라 파일이 많으므로 (Skill P1~P7, Agent A1~A4, Aurora v2 proposal) **지금 첫 commit 권장**. James가 직접 author 결정 후 manual commit.

---

## 결정 미반영 상태로 영향받는 파일

이 결정들이 *문서화는 되었지만 코드/인프라에는 아직 반영되지 않은* 항목 — 향후 세션에서 처리:

- D1 결과 → `compiler/` 디렉토리 구조 + Aurora agent별 운명 표
- D2 결과 → `ui/` 기술 스택 결정
- D3 → monorepo 디렉토리 reorganization 작업
- D4 → `pseudonym_mapping.json` 신규 entry
- D7 → `package.json` (Phase 3) Cytoscape.js 의존성
- D8 → Phase 3 export 모듈 설계
- D10 → `/compile raw/01.` 워크플로 분기 추가

---

## 변경 이력

- **2026-04-11 09:20** — 초기 작성. 10개 결정 모두 기록. James 결정 직후.

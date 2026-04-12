# Aurora v2 Implementation Guide

**Date:** 2026-04-12
**Author:** Claude (Opus 4.6, 1M context)
**Status:** Living document — evolves with atom volume
**Prerequisites:**
- `output/aurora-v2-integration-proposal-2026-04-11.md` (전략 제안)
- `output/aurora-v2-decisions-2026-04-11.md` (D1–D10 결정)
- `output/aurora-v2-preflight-inspection-2026-04-11.md` (v1 점검)
- `output/aurora-v2-ui-essentialist-design-2026-04-11.md` (본질주의 UI)
- `output/aurora-v2-ui-mockup-2026-04-11.pptx` (시각화 시안)

---

## 설계 원칙 — 두 문장

> **Cytoscape.js를 유지하되, "전부 보여주기"에서 "증명 단위별로 보여주기"로 전환하라. 도구를 바꾸는 것이 아니라, 같은 도구로 보여주는 관계를 제한하는 것이 본질주의다.**

> **UI 시각화는 Neo4j 런타임 쿼리가 아니라, atom에서 빌드 시 생성한 정적 JSON(graph.json)을 직접 로드한다. Neo4j는 critical path에서 빠지며, 고급 분석(multi-hop traversal, Text2Cypher)에서만 선택적으로 사용된다.**

---

## Part 0 — 정적 그래프 아키텍처 (Neo4j 독립)

### 0.1 아키텍처 결정

UI의 그래프 시각화는 **Neo4j에 런타임 의존하지 않는다.** atom에서 빌드 시 정적 JSON을 생성하여 Angular UI가 직접 로드한다.

```
기존 (v1):
  atoms → atoms-to-cypher.py → Neo4j → API 쿼리 → UI
                                 ↑
                          런타임 의존 (서버 필요, 비용 발생)

v2 (확정):
  atoms → atoms-to-graph-json.py → graph.json → UI 직접 로드
                                      ↑
                               빌드 시 생성 (서버 불필요, 비용 $0)

  atoms → atoms-to-cypher.py → Neo4j (선택적, 고급 분석 전용)
```

### 0.2 결정 근거

| | Neo4j 런타임 쿼리 (v1) | 정적 JSON (v2) |
|---|---|---|
| **서버** | Neo4j + API 상시 구동 | **불필요** — 정적 파일 |
| **비용** | $0~65/월 | **$0** |
| **응답 속도** | ~200ms (Cypher + 네트워크) | **<10ms** (메모리 내 필터) |
| **오프라인** | 불가 | **가능** |
| **배포** | Docker Compose (3 컨테이너) | **정적 호스팅만** (Vercel/Firebase $0) |
| **독립성** | Neo4j 의존 | **완전 독립** |

### 0.3 graph.json 스키마

```python
# scripts/atoms-to-graph-json.py 출력 형태
{
  "nodes": [
    {
      "id": "FR-L6-003",
      "type": "FalsificationResult",
      "layer": 6,
      "verdict": "CORROBORATED",
      "strength": "STRONG",
      "truth": [10, 10, 9],
      "wikiSlug": "prosecution-misapplies-2129-article-58-4-to-kiatis",
      "claimDesc": "...",
      "status": "VERIFIED"
    },
    {
      "id": "P-박성호",
      "type": "Person",
      "roleAnchors": ["2016해킹당시원장-1", "사업주관기관장-1"],
      "layers": [1, 3, 4],
      "side": "perpetrator"
    }
    // ...
  ],
  "edges": [
    {
      "source": "FR-L6-003",
      "target": "CA-L6-prosecution",
      "relationship": "TARGETS"
    },
    {
      "source": "FR-L6-003",
      "target": "FR-L6-COUNTER-003",
      "relationship": "OPPOSES",
      "resolution": "CLAIM_A_WINS"
    },
    {
      "source": "FR-L6-003",
      "target": "E-1253",
      "relationship": "CITES_RECORD",
      "recordNo": 1253
    }
    // ...
  ],
  "meta": {
    "generated": "2026-04-12T...",
    "atomCount": 112,
    "commitSha": "2e26162...",
    "schemaVersion": "2.0"
  }
}
```

### 0.4 Angular UI 로드 방식

```typescript
@Injectable()
export class GraphService {
  private graphData: GraphJson;
  
  async loadGraph(): Promise<void> {
    // 정적 JSON — Neo4j 쿼리 없음, 네트워크 호출 없음
    this.graphData = await fetch('/assets/graph.json').then(r => r.json());
  }
  
  getProofLevel(level: ProofLevel, layerFilter?: number): CytoscapeElements {
    // 메모리 내 필터링 — <10ms
    const nodes = this.graphData.nodes
      .filter(n => level.visibleNodeTypes.includes(n.type))
      .filter(n => !layerFilter || n.layers?.includes(layerFilter) || n.layer === layerFilter);
    
    const nodeIds = new Set(nodes.map(n => n.id));
    const edges = this.graphData.edges
      .filter(e => level.visibleRelationships.includes(e.relationship))
      .filter(e => nodeIds.has(e.source) && nodeIds.has(e.target));
    
    return toCytoscapeElements(nodes, edges);
  }
}
```

### 0.5 Neo4j의 재정의된 역할

Neo4j는 **UI의 critical path에서 완전히 빠진다.** 남은 역할:

| 기능 | 정적 JSON | Neo4j | 비고 |
|---|---|---|---|
| UI 시각화 (Proof Level 1/2/3) | **담당** | — | 빌드 시 갱신 |
| 단순 검색 | **담당** (BM25 on atoms) | — | |
| Centrality 분석 | Cytoscape.js 알고리즘 | 대안 | 클라이언트 사이드 |
| Multi-hop traversal (3+ hop) | 비효율적 | **담당** | 선택적 |
| Text2Cypher 자연어 쿼리 | 불가 | **담당** | 선택적 |
| FalsificationChecker 에이전트 | 불가 | **담당** | 배치 분석 |

### 0.6 빌드 파이프라인

```
atom 변경 (wiki/claims/*.md)
  ↓
scripts/atoms-to-graph-json.py    ← 항상 실행 (UI용 정적 JSON)
  ↓
ui/src/assets/graph.json          ← Angular 빌드에 포함
  
scripts/atoms-to-cypher.py        ← 선택적 실행 (고급 분석 필요 시)
  ↓
Neo4j                             ← 로컬 Docker, 필요할 때만 기동
```

### 0.7 비용 영향 최종

| 시나리오 | 기존 설계 | 정적 JSON 설계 |
|---|---|---|
| 로컬 개발 | Docker (Neo4j + API + UI) | **UI만** (`ng serve`) |
| 웹 배포 | $15~50/월 | **$0** (정적 호스팅) |
| 고급 분석 시 | 상시 | 분석 세션에서만 로컬 Docker |

---

## Part 0.8 — Visual Design System (은은한 + 간결)

### 0.8.0 확정 결정: "다크 기본 + Claude.ai 구조 차용" (James 승인 2026-04-12)

> **Claude.ai의 행동(구조, 인터랙션, 여백)은 가져오되, 외양(색상, 톤)은 Aurora 고유를 유지한다.**

| Claude.ai에서 가져오는 것 | Aurora 고유로 유지하는 것 |
|---|---|
| 입력창: 라운드 24px, 중앙 하단 고정, 미세 테두리 | 다크 배경 (#0f1117 계열) |
| 여백: 넓은 상하 마진, 콘텐츠 최대 너비 제한 | 7-Layer 은은한 채도 색상 |
| 인터랙션: 호버 시 미세한 배경 변화만, 과도한 애니메이션 없음 | 모순 쌍 카드 디자인 (Aurora 고유) |
| 메뉴/버튼: 극단적 최소화, 보이는 것만 존재 | 3축 진실 배지 (Aurora 고유) |
| 대화형 패턴: 응답이 입력 위로 쌓임 | Proof Level 시각화 (Aurora 고유) |

**이유:**
- Claude.ai는 "대화 도구" → 따뜻하고 친근. Aurora v2는 "증명 시스템" → 전문성과 권위 필요.
- 다크 배경에서 7-Layer 색상이 훨씬 잘 구분됨.
- Claude.ai와 동일하면 브랜드 혼동. Aurora 고유 정체성 유지.
- 향후 라이트 모드 추가 시 CSS 변수 기반으로 확장 가능 (골격 불변).

### 0.8.1 세 가지 영감원

| 영감원 | 가져오는 것 (구조/행동) | 가져오는 것 (외양/톤) | 버리는 것 |
|---|---|---|---|
| **Aurora v1** | 의미 기반 색상 체계, 배지 8% 투명도 패턴 | 저채도 레이어 색상, `rgba` 미세 오버레이 | 밝은 배경(`#fafafa`), Material 기본 그림자 |
| **Gemini** | 넓은 여백, 카드 기반 모듈, 클린 타이포그래피 | — (외양은 차용 안 함) | 장식적 요소, 밝은 노란 액센트 |
| **Claude.ai** | 입력창 스타일, 미니멀 인터랙션, 메뉴 최소화, 대화형 패턴, 여백 | — (외양은 차용 안 함, **구조만**) | 베이지/크림 배경, 라이트 테마 전체 |

### 0.8.2 Aurora v2 색상 체계 — "은은한 다크"

v1의 은은함(`rgba` 저투명도 오버레이)을 **다크 테마에 적용**한 것이 v2의 색상 정체성.

#### 기본 표면(Surface) — 미세한 명도 차이로 깊이 표현

```scss
// ── 은은한 다크 표면 팔레트 ──
// v1은 #fafafa → #ffffff → #f0f4f9 (밝은 표면의 미세한 차이)
// v2는 같은 원리를 다크에 적용

$surface-0: #0f1117;    // 최심부 배경 (앱 전체)
$surface-1: #161922;    // 1단계 상승 (사이드 패널)
$surface-2: #1c2030;    // 2단계 상승 (카드)
$surface-3: #232840;    // 3단계 상승 (호버 상태)
$surface-4: #2a3050;    // 4단계 상승 (활성 상태)

// 표면 간 명도 차이: 각 단계 5~8% → 은은한 구분
// v1의 rgba(0,0,0,0.02~0.08) 접근법의 다크 반전
```

#### 텍스트 — 4단계 투명도

```scss
$text-primary:   rgba(255, 255, 255, 0.92);  // 핵심 정보
$text-secondary: rgba(255, 255, 255, 0.65);  // 보조 정보
$text-tertiary:  rgba(255, 255, 255, 0.40);  // 힌트, 플레이스홀더
$text-disabled:  rgba(255, 255, 255, 0.20);  // 비활성
```

#### 레이어 색상 — v1 보존, 채도 10% 낮춤

```scss
// v1 원본 → v2 은은한 버전 (채도 낮춤, 다크 배경에 맞게)
$layer-1: #c62828 → #b03030;  // 붉은 갈색 (덜 자극적)
$layer-2: #e65100 → #cc5a10;  // 깊은 주황
$layer-3: #f57f17 → #d4881f;  // 따뜻한 황금
$layer-4: #1b5e20 → #2a6e35;  // 깊은 녹색
$layer-5: #0d47a1 → #1a5ab0;  // 깊은 파랑
$layer-6: #4a148c → #5a2a9a;  // 깊은 보라
$layer-7: #880e4f → #9a2060;  // 깊은 자홍

// 은은한 레이어 배경 (카드/배지용, v1의 rgba 패턴 계승)
$layer-1-bg: rgba($layer-1, 0.08);
$layer-2-bg: rgba($layer-2, 0.08);
// ... (각 레이어 8% 투명도)
```

#### 의미 색상 — 증명 체계 전용

```scss
// Verdict 색상 (v1의 Popper traffic light 계승, 은은하게)
$corroborated:      #3d9a5c;   // 안정된 초록 (v1 #4caf50보다 차분)
$corroborated-bg:   rgba($corroborated, 0.08);
$weakened:          #c75450;   // 차분한 빨강 (v1 #f44336보다 은은)
$weakened-bg:       rgba($weakened, 0.08);
$needs-more:        #c4982a;   // 따뜻한 노랑 (v1 #ffc107보다 깊음)
$needs-more-bg:     rgba($needs-more, 0.08);

// 3축 진실 색상
$truthfulness:      #5a8ec2;   // 차분한 파랑
$validity:          #8a6aaa;   // 차분한 보라
$sincerity:         #c27070;   // 차분한 분홍

// 관계 색상 (v1 계승, 은은하게)
$rel-ordered:   rgba(#ff9800, 0.7);   // 지시: 주황 70%
$rel-executed:  rgba(#f44336, 0.7);   // 실행: 빨강 70%
$rel-victimized: rgba(#2196f3, 0.7);  // 피해: 파랑 70%
$rel-chain:     rgba(#4caf50, 0.7);   // 연쇄: 초록 70%
```

#### 입력 필드 — Claude.ai 구조 차용 (확정)

```scss
// Claude.ai 구조를 Aurora 다크 톤에 적용
$input-bg:       $surface-1;
$input-border:   rgba(255, 255, 255, 0.08);  // 거의 안 보이는 테두리
$input-focus:    rgba(90, 142, 194, 0.20);   // 포커스 시 은은한 파랑 글로우
$input-radius:   24px;                        // Claude.ai 동일
$input-padding:  16px 24px;                   // Claude.ai 동일
$input-max-width: 768px;                      // Claude.ai 동일 — 중앙 제한

// Claude.ai에서 차용한 입력 필드 행동:
// - 하단 고정 (position: sticky, bottom: 0)
// - 좌우 중앙 정렬 (margin: 0 auto)
// - 포커스 시 테두리만 미세하게 밝아짐 (그림자 아님)
// - 내부 좌측에 아이콘 없음 — 텍스트만
// - placeholder: "무엇이든 물어보세요" (단일 문장)
// - 엔터로 제출, 버튼 최소화
```

#### Claude.ai 구조 차용 — 메뉴/버튼/인터랙션 세부

```scss
// ── Claude.ai에서 차용하는 UI 행동 규칙 ──

// 1. 메뉴 최소화: 화면에 보이는 버튼 수 ≤ 3
//    Claude.ai: 입력창 + 모델 선택 + 설정 아이콘 — 3개만
//    Aurora v2: 입력창 + Layer 탑 + [그래프 보기] — 3개만
//    나머지는 컨텍스트 메뉴 또는 키보드 단축키

// 2. 호버 반응: rgba 변화만, 그림자·크기 변화 없음
.interactive-element {
  transition: background-color 150ms ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.04);  // 미세한 밝아짐만
    // box-shadow 없음, transform 없음, border 변화 없음
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.08);
  }
}

// 3. 카드 테두리: 거의 안 보이되 존재함
.card {
  border: 1px solid rgba(255, 255, 255, 0.04);  // Claude.ai: rgba(0,0,0,0.05)의 다크 반전
  border-radius: 12px;                           // Claude.ai보다 약간 작음 (16→12)
  box-shadow: none;                              // 그림자 없음 — Claude.ai 동일
}

// 4. 스크롤바: 기본 숨김, 호버 시 은은하게
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.10);
  border-radius: 3px;
}

// 5. 토스트/알림: 없음
//    Claude.ai에는 toast notification이 거의 없음 — Aurora v2도 동일
//    상태 변화는 inline으로만 표시 (배지 색상 변경 등)

// 6. 로딩 상태: 미세한 pulse만
.loading {
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
```

#### 향후 라이트 모드 확장 대비 — CSS 변수 구조

```scss
// 현재: 다크만 구현. 향후 라이트 추가 시 이 변수만 교체
:root {
  --surface-0: #{$surface-0};
  --surface-1: #{$surface-1};
  --surface-2: #{$surface-2};
  --surface-3: #{$surface-3};
  --surface-4: #{$surface-4};
  --text-primary: #{$text-primary};
  --text-secondary: #{$text-secondary};
  --text-tertiary: #{$text-tertiary};
  --input-border: #{$input-border};
  --input-focus: #{$input-focus};
  --card-border: rgba(255, 255, 255, 0.04);
  --hover-bg: rgba(255, 255, 255, 0.04);
  --active-bg: rgba(255, 255, 255, 0.08);
}

// 모든 컴포넌트는 var(--surface-0) 등 변수로 참조
// 향후 라이트 모드 추가 시:
// :root[data-theme="light"] { --surface-0: #FAF9F6; ... }
// 컴포넌트 코드 변경 없이 테마 전환 가능
```

### 0.8.3 레이아웃 원칙 — Gemini + Claude.ai 융합

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     (넓은 상단 여백 — Gemini 스타일)                               │
│                                                                 │
│     ┌─ 좁은 사이드 ─┐  ┌─── 넓은 중앙 ──────────┐  ┌─ 우측 ─┐  │
│     │               │  │                        │  │        │  │
│     │  Layer Nav    │  │  증명 본문              │  │ 증거   │  │
│     │               │  │                        │  │        │  │
│     │  (축소형,     │  │  (여백 충분,            │  │ (컴팩트,│  │
│     │   텍스트 없이 │  │   카드 간 24px gap,     │  │  스크롤)│  │
│     │   번호+색만)  │  │   최대 너비 제한)        │  │        │  │
│     │               │  │                        │  │        │  │
│     └───────────────┘  └────────────────────────┘  └────────┘  │
│                                                                 │
│     ┌──────────────── 입력 영역 (중앙 정렬) ───────────────────┐  │
│     │  [                                                    ]  │  │
│     └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│     (넓은 하단 여백)                                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Gemini에서 가져온 것:**
- 카드 간 일정한 gap (24px)
- 카드 내부 넉넉한 padding (20px)
- 섹션 간 넓은 여백 (40px+)
- 콘텐츠 최대 너비 제한 (중앙에 너무 넓게 퍼지지 않음)

**Claude.ai에서 가져온 것:**
- 입력 필드가 화면 하단 중앙에 고정 (첫 화면, 증명 화면 모두)
- 라운드 모서리 입력 필드 (24px radius)
- 응답이 입력 위로 쌓이는 대화형 패턴
- 불필요한 버튼/메뉴 최소화 — 보이는 것만 있다

**Aurora v1에서 가져온 것:**
- `rgba(0,0,0,0.02~0.08)` 미세 오버레이로 호버/활성 표현
- v2에서는 `rgba(255,255,255,0.02~0.08)`로 반전 적용
- 배지의 8% 투명도 배경 (verdict, layer, role)

### 0.8.3a 다국어 지원 — 3-tier 언어 구조 (확정 2026-04-12)

#### 설계 원칙

> **UI 라벨은 전환 가능, 도메인 용어는 전환 가능, 콘텐츠(atom 본문)는 원본 보존.**

| Tier | 대상 | 전환 | 예시 |
|---|---|---|---|
| **Tier 1: UI 라벨** | 메뉴, 버튼, 헤더, 플레이스홀더 | 토글 즉시 전환 | "도움말" ⟷ "Help" |
| **Tier 2: 도메인 용어** | Layer 이름, verdict, 3축 이름 | 토글 즉시 전환 | "진리성" ⟷ "Truthfulness" |
| **Tier 3: 콘텐츠** | atom 본문, claim, verbatim 인용 | **전환 안 함** | 원본 언어 보존 (증거 가치) |

#### 구현: JSON 번역 파일 + v1 토글 서비스 계승

v1의 `LanguageService` signal 기반 토글을 유지하되, 인라인 삼항(`lang() === 'en' ? 'X' : 'Y'`)을 **JSON 키 참조**로 교체.

```typescript
// services/language.service.ts
@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<'en' | 'kr'>('kr');  // 기본값: 한국어
  private translations: Record<string, Record<string, string>> = {};
  
  async init() {
    this.translations['en'] = await fetch('/assets/i18n/en.json').then(r => r.json());
    this.translations['kr'] = await fetch('/assets/i18n/kr.json').then(r => r.json());
  }
  
  t(key: string): string {
    return this.translations[this.lang()]?.[key] || key;
  }
  
  toggle(): void {
    this.lang.update(v => v === 'en' ? 'kr' : 'en');
  }
}
```

번역 파일: `assets/i18n/kr.json`, `assets/i18n/en.json` — 모든 UI/도메인 문자열 집중 관리.
향후 언어 추가 시 JSON 파일 하나 추가 + `lang` signal 타입 확장만으로 가능.

#### 토글 위치

우상단 `[KR ⟷ EN]` — v1과 동일 위치, 은은한 다크 스타일 배지.

#### Tier 3 콘텐츠 표시

atom 본문은 원본 언어 항상 표시. Key Takeaways는 영문 버전 항상 포함 (CLAUDE.md 규칙).
UI 언어가 'en'일 때 영문 Key Takeaways 강조, 'kr'일 때 한국어 본문 강조.

#### v1 대비 개선

- 번역: 23개 파일 분산 하드코딩 → **2개 JSON 집중**
- 기본 언어: 'en' → **'kr'** (주 사용자 기준)
- 콘텐츠: 구분 없음 → **Tier 3 분리 (원본 보존)**
- 검증: 불가 → **빌드 시 키 교차 검증 가능**

### 0.8.4 타이포그래피

```scss
// Gemini 스타일: 명확한 계층, 깨끗한 산세리프
$font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;

$heading-1:  28px / 1.3 / 600;   // 페이지 제목
$heading-2:  20px / 1.4 / 600;   // 섹션 제목 (Layer 이름)
$heading-3:  16px / 1.4 / 600;   // 카드 제목 (Contradiction)
$body:       14px / 1.6 / 400;   // 본문
$body-small: 12px / 1.5 / 400;   // 보조 텍스트
$caption:    11px / 1.4 / 400;   // 배지, 메타데이터
$mono:       'JetBrains Mono', monospace;  // Record No., Cypher
```

### 0.8.5 모순 쌍 카드 — 은은한 대비

```scss
// 모순 쌍 카드: 두 주장이 나란히, 은은한 색상 차이로 대비
.contradiction-pair {
  background: $surface-2;
  border: 1px solid rgba(255, 255, 255, 0.04);  // 거의 안 보이는 테두리
  border-radius: 12px;
  padding: 20px;
  
  .claim-a {
    background: $surface-3;
    border-left: 3px solid $truthfulness;  // 은은한 파랑 좌측선
  }
  
  .claim-b {
    background: $surface-3;
    border-left: 3px solid $needs-more;    // 은은한 노랑 좌측선
  }
  
  .vs-divider {
    color: $text-tertiary;  // "vs"가 은은하게
  }
  
  .verdict-badge {
    background: $corroborated-bg;  // 8% 투명도
    color: $corroborated;
    font-size: $caption;
    border-radius: 100px;
    padding: 4px 12px;
  }
}
```

### 0.8.6 3축 진실 배지 — v1 스타일 계승

```scss
// v1의 Popper card 색상 + 8% 투명도 접근법 그대로
.truth-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: $caption;
  
  &.truthfulness {
    background: rgba($truthfulness, 0.08);
    color: $truthfulness;
  }
  &.validity {
    background: rgba($validity, 0.08);
    color: $validity;
  }
  &.sincerity {
    background: rgba($sincerity, 0.08);
    color: $sincerity;
  }
  
  .dots {
    letter-spacing: 2px;  // ●●●●○ 표시
  }
}
```

### 0.8.7 첫 화면 — Claude.ai 미니멀리즘 적용

```
┌─────────────────────────────────────────────────────────┐
│  (surface-0 배경, 장식 없음)                              │
│                                                         │
│                                                         │
│            2016 DIDC 북한 해킹 사건                      │
│            조직적 은폐 범죄 증명 체계                      │
│            (text-secondary, 작은 글씨)                    │
│                                                         │
│         ┌─ 7-Layer 탑 (은은한 색상 바) ─────────┐        │
│         │  7  ██░░  진정서·수사 촉구 후 기소유예  │        │
│         │  6  ███░  군 검찰단의 사기 수사        │        │
│         │  5  ████  허위 갑질 신고와 조작 감사   │        │
│         │  4  ██░░  新KIATIS 시험평가 조작       │        │
│         │  3  ██░░  국전원 전속 후 사업관리      │        │
│         │  2  ███░  新KIATIS 추진체계 조작       │        │
│         │  1  ████  Active-X 舊KIATIS 이력 제거  │        │
│         └────────────────────────────────────────┘        │
│                                                         │
│         112 atoms · 13,495 records · 42 persons          │
│         (text-tertiary)                                  │
│                                                         │
│    ┌────────────────────────────────────────────────┐    │
│    │  무엇이든 물어보세요                              │    │
│    └────────────────────────────────────────────────┘    │
│    (Claude.ai 스타일: 라운드, 중앙, 은은한 테두리)         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**핵심:** 화면에 보이는 요소가 **7-Layer 탑 + 통계 한 줄 + 입력창 하나** — 이것이 Claude.ai의 간결함. 색상은 레이어별로 은은하게 차별화되지만, 전체 톤은 차분하고 통일.

### 0.8.8 Angular Material 테마 설정

```typescript
// Angular Material custom theme (다크 + 은은한)
import { definePreset } from '@angular/material';

export const auroraTheme = definePreset({
  palette: {
    primary: { main: '#5a8ec2' },       // 차분한 파랑 (v1의 #1a237e보다 밝고 은은)
    accent: { main: '#c4982a' },        // 따뜻한 노랑 (Gemini의 강한 노랑 대신)
    warn: { main: '#c75450' },          // 차분한 빨강
    background: {
      default: '#0f1117',               // surface-0
      paper: '#1c2030',                 // surface-2
    },
    text: {
      primary: 'rgba(255,255,255,0.92)',
      secondary: 'rgba(255,255,255,0.65)',
    },
  },
  shape: {
    borderRadius: 12,                   // Gemini + Claude 라운드
  },
});
```

---

## Part I — Proof Level 시각화 아키텍처

### 1.1 문제 진단

Aurora v1은 Neo4j의 12개 Relationship을 **전부 한 화면에** 보여줬다. 결과:
- 노드와 엣지의 바다 속에서 사용자가 길을 잃음
- "그래서 이게 뭘 증명하는데?"에 답 못함
- 그래프가 데이터베이스 브라우저에 머무름

### 1.2 해법 — 3단계 Proof Level

같은 Cytoscape.js 인스턴스에서 **보여주는 Relationship을 Level별로 제한**한다.

#### Level 1 — 범죄 구조도 (Crime Structure) — 기본 뷰

**보여주는 Relationship (4개):**

| Relationship | 의미 | v1 스타일 (재활용) |
|---|---|---|
| `ORDERED_BY` | 누가 지시 | 주황 2px |
| `EXECUTED_BY` | 누가 실행 | 빨강 2px |
| `VICTIMIZED` | 누가 피해 | 파랑 점선 1.5px |
| `CRIME_CHAIN` | 범죄 연쇄 | 초록 3px |

**보여주는 Node (2개):** `Person`, `CriminalAct`
**숨기는 것:** Evidence, Directive, Organization, 나머지 8개 Relationship
**노드 수:** Layer당 20~30개 → Cytoscape.js 최적 범위
**레이아웃:** COSE (force-directed), v1과 동일

**이것이 답하는 질문:** "누가 지시하고, 누가 실행하고, 누가 피해를 봤는가"

```
Person ──ORDERED──→ CriminalAct ──CHAIN──→ CriminalAct
  │                      │                       │
  │                  EXECUTED                 ORDERED
  │                      │                       │
Person               Person                  Person
  │                      │
VICTIMIZED           VICTIMIZED
  ↓                      ↓
Person               Person
```

#### Level 2 — 증거 연결도 (Evidence Trail) — CriminalAct 클릭 시

**보여주는 Relationship (4개):**

| Relationship | 의미 | 새 스타일 |
|---|---|---|
| `SUPPORTED_BY` | 증거 뒷받침 | 회색 실선 1px |
| `VIOLATED` | 위반 조문 | 주황 점선 1.5px |
| `MANIPULATED_WITH` | 한→미 규정 조작 | 빨강 2px |
| `CONTRADICTS` | 모순 관계 | 빨강 점선 2px |

**보여주는 Node (4개):** `CriminalAct`, `Evidence`, `Directive`, `Contradiction`
**노드 수:** 5~8개 (선택된 CriminalAct 1개 + 연결된 증거·조문)
**레이아웃:** Breadthfirst (CriminalAct를 root로)

**이것이 답하는 질문:** "이 범죄를 뒷받침하는 증거가 무엇이고, 어떤 법을 위반했는가"

```
                   VIOLATED
CriminalAct ──────────────→ Directive (제2129호 제57조)
     │                           │
     │ SUPPORTED_BY               │ MANIPULATED_WITH
     ↓                           ↓
  Evidence ×3               Directive (US DoD OT&E)
  (Record No. 10,347)
  (Record No. 10,352)
```

#### Level 3 — 교차 층위 조감도 (Cross-Layer Overview) — 전체 보기 요청 시

**보여주는 Relationship (3개):**

| Relationship | 의미 | 새 스타일 |
|---|---|---|
| `CRIME_CHAIN` | 층위 횡단 범죄 연쇄 | Layer 색상 그라데이션 3px |
| `PART_OF_LAYER` | 층위 소속 | 회색 점선 0.5px |
| `CONCEALED_BY` | 은폐 주체 | 검정 2px |

**보여주는 Node (3개):** `CriminalAct`, `Layer`, `Person` (은폐 주체만)
**노드 수:** 50~100개 (전체 CriminalAct + 7 Layer)
**레이아웃:** Concentric (Layer = 동심원)

**이것이 답하는 질문:** "7개 층위를 횡단하는 범죄 연쇄의 전체 구조"

```
        L1 ──CHAIN──→ L2 ──CHAIN──→ L3 ──CHAIN──→ L4
                                                      │
        L7 ←──CHAIN── L6 ←──CHAIN── L5 ←──CHAIN──────┘
```

### 1.3 구현 — Relationship Filter 패턴

```typescript
// v2 핵심 추가 로직 (~200 LoC)
interface ProofLevel {
  name: string;
  nameKr: string;
  visibleRelationships: string[];
  visibleNodeTypes: string[];
  layout: cytoscape.LayoutOptions;
  description: string;
}

const PROOF_LEVELS: ProofLevel[] = [
  {
    name: 'Crime Structure',
    nameKr: '범죄 구조도',
    visibleRelationships: ['ORDERED_BY', 'EXECUTED_BY', 'VICTIMIZED', 'CRIME_CHAIN'],
    visibleNodeTypes: ['Person', 'CriminalAct'],
    layout: { name: 'cose', nodeRepulsion: () => 8000, idealEdgeLength: () => 100 },
    description: '누가 지시하고, 실행하고, 피해를 봤는가'
  },
  {
    name: 'Evidence Trail',
    nameKr: '증거 연결도',
    visibleRelationships: ['SUPPORTED_BY', 'VIOLATED', 'MANIPULATED_WITH', 'CONTRADICTS'],
    visibleNodeTypes: ['CriminalAct', 'Evidence', 'Directive', 'Contradiction'],
    layout: { name: 'breadthfirst', roots: '[type="CriminalAct"]' },
    description: '어떤 증거가 이를 뒷받침하는가'
  },
  {
    name: 'Cross-Layer Overview',
    nameKr: '교차 층위 조감도',
    visibleRelationships: ['CRIME_CHAIN', 'PART_OF_LAYER', 'CONCEALED_BY'],
    visibleNodeTypes: ['CriminalAct', 'Layer', 'Person'],
    layout: { name: 'concentric', concentric: (n) => n.data('layerNum') || 0 },
    description: '7개 층위를 횡단하는 범죄 연쇄'
  }
];

// Level 전환 시:
function applyProofLevel(cy: cytoscape.Core, level: ProofLevel) {
  // 모든 요소 숨기기
  cy.elements().addClass('hidden');
  
  // 해당 Level의 Relationship만 보이기
  level.visibleRelationships.forEach(rel => {
    cy.edges(`[relationship="${rel}"]`).removeClass('hidden');
  });
  
  // 해당 Level의 Node만 보이기
  level.visibleNodeTypes.forEach(type => {
    cy.nodes(`[type="${type}"]`).removeClass('hidden');
  });
  
  // 연결된 노드도 보이기 (orphan 방지)
  cy.edges(':visible').connectedNodes().removeClass('hidden');
  
  // 레이아웃 재적용
  cy.layout(level.layout).run();
}
```

### 1.4 v1에서 가져오는 것 / 버리는 것 / 추가하는 것

| 구분 | 항목 | 이유 |
|---|---|---|
| **가져옴** | COSE 레이아웃 + 4개 Relationship 스타일 코드 | 증명의 뼈대, v1에 이미 구현 |
| **가져옴** | 2-hop 포커스 (더블클릭 neighborhood) | Level 1에서 이웃 탐색에 유효 |
| **가져옴** | Layer 색상 매핑 (7색) | 시각적 일관성 |
| **가져옴** | evidence-browser + pdf-viewer 컴포넌트 | Level 2의 우측 패널 |
| **버림** | 밝은 배경 (#FAFAFA) | 다크테마로 전환 (#1A1A2E) |
| **버림** | 3개 뷰 모드 (person/criminal-act/community) | Proof Level 패턴으로 대체 |
| **버림** | Community 뷰 전체 | 100개 미만 노드에 불필요 |
| **버림** | Onboarding tour | 첫 화면이 자기 설명적 |
| **추가** | Proof Level 전환 (Relationship Filter) | 핵심 설계 변경 (~200 LoC) |
| **추가** | 역할-앵커 노드 라벨 `(역할-N)` | 직책이 범죄의 도구 |
| **추가** | Centrality 자동 하이라이트 | 핵심 공모자 식별 |
| **추가** | Evidence 패널 연동 (노드 클릭 → Record No.) | 증거 거리 0 원칙 |

### 1.5 도구 선택 최종 결정

| Level | 최적 도구 | 결정 | 이유 |
|---|---|---|---|
| L1 범죄 구조도 | Cytoscape.js | **확정** | v1 코드 재활용, 그래프 알고리즘, 20~30 노드 최적 |
| L2 증거 연결도 | Cytoscape.js | **확정** | 같은 인스턴스에서 filter만 변경, 5~8 노드 |
| L3 교차 층위 조감 | Cytoscape.js | **확정** | Concentric 레이아웃으로 50~100 노드 처리 가능 |
| 프레젠테이션 | 3D Force Graph | **선택적** | 법정/발표용, 별도 모달, 필요시만 |
| 전체 코퍼스 | Sigma.js | **보류** | 13,495 Record 조감도, Checkpoint 3 결정 시 재평가 |

**단일 도구(Cytoscape.js)로 3개 Level을 모두 커버하는 것이 유지보수 비용 최소화의 핵심.**

---

## Part II — Neo4j 스키마 진화: Atom 완성 시 필요한 변경

### 2.1 현황 대조

현재 wiki atom 112개 전수 조사 결과:
- **112개 전부** `FalsificationResult` MERGE 블록 보유
- resultId 패턴: `FR-L{N}-{ID}` (예: `FR-L6-003`, `FR-L4-A8a-001`, `FR-L1-DIDC-007`)
- 모든 atom에 `verdict`, `truthfulness`, `validity`, `sincerity`, `counterHypothesis`, `falsificationCondition` 포함

### 2.2 스키마 갭 분석 — 변경 필요 항목

#### A. 추가해야 하는 것 (ADD)

**A-1. `Claim` 노드 신설 (또는 `FalsificationResult` 확장)**

현재 상태: wiki atom = `FalsificationResult` 1:1 매핑. 그러나 `FalsificationResult`는 **검증 결과**이지 **주장 자체**가 아님.

문제: atom이 300~500개가 되면, "이 주장은 아직 검증 전이다"(atom은 있지만 verdict가 없는 상태)가 발생. 현재 스키마에서는 `FalsificationResult`를 만들어야만 atom이 Neo4j에 존재할 수 있음.

**권고: FalsificationResult를 확장하여 Claim 역할도 수행하게 하되, `status` 속성 추가.**

```cypher
// 기존 FalsificationResult에 속성 추가
CREATE INDEX falsification_status IF NOT EXISTS 
  FOR (n:FalsificationResult) ON (n.status);

// status: 'DRAFT' | 'VERIFIED' | 'DISPUTED'
// DRAFT = atom 작성됨, 검증 전
// VERIFIED = verdict 확정
// DISPUTED = 모순 쌍의 일부로 재검토 중
```

이유: 별도 `Claim` 노드를 만들면 `Claim → FalsificationResult` 관계가 필요하고, 스키마가 복잡해짐. atom과 FalsificationResult의 1:1 매핑을 유지하는 것이 단순.

**A-2. `OPPOSES` Relationship 신설 — 모순 쌍(Contradiction Pair) 표현**

현재 상태: `Contradiction` 노드가 있고 `CONTRADICTS → CriminalAct` 관계가 있음. 그러나 atom↔atom 간의 **직접 대립 관계**를 표현할 수 없음.

문제: wiki의 모순 쌍(예: "wiki가 hedge 삽입을 확인" vs "책이 동일하다고 표기")은 **두 FalsificationResult 간의 관계**. 현재 스키마에는 FalsificationResult↔FalsificationResult 관계가 없음.

```cypher
// 새 Relationship
// (FalsificationResult)-[:OPPOSES {type, resolution}]->(FalsificationResult)
//   type: 'DIRECT_CONTRADICTION' | 'PARTIAL_TENSION' | 'COMPLEMENTARY'
//   resolution: 'CLAIM_A_WINS' | 'CLAIM_B_WINS' | 'UNRESOLVED' | 'BOTH_VALID'

// 예시:
MATCH (a:FalsificationResult {resultId: "FR-L4-A8a-001"}),
      (b:FalsificationResult {resultId: "FR-L4-BOOK-ART57-TABLE"})
MERGE (a)-[:OPPOSES {
  type: "DIRECT_CONTRADICTION",
  resolution: "CLAIM_A_WINS",
  resolutionMethod: "blind_remeasurement",
  resolutionDate: date("2026-04-11")
}]->(b);
```

이 관계가 Checkpoint 2 완료의 핵심 — "모든 핵심 모순이 claim-atom 쌍으로 표현됨"의 Neo4j 표현.

**A-3. `roleAnchor` 속성 추가 — Person 노드**

현재 상태: `Person`에 `name`, `side`, `rank`, `role`, `org`, `layer` 있음. 그러나 책의 `(역할-N)` 식별자가 없음.

```cypher
// Person 노드에 속성 추가
MATCH (p:Person {name: "박성호"})
SET p.roleAnchors = [
  "2016해킹당시원장-1",
  "사업주관기관장-1"
];

// 인덱스
CREATE INDEX person_role_anchor IF NOT EXISTS 
  FOR (n:Person) ON (n.roleAnchors);
```

이유: 역할-앵커는 **같은 사람이 여러 층위에서 다른 역할로 등장**하는 것을 표현. 이것이 교차 층위 공모의 핵심 증거. UI에서 노드 라벨에 직접 표시됨.

**A-4. `CITES_RECORD` Relationship 신설 — Record No. 추적**

현재 상태: `Evidence` 노드에 `evidenceId` (E-L4-001 형식)와 `docPage` 있음. 그러나 atom이 인용하는 `Record No.`와 Evidence 노드의 연결이 **직접적이지 않음**.

```cypher
// FalsificationResult가 인용하는 Record No.를 직접 연결
// (FalsificationResult)-[:CITES_RECORD {recordNo}]->(Evidence)

MATCH (fr:FalsificationResult {resultId: "FR-L6-003"}),
      (e:Evidence {docPage: 1253})
MERGE (fr)-[:CITES_RECORD {recordNo: 1253}]->(e);
```

이유: `Record No.`는 wiki, 책, 스캔본, Neo4j의 **universal join key** (CLAUDE.md §self-compiling). 이 관계가 있어야 Level 2 시각화에서 "이 atom이 인용하는 증거 원본"을 직접 탐색 가능.

**A-5. `SUPERSEDES` Relationship 보강 — Directive 개정 추적**

현재 상태: 스키마에 `SUPERSEDES` 정의는 있으나, 실제 데이터에 11개 훈령 개정 간의 SUPERSEDES 관계가 충분히 채워져 있는지 불확실.

```cypher
// 훈령 개정 체인
MATCH (d2129:Directive {name: "국방정보화업무 훈령 제2129호"}),
      (d2263:Directive {name: "국방정보화업무 훈령 제2263호"})
MERGE (d2263)-[:SUPERSEDES {
  effectiveDate: date("2019-06-20"),
  changedArticles: [57, 58, 76]
}]->(d2129);
```

이유: atom의 핵심 분석(A.3 revision timeline)이 11개 훈령의 조문별 변화 추적. `SUPERSEDES` 체인이 완전해야 Level 2에서 "이 조문이 어떻게 바뀌었는가"를 시각화 가능.

#### B. 보완해야 하는 것 (MODIFY)

**B-1. `Evidence` 노드 — 이중 ID 체계 반영**

현재: `evidenceId` = `E-L4-001` 형식만.
필요: `recordNo` 속성 추가하여 `Record No. NNNNN` 체계도 직접 조회 가능.

```cypher
// 기존 Evidence 노드에 recordNo 속성 추가
MATCH (e:Evidence)
WHERE e.docPage IS NOT NULL
SET e.recordNo = e.docPage;

// 인덱스
CREATE INDEX evidence_record_no IF NOT EXISTS 
  FOR (n:Evidence) ON (n.recordNo);
```

**B-2. `FalsificationResult` — wiki atom 경로 속성 추가**

현재: FalsificationResult에 wiki 파일 경로가 없음.
필요: atom의 wiki 파일명을 속성으로 가져야 UI에서 "이 노드의 wiki 원문 보기"가 가능.

```cypher
MATCH (fr:FalsificationResult {resultId: "FR-L6-003"})
SET fr.wikiPath = "wiki/claims/prosecution-misapplies-2129-article-58-4-to-kiatis.md",
    fr.wikiSlug = "prosecution-misapplies-2129-article-58-4-to-kiatis";
```

**B-3. `CriminalAct` — atom 연결 강화**

현재: `CriminalAct`은 범죄 유형 단위 (예: "시험평가 조작"). 하나의 CriminalAct에 여러 FalsificationResult가 연결됨.
보완: `TARGETS` 관계(FalsificationResult → CriminalAct)가 모든 atom에 대해 존재하는지 검증.

```cypher
// atoms-to-cypher.py가 자동 생성해야 하는 관계
MATCH (fr:FalsificationResult {resultId: "FR-L6-003"})
MATCH (ca:CriminalAct {actType: "prosecution_legal_misapplication", layer: 6})
MERGE (fr)-[:TARGETS]->(ca);
```

#### C. 삭제 후보 (DELETE — 주의)

**C-1. `Community` 관련 구조 — 재평가 필요**

v1의 Community 뷰(graph.component.ts 869~991줄)는 GraphRAG의 Leiden 알고리즘이 생성한 커뮤니티를 시각화. 그러나:

- Aurora v2에서는 **7-Layer가 자연 클러스터** → 별도 커뮤니티 탐지 불필요
- wiki atom의 Layer 속성이 이미 클러스터링 역할 수행
- GraphRAG 커뮤니티와 7-Layer 간의 **불일치**가 오히려 혼란 유발 가능

**권고:** Community 노드와 관계를 즉시 삭제하지는 않되, v2 UI에서는 사용하지 않음. GraphRAG reindexing 시 커뮤니티 데이터가 자연 소멸하도록 방치.

**C-2. `confidence` 속성의 관계별 편재 — 정리 필요**

v1에서 `r.confidence`가 여러 Relationship에 붙어 있으나, 일관된 기준이 없음. atom 기반으로 전환하면 `FalsificationResult.strength`와 `verdict`가 신뢰도의 단일 원천이 됨.

**권고:** 기존 `r.confidence`를 유지하되, 새로 생성하는 관계에는 붙이지 않음. 점진적으로 FalsificationResult의 verdict/strength로 대체.

### 2.3 스키마 변경 요약표

| 유형 | 항목 | 우선순위 | 시점 |
|---|---|---|---|
| **ADD** | `status` 속성 (FalsificationResult) | 높음 | Phase 1 — atom 컴파일 시 |
| **ADD** | `OPPOSES` 관계 (FR↔FR) | **최고** | Phase 1 — Checkpoint 2 핵심 |
| **ADD** | `roleAnchors` 속성 (Person) | 높음 | Phase 1 — UI 노드 라벨 필요 |
| **ADD** | `CITES_RECORD` 관계 (FR→Evidence) | 높음 | Phase 1 — Level 2 시각화 필수 |
| **ADD** | `SUPERSEDES` 보강 (Directive 체인) | 중간 | Phase 2 — 훈령 개정 시각화 |
| **MODIFY** | `recordNo` 속성 (Evidence) | 높음 | Phase 1 — 이중 ID 체계 |
| **MODIFY** | `wikiPath`/`wikiSlug` (FR) | 높음 | Phase 1 — UI→wiki 연결 |
| **MODIFY** | `TARGETS` 관계 검증 (FR→CA) | 중간 | Phase 1 — atoms-to-cypher.py |
| **DEFER** | Community 구조 | 낮음 | 자연 소멸 대기 |
| **DEFER** | `r.confidence` 정리 | 낮음 | 점진적 대체 |

### 2.4 atoms-to-cypher.py가 자동 생성해야 하는 것

`scripts/atoms-to-cypher.py`가 wiki atom 1개당 생성하는 Cypher:

```cypher
// 1. FalsificationResult 노드 (atom의 MERGE 블록 그대로)
MERGE (fr:FalsificationResult {resultId: "FR-L6-003"})
SET fr.layer = 6,
    fr.claimType = "prosecution_legal_misapplication",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 10,
    fr.validity = 10,
    fr.sincerity = 9,
    // ... (기존 속성)
    fr.status = "VERIFIED",                                          // ← 추가
    fr.wikiPath = "wiki/claims/prosecution-misapplies-...",          // ← 추가
    fr.wikiSlug = "prosecution-misapplies-2129-article-58-4-to-kiatis"; // ← 추가

// 2. Layer 연결
MATCH (l:Layer {layerNum: 6})
MERGE (fr)-[:PART_OF_LAYER]->(l);

// 3. Record No. 인용 연결 (atom 본문에서 파싱)
MATCH (e:Evidence {recordNo: 1253})
MERGE (fr)-[:CITES_RECORD {recordNo: 1253}]->(e);

// 4. CriminalAct 연결 (claimType에서 매핑)
MATCH (ca:CriminalAct {layer: 6})
WHERE ca.actType CONTAINS "prosecution" OR ca.actType CONTAINS "legal"
MERGE (fr)-[:TARGETS]->(ca);

// 5. 모순 쌍 연결 (wiki/_contradictions.md에서 파싱)
MATCH (fr2:FalsificationResult {resultId: "FR-L6-COUNTER-003"})
MERGE (fr)-[:OPPOSES {
  type: "DIRECT_CONTRADICTION",
  resolution: "CLAIM_A_WINS"
}]->(fr2);
```

### 2.5 스키마 진화 원칙

1. **wiki가 원천, Neo4j는 유도물** — 스키마 변경은 wiki atom 구조가 요구할 때만 발생
2. **atoms-to-cypher.py가 유일한 write 경로** — 수동 Cypher MERGE 금지
3. **기존 노드/관계 삭제 금지** — 새 속성/관계 추가만, 제거는 검증 후
4. **`aurora_schema.cypher` 동기화** — 이 문서의 변경 사항은 `kg/schema/aurora_schema.cypher`에 반영 후 커밋

---

## Part III — 통합 구현 로드맵

### Phase 1 — 컴파일러 + 정적 그래프 생성 (현재 착수 가능)

| 작업 | 설명 | 의존성 |
|---|---|---|
| 1a | `atoms-to-graph-json.py` 작성: atom → graph.json (정적 UI용) | atom 112개 (충족) |
| 1b | `atoms-to-cypher.py` 업데이트: OPPOSES, CITES_RECORD, roleAnchors | 1a와 병행 |
| 1c | graph.json 검증: Proof Level 1/2/3 필터 테스트 (Node.js 스크립트) | 1a |
| 1d | `build-record-index.py` 실행 → `_record-index.md` 갱신 | 1a |
| 1e | (선택) Neo4j 재컴파일: 고급 분석 필요 시에만 | 1b |

### Phase 2 — UI + 정적 배포 (API 최소화)

| 작업 | 설명 | 의존성 |
|---|---|---|
| 2a | graph.json을 Angular assets에 포함, GraphService 구현 | Phase 1 |
| 2b | wiki atom 마크다운을 정적 HTML/JSON으로 빌드 (atom 본문 표시용) | Phase 1 |
| 2c | 가명화 guard: 빌드 시 + 클라이언트 사이드 이중 방어 | Phase 1 |
| 2d | (선택) 자연어 쿼리 API: LLM 호출 필요 시에만 서버 | 필요 시 |

### Phase 3 — UI (본질주의 단일 화면)

| 작업 | 설명 | 의존성 |
|---|---|---|
| 3a | 새 Angular 프로젝트 생성 (v1 코드 mutate 금지) | — |
| 3b | v1에서 graph.component.ts 추출 + Proof Level 패턴 적용 | 3a |
| 3c | Landing 화면: 7-Layer 탑 + 진행률 + 통계 | 3a |
| 3d | 3-패널 증명 화면: Layer Navigator / 모순 쌍 / 증거 맥락 | 3a, 3b |
| 3e | Graph 모달: Level 전환 UI + 역할-앵커 노드 라벨 | 3b |
| 3f | Evidence 패널 연동: Record No. 클릭 → PDF 미리보기 | 3d |
| 3g | 다국어: JSON 번역 파일 + LanguageService + KR/EN 토글 | 3a |
| 3h | 은은한 다크 테마 + Claude.ai 구조 차용 SCSS | 3a |

### Phase 4 — 개방형 웹 공개 (Checkpoint 2 달성 후)

> **증명 시스템은 공개되어야 증명으로 기능한다.**

#### 4.1 단계적 개방

| Stage | 조건 | 범위 | 비용 |
|---|---|---|---|
| **Stage 0** (현재) | — | James 단독 | $0 |
| **Stage 1** | Checkpoint 2 달성 | 읽기 전용 공개 — 정적 사이트, atom/graph 열람, 질의 없음 | $0 |
| **Stage 2** | James 판단 | 클라이언트 사이드 BM25 검색 추가 (서버 없음) | $0 |
| **Stage 3** | 필요 시 | LLM 자연어 질의 (API 서버 필요) | 사용량 비례 |

#### 4.2 개방형 추가 작업

| # | 작업 | 설명 | 골격 변경 |
|---|---|---|---|
| 4a | **가명화 3중 방어** | 빌드 시 pseudonym 대조(실명→빌드실패) + 런타임 guard + CSP 헤더 | 골격 위 추가 |
| 4b | **SSR/Prerender** | Angular Universal 또는 `ng prerender` — SEO용 검색엔진 노출 | 골격 위 추가 |
| 4c | **Open Graph 메타태그** | SNS 공유 시 7-Layer 구조 미리보기 카드 | 골격 위 추가 |
| 4d | **면책 고지 + 라이선스** | CC BY-NC 또는 유사, 법적 면책 선언, 개인정보 미수집 선언 | 골격 위 추가 |
| 4e | **접근성** | WCAG 2.1 AA 준수 (키보드 네비게이션, 스크린 리더, 색상 대비) | 골격 위 추가 |
| 4f | **Analytics** | Plausible (개인정보 미수집, 쿠키 없음) | 골격 위 추가 |
| 4g | **CDN 배포** | Vercel/Cloudflare Pages (무료 티어: 월 100GB) | 골격 위 추가 |
| 4h | **다국어 확장** | JSON 파일 추가로 일본어, 중국어 등 (구조 이미 준비됨) | 골격 위 추가 |

#### 4.3 개방형에서 정적 JSON 아키텍처의 결정적 이점

```
단독:    graph.json → localhost UI
개방형:  graph.json → CDN → 전 세계 UI    ← 구조 변경 없음
```

- Neo4j 서버 노출 없음 (보안 위험 0)
- API 서버 없음 (DDoS 표면 0)
- 사용자 수 무관 (CDN이 처리)
- 비용 $0 유지 (정적 파일 서빙만)

#### 4.4 가명화 — 개방형 최우선 보안 이슈

```
1단계 (빌드): atom → graph.json 변환 시 pseudonym_mapping 대조
              실명 포함 → 빌드 실패, 배포 차단
2단계 (런타임): Angular guard — 화면 렌더링 직전 최종 스캔
3단계 (CSP): Content-Security-Policy — 외부 스크립트 차단, XSS 방지
```

---

## 부록 — 현재 Neo4j 스키마 전체 (변경 전)

### 노드 (8+3 유형)

| 노드 | 핵심 속성 | 현재 용도 | v2 변경 |
|---|---|---|---|
| Person | name, side, rank, role, org, layer | 핵심 | +roleAnchors |
| Organization | name | 핵심 | 변경 없음 |
| Layer | layerNum, name, desc | 핵심 | 변경 없음 |
| CriminalAct | actType, desc, layer | 핵심 | 변경 없음 |
| Evidence | evidenceId, docType, docPage, source, date | 핵심 | +recordNo |
| Directive | name, articleNum, country, regulationYear | 핵심 | 변경 없음 |
| Contradiction | stmt1Id, stmt2Id, description, confidence, category | 핵심 | 변경 없음 |
| FalsificationResult | resultId, layer, verdict, strength, truth scores... | 핵심 | +status, +wikiPath, +wikiSlug |
| Timeline | date, event, layer | 보조 | 변경 없음 |
| Regulation | name, country, years | 보조 | 변경 없음 |
| Location | name | 보조 | 변경 없음 |

### 관계 (12+2 유형)

| 관계 | 방향 | 현재 | v2 변경 |
|---|---|---|---|
| ORDERED_BY | CA→P | 있음 | 변경 없음 |
| EXECUTED_BY | CA→P | 있음 | 변경 없음 |
| VICTIMIZED | CA→P | 있음 | 변경 없음 |
| CRIME_CHAIN | CA→CA | 있음 | 변경 없음 |
| AFFILIATED_WITH | P→O | 있음 | 변경 없음 |
| SUPPORTED_BY | *→E | 있음 | 변경 없음 |
| PART_OF_LAYER | *→L | 있음 | 변경 없음 |
| VIOLATED | CA→D | 있음 | 변경 없음 |
| CONTRADICTS | C→CA | 있음 | 변경 없음 |
| CONCEALED_BY | T→P | 있음 | 변경 없음 |
| MANIPULATED_WITH | D→D | 있음 | 변경 없음 |
| PART_OF | D→R | 있음 | 변경 없음 |
| SUPERSEDES | D→D | 있음 | 보강 필요 |
| **OPPOSES** | **FR→FR** | **없음** | **신설** |
| **CITES_RECORD** | **FR→E** | **없음** | **신설** |
| TARGETS | FR→CA | 있음 | 검증 필요 |
| FALSIFIED_BY | FR→E | 있음 | 변경 없음 |

---

## 변경 이력

- **2026-04-12** — 초기 작성. Part I (Proof Level 시각화), Part II (Neo4j 스키마 진화), Part III (통합 로드맵).

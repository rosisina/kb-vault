// Aurora v2 — i18n Language Service (3-tier: UI labels / domain terms / content)
import { Injectable, signal } from '@angular/core';

const PERSON_EN_MAP: Record<string, string> = {
  '강민호': 'Kang Min-ho', '강홍석': 'Kang Hong-seok', '곽민철': 'Gwak Min-cheol',
  '권중현': 'Gwon Jung-hyeon', '김경진': 'Kim Gyeong-jin', '김동욱': 'Kim Dong-uk',
  '김민수': 'Kim Min-su', '김민지': 'Kim Min-ji', '김성민': 'Kim Seong-min',
  '김수진': 'Kim Su-jin', '김익혁': 'Kim Ik-hyeok', '김철환': 'Kim Cheol-hwan',
  '도지호': 'Do Ji-ho', '류서영': 'Ryu Seo-yeong', '박서준': 'Park Seo-jun',
  '박성호': 'Park Seong-ho', '박현주': 'Park Hyeon-ju', '배지훈': 'Bae Ji-hun',
  '송민석': 'Song Min-seok', '안세준': 'An Se-jun', '양미숙': 'Yang Mi-suk',
  '양준승': 'Yang Jun-seung', '오현수': 'Oh Hyeon-su', '유길수': 'Yu Gil-su',
  '윤도현': 'Yun Do-hyeon', '이근태': 'Lee Geun-tae', '이승우': 'Lee Seung-u',
  '이준호': 'Lee Jun-ho', '이지영': 'Lee Ji-yeong', '이진한': 'Lee Jin-han',
  '이태호': 'Lee Tae-ho', '임형규': 'Im Hyeong-gyu', '장우진': 'Jang U-jin',
  '장호재': 'Jang Ho-jae', '정다원': 'Jeong Da-won', '정현우': 'Jeong Hyeon-u',
  '조성민': 'Jo Seong-min', '지원호': 'Ji Won-ho', '진상호': 'Jin Sang-ho',
  '천하경': 'Cheon Ha-gyeong', '최동욱': 'Choe Dong-uk', '최영규': 'Choe Yeong-gyu',
  '최영수': 'Choe Yeong-su', '최우진': 'Choe U-jin', '한경수': 'Han Gyeong-su',
  '한지훈': 'Han Ji-hoon', '홍성민': 'Hong Seong-min', '황만수': 'Hwang Man-su',
};

const ORG_EN_MAP: Record<string, string> = {
  'DCIA': 'DCIA', 'DIDC': 'DIDC', 'MND': 'MND',
  '감사실': 'Audit Office', '국본': 'Defense JCS',
  '국유단': 'Defense IT Ops Unit', '국전원': 'KRIT',
  '군검찰단': 'Military Prosecution', '조달청': 'PPS',
  '조사본부': 'DCIA', '국방부': 'MND',
  '군 검찰단': 'Military Prosecution Office',
  '조사본부장': 'DCIA Director',
};

// Ordered longest-first so longer matches take priority (e.g. "군 검찰단" before "검찰단")
const TEXT_SUBS: Array<[string, string]> = [
  // Orgs (longest first)
  ['국방통합데이터센터', 'DIDC'], ['국방전산정보원', 'KRIT'], ['국방정보화업무훈령', 'Defense IT Ops Directive'],
  ['국방통합정보관리소', 'Defense Integrated Information Center'],
  ['지능정보화정책관실', 'Intelligent IT Policy Bureau'],
  ['국방정보화기획관실', 'MND IT Planning Bureau'], ['정보화기획관실', 'IT Planning Bureau'],
  ['국방정보화', 'defense informatization'], ['국방정보화사업', 'defense IT project'],
  ['행정안전부', 'MOIS'], ['행안부', 'MOIS'],
  ['국전원', 'KRIT'], ['국방부', 'MND'], ['조사본부', 'DCIA'], ['군 검찰단', 'Military Prosecution'],
  ['군검찰단', 'Military Prosecution'], ['국유단', 'Defense IT Ops Unit'],
  ['국본', 'Defense JCS'], ['감사실', 'Audit Office'], ['조달청', 'PPS'],
  // Evidence citation patterns
  ['본문기록', 'main text record'], ['층위 본문', 'layer text'], ['층위', 'layer'],
  ['한국어 원본', 'Korean original'], ['직접 인용', 'direct quote'], ['각주', 'footnote'],
  ['녹취', 'recording transcript'], ['이유서', 'statement of reasons'],
  ['별지 제', 'Appendix '], ['부대예규', 'unit regulation'],
  // Evidence/project terms
  ['해당 사항 없음', 'Not Applicable'], ['해당없음', 'N/A'], ['해당 없음', 'N/A'],
  ['기술 적용 표', 'tech application table'], ['보안 분야', 'security sector'],
  ['접근 통제', 'access control'], ['인터넷 접속', 'internet access'],
  ['순수 소프트웨어 개발사업', 'pure SW development project'],
  ['순수 SW 사업', 'pure SW project'], ['소프트웨어 개발사업', 'SW development project'],
  ['적정성 확인', 'appropriateness confirmed'], ['답변', 'response'],
  ['서버 세탁', 'server laundering'], ['서버', 'server'],
  ['업무 간소화', 'work simplification'], ['간소화', 'simplification'],
  ['출력 정지', 'output suspension'],
  // Regulation/T&E terms
  ['사업통제기관', 'project control authority'], ['사업주관기관', 'project lead authority'],
  ['사업관리기관', 'project management authority'], ['소요제기기관', 'requirements authority'],
  ['집행기관', 'executing agency'], ['위임 사업', 'delegated project'],
  ['통제사업', 'controlled project'], ['국정과제 사업', 'national policy project'],
  ['운용시험평가', 'operational T&E'], ['개발시험평가', 'development T&E'],
  ['시험평가', 'T&E'], ['사업계획서', 'project plan'], ['사업 승인', 'project approval'],
  ['사업 지정', 'project designation'], ['사업비', 'project budget'],
  ['합격 또는 불합격으로 결과를 판정', 'pass/fail determination'],
  ['합격 또는 불합격', 'pass/fail'],
  ['전력화', 'operational deployment'], ['체계규격서', 'system specification'],
  // Legal terms
  ['기소유예', 'Prosecutorial Deferral'], ['무혐의', 'No Probable Cause'], ['불기소', 'Non-indictment'],
  ['압수', 'seizure'], ['수색', 'search'], ['피의자', 'suspect'], ['피고', 'defendant'],
  ['군사용 적합', 'suitable for military use'], ['군인', 'military personnel'],
  ['삭 제', 'deleted'], ['삭제', 'deleted'], ['변경', 'amended'],
  ['업체 직원', 'contractor employee'], ['백업', 'backup'],
  ['허위 신고', 'false report'], ['갑질 신고', 'harassment complaint'],
  ['진정서', 'petition'], ['탄원서', 'appeal'],
  // Systems
  ['新KIATIS', 'New KIATIS'], ['신KIATIS', 'New KIATIS'], ['舊KIATIS', 'Legacy KIATIS'], ['구KIATIS', 'Legacy KIATIS'],
  ['국방망', 'defense intranet'],
  // Truth axes
  ['[진리성]', '[Truthfulness]'], ['[타당성]', '[Validity]'], ['[진실성]', '[Sincerity]'],
  ['진리성', 'Truthfulness'], ['타당성', 'Validity'], ['진실성', 'Sincerity'],
];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<'en' | 'kr'>('en'); // default: English
  private translations: Record<string, Record<string, string>> = {};

  async init(): Promise<void> {
    const [kr, en] = await Promise.all([
      fetch('assets/i18n/kr.json').then(r => r.json()),
      fetch('assets/i18n/en.json').then(r => r.json()),
    ]);
    this.translations['kr'] = kr;
    this.translations['en'] = en;
  }

  t(key: string): string {
    return this.translations[this.lang()]?.[key] || key;
  }

  toggle(): void {
    this.lang.update(v => v === 'en' ? 'kr' : 'en');
  }

  personName(name: string): string {
    return this.lang() === 'en' ? (PERSON_EN_MAP[name] || name) : name;
  }

  orgName(name: string): string {
    return this.lang() === 'en' ? (ORG_EN_MAP[name] || name) : name;
  }

  /** Replace known Korean person names, org names, and key terms in free-form text. */
  translateNamesInText(text: string): string {
    if (!text || this.lang() === 'kr') return text;
    let result = text;
    // Person names
    for (const [ko, en] of Object.entries(PERSON_EN_MAP)) {
      result = result.replaceAll(ko, en);
    }
    // Term substitutions (longest match first)
    for (const [ko, en] of TEXT_SUBS) {
      result = result.replaceAll(ko, en);
    }
    // Regex patterns for dynamic citations (order: longest/most specific first)
    // "기록 제7,496쪽" / "기록 제7,496–7,500쪽" → "Record No. 7,496"
    result = result.replace(/기록\s*제([\d,]+)[–~-]?([\d,]*)쪽/g, (_, a, b) => b ? `Records No. ${a}–${b}` : `Record No. ${a}`);
    // "훈령 제2129호" → "Directive No. 2129"
    result = result.replace(/훈령\s*제([\d,]+)호/g, 'Directive No. $1');
    // "제10조 제4항" → "Article 10, Para. 4"
    result = result.replace(/제(\d+)조\s*제(\d+)항/g, 'Article $1, Para. $2');
    // "제10조" standalone → "Article 10"
    result = result.replace(/제(\d+)조/g, 'Article $1');
    // "제4항" standalone → "Para. 4"
    result = result.replace(/제(\d+)항/g, 'Para. $1');
    // "제N호" (document/annex number) → "No. N"
    result = result.replace(/제(\d+)호/g, 'No. $1');
    // "N페이지" / "N쪽" standalone page refs
    result = result.replace(/(\d+)\s*페이지/g, 'p.$1');
    result = result.replace(/(\d+)\s*쪽/g, 'p.$1');
    return result;
  }
}

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
  // Orgs
  ['국방통합데이터센터', 'DIDC'], ['국방전산정보원', 'KRIT'], ['국방정보화업무훈령', 'Defense IT Ops Directive'],
  ['국전원', 'KRIT'], ['국방부', 'MND'], ['조사본부', 'DCIA'], ['군 검찰단', 'Military Prosecution'],
  ['군검찰단', 'Military Prosecution'], ['국본', 'Defense JCS'], ['감사실', 'Audit Office'],
  // Legal/process terms
  ['기소유예', 'Prosecutorial Deferral'], ['무혐의', 'No Probable Cause'], ['불기소', 'Non-indictment'],
  ['전력화', 'operational deployment'], ['사업통제기관', 'project control authority'],
  ['사업주관기관', 'project lead authority'], ['사업관리기관', 'project management authority'],
  // Systems
  ['新KIATIS', 'New KIATIS'], ['신KIATIS', 'New KIATIS'], ['舊KIATIS', 'Legacy KIATIS'], ['구KIATIS', 'Legacy KIATIS'],
  ['국방망', 'defense intranet'],
  // Truth axes
  ['[진리성]', '[Truthfulness]'], ['[타당성]', '[Validity]'], ['[진실성]', '[Sincerity]'],
];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<'en' | 'kr'>('kr'); // default: Korean
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
    return result;
  }
}

// Aurora v2 — ClaimType 대표명 매핑 (16 표준 카테고리)
import { Injectable } from '@angular/core';

export interface ClaimTypeInfo {
  key: string;
  kr: string;
  en: string;
  icon: string; // Material icon name
}

const CLAIM_TYPES: ClaimTypeInfo[] = [
  { key: 'prosecution_misconduct', kr: '검찰 위법행위', en: 'Prosecution Misconduct', icon: 'gavel' },
  { key: 'document_fabrication', kr: '문서 조작', en: 'Document Fabrication', icon: 'description' },
  { key: 'evidence_concealment', kr: '증거 인멸', en: 'Evidence Concealment', icon: 'visibility_off' },
  { key: 'regulatory_manipulation', kr: '규정 조작', en: 'Regulatory Manipulation', icon: 'rule' },
  { key: 'witness_manipulation', kr: '증인 조작', en: 'Witness Manipulation', icon: 'record_voice_over' },
  { key: 'conspiracy_structure', kr: '공모 구조', en: 'Conspiracy Structure', icon: 'hub' },
  { key: 'human_rights_violation', kr: '인권 침해', en: 'Human Rights Violation', icon: 'shield' },
  { key: 'procedural_violation', kr: '절차 위반', en: 'Procedural Violation', icon: 'report_problem' },
  { key: 'testimony_evidence', kr: '증언 증거', en: 'Testimony Evidence', icon: 'mic' },
  { key: 'technical_proof', kr: '기술적 증명', en: 'Technical Proof', icon: 'memory' },
  { key: 'terminology_manipulation', kr: '용어 조작', en: 'Terminology Manipulation', icon: 'text_fields' },
  { key: 'cross_layer_analysis', kr: '교차 층위 분석', en: 'Cross-Layer Analysis', icon: 'layers' },
  { key: 'methodology', kr: '방법론', en: 'Methodology', icon: 'science' },
  { key: 'institutional_obstruction', kr: '기관 방해', en: 'Institutional Obstruction', icon: 'block' },
  { key: 'temporal_manipulation', kr: '시간 조작', en: 'Temporal Manipulation', icon: 'schedule' },
  { key: 'attorney_misconduct', kr: '법무 위법행위', en: 'Attorney Misconduct', icon: 'balance' },
];

@Injectable({ providedIn: 'root' })
export class ClaimTypeService {
  private map = new Map<string, ClaimTypeInfo>(CLAIM_TYPES.map(c => [c.key, c]));

  getLabel(key: string, lang: 'kr' | 'en'): string {
    const info = this.map.get(key);
    return info ? (lang === 'kr' ? info.kr : info.en) : key;
  }

  getInfo(key: string): ClaimTypeInfo | undefined {
    return this.map.get(key);
  }

  getAll(): ClaimTypeInfo[] {
    return CLAIM_TYPES;
  }
}

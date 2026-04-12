# 갑질 신고 48시간 전 협력 회의 + 사전 준비된 독방 격리

**Source:** raw/01. book-beyond-cybersecurity/vault-converted-korean/11-3-5-35-제-5층위.md §3.5.1.1 (lines 25-42)
**Layer:** [[../layers/layer-5|Layer 5]]
**Aurora node:**
```cypher
MERGE (fr:FalsificationResult {resultId: "FR-L5-48HR-PREMEDITATED-ISOLATION"})
SET fr.layer = 5,
    fr.claimType = "human_rights_violation",
    fr.claimSubtype = "premeditated_human_rights_violation",
    fr.claimDesc = "2022.2.8 협력 회의에서 박서준이 정상적으로 참여하고 한지훈과 공동 보고한 후, 정확히 48시간 내에 갑질 신고가 접수되었다. 김민수는 2022.2.21 '지금 마련을 다 했다', '준비 다 되어 있다'고 발언하여 독방 격리가 신고 이전에 사전 준비되었음을 시인하였다. 이지영은 회의 후 30분 디브리핑에서 VPN 관련 정보를 5회 이상 집중 추출하였다",
    fr.counterHypothesis = "갑질 신고 시점과 회의 시점의 근접성은 우연이며, 김민수의 '준비' 발언은 신고 접수 후 행정 조치를 의미한다",
    fr.falsificationCondition = "독방 격리가 갑질 신고 접수 후 정상적 행정 절차에 의해 결정되었음을 보여주는 기록",
    fr.verdict = "CORROBORATED",
    fr.strength = "STRONG",
    fr.truthfulness = 9,
    fr.validity = 8,
    fr.sincerity = 10,
    fr.analysisDate = date("2026-04-12"),
    fr.summary = "Record 11,026~11,027에서 2.8 회의 확인. Record 3,966에서 김민수 '준비 다 했다' 발언. Record 11,009~11,032에서 이지영의 VPN 정보 추출. Record 4,826에서 GIS 서버 문제 보고가 신고 트리거. 국유단 발굴팀장도 VPN 도입을 '해괴한'으로 평가(Record 11,334).";
```

## Claim

2022년 2월 8일, 新KIATIS 관련 국유단·국전원 실무자·업체 회의에서 박서준 (갑질신고자-1)은 한지훈과 정상적으로 협력하여 이지영에게 공동 보고하였다(기록 제11,026쪽~제11,027쪽). 이 회의에서 국유단 발굴팀장은 VPN 도입을 "해괴한"(absurd)으로 평가하여 舊KIATIS의 인터넷 운용을 확인하였다(기록 제11,334쪽).

그로부터 정확히 48시간 내에 갑질 신고가 접수되었다. 김민수 (핵심 의사결정자-1)는 2022.2.21 "지금 마련을 다 했다", "준비 다 되어 있다"고 발언(기록 제3,966쪽)하여, 독방 격리가 신고 이전에 사전 준비된 것임을 시인하였다.

이지영 (공문결재자-1)은 회의 후 30분 디브리핑에서 VPN 관련 정보를 5회 이상 집중 추출(기록 제11,009쪽~제11,032쪽)하였으며, 이것이 한지훈에 대한 사기수사의 트리거 발사(trigger pulling)로 기능하였다.

## Key Takeaways

- 48 hours before the harassment complaint, 박서준 cooperated normally with 한지훈 at a joint meeting — proving no prior conflict [진리성]
- 김민수's "preparations are all done" (2022.2.21) proves the isolation was pre-planned before the complaint was filed [진리성]
- 이지영 extracted VPN intelligence through 5+ focused questions in a 30-min debrief — the informational trigger for the prosecution [진리성]
- 국유단 excavation team leader called VPN introduction "absurd" — independent confirmation of 舊KIATIS internet operation [진리성]

## Supporting evidence

- **Record No. 11,026~11,027** — 2022.2.8 회의 기록
- **Record No. 3,966** — 김민수 '준비 다 했다' 발언
- **Record No. 11,009~11,032** — 이지영 VPN 정보 추출
- **Record No. 11,334** — 국유단 발굴팀장 'VPN 해괴한' 발언
- **Record No. 4,826** — GIS 서버 문제 보고

## Counter-hypothesis

48시간 근접성은 우연이며, 김민수의 '준비' 발언은 신고 후 행정조치를 의미한다.

## Falsification condition

독방 격리가 신고 접수 후 정상 행정절차로 결정된 기록.

## Verdict

**CORROBORATED.** Strong. 진리성 9 / 타당성 8 / 진실성 10.

## Spot-check

- `vault-converted-korean/11-3-5-35-제-5층위.md` lines 25-42

## Related

- [[layer5-park-seojun-48hr-cooperation-to-hostility]] — L5 박서준 48시간 변화 (RELATED)
- [[layer5-language-weaponization-silence-as-murder]] — L5 언어 무기화 (RELATED)
- [[../layers/layer-5|Layer 5]] (PART_OF_LAYER)

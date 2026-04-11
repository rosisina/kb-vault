# DIDC 정보시스템 운영관리 예규 — 부대예규 제11호 (DIDC Information System Operation Management SOP)

**Source:** raw/06. DIDC SOP(국방 통합데이터 센터 예규)/02.(Korean) DIDC_정보시스템_운영관리_예규.md • raw/06/02.(English) DIDC_information_system_operation_management_sop.md
**Layer:** [[../layers/layer-1|L1]] (primary), [[../layers/layer-4|L4]] (secondary — KIATIS as DIDC-resident system)
**Aurora node:** `:Directive {name: "국방통합데이터센터 부대예규 제11호 정보시스템 운영관리 예규", regulationYear: 2016, country: "KR", issuer: "DIDC", articleNum: null}`

The DIDC's internal SOP for operational management of all information systems hosted at the data center. Sister document to [[didc-cyber-protection-sop-12|예규 제12호 사이버방호 예규]]. Where 제12호 governs cyber protection (defense), 제11호 governs day-to-day operations: change management, deployment, configuration management, backup/recovery, account management, cloud, VDI, networking. **For KIATIS specifically, this SOP defines the operational change-control regime that any KIATIS system modification at DIDC would have had to follow.**

**제정일: 2016-02-01.** Same enactment date as the cyber protection SOP — both predate the 2016 hacking incident and were in force throughout the KIATIS development and test evaluation periods (2018–2019).

## Key Takeaways

- [타당성] **제정일 2016-02-01.** Initial enactment, in force during DIDC hacking and throughout the KIATIS lifecycle. Five revisions through 2019-06-04 (one fewer than 제12호's seven revisions).
- [타당성] **146 articles across 13 chapters** — substantially larger than the cyber protection SOP. Chapters: 총칙 / 장애관리 / 문제관리 / 변경관리 / 배포관리 / 구성관리 / 성능 및 용량 관리 / 백업/복구관리 / 계정관리 / 클라우드 운영관리 / VDI관리 / 네트워크 관리 / 정보시스템 운영결과 보고. Comprehensive operational rulebook.
- [타당성] **Chapter 4 변경관리 (제21~32조) — change management with mandatory approval chain.** Any change to a DIDC-hosted information system requires: 변경 요청 접수 → 검토 및 반려 가능 → 유형 분류 → 변경 계획 수립 → 변경 계획 승인 → 변경 작업 → **보안성 검토 요청** (제30조) → 변경 적용 결과 검토 → 결과 검토 확인. Eleven sequential procedural gates per change.
- [타당성] **Article 30 보안성 검토 요청** is the explicit security-review requirement embedded in the change-management chain. This is the procedural bridge to [[didc-cyber-protection-sop-12|예규 제12호]]'s 정보시스템 보호대책 검토 (제10조).
- [타당성] **Chapter 5 배포관리 (제33~40조) — deployment management.** Separate procedural chain for deployment: 배포 요청 등록 → 검토 → 반영 → 결과 검토 → 결과 검토 확인. Distinct from change management; deployment is the actual production push.
- [타당성] **Chapter 6 구성관리 (제41~55조) — configuration management.** 15 articles covering configuration registration, modification, and 실사 (audit). 제52~55조 mandate periodic 실사 (audit) of configuration vs reality, with 제54조 requiring `구성정보 불일치 원인 조사` (investigation of configuration mismatch).
- [타당성] **Chapter 8 백업/복구관리 (제70~94조) — 25 articles, the largest chapter.** Covers backup request, policy, execution, error handling, media management, restoration, and monitoring. **Article 84 백업매체 소산** (backup media off-site storage) is the regulatory anchor for the question "did 2016 hacking-period backups exist?"
- [타당성] **Chapter 9 계정관리 (제95~104조).** Account creation, review, deletion, and password management — including periodic 검토/삭제 수행 (제102조).
- [타당성] **Chapter 11 VDI관리 (제122~132조).** Virtual Desktop Infrastructure management — links to 예규 제12호 제12조 (인터넷PC 운용 via VDI). Connection between the two SOPs.
- [타당성] **Chapter 14 접근통제 (제158~167조) — JAMES-IDENTIFIED HIGHEST-PRIORITY CHAPTER.** Access control regime spanning servers, network, integrated operations management, **DB**, VDI, and information protection equipment. Article 164 (DB 접근통제) names the **CharkraMax (차크라맥스)** DB access control system and mandates 별지 제17호 (DB접근제어 신청서) for every DB account creation/modification/deletion with 자원관리과장 approval. **별지 제17호 is one of the two most directly auditable artifacts in the entire DIDC SOP system** (paired with 별지 제7호 SSL-VPN under 제12호 제37조). Per James 2026-04-11, this is the data-egress side of the ingress/egress sandwich.
- [타당성] **제167조 (검토권자 지정 및 검토주기)** — periodic review of all access control policies. Mandates that the access control regime not just be set up but periodically re-verified, generating recurring audit artifacts.
- [진리성] **Application scope is universal across DIDC-hosted systems.** Any KIATIS-related change at DIDC during 2018–2019 would have generated artifacts under this SOP's change-management, deployment, configuration, backup, and (if relevant) cloud/VDI/network chapters.
- [진리성] **For the 2016 hacking incident, the relevant chapters are:** 변경관리 (whether attacker-induced changes were detected and logged), 구성관리 (whether configuration drift was caught by 실사), 백업/복구관리 (whether the affected systems' backups exist and were used), and 계정관리 (whether unauthorized accounts were detected by 정기 검토).

## Revision history

| Revision | Date | Notes |
|---|---|---|
| 제정 | 2016-02-01 | Same date as 예규 제12호 |
| 부분개정 | 2016-04-01 | Same date as 예규 제12호 |
| 부분개정 | 2016-12-05 | Same date as 예규 제12호 |
| 부분개정 | 2018-06-01 | Same date as 예규 제12호 |
| 부분개정 | 2019-06-04 | Same date as 예규 제12호 |

**Note: 제11호 has 5 revisions vs 제12호's 7 revisions.** 제12호 has additional revisions on 2017-09-06 and 2018-12-01 that 제11호 does not. The 2018-12-01 cyber-protection-only revision is therefore not paired with an operations-management revision — a structurally interesting fact for A.6 (why would cyber protection rules update without parallel operations rules updating?).

## Open Questions

- **Are predecessor revisions of this SOP available?** Same as 예규 제12호 — only the latest revision is in raw/06. The 2016-02-01 original is the most evidentiarily critical version.
- **Did any KIATIS-related change at DIDC during 2018–2019 generate the required Chapter 4 (변경관리) and Chapter 5 (배포관리) artifacts?** Pending raw/05 and raw/06 detailed compile.
- **For the 2016 hacking incident, did the Chapter 8 (백업/복구) regime produce backups that were preserved or destroyed?** The 백업매체 소산 (off-site storage) requirement (제84조) means backups should physically exist outside the breached environment. Their existence and preservation status is a Layer 1 falsification target.

## Claim atoms anchored on this SOP

- [[../claims/didc-sops-cover-2016-hacking-period|Both DIDC SOPs (제11호 + 제12호) were in force on 2016-02-01]] — establishes procedural duty floor
- [[../claims/didc-sop-11-change-management-trail-mandatory|Chapter 4 변경관리 mandates 11-gate change-management trail]]
- [[../claims/didc-sop-11-backup-recovery-mandatory|Chapter 8 백업/복구관리 mandates 25-article backup regime + off-site storage]]
- [[../claims/didc-sop-db-access-control-mandatory|**Chapter 14 + 제164조 + 별지 17호 mandate DB access control via CharkraMax — James-identified highest-priority Layer 1 trace**]]

## Related

- [[didc-cyber-protection-sop-12|DIDC 사이버방호 예규 제12호 (sister SOP)]]
- [[defense-it-operations-directive-2129|훈령 제2129호 (parent regulatory framework)]]
- [[../entities/organizations/didc|DIDC]]
- [[../layers/layer-1|Layer 1]]
- [[../layers/layer-4|Layer 4]]
- [[_index|Regulations]]

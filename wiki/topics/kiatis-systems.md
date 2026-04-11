# KIATIS Systems (舊 / 新 KIATIS)

**Source:** `raw/01. book-beyond-cybersecurity/vault-converted-english/11-3-1-31-Layer-1.md` + `12-3-2-32-Second-Layer.md` + `14-3-4-34-Fourth-Layer.md` • `raw/01. book-beyond-cybersecurity/vault-legacy-wiki-english/KIATIS-Systems.md` (legacy synthesis)
**Layer:** [[../layers/layer-1|Layer 1]] (old KIATIS), [[../layers/layer-2|Layer 2]] (new KIATIS project initiation), [[../layers/layer-4|Layer 4]] (new KIATIS test evaluation manipulation), [[../layers/layer-6|Layer 6]] (four-environment comparison)
**Aurora node:** N/A — system concept; related Aurora nodes: `:System {name: "KIATIS"}` family.

**KIATIS** (Korea IT Assets Tracking & Inventory System) is the defense IT asset tracking and management system at the center of the *Beyond Cybersecurity* thesis. It exists in two generations — **Old KIATIS** (operated 2007–2022) and **New KIATIS** (the subject of the [[../events/2018-2019-kiatis-performance-improvement-project|2018–2019 performance improvement project]]). The security vulnerabilities of the old system and the alleged cover-up of those vulnerabilities form the core factual basis of Layers 1, 2, 4, and 6 of the proof system.

## Old KIATIS (2007–2022)

### Operational reality as documented in the book

- **Operating period:** 15 years (2007–2022)
- **Network:** Operated on the **Internet**, not the secure Defense Network
- **VPN:** Not used — direct Internet access
- **DB access control:** Not implemented — direct database access possible
- **Technology:** Vulnerable Active-X-based client-server architecture
- **Hosting:** Operated as a parasite within other servers (no dedicated server)
  - **Phase 1**: Inside the Defense Internet Homepage server
  - **Phase 2**: Inside the Integrated Email server
- **Hosting location:** DIDC Center 1 (Yongin) — alleged to be the actual origin point of the 2016 hacking (the public narrative named DIDC Center 2 at Gyeryongdae)

### Alleged security regulation violations

- Comprehensive violation of defense cybersecurity regulations across the full 15-year operating period.
- Data interoperability between the Defense Network and the Internet without security equipment.
- The cybersecurity-routing clause of [[../regulations/defense-it-2129-article-9|훈령 제2129호 제9조 ¶2]] directs these matters to the 국방사이버안보훈령, meaning violations would be adjudicated under that sibling directive rather than the IT operations directive itself.

## New KIATIS (2018–2019 project)

### Project management issues alleged

- **Project control authority:** Illegally transferred from MND to the DMA (국방 유해발굴사업단) per book narrative; this conflicts with the [[../regulations/defense-it-2129-article-10|제10조]] classification of DIDC-adjacent IT projects as 국방부 통제 사업.
- **Project plans and RFPs:** Fabricated and falsified.
- **Essential requirement budgets:** Intentionally reduced.
- **Contract value:** 6.25억 원 — above the 5억 원 threshold in [[../regulations/defense-it-2129-article-58|제58조 ¶3]], which therefore requires DT&E and OT&E separation under the main regime (see [[../events/2018-2019-kiatis-performance-improvement-project|event page]] for the full legal analysis).

### The four-environment comparison (Layer 6 core evidence)

The book's Layer 6 argument hinges on proving that **four distinct KIATIS environments cannot be identical** — the Military Prosecutor's Office investigation was allegedly built on the false premise that they were.

| Environment | Network | Period | Notes |
|---|---|---|---|
| Old KIATIS (actual) | Internet | 2007–2022 | No VPN |
| New KIATIS (separated test) | Defense Network | Test evaluation period | Completely different cyber domain from Old |
| New KIATIS (actual, post-integration) | Defense Network | April 2021 onward | Post-integration operation |
| New KIATIS (combined test) | Defense Network | Test evaluation period | Allegedly manipulated environment |

The book argues that these four environments differ in **network domain, time period, access control, and configuration**, and therefore cannot be treated as a single system for the purpose of evaluating whether regulations were violated. This four-environment distinction is the core technical claim of Layer 6 (see [[fraud-investigation|Fraud Investigation]]).

## Key Takeaways

- [진리성] Old KIATIS operated on the commercial Internet for 15 years without VPN, in documented violation of defense cybersecurity regulations, and was hosted at DIDC Center 1 (Yongin) — the alleged actual origin of the 2016 hacking.
- [진리성] New KIATIS is a distinct system from Old KIATIS: different network domain, different architecture, different hosting location. Any regulatory evaluation that treats the two as one system is factually incorrect.
- [타당성] The New KIATIS project was subject to [[../regulations/defense-it-operations-directive-2129|훈령 제2129호]] as the RFP-named directive, which mandates DT&E/OT&E separation under 제58조 ¶2 for projects above 5억 원. The 6.25억 contract value places KIATIS squarely in this regime.
- [진리성] The book's four-environment comparison is the technical basis for Layer 6's "fraud investigation" claim: the MPO allegedly built its case on the false identity of four environments, which is a directly falsifiable factual claim.
- [진실성] The alleged 15-year cybersecurity violation is the **underlying motive** for the entire 7-layer cover-up narrative — every subsequent layer operates to prevent accountability for this foundational violation.

## Related

- [[7-layer-proof-system|7-Layer Proof System]]
- [[test-evaluation-manipulation|Test Evaluation Manipulation]]
- [[defense-informatization-cartel|Defense Informatization Cartel]]
- [[fraud-investigation|Fraud Investigation]]
- [[../events/2018-2019-kiatis-performance-improvement-project|2018–2019 KIATIS Performance Improvement Project (event)]]
- [[../events/2016-didc-north-korean-hacking|2016 DIDC North Korean hacking]]
- [[../entities/organizations/didc|DIDC]]
- [[../regulations/defense-it-operations-directive-2129|훈령 제2129호]]

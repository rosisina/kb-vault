"""
Aurora v2 Compiler Pipeline

Compilation modules that transform wiki atoms into downstream artifacts.
Each module absorbs the role of a former Aurora v1 agent.

Modules:
    layer_auditor       - Layer↔Record No. consistency (← LayerAnalyst)
    crime_chain_builder - CriminalAct→Person chain extraction (← CrimeChainMapper)
    timeline_auditor    - Chronological event spine (← TimelineBuilder)
    victim_narrator     - Victim-perspective narrative (← VictimNarrative)
"""

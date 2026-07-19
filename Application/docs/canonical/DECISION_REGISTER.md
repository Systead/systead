# Decision register

**Updated:** 19 July 2026

The register records product decisions that should not be reinterpreted casually in code, interface copy, or lower-level documents.

| ID | Decision | Status |
|---|---|---|
| SYS-001 | Systead is the parent brand and universal platform. | Locked working decision |
| SYS-002 | Systead Core is the generic local-first foundation. | Locked working decision |
| SYS-003 | A configured operator environment is called a House. | Locked working decision |
| SYS-004 | “Systead House” is descriptive, not a separate competing parent product. | Locked working decision |
| SYS-005 | AuthorMachine by Systead is the first specialist product. | Locked working decision |
| SYS-006 | Stokknes House is a private flagship and proving ground, not public demo data. | Locked working decision |
| SYS-007 | Systead is local-first by default; external services are explicit and optional. | Locked principle |
| SYS-008 | The operator owns the data and final decision. | Locked principle |
| SYS-009 | AI output is proposal, analysis, or draft; humans approve canonical or material changes. | Locked principle |
| SYS-010 | Important actions must be explainable, scoped, approved, logged, verifiable, and recoverable. | Locked principle |
| SYS-011 | Modules and desks link canonical records rather than clone truth silently. | Locked principle |
| SYS-012 | Private data may not silently enter public outputs, repositories, model prompts, analytics, or external services. | Locked principle |
| SYS-013 | Exact duplicates may be deduplicated in the index or moved to logged quarantine; canonical source files are not permanently deleted automatically. | Locked data-safety decision |
| SYS-014 | Systead.com is the active primary domain asset. | Active asset decision |
| SYS-015 | Current logo marks remain candidates pending originality, legibility, and legal review. | Open design decision |
| SYS-016 | Current repository layout is transitional; the implementation bootstrap is under `Application/`. | Temporary structural decision |
| SYS-017 | `Application/docs/canonical/` is the product and safety source of truth. | Locked repository decision |
| SYS-018 | No public software licence is granted unless a component explicitly states otherwise. | Current legal boundary |
| SYS-019 | Current maturity label is “running private pre-alpha.” | Locked current-status decision |
| SYS-020 | The first-week stress test uses real private workload but public evidence must be synthetic, sanitized, or deliberately approved. | Locked boundary decision |
| SYS-021 | Public pre-alpha images are interface studies, not release screenshots, and must be labelled accordingly. | Locked public-claim decision |
| SYS-022 | No public tester package, supported installer, stable API, security guarantee, or release date is currently claimed. | Locked current-status decision |
| SYS-023 | Readiness is gate-based and evidence-based rather than date-based. | Locked development decision |
| SYS-024 | Backup is not considered proven until restore has been demonstrated for the scoped state. | Locked recovery decision |
| SYS-025 | External actions require declared destinations and explicit adapters. | Locked integration decision |
| SYS-026 | A local model result is not canonical merely because it remained on-device. | Locked AI-authority decision |
| SYS-027 | Private defaults discovered in Stokknes House must be separated before they become product defaults. | Locked generalization decision |
| SYS-028 | Large repository flattening should not occur during initial stress testing without inventory, dependency mapping, migration, and rollback plans. | Active structural constraint |

## Open decisions

| ID | Question | Current position |
|---|---|---|
| OPEN-001 | Final logo and visual mark | Candidates only; requires originality and legal review. |
| OPEN-002 | Final public software licence | No blanket licence granted yet. |
| OPEN-003 | Monorepo versus split repositories | Defer until package boundaries and access requirements are proven. |
| OPEN-004 | Supported desktop platforms for first outside test | Not selected. |
| OPEN-005 | Storage engine and long-term schema commitment | Pre-alpha implementation may exist; public contract not locked. |
| OPEN-006 | Encryption-at-rest scope and key handling | Security design not finalized. |
| OPEN-007 | Hosted synchronization or optional cloud services | Must preserve local ownership; not committed. |
| OPEN-008 | Closed-alpha entry date and tester count | No date; gated by evidence and support capacity. |
| OPEN-009 | Pricing and packaging | Not decided. |
| OPEN-010 | Contribution model and public issue intake | Not decided. |
| OPEN-011 | Mobile architecture | Deferred until desktop/Core boundaries stabilize. |

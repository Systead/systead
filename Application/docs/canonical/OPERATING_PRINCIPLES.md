# Operating principles

**Status:** Canonical
**Effective:** 19 July 2026

These principles define expected product behavior. They apply to Core, Houses, modules, specialist systems, integrations, automation, AI assistance, imports, exports, and public tooling unless an explicitly documented exception is approved.

## 1. Local-first by default

Core records and essential workflows should remain useful without a mandatory cloud service.

Remote services may extend the system, but they must not become an invisible ownership requirement. A user should be able to understand which capabilities are local, which require a network, what data is sent, where it is sent, and what stops working when the service is unavailable.

Local-first does not mean “never networked.” It means the local House remains the primary owned environment rather than a temporary cache for a remote authority.

## 2. Operator ownership

The operator owns the records, configuration, exports, and final decisions.

Systead should make inspection, movement, backup, restoration, migration, archival, and deletion understandable. Convenience must not become data captivity.

Ownership also means the operator can see when the system does not know, when a record conflicts, and when an external service has become necessary for a specific operation.

## 3. AI proposes; humans approve

AI may:

- classify;
- summarize;
- compare;
- draft;
- detect conflicts;
- recommend;
- prepare commands;
- estimate confidence;
- retrieve sources;
- explain likely consequences.

AI must not silently:

- convert uncertain output into canonical truth;
- publish or send externally;
- make payments;
- delete canonical source files;
- change credentials or permissions;
- accept legal, financial, medical, or contractual obligations;
- overwrite project canon;
- merge identities;
- alter rights or release states;
- represent operator approval.

Risk-appropriate approval is required for material effects.

## 4. Explainability before confidence theatre

A proposal should expose:

- its source;
- the evidence used;
- the rule, model, or reasoning path where practical;
- assumptions;
- uncertainty;
- affected records and destinations;
- expected result;
- known failure modes;
- recovery options.

A confident sentence is not evidence. A percentage without a documented method is not proof.

## 5. Canonical truth over cloned convenience

Modules and desks should reference canonical records through stable identifiers.

They should not create quiet copies that drift into conflicting versions of the same person, project, asset, publication, decision, obligation, address, price, manuscript, or release state.

When duplication is necessary for caching, export, snapshot, or historical purposes, the copy must declare:

- why it exists;
- its source;
- whether it is authoritative;
- how it becomes stale;
- how it is reconciled or discarded.

## 6. Provenance is part of the record

Important facts and decisions should retain a link to their origin where practical.

Origins may include:

- a source file;
- user entry;
- imported system;
- external API;
- accepted proposal;
- derived calculation;
- migration;
- recovery operation.

A record without provenance may still be useful, but its uncertainty must not be hidden.

## 7. Reversibility is architectural

Important changes require history, backups, audit information, and a recovery path appropriate to their risk.

Destructive operations require stronger confirmation and must never be disguised as routine cleanup.

Where exact rollback is impossible, the system must declare that limitation before execution and provide the next best corrective action.

## 8. Privacy boundaries are explicit

Private records must not be promoted into public pages, repositories, emails, exports, analytics, model prompts, or external services merely because the system can technically access them.

Every boundary crossing should answer:

- what leaves the House;
- why;
- to which destination;
- under which authority;
- in what form;
- whether it can be recalled or deleted;
- what local record proves the action occurred.

## 9. External effects are deliberate

Publishing, sending, payment, synchronization, deletion, account changes, and communication are external effects.

They require:

- an explicit adapter;
- a declared destination;
- a preview of the payload or material effect;
- suitable confirmation;
- execution status;
- verification where possible;
- audit history;
- recovery or corrective guidance.

A generic “sync” button must not hide materially different effects.

## 10. Useful failure

Errors should state:

- what failed;
- what changed before failure;
- what did not change;
- whether state is partial or uncertain;
- what evidence was recorded;
- the next safe action;
- available recovery options.

Silent partial success is unacceptable for material commands.

## 11. Portability is part of trust

A House must be exportable in documented, inspectable formats.

Exports should distinguish:

- canonical records;
- attachments and source files;
- configuration;
- audit history;
- secrets that are intentionally excluded;
- derived indexes that may be rebuilt;
- external-service references that may not be portable.

A successful export must be testable by restore or import, not assumed because an archive file was created.

## 12. Private defaults are not product defaults

A capability proven in Stokknes House is not automatically reusable.

Before generalization, private terminology, seeded records, assumptions, paths, integrations, personal priorities, and hidden dependencies must be removed or made explicit and configurable.

## 13. Synthetic examples by default

Public documentation, screenshots, fixtures, demos, tests, and seed data should use synthetic examples unless a specific real-world source has been deliberately approved for publication.

Sanitization must remove more than names. It must consider combinations of dates, amounts, locations, identifiers, filenames, relationships, screenshots, and history that could reconstruct private information.

## 14. Security claims require evidence

The product may describe security goals, controls, and current limitations.

It must not claim “secure,” “fully private,” “encrypted,” “zero trust,” “air-gapped,” or “production hardened” without defining the scope, implementation, threat model, and evidence.

## 15. No readiness theatre

Development labels must describe the real product state.

A running private pre-alpha should not be described as a concept. It also should not be described as alpha, beta, early access, or production until the relevant installation, migration, recovery, privacy, security, documentation, and support gates have been passed.

## 16. The next safe decision matters more than the largest feature count

An interface should help the operator understand:

- what matters now;
- what changed;
- what is uncertain;
- what is blocked;
- what action is available;
- what authority and risk apply.

A crowded dashboard that cannot support a safe next decision is not an operational system.

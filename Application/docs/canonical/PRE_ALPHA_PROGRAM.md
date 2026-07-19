# Pre-alpha program

**Status:** Active
**Started:** July 2026
**Current phase:** First-week private stress test

## 1. Purpose

The pre-alpha program exists to turn a private working environment into a product architecture that can eventually survive outside its proving ground.

It is not a marketing preview and not an invitation to collect users before installation, recovery, privacy, migration, and support boundaries exist.

The program must answer:

- Does the running system support real work rather than only prepared demonstrations?
- Can it preserve canonical truth across desks and specialist systems?
- Can proposed actions explain and limit their effects?
- Can failures be understood and recovered?
- Can private proving-ground logic be separated from reusable product logic?
- Can a clean House be created with synthetic data?
- Can the system be installed, upgraded, exported, restored, and removed safely?

## 2. Pre-alpha operating rules

### Use real workload, not private data in public

The private flagship may use real daily work to expose failures. Public evidence must use synthetic, sanitized, or deliberately approved material.

### Record friction instead of working around it forever

Temporary workarounds may keep the private build usable, but the underlying issue should be recorded with:

- observed behavior;
- expected behavior;
- reproduction steps;
- affected records or modules;
- severity;
- workaround;
- privacy or recovery implications;
- proposed owner or next decision.

### Prefer evidence over feature expansion

During stress testing, proving existing foundations is more valuable than adding a large number of new desks or integrations.

### Do not normalize unsafe shortcuts

A private single-operator build may technically allow direct file edits, hidden assumptions, or broad access. Those shortcuts must not be mistaken for acceptable product behavior.

### Preserve recovery paths

Risky migrations, cleanup, deduplication, and repository restructuring require snapshots or backups appropriate to the operation.

## 3. Current stress-test themes

The first phase focuses on:

1. startup and local availability;
2. canonical-record consistency;
3. provenance and source visibility;
4. duplicate and conflict behavior;
5. knowledge indexing and re-indexing;
6. proposal and review clarity;
7. command scope and approval;
8. partial failure and recovery messaging;
9. backup, export, and restore evidence;
10. private/public separation;
11. AuthorMachine-to-Core extraction;
12. repository and documentation consistency.

## 4. Evidence classes

Pre-alpha evidence may include:

- reproducible issue records;
- automated test results;
- migration logs;
- backup and restore drills;
- audit trails;
- screenshots using synthetic data;
- before/after state comparisons;
- command previews and verification results;
- clean-House installation or bootstrap attempts;
- user-observation notes from the operator;
- documented performance measurements with clear workload definitions.

A successful click-through is not enough evidence for data integrity or recovery.

## 5. Issue severity

Suggested working severity:

### P0 — Stop use

Examples:

- uncontrolled data destruction;
- credential exposure;
- private data published or sent externally;
- restore corrupts the only usable copy;
- commands execute materially different effects than previewed.

### P1 — Blocks the current phase

Examples:

- startup or migration prevents normal use;
- canonical records become contradictory without detection;
- backup cannot be restored;
- external effect occurs without required approval;
- private Stokknes data is required for a supposedly generic flow.

### P2 — Major operational failure

Examples:

- review queue cannot explain the required decision;
- partial failure leaves state uncertain;
- import loses provenance;
- module creates duplicate truth;
- important workflow requires undocumented manual repair.

### P3 — Friction or clarity issue

Examples:

- terminology is misleading;
- status is hard to understand;
- safe action requires too many steps;
- navigation hides an important review state;
- documentation conflicts with the interface.

### P4 — Later improvement

Examples:

- visual refinement;
- convenience shortcut;
- non-critical performance optimization;
- optional integration idea.

## 6. Daily stress-test loop

A useful daily loop is:

1. capture the current build and data version;
2. run normal work;
3. record failures, ambiguity, and manual workarounds;
4. classify severity and affected boundary;
5. protect data before fixes;
6. make the smallest justified correction;
7. verify both the fix and the previous safe behavior;
8. update canonical docs or decision register when product meaning changed;
9. perform a backup or recovery check when the fix touched storage or migration;
10. close only with evidence.

## 7. Clean-House requirement

The private flagship is not sufficient proof of generality.

A clean synthetic House must eventually be able to:

- initialize without private paths or records;
- load Core and selected modules;
- import synthetic sources;
- create and review records;
- execute low-risk local commands;
- export and restore;
- remove a module without silent destruction;
- operate without Stokknes-specific terminology;
- run without access to private repositories or files.

## 8. Scope control

During the initial stress-test phase, defer unless required to prove a boundary:

- public user acquisition;
- broad third-party integrations;
- billing;
- enterprise roles;
- mobile parity;
- plugin marketplace;
- large visual redesign;
- aggressive performance claims;
- final pricing and packaging.

## 9. Exit from pre-alpha

Pre-alpha does not end because the system feels impressive.

It ends when the selected next-stage gates in [RELEASE_READINESS.md](RELEASE_READINESS.md) have evidence, unresolved P0/P1 issues are absent for the scoped build, and a clean outside-like environment can be installed, used, backed up, restored, and removed without relying on private developer knowledge.

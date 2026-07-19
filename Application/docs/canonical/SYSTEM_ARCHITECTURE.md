# System architecture

**Status:** Canonical architectural direction
**Maturity:** Pre-alpha; implementation compliance is incomplete and under stress test

## 1. Architectural objective

Systead is intended to provide a local-first operational layer in which records, knowledge, proposals, commands, review, external effects, audit, and recovery remain connected.

The architecture must support multiple domains without turning every domain into an unrelated application or forcing every specialist rule into Core.

The central architectural rule is:

> Shared truth lives in canonical records. Desks and specialist Programs provide domain views and actions over that truth through declared contracts.

## 2. Logical layers

```text
┌──────────────────────────────────────────────────────────────┐
│ Operator surfaces                                            │
│ Command Centre · Desks · Cockpits · Review · Search · Setup  │
├──────────────────────────────────────────────────────────────┤
│ Specialist systems and optional modules                      │
│ Program 01 (working name: AuthorMachine) · domain workflows   │
├──────────────────────────────────────────────────────────────┤
│ Systead Core services                                        │
│ Records · Knowledge · Commands · Review · Audit · Recovery   │
├──────────────────────────────────────────────────────────────┤
│ Adapters and execution boundaries                            │
│ Files · local models · APIs · publishing · email · payments  │
├──────────────────────────────────────────────────────────────┤
│ Local persistence and portable assets                        │
│ Database · source files · attachments · config · backups     │
└──────────────────────────────────────────────────────────────┘
```

A deployment may combine these layers in one desktop application during pre-alpha. The logical separation still matters because later extraction, testing, migration, and security boundaries depend on it.

## 3. Canonical record model

Every important entity should have a stable record identity independent of one screen or module.

A canonical record should support, as applicable:

- stable identifier;
- record type and namespace;
- human-readable name or title;
- lifecycle state;
- created and modified timestamps;
- source and provenance references;
- confidence or verification state;
- privacy classification;
- relationships to other records;
- version or revision history;
- tags or classifications;
- module extensions;
- archive or quarantine state;
- migration version.

### Record authority

Records may have different authority states, for example:

- **canonical** — accepted current truth for the House;
- **proposed** — awaiting review;
- **derived** — calculated from declared sources;
- **imported** — received from another system but not necessarily authoritative;
- **historical** — retained previous state;
- **conflicted** — contradictory sources require review;
- **quarantined** — isolated because safety, duplication, corruption, or boundary concerns exist;
- **archived** — retained but not active.

These states must not be reduced to a single “active/inactive” flag when the distinction matters operationally.

## 4. Relationships and linked truth

Relationships should be explicit records or typed links rather than inferred only from shared text labels.

Examples:

- a person belongs to a household;
- a contact is associated with a company;
- a project owns editions;
- a manuscript revision belongs to a project and edition;
- a decision applies to a project and supersedes another decision;
- a command affects records and produces audit entries;
- a source file supports a knowledge claim;
- an asset is connected to an account or obligation.

A relationship should be inspectable and removable without deleting either entity unless the relationship contract explicitly requires cascading behavior.

## 5. Knowledge architecture

The knowledge layer is not a second uncontrolled copy of all source material.

It should distinguish:

- original source files;
- extracted text or metadata;
- index entries;
- summaries;
- accepted knowledge records;
- inferred or model-generated claims;
- decisions and manuals;
- conflicts and superseded material.

### Knowledge requirements

A retrieved answer or recommendation should expose, where practical:

- source references;
- source date or version;
- extraction status;
- relevance;
- confidence;
- conflicts;
- whether the result is quoted, summarized, inferred, or generated.

Derived indexes may be rebuilt. Canonical source files must not be silently deleted because an index contains their text.

## 6. Command architecture

A **command** is a declared operation with a defined effect boundary.

A command object should include, as applicable:

- command identifier;
- initiating actor or process;
- source proposal;
- intent;
- reason and evidence;
- parameters;
- affected records and files;
- destination or adapter;
- external-effect classification;
- risk level;
- required authority;
- preview representation;
- backup or snapshot requirement;
- execution status;
- verification plan and result;
- audit entries;
- rollback plan or corrective action;
- error and partial-state information.

### Command lifecycle

```text
Draft proposal
    ↓
Validation
    ↓
Preview
    ↓
Approval or rejection
    ↓
Pre-execution snapshot where required
    ↓
Execution through a declared adapter
    ↓
Verification
    ↓
Audit completion
    ↓
Closed, failed, partially failed, rolled back, or corrective action required
```

No material command should jump from model output directly to an external adapter.

## 7. Risk and authority

Risk is not one universal number. Classification should consider:

- reversibility;
- privacy sensitivity;
- number and authority of affected records;
- external destination;
- financial or legal consequence;
- publication or communication effect;
- data loss potential;
- identity or permission changes;
- uncertainty in evidence;
- whether verification is possible.

Example risk classes may include:

- **informational** — no state change;
- **low** — local, narrow, reversible change;
- **medium** — canonical or multi-record change requiring explicit approval;
- **high** — destructive, external, financial, identity, permission, or publication effect;
- **blocked** — missing authority, destination, evidence, backup, or recovery path.

Risk rules remain provisional until tested against real command classes.

## 8. Review queues

Review queues should separate different kinds of judgment:

- record proposal review;
- duplicate or conflict review;
- knowledge-source conflict review;
- command approval;
- external payload approval;
- migration review;
- privacy-boundary review;
- recovery or corrective-action review.

A queue item should state why it exists and what decision closes it. “Needs attention” without a defined decision is not enough.

## 9. Audit architecture

Audit history should be append-oriented and resistant to silent rewriting.

An audit entry should identify:

- event type;
- time;
- initiating actor;
- command or operation;
- records or files affected;
- previous and resulting state references where practical;
- destination and adapter for external effects;
- verification result;
- failure or rollback references.

Audit history is not a substitute for backups. It explains change; it may not contain everything required to restore state.

## 10. Backup and recovery

Backup and recovery are separate capabilities.

A backup system should define:

- included records and files;
- excluded secrets or caches;
- schema and application version;
- manifest and integrity checks;
- creation status;
- storage location;
- retention policy;
- encryption status where implemented.

A recovery system should define:

- restore target;
- compatibility checks;
- dry-run or validation behavior;
- conflict handling;
- rollback from failed restore;
- proof that recovered state is usable.

A backup has not been proven merely because an archive was created. Restore drills are required.

## 11. Imports

Imports must distinguish between:

- copying source files into managed storage;
- referencing files in place;
- extracting text and metadata;
- creating proposed records;
- accepting imported records as canonical;
- rebuilding indexes.

Import should preserve provenance and report:

- unreadable or unsupported files;
- duplicate candidates;
- conflicting records;
- skipped content;
- boundary or sensitivity concerns;
- partial completion.

Permanent deletion of canonical source files must not occur automatically as part of deduplication or cleanup. Exact duplicates may be deduplicated in the index or moved to logged quarantine under an approved policy.

## 12. Exports

Exports should be explicit products with declared purpose and audience.

Examples:

- full House portability export;
- selected-record archive;
- public website payload;
- publishing metadata package;
- manuscript or edition export;
- audit report;
- backup package.

An export should declare:

- included content;
- excluded content;
- privacy classification;
- destination;
- format and version;
- whether the export is authoritative or a snapshot;
- whether secrets or private sources are omitted;
- how the export may be verified.

## 13. Integration adapters

External systems must be accessed through explicit adapters rather than scattered direct calls.

An adapter should declare:

- service and destination;
- authentication requirements;
- data read and written;
- command classes;
- rate and failure behavior;
- verification capability;
- retry and idempotency behavior;
- audit fields;
- privacy implications;
- disconnect and credential-removal behavior.

Adapters for email, publishing, payment, account management, or public posting are high-sensitivity because their effects leave the House.

## 14. Local AI and external AI

The architecture should distinguish:

- deterministic local rules;
- local model inference;
- external model inference;
- retrieval from local knowledge;
- retrieval from external sources;
- accepted human decisions.

A model result is not canonical merely because it was generated locally. Local execution changes privacy exposure, not epistemic authority.

External model use must declare the data boundary and destination before private content is sent.

## 15. Module boundaries

Each module should declare:

- namespace;
- records and relationships;
- commands;
- reviews;
- migrations;
- UI surfaces;
- permissions;
- adapters;
- public/private classifications;
- export behavior;
- removal behavior;
- dependencies.

A module must not write directly into another module’s internal tables or files without a shared contract.

## 16. House configuration

House configuration may define:

- enabled desks and modules;
- terminology;
- workflow states;
- review thresholds;
- default privacy classifications;
- local paths;
- integrations;
- backup targets;
- model preferences;
- display preferences;
- seeded synthetic or private records.

Configuration must be separate from secrets and private data where practical. Public templates must not include live credentials, private paths, identifying records, or hidden assumptions from Stokknes House.

## 17. Pre-alpha deployment reality

The current running build may combine responsibilities that the canonical architecture intends to separate. Pre-alpha stress testing should record those gaps instead of pretending the logical architecture is already fully enforced.

Known classes of architectural work include:

- extracting generic Core behaviour from Program 01 / AuthorMachine working code and Stokknes-specific configuration;
- clarifying record authority and provenance;
- making command effects consistently declarative;
- proving backup and restore behavior;
- separating public website sources from application sources;
- replacing private fixtures with synthetic ones;
- adding validation and migration tests;
- defining installer and upgrade boundaries.

## 18. Architecture acceptance test

A capability is not considered architecturally integrated until it can answer:

1. What records does it own or extend?
2. Where is canonical truth stored?
3. What sources support the result?
4. What command classes can it execute?
5. What external effects can occur?
6. What authority is required?
7. What is audited?
8. How is it backed up, exported, removed, and recovered?
9. What private data can cross a boundary?
10. Can the capability be tested with synthetic fixtures outside Stokknes House?

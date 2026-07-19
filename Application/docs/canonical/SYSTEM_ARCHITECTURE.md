# System architecture

**Status:** Canonical target architecture; implementation remains Alpha
**Effective:** 2026-07-19

## Architectural goal

Systead should provide a local-first operating layer where records, knowledge, projects, commands, review, modules, and integrations share one controlled model rather than becoming disconnected dashboards.

## Core layers

### 1. Storage and identity

- stable record identifiers;
- typed records and relationships;
- schema versioning and migrations;
- local attachments and source references;
- immutable or append-only history where appropriate;
- explicit archive and deletion states.

### 2. Canonical record graph

Canonical records represent durable entities such as people, organizations, projects, assets, publications, accounts, obligations, decisions, evidence, and files.

Modules may add domain-specific fields or views, but must link to the canonical entity rather than silently clone it.

### 3. Knowledge layer

- document and file indexing;
- source provenance;
- searchable passages and metadata;
- confidence and freshness indicators;
- conflict and duplicate detection;
- review tasks before uncertain findings become canonical.

Permanent deletion of canonical source files must not occur automatically. Exact duplicates may be deduplicated in the index or moved to a logged quarantine; near-duplicates and conflicting sources require review.

### 4. Command system

Every material command should declare:

- command type and version;
- initiating actor;
- source and reason;
- target records or external destinations;
- expected effects;
- risk level;
- required confirmation;
- preconditions;
- backup or snapshot requirement;
- verification method;
- audit payload;
- rollback or recovery strategy.

Recommended lifecycle:

```text
Draft → Proposed → Previewed → Approved → Executing → Verified
                                      ↘ Failed → Recovery required
                                      ↘ Rejected / Cancelled
```

### 5. Review system

The review system receives:

- AI proposals;
- detected conflicts;
- duplicate candidates;
- risky commands;
- external publication or communication drafts;
- failed verification;
- records requiring human judgment.

Review outcomes must be recorded and linked to the affected records and decisions.

### 6. Module system

Modules register:

- domain records and fields;
- views and navigation;
- commands;
- review types;
- knowledge sources;
- optional integrations;
- permissions and privacy requirements;
- import/export formats.

A module must not bypass Core command safety, audit, or privacy boundaries.

### 7. Integration adapters

External systems should be isolated behind adapters. An adapter must expose:

- destination and account identity;
- read/write capabilities;
- credential location and handling;
- rate and failure limits;
- dry-run or preview support where possible;
- synchronization direction;
- conflict policy;
- audit information;
- revocation and disable controls.

### 8. Interface layer

A House interface may include command centres, desks, dashboards, records, project cockpits, review queues, timelines, search, and specialist workspaces. UI labels are configurable, but underlying record and command contracts remain stable.

## AI boundary

Systead should support local and explicitly configured remote models. Model choice must not change the authority model:

- model output is a proposal or analysis;
- source context should be inspectable;
- uncertain output should remain marked as uncertain;
- model access to private records is permission-controlled;
- external model transmission must be visible and configurable;
- AI cannot silently publish, pay, delete, or overwrite canonical truth.

## Recovery baseline

Before public release, the system should prove:

- clean install and removal;
- documented data location;
- backup and restore;
- export to inspectable formats;
- migration between versions;
- recovery from interrupted commands;
- audit inspection;
- safe module disablement;
- no dependency on private Stokknes data.

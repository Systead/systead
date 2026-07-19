# Stress-test protocol

**Status:** Active working protocol
**Scope:** Private pre-alpha
**Current phase:** Week one

## 1. Objective

The stress test is designed to expose operational and architectural failure before outside testing begins.

“Stress” includes more than CPU or memory load. It includes:

- long-running real use;
- repeated state changes;
- conflicting records;
- bad or incomplete inputs;
- interrupted operations;
- migrations;
- indexing changes;
- boundary crossings;
- recovery attempts;
- confusing operator decisions;
- specialist-system pressure on generic Core contracts.

## 2. Test dimensions

### A. Availability

Test:

- cold start;
- restart after normal shutdown;
- restart after forced termination;
- operation without network;
- unavailable optional services;
- missing non-critical files;
- corrupted derived cache;
- low-disk warning behavior where practical.

Expected:

- the House clearly reports its state;
- optional-service failure does not silently destroy local usefulness;
- derived indexes can be rebuilt;
- ambiguous or unsafe startup stops with useful guidance.

### B. Data integrity

Test:

- repeated edits;
- competing updates;
- duplicate imports;
- stale aliases;
- deleted source references;
- invalid relationship targets;
- schema migration;
- rollback after failed migration;
- archive and restore.

Expected:

- canonical state is identifiable;
- conflicts are surfaced rather than overwritten silently;
- provenance survives;
- no automatic permanent deletion of canonical source files;
- recovery evidence exists.

### C. Knowledge integrity

Test:

- re-indexing unchanged sources;
- changed source files;
- conflicting documents;
- unsupported formats;
- deleted or moved files;
- source-version changes;
- summaries generated from stale indexes;
- exact and near duplicates.

Expected:

- source status is visible;
- stale or missing sources are reported;
- derived summaries do not masquerade as source truth;
- exact duplicates can be deduplicated in the index or logged quarantine without destroying canonical files.

### D. Command safety

Test:

- missing parameters;
- changed scope after preview;
- expired approval;
- repeated execution;
- adapter timeout;
- partial success;
- verification mismatch;
- failed rollback;
- unavailable destination;
- high-risk action without backup.

Expected:

- commands cannot silently broaden scope;
- approval is tied to the declared command;
- retries are safe or explicitly blocked;
- partial state is reported;
- audit and recovery references are retained.

### E. Privacy boundaries

Test:

- screenshot generation;
- public-site export;
- public fixture generation;
- external model request;
- email or publishing preview;
- analytics or logging;
- repository packaging;
- backup creation;
- support-report export.

Expected:

- destination and payload are visible;
- private records do not enter public artifacts by default;
- secrets are excluded;
- synthetic fixtures remain independent of private source data;
- the operation leaves an audit record.

### F. Module boundaries

Test:

- module enable/disable;
- module migration;
- module removal;
- records shared across desks;
- specialist commands using Core;
- missing dependency;
- version mismatch;
- Program 01 publishing flow in a clean synthetic House.

Expected:

- modules use declared contracts;
- removal does not silently delete shared truth;
- private or publishing-specific assumptions are detected;
- Core remains usable without the specialist module where intended.

### G. Backup and recovery

Test:

- full backup creation;
- manifest validation;
- restore to a clean location;
- restore with version mismatch;
- recovery after interrupted command;
- recovery after migration failure;
- selected-record export and import;
- excluded-secret behavior.

Expected:

- restore is demonstrated, not assumed;
- compatibility errors are understandable;
- original state remains protected;
- restored state passes basic integrity checks.

### H. Operator clarity

Test through real use:

- Can the operator identify what changed?
- Can the operator distinguish information from a proposal?
- Is the required decision clear?
- Are blocked states explained?
- Does the interface reveal risk and destination?
- Is the next safe action visible after failure?
- Are canonical and historical states distinguishable?

A technically correct workflow that repeatedly causes mistaken decisions is a product failure.

## 3. Test record template

```text
Test ID:
Date and build:
House/data fixture:
Area:
Preconditions:
Action:
Expected result:
Observed result:
Records/files affected:
External effects:
Evidence:
Severity:
Workaround:
Recovery performed:
Follow-up decision:
```

## 4. Measurement rules

Do not publish percentages or performance claims unless the record includes:

- hardware and operating system;
- build version;
- dataset size and composition;
- exact workload;
- start and stop criteria;
- number of runs;
- failures and exclusions;
- measurement tool;
- whether the data is synthetic or private.

Useful internal measurements may include:

- startup time;
- indexing time;
- memory growth over a session;
- command completion and verification time;
- backup and restore time;
- number of unresolved conflicts;
- number of manual recovery steps;
- failure recurrence.

The current public site intentionally makes no numerical reliability claim.

## 5. Safety rules

- Never stress-test destructive behavior against the only canonical copy.
- Snapshot before schema and storage experiments.
- Do not send test payloads to real public, financial, legal, or communication destinations without explicit approval.
- Use synthetic external destinations or dry-run adapters where possible.
- Redact or reconstruct evidence before public use.
- Stop immediately for P0 incidents.
- Treat ambiguous partial success as unsafe until verified.

## 6. Week-one completion criteria

Week one does not need to “finish Systead.” It should produce:

- an issue inventory grounded in real use;
- confirmed product and terminology corrections;
- a list of P0/P1/P2 risks;
- at least one demonstrated backup and restore path for the scoped private build;
- identified private assumptions blocking clean-House operation;
- known command and external-effect gaps;
- public wording that accurately reflects maturity;
- prioritized work for the next hardening cycle.

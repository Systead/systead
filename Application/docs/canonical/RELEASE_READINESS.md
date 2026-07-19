# Release readiness gates

**Status:** Canonical readiness framework
**Current result:** Not ready for outside testing

Readiness is determined by evidence against a defined scope, not by feature count, visual polish, or how long development has continued.

## Gate 0 — Public repository safety

Required before wider promotion of the repository:

- canonical product and status wording is consistent;
- secret scanning is enabled or performed;
- no private House data, backups, logs, indexes, or credentials are present;
- screenshots and fixtures are synthetic or deliberately approved;
- licensing boundaries are clear;
- public links resolve;
- archived material cannot be mistaken for current implementation;
- AuthorMachine and other working names are qualified as provisional;
- no untouched private v10 source tree has been pushed directly into public main;
- Program 01 features are labelled by maturity rather than implied as a final release contract.

## Gate 1 — Clean bootstrap

Required before a closed technical alpha:

- a clean machine or clean user profile can initialize the scoped build;
- no Stokknes-specific paths, records, credentials, or hidden configuration are required;
- dependency and platform requirements are documented;
- startup failures produce useful guidance;
- uninstall or manual removal steps are documented;
- the process has been repeated from written instructions.

## Gate 2 — Data integrity and migration

Required before outside users can trust upgrades:

- schemas have explicit versions;
- migrations are repeatable and tested;
- failed migration does not destroy the last usable state;
- duplicate and conflict behavior is documented;
- canonical source files are not silently deleted;
- imports preserve provenance;
- test fixtures cover representative edge cases.

## Gate 3 — Backup, export, and restore

Required before meaningful outside use:

- backup contents and exclusions are documented;
- manifests and integrity checks exist for the scoped package;
- restore is demonstrated into a clean location;
- version incompatibility is handled safely;
- House portability export is defined;
- secrets and external-service dependencies are clearly separated;
- a failed restore does not overwrite the original usable state.

## Gate 4 — Command safety

Required before material automation is enabled:

- command intent and scope are declared;
- affected records and destinations are previewed;
- approval is bound to the exact command;
- risk rules exist for the enabled command classes;
- execution status and partial failure are visible;
- verification exists where possible;
- audit records are written;
- rollback or corrective action is documented;
- high-risk external effects can remain disabled.

## Gate 5 — Privacy and integration boundaries

Required before external services or public output are offered:

- every adapter declares data read, written, and destination;
- credential handling is documented;
- public exports are separated from private records;
- external AI usage declares prompt boundaries;
- logs and support exports minimize sensitive content;
- disconnect and credential-revocation behavior is understood;
- no forced cloud or telemetry is introduced silently.

## Gate 6 — Security baseline

Required before a security claim or broader alpha:

- threat model exists for the scoped deployment;
- secrets are not stored in public configuration;
- dependencies and update behavior are inventoried;
- local file and database permissions are reviewed;
- input and import validation exists for exposed paths;
- high-risk adapters are isolated and disabled by default where appropriate;
- vulnerability reporting guidance exists;
- known critical issues are resolved or the feature is removed from scope.

Passing this gate does not justify an unqualified “secure” claim. It supports a defined baseline claim.

## Gate 7 — Operator clarity and accessibility

Required before non-developer testers:

- the current status and next safe action are understandable;
- proposal, canonical, historical, conflict, and failure states are distinguishable;
- destructive and external actions are not visually ambiguous;
- keyboard navigation and essential accessibility have been checked;
- errors explain what changed and what did not;
- onboarding does not require private developer knowledge;
- the first surface remains calm and useful without exposing full system machinery;
- progressive disclosure has been tested with someone who did not build the private House.

## Gate 8 — Support and diagnostics

Required before inviting outside users:

- build and schema versions are visible;
- diagnostics can be exported without private payloads by default;
- known limitations are documented;
- issue reporting instructions exist;
- recovery and rollback guidance is available;
- the supported scope—platform, features, data size, and integrations—is explicit.

## Gate 9 — Closed technical alpha decision

A closed technical alpha may begin only when:

- the selected scoped gates above are marked with evidence;
- no unresolved P0 issue exists;
- unresolved P1 issues are absent or the affected feature is removed from scope;
- a clean install/bootstrap, representative workflow, backup, restore, and removal have been demonstrated;
- tester data boundaries and consent are documented;
- the tester population is small enough to support responsibly;
- the label and limitations are published honestly;
- the release identity for any included Program is deliberately decided or clearly retained as a technical working label.

## Gate 10 — Later public alpha or beta

Public alpha or beta requires additional evidence around:

- repeatable packaging and updates;
- broader compatibility;
- user support;
- dependency and vulnerability management;
- telemetry and privacy policy if introduced;
- data migration across releases;
- crash and corruption recovery;
- accessibility;
- licensing;
- distribution channels;
- external integration reliability;
- documented deprecation behavior.

No current date is attached to these gates.

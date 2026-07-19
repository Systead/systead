# Product model

**Status:** Canonical working model
**Effective:** 19 July 2026

## 1. Systead

**Systead** is the parent brand, platform, and universal operating architecture.

It is not limited to authors, publishing, one dashboard, one automation tool, or the private Stokknes environment. Systead defines the common records, contracts, safety behavior, review model, audit model, integration boundaries, and recovery expectations on which configured environments and specialist systems operate.

Systead’s core proposition is:

> Bring operational truth, knowledge, judgment, and controlled action into one operator-owned environment without making a mandatory cloud service or an opaque AI system the final authority.

Systead is not a legal, medical, financial, publishing, or household authority. It is infrastructure for organizing information, preparing decisions, and executing explicitly approved operations.

## 2. Systead Core

**Systead Core** is the generic local-first foundation.

Core responsibilities include:

### Canonical records

- stable identifiers;
- typed records and relationships;
- provenance and source references;
- lifecycle and archival state;
- conflict and duplicate handling;
- schema versions and migrations;
- history and change attribution.

### Storage and portability

- local storage contracts;
- documented export formats;
- backup manifests;
- restore and recovery behavior;
- quarantine instead of silent destructive cleanup;
- migration validation;
- attachment and source-file references.

### Knowledge

- indexing and retrieval;
- source visibility;
- confidence and uncertainty metadata;
- version-aware manuals and decisions;
- conflict reporting;
- links from knowledge to the records and workflows it explains.

### Commands and review

- proposal objects;
- declared intent and effects;
- risk classification;
- affected-record previews;
- confirmation requirements;
- execution adapters;
- verification results;
- audit history;
- rollback or corrective-action references.

### Boundaries and permissions

- private, restricted, internal, exportable, and public classifications;
- destination declarations;
- integration permissions;
- model and prompt boundaries;
- module capabilities;
- role or authority contracts where multi-user support is later introduced.

### Module contracts

- registration and discovery;
- record types and namespaces;
- commands and declared effects;
- views and review queues;
- migrations;
- import/export interfaces;
- integration adapters;
- shared terminology and design primitives.

Core must not contain assumptions that only make sense for publishing, one author, one company, one country, or the Stokknes House.

## 3. House

A **House** is one operator’s configured Systead environment.

A House combines:

- the operator’s canonical records;
- local terminology and preferences;
- selected desks, modules, and specialist systems;
- workflow states and review rules;
- permissions and public/private boundaries;
- local knowledge and source material;
- optional external integrations;
- history, audit, backup, migration, and recovery state.

A House is not merely a visual theme. Two Houses may use the same Core while differing substantially in data model extensions, desks, workflows, integration permissions, vocabulary, and operational priorities.

A House is also not a mandatory hosted account. A hosted or synchronized deployment may be offered later, but it must not redefine the product around cloud captivity.

### House naming rule

Use **House** as the standard environment term.

“**Systead House**” may be used descriptively when the surrounding context would otherwise be unclear. It must not be presented as a second parent product that competes with Systead.

## 4. Desks

A **Desk** is a practical operational surface inside a House. It groups records, decisions, queues, and commands around an ongoing area of responsibility.

Examples may include:

- Command Centre;
- Contact Desk;
- Project Desk;
- Asset Desk;
- Finance Desk;
- Knowledge Desk;
- Animal Desk;
- Publishing Desk.

A Desk should not own a duplicate copy of shared truth. It should display and act on canonical records through defined contracts.

## 5. Modules

A **Module** is an optional capability that adds records, views, rules, commands, imports, or integrations without becoming a separate full product.

A module must declare:

- its namespace;
- records and migrations;
- commands and external effects;
- required permissions;
- public/private behavior;
- export and removal behavior;
- dependencies on Core or other modules.

Removing a module must not silently destroy canonical records or make the remaining House impossible to inspect.

## 6. Specialist systems

A **specialist system** is a purpose-built product or major domain layer using Systead Core and operating inside or alongside a House.

A specialist system may add:

- domain records;
- domain-specific terminology;
- dedicated cockpits and desks;
- production pipelines;
- domain knowledge;
- review and approval rules;
- specialist integrations.

It must reuse the common canonical-record, safety, audit, privacy, portability, and recovery model where applicable.

## 7. AuthorMachine by Systead

**AuthorMachine by Systead** is the first specialist product.

Its intended domain includes:

- author and publishing command centres;
- book and project cockpits;
- manuscript, scene, chapter, and edition control;
- canon, continuity, characters, locations, timelines, objects, and rules;
- style bibles and project voice constraints;
- decision logs;
- contradiction and plot-hole registers;
- proofing and production issue tracking;
- edition-specific production pipelines;
- catalogue, rights, formats, metadata, pricing, and release state;
- launch operations;
- ARC, reviewer, publishing-contact, and outreach workflows;
- publishing knowledge and source evidence;
- reviewable AI assistance;
- approved export and synchronization to declared external destinations.

AuthorMachine is not the universal platform.

When AuthorMachine reveals a capability that applies across domains—such as generic decision logs, source-aware knowledge, review queues, commands, audit, contact records, backup, or recovery—the generic contract should move into Core. Publishing-specific rules remain in AuthorMachine.

## 8. Stokknes House

**Stokknes House** is the private flagship environment and proving ground used to discover, pressure-test, and refine Systead capabilities.

It may contain private personal, household, publishing, financial, legal, medical, contact, animal, project, manuscript, analytics, and historical information.

Stokknes House is not:

- a public product name;
- a public demo database;
- a seed bundle for outside users;
- a template containing real private records;
- a source that may be copied into releases merely because it was useful during development.

Reusable architecture may be extracted from Stokknes House only after:

1. the capability is separated from private data;
2. Stokknes-specific terminology and assumptions are removed or made configurable;
3. synthetic fixtures replace real records;
4. privacy and migration implications are reviewed;
5. the generic contract is documented and tested.

## 9. Relationship between the parts

```text
Systead
├── Systead Core
│   ├── canonical records
│   ├── storage and migrations
│   ├── knowledge and provenance
│   ├── commands and review
│   ├── audit and recovery
│   └── integration and module contracts
├── House (configured operator environment)
│   ├── local data and terminology
│   ├── desks and optional modules
│   ├── permissions and workflows
│   ├── optional integrations
│   └── specialist systems
│       └── AuthorMachine by Systead
└── Private proving grounds
    └── Stokknes House (not distributed)
```

## 10. Product-boundary test

When deciding where a capability belongs, ask:

1. Does it make sense for a non-author House?
2. Does it depend on publishing-specific records or language?
3. Does it depend on Stokknes-specific data, habits, or history?
4. Can it operate through stable generic contracts?
5. Can it be tested with synthetic fixtures?

Expected result:

- universal behavior → **Core**;
- configured operational surface → **House or Desk**;
- optional bounded capability → **Module**;
- large domain product → **Specialist system**;
- private personal configuration → **Stokknes House only**.

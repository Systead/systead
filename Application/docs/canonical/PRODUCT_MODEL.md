# Product model

**Status:** Canonical working model
**Effective:** 2026-07-19

## 1. Systead

Systead is the parent brand, platform, and universal operating architecture.

It is not limited to authors, publishing, a single dashboard, or the private Stokknes environment. Systead provides the common foundation on which configured environments and specialist systems operate.

## 2. Systead Core

Systead Core is the generic local-first foundation. Its responsibilities include:

- canonical records and identifiers;
- storage and migrations;
- knowledge indexing and source references;
- commands and declared effects;
- risk classification and confirmation;
- proposal and review queues;
- audit history;
- backup, export, restore, and rollback;
- permissions and private/public boundaries;
- optional integration adapters;
- module registration and shared contracts.

Core must not contain assumptions that only make sense for publishing, the Stokknes House, or one user's seeded data.

## 3. House

A **House** is one operator's configured Systead environment.

A House combines:

- the operator's canonical records;
- selected desks, modules, and specialist systems;
- local configuration and terminology;
- workflows and review rules;
- permissions and privacy boundaries;
- optional external integrations;
- history, audit, backup, and recovery state.

A House is a product concept and runtime environment, not a separate legal entity and not a mandatory hosted account.

### Naming rule

Use **House** as the standard environment term. “Systead House” may be used descriptively where context requires clarity, but it must not be presented as a second parent product competing with Systead.

## 4. Specialist systems

Specialist systems are purpose-built products or modules that use Systead Core and operate inside or alongside a House.

They may add domain-specific records, views, workflows, knowledge, commands, and integrations, but they must reuse the common safety and canonical-record model.

## 5. AuthorMachine by Systead

AuthorMachine by Systead is the first specialist product.

Its intended domain includes:

- book and project cockpits;
- manuscript and edition control;
- canon and continuity;
- style bibles and decision logs;
- contradiction and plot-hole review;
- proofing and production pipelines;
- catalogue, rights, formats, pricing, and release state;
- launch operations;
- ARC, reviewer, and publishing-contact workflows;
- publishing knowledge and evidence;
- reviewable AI assistance;
- export and synchronization to approved external destinations.

AuthorMachine is not the universal platform. Generic capabilities discovered through AuthorMachine must be extracted into Core when they apply beyond publishing.

## 6. Stokknes House

Stokknes House is the private flagship environment and proving ground used to discover, test, and refine Systead capabilities.

It is not:

- a public product name;
- a public demo database;
- a template containing real private records;
- a source of data that may be copied into releases without explicit sanitization and approval.

Reusable architecture should be extracted from Stokknes House. Private data and personal configuration should remain private.

## 7. Relationship between the parts

```text
Systead
├── Systead Core
├── House (configured operator environment)
│   ├── shared desks and modules
│   ├── optional integrations
│   └── specialist systems
│       └── AuthorMachine by Systead
└── Private proving grounds
    └── Stokknes House (not distributed)
```

# Systead

**Local-first command systems for running work, knowledge, money, household operations, and specialist workflows under human control.**

> **Status:** Alpha foundation in preparation. This repository documents and prototypes the platform architecture; it is not yet a production release.

## What Systead is

Systead is the parent platform and operating architecture. It is designed to give an operator one controlled place to coordinate records, projects, knowledge, review queues, commands, automation, and specialist systems without surrendering ownership of data or final decisions.

A configured Systead environment is called a **House**.

A House is not a mandatory cloud account or a generic dashboard skin. It is the operator-owned environment in which Systead Core and selected specialist systems work from linked canonical records.

## Product model

- **Systead** — the platform, brand, and universal architecture.
- **Systead Core** — the local-first foundation for records, storage, knowledge, commands, safety, review, audit, and recovery.
- **House** — one operator's configured Systead environment.
- **AuthorMachine by Systead** — the first specialist product, focused on publishing operations.
- **Stokknes House** — the private flagship and proving ground. It is not public demo data and is not distributed as a product.

The phrase **Systead House** may be used descriptively, but **House** is the environment model—not a separate competing product brand.

## Operating principles

- Local-first by default.
- The operator owns the data and the final decision.
- AI proposes; humans approve.
- Important actions are explainable, logged, and reversible.
- Private information is never silently promoted into public output.
- Modules link canonical records instead of cloning conflicting versions of truth.
- Cloud services, telemetry, publishing, payments, and external communication are optional and explicit.
- Export, backup, recovery, and migration are product features—not emergency afterthoughts.

## Command safety model

Material actions should move through a visible lifecycle:

1. **Propose** — explain the intended change, source, reason, scope, and confidence.
2. **Preview** — show affected records, files, integrations, and likely consequences.
3. **Approve** — obtain the required human confirmation for the declared risk level.
4. **Execute** — perform only the approved operation.
5. **Verify** — confirm the expected result and report any mismatch.
6. **Audit** — record what changed, when, why, and under whose authority.
7. **Recover** — support rollback, restoration, or a documented corrective action.

## Repository state

This repository is currently transitional:

- Root-level `index.html`, `assets/`, `CNAME`, and `profile/` contain the prelaunch website and organization-profile material.
- The platform bootstrap currently lives under [`Application/`](Application/).
- Canonical product and boundary documentation is under [`Application/docs/canonical/`](Application/docs/canonical/).

The repository will be flattened or split deliberately before a public software release. Until then, the `Application/` tree is the authoritative implementation bootstrap and the root website is a public presentation layer.

## Start here

1. Read [`Application/docs/canonical/PRODUCT_MODEL.md`](Application/docs/canonical/PRODUCT_MODEL.md).
2. Read [`Application/docs/canonical/OPERATING_PRINCIPLES.md`](Application/docs/canonical/OPERATING_PRINCIPLES.md).
3. Read [`Application/docs/canonical/SYSTEM_ARCHITECTURE.md`](Application/docs/canonical/SYSTEM_ARCHITECTURE.md).
4. Read [`Application/docs/canonical/PUBLIC_PRIVATE_BOUNDARIES.md`](Application/docs/canonical/PUBLIC_PRIVATE_BOUNDARIES.md).
5. Read [`Application/docs/canonical/ROADMAP.md`](Application/docs/canonical/ROADMAP.md).

## Current scope

The Alpha foundation is focused on:

- canonical local records and linked truth;
- command declaration, approval, verification, audit, and recovery;
- knowledge indexing with source visibility;
- review queues for AI and automation proposals;
- configurable House structure;
- specialist-system boundaries;
- extraction of AuthorMachine from its private proving environment into a reusable Systead product;
- safe import, export, backup, and portability.

This repository does **not** claim that production security, stable APIs, public installers, final licensing, or support commitments are complete.

## Public and private boundaries

The public repository may contain architecture, generic schemas, synthetic examples, public brand material, and non-sensitive test fixtures. It must not contain private House data, manuscripts, real contacts, credentials, financial records, medical or legal records, personal communications, private analytics, or identifying operational history.

See [`PUBLIC_PRIVATE_BOUNDARIES.md`](Application/docs/canonical/PUBLIC_PRIVATE_BOUNDARIES.md).

## Website and organization

- Website: [systead.com](https://systead.com)
- GitHub organization: [github.com/Systead](https://github.com/Systead)

Copyright © 2026 Marius Johan Stokknes. No public software licence has been granted unless a specific file or component states otherwise.

# Platform and Program architecture

**Status:** Canonical architectural direction
**Maturity:** Pre-alpha; implementation compliance is incomplete

## Purpose

This document prevents two opposite mistakes:

1. reducing Systead to the first publishing Program; and
2. turning Systead into an undefined collection of every possible feature.

The architecture separates shared trust and continuity from domain-specific depth.

## Layer model

```text
┌───────────────────────────────────────────────────────────────┐
│ Human surfaces                                                │
│ Today · Search · Capture · Rooms · Desks · Review · Health    │
├───────────────────────────────────────────────────────────────┤
│ Specialist Programs                                           │
│ Program 01: Publishing · future bounded domain Programs        │
├───────────────────────────────────────────────────────────────┤
│ House Steward                                                  │
│ Observe · Explain · Detect · Reconstruct · Propose · Stage     │
├───────────────────────────────────────────────────────────────┤
│ Systead Trust Kernel / Core                                    │
│ Identity · Records · Provenance · Decisions · Authority        │
│ Commands · Audit · Privacy · Recovery · Export                 │
├───────────────────────────────────────────────────────────────┤
│ Local storage and declared adapters                            │
│ Files · databases · indexes · models · connectors · backups    │
└───────────────────────────────────────────────────────────────┘
```

## Systead Trust Kernel

The Trust Kernel is the non-negotiable part of Core.

It should govern:

- identity and authority;
- canonical standing;
- provenance;
- decision evidence;
- command scope;
- external destinations;
- privacy boundaries;
- audit history;
- verification;
- recovery;
- portability.

A Program may add specialist rules but must not bypass the Kernel.

## Systead Core

Core also provides shared services such as:

- record registration and stable identifiers;
- schema versions and migrations;
- local persistence contracts;
- search and indexing;
- source attachment and knowledge links;
- duplicate and conflict handling;
- proposal and review queues;
- backup and restore manifests;
- Program, module, Utility, and Connector registration.

## House

A House combines:

- operator identity and preferences;
- selected Rooms and Desks;
- local records and knowledge;
- Program installations;
- permissions and authority rules;
- connectors and external destinations;
- history, audit, backup, and recovery state.

The House is a configured environment, not a second parent product.

## Rooms

Rooms provide broad human navigation by responsibility.

Room names should remain understandable without requiring knowledge of implementation categories.

Examples may include Today, Work, Knowledge, Contacts, Household, Assets, Administration, and Archive.

## Desks

Desks are focused operational surfaces inside Rooms.

A Desk may combine records and commands from several Core services. It should not own duplicate canonical truth.

## Programs

Programs are deep specialist applications.

A Program must declare:

- namespace;
- domain record types;
- migrations;
- commands and effects;
- permissions;
- dependencies;
- imports and exports;
- external adapters;
- removal behavior;
- privacy behavior;
- fixture strategy;
- public maturity.

A Program should be installable without making its terminology the default vocabulary of every House.

## Program 01: Publishing

The first Program is publishing. Its current internal working name is AuthorMachine.

Program 01 may use shared Core records such as Person, Organisation, Project, File, Decision, Commitment, Event, Asset, and Publication while adding publishing-specific records such as ManuscriptState, Edition, CanonClaim, Character, Scene, ProofIssue, Release, ARCActivity, and StorefrontListing.

The exact model remains subject to implementation review and migration testing.

## Modules

Modules add bounded capabilities that are too small or generic to require a full Program.

Examples might include a calendar bridge, conversion utility, local model provider, or specialist importer.

## Utilities

Utilities provide reusable operations such as:

- search;
- quick capture;
- import;
- export;
- conversion;
- checksum;
- backup;
- restore;
- quarantine;
- diagnostics.

## Connectors

Connectors cross House boundaries.

Every Connector must declare:

- external system;
- read capability;
- write capability;
- data classes involved;
- authorization method;
- destination;
- offline behavior;
- sync/conflict model;
- audit output;
- revocation and removal behavior.

## Exit Kit

Exit Kit is the shared portability and recovery surface.

It should eventually provide:

- canonical record export;
- attachments and source files;
- human-readable manifests;
- machine-readable schemas;
- checksums;
- excluded-secret reports;
- restore verification;
- ordinary-file fallbacks where practical.

## Boundary test

When deciding where a capability belongs, ask:

1. Does it make sense for a non-publishing House?
2. Is it required to protect trust, authority, privacy, or recovery?
3. Does it depend on specialist domain records?
4. Is it a focused surface or a reusable service?
5. Can it be removed without making the remaining House unreadable?
6. Can it be tested with synthetic fixtures?

Expected placement:

- trust, identity, canonical truth, authority, audit, recovery, export → **Trust Kernel/Core**;
- broad configured domain → **Room**;
- focused operational surface → **Desk**;
- bounded reusable capability → **Module or Utility**;
- external service bridge → **Connector**;
- deep domain application → **Program**;
- personal data and configuration → **private House only**.

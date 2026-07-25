# Systead canonical documentation

This directory is the working source of truth for Systead's product model, architecture, safety rules, privacy boundaries, naming, ownership direction, current maturity, and release gates.

When implementation, interface copy, a prototype, a screenshot, a private configuration, or a lower-level document conflicts with this directory, the conflict must be reported and resolved deliberately. Two incompatible definitions must not be allowed to coexist silently.

## Current status

Systead is a **running private pre-alpha** under real daily use and active stress testing as of **25 July 2026**.

That means:

- a private flagship House exists;
- the current private v10 line is broader than a writing application;
- architecture and terminology remain changeable;
- Program 01's current internal name, AuthorMachine, is not locked as its release name;
- private features and screenshots do not create a public release promise;
- no supported installer, public tester package, stable API, production-security guarantee, support commitment, or release date is claimed.
- nothing is currently available for public download, purchase, or supported public use.

Read [STATUS.md](STATUS.md) first.

## Core reading order

1. [STATUS.md](STATUS.md) — what exists now and what is not claimed.
2. [COMPANY_VISION.md](COMPANY_VISION.md) — the broader platform and future-company direction.
3. [PROBLEMS_AND_USE_CASES.md](PROBLEMS_AND_USE_CASES.md) — the human and operational failures Systead addresses.
4. [AUDIENCE_AND_FIT.md](AUDIENCE_AND_FIT.md) — who should recognise the problem and who is not the current target.
5. [PRODUCT_NORTH_STAR.md](PRODUCT_NORTH_STAR.md) — the category, target, promises, and signature experiences.
6. [SYSTEAD_CONSTITUTION.md](SYSTEAD_CONSTITUTION.md) — enforceable product laws.
7. [PRODUCT_MODEL.md](PRODUCT_MODEL.md) — Systead, Trust Kernel, Core, House, Rooms, Desks, Programs, and private proving ground.
8. [PLATFORM_VS_PROGRAMS.md](PLATFORM_VS_PROGRAMS.md) — the durable House and replaceable Program distinction.
9. [PLATFORM_AND_PROGRAM_ARCHITECTURE.md](PLATFORM_AND_PROGRAM_ARCHITECTURE.md) — separation between shared continuity and specialist depth.
10. [DIFFERENTIATION.md](DIFFERENTIATION.md) — category boundaries and defensible product distinction.
11. [HOUSE_STEWARD.md](HOUSE_STEWARD.md) — intelligence, authority ladder, proposal, execution, and verification behaviour.
12. [PROGRAM_01_PUBLISHING.md](PROGRAM_01_PUBLISHING.md) — first specialist Program and current AuthorMachine working-name scope.
13. [PROGRAM_02_SHARED_HOME.md](PROGRAM_02_SHARED_HOME.md) — resident-side continuity for solo homes, families, shared households, and renters.
14. [PROGRAM_03_PROPERTY.md](PROGRAM_03_PROPERTY.md) — owner-side continuity for owner-occupiers, small landlords, and property stewards.
15. [PROGRAM_PROBES.md](PROGRAM_PROBES.md) — archive, animal-care, and other future-domain probes.
16. [WORKING_NAMES_AND_RELEASE_IDENTITY.md](WORKING_NAMES_AND_RELEASE_IDENTITY.md) — what is locked, provisional, or legally future-facing.
17. [OPERATING_PRINCIPLES.md](OPERATING_PRINCIPLES.md) — non-negotiable product behaviour.
18. [SYSTEM_ARCHITECTURE.md](SYSTEM_ARCHITECTURE.md) — records, commands, storage, integration, knowledge, and recovery contracts.
19. [PUBLIC_PRIVATE_BOUNDARIES.md](PUBLIC_PRIVATE_BOUNDARIES.md) — what may cross into repositories, websites, prompts, exports, and services.
20. [PRIVATE_V10_INTAKE.md](PRIVATE_V10_INTAKE.md) — required procedure before private v10 material enters public integration work.
21. [V10_HANDOFF_BRIEF.md](V10_HANDOFF_BRIEF.md) — direct instructions for the developer or agent receiving the private build.
22. [STRESS_TEST_PROTOCOL.md](STRESS_TEST_PROTOCOL.md) — pressure tests and evidence.
23. [RELEASE_READINESS.md](RELEASE_READINESS.md) — outside-testing and release gates.
24. [ROADMAP.md](ROADMAP.md) — staged direction without invented dates.

## Product and public presentation

- [PUBLIC_PRESENTATION.md](PUBLIC_PRESENTATION.md) — explanation order, human product language, and information hierarchy.
- [BRAND_AND_NAMING.md](BRAND_AND_NAMING.md) — platform naming and verbal identity.
- [BRAND_ASSET_USAGE.md](BRAND_ASSET_USAGE.md) — flagship header, compact mark, emblem, icons, and usage rules.
- [TERMINOLOGY.md](TERMINOLOGY.md) — definitions used across code, docs, and interface copy.

## Repository, ownership, and decisions

- [REPOSITORY_STRUCTURE.md](REPOSITORY_STRUCTURE.md) — current transitional repository authority.
- [OWNERSHIP_AND_IP.md](OWNERSHIP_AND_IP.md) — current personal ownership and intended future company separation.
- [DECISION_REGISTER.md](DECISION_REGISTER.md) — explicit decisions and open questions.
- [PRE_ALPHA_PROGRAM.md](PRE_ALPHA_PROGRAM.md) — purpose and rules of the current development phase.

## Change rule

A change to a canonical decision should include:

1. the decision being changed;
2. the reason and evidence;
3. affected documents, schemas, interfaces, fixtures, and migrations;
4. privacy, authority, export, and recovery implications;
5. a new or updated decision-register entry;
6. compatibility or migration notes where required.

## Authority boundary

Canonical documentation defines intended product behaviour. It does not prove that every implementation path already satisfies it.

Stress testing and private v10 intake exist partly to discover where the running build violates, bypasses, or cannot yet enforce the canonical model.

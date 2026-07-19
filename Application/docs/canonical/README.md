# Systead canonical documentation

This directory contains the working source of truth for Systead’s product model, architecture, operating constraints, public/private boundaries, current status, and development gates.

When a lower-level document, interface label, prototype, website sentence, seeded configuration, or implementation assumption conflicts with this directory, the conflict must be reported and resolved deliberately. It must not be silently “fixed” by allowing two definitions to coexist.

## Current status

Systead is a **running private pre-alpha** in its **first week of stress testing** as of **19 July 2026**.

That means:

- a private build exists and is used under real daily workload;
- failure discovery and boundary hardening are active;
- architecture and terminology remain changeable;
- no public tester package or supported installer exists;
- no production-security, stable-API, support, or release-date promise is made.

Read [STATUS.md](STATUS.md) first.

## Canonical reading order

1. [STATUS.md](STATUS.md) — what exists now and what is not claimed.
2. [PRODUCT_MODEL.md](PRODUCT_MODEL.md) — Systead, Core, House, specialist systems, AuthorMachine, and Stokknes House.
3. [PUBLIC_PRESENTATION.md](PUBLIC_PRESENTATION.md) — public explanation order, category model, layout rhythm, and product voice.
4. [OPERATING_PRINCIPLES.md](OPERATING_PRINCIPLES.md) — non-negotiable product behavior.
5. [SYSTEM_ARCHITECTURE.md](SYSTEM_ARCHITECTURE.md) — layers, contracts, records, commands, knowledge, integrations, and recovery.
6. [PUBLIC_PRIVATE_BOUNDARIES.md](PUBLIC_PRIVATE_BOUNDARIES.md) — what may cross into repositories, websites, prompts, exports, and services.
7. [OWNERSHIP_AND_IP.md](OWNERSHIP_AND_IP.md) — current personal ownership and intended future company separation.
8. [PRE_ALPHA_PROGRAM.md](PRE_ALPHA_PROGRAM.md) — purpose and rules of the current phase.
9. [STRESS_TEST_PROTOCOL.md](STRESS_TEST_PROTOCOL.md) — how the private build is being pressured and what counts as evidence.
10. [RELEASE_READINESS.md](RELEASE_READINESS.md) — gates that must be passed before outside testing or release claims.
11. [ROADMAP.md](ROADMAP.md) — staged direction, without invented dates.
12. [REPOSITORY_STRUCTURE.md](REPOSITORY_STRUCTURE.md) — current transitional repository authority.
13. [BRAND_AND_NAMING.md](BRAND_AND_NAMING.md) — locked working names and public language.
14. [TERMINOLOGY.md](TERMINOLOGY.md) — definitions used across code, docs, and interface copy.
15. [DECISION_REGISTER.md](DECISION_REGISTER.md) — explicit decisions and open questions.

## Change rule

A change to a canonical decision should include:

1. the decision being changed;
2. the reason and evidence;
3. affected documents, schemas, interfaces, fixtures, and migrations;
4. privacy and recovery implications;
5. a new or updated decision-register entry;
6. a compatibility or migration note where required.

## Authority boundaries

Canonical documentation defines the intended product and safety model. It does not prove that every implementation path already satisfies it. Stress testing exists partly to discover where the running build violates or cannot yet enforce these rules.

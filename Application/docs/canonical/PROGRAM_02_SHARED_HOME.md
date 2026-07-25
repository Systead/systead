# Program 02: Shared Home

**Public alpha label:** Shared Home
**Final release name:** Undecided
**Maturity:** Founding-alpha design and synthetic implementation target

## Purpose

Program 02 gives people who live in a home a durable, understandable record of how that home operates.

It is for resident-side continuity: what exists, what needs attention, who agreed to what, which responsibility is current, and what must survive a move or change of residents.

## Founding-alpha profiles

The first configuration profiles are:

- **Solo Home** for one person maintaining domestic continuity;
- **Family** for a household with shared and role-sensitive responsibilities;
- **Shared Household** for co-renters or other independent residents coordinating common obligations;
- **Renter** for a resident preserving tenancy documents, condition evidence, maintenance history, and handover knowledge.

Profiles configure one Program. They may change default desks, language, and visibility, but must not fork canonical record types or weaken authority rules.

## Founding-alpha desks

The first bounded desks are:

- home record and important documents;
- responsibilities and recurring upkeep;
- shared inventory and condition;
- maintenance issues and evidence;
- shared costs and settlement records;
- decisions, agreements, and handover.

## Privacy and authority boundary

Shared Home is not a household-surveillance product.

- Shared records require a declared shared scope.
- A resident's private records do not become shared merely because they concern the same address.
- Role-aware visibility must be explicit and reviewable.
- The Program may record an agreement or settlement, but it does not silently enforce one.
- External messages, payments, or filings require explicit Connectors and approval.

## Initial exclusions

The founding alpha does not claim:

- rent collection or payment processing;
- legal tenancy advice or jurisdiction-specific compliance;
- landlord property-management administration;
- covert monitoring of residents;
- autonomous enforcement of chores, costs, or agreements;
- emergency, safety-critical, or building-control automation.

## Relationship to Core

Generic people, documents, records, decisions, tasks, evidence, review, search, export, and recovery remain House/Core capabilities.

Shared Home owns the resident-side domain schema and workflows that give those shared capabilities domestic meaning. Removing the Program must not make unrelated House memory unreadable or trap the operator's data.

## Relationship to owner-side property operations

Shared Home remains resident-side. Owner-side and small rental-operator workflows belong to focused sibling **Program 03**, with the descriptive working label **Property Steward** and internal codename **Keystone**.

The two Programs may reuse bounded modules and record contracts:

- Property Record;
- Maintenance & Evidence;
- Inventory & Condition;
- Important Documents;
- Tenancy & Handover.

Reuse does not imply shared authority. A resident record and an owner record may refer to the same property, issue, document, or event only through an explicit link, declared visibility, and reviewable history.

Someone who both occupies a home and owns rental property may install both Programs in one House. Neither Program silently grants the other access to its private records.

## Founding-alpha evidence

Alpha 02 is successful when synthetic solo, family, co-rent, and renter Houses can:

1. create and find a current shared-home record;
2. distinguish private and shared standing;
3. assign and review responsibility without silent authority expansion;
4. preserve maintenance, cost, decision, and handover history;
5. export readable records and recover the scoped state.

The public line is:

> **The home changes. Its memory should survive.**

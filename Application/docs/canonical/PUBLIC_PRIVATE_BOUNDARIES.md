# Public and private boundaries

**Status:** Canonical
**Effective:** 2026-07-19

## Purpose

Systead is developed from a real private proving environment. That makes boundary discipline essential. Reusable architecture may move into the public platform; private data may not.

## Public repository may contain

- generic architecture and product documentation;
- public website and brand material;
- generic schemas and interfaces;
- synthetic or clearly fictional test fixtures;
- sanitized screenshots with no identifying records;
- generic workflows and module definitions;
- public issue templates and contribution guidance;
- build, validation, packaging, and migration tools;
- code specifically approved for public distribution.

## Public repository must not contain

- Stokknes House databases, exports, backups, logs, or configuration containing real data;
- manuscripts or unpublished publishing material unless intentionally released;
- real contacts, addresses, phone numbers, private emails, or relationship history;
- credentials, tokens, cookies, keys, account identifiers, or recovery codes;
- private financial balances, debts, transactions, invoices, or tax records;
- medical, legal, insurance, employment, or authority records;
- private calendars, messages, notes, analytics, or behavioral history;
- animal health records tied to the private household;
- proprietary prompts or licensed source material that cannot be redistributed;
- real customer or collaborator data;
- machine-generated caches that may reproduce private source text.

## Data classes

Recommended baseline classes:

1. **Public** — deliberately publishable.
2. **Internal** — product and company working material not intended for publication.
3. **House private** — personal or operational records belonging to one House.
4. **Sensitive** — financial, medical, legal, credential, security, or similarly high-impact records.
5. **Restricted external** — data governed by another party's terms, licence, or confidentiality.

Classification should travel with exports and command previews where relevant.

## Sanitization rule

Sanitization is a reviewable process, not a filename change. Before material moves from a private House into public code, documentation, fixtures, screenshots, or examples:

1. identify the source and intended public use;
2. remove direct and indirect identifiers;
3. replace real values with synthetic values;
4. inspect attachments, metadata, logs, and history;
5. confirm redistribution rights;
6. run secret and sensitive-pattern checks;
7. receive explicit human approval;
8. record the decision.

## Proving-ground rule

Stokknes House may reveal reusable features, but extraction must proceed in this order:

```text
Private need → Generic capability definition → Clean implementation → Synthetic tests → Public review
```

Copying the private environment and deleting obvious names afterward is not an acceptable extraction method.

## Public planning boundary

Personal cash position, debts, private legal plans, and formation logistics are not product documentation and must not be committed to this public repository. Public documents may describe ownership and licensing only to the degree deliberately approved for publication.

# Program 01: Publishing

**Current internal working name:** AuthorMachine
**Final public release name:** Undecided
**Current state:** Private v10 heritage awaiting controlled intake and generalization

This directory is the intended architectural home for the specialist publishing Program after extraction from the private proving environment.

It should not become a raw copy of the Stokknes v10 directory.

## Intended contents

```text
publishing/
├── README.md
├── package or program manifest
├── records/
├── migrations/
├── commands/
├── views/
├── imports/
├── exports/
├── connectors/
├── fixtures/
├── tests/
└── docs/
```

The actual implementation language and package layout remain subject to repository inventory.

## Intake rule

Before private v10 code enters this path:

1. preserve the untouched source snapshot;
2. scan for secrets and private data;
3. inventory components and behaviour;
4. classify generic behaviour into Core;
5. replace private records with synthetic fixtures;
6. define migrations, commands, permissions, exports, and recovery;
7. add characterization and contract tests;
8. label feature maturity.

See:

- [Program 01 canonical scope](../../docs/canonical/PROGRAM_01_PUBLISHING.md)
- [Private v10 intake](../../docs/canonical/PRIVATE_V10_INTAKE.md)
- [V10 handoff brief](../../docs/canonical/V10_HANDOFF_BRIEF.md)

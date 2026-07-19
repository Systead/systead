# Product Boundary

```text
Systead Core
  Generic records, storage, commands, review, safety, audit, knowledge

Systead House
  Configurable command centre and enabled modules

AuthorMachine by Systead
  Publishing specialist module/product

Stokknes House
  Private configuration, records, paths, evidence, catalogue, and history
```

## Hard rules

- Generic packages cannot import private House modules.
- Demo data must be fictional from first principles.
- Public builds cannot contain private names, paths, titles, balances, contacts, evidence, or logs.
- Modules use stable public interfaces rather than reaching directly into another module's storage.
- Private configurations may extend generic schemas; generic schemas must not depend on private extensions.

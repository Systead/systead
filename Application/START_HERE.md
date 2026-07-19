# Start Here

This folder is the clean public-product root. It must remain separate from the private Stokknes publishing library and private AuthorMachine state.

## Recommended first actions

1. Keep this root at `F:\Systead`.
2. Run `scripts\_CHECK_SYSTEAD_ROOT.bat`.
3. Review `docs\product\ALPHA_SCOPE.md` and `docs\architecture\PRODUCT_BOUNDARY.md`.
4. Create a private GitHub repository named `systead` under the Systead organization.
5. Run `scripts\_INITIALIZE_GIT.bat` after Git is installed.
6. Create a public organization-profile repository named `.github` and copy the contents of `github-org-profile-repo` into it.
7. Preview `site\index.html` locally. Do not publish it until the wording and brand mark are approved.

## Do not copy into this root

- private House data;
- personal contacts, animals, finances, legal files, or timelines;
- Stokknes catalogue records;
- private command logs;
- hard-coded `F:\Stokknes` or `MJS_Publishing_Library` paths;
- unpublished manuscripts or evidence files.

## Release sequence

```text
AuthorMachine v10 private acceptance
→ Systead Alpha 0.1.0
→ AuthorMachine by Systead 1.0.0
```

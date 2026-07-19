# Repository structure

**Status:** Transitional structure guidance
**Effective:** 2026-07-19

## Current state

The repository currently combines:

- a root-level static website and organization-profile staging material;
- a larger platform bootstrap under `Application/`.

This is acceptable during preparation but must be made explicit so visitors and contributors do not mistake the root website bundle for the complete application.

## Current authority

- `Application/` — authoritative implementation bootstrap.
- `Application/docs/canonical/` — authoritative product-level decisions.
- root `index.html`, `assets/`, and `CNAME` — current public website deployment.
- root `profile/` — source material intended for the Systead organization's `.github` profile repository.
- root `brand-lab.html` — non-canonical candidate review page.

## Required cleanup before first release

Choose one of the following deliberately.

### Preferred: split repositories

- `Systead/systead` — platform source and canonical documentation.
- `Systead/systead-site` — public website and brand-lab assets.
- `Systead/.github` — organization profile and community defaults.
- future specialist repositories as boundaries become stable.

### Temporary alternative: flatten the application

Move the contents of `Application/` to the repository root and place the website under `site/` or `docs/`, with GitHub Pages configured accordingly.

## Rules

1. Do not maintain two competing READMEs that describe different product models.
2. Do not leave organization-profile instructions as the primary repository README.
3. Do not store release code only inside a directory named `Application/` indefinitely.
4. Do not duplicate website source in both root and `Application/site/` without a declared build or deployment source.
5. Keep archives outside runtime loading paths.
6. Generated releases must be reproducible from declared source and version metadata.
7. Private House data must remain outside the public repository and its Git history.

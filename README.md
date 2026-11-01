# MSEI Lab website

Public site: https://zhangrobotics.com/msei_website/

This repository contains the deployed static website for Dandan Zhang's Multi-Scale Embodied Intelligence Lab, with a focus on microrobotics and biomedical micromanipulation.

## Edit content

| File | Content |
| --- | --- |
| `data/home-content.json` | Biography, research overview, opportunities, news, awards and contact |
| `data/publications-content.json` | Selected microscale publications and preprints |
| `data/research-content.json` | Research platforms and project links |
| `data/team-content.json` | Current team and alumni |
| `data/talks-content.json` | Invited talks |
| `data/teaching-content.json` | Teaching |
| `data/services-content.json` | Academic service |
| `data/vacancies-content.json` | Recruitment guidance |
| `data/group-photo-content.json` | Group photographs |

Keep the existing field structure. Publications use string-valued years, author arrays, keyword arrays and link objects with `type` and `url`. Label preprints explicitly and verify conference or journal acceptance against the exact paper. Home news links use strings such as `Paper: https://example.org/paper`; the renderer splits at the first colon.

## Deployment and maintenance

GitHub Pages deploys from `main`. The custom domain is stored in `CNAME`; keep it unchanged unless intentionally moving the site. The application router uses `/msei_website/`, while data and assets are served from `/data/` and `/assets/` at the custom-domain root.

The original Vue authoring project and build configuration are not present in this repository. The files in `assets/` are compiled bundles. Make routine content updates in `data/`; recover the original source before a substantial UI redevelopment. After changing the root `index.html`, run `python scripts/sync-entry-pages.py` to synchronise `404.html` and the nine explicit entry pages under `msei_website/`. These entry pages let direct links and refreshes load the application without relying on the missing-page fallback.

The November 2026 release uses versioned JavaScript bundles ending in `.20261101.js`. Their imports form a consistent module graph; older bundles remain available for already-open tabs. The current data loader revalidates JSON and uses a release query key to avoid mixing new HTML with cached older content. For a future JavaScript release, use new bundle names and update all dependent imports and HTML entry pages together.

After editing, parse the JSON, verify publication links and status, check any changed JavaScript syntax, and inspect the live home/research/publications pages after the Pages deployment completes. A browser reload is needed to discard the app's in-memory data cache.

The source notes for the November 2026 refresh are in [docs/content-update-2026-11-01.md](docs/content-update-2026-11-01.md).

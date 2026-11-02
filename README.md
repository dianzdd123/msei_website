# MSEI Lab website

Public site: https://zhangrobotics.com/msei_website/

This repository contains the deployed static website for Dandan Zhang's Multi-Scale Embodied Intelligence Lab, connecting sensing, learning, shared control and robot design through applications in microrobotics, dexterous manipulation, medical robotics and scientific instrumentation.

## Edit content

| File | Content |
| --- | --- |
| `data/home-content.json` | Biography, research overview, opportunities, news, awards and contact |
| `data/publications-content.json` | Publications grouped by research theme, with paper summaries, figures and source links |
| `data/research-content.json` | Research vision, cross-cutting themes, platforms and evidence |
| `data/research-applications-content.json` | Application subpages, representative projects, figures and resources |
| `data/team-content.json` | Current team and alumni, research backgrounds, project aims, mentoring and selected work |
| `data/talks-content.json` | Concise invited talks, event links and distinct documentary or host thumbnails |
| `data/teaching-content.json` | Teaching |
| `data/services-content.json` | Academic service |
| `data/opportunities-content.json` | PhD and MRes guidance, preparation checklists, verified programme and funding links |
| `data/vacancies-content.json` | Compatible recruitment summary for older cached releases |
| `data/group-photo-content.json` | Group photographs |

Keep the existing field structure. Publications use string-valued years, author arrays, keyword arrays and link objects with `type` and `url`. Label preprints explicitly and verify conference or journal acceptance against the exact paper. Home news links use strings such as `Paper: https://example.org/paper`; the renderer splits at the first colon.

## Deployment and maintenance

GitHub Pages deploys from `main`. The custom domain is stored in `CNAME`; keep it unchanged unless intentionally moving the site. The application router uses `/msei_website/`, while data and assets are served from `/data/` and `/assets/` at the custom-domain root.

The original Vue authoring project and build configuration are not present in this repository. The files in `assets/` are compiled bundles. Make routine content updates in `data/`; recover the original source before a substantial UI redevelopment. After changing the root `index.html`, run `python scripts/sync-entry-pages.py` to synchronise `404.html` and the sixteen explicit entry pages under `msei_website/`. These entry pages let direct links and refreshes load the application without relying on the missing-page fallback.

The current November 2026 release uses versioned JavaScript bundles ending in `.20261102b.js`. Previous releases are retained for cached clients. Their imports form a consistent module graph; older bundles remain available for already-open tabs. The current data loader revalidates JSON and uses a release query key to avoid mixing new HTML with cached older content. For a future JavaScript release, use new bundle names and update all dependent imports and HTML entry pages together.

After editing, parse the JSON, verify publication links and status, check any changed JavaScript syntax, and inspect the live home/research/publications pages after the Pages deployment completes. A browser reload is needed to discard the app's in-memory data cache.

The source notes for the November 2026 refresh are in [docs/content-update-2026-11-01.md](docs/content-update-2026-11-01.md).

The comprehensive profile, teaching, service and photo refresh is documented in [profile and education source notes](docs/profile-teaching-service-update-2026-11-01.md). The new Home, Research, Teaching, Services and GroupPhoto modules are readable JavaScript using the existing Vue runtime. Image-generation prompts are recorded in [illustration notes](assets/illustrations/README.md).

The supplied-design alignment and four-theme research programme are documented in [design and research update notes](docs/design-research-update-2026-11-01.md). Home and Research share the canonical research content in `data/research-content.json`. The latest imagery, source-reference role and full generation prompts are in [research illustration notes](assets/illustrations/research-figures-2026c.md).

The application subpages, team directory expansion and requested profile corrections are documented in [application and team update notes](docs/application-team-update-2026-11-01.md). Research applications share one readable renderer and canonical JSON; each application has its own route and HTML entry page. `NavigationEditorial` provides desktop and mobile links to every application. `TeamEditorial` displays verified profiles and project records from the owner-supplied directory.

The latest research presentation follows the research question through applications, methods, evidence and next steps. Explanatory figures are in `assets/illustrations/`, and their captions distinguish conceptual diagrams and generated artwork from documentary research imagery. The new `/opportunities/` landing page is an alias of `/vacancies/`; the dedicated PhD and MRes guides have independent HTML entry points. Date-sensitive admissions information includes an intended entry cycle, a verification date and official source links.

The publications page groups every record once under a primary research theme, with secondary themes shown as cross-references. Keep the four theme identifiers aligned with `data/research-content.json`; use the existing year, publication-type, keyword and video fields for filtering. Release g displays distinct original paper or author-project figures with full-size and source links. It omits generic topic artwork and repeated hero images. A paper without a verified original figure remains a complete text entry. Figure metadata with `kind: paper` or `kind: project` is eligible for display; legacy theme illustrations remain only for older cached renderers. Source records are in [publication figure notes](docs/publication-figure-sources-2026-11-01.md), [legacy publication figure notes](docs/publication-legacy-figures-2026-11-01.md), and the release-g original-figure source notes in `docs/`.

The publication resource update adds compact, labelled GitHub, Dataset and Video buttons alongside the paper and project links. Use `type: GitHub`, `Dataset` or `Video` for those resources, with optional `label`, `description`, `accessNote`, `sourceUrl` and `verifiedAt` fields. Keep existing `videoId` values for cached clients; the current renderer combines those with explicit Video links and removes duplicate destinations. A publisher article page that specifically lists a movie can use `type: Supplement`, `mediaType: video` and an accurate `Video supplement` label. The video filter includes these supporting-video pages and direct movies. Resource evidence, access conditions and unavailable releases are documented in [publication resource notes](docs/publication-resources-2026-11-02.md).

The invited-talk archive uses concise year groups, prominent talk titles and conference/workshop or host venues, and subordinate dates and locations. The 2 November release adds a distinct small picture to each record: original programmes, event posters, symposium imagery or clearly labelled host images. The original workshop example establishes the thumbnail size (140 pixels on desktop, 96 pixels on phones). `thumbnail` objects include the local image, alt text, caption, dimensions and source URL; an optional exact `date` refines the compatible month-valued `time`. Preserve the original string-valued `image` field for older cached clients. Compatibility topic metadata remains unused by the current renderer. Sources and factual corrections are documented in [recent talk sources](docs/talks-recent-sources-2026-11-02.md) and [earlier talk sources](docs/talks-earlier-sources-2026-11-02.md). The earlier concise-layout decisions are recorded in [concise talk notes](docs/talks-concise-2026-11-01.md).

The team directory now offers expandable background, research-approach, project-mentoring and selected-work sections. Individual project cards state research aims and supervision; alumni keep their recorded research topics and verified co-authored work. Use exact author matches and primary public sources for added work, distinguish preprints and software from published articles, and do not infer personal qualifications or career destinations. The [team profile source notes](docs/team-profile-refresh-2026-11-02.md) document the evidence and limits of this refresh.

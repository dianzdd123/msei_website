# Research applications and team update — 1 November 2026

## Requested changes

The owner requested dedicated research pages grouped by application, a microrobotics image at the start of the research overview, removal of a specified committee-secretary role, removal of student totals from the research-supervision section, and a comprehensive team update. The existing Imperial Blue and purple design is retained.

## Research organisation

Four application pages provide task context, methods, representative projects, figures and primary research links:

- `/msei_website/research/microrobotics/`
- `/msei_website/research/dexterous-manipulation/`
- `/msei_website/research/medical-robotics/`
- `/msei_website/research/scientific-instrumentation/`

The research overview remains the shared vision and four-method framework. Application cards and navigation link to the dedicated pages, and the homepage links to the same application structure. The research overview's first image now depicts conceptual optical and magnetic microrobotics. It remains labelled as generated concept artwork, not to scale.

Application text uses the site's verified publication records and public primary sources. Clinical experiments are not implied; microrobot and millirobot scales remain distinguished; perception and instrumentation components are not presented as a completed autonomous laboratory. Autonomous scientific experimentation is described as a research direction.

## People and corrections

Team information is reconciled against the owner-supplied team directory dated 1 November 2026 and CV dated 22 August 2026. Explicit current corrections take precedence over those documents and previous site records. Qingzheng Cong and Ziyuan Dong are in Alumni. Qiming Liu is listed as a visiting PDRA. Additional people, project descriptions, affiliations and authentic portraits are included only where provided or already supported by the public site.

The specified IEEE RAS committee-secretary role is removed from the service page and all current biography variants. Numeric student totals and their explanatory totals statement are removed from the research-supervision section, while supervision approach and project information remain.

The supplied source documents are not published. The repository holds the website content and selected portraits needed for the requested public team update.

## Maintenance

- `data/research-applications-content.json` contains the canonical application records.
- `assets/ResearchApplication.20261101d.js` renders all application subpages from a route prop.
- `assets/NavigationEditorial.20261101d.js` provides accessible desktop and mobile application links.
- `assets/TeamEditorial.20261101d.js` and `data/team-content.json` render the expanded directory.
- `assets/research-applications.20261101d.css` and `assets/team-editorial.20261101d.css` supply the additional layouts.
- The `.20261101d.js` module graph shares one Vue runtime and one data-service instance. Prior release assets remain for cached clients.
- `scripts/sync-entry-pages.py` synchronises the root HTML with all route entry points and the 404 fallback.

Verification includes JSON and JavaScript parsing, route and local-asset resolution, requested role/count removals, team membership assertions, desktop and mobile visual checks, navigation and direct-entry checks, and GitHub Pages deployment confirmation.

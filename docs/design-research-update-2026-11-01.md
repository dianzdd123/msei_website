# Design and research programme refresh — 1 November 2026

## Purpose

Align the live MSEI website with the owner's supplied `Dandan_Zhang_Website_Redesign_2026` design package, and make the research vision traceable to the group's published work. The lab-site prototype supplies the visual reference; the existing website routes, portrait, teaching, service, news and gallery content remain integrated. The colour refinement requested during review takes precedence over the prototype’s cyan accents.

## Visual system

The design preserves the supplied reference's editorial composition, pale backgrounds and 1360px content grid. Following the owner's colour refinement, **Imperial Blue (`#003E74`)** is the primary colour, supported by navy (`#002147`) and a restrained purple accent (`#6B3FA0`). The named Imperial Blue value is taken from the university's [public web design style guide](https://medlearnhelp.imperial.ac.uk/editing-content/web-guidelines-and-best-practices/design-excellence-section/web-design-style-guide/). Purple is a chosen accent for this website, not a claim of official brand certification. A translucent 76px header replaces the old sidebar composition. Large editorial headings, generous spacing, rounded cards and dark research sections are applied across the site.

The original concept artwork included subjects beyond the current research programme. Three new illustrations preserve its blue visual language while depicting tactile manipulation, precision tools and optical or magnetic small-scale robotics. They are explicitly identified as AI-generated concepts. The real portrait, group photographs and experimental setup photograph retain their documentary status. Generation prompts and asset details are recorded in [research figure provenance](../assets/illustrations/research-figures-2026c.md).

## Research narrative

The organising vision is **adaptive physical intelligence for dexterous manipulation across scales**. Four method-led themes describe the actual breadth of the record:

1. Sensing and physical-state inference.
2. Transferable and data-efficient skill learning.
3. Adaptive control and shared autonomy.
4. Embodiment and actuation design.

Three experimental settings explain where these questions are studied: contact-rich manipulation; medical robotics and scientific instrumentation; and optical or magnetic microrobotics. The interactive framework and the exact SVG programme map show how the methods connect to these settings. They describe a research programme, not a claim that every method has already been combined into one system.

Each theme has three primary-paper links. The publication list adds 11 representative records covering tactile sensing, learning, shared control and physical design, retaining all previous records. Journal/conference status and preprint labels remain explicit. New future-direction text concerns predictive physical models, transfer across sensors/embodiments, and tools for scientific experiments.

The source basis is the owner-supplied CV dated 30 October 2026 plus linked publisher, author manuscript, institutional and code-repository records. The research JSON contains a public source list. The private CV and unpublished grant details are not part of the repository.

## Evidence boundaries

- Magnetic reconfiguration evidence is labelled **millirobot** work; it is not presented as demonstrated micron-scale reconfiguration.
- Surgical and micromanipulation results are described as research-platform experiments, not clinical deployment.
- Cross-sensor transfer is a research and benchmarking question; the text does not claim that transfer has been solved.
- Future scientific-workflow directions are distinguished from established perception and manipulation results.
- The expired vacancies notice (past start dates and a placeholder contact) is replaced with research-enquiry guidance. No unverified funded opening is advertised.

## Implementation and maintenance

The `.20261101c.js` release is a complete, consistently versioned module graph. Older releases remain available for cached clients. Home and Research now use readable `HomeEditorial`, `ResearchEditorial` and `ResearchUI` modules. The existing Vue runtime and the other content modules are retained.

- `assets/design-system.20261101c.css`: site-wide reference design and retained-page styles.
- `assets/research-editorial.20261101c.css`: home, research, framework, footer and responsive layouts.
- `data/research-content.json`: canonical research vision, themes, platform descriptions, evidence and resource links.
- `data/home-content.json`: biography, news and homepage supporting content; the new homepage reads the canonical research JSON directly so theme descriptions stay aligned.
- `scripts/sync-entry-pages.py`: synchronises all route entry pages and the missing-page fallback.

## Verification

Validated JSON, new JavaScript syntax, module imports, local image paths, the SVG and all 11 HTML entry files. Inspected the integrated homepage, research page and seven retained pages in the browser. Tested mobile navigation and research-framework selection at a 390px viewport, with no page-level horizontal overflow. Gallery year selection and image enlargement were exercised. Desktop Team spacing was corrected after visual review.

GitHub Pages deployment and public-page verification are required before reporting this release as live.

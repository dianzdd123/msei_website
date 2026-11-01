# Invited-talk visual archive — 1 November 2026

## Scope

This update adds meaningful visual context to the invited-talk archive while preserving its existing event records. All 17 entries retain their title, host, month and location. Trailing spaces and the missing space in `Edinburgh,UK` were normalised. No new speaking engagement, abstract, exact date, recording or event photograph was inferred.

The page now groups talks by year, with the most recent month first. Search covers title, host institution, location and topic. Year and topic selectors can be combined, and the reset action restores the full archive. Result counts are announced to assistive technology. Year navigation only links to currently displayed groups.

## Renderers and content

- `assets/TalksEditorial.20261101f.js`
- `assets/talks-editorial.20261101f.css`
- `data/talks-content.json`

The root uses `rd-research tk-page`, matching the full-width editorial layout. It imports the release-f data service and `ResearchUI`. All class properties are strings because the compiled runtime helper does not normalise class arrays.

The original data shape remains intact. Each entry adds a stable `id`, `topicId`, `figure`, `researchConnection` and `relatedLinks`. Existing `image` fields remain available to older cached renderers.

`researchConnection` is short editorial context grounded in the talk title and the lab's research programme. It is visibly labelled **Research connection**, and is not represented as a quoted or published talk abstract. The general guest lecture has no inferred subject; its context simply identifies its host.

The five browsing topics are embodied intelligence across scales, microrobotics and dexterity, tactile sensing and haptics, medical robotics and shared control, and AI perspectives and academic exchange. They aid discovery of talks and do not replace the canonical four-theme publication taxonomy.

## Figures and provenance

All 17 talk entries now have a captioned figure. The hero adds a research-context diagram. The archive uses eight distinct visual assets, including three new diagram concepts.

| Visual | Provenance and use |
| --- | --- |
| `assets/talk/ukworkshop.png` | Existing documentary image of the 7th UK Robot Manipulation Workshop programme. It is labelled **Event programme** and displayed with containment to preserve its text. |
| `assets/illustrations/microrobotics-2026c.webp` | Previously generated microrobotics topic illustration, documented in `research-figures-2026c.md`. |
| `assets/illustrations/tactile-learning-2026c.webp` | Previously generated tactile-manipulation topic illustration, documented in `research-figures-2026c.md`. |
| `assets/illustrations/medical-robotics-concept-2026e.webp` | Previously generated medical-robotics topic illustration, documented in `application-concepts-2026e.md`. |
| `assets/illustrations/teaching-deep-learning-2026.webp` | Previously generated AI/robot-learning topic illustration, documented in `README.md` in the same folder. |
| `assets/illustrations/talks-across-scales-2026f.svg` | Original exact SVG concept map connecting physical contact, precision manipulation and small-scale actuation through embodiment, perception and control. |
| `assets/illustrations/talks-shared-control-2026f.svg` | Original exact SVG explaining human intent, adaptive assistance, physical interaction and sensory feedback. It illustrates the research topic, without asserting a specific experimental implementation. |
| `assets/illustrations/talks-research-exchange-2026f.svg` | Original exact SVG connecting a question, evidence and academic discussion; used for the guest-lecture entry where a subject was not recorded. |

The three new SVG concepts have separately composed `-mobile.svg` versions. They are selected with `<picture>` below 650px, and mobile full-figure links open the matching vertical composition. Every SVG has a semantic title and description. Every displayed image has descriptive alternative text, a visible provenance-aware caption and a full-figure link.

Generated illustrations are labelled as conceptual topic artwork. No image is described as a photograph of a talk or an experimental result unless the original archive already establishes that context. The only documentary event image remains the supplied programme image.

## Verification

- The 17 original records were compared field by field, allowing only whitespace normalisation.
- Every record has a unique identifier and a valid topic.
- Every figure and mobile variant exists locally; all SVG files parse and contain accessibility metadata.
- The JavaScript renderer passes `node --check`.
- Integrated desktop browser verification passed for the hero, illustrated cards, chronological year/month ordering, combined year/topic filters, institution search, empty results and reset.
- Phone-width review passed with a 382px document and 382px scroll width. The responsive hero selects the mobile SVG; the mobile diagrams were visually inspected and their full-figure SVG roots subsequently made viewport-responsive to prevent standalone horizontal overflow.
- Site console review found no website errors; only unrelated browser-extension metadata messages appeared. A final optional phone-filter interaction was interrupted by a browser-tool timeout; the equivalent desktop interactions had already passed.

Some older event metadata, including the FEMTO-ST entry's listed location, was not independently reverified during this figure-focused update and remains as recorded. Future corrections should use an organiser or owner source.

# Publications organised by research theme

The November 2026 release replaces the old flat microrobotics-titled list with a visual publication directory organised by the four canonical themes in `data/research-content.json`.

## Taxonomy

| Theme | Primary records |
| --- | ---: |
| Sensing and physical-state inference | 11 |
| Transferable and data-efficient skill learning | 6 |
| Adaptive control and shared autonomy | 9 |
| Embodiment and actuation design | 15 |

All 41 existing paper records are retained, and every paper appears exactly once in the unfiltered directory. Papers are ordered newest first within their primary theme. Related-theme labels expose connections without duplicating the bibliographic record. These assignments are an editorial organisation of the research programme, rather than claims of exclusive disciplinary scope.

Perception papers that use transfer learning are primarily grouped under sensing, while learned action policies and skill transfer are grouped under learning. Optical-force allocation and fabrication are connected to embodiment and actuation, in keeping with the existing research overview. Reviews of microrobot capability and platforms are grouped under embodiment with related-theme connections where applicable. Medical robot platform design is distinguished from shared-control and teleoperation methods.

## Content and figures

Each record adds an ID, primary theme, related themes, a concise contribution summary and figure metadata. Existing titles, authors, years, publication types, venues, keywords, paper links and videos are preserved. Preprints remain explicitly labelled; a link to arXiv does not change a conference or journal record's existing publication status.

Contribution summaries reuse the website's previously sourced research application descriptions where available. Remaining summaries describe the method and task expressed by the existing paper title and topic. No new numerical performance claims, publication acceptance claims or clinical-deployment claims were introduced.

Figures have `src`, `alt`, `caption`, `sourceUrl` and `kind` metadata. Paper/project figures show a source link and open at full size. Where a paper-specific figure is unavailable, the thumbnail is labelled as a research-theme illustration using existing concept artwork. The four theme tiles also label their artwork collectively. Original documentary or paper figures are not replaced by generated experimental results.

The release includes 20 source-attributed paper or project figures and 21 explicitly labelled theme illustrations. Figure credits and licence links are displayed when supplied; authentic figures use `object-fit: contain` so labels and panels remain visible. The Learning theme tile uses an authentic ADM-DP figure with its source link.

## Directory interactions

The new readable `PublicationsEditorial.20261101f.js` component uses the shared Vue runtime and `ResearchUI.20261101f.js`. Its root class is `rd-research pub-page`, and the scoped stylesheet is `publications-editorial.20261101f.css`.

The directory supports text search across titles, authors, methods and keywords; primary-theme, year and publication-type filters; a papers-with-video filter; clear filters; and a live result count. Existing `?keyword=` links retain their original OR-matching behaviour. Related-theme buttons and the visual theme tiles set the theme filter. Every visible group has an anchor, and each paper keeps explicit publication, code, project and video links.

Native form controls, labelled inputs, keyboard-operable buttons and live result announcements support accessible use. Figures include alternative text, captions and full-size links. The single-column phone layout keeps figures and bibliographic information together.

## Verification

- JavaScript syntax and JSON parsing pass.
- Original bibliographic fields and URLs are preserved for all 41 records.
- All papers have exactly one valid primary theme, unique IDs, a summary and an existing figure path.
- Primary grouping covers every record without duplication.
- Display order is descending by year inside each theme.
- Browser checks confirm combined theme/year/type filters, an empty-search result and reset, three video-bearing papers, and legacy `?keyword=Optical%20Microrobot` filtering from 41 to 10 records and back to 41 on clear.
- The 390px phone harness has no horizontal overflow; search, figure containment, credit, full-size, source and licence links were verified on the Bi-Touch card.
- No application console errors were observed during the publication-page checks; browser-extension metadata errors were excluded.

Desktop and phone browser checks were completed against the integrated local release preview before handoff.

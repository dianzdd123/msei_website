# Research presentation and applicant guidance — 1 November 2026

## Purpose

This release follows the owner's request to remove Yange Sun's project record and Mahgoub Mahgoub's listing, expand the research presentation with explanatory figures, and provide more complete PhD and MRes application information. The established Imperial Blue and purple palette and previous membership corrections remain.

## Research presentation

The research overview connects the central question and vision to the application areas, the methods used to address them, representative evidence, and the next questions. Each application page makes its problem, approach, supporting work and future direction explicit. Research diagrams are conceptual explanations of the programme and methods, not new experimental results. Existing paper links and documentary figures remain connected to their original studies.

New illustrations depict medical-robotics research and scientific instrumentation. Their captions identify them as generated concepts. SVG figures explain the research relationships and workflows with editable vector artwork. Labels and accompanying descriptions provide a text route through each visual explanation.

## Applicant guidance

The Opportunities landing page supports both `/msei_website/opportunities/` and the existing `/msei_website/vacancies/` address. Dedicated PhD and MRes guides are linked from the homepage, research pages and desktop/mobile navigation.

- `/msei_website/opportunities/phd/`
- `/msei_website/opportunities/mres/`

The guides distinguish lab preparation advice from formal university admissions requirements. Programme eligibility, application steps and funding information link to current Imperial sources. Date-sensitive schedules specify the entry or scholarship cycle and verification date. Enquiries do not imply a funded vacancy, an admission offer, guaranteed project allocation or automatic progression from an MRes to a PhD.

The owner-supplied CV and team directory are not published. Personal enquiry information is sent only when a visitor chooses to contact the lab through the provided email link; the website does not collect applicant submissions.

## Implementation

The `.20261101e.js` release uses one consistent module graph and a new data-cache version. All routes have explicit static entry files, including the opportunities landing and both application guides. The original domain and GitHub Pages deployment settings are retained.

Current content files include `data/research-content.json`, `data/research-applications-content.json`, `data/opportunities-content.json` and `data/team-content.json`. The legacy vacancies JSON remains available for older cached clients.

Verification covers requested removals, JSON and JavaScript syntax, local image and module references, SVG structure, source links, route loading, responsive presentation and navigation. GitHub Pages deployment and public-page verification complete the release.

## Completed verification

- All 17 release modules passed JavaScript syntax checks; JSON data and referenced assets validated.
- Root, fallback, and all 16 route entry pages use the same release shell (18 HTML files).
- Desktop and phone-width review passed for the research overview, four application pages, both application guides and navigation. Mobile research figures select their dedicated layouts, with no horizontal document overflow.
- Preparation checkboxes and reset, FAQ expansion, dropdown navigation, section anchors and manual clipboard fallback were exercised in the preview.
- Independent narrative and admissions-source reviews found no factual correction needed.
- Yange Sun and Mahgoub Mahgoub are absent from the active team data.

New figure count: six research diagram concepts, two application-route diagrams, and two generated concept illustrations. The six mobile research-diagram variants are additional layouts of those same concepts.

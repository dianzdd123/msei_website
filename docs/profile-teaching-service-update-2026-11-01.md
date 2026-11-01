# Profile, teaching, service and photograph refresh — 1 November 2026

## Content basis

The academic record was reconciled against the owner-supplied CV dated 30 October 2026. Only public professional information needed for the website was selected. The CV itself, private contact details, applications and unrelated personal information are not included in this repository.

- [Imperial profile](https://profiles.imperial.ac.uk/d.zhang17): position, institution and career background. The newer supplied CV records the Digital Foundry affiliation from September 2026.
- [Imperial programme specification](https://www.imperial.ac.uk/media/imperial-college/study/programme-specifications/eee/25x2f26/H5A1_MSc-Artificial-Intelligence-Applications-and-Innovation-2025-26.pdf): ELEC70129 Deep Learning.
- [Existing teaching page](https://www.intelligentrobotics-acrossscales.com/teaching): practical electronics examples.
- [Imperial departmental roles](https://www.imperial.ac.uk/bioengineering/people/committees-and-supplementary-roles/): Female Academic Network and undergraduate exchange coordination.
- [ROBIO 2026 committee](https://www.robio2026.org/committees.html): Programme Co-Chair.
- [ECCV workshop](https://trustworthy-world-models.github.io/ECCV2026/), [IROS workshop](https://physical-world-models.github.io/IROS2026/), [CVPR workshop](https://coop-intelligence.github.io/cvpr2025/): workshop leadership.
- [ICLR 2027 proposal](https://taoyongcui.github.io/scientific-world-models/): explicitly a workshop proposal.
- [Official MIT Technology Review China announcement](https://www.sina.cn/news/detail/5343758565770865.html): TR35 Asia Pacific 2026.
- [Existing lab gallery](https://www.intelligentrobotics-acrossscales.com/gallery): CNRS visit photographs dated 13 and 16 April 2026.

## Status and date decisions

- Supervision totals are an explicit snapshot at 30 October 2026, including lead and co-supervision across institutions.
- Imperial teaching is separated from previous Bristol roles. Computational Biomedical Engineering is listed as personal tutoring, not a taught module.
- Deep Learning delivery figures retain their academic years. New teaching resources and the personalised digital TA are marked as in development.
- ICRA 2027 and ICLR 2027 workshops remain proposals under review. ROBIO 2026 is a confirmed role at a forthcoming conference.
- External examiner nominations are separate from completed examinations. Candidates' names are omitted.
- The 2021 UK Best PhD in Robotics competition and 2022 ICRA Outstanding Interaction Paper Award use the corrected names and years in the supplied CV.

## Images

The portrait comes from the owner's existing public website: `https://static.wixstatic.com/media/6c3b54_39bf11dea24e497189c7d0405c099e6d~mv2.png`. The 2026 meeting and lunch originals use media identifiers `6c3b54_6ba12c7e720a481abafdf886bd435345~mv2.jpg` and `6c3b54_86af54dcf7934adda9386ff66e370fe3~mv2.jpg` on the same host. Published copies are optimised WebP derivatives. Historical photographs remain available at their original repository paths, alongside smaller WebP derivatives for the gallery.

Two new illustrations were generated for the homepage and teaching page. They are labelled as conceptual AI-generated artwork, with a not-to-scale caption on the research image. Full prompts are in `assets/illustrations/README.md`.

## Maintenance

Content remains in `data/*.json`. The refreshed Home, Teaching, Services and GroupPhoto modules are readable JavaScript using the existing Vue runtime. The repository still does not contain the original Vue authoring project. The `.20261101b.js` release is a consistent module graph; the previous release is retained for cached clients. All HTML entry pages are synchronised with `scripts/sync-entry-pages.py`.

The three new stylesheets are `profile-home.20261101b.css`, `teaching-services.20261101b.css` and `gallery.20261101b.css`. Use a new release suffix for later JavaScript changes and update imports, the data cache query key and entry pages together.

## Verification

JSON parsing, JavaScript syntax, local asset references and versioned imports were checked. The integrated preview was inspected on desktop and at a 390-pixel mobile width. Gallery year selection, enlargement, keyboard Escape and focus return were exercised. The public Pages deployment must succeed before reporting the update as live.

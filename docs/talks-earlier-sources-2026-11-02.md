# Earlier invited-talk thumbnails — 2 November 2026

## Scope and presentation

Nine existing 2024 talk records receive nine distinct authentic images: one official conference announcement, seven photographs identifying the host institutions, and one official host logo. No generated artwork, research-paper figure, duplicate image, or photograph from a different talk is used. Host photographs are labelled **Host** and do not claim to show the particular event, room or date. All images retain their complete original composition; only orientation, proportional resizing and WebP encoding were applied. The FEMTO-ST SVG was faithfully rasterized with Sharp; its full wordmark, four colour squares and subtitle were visually checked.

Integration mapping: `talks-20261102a-earlier-map.json` in the task workspace. It is keyed by the existing talk ID and contains proposed fields, image metadata and verification notes. All original talk titles and month-level dates are retained. The two UCL records remain separate. The exact nine target IDs, nine distinct image hashes and image decodability were checked; a contact sheet was visually inspected.

## Images and primary provenance

| Talk ID | Selected image and public source | Attribution / limits |
| --- | --- | --- |
| `sjtu-guest-2024` | [SJTU Minhang campus, original photograph by CaiDie](https://commons.wikimedia.org/wiki/File:SJTU_minhang.jpg) | Photographer's own work, dated 20 July 2008 and explicitly released into the public domain. Historical host image, not the 2024 lecture. The author and public-domain status are included in metadata. |
| `ucl-medical-2024` | [UCL Portico, official UCL page](https://www.ucl.ac.uk/population-health-sciences/clinical-trials-and-methodology/about) | Image explicitly labelled “UCL portico” by UCL. It identifies the university, not a confirmed seminar venue. |
| `surrey-medical-2024` | [Stag Hill lake, University of Surrey campus page](https://www.surrey.ac.uk/visit-university/our-campus) | Official host-campus photograph. Institution name normalized to University of Surrey. |
| `ucl-across-scales-2024` | [UCL Student Centre, official Library Services page](https://www.ucl.ac.uk/library/using-library/libraries-and-study-spaces/student-centre) | Distinct official UCL photograph, different from the Portico. No claim that the talk occurred in this building. |
| `china-haptics-2024` | [2024 conference announcement, Chinese Instrument and Control Society](https://www.cis.org.cn/post/detail/119/6478) | Original blue announcement graphic displaying the third conference, Tianjin and May 2024. Event title, overall date range and hotel venue supported by organizer notice. |
| `tianjin-dexterity-2024` | [Building No. 9, Weijin Road Campus, Tianjin University](https://en.tju.edu.cn/About_TJU1/Visit/Campus_Scenes1.htm) | Official campus gallery identifies the building. Host context only. |
| `femto-dexterity-2024` | [FEMTO-ST official homepage](https://www.femto-st.fr/en) and its [original SVG identity](https://www.femto-st.fr/themes/custom/femto/logo.svg) | Authentic institute logo. Host name normalized to FEMTO-ST Institute, CNRS. Building photograph endpoints were stale, forbidden or timed out; access controls were not bypassed. |
| `bristol-medical-2024` | [Wills Memorial Building exterior, official Bristol Venues page](https://www.bristol.ac.uk/venues/meetings/wills-memorial-building/) | Official page identifies the exterior shown at night. Despite its media filename, the pictured and captioned building is Wills Memorial Building. Host context only. |
| `imperial-ai-business-2024` | [South Kensington aerial photograph, Imperial College London](https://www.imperial.ac.uk/Stories/south-kensington-campus-evolution/) | Official host-campus photograph. It does not establish which campus hosted the February talk. |

Each optimized file is `assets/talk/<talk-id>-20261102a.webp`. Source URLs are retained in the image metadata, and the original media URLs in the integration map. No Creative Commons licence is asserted for institutional assets where the source does not identify one. The SJTU public-domain release is the only explicit open licence/status claim. Institution/source attribution accompanies the other assets.

## Event metadata: verified additions and unresolved details

The [conference organizer notice](https://www.cis.org.cn/post/detail/119/6478) identifies the event as the **third China Haptics Technology and Applications Conference**, in Tianjin, **24–26 May 2024**. The 24th is registration and the 25th–26th are conference sessions. Its venue is **Social Hill International Conference Center Hotel, Tianjin**. These describe the overall conference; no exact day, keynote status or plenary status is assigned to Dandan's individual talk. Her supplied talk title remains unchanged.

The Surrey source places Stag Hill campus in **Guildford**. FEMTO-ST's [own building announcement](https://www.femto-st.fr/fr/L-institut/actualite/premiere-occupante-dans-le-nouveau-batiment-de-recherche-de-femto-st-besancon?page=49) places TEMIS Sciences in **Besançon**. Both existing talk records say **London, UK**. Those event locations are preserved and flagged in the mapping: a host institution's address alone cannot establish the venue of a particular talk, including an off-campus or online event. No exact event page was found to settle either discrepancy.

The owner's [public talks page](https://www.intelligentrobotics-acrossscales.com/projects) and [news archive](https://www.intelligentrobotics-acrossscales.com/news-archive) did not independently establish the first-half 2024 events in this subset. The remaining dates, titles and event locations therefore retain the supplied website metadata, with no invented precision.

An [Imperial event on 30 April 2024](https://www.imperial.ac.uk/events/175730/ai-cutting-edge-overviews-and-tutorials-with-dr-dandan-zhang/) uses “AI for Biomedical Robotics Across Scales”. It is a different host and date from the supplied UCL record and does not justify merging, deleting or overwriting either UCL entry. The [Bristol Interactive AI blog reference](https://interactiveai.blogs.bristol.ac.uk/2023/09/14/bias-23-day-3-dr-daniel-schien-talk-sustainability-of-ai-within-global-carbon-emissions/) concerns **BIAS 2023**, so its event images and date were not used for the March 2024 entry. Similarly, separate April/September Imperial I-X events and a November Innovation Summit were not conflated with the February 2024 business talk.

## Validation

- Nine target IDs present; no changes to the talk renderer or content JSON.
- Nine files decode as WebP; intrinsic dimensions recorded for every image.
- Nine SHA-256 hashes differ; both UCL images are visually distinct.
- Full announcement graphic and FEMTO-ST wordmark preserved; no misleading cropping.
- All nine images viewed in a labelled contact sheet before handoff.

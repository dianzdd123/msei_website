# Admissions guidance: sources and editorial decisions

Checked **1 November 2026** for the `.20261101e` website release.

## Pages and implementation

- `/msei_website/opportunities/`: opportunities overview; `/msei_website/vacancies` is retained as a compatible alias.
- `/msei_website/opportunities/phd/`: Bioengineering PhD application guide.
- `/msei_website/opportunities/mres/`: Medical Robotics and Image-Guided Intervention MRes application guide.
- Both guides use `assets/ApplicationGuide.20261101e.js` with the string prop `guideSlug` (`phd` or `mres`). The overview uses `assets/OpportunitiesEditorial.20261101e.js`.
- Content lives in `data/opportunities-content.json`. The legacy `data/vacancies-content.json` points readers to the current guides.
- All new styles are scoped under `.op-page` or `.op-*`. The root also carries `.rd-research` to inherit the established editorial layout and full-width page treatment.
- The diagrams `phd-application-route-2026e.svg` and `mres-application-route-2026e.svg` are original, simplified process illustrations. Their text is also represented in accessible alt text and the HTML application steps.

## Official primary sources

Imperial pages were checked through official-domain search retrieval on this date. Some direct page opens returned HTTP 403 in the research tool, while indexed official-page content was available. Do not interpret this research method as testing the live My Imperial application form or confirming the availability of a particular supervisor or project.

| Official source | Information used | Editorial treatment |
| --- | --- | --- |
| [Bioengineering: how to apply](https://www.imperial.ac.uk/bioengineering/study/postgraduate-research/doctoral/apply/) | Academic entry routes; contact a prospective supervisor; formal application; academic referees; departmental document instructions. | Use the department-specific route. Its funding dates are still for **2026–27** and are deliberately excluded from the current guide. |
| [Imperial doctoral application process](https://www.imperial.ac.uk/study/apply/postgraduate-doctoral/application-process/) | Formal application through My Imperial and the university’s application process. | A research enquiry does not replace a programme application. |
| [Writing a doctoral research proposal](https://www.imperial.ac.uk/study/apply/postgraduate-doctoral/application-process/research-proposal/) | Clear research question and department-dependent proposal expectations. | Practical lab preparation is labelled as advice, not a new formal admissions criterion. |
| [Medical Robotics and Image-Guided Intervention MRes](https://www.imperial.ac.uk/study/courses/postgraduate-taught/medical-robotics/) | October **2027 entry**; full-time one-year programme; published 2:1 subject requirements; eight-month research project; application rounds. | The page covers the core stream. Project discussion and allocation are explained separately from programme admission. |
| [Clinical Robotics and AI stream](https://www.imperial.ac.uk/study/courses/postgraduate-taught/clinical-robotics-ai/) | Separate clinical stream with an MBBS or recognised international equivalent as its published minimum entry standard. | Do not treat it as the same entry route as the core stream or as a Bioengineering PhD. |
| [Master’s application process](https://www.imperial.ac.uk/study/apply/postgraduate-taught/application-process/) | Formal postgraduate taught application route. | The MRes follows the programme’s published application process. |
| [Master’s personal statement guidance](https://www.imperial.ac.uk/study/apply/postgraduate-taught/application-process/personal-statement/) | Explain motivation, preparation and relevant experience. | Link the current guidance rather than impose an extra lab word limit. |
| [Master’s reference guidance](https://www.imperial.ac.uk/study/apply/postgraduate-taught/application-process/reference/) | Two referees, including at least one academic; the other may be academic or relevant professional; professional email addresses. | Referee submissions belong in the formal admissions process. |
| [President’s PhD Scholarships](https://www.imperial.ac.uk/study/fees-and-funding/postgraduate-doctoral/grants-scholarships/presidents-phd/) | **2027–28** cycle; agreed supervisor; departmental nomination; scholarship option in the admissions application; published deadlines. | This is a competitive funding route, not an advertised or guaranteed lab-funded vacancy. Check eligibility and supervisor availability on the scheme page. |
| [Postgraduate scholarship information](https://www.imperial.ac.uk/students/fees-and-funding/postgraduate-funding/scholarships/) | Entry point to funding information. | Individual awards have their own eligibility, coverage and application rules. |
| [English-language requirements](https://www.imperial.ac.uk/study/apply/english-language/) | Current university language guidance. | Link the current requirements rather than reproduce test scores that may change. |
| [Taught postgraduate entry requirements](https://www.imperial.ac.uk/study/apply/postgraduate-taught/entry-requirements/) | International qualification and entry guidance. | Formal assessment remains with the relevant Imperial admissions team. |
| [Fees and funding](https://www.imperial.ac.uk/study/fees-and-funding/) | Current university information. | Do not reproduce fees, visa rules or unverified award amounts. |

## Dated schedules

These are explicitly labelled planning references, checked **1 November 2026**. Each website table links to its current official source.

### President’s PhD Scholarships — 2027–28 cycle

| Published round | Application deadline |
| --- | --- |
| Round 1 | 2 November 2026 |
| Round 2 | 11 January 2027 |
| Round 3 | 1 March 2027 |

The central scholarship page states **23:59 UK time**. Departmental preparation or nomination arrangements can require earlier discussion. Do not substitute the expired dates still present on the Bioengineering application page. Scholarship selection and a PhD admission decision are separate.

### Core MRes — October 2027 entry

| Remaining published round | Application deadline |
| --- | --- |
| Round 2 | 6 January 2027 |
| Round 3 | 10 March 2027 |
| Round 4 | 28 April 2027 |

The course states **23:59 UK time**. The table shows remaining published rounds at the check date, not a promise that later rounds will have capacity. Applicants should check the current course page before planning around a deadline.

## Formal requirements and lab preparation

The guides deliberately label the preparation checklists, example enquiry messages and suggested research-development progression as **lab preparation suggestions**. They are original practical guidance, not additional admissions requirements or a promised supervision schedule.

The guide does not claim that a publication is required for an initial lab enquiry. It invites evidence of the applicant’s own contribution through a dissertation, experiment, software project, report or similar relevant work. A concise informed research question can begin a discussion; the department and scholarship determine the required formal documents.

The enquiry examples use the public professional email `d.zhang17@imperial.ac.uk`. They are user-editable examples, with a copy button and a `mailto:` draft link. No message is sent automatically, no applicant form is collected, and the checklist is held only in the current page session.

The MRes guidance states that programme admission does not guarantee a particular lab project and that an MRes does not automatically provide a PhD place or doctoral funding. These distinctions explain the separate processes rather than introduce an extra admissions policy.

## Images and data stewardship

The opportunities overview reuses four existing, captioned research application figures. Concept illustrations remain labelled as such; research apparatus and schematics keep their factual captions. The two new vector figures illustrate application steps rather than experimental results.

The content contains no private grant plans, unpublished award details, private personal data, invented funded vacancies, guaranteed admissions or promised project allocations. Current course and scholarship pages remain authoritative for official requirements and deadlines.

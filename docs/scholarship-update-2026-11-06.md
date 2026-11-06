# Recruitment and scholarship update · 6 November 2026

This update covers the Opportunities page, PhD application guide, homepage recruitment links and cached-release recruitment summary.

## Sources and scope

- The site owner supplied the Bioengineering announcement for 2027–28 entry, including the subsequent change of Round 1's supervisor nomination deadline from 9 to **13 November 2026**. The applicant deadline remains **2 November 2026**.
- Departmental information from that announcement: two President’s candidates put forward per round; a maximum of two candidates nominated per scholarship round; four home EPSRC scholarships across Bioengineering; overseas President’s nominations require departmental/supervisory cover of the overseas tuition component.
- Applicant deadlines and applicant notification dates were checked against [Imperial’s President’s PhD Scholarships page](https://www.imperial.ac.uk/study/fees-and-funding/postgraduate-doctoral/grants-scholarships/presidents-phd/) on 6 November 2026. Notification dates are 31 January, 15 April and 31 May 2027. These are distinct from the supplied internal decision-to-departments dates.
- [The supplied departmental nomination form](https://forms.cloud.microsoft/e/Q5hp43iZ7w) is labelled for supervisors. No form submission is part of this update.

## Departmental timetable

| Round | Applicant | Supervisor nomination | Department meeting | Department shortlist deadline | Faculty meeting | Decision to departments |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 Nov 2026 | 13 Nov 2026 (revised) | 23 Nov 2026 | 30 Nov 2026 | 13 Jan 2027 | End of Jan 2027 |
| 2 | 11 Jan 2027 | 18 Jan 2027 | 1 Feb 2027 | 8 Feb 2027 | 19 Mar 2027 | Early Apr 2027 (after Easter) |
| 3 | 1 Mar 2027 | 8 Mar 2027 | 22 Mar 2027 | 5 Apr 2027 | 19 May 2027 | End of May 2027 |

The pasted Round 3 row was split across lines; its six dates were restored in the original column order. No deadline for EPSRC was supplied, so the President’s timetable is not presented as an EPSRC deadline. The four EPSRC scholarships are departmental places, not guaranteed MSEI vacancies. Overseas fee-cover guidance describes an internal funding arrangement and does not impose a personal contribution on applicants.

The public wording asks applicants to explain project fit, interest in Imperial, intended start and relevant offer-response deadlines. It does not reproduce the anecdote about previous candidates or require applicants to waive other applications.

## Implementation and verification

`data/opportunities-content.json` remains the canonical content source. The existing MRes guide and research-area data are unchanged. The original general admissions verification date is retained; scholarships have a separate update/source date.

`Scholarships.20261106a.js` renders the shared dates and nomination section. The next applicant deadline is calculated using the UK calendar date. Tables have semantic headers and keyboard-accessible horizontal scrolling. The full internal timetable is expandable, with the supervisor form separate from applicant actions.

The `.20261106a.js` module graph follows the repository’s release convention. Previous assets remain available to cached clients. HTML entry pages are synchronised using `scripts/sync-entry-pages.py`; JSON requests use the new release key. The custom domain and router base remain unchanged.

Completed validation: JSON parsing, JavaScript syntax checks, local import resolution, synchronised route shells, preservation of MRes and research data, the nomination URL and all applicant/nomination dates. Local browser installation was unavailable. GitHub Pages deployment and visual inspection of the live pages are the remaining publication checks.

import { node as el, link, eyebrow, heading } from './ResearchUI.20261106a.js';

const dated = (text, iso) => el('time', { datetime: iso }, text);
const todayUK = () => new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit'
}).format(new Date());

export const scholarshipNotice = s => s ? el('aside', {
  class: 'rd-container sc-quick-notice', 'aria-label': 'Scholarship deadline update'
}, [el('strong', null, '2027–28 PhD scholarships'), el('p', null,
  `Round 1 supervisor nominations: ${s.notice.date} (extended). The applicant deadline remains 2 November 2026.`),
link('View all scholarship dates ↓', '#scholarships', 'rd-text-link')]) : null;

export function scholarshipSection(s) {
  if (!s) return null;
  const today = todayUK();
  const next = s.rounds.find(row => row.applicantIso >= today);
  const internalColumns = [
    ['round', 'Round'], ['nomination', 'Supervisor nomination'],
    ['departmentMeeting', 'Department shortlisting meeting'],
    ['departmentDeadline', 'Department shortlisting deadline'],
    ['facultyMeeting', 'Faculty of Engineering meeting'],
    ['departmentDecision', 'Scholarship decision to departments']
  ];
  return el('section', { class: 'rd-section rd-container sc-section', id: 'scholarships',
    'aria-labelledby': 'scholarships-title' }, [
    heading(s.cycle, s.title, s.intro, 'scholarships-title'),
    el('aside', { class: 'sc-notice', 'aria-labelledby': 'scholarship-update-title' }, [
      el('div', null, [eyebrow(`Updated ${s.updated}`), el('h3', { id: 'scholarship-update-title' }, s.notice.title), el('p', null, s.notice.text)]),
      el('div', { class: 'sc-date-highlight' }, [dated(s.notice.date, s.notice.iso), el('span', null, 'Supervisor deadline only')])
    ]),
    el('div', { class: 'sc-cards' }, s.cards.map(card => el('article', { class: 'sc-card' }, [
      eyebrow(card.label), el('h3', null, card.title), el('p', null, card.text), link(`${card.link.label} ↗`, card.link.url, 'rd-text-link')
    ]))),
    el('div', { class: 'sc-table-heading' }, [el('h3', { id: 'scholarship-rounds-title' }, 'President’s scholarship: key dates'),
      el('p', null, next ? `Next applicant deadline: ${next.applicant} (${next.round}). All applicant deadlines close at 23:59 UK time.` : 'All listed applicant deadlines have passed. Contact Dandan to discuss future opportunities.')]),
    el('p', { class: 'sc-scroll-hint', id: 'sc-rounds-hint' }, 'On smaller screens, scroll across the table to see every date.'),
    el('div', { class: 'sc-table-scroll', role: 'region', tabindex: '0', 'aria-labelledby': 'scholarship-rounds-title', 'aria-describedby': 'sc-rounds-hint' },
      el('table', { class: 'sc-table' }, [
        el('caption', null, 'Applicant deadlines and Bioengineering supervisor nominations are separate steps.'),
        el('thead', null, el('tr', null, ['Round', 'Applicant deadline', 'Supervisor nomination', 'Applicant notification'].map(text => el('th', { scope: 'col' }, text)))),
        el('tbody', null, s.rounds.map(row => el('tr', { class: row === next ? 'sc-next-round' : '' }, [
          el('th', { scope: 'row' }, [row.round, row === next ? el('span', { class: 'sc-badge' }, 'Next deadline') : null]),
          el('td', null, [dated(row.applicant, row.applicantIso), row.applicantIso < today ? el('span', { class: 'sc-status' }, 'Applicant deadline passed') : null]),
          el('td', null, [dated(row.nomination, row.nominationIso), row.revised ? el('span', { class: 'sc-status sc-revised' }, 'Extended from 9 November') : null]),
          el('td', null, row.applicantDecision)
        ])))
      ])),
    el('div', { class: 'sc-guidance' }, s.notes.map(note => el('article', null, [el('h3', null, note.title), el('p', null, note.text)]))),
    el('div', { class: 'rd-actions sc-actions' }, [link('Discuss a PhD with Dandan ↗', 'mailto:d.zhang17@imperial.ac.uk?subject=PhD%20scholarship%20enquiry%20%E2%80%94%202027-28', 'rd-button rd-primary'), link('Official President’s scholarship guidance ↗', s.officialLink.url, 'rd-text-link')]),
    el('details', { class: 'sc-internal' }, [
      el('summary', null, 'For supervisors: nomination form and departmental timetable'),
      el('div', { class: 'sc-internal-content' }, [
        el('p', null, 'Supervisors submit nominations using the departmental form. A maximum of two candidates can be nominated per scholarship round. Applicants should use Imperial’s formal admissions system.'),
        link(`${s.nominationLink.label} ↗`, s.nominationLink.url, 'rd-button rd-primary'),
        el('h3', { id: 'sc-internal-title' }, 'President’s nominations: internal selection stages'),
        el('div', { class: 'sc-table-scroll', role: 'region', tabindex: '0', 'aria-labelledby': 'sc-internal-title' }, el('table', { class: 'sc-table sc-internal-table' }, [
          el('caption', null, 'Bioengineering timetable for 2027–28 entry; internal decisions to departments are distinct from applicant notifications above.'),
          el('thead', null, el('tr', null, internalColumns.map(([, title]) => el('th', { scope: 'col' }, title)))),
          el('tbody', null, s.rounds.map(row => el('tr', null, internalColumns.map(([key], index) => el(index === 0 ? 'th' : 'td', index === 0 ? { scope: 'row' } : null, row[key])))))
        ])),
        el('p', { class: 'op-small-note' }, 'Confirm overseas fee-cover arrangements before nomination, and record the candidate’s reasons for choosing Imperial and the proposed project.')
      ])
    ]),
    el('p', { class: 'sc-source-note' }, [s.sourceNote, ' ', link('Official scholarship source ↗', s.officialLink.url)])
  ]);
}

# Team profile refresh — 2 November 2026

## Scope

This update expands the existing team directory while preserving its membership, section placement, roles, periods and genuine portrait assets. It changes only:

- `data/team-content.json`
- `assets/TeamEditorial.20261102a.js`
- `assets/team-editorial.20261102a.css`
- This source and editorial note

The publications inventory is unchanged. No generated portraits, invented qualifications, new career destinations or student-count banners are introduced.

## Presentation and content

Profiles retain a concise research introduction, project title, supervision, topic tags and professional/application links. Optional **Background & research** panels provide structured background, a research approach, selected work and links to the project students supported by that researcher. The principal investigator, doctoral researchers, visiting researcher and featured alumni use the same profile structure.

Individual project researchers now have a research area, a short project-aim description and topic tags; relevant records link to an application page. The Synaptech group project also has a short aim-based description. Alumni records gain concise research-area labels and selected co-authored work where an exact author match is available. Chengmeng Bi and the interns retain their recorded information because a project or individual biography was not supplied.

Every directory record has a stable `person-…` anchor. Name links and mentoring links lead to these anchors; a mentoring link opens a containing programme disclosure if necessary. Profile/project labels are role-sensitive, so a research project is not automatically labelled a doctoral project. The page retains Imperial Blue and purple, native keyboard-accessible disclosure controls, responsive grids and the existing authentic portraits. Initials are used for project students without portraits.

## Source hierarchy and preserved corrections

1. The existing supplied directory and explicit user corrections are the authority for membership, statuses, project titles, supervision and dates. The source reconciliation is described in `docs/application-team-update-2026-11-01.md`.
2. The owner-maintained [public team page](https://www.intelligentrobotics-acrossscales.com/blank) confirms the current research areas, visiting role and project cohort. Public year-of-study labels are not used to infer a new start date.
3. Existing publication records provide exact author matching, titles, venues, years and links. New external facts are limited to the primary sources listed below.

The following corrections remain in effect:

- Qiming Liu is **Visiting PDRA**, with the expanded role wording Visiting Postdoctoral Research Associate.
- Qingzheng Cong and Ziyuan Dong remain in **Alumni**.
- Yange Sun and Mahgoub Mahgoub remain excluded, including where an older/public source differs.
- Recorded periods are unchanged. In particular, the 2025–2026 period for Yulan Fei is retained.
- No doctoral completion date, visiting start date or alumni career destination is inferred.

## Factual background and new primary-source verification

The education and career facts for Dandan Zhang, Wen Fan, Jialin Lin, Lan Wei, Zongcai Tan, Kangyi Lu, Nitirak Rayabphand and Qingzheng Cong already existed in the supplied directory. They are reorganised into structured background lists without adding degree subjects, institutions or dates. Ziyuan Dong’s visit dates and interests and Piotr Blaszyk’s earlier MRes project also come from the existing directory.

| Person | New information / link | Primary source and limits |
| --- | --- | --- |
| Qiming Liu | PhD and BEng at Shanghai Jiao Tong University; institutional research-group link; robot-learning/navigation interests | [SJTU IRMV group directory](https://irmv.sjtu.edu.cn/team/) lists Qiming under postdoctoral researchers, gives both degrees and these research interests. Degree dates and subjects are omitted because they are not stated. The visiting role remains the owner/user-provided role. |
| Nitirak Rayabphand | University of Bristol profile and ORCID links | [Bristol profile](https://research-information.bris.ac.uk/en/persons/nitirak-rayabphand/) explicitly links [ORCID 0000-0001-5251-2196](https://orcid.org/0000-0001-5251-2196). The [Hauert Lab directory](https://hauertlab.com/people/) lists Nitirak among PhD candidates, names Dandan as co-supervisor and describes magnetic nanoswarm research. No PhD completion is claimed. |
| Piotr Blaszyk | Selected tactile-palpation preprint, related research context, robot-control software and archive | [arXiv:2608.29396](https://arxiv.org/abs/2608.29396) lists Piotr Blaszyk, Wen Fan, Kaizhong Deng, Daniel Elson and Dandan Zhang. It describes a calibrated digital twin and graph-based tactile localisation. The selected-work label is **Preprint**, with the arXiv identifier as venue. The authors’ arXiv comment describes it as an ECCV workshop paper; this update does not infer proceedings publication or an acceptance status. |
| Piotr Blaszyk | Open robot-control code and software archive | [Zenodo record 21958190](https://zenodo.org/records/21958190) lists the same five authors with Imperial affiliation and links the [author’s robot-control repository](https://github.com/piotr-blaszyk/shallow-vessel-palpation-robot-control). The record is a software release, not an additional peer-reviewed publication. |

The Piotr work is the only selected publication newly sourced outside the existing publications JSON. It is added to his profile only, with its exact authors and primary source recorded in the team data. The full publication list is not changed by this task.

## Selected-work matching

All other selected works are copied from `data/publications-content.json` after checking that the person’s exact name is present in the paper’s author array. The `publicationId` field retains the match. The PI’s `Dr ` prefix is removed for author comparison only. No fuzzy matching or namesake papers are used.

| Profile | Selected work |
| --- | --- |
| Dandan Zhang | PixelTac / in-sensor computation; embodied cross-domain intelligence in biomedical microrobots |
| Wen Fan | PixelTac; i-Tac; ADM-DP |
| Jialin Lin | DexterousMag; modular magnetic millirobots |
| Lan Wei | Frequency-aware diffusion microscopy; adaptive-grid microrobot depth estimation; TacVerse |
| Zongcai Tan | Visuo-haptic optical-microrobot digital twin; physics-informed sim-to-real data augmentation |
| Kangyi Lu | Micro-dexterity review preprint; Mag-VLA |
| Nitirak Rayabphand | Parallel fabrication with magnetic functionalisation; Magni-DOME |
| Yongchen Wang | Adaptive shared control; Mag-VLA |
| Qingzheng Cong | MagicGripper; TacVerse |
| Alexander Timms and Denis Zahorovsky | Coarse-to-fine multi-pipette localisation |
| Sirine Bhouri, Wenhao Hong and Gurmeher Khurana | TacVerse |
| Yudong Mao | Reinforcement-learning-based magnetic microrobot shared control |

Titles, years and publication-status labels remain consistent with the current publication inventory. Each selected item links to its original DOI, arXiv/paper record and available project/code links. A selected paper establishes co-authorship; the page does not infer an individual’s contribution from author order.

## Editorial interpretation versus reported results

The new `researchApproach`, `projectContext`, `researchArea` and topic-label text is editorial explanation of the recorded research/project titles and, where available, the selected papers. These additions explain the research question, methods or application. They do not report new achievements or experimental results.

Current project descriptions use wording such as “aims”, “investigates”, “explores” and “studies”. They do not imply that a project has produced working hardware, validated performance, clinical evidence, a completed thesis or a publication. The cancer-metabolism project is described in its biomedical machine-learning context and is not forced into an unrelated robotics application category.

## Validation

A static validation pass covers JSON parsing, JavaScript syntax, preservation of membership/status/period/avatar fields, requested exclusions, unique anchors, local portrait existence, project-context coverage, exact-author publication matching and valid local module/application targets. Browser layout and interaction checks are handled in the integrated release by the parent task.

Validation result: all 54 existing person records were preserved with their role, period, project, supervision and portrait fields. All 17 individual project records have context, areas and topics; 11 profiles have structured background entries. The page contains 26 exact-author references to the existing publication inventory plus the separately verified Piotr preprint. JavaScript syntax and a static render passed, including unique rendered anchors, all 54 person records, 11 portrait images with alt text, and the role-sensitive project-label regression check. Application links were checked against the registered SPA routes; this repository does not use physical directories for each research route.

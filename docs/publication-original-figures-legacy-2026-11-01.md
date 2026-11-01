# Original figures for older publication records

## Scope and result

The `20261101g` update replaces repeated conceptual artwork for eight older publications with eight distinct original paper or author-project figures. Seven assets come from the relevant paper; one comes from the lead author's project description. No generated figure, generic topic image, reconstructed chart or photograph from another paper is used.

The handoff mapping is keyed by the exact existing publication title. It supplies a local `src`, descriptive `alt`, concise `caption`, primary `sourceUrl`, `kind`, dimensions and credit. Explicit Creative Commons fields are supplied only where the licence was verified for the selected material. Bibliographic records and the publication renderer are owned by the integrating agent and were not changed in this subtask.

## Sources and selected figures

| Publication | Original material selected | Local asset | Primary source |
| --- | --- | --- | --- |
| Fabrication and optical manipulation of micro-robots for biomedical applications | Figure 1, the review's scope and optical-microrobotics concept; author manuscript page 2 | `fabrication-2026g.webp` | [Author manuscript, FEMTO-ST](https://publiweb.femto-st.fr/tntnet/entries/19272/documents/author/data) |
| From teleoperation to autonomous robot-assisted microsurgery: A survey | Figure 1, historical platform timeline; publisher PDF page 2 | `microsurgery-survey-2026g.webp` | [Springer Nature article](https://link.springer.com/article/10.1007/s11633-022-1332-5) |
| Micro-object pose estimation with sim-to-real transfer learning using small dataset | Figure 3, learning-to-match concept and model; publisher PDF page 6 | `pose-small-dataset-2026g.webp` | [Communications Physics article](https://www.nature.com/articles/s42005-022-00844-z) |
| Human-Robot Shared Control for Surgical Robot Based on Context-Aware Sim-to-Real Adaptation | Figure 1, context-aware sim-to-real shared-control framework; author manuscript page 2 | `shared-control-2026g.webp` | [Author manuscript on arXiv](https://arxiv.org/abs/2204.11116) |
| Distributed force control for microrobot manipulation via planar multi-spot optical tweezer | Figure 1, physical mechanism and microrobot structure design; publisher PDF page 3 | `distributed-force-2026g.webp` | [Wiley article](https://doi.org/10.1002/adom.202000543); [Imperial repository](https://spiral.imperial.ac.uk/entities/publication/dfadef47-02a7-4ab9-8deb-94dee185897d) |
| Data-driven microscopic pose and depth estimation for optical microrobot manipulation | Figure 5, GPR–ResNet method overview; accepted manuscript page 18 | `microscopic-depth-2026g.webp` | [Imperial accepted manuscript record](https://spiral.imperial.ac.uk/entities/publication/f303cc81-9ddc-48b1-bfcb-8dae7b606c96) |
| Automatic microsurgical skill assessment based on cross-domain transfer learning | Figure 4, network and transfer-learning architecture; accepted manuscript page 5 | `microsurgical-skills-2026g.webp` | [Imperial accepted manuscript record](https://spiral.imperial.ac.uk/entities/publication/bbe67bae-c567-48d9-83c4-8fdaa5b65df8) |
| A handheld master controller for robot-assisted microsurgery | Original handheld-controller and robot-interface project figure | `handheld-controller-2026g.webp` | [Dandan Zhang's author project page](https://www.intelligentrobotics-acrossscales.com/others) |

Assets are under `assets/publication-figures/`. The author project image is retained at its native 742 × 720 resolution. Paper figures are rendered to approximately 1600 pixels wide. All panel labels, arrows, scale bars and diagram text are retained. PDF rendering includes vector text and drawing elements as well as embedded raster images, avoiding incomplete extraction of a figure's bitmap layer alone. Surrounding article prose is cropped out; figure content is not retouched.

## Credits and licences

The Communications Physics article states **CC BY 4.0** on its final page; Figure 3 has no separate third-party credit exception. The distributed-force article and its Imperial repository record also state **CC BY 4.0**. Those two figures carry a visible licence link in the mapping, plus author attribution and an indication that the source was extracted and resized.

The microsurgery survey is an open-access CC BY 4.0 article, but its Figure 1 explicitly credits third-party image panels separately. The exported metadata therefore does **not** label the entire composite figure CC BY. Its caption credit identifies the source and the credited organisations. The panel-specific notices in the source are:

| Panel | Source notice |
| --- | --- |
| (a), Steady-hand robot | SAGE, 1999 |
| (b), Micron | IEEE, 2004 |
| (c), A 73 | SAGE, 2004 |
| (d), New steady-hand robot | IEEE, 2007 |
| (e), Preceyes | PLOS ONE, 2016 |
| (f), REMS | Wiley Online Library, 2017 |
| (g), Bern University robot | AAAS, 2017 |

The ACS accepted manuscript record identifies copyright as American Chemical Society, 2020. The skill-assessment accepted manuscript record identifies copyright as IEEE, 2020. Their mapping credits retain those notices and identify the material as an accepted manuscript. The shared-control arXiv deposit uses the [arXiv non-exclusive distribution licence](https://arxiv.org/licenses/nonexclusive-distrib/1.0/license.html), which is not represented as a general public reuse licence. No Creative Commons licence is asserted for that figure, the FEMTO-ST author manuscript, or the author-site handheld-controller figure.

## Records without a verified accessible figure

The following two targets are omitted from the figure mapping so the integrating renderer can show their bibliographic content without repeating an unrelated image:

| Publication | Checked primary sources and limitation |
| --- | --- |
| Machine learning-based real-time localization and automatic trapping of multiple microrobots in optical tweezer | The [IEEE record](https://ieeexplore.ieee.org/document/9870467) requested robot verification. The [Imperial publication list](https://www.imperial.ac.uk/hamlyn-centre/projects/past-projects/micro-robotics-for-surgery/publication-2017---2024/) and author project/database sources confirm the citation but yielded no accessible original figure. No access-control workaround was attempted. |
| Towards Microrobot Out-of-Plane Control Via Planar Multi-Spot Optical Tweezer | The [Bristol record](https://research-information.bris.ac.uk/en/publications/towards-microrobot-out-of-plane-control-via-planar-multi-spot-opt/) supplies citation metadata only. The [MARSS 2019 programme](https://marss-conference.org/History_2019-Helsinki/download/MARSS2019_Technical_program.pdf) verifies the presentation, but does not supply a paper figure. A figure from the later distributed-force article was not reused. |

## Verification

- Each source paper was identified by its title before extraction.
- Source pages and all eight final assets were visually inspected.
- Crops were corrected where a PDF's vector labels extended outside its embedded image boundary.
- All eight files open successfully as WebP; stored dimensions match the mapping.
- The eight file hashes are distinct, and none duplicates the existing `2026f` publication-figure assets.
- Existing publication data, original twenty paper figures, rendering modules and routes were left unchanged by this subtask.

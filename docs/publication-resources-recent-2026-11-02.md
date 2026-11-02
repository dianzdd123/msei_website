# Publication resource verification: recent papers

Checked 2 November 2026. This audit covers the 14 recent publications assigned to the recent-paper pass. It records verified paper-specific resources and preserves unresolved gaps; it does not claim that an unsuccessful search proves a resource does not exist.

## Outcome

The map contains four GitHub repository links, one dataset link, four video links, four project links and one supplementary-material link. Three GitHub repositories and one project link already existed in the publication inventory; this pass verifies them, standardises the GitHub labels, and recommends the canonical URL for the visuo-haptic repository. The remaining ten resource links are additions, including the project and supplementary-material links.

The TacVerse dataset has a public landing page, but file access requires Hugging Face login and acceptance of the dataset conditions. This should be stated in its description or tooltip. The i-Tac publisher offers data upon reasonable request, so this audit supplies no public Dataset button for it.

## Verification method and boundaries

- Match each resource against the exact paper title and author group using author project pages, paper/publisher pages, or the paper's repository README.
- Inspect GitHub metadata, repository contents and README through the GitHub connector. A data loader, a directory called data, or a documented local data layout is not evidence of a released dataset.
- Keep paper-specific publisher supplementary movies distinct from unrelated videos returned by search engines. Use the publisher's numbered movie labels when the content has not been viewed.
- Include repository links as released code, without asserting that every experiment can be reproduced unmodified.
- Do not add GitHub links from arXiv's generic HTML issue-reporting footer, unrelated name-matching projects, paper aggregators, or conference metadata datasets.

Direct project/video destination checks were limited for the digital-twin and sim-to-real project sites, the Google Drive video and Springer binary files. Their URLs are explicitly supplied by the exact-paper author README or publisher source; web retrieval could not open those destinations and terminal network access is restricted. These checks verify the source association, not playback or continued download availability. No login, gated dataset download, or access-control bypass was attempted.

## Per-paper findings

### Rapid Parallel Fabrication and Control of Diverse Microrobotic Structures with Magnetic Functionalization

Publication ID: `paper-rapid-parallel-fabrication-and-control-of-diverse-microrobotic-structures-with-magnetic-functionalization`.

No additional resource link verified in this pass.

- No exact-paper public GitHub repository, dataset download or author/publisher demonstration video was verified.
- The publisher DOI was not accessible through the research tool. PubMed confirms the exact paper, authors and Magni-DOME platform but exposes no research-resource links.
- Excluded the JoVE Visualize result: its linked experiment video is a different 2021 work, not this paper.

Other checked primary sources: [1](https://doi.org/10.1162/ARTL.a.489), [2](https://pubmed.ncbi.nlm.nih.gov/42821709/).

### A Digital Twin Framework for Virtual Visuo-Haptic Teleoperation of Complex-Shaped Optical Microrobots

Publication ID: `paper-a-digital-twin-framework-for-virtual-visuo-haptic-teleoperation-of-complex-shaped-optical-microrobots`.

| Resource | Destination | Evidence and verification |
| --- | --- | --- |
| GitHub | [GitHub](https://github.com/Zongcai23/ot-haptic-feedback-digital-twin) | [Source](https://github.com/Zongcai23/ot-haptic-feedback-digital-twin/blob/main/README.md). GitHub connector verified the repository and README: exact paper title and authors, haptic/vision implementation files, tutorials and paper materials. |
| Video | [Video](https://drive.google.com/file/d/1mpAjNmRjuYFRDYTJD2euEBR9yDKwae_z/view?usp=sharing) | [Source](https://github.com/Zongcai23/ot-haptic-feedback-digital-twin/blob/main/README.md). The exact-paper README explicitly links this destination as its long demonstration video. Source association verified; direct playback could not be checked in this environment. |
| Project | [Project](https://zongcai23.github.io/digital-twin-visuo-haptic/) | [Source](https://github.com/Zongcai23/ot-haptic-feedback-digital-twin/blob/main/README.md). Exact-paper README explicitly provides this project website. Destination accessibility was not verified by the web tool. |

- No downloadable research dataset was verified; the repository is a code/tutorial release.

Existing-link adjustments:

- Use a clear GitHub label and the canonical repository URL; the existing destination is the same verified repository. Use [canonical repository](https://github.com/Zongcai23/ot-haptic-feedback-digital-twin) in place of the branch-specific URL.

Other checked primary sources: [1](https://github.com/Zongcai23/ot-haptic-feedback-digital-twin), [2](https://arxiv.org/abs/2605.28448).

### Mag-VLA: Vision-Language-Action Model for Bimanual Magnetically Actuated Microrobot Manipulation

Publication ID: `paper-mag-vla-vision-language-action-model-for-bimanual-magnetically-actuated-microrobot-manipulation`.

No additional resource link verified in this pass.

- No exact-paper public GitHub repository, dataset download or demonstration video was verified in the paper HTML or focused searches.
- The paper describes an experimental dataset; that description alone is not evidence of a public dataset release.
- Generic arXiv GitHub issue-reporting links and daily-paper aggregators are unrelated to the authors' implementation.

Other checked primary sources: [1](https://arxiv.org/html/2605.28486v1), [2](https://arxiv.org/abs/2605.28486).

### Embodied Cross-Domain Intelligence in Biomedical Microrobots: A Review

Publication ID: `paper-embodied-cross-domain-intelligence-in-biomedical-microrobots-a-review`.

| Resource | Destination | Evidence and verification |
| --- | --- | --- |
| Project | [Project](https://nuounuou.github.io/Embodied-Cross-Domain-Intelligence-in-Biomedical-Microrobots-A-Review/) | [Source](https://nuounuou.github.io/Embodied-Cross-Domain-Intelligence-in-Biomedical-Microrobots-A-Review/). Opened the existing project site and matched its biomedical microrobotics cross-domain-intelligence review content. Retain the existing project resource. |

- No exact-paper public code repository, dataset or video resource was verified.
- The review website is explanatory material; its GitHub Pages hostname was not treated as proof of an implementation repository.

Other checked primary sources: [1](https://nuounuou.github.io/Embodied-Cross-Domain-Intelligence-in-Biomedical-Microrobots-A-Review/), [2](https://doi.org/10.34133/cbsystems.0546).

### Dual-Control Frequency-Aware Diffusion Model for Depth-Dependent Optical Microrobot Microscopy Image Generation

Publication ID: `paper-dual-control-frequency-aware-diffusion-model-for-depth-dependent-optical-microrobot-microscopy-image-generation`.

No additional resource link verified in this pass.

- No exact-paper public GitHub repository, dataset download or demonstration video was verified in the arXiv HTML and focused searches.
- Dataset usage or generated training data in the manuscript was not treated as evidence of a downloadable release.

Other checked primary sources: [1](https://arxiv.org/html/2604.11680v1), [2](https://arxiv.org/abs/2604.11680).

### Micro-Dexterity in Biological Micromanipulation: Embodiment, Perception, and Control

Publication ID: `paper-micro-dexterity-in-biological-micromanipulation-embodiment-perception-and-control`.

No additional resource link verified in this pass.

- No verified author-maintained GitHub resource list, downloadable dataset or video was found for this review in focused exact-title searches.
- Do not label an unrelated microrobotics repository as this review's implementation.

Other checked primary sources: [1](https://arxiv.org/abs/2604.11640).

### Physics-Informed Machine Learning for Efficient Sim-to-Real Data Augmentation in Micro-Object Pose Estimation

Publication ID: `paper-physics-informed-machine-learning-for-efficient-sim-to-real-data-augmentation-in-micro-object-pose-estimation`.

| Resource | Destination | Evidence and verification |
| --- | --- | --- |
| GitHub | [GitHub](https://github.com/Zongcai23/Micro_Object_Sim2Real) | [Source](https://github.com/Zongcai23/Micro_Object_Sim2Real/blob/main/README.md). GitHub connector verified exact title and code for physics-based rendering, GAN training and micro-object pose estimation. README explains local data preparation and code limitations. |
| Project | [Project](https://icra2026-sim2real.pages.dev/) | [Source](https://github.com/Zongcai23/Micro_Object_Sim2Real/blob/main/README.md). The exact-paper README explicitly links this project page. Destination accessibility was not verified by the web tool. |

- No downloadable dataset or paper video was verified.
- The data/ and datasets/ directories contain pipeline/support code; README paths such as YOUR_PAIRED_DATASET and Lan_Data require users' own local data, so these are not Dataset links.
- The README notes that some paths and components require adaptation; the link is to the released code, without a claim of complete end-to-end reproduction.

Existing-link adjustments:

- Use the explicit GitHub resource label for this verified existing repository. URL retained.

Other checked primary sources: [1](https://github.com/Zongcai23/Micro_Object_Sim2Real), [2](https://arxiv.org/abs/2511.16494).

### Context-Aware Adaptive Shared Control for Magnetically-Driven Bimanual Dexterous Micromanipulation

Publication ID: `paper-context-aware-adaptive-shared-control-for-magnetically-driven-bimanual-dexterous-micromanipulation`.

No additional resource link verified in this pass.

- No exact-paper public GitHub repository, dataset download or demonstration video was verified in the full arXiv HTML and focused searches.
- Tracking and authority datasets are described in the paper, but no public download destination was found.

Other checked primary sources: [1](https://arxiv.org/html/2603.14388v1), [2](https://arxiv.org/abs/2603.14388).

### DexterousMag: A Reconfigurable Electromagnetic Actuation System for Miniature Helical Robot

Publication ID: `paper-dexterousmag-a-reconfigurable-electromagnetic-actuation-system-for-miniature-helical-robot`.

No additional resource link verified in this pass.

- No exact-paper public GitHub repository, dataset download or demonstration video was verified in the full arXiv HTML and focused searches.

Other checked primary sources: [1](https://arxiv.org/html/2603.14396v1), [2](https://arxiv.org/abs/2603.14396).

### A vision-based tactile sensor with in-sensor computing paradigm for seamless tactile sensing and perception

Publication ID: `paper-a-vision-based-tactile-sensor-with-in-sensor-computing-paradigm-for-seamless-tactile-sensing-and-perception`.

| Resource | Destination | Evidence and verification |
| --- | --- | --- |
| Video 1 | [Video](https://static-content.springer.com/esm/art%3A10.1038%2Fs44172-026-00770-w/MediaObjects/44172_2026_770_MOESM3_ESM.mp4) | [Source](https://www.nature.com/articles/s44172-026-00770-w#MOESM3). The publisher's saved official HTML and article PDF both contain this exact MP4 URL labelled Supplementary Movie S1. The link targets the publisher-hosted file. Playback/HTTP status could not be rechecked because the research tool could not open the binary URL and terminal network access is restricted. |
| Video 2 | [Video](https://static-content.springer.com/esm/art%3A10.1038%2Fs44172-026-00770-w/MediaObjects/44172_2026_770_MOESM4_ESM.mp4) | [Source](https://www.nature.com/articles/s44172-026-00770-w#MOESM4). The publisher's saved official HTML and article PDF both contain this exact MP4 URL labelled Supplementary Movie S2. The link targets the publisher-hosted file. Playback/HTTP status could not be rechecked because the research tool could not open the binary URL and terminal network access is restricted. |
| Video 3 | [Video](https://static-content.springer.com/esm/art%3A10.1038%2Fs44172-026-00770-w/MediaObjects/44172_2026_770_MOESM5_ESM.mp4) | [Source](https://www.nature.com/articles/s44172-026-00770-w#MOESM5). The publisher's saved official HTML and article PDF both contain this exact MP4 URL labelled Supplementary Movie S3. The link targets the publisher-hosted file. Playback/HTTP status could not be rechecked because the research tool could not open the binary URL and terminal network access is restricted. |
| Supplement | [Supplement](https://static-content.springer.com/esm/art%3A10.1038%2Fs44172-026-00770-w/MediaObjects/44172_2026_770_MOESM1_ESM.pdf) | [Source](https://www.nature.com/articles/s44172-026-00770-w#MOESM1). Exact Supplementary Materials PDF URL extracted from the publisher's official HTML and article PDF. |

- No exact-paper public GitHub repository or separate downloadable research dataset was verified.
- Movie content was not viewed, so labels use only the publisher's verified S1/S2/S3 numbering.

Other checked primary sources: [1](https://www.nature.com/articles/s44172-026-00770-w), [2](https://doi.org/10.1038/s44172-026-00770-w).

### TacVerse: A Multisensor Dataset and Benchmark for Cross-Sensor Vision-Based Tactile Perception

Publication ID: `paper-tacverse-a-multisensor-dataset-and-benchmark-for-cross-sensor-vision-based-tactile-perception`.

| Resource | Destination | Evidence and verification |
| --- | --- | --- |
| GitHub | [GitHub](https://github.com/LannWei/Tactile_Database) | [Source](https://lannwei.github.io/Tactile_Database/). The exact-author project page and publisher data-availability statement link this repository. GitHub connector verified TacVerse README and actual benchmark scripts for force regression, shape classification and grating classification. |
| Dataset | [Dataset](https://huggingface.co/datasets/Lan-2025/Tactile) | [Source](https://lannwei.github.io/Tactile_Database/). The exact-paper project page, publisher statement and code README all link Lan-2025/Tactile. The public Hugging Face landing page reports dataset files and an access gate. Access: Hugging Face login and acceptance of access conditions are required; the public landing page is accessible. |
| Project | [Project](https://lannwei.github.io/Tactile_Database/) | [Source](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adrr.70169). Opened project page; exact title, nine-author list, benchmark tasks and links match this paper. Publisher data-availability statement also points to it. |

- No author-linked paper video was verified.
- Excluded unrelated TacVerse repositories/datasets with the same name.

Other checked primary sources: [1](https://lannwei.github.io/Tactile_Database/), [2](https://huggingface.co/datasets/Lan-2025/Tactile), [3](https://github.com/LannWei/Tactile_Database), [4](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adrr.70169).

### i-Tac: Inverse Design of 3D-Printed Tactile Elastomers with Tuneable Optical and Mechanical Properties

Publication ID: `paper-i-tac-inverse-design-of-3d-printed-tactile-elastomers-with-tuneable-optical-and-mechanical-properties`.

No additional resource link verified in this pass.

- The publisher data-availability statement says supporting data are available from the corresponding author upon reasonable request; no public download link was verified.
- No exact-paper public GitHub repository or author/publisher demonstration video was verified.

Other checked primary sources: [1](https://advanced.onlinelibrary.wiley.com/doi/10.1002/aisy.202501200), [2](https://arxiv.org/abs/2604.10692).

### ADM-DP: Adaptive Dynamic Modality Diffusion Policy through Vision-Tactile-Graph Fusion for Multi-Agent Manipulation

Publication ID: `paper-adm-dp-adaptive-dynamic-modality-diffusion-policy-through-vision-tactile-graph-fusion-for-multi-agent-manipulation`.

| Resource | Destination | Evidence and verification |
| --- | --- | --- |
| GitHub | [GitHub](https://github.com/dianzdd123/ADM_DP) | [Source](https://github.com/dianzdd123/ADM_DP/blob/main/README.md). GitHub connector verified the repository, exact ADM-DP paper title, and released policy, scripts, tests and utility files. |

- No downloadable dataset or paper video was verified.
- The README documents a .zarr training-data layout but supplies no actual dataset download.
- Ignored the README's illustrative github.com/xxx/ADM_DP.git clone command; the actual verified repository URL is dianzdd123/ADM_DP.

Existing-link adjustments:

- Use the explicit GitHub resource label for this verified existing repository. URL retained.

Other checked primary sources: [1](https://github.com/dianzdd123/ADM_DP), [2](https://arxiv.org/abs/2602.21622).

### Design and Control of Modular Magnetic Millirobots for Multimodal Locomotion and Shape Reconfiguration

Publication ID: `paper-design-and-control-of-modular-magnetic-millirobots-for-multimodal-locomotion-and-shape-reconfiguration`.

No additional resource link verified in this pass.

- No exact-paper public GitHub repository, dataset download or standalone demonstration video was verified in the full arXiv HTML and focused searches.
- The exact-title author LinkedIn announcement corroborates the paper, but no reusable video destination was verified.
- Excluded conference-program metadata datasets: those contain conference listings, not the paper's experimental data.

Other checked primary sources: [1](https://arxiv.org/html/2602.19346v1), [2](https://arxiv.org/abs/2602.19346), [3](https://www.linkedin.com/posts/erik-garcia-oyono_icra2026-robotics-magneticrobotics-activity-7431616371769389056-ioRO).

## Publisher supplementary-file provenance

The PixelTac publisher HTML and article PDF saved during the original-figure audit both list Supplementary Movie S1, S2 and S3 with the exact Springer MP4 destinations in the map. The corresponding publisher HTML anchors are MOESM3, MOESM4 and MOESM5. The supplementary PDF is MOESM1. No semantic movie caption beyond the publisher's numbering was asserted.

## Integration notes

Retain the existing paper/DOI links and original publication figures. Add only the listed resources, deduplicating by URL. Use the explicit GitHub, Dataset and Video labels, and preserve numbered video labels for the three separate PixelTac movies. The two review entries do not receive implementation links. The JSON handoff is keyed by the existing publication IDs and includes descriptions, an access note for TacVerse, checked sources, unresolved-resource notes and the recommended existing-link adjustments.


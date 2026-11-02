# Publication resource verification — middle publication batch

Verified on 2 November 2026 for the publication resource-link update. This note covers the 14 assigned records without changing their titles, authors, figures, ordering or research-theme assignments.

## Integration outcome

The mapping proposes 15 resource associations across seven papers: five existing implementation repositories relabelled **GitHub**, two original dataset downloads, four video associations (three already embedded on the site), and four project pages. Five URLs are additions beyond the prior links and existing video IDs: the two Hugging Face datasets, OT Gym project page, ViTacTip video and IROS 2024 microsurgery project section.

All three existing video IDs are retained. Patch-clamp is explicitly embedded in the author project. OT Gym is supported by author repository video metadata and the lab YouTube channel. Magnetic navigation has corroborating lab-channel/author/venue metadata, although the public title does not reproduce the full paper title; its exact visual content has not been independently viewed.

A resource's association with a paper and the current accessibility of its destination are distinct checks. The descriptions below state when public listing or metadata was fetched but full playback, archive download or code execution was not tested. No claim is made that the original research code is reproducible without further setup.

## Resource decisions

### Physics-Informed Machine Learning with Adaptive Grids for Optical Microrobot Depth Estimation

Publication ID: `paper-physics-informed-machine-learning-with-adaptive-grids-for-optical-microrobot-depth-estimation`

- **GitHub:** [https://github.com/LannWei/CBS2025](https://github.com/LannWei/CBS2025). Repository description names the exact IEEE CBS 2025 paper. The repository contains the adaptive-grid PIML and baseline Python implementations. Evidence: [source](https://github.com/LannWei/CBS2025).

**Gaps and exclusions**

- No separate dataset download or public demonstration video was verified for this exact paper. Do not infer that a dataset from a related optical-microrobot paper is the dataset for this study.

**Existing-link adjustment:** Relabel the existing `Code` button as `GitHub`; preserve its URL.

**Primary sources checked**

- [https://github.com/LannWei/CBS2025](https://github.com/LannWei/CBS2025)
- [https://arxiv.org/abs/2509.02343](https://arxiv.org/abs/2509.02343)

### Coarse-to-Fine Learning for Multi-Pipette Localisation in Robot-Assisted In Vivo Patch-Clamp

Publication ID: `paper-coarse-to-fine-learning-for-multi-pipette-localisation-in-robot-assisted-in-vivo-patch-clamp`

- **GitHub:** [https://github.com/LannWei/Patch-Clamp-Localisation](https://github.com/LannWei/Patch-Clamp-Localisation). Official implementation README and project HTML give the exact authors, IROS 2025 publication and implementation/training instructions. The README uses the earlier Heatmap-Augmented title variant. Evidence: [source](https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/README.md).
- **Dataset:** [https://huggingface.co/datasets/Lan-2025/Pipette/tree/main](https://huggingface.co/datasets/Lan-2025/Pipette/tree/main). The author repository Data file and project page both link this exact dataset. Public, ungated Hugging Face file listing was retrieved and contains data.zip (196,204,205 bytes). Evidence: [source](https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/Data).
- **Video:** [https://www.youtube.com/watch?v=tCrBOllIMAo](https://www.youtube.com/watch?v=tCrBOllIMAo). The author's exact-paper project HTML embeds this existing video ID in its Video section. Direct automated YouTube playback was unavailable; source association is verified. Evidence: [source](https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/index.html).
- **Project:** [https://lannwei.github.io/Patch-Clamp-Localisation/](https://lannwei.github.io/Patch-Clamp-Localisation/). Author project source gives the full paper authors, paper link, code, dataset and embedded video. Evidence: [source](https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/index.html).

**Gaps and exclusions**

- Keep existing videoId tCrBOllIMAo; it is confirmed by the author project embed. The downloadable dataset archive was listed but its contents were not downloaded or independently audited.

**Existing-link adjustment:** Relabel the existing `Code` button as `GitHub`; preserve its URL.

**Primary sources checked**

- [https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/README.md](https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/README.md)
- [https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/Data](https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/Data)
- [https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/index.html](https://raw.githubusercontent.com/LannWei/Patch-Clamp-Localisation/main/index.html)
- [https://huggingface.co/datasets/Lan-2025/Pipette/tree/main](https://huggingface.co/datasets/Lan-2025/Pipette/tree/main)

### A Dataset and Benchmarks for Deep Learning-Based Optical Microrobot Pose and Depth Perception

Publication ID: `paper-a-dataset-and-benchmarks-for-deep-learning-based-optical-microrobot-pose-and-depth-perception`

- **GitHub:** [https://github.com/LannWei/Optical-Microrobot-Database](https://github.com/LannWei/Optical-Microrobot-Database). Exact-paper author project links this repository, which contains Python baseline, model and search scripts. Evidence: [source](https://lannwei.github.io/Optical-Microrobot-Database/).
- **Dataset:** [https://huggingface.co/datasets/Lan-2025/OpticalMicrorobot/tree/main](https://huggingface.co/datasets/Lan-2025/OpticalMicrorobot/tree/main). The author project explicitly links this dataset. Public file listing confirms Image_Depth_0505.tar (772 MB), Image_Pose_0505.tar (2.73 GB), CAD_File and Deep_Learning_2025_Dataset; total listing is 3.64 GB. Evidence: [source](https://lannwei.github.io/Optical-Microrobot-Database/).
- **Project:** [https://lannwei.github.io/Optical-Microrobot-Database/](https://lannwei.github.io/Optical-Microrobot-Database/). Exact title, Lan Wei and Dandan Zhang authors, MARSS 2025 citation, source code and dataset links. Evidence: [source](https://lannwei.github.io/Optical-Microrobot-Database/).

**Gaps and exclusions**

- No public video URL verified. The project says original source videos can be requested; its animated GIF was not mislabelled as a downloadable research video.

**Existing-link adjustment:** Relabel the existing `Code` button as `GitHub`; preserve its URL.

**Primary sources checked**

- [https://lannwei.github.io/Optical-Microrobot-Database/](https://lannwei.github.io/Optical-Microrobot-Database/)
- [https://github.com/LannWei/Optical-Microrobot-Database](https://github.com/LannWei/Optical-Microrobot-Database)
- [https://huggingface.co/datasets/Lan-2025/OpticalMicrorobot/tree/main](https://huggingface.co/datasets/Lan-2025/OpticalMicrorobot/tree/main)

### Magni-DOME: An Open Platform for High-Resolution Light-Based and Magnetic Contactless Fabrication of Active Microstructures

Publication ID: `paper-magni-dome-an-open-platform-for-high-resolution-light-based-and-magnetic-contactless-fabrication-of-active-microstructures`

No new resource buttons proposed.

**Gaps and exclusions**

- No exact-paper official implementation, dataset download or author/publisher demonstration video was verified. Search results for unrelated commercial dental equipment were excluded. Resources from the later Magni-DOME journal study were not assumed to belong to this conference paper.

**Primary sources checked**

- [https://ieeexplore.ieee.org/document/11072766](https://ieeexplore.ieee.org/document/11072766)
- [https://hauertlab.com/publications/](https://hauertlab.com/publications/)

### Interactive OT Gym: A Reinforcement Learning-Based Interactive Optical tweezer (OT)-Driven Microrobotics Simulation Platform

Publication ID: `paper-interactive-ot-gym-a-reinforcement-learning-based-interactive-optical-tweezer-ot-driven-microrobotics-simulation-platform`

- **GitHub:** [https://github.com/dianzdd123/ICRA2025-OT-Gym](https://github.com/dianzdd123/ICRA2025-OT-Gym). README gives the exact paper title and Zongcai Tan/Dandan Zhang authors. Repository contents include bimanual haptic control and RL navigation code ZIPs plus simulation and 3D-model archives. Evidence: [source](https://raw.githubusercontent.com/dianzdd123/ICRA2025-OT-Gym/main/README.md).
- **Project:** [https://sites.google.com/view/otgym](https://sites.google.com/view/otgym). Author README links the project site; it is publicly reachable and gives the exact paper title, both authors, platform overview and experimental results. Evidence: [source](https://raw.githubusercontent.com/dianzdd123/ICRA2025-OT-Gym/main/README.md).
- **Video:** [https://www.youtube.com/watch?v=D3-lGa7MC3g](https://www.youtube.com/watch?v=D3-lGa7MC3g). Preserved existing video. Public YouTube oEmbed metadata identifies the lab channel and title ICRA Zongcai Finial Version. The exact-paper repository's Short Video link is a publicly reachable Drive file named ICRA_Zongcai_Finial_Version_0306 (1).mp4, independently corroborating its association. Playback was not tested. Evidence: [source](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=D3-lGa7MC3g&format=json).

**Gaps and exclusions**

- Keep existing videoId D3-lGa7MC3g. Author README Short Video mirror: https://drive.google.com/file/d/1qvTl7QsJqCCDp0TmPr03gavFDYRkFXab/view?usp=sharing . Its public filename was verified; do not add a duplicate button for the same short demo.
- Author README also links a Long Video at https://drive.google.com/file/d/1IxezuWqVQzHAi8P1-euABZsLCVHTun7e/view?usp=sharing ; this alternative was not independently fetched, so not proposed as an additional button.
- No Dataset link proposed. Rendered_Images_Raw_Data.zip appears in the README file list but was absent from the retrieved repository directory. Simulation ZIPs, 3D models and visualization videos are not presented as an experimental dataset.
- Ignore the README's placeholder paper URL https://your-paper-link.example.com . The project page names the alternate Zongcai23/ICRA2025-OT-Gym repository; the existing dianzdd123 implementation is working and was not replaced.

**Existing-link adjustment:** Relabel the existing `Code` button as `GitHub`; preserve its URL.

**Primary sources checked**

- [https://raw.githubusercontent.com/dianzdd123/ICRA2025-OT-Gym/main/README.md](https://raw.githubusercontent.com/dianzdd123/ICRA2025-OT-Gym/main/README.md)
- [https://api.github.com/repos/dianzdd123/ICRA2025-OT-Gym/contents](https://api.github.com/repos/dianzdd123/ICRA2025-OT-Gym/contents)
- [https://sites.google.com/view/otgym](https://sites.google.com/view/otgym)
- [https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=D3-lGa7MC3g&format=json](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=D3-lGa7MC3g&format=json)
- [https://drive.google.com/file/d/1qvTl7QsJqCCDp0TmPr03gavFDYRkFXab/view](https://drive.google.com/file/d/1qvTl7QsJqCCDp0TmPr03gavFDYRkFXab/view)

### Deep Reinforcement Learning-Based Semi-Autonomous Control for Magnetic Micro-robot Navigation with Immersive Manipulation

Publication ID: `paper-deep-reinforcement-learning-based-semi-autonomous-control-for-magnetic-micro-robot-navigation-with-immersive-manipulation`

- **GitHub:** [https://github.com/dianzdd123/DRL-MR-Microrobot](https://github.com/dianzdd123/DRL-MR-Microrobot). Official existing repository describes the matching DRL-SC magnetic microrobot navigation framework and contains Mixed Reality and Reinforcement Learning implementation folders. Evidence: [source](https://raw.githubusercontent.com/dianzdd123/DRL-MR-Microrobot/main/README.md).
- **Video:** [https://www.youtube.com/watch?v=7-6FxLEkC_8](https://www.youtube.com/watch?v=7-6FxLEkC_8). Preserved existing video. Public oEmbed metadata identifies Multi-Scale Embodied Intelligence Lab as uploader and ICRA25 3016 Yudong as title, corroborating first author Yudong Mao and venue/year. Metadata does not spell out the full paper title; exact visual-content matching and playback were not independently verified. Evidence: [source](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=7-6FxLEkC_8&format=json).

**Gaps and exclusions**

- Keep existing videoId 7-6FxLEkC_8. No separate public dataset download was verified. Do not treat the simulated microvascular environment as a published dataset without an author-linked data release.

**Existing-link adjustment:** Relabel the existing `Code` button as `GitHub`; preserve its URL.

**Primary sources checked**

- [https://raw.githubusercontent.com/dianzdd123/DRL-MR-Microrobot/main/README.md](https://raw.githubusercontent.com/dianzdd123/DRL-MR-Microrobot/main/README.md)
- [https://arxiv.org/abs/2503.06359](https://arxiv.org/abs/2503.06359)
- [https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=7-6FxLEkC_8&format=json](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=7-6FxLEkC_8&format=json)

### Design and Benchmarking of a Multimodality Sensor for Robotic Manipulation With GAN-Based Cross-Modality Interpretation

Publication ID: `paper-design-and-benchmarking-of-a-multimodality-sensor-for-robotic-manipulation-with-gan-based-cross-modality-interpretation`

- **Video:** [https://www.youtube.com/watch?v=WI9QrSFpnB8](https://www.youtube.com/watch?v=WI9QrSFpnB8). Coauthor Nathan Lepora's 2025 publication entry lists the exact title, eight authors and TRO venue and explicitly links this video. Public YouTube oEmbed title is Multi-Modality Sensor for Robotic Manipulation with GAN-Based Cross-Modality Interpretation, uploaded by Nathan Lepora. Evidence: [source](https://lepora.com/papers/).

**Gaps and exclusions**

- No released implementation or original dataset download was verified. Candidate https://github.com/leen-coding/ViTacTip-Open-Source contains only LICENSE and a 115-byte image-only README, so it is not offered as implementation code.
- The legacy https://sites.google.com/view/vitactip/home URL redirected to Google Drive sign-in during direct retrieval. The tactile sensor hub says code, datasets and designs will be available later. Neither is offered as a released code/dataset resource.
- The 2024 ICRA ViTacTip paper is a distinct publication and was not substituted for this TRO paper.

**Primary sources checked**

- [https://lepora.com/papers/](https://lepora.com/papers/)
- [https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=WI9QrSFpnB8&format=json](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=WI9QrSFpnB8&format=json)
- [https://api.github.com/repos/leen-coding/ViTacTip-Open-Source/contents](https://api.github.com/repos/leen-coding/ViTacTip-Open-Source/contents)
- [https://raw.githubusercontent.com/leen-coding/ViTacTip-Open-Source/main/README.md](https://raw.githubusercontent.com/leen-coding/ViTacTip-Open-Source/main/README.md)
- [https://sites.google.com/view/vitactip/home](https://sites.google.com/view/vitactip/home)
- [https://zeyuanx0x.github.io/Tactile-Sensor-Website/](https://zeyuanx0x.github.io/Tactile-Sensor-Website/)
- [https://arxiv.org/abs/2501.02303](https://arxiv.org/abs/2501.02303)

### MagicGripper: A Mini-MagicTac Integrated Gripper Enabling Multimodal Perception in Contact-Rich Manipulation

Publication ID: `paper-magicgripper-a-mini-magictac-integrated-gripper-enabling-multimodal-perception-in-contact-rich-manipulation`

No new resource buttons proposed.

**Gaps and exclusions**

- No exact-paper released GitHub implementation, dataset download or directly linked research video was verified. The author-hosted 22-page final TASE manuscript was retrieved; its first page mentions supplementary material at the existing DOI, but it supplies no separate observed video-download destination. The GitHub URL in the manuscript refers to the third-party DIGIT sensor design, not MagicGripper. The tactile sensor hub says MagicGripper designs and datasets are planned for release; no placeholder buttons proposed.

**Primary sources checked**

- [https://cqz123321.github.io/publication/journal-paper-magicgripper/](https://cqz123321.github.io/publication/journal-paper-magicgripper/)
- [https://cqz123321.github.io/publication/journal-paper-magicgripper/index.pdf](https://cqz123321.github.io/publication/journal-paper-magicgripper/index.pdf)
- [https://doi.org/10.1109/TASE.2025.3631485](https://doi.org/10.1109/TASE.2025.3631485)
- [https://zeyuanx0x.github.io/Tactile-Sensor-Website/](https://zeyuanx0x.github.io/Tactile-Sensor-Website/)

### A Digital Twin-Driven Immersive Teleoperation Framework for Robot-Assisted Microsurgery

Publication ID: `paper-a-digital-twin-driven-immersive-teleoperation-framework-for-robot-assisted-microsurgery`

- **Project:** [https://www.intelligentrobotics-acrossscales.com/interaction](https://www.intelligentrobotics-acrossscales.com/interaction). Author lab page includes a section with the exact 2024 IROS title and Peiyang Jiang/Dandan Zhang authors. It is a multi-project research page, not a dedicated code or data release. Evidence: [source](https://www.intelligentrobotics-acrossscales.com/interaction).

**Gaps and exclusions**

- No exact-paper public GitHub repository, dataset download or standalone video destination was verified. Do not conflate with the distinct 2023 Digital Twin-Driven Mixed Reality Framework for Immersive Teleoperation With Haptic Rendering.

**Primary sources checked**

- [https://www.intelligentrobotics-acrossscales.com/interaction](https://www.intelligentrobotics-acrossscales.com/interaction)
- [https://ieeexplore.ieee.org/document/10801954](https://ieeexplore.ieee.org/document/10801954)

### Magnetic microrobots for in vivo cargo delivery: A review

Publication ID: `paper-magnetic-microrobots-for-in-vivo-cargo-delivery-a-review`

No new resource buttons proposed.

**Gaps and exclusions**

- No original code, dataset or demonstration video release was verified for this review article. Videos or datasets of studies cited by a review were not attributed to the review.

**Primary sources checked**

- [https://www.mdpi.com/2072-666X/15/5/664](https://www.mdpi.com/2072-666X/15/5/664)

### Adaptive Motion Scaling for Robot-Assisted Microsurgery Based on Hybrid Offline Reinforcement Learning and Damping Control

Publication ID: `paper-adaptive-motion-scaling-for-robot-assisted-microsurgery-based-on-hybrid-offline-reinforcement-learning-and-damping-control`

No new resource buttons proposed.

**Gaps and exclusions**

- No exact-paper public implementation, dataset download or author-linked video was verified after exact-title/author searches. Similar-titled motion-scaling papers by different authors were excluded.

**Primary sources checked**

- [https://ieeexplore.ieee.org/document/10611009](https://ieeexplore.ieee.org/document/10611009)
- [https://doi.org/10.1109/ICRA57147.2024.10611009](https://doi.org/10.1109/ICRA57147.2024.10611009)

### A versatile microchannel array device for portable and parallel droplet generation

Publication ID: `paper-a-versatile-microchannel-array-device-for-portable-and-parallel-droplet-generation`

No new resource buttons proposed.

**Gaps and exclusions**

- HOLD — potential namesake attribution: DOI 10.1002/smsc.202400005 may refer to a different Dandan Zhang affiliated with Zhejiang pathology. Leave the record entirely untouched until the owner confirms identity. No resources researched for addition and no inventory changes made.

**Primary sources checked**

- [https://doi.org/10.1002/smsc.202400005](https://doi.org/10.1002/smsc.202400005)

### One-Shot Domain-Adaptive Imitation Learning via Progressive Learning Applied to Robotic Pouring

Publication ID: `paper-one-shot-domain-adaptive-imitation-learning-via-progressive-learning-applied-to-robotic-pouring`

No new resource buttons proposed.

**Gaps and exclusions**

- No exact-paper public code repository, dataset download or recoverable video URL was verified. The University of Bristol abstract refers to a project video website but omits its URL. Coauthor Nathan Lepora's exact-paper entry links the manuscript only. The arXiv PDF contained no recoverable project URLs. No guessed video or unrelated pouring repository proposed.

**Primary sources checked**

- [https://research-information.bris.ac.uk/en/publications/one-shot-domain-adaptive-imitation-learning-via-progressive-learn/](https://research-information.bris.ac.uk/en/publications/one-shot-domain-adaptive-imitation-learning-via-progressive-learn/)
- [https://lepora.com/papers/](https://lepora.com/papers/)
- [https://arxiv.org/abs/2204.11251](https://arxiv.org/abs/2204.11251)
- [https://doi.org/10.1109/TASE.2022.3220728](https://doi.org/10.1109/TASE.2022.3220728)

### Advanced medical micro-robotics for early diagnosis and therapeutic interventions

Publication ID: `paper-advanced-medical-micro-robotics-for-early-diagnosis-and-therapeutic-interventions`

No new resource buttons proposed.

**Gaps and exclusions**

- No original public code, dataset download or research video release was verified for this review. The primary Frontiers full text exposes no Supplementary or Data availability section. Resources belonging to cited research were not reassigned to the review.

**Primary sources checked**

- [https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2022.1086043/full](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2022.1086043/full)

## Audit limitations and guardrails

- Exact paper and author matching was required. Repositories or videos found only through topic similarity were excluded.
- Dataset buttons lead to actual published file listings, not a generic repository or an empty data-layout folder. Both included Hugging Face listings are public and ungated. The Pipette listing includes a 196,204,205-byte archive. The OpticalMicrorobot listing includes separately named pose and depth archives plus CAD material.
- ViTacTip's candidate repository has no implementation files, and the tactile sensor hub announces future releases; neither was promoted as available code or data.
- OT Gym's README names a raw-image ZIP absent from the retrieved repository directory; a Dataset button was withheld.
- The likely namesake microchannel paper remains untouched pending owner confirmation.
- Review articles were not assigned resources from studies they cite.
- No publication figure, author, title, inventory record, deployment or renderer was modified by this audit. Only this provenance document was added inside the repository.

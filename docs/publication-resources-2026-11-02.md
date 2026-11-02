# Publication resources — 2 November 2026

## Published scope

The resource pass covers all 41 existing publication records. It adds 19 links: two GitHub repositories, three dataset destinations, seven direct video destinations, five project/research pages and two supplementary-material links. One supplement is a publisher landing page that explicitly lists a video.

The resulting directory contains ten GitHub repository links, three dataset links and eleven video resources across nine papers. Three existing YouTube `videoId` values are retained and source-checked. Existing `Code` labels for GitHub repositories are made explicit as `GitHub`.

Publication titles, authors, years, publication status, research-theme assignments, summaries and original figure metadata are unchanged. The publication inventory is unchanged. Resource buttons are compact and use the established Imperial Blue and purple palette.

## Main resource additions

| Paper | Added resources |
| --- | --- |
| TacVerse | [GitHub benchmark code](https://github.com/LannWei/Tactile_Database), [Hugging Face dataset](https://huggingface.co/datasets/Lan-2025/Tactile), [author project](https://lannwei.github.io/Tactile_Database/) |
| Coarse-to-Fine Learning for Multi-Pipette Localisation | [Hugging Face dataset](https://huggingface.co/datasets/Lan-2025/Pipette/tree/main), alongside the existing code, project and video |
| A Dataset and Benchmarks for Optical Microrobot Pose and Depth Perception | [Hugging Face dataset](https://huggingface.co/datasets/Lan-2025/OpticalMicrorobot/tree/main), alongside the existing code and project |
| Bi-Touch | [Official GitHub branch](https://github.com/yijionglin/tactile_gym/tree/Bi-Touch), a clearly labelled bi-pushing demonstration, and [author project](https://sites.google.com/view/bi-touch/) |
| PixelTac / in-sensor computing tactile sensor | Publisher supplementary movies S1, S2 and S3, plus the supplementary PDF |
| Visuo-haptic optical-microrobot digital twin | Author-README-linked demonstration video; canonical repository URL |
| ViTacTip / multimodality sensor with GAN interpretation | Exact-paper video linked by coauthor Nathan Lepora's publication list |
| Distributed force control for optical microrobots | Publisher-linked supporting MP4 |
| Data-driven microscopic pose and depth estimation | Publisher page listing Video S1, accurately labelled `Video supplement` |

## Evidence and limits

The detailed per-paper evidence and unsuccessful searches are recorded in:

- [Recent-paper resource audit](publication-resources-recent-2026-11-02.md)
- [Middle-period resource audit](publication-resources-middle-2026-11-02.md)
- [Earlier-paper resource audit](publication-resources-earlier-2026-11-02.md)

Author project pages, repository READMEs, publisher supporting-information sections and institutional/coauthor publication lists establish the resource-to-paper associations. Source association is distinguished from playback or download testing. The resource audit did not download and inspect whole datasets or reproduce the research code.

TacVerse's dataset landing page is public, but accessing its files requires Hugging Face sign-in and acceptance of its access conditions. This is recorded in its description and access note. The Pipette and OpticalMicrorobot datasets have publicly listed data archives. A model-weight directory, a local-data path in example code, or data mentioned only in a manuscript is not treated as a released dataset.

Some direct publisher video downloads returned 403 or could not be played through automated retrieval. Their exact links were obtained from primary supporting-information sections. The ACS entry deliberately links the publisher page containing Video S1; a direct AVI endpoint was not guessed. The unusual `smll202003375` prefix in the Wiley optical-tweezer MP4 filename is present in that exact article's supporting-information table and has not been rewritten.

The existing magnetic-navigation video remains supported by the supplied archive and the lab's public YouTube metadata, which identifies the ICRA 2025/Yudong presentation. Its full paper title and visual contents were not independently confirmed. This is a narrower verification than the exact-title or author-embedded video checks for other entries.

No public-download buttons are added for request-only data or empty implementation repositories. Resources belonging to cited studies, later follow-up papers, third-party sensors or namesakes are not reassigned. The microchannel-paper attribution hold remains unchanged.

Two newly discovered project URLs, linked from author READMEs, were omitted from this release because their destination availability could not be verified: the visuo-haptic project at `zongcai23.github.io/digital-twin-visuo-haptic/` and the sim-to-real project at `icra2026-sim2real.pages.dev/`. Their verified GitHub resources remain available.

## Rendering and compatibility

The current renderer groups paper/project links before GitHub, Dataset and Video buttons, uses descriptive accessible link names, and removes duplicate URLs including YouTube short/watch aliases. Existing `videoId` links are rendered once and are not also inserted into the shared links array, avoiding duplicate buttons in cached older releases.

The video filter recognises explicit video links, legacy YouTube IDs and accurately labelled publisher pages with `mediaType: video`. All original paper figures and the four research-theme groups are retained.

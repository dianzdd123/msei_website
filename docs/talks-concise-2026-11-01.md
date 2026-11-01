# Concise invited-talk archive — 1 November 2026

## Requested presentation

The active release-g page restores a concise academic archive. Talk titles and the conference, workshop or university host are the primary information. Month and location are subordinate. The page uses compact year groups and simple year links, without a large hero, topic filters, research-context blurbs, explanatory diagrams or a promotional footer.

The original UK Robot Manipulation Workshop programme appears exactly once as an authentic small thumbnail. It is 140px wide on desktop and no more than 96px on phones. The other 16 entries are text-only. No publication image or conceptual illustration is reused in this page.

## Files

- `assets/TalksEditorial.20261101g.js`
- `assets/talks-editorial.20261101g.css`
- `data/talks-content.json`

## Content preservation and compatibility

All 17 event records preserve their title, organiser, month and location exactly relative to release f. Stable identifiers remain for anchor links. The existing programme image has descriptive alternative text. Dates use an explicit UTC month formatter.

The shared JSON retains release-f `topics`, `heroFigure`, `figure`, `topicId`, `researchConnection` and `relatedLinks` fields for cached-client compatibility. The release-g renderer ignores those fields completely; it reads only the original event metadata and optional authentic `image`. Previous versioned assets also remain available for cached clients.

## Static verification

- The new renderer passes `node --check`.
- The JSON parses; all 17 event records and their four event-fact fields match the previous release.
- Exactly one authentic event image is used; its local file exists.
- The active renderer contains no hero image, concept-diagram or research-connection rendering.
- The stylesheet defines a 140px desktop thumbnail and 96px phone thumbnail.

Root integration handles browser review and publication.

## Integrated browser verification

The root browser session verified the release-g page after integration. The desktop archive shows 17 event rows and one 140px programme thumbnail, with titles and venues visually prominent. In the 390px phone harness, the document and scroll widths both measured 382px, and the programme thumbnail measured 96px. A screenshot confirmed readable title/venue/date hierarchy and no horizontal overflow. The source-agent browser-selection timeout did not affect verification in the root browser session.

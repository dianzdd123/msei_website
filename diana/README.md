# Diana — PA to Dandan

A public-facing Deep Learning course companion for Dr Dandan Zhang's students, hosted as static files inside the existing MSEI Lab GitHub Pages site.

**Website:** https://zhangrobotics.com/diana/  
**Source:** https://github.com/dianzdd123/msei_website/tree/main/diana

## What works immediately

- Public, responsive student interface with questions, learning topics and three tutoring modes
- Searchable, independently editable curated course content
- Built-in, deterministic source-linked guidance when the AI service is disabled
- No API key, user identity or chat history persisted by the static frontend
- Links to existing course guides and tutorials
- An optional edge-worker implementation for real generative AI responses

**Current limitation:** This public deployment is a *guided knowledge-base assistant*, not a connected LLM chatbot until the optional worker is deployed and enabled. The user-facing status line explicitly distinguishes them. The current course code repository is private, so links to those files may require GitHub access. Make course resources public only after reviewing their content and release dates.

## Updating course materials

For the curated knowledge base, edit [data/knowledge.json](data/knowledge.json) directly on GitHub and commit. Add or revise topic entries (id, title, category, description, question, keywords, answer, sources); reload the site. No rebuild is needed.

For the future full handbook:
1. Review the full approved handbook against the simplified handbook before publishing assessment facts.
2. Add only **approved, student-visible** excerpts/FAQ entries to `data/knowledge.json`, with precise source titles, URL and where useful section number.
3. Link to the downloadable full PDF if it has an approved public release URL; don't paste private or unreleased files into the public repository.
4. If two handbooks disagree, the **full handbook prevails**; Canvas clarifications supersede both.
5. Verify the new answers and working source links after deployment. This static site does not automatically ingest PDF uploads or retrain a model.

The simplified handbook shared in the conversation is labelled **released Tuesday 10 November 2026**. As of 7 November, its assessment details are intentionally **not yet published** in the Diana knowledge base. For future inclusion, the simplified version states that the full handbook prevails over it. When authorised for release, verify the policy details against the latest full handbook and Canvas before updating this file.

## Enabling live AI safely (optional)

GitHub Pages cannot securely hold server-side API credentials. Do **not** place an API key in HTML, JavaScript, config.json, or GitHub Pages files.

The optional [Cloudflare Worker](backend/worker.js) uses OpenAI Responses API server-to-server. Before enabling:

1. Create a Cloudflare Worker with an HTTPS public URL.
2. Bind a Cloudflare KV namespace under the exact binding name `RATE_LIMIT`.
3. Set encrypted Worker secrets `OPENAI_API_KEY` and `TURNSTILE_SECRET` in Cloudflare, not GitHub.
4. Create a Cloudflare Turnstile site key for the exact hostname `zhangrobotics.com`. Verify the secret and site key belong to the same widget.
5. Deploy the Worker code, add Cloudflare WAF rate limiting or equivalent stronger throttling, and test on a non-production domain. Ensure any institution-required privacy, safeguarding, accessibility, AI and student-data approvals are complete.
6. Update [config.json](config.json) to set `model_service_url` to the public HTTPS worker URL, `turnstile_site_key` to the **public** site key, and `allow_live_ai` to `true`. Do not publish the secret.
7. Confirm a real answer, source links, invalid Turnstile rejection, and failure fallback from a clean browser.
8. Monitor usage and costs in the AI provider and Cloudflare dashboards. The worker does not deliberately store conversation logs but providers/platform logs may still apply.

### Security and limitations

- The response backend checks allowed Origin and Turnstile, enforces input limits and a coarse hourly IP-based KV limit; browser Origin checks alone are not authentication.
- Students should not submit personal data, assessment submissions or confidential information to public AI.
- Answer links are a topical reference list, **not proof that every generated claim was verified**. In production, improve retrieval with section-level excerpts and controlled citation generation; avoid making unsupported policy claims.
- All substantive assessment instructions should be manually approved and versioned.
- Cloudflare KV rate limits are eventually consistent and are **not** a substitute for edge WAF/rate rules.
- Course repository links require appropriate student access until the repository is deliberately made public.

## Repository layout

- `index.html`, `styles.css`, `app.js`: standalone static site.
- `data/knowledge.json`: editable topic notes, questions, sources and policy hierarchy.
- `config.json`: public, non-secret runtime configuration.
- `backend/worker.js`: optional deployable AI endpoint (requires separate Cloudflare account configuration).
- `icon.svg`: Diana favicon.

Diana complements the module team; she never makes official academic or administrative decisions.

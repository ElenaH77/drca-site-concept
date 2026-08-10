# DRCA Website Prototype

Working prototype of a rebuilt delraycitizens.org for Del Ray Citizens Association board review.

**Live site: https://elenah77.github.io/drca-site-concept/**

Built with [Astro](https://astro.build). All 300+ posts and minutes migrated from the current
WordPress site. Pushing to `main` auto-deploys via GitHub Actions in about a minute.

## Editing (the point of this prototype)

Content is editable at **https://app.pagescms.org** — sign in with GitHub, open this repo.
No code, no git, just forms:

- **Homepage: Featured Event** — the banner at the top of the homepage. Six fields. Toggle it off
  and the homepage gracefully reflows.
- **News & Minutes** — every post, filterable. Add one, hit save, it's live in a minute.
- **Event Pages** — the recurring-events directory (House & Garden Tour, GardenFest, ...).

## Structure

- `src/content/news/` — 300+ markdown posts (minutes are posts with category "Meeting Minutes")
- `src/content/events/` — one file per recurring event
- `src/data/featured.json` — the homepage featured band
- `src/data/upcoming.json` — placeholder for the Google Calendar feed integration
- `.pages.yml` — the Pages CMS editing interface definition

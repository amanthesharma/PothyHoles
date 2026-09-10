# PothyHoles

A mobile-first civic reporting dashboard for safer Indian streets. The initial release deliberately focuses on potholes: citizens can find local report trends and start a quick pothole report from a browser.

## Included in this prototype

- A responsive landing page with a clear pothole-reporting call to action.
- National community totals for reported, verified, and repaired potholes.
- An interactive, client-side area search and district filter in the local-report map panel.
- State/city report summaries and a plain-language three-step reporting explanation.
- A short report form with location and severity fields, including a submitted confirmation state.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite in a web browser.

## Next steps before a public launch

1. Add a PostgreSQL/PostGIS data store for real reports and geographic filtering.
2. Add secure image uploads, validation, moderation, duplicate detection, and rate limits.
3. Add verified road-authority routing and a public status/audit timeline.
4. Localize the interface, beginning with Hindi and the language of the pilot city.

# Finn Chat Help

A lightweight, accessible command guide for Finn's Twitch chat, with a separate
public-safe streamer/operator microphone reference.

The site is intentionally:

- easy to search on phones and desktops;
- usable with a keyboard and screen reader;
- free of third-party scripts, fonts, trackers, and network requests;
- organized around viewer and moderator tasks;
- deployable as a plain GitHub Pages site.

## Files

- `index.html` — semantic command guide and deep links
- `voice.html` — operator-only voice guide, separate from viewer chat commands
- `styles.css` — responsive visual design
- `app.js` — local search and access-level filters
- `.nojekyll` — direct static-file publishing

## Local preview

Serve this directory with any static file server, then open the local URL:

```powershell
npx serve .
```

Opening `index.html` directly also works for basic review.

## Publishing

GitHub Pages is configured to publish from the root of the `main` branch.

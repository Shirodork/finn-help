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

## Updating commands

Keep every alias beside its primary command, use plain language, and preserve
the existing access labels. After editing, check search, keyboard focus,
small-screen layout, internal anchors, and the empty-results state.

Keep the voice page's version label aligned with shipped Finn commands. Voice
examples are never viewer-chat commands. Explain independent permissions,
arming, confirmation and interpretation-only testing without publishing runtime
state, private configuration, dashboard/token URLs, transcripts or hidden
operator capabilities. Clearly separate optional conversational follow-ups from
action permissions, and the one separately enabled Night Sky-on → Finn AFK-on
routine from other planned command chains. That routine uses one immutable
confirmation, preflights both parts, reports partial outcomes without automatic
rollback, and never replays after restart. Keep this documentation companion
unmerged until its core release is approved. The
separate scoped Night Sky clarification offers only on/off, once, without
renewing the original request deadline or bypassing confirmation. It is not
action authority for ordinary conversational follow-ups. Keep its examples and
deployment prerequisites aligned with the core release; do not publish private
configuration or runtime question state. The
voice page is static and reuses `styles.css`; it
does not need the chat search script or external services.

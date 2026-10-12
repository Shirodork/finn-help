# Contributor and agent guidance

Read this before changing the command guide. Keep this guidance in `AGENTS.md`,
not in `README.md`, `index.html` or `voice.html`. The README is a short public
introduction; the published guides are for viewers and operators, not developers.
This file is repository-local guidance, not secret storage: never put credentials
or private runtime information here.

## Release and accuracy rules

Verify each documented command against the current approved Finn implementation
and `docs/COMMANDS.md` in the Finn repository. The notes below describe existing
release contracts, not proof of current deployment. Remove obsolete release
instructions when verified; do not copy them into public help. Clearly label
planned features as planned, never as usable commands.

Use concise, friendly wording, preserve access labels, and distinguish setup,
preview, execution and confirmation. Update examples and help whenever shipped
behavior changes. Test search, anchors, keyboard navigation, narrow layouts and
empty results. Keep the site static and public-safe.

## Updating commands

Fresh Workshop investigations are a separate default-OFF voice permission.
Keep their fixed three recipes and immediate read-only launch distinct from
cached conversational diagnostics and separately paid AI analysis. Authentication,
fresh wake, arming, default persona, live/LAB and enabled private dashboard remain
required. Normal wake/STT/optional TTS costs remain; preserve no-repair and
cancellation/draining language. Publish this companion only after its matching
Finn core PR is approved and merged. Do not put these maintenance notes in README.

The voice reliability companion documents the optional Always armed preference
and either-order Night Sky + takeover wording with “and”. Keep it aligned with
its matching Finn release: manual arming remains the default, explicit Disarm
pauses automatic arming for the bot run, and readiness, authentication, a fresh
wake, individual permissions and confirmation remain required. Mention order
does not change the approved Night Sky-first plan; explicit contrary sequencing
is not silently reordered. No runtime data or private URLs are published here.

The approved stream preset companion adds Starting Soon, Crafting Focus,
Wrap-up and exact recorded-run restoration. The optional scene/music extension
keeps those four voice phrases and must match an approved core release. The public page describes configurable
defaults and independent permissions, never actual runtime configuration,
dashboard URLs, transcripts, run IDs or private control revisions. Presets share
the dashboard's phase/quiet/optional scene/music ownership, require detected live stream and
fresh authorized/armed wakes, and keep the existing confirmation preference.
Scene and MediaShare playlist steps are saved explicitly per preset and default
blank/OFF. They are not arbitrary spoken scene/URL commands and never end a
stream. Readiness refresh and saving execute nothing; preview can import/warm
the first song without playing it. Apply phase/quiet/music/scene, restore in
reverse while preserving later manual choices and original quiet deadlines.
The same primary MediaShare source must remain available/audible in every
approved scene. Original voice authority still expires at 30 seconds, including
cold playlist preparation; there is no automatic retry/renewal.
Restart/stream end forgets process-local routine ownership, while held routine
music can remain durable. Explain separate private reviewed offline recovery
without publishing IDs or evidence: only the orphaned routine playlist, no
unrelated Night Sky recovery and no automatic OBS restoration after restart.
No new scripts, trackers, external assets or chat-search changes are needed.

Read-only capability help is documented separately from action requests. It needs
an authenticated fresh wake and Runtime Awareness, not arming. The guide publishes
examples and setup concepts only; no actual local permission/readiness data is
published on this site. Spoken help still appears in stream audio/captions, but
not Twitch echo, shared assistant history or co-host seeds. It opens no follow-up
window. Verify the matching Finn release is approved before publishing this companion.

Keep every alias beside its primary command, use plain language, and preserve
the existing access labels. After editing, check search, keyboard focus,
small-screen layout, internal anchors, and the empty-results state.

Keep the voice page's version label aligned with shipped Finn commands. Voice
examples are never viewer-chat commands. Explain independent permissions,
arming, confirmation and interpretation-only testing without publishing runtime
state, private configuration, dashboard/token URLs, transcripts or hidden
operator capabilities. Clearly separate optional conversational follow-ups from
action permissions, and the one separately enabled Night Sky-on → Finn AFK-on
routine and its separately enabled recorded-break return from other planned
command chains. Return permission must be enabled before the break; only actual
new successful changes are owned, never pre-existing or later manual choices.
Its record is process-local, fresh wake/arming/confirmation still apply, and
reveal-drain acceptance is not completed restoration. That routine uses one immutable
confirmation, preflights both parts, reports partial outcomes without automatic
rollback, and never replays after restart. Verify the matching core release is approved before publishing this companion. The
separate scoped Night Sky clarification offers only on/off, once, without
renewing the original request deadline or bypassing confirmation. It is not
action authority for ordinary conversational follow-ups. Keep its examples and
deployment prerequisites aligned with the core release; do not publish private
configuration or runtime question state. The
voice page is static and reuses `styles.css`; it
does not need the chat search script or external services.

Read-only MediaShare/OBS questions require Runtime Awareness plus the existing
authenticated, armed default-Finn microphone controls and a fresh wake. They
explain selected cached coded evidence, never grant repair/probe authority,
consume pending confirmations or prove actual stream output. Their private
Doctor preview is free; a spoken reply retains usual voice/model costs. Verify the scoped-diagnostics core release is approved before publishing this companion. No runtime evidence, tokens or private URLs belong on this site.

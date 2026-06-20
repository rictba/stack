# Stack

A private, installable peptide & supplement tracker. Pure HTML/CSS/JS — no
build step, no accounts, no server. All data lives on your device in
`localStorage`, and it works fully offline as a PWA.

## Features

- **Today** — your scheduled doses for the day, grouped by AM / Midday / PM.
  Tap to check off (timestamped); inventory auto-decrements. Daily progress bar.
- **Protocol** — add/edit each peptide or supplement: dose, timing, and
  schedule (Daily, a days-on/off **Cycle**, or specific **Weekly** days).
- **Inventory** — doses remaining per item, low-stock warnings, one-tap restock.
- **Journal** — daily weight, sleep, mood, and free-text notes, with history.
- Browse any day with the date arrows in the header.

## Run / develop

It's static — just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Deploy (GitHub Pages)

The manifest and service worker are scoped to `/stack/`, matching a project
Pages site at `https://<user>.github.io/stack/`. Enable Pages on this repo
(Settings → Pages → deploy from branch), then install it from your phone's
browser via "Add to Home Screen".

## Data

Everything is stored locally under the `stack.data.v1` key. Clearing your
browser data, or uninstalling the PWA, removes it — there is no cloud backup.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal website (Jacob Haydel — PhD, Silicon Design Engineer at AMD, formerly computer
graphics at the University of Utah), served via GitHub Pages at www.jacobhaydel.com (see `CNAME`).
There is no build system, package manager, or test suite — it's plain hand-written HTML/CSS
deployed as-is.

## Design system

The site's visual design is governed by a personal style guide kept at `~/Desktop/style-guide.html`
(outside this repo — it is the design source, not a page the site serves). It specifies an
achromatic "print aesthetic rendered on a screen": four neutral tokens (`--ink #1E1E1E`,
`--paper #FAFAFA`, `--grey #737373`, `--hair #D0D0D0`), four typefaces with non-overlapping jobs
(Archivo/display, Inter/UI, Charis SIL/reading, Consolas/code), a 24px baseline spacing scale, two
rule weights (structural ink, internal hairline), zero border-radius, no shadows, and no decorative
color — color is spent only in code syntax and measured chart data, neither of which this site uses.

**When touching CSS or markup, match that guide rather than inventing a new value.** Re-read
`~/Desktop/style-guide.html` before adding anything the current classes don't already cover — most
needs (a labelled row, a section head, a token table) already have a class in `stylesheets/main.css`
lifted verbatim from the guide. If the guide has since changed, prefer updating the site to match it
over drifting away from it.

## Working with the site

- No install/build/lint/test commands exist. Edit the `.html`/`.css` files directly.
- To preview locally, open the HTML files in a browser directly, or serve the directory with any static file server (e.g. `python3 -m http.server`).
- Deployment is automatic: GitHub Pages serves whatever is pushed to the default branch, so committing/pushing to `master` is equivalent to publishing.

## Structure

- **`index.html`** is the entire site — a single scrolling page with a sticky numbered section index
  (`00 Research`, `01 CV`, `02 Contact`) matching the style guide's own `.idxbar` convention.
  `scripts/nav.js` is a scrollspy (also lifted from the guide) that highlights the active section
  link as the page scrolls; it degrades gracefully with JS disabled since the index bar is real
  anchor links.
- **`resume.html`, `research.html`, `contact.html`** are thin redirect stubs (`<meta http-equiv="refresh">`
  + a visible fallback link) pointing to the matching anchor on `index.html`, kept only so old
  inbound links and citations don't 404 — GitHub Pages has no server-side redirects. Don't add real
  content to these; extend `index.html` instead.
- **`stylesheets/main.css`** is a single stylesheet: the style guide's tokens and shared components
  copied verbatim (see the file's own section comments for what's copied vs. site-specific), plus a
  short site-specific tail composing them (portrait frame, wordmark, list-row author lines). There
  is no per-page CSS anymore — don't reintroduce it.
- `images/` holds the profile photo (`profile.jpg`, the untouched original; `profile-web.jpg`, a
  900px-wide resize actually used on the page — regenerate this the same way if the original
  changes, don't hand-edit it) and resume PDFs (`Jacob-Haydel-CV.pdf` is the one linked from the CV
  section; `Jacob-Haydel-CV-2023.pdf` is an older copy, check before removing). `images/icons/` holds
  unused legacy PNGs from the old nav — the current contact list is plain text links, not icons.
- The only external CSS is Google Fonts (Archivo, Inter, Charis SIL) — no Typekit, w3.css, or
  Bootstrap. Every page's `<head>` loads the same three font links plus `main.css`.

## Conventions to preserve when editing

- Keep the `<meta name="viewport">` tag present on every page.
- Reuse an existing class from `stylesheets/main.css` before writing a new one; if the style guide
  doesn't have a matching component, compose one from existing classes rather than inventing new
  visual language (see the "Site-specific" section at the bottom of `main.css` for the pattern).
- The CV on `index.html#cv` is typeset from `Jacob-Haydel-CV.pdf` — if the PDF is regenerated with
  new content, update the HTML to match (and vice versa); they're meant to stay in sync but nothing
  enforces it automatically.

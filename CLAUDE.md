# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal website (Jacob Haydel — PhD student in computer graphics, University of Utah), served via GitHub Pages at www.jacobhaydel.com (see `CNAME`). There is no build system, package manager, or test suite — it's plain hand-written HTML/CSS deployed as-is.

## Working with the site

- No install/build/lint/test commands exist. Edit the `.html`/`.css` files directly.
- To preview locally, open the HTML files in a browser directly, or serve the directory with any static file server (e.g. `python3 -m http.server`).
- Deployment is automatic: GitHub Pages serves whatever is pushed to the default branch, so committing/pushing to `master` is equivalent to publishing.

## Structure

- Four pages, each self-contained with duplicated nav markup (no templating/includes): `index.html` (home), `resume.html`, `research.html`, `contact.html`.
- Each page has a matching stylesheet in `stylesheets/` (`main.css` is shared/global; `resume.css`, `research.html` uses `gallery.css`, `contact.css` are page-specific) — pages link `main.css` plus their own page CSS.
- `images/` holds both images (`profile.jpg`, `icons/`) and resume PDFs (multiple similarly-named PDFs exist — check which one `resume.html` actually references via its `<object data="...">` before changing/removing any).
- Pages pull external CSS from CDNs in `<head>`: w3.css (w3schools), an Adobe Typekit font kit, and (on `research.html` only) Bootstrap. There is no local vendoring/fallback.

## Conventions to preserve when editing

- Every page repeats the same `<div class="topnav">` block with links to all four pages — when adding a page or changing nav links/labels, update it in all four HTML files.
- Keep the `<meta name="viewport">` tag present when editing/adding pages (currently only on `research.html` — worth adding to the others for consistency if touching them).
- New page-specific styles go in a new/matching `stylesheets/<page>.css` file rather than growing `main.css`, matching the existing per-page CSS pattern.

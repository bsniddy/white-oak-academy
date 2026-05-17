# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for White Oak Children's Academy — a preschool in Schererville, Indiana. No build step, no framework, no dependencies. Hosted on GitHub Pages at `https://bsniddy.github.io/white-oak-academy/`.

## Development

Open any `.html` file directly in a browser, or serve locally with:
```bash
npx serve .
```

Deploy by pushing to `main` — GitHub Pages auto-deploys.

## Architecture

**Single CSS file:** `css/styles.css` controls all visual styling via CSS custom properties at the top of the file. To change colors or spacing site-wide, edit the `:root` variables. Current brand colors: `--green-mid: #2596be` (primary blue), `--amber: #402d26` (brown accent from logo).

**Single JS file:** `js/main.js` handles three things: mobile hamburger nav toggle, FAQ accordion expand/collapse, and contact form client-side validation.

**Shared header/footer:** Each page repeats the full header (sticky nav with hamburger) and footer (3-column with contact info, quick links, Facebook SVG). There is no templating — edits to nav or footer must be made in all 8 HTML files.

**Images:**
- `images/logo.jpg` — school logo (sourced from original Wix site)
- `images/hero/` — hero/background images (`home-hero.avif`, `about-hero.avif`)
- `images/gallery/` — classroom photos used on home cards and about page gallery

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, announcement banner, 3 photo cards, email CTA |
| `about.html` | About — alternating image/text rows + gallery grid |
| `programs.html` | Programs — Acorns, Oaks, Mighty Oaks, Seedlings, Summer |
| `staff.html` | Staff — cards grouped by Leadership / Teachers / Assistants |
| `news-events.html` | News & Events — announcements, registration info |
| `contact.html` | Contact — info + validated contact form |
| `faq.html` | FAQ — JS-powered accordion |
| `faq-forms.html` | FAQ & Forms — registration PDF download + FAQ summary |

## Key Content Facts

- Registration PDF: `registration.pdf` in root — linked from nav and multiple pages
- Facebook: `https://www.facebook.com/whiteoakpreschool/`
- Contact: `whiteoakchildrensacademy@gmail.com` / 219.322.6400 ext. 391
- Address: @ Crossroads Community Church, 1538 Janice Drive, Schererville, IN 46375
- The contact form is front-end only (no server). For form submission on GitHub Pages, wire up [Formspree](https://formspree.io) by adding `action="https://formspree.io/f/YOUR_ID" method="POST"` to the `<form>` tag in `contact.html`.

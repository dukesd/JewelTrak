# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository contains the **JewelTrak** marketing website — a multi-page static site for a SaaS product serving the diamond, jewelry, and watch industry. The production app lives at `https://cloud.jeweltrak.com` (separate repo); this site will be hosted at `https://www.jeweltrak.com`.

There is also a standalone `tictactoe.html` game at the repo root (unrelated to JewelTrak).

## Running the site

No build system or dependencies. Open any HTML file directly in a browser:

```bash
start jeweltrak/index.html
```

## JewelTrak Site Structure

```
jeweltrak/
├── index.html       # Landing page (hero, features, showcase, testimonials, CTA)
├── pricing.html     # 3-tier plans + add-on modules, annual/monthly toggle
├── signup.html      # Lead capture / free trial signup form
├── about.html       # Company story, values, contact info
├── css/styles.css   # All styles (shared across pages via single stylesheet)
└── js/main.js       # Navbar scroll, mobile menu, pricing toggle, form handling, scroll-reveal
```

## Key Design Decisions

- **Color palette**: Navy (`#0a1628`) + Gold (`#c9a84c`) — chosen to feel premium/jewelry-trade appropriate
- **No framework or bundler**: pure HTML/CSS/JS for simplicity and fast loading
- **Responsive**: CSS grid layouts with breakpoints at 1024px and 768px; hamburger menu on mobile
- **Pricing**: Professional annual plan (~$292/mo) targets ~$3,500/yr. Monthly/annual toggle in `js/main.js` `prices` object
- **Forms**: signup form submits client-side only (shows success message) — needs backend integration

## Contact Info (owner)

- Email: david@jeweltrak.com
- Phone: (863) 991-0396

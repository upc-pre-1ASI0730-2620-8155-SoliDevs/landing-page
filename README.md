# Tri-Aid — Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E.svg?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222.svg?logo=github)

Public landing page of **Tri-Aid**, the assisted hospital triage platform built by team **SoliDevs** (UPC — 1ASI0730, 2026-20 semester). Its goal is to present the product to clinics and hospitals and take visitors into the web application.

**Live site:** https://upc-pre-1asi0730-2620-8155-solidevs.github.io/landing-page/

## What the page includes

- **Hero** — value proposition with role-based entry buttons (health staff / patient portal).
- **About and video** — the problem of manual triage in emergency rooms and how Tri-Aid solves it.
- **Animated statistics** — triage metrics with count-up numbers on scroll.
- **Features** — automatic vital-sign capture, NT-158 assisted classification, informed referral, real-time alerts and per-shift reports.
- **Plans** — pricing in soles for the **Esencial** and **Profesional** plans; their buttons open the application's registration wizard with the plan already preselected.
- **Team and contact** — the SoliDevs members and the final conversion section.
- **Terms and privacy** — legal pages for the subscription flow (`terms.html`, `privacy.html`).

## Languages

All copy lives in a bilingual **Spanish (es-419) / English** dictionary in `js/i18n.js`. HTML text is referenced through `data-i18n` attributes and the language switches from the navigation bar without reloading the page.

## Technologies


- Semantic **HTML5** with accessible labels and a skip-to-content link.
- **CSS3** design tokens, responsive grid/flex layouts and reduced-motion support.
- **Vanilla JavaScript** in ES modules — no frameworks and no build step.
- Bilingual **ES-419 / EN** copy switcher, **GitHub Pages** static hosting.
- External library: `smoothie.min.js` for smooth scrolling.

## Running it locally

No installation needed. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deployment

The site is published with **GitHub Pages** from the `main` branch:

```bash
git checkout main
git merge develop   # reviewed changes from develop
git push origin main
```

## Repository structure

```
landing-page/
├── index.html        # the full landing page
├── terms.html        # terms and conditions
├── privacy.html      # privacy policy
├── css/styles.css    # styles and design tokens
├── js/
│   ├── i18n.js       # ES/EN copy dictionary
│   ├── main.js       # navigation, language switcher and page behaviors
│   ├── countup.js    # animated statistics counters
│   ├── cta-anim.js   # call-to-action animations
│   └── team-anim.js  # team section animations
└── img/              # team portraits and brand imagery
```

## Workflow

GitFlow with Conventional Commits: `feature/<topic>` branches from `develop`, reviewed `--no-ff` merges into `develop`, and `main` only receives stable milestones (that is what GitHub Pages publishes).

---

SoliDevs — UPC 2026-20

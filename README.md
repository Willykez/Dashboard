# Profile Dashboard (React)

A rich, animated, multi-screen personal dashboard built with React — five
screens, a hash router, light/dark theming, scroll reveals, count-up stats,
animated skill bars, a project modal, and a layout that adapts between a
desktop sidebar and a mobile bottom nav.

## Screens

- **Dashboard** — hero profile card, animated stats, featured projects, recent activity
- **Projects** — filterable project grid with a detail modal
- **Activity** — full timeline of updates
- **About** — bio + animated skill bars grouped by category
- **Contact** — message form (static demo) + social links

## Stack

Plain React (JSX) bundled with [esbuild](https://esbuild.github.io/) — no
heavy framework or CLI needed. Animations and theming are done with CSS
(keyframes, transitions, `IntersectionObserver`-triggered reveals) rather
than an extra animation library, so the dependency list stays small:
`react`, `react-dom`, `react-icons`, and `esbuild` as the only dev dependency.

Routing is a ~15-line hash router (`#/projects`, `#/about`, …), which means
the built site works on any static host with zero server configuration —
including GitHub Pages.

## Structure

```
src/
  main.jsx            Entry point
  App.jsx              Layout + router wiring
  hooks/                useHashRoute, useTheme, useReveal, useCountUp
  components/           Sidebar, BottomNav, TopBar, ProjectCard, Modal, ...
  screens/              Dashboard, Projects, Activity, About, Contact
  data/profile.js       All content — edit this to make it yours
  styles/index.css      Design tokens (light + dark), layout, animations
public/index.html        HTML shell
scripts/build.mjs        esbuild build script
```

## Edit your info

Everything shown on the site comes from `src/data/profile.js` — name,
bio, stats, skills, projects, activity feed, and social links. No
component code needs to change to update the content.

## Run locally

```
npm install
npm run build     # -> dist/
npm run serve     # serve dist/ locally
```

For live rebuilds while editing:

```
npm run watch
```

## CI

- `.github/workflows/build.yml` — installs deps and builds on every push/PR,
  uploading `dist/` as a downloadable artifact.
- `.github/workflows/deploy-pages.yml` — builds and publishes `dist/` to
  GitHub Pages on pushes to `main` (enable Pages in repo Settings → Pages →
  Source: GitHub Actions).

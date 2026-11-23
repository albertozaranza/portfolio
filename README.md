# Alberto Zaranza — Portfolio

Personal site of Alberto Zaranza, Senior Mobile Engineer.
Live at **https://albertozaranza.github.io/portfolio/**

## Stack

- [Astro 4](https://astro.build) — static output, zero client framework
- Scoped CSS with design tokens (`src/styles/global.css`), light/dark themes
- ~5 kB of vanilla TypeScript for interactions (`src/scripts/motion.ts`)
- `astro:assets` for responsive, optimized images
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Structure

```
src/
├── data/profile.ts        # Single source of truth for all content
├── components/
│   ├── Hero / Impact / Work / Approach / Experience / About / Contact
│   ├── CaseStudy.astro    # One component, four layouts (feature, wide, inverse, split)
│   └── diagrams/          # Schematic, theme-aware diagrams for each case
├── layouts/BaseLayout.astro  # SEO, Open Graph, JSON-LD, theme bootstrap
├── scripts/motion.ts      # Reveal, counters, nav, tabs, theme, copy-to-clipboard
└── styles/global.css      # Tokens, base styles, utilities
```

## Editing content

Everything lives in `src/data/profile.ts`:

- `identity.availability` — status line shown in the hero and contact sections.
- `cases[].media` — add real screenshots (`{ src, alt }`) and they render next to the diagram.
- `cases[].metric` / `links` — optional; omitted slots are not rendered.

**Résumé download:** place the PDF at `public/alberto-zaranza-cv.pdf`.
The link appears automatically on the next build; without the file, no broken link is rendered.

## Commands

| Command        | Action                              |
| -------------- | ----------------------------------- |
| `pnpm install` | Install dependencies                |
| `pnpm dev`     | Dev server at `localhost:4321/portfolio` |
| `pnpm check`   | Type-check `.astro` and `.ts` files |
| `pnpm build`   | Production build to `./dist/`       |
| `pnpm preview` | Preview the production build        |

## Accessibility & motion

- Semantic landmarks, skip link, accessible tabs (arrow keys) and accordion on mobile.
- All content is readable without JavaScript.
- `prefers-reduced-motion` disables animations and count-ups.

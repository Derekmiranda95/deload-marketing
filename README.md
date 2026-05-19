# deload-marketing

The public marketing site for deload (https://deloadapp.io). Standalone Astro
5 + Tailwind project — no Clerk, no `@workspace/api-client-react`, no app
imports. It must remain deployable on its own.

## Run locally

Inside Replit, this artifact runs as the `deload-marketing` workflow at
`/deload-marketing/`. Manually:

```sh
pnpm --filter @workspace/deload-marketing run dev
```

Production build:

```sh
pnpm --filter @workspace/deload-marketing run build
```

## Routes

`/`, `/features`, `/pricing`, `/about`, `/contact`, `/privacy`, `/terms`.

A sitemap is produced at build time (`/sitemap-index.xml`) by
`@astrojs/sitemap`. `public/robots.txt` allows all crawlers and points at it.

## Where to swap real copy in later

- `src/config.ts` — `absorbed`, `proofPoints`, and `faqs` arrays are mirrored
  from `artifacts/coach-ui/src/pages/home.tsx`. When the source-of-truth copy
  there changes, update this file too (do **not** import from `coach-ui`).
- `src/pages/index.astro` — social-proof block is a placeholder. Swap in real
  coach quotes when we have them; the `TODO` marks the spot.
- `src/pages/about.astro` — founder bio + portrait are placeholders.
- `src/pages/contact.astro` — form is non-functional. Wire to Formspree /
  Resend / our own endpoint per the deferred follow-up task.
- `src/pages/privacy.astro`, `src/pages/terms.astro` — placeholder legal copy;
  replace with reviewed text before launch.

## Env contract

| Var               | Default                      | Purpose                                       |
| ----------------- | ---------------------------- | --------------------------------------------- |
| `PUBLIC_APP_URL`  | `https://app.deloadapp.io`   | Where Log in / Start free buttons point.      |
| `PUBLIC_SITE_URL` | `https://deloadapp.io`       | Canonical site URL used for OG + sitemap.     |
| `PORT`            | `4321`                       | Dev/preview server port (set by the workflow). |
| `BASE_PATH`       | `/`                          | URL prefix when served behind the workspace proxy. |

`PUBLIC_APP_URL` and `PUBLIC_SITE_URL` must be `PUBLIC_`-prefixed so Astro
exposes them to client-rendered components.

## Deploy plan (future task)

This artifact will be split into its own GitHub repo (`deload-marketing`)
and deployed to Vercel against the `deloadapp.io` apex. We intentionally
do **not** ship a `vercel.json` here — that lands in the deploy follow-up
task once the site is reviewed. When the site moves to Vercel, set
`PUBLIC_APP_URL` and `PUBLIC_SITE_URL` in the Vercel project settings;
nothing in the source needs to change.

## What lives outside this artifact

- The product itself (signed-in coach + athlete experience) lives in
  `artifacts/coach-ui`, `artifacts/athlete-ui`, and `artifacts/deload-mobile`.
  This site links **out** to the product via `PUBLIC_APP_URL`; it never
  imports from those packages.

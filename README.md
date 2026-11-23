# apascualco.com

Personal site of Alberto Pascual Corpas: profile, CV and writing, in English and Spanish. Built with [Astro](https://astro.build) and MDX.

## Where it runs

- **www.apascualco.com**: GitHub Pages, deployed by `.github/workflows/astro.yml` on every push to `main`.
- **blog.apascualco.com**: the same site served from my homelab Kubernetes cluster. `.github/workflows/image.yml` builds an arm64 image with nginx (`Dockerfile`, `nginx/default.conf`) and pushes it to GHCR; the cluster picks up the new digest by itself. Canonical URLs point to `www`.

## Develop

```sh
npm ci
npm run dev
npm run build
```

## Content

- Posts: `src/content/blog/*.mdx`. Each post has a `lang`, an `alternate` with the slug of its translation and an optional `featured: true`, shown with a badge in the list.
- Profile and timeline: `src/i18n/about.ts`. Interface strings: `src/i18n/translations.ts`.

## CV

`cv/resume.html` is the source of `public/download/resume.pdf`. Regenerate it with `./cv/build.sh` (headless Chrome).

## Diagrams

`diagrams/homelab.html` is the source of `src/assets/post/homelab.png`.

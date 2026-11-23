# Ram Prasad Nethi — Professional Portfolio

Executive technology portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Production builds export a static site to `out/` for GitHub Pages.

## Local development

Use Node.js 22 or newer. From this repository's root, run:

```sh
npm ci
npm run dev
```

Open <http://localhost:3000>. On Windows PowerShell, use `npm.cmd` if your execution policy blocks `npm.ps1`.

## Content

- Edit [content/portfolio.ts](content/portfolio.ts) for the profile, credentials, publication links, research topics, events, and page metadata.
- Edit [app/page.tsx](app/page.tsx) for the home page and [app/[slug]/page.tsx](app/%5Bslug%5D/page.tsx) for the individual page copy.
- The Contact page uses the public LinkedIn profile for inquiries.

## Production checks and preview

```sh
npm run lint
npm run typecheck
npm run build
python -m http.server 4173 --bind 127.0.0.1 --directory out
```

Open <http://127.0.0.1:4173> to preview the generated files. The preview command requires Python 3.

## GitHub Pages

After the changes are approved and pushed to `main`, select **GitHub Actions** as the source under **Settings → Pages**. Then open **Actions → Deploy portfolio to GitHub Pages → Run workflow** and select `main`. The workflow runs the checks, builds the static export, and deploys `out/` to <https://ramprasadnethi.github.io/>.

The workflow runs on manual dispatch. The site is configured for the root of the user Pages domain, and its trailing-slash routes export as directory indexes for direct navigation.

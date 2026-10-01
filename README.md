# REINYG Portfolio

Personal portfolio website for **Reinniel Exciya Yalong**.

## Version

**v1.1 — Professional profile & launch refinement**

## Positioning

**Systems • Automation • Technology**

The public site highlights systems development, automation, spreadsheet engineering, web applications, business analysis, and Finacle expertise without exposing confidential banking information or internal operational data.

## v1.1 highlights

- Added LinkedIn integration
- Added GitHub profile link
- Added employer/client positioning
- Added "Where I can contribute" section
- Improved contact call-to-action
- Updated SEO and social metadata to the active Vercel production URL
- Preserved sanitized, confidentiality-conscious project descriptions

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Vercel

## Live site

https://reinyg-portfolio-8e4e.vercel.app

## Professional links

- LinkedIn: https://www.linkedin.com/in/reinniel-yalong-696978236/
- GitHub: https://github.com/ReinYG

## Local development

```bash
npm install
npm run dev
```

For this workstation, REINYG can run on port 3001 to avoid a conflict with another local application:

```bash
npm run dev -- -p 3001
```

## Production build

```bash
npm run build
npm run start -- -p 3001
```

## Deployment

The GitHub repository is connected to Vercel. Pushing to the `main` branch triggers a production deployment.

## Public-content rule

Do **not** upload customer information, internal banking screenshots, credentials, production URLs, account numbers, internal reports, or proprietary data. Use sanitized descriptions, mock data, and portfolio-safe screenshots only.

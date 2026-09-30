# reinyg.dev Launch Checklist

## 1. Register the domain

Check `reinyg.dev` in a live registrar search before purchase. Domain availability changes in real time.

A `.dev` domain requires HTTPS in modern browsers because `.dev` is HSTS-preloaded. Vercel automatically provisions HTTPS after DNS is connected.

## 2. GitHub

Recommended repository name:

`reinyg-dev-portfolio`

Keep the repository public if you want recruiters or clients to inspect your source code, or private if the website itself is the portfolio and you do not want to expose implementation details.

## 3. Vercel

Use Vercel Hobby while the site is a personal/non-commercial portfolio. If the site becomes a commercial client-delivery platform, review Vercel's then-current plan terms and move to the appropriate plan if needed.

## 4. Domain connection

Inside Vercel:

`Project → Settings → Domains → Add reinyg.dev`

Also add:

`www.reinyg.dev`

Set one version as the canonical redirect to the other. Recommended canonical domain: `reinyg.dev`.

## 5. Final launch items

- Add real contact details
- Add LinkedIn and GitHub URLs
- Add resume
- Add sanitized project screenshots
- Review all copy for confidentiality
- Check mobile layout
- Run Lighthouse / accessibility review
- Add analytics only if desired

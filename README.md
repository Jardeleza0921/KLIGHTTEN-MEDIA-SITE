# KLIGHTTEN MEDIA 2.7 Public Website — GitHub Pages Ready

This folder is ready to upload directly to the **root of a GitHub repository**
and publish with GitHub Pages.

## Included

- Polished responsive home page
- Download page with the actual KLIGHTTEN MEDIA 2.7 ZIP included
- Privacy Policy
- Terms of Service
- Google OAuth & Data Use disclosure
- Contact page
- 404 page
- Four persistent themes:
  - Neon Arcade
  - Classic Green
  - Black + White
  - Redhat
- Mobile navigation
- Accessible theme menu
- No external fonts, libraries, analytics, ads, or CDN dependencies
- `.nojekyll` for clean GitHub Pages static hosting
- Relative links so project Pages such as `username.github.io/repository/` work

## Current bundled application

File: `downloads/KLIGHTTEN_MEDIA_2.7_POLISHED_CONTROLS.zip`  
Size: 82 KB  
SHA-256:

```text
c42cc2ec59604538a56d6f81d6fd5b4b9ebd91acd5fb9d3fefd83ed6f9f81d45
```

## One configuration file

Before final public/OAuth launch, edit:

```text
assets/site-config.js
```

Fill:

```js
githubRepository: "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY",
supportEmail: "YOUR_REAL_MONITORED_EMAIL",
customDomain: ""
```

Leaving the GitHub URL or support email blank does not create a broken link.
The site shows that the value is not configured.

## Publish on GitHub Pages

1. Create a **public** repository, for example `klightten-media-site`.
2. Upload the **contents of this folder**, not the outer ZIP.
3. Confirm `index.html` is at the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment** choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
6. Save and wait for GitHub Pages to publish.
7. The site will normally be available at:
   `https://YOUR_USERNAME.github.io/klightten-media-site/`

## Why CNAME and sitemap are not included yet

The earlier site had `klighttenmedia.com` hardcoded. This package removes that
premature custom-domain configuration so GitHub Pages works cleanly before you
own/configure the final domain.

After you own a domain:

- Configure it in **GitHub → Settings → Pages → Custom domain**.
- Add the domain's `CNAME` file only after GitHub gives you the correct setup.
- Add a sitemap using the final public URL.
- Update Google Auth Platform branding URLs to the verified owned domain.

## OAuth production checklist

Before requesting Google production verification:

- Configure a real monitored support contact.
- Use a verified domain you control.
- Ensure the Privacy Policy and OAuth disclosure are live on that same domain.
- Keep the requested scope limited to the scope actually used by the app.
- Keep access/refresh tokens out of the repository.
- Keep the website synchronized with the actual current app behavior.

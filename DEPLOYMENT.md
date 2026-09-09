# Deployment Guide

## GitHub Pages

`index.html` must exist at the repository root.

```text
KLIGHTTEN-MEDIA-SITE/
├── index.html
├── assets/
├── download/
└── ...
```

Do not place the site inside an extra outer folder.

Configure GitHub Pages:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ / (root)
```

Production URL:

```text
https://jardeleza0921.github.io/KLIGHTTEN-MEDIA-SITE/
```

## Release Update Workflow

1. Confirm the Linux desktop release works.
2. Copy the current release into `downloads/`.
3. Update `assets/site-config.js`.
4. Update Download page version and SHA-256.
5. Check Privacy, Terms and OAuth.
6. Test locally:

```bash
python3 -m http.server 8080
```

7. Commit and push:

```bash
git add -A
git commit -m "Update KLIGHTTEN MEDIA website"
git push origin main
```

8. Confirm the GitHub Pages deployment.
9. Test the live site.

## Custom Domain

Do not add a `CNAME` until an owned domain is actually configured.

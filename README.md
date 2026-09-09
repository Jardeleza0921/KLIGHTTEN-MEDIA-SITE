<p align="center">
  <img src="assets/logo-brand.png" width="360" alt="KLIGHTTEN MEDIA">
</p>

<h1 align="center">KLIGHTTEN MEDIA — Public Website</h1>

<p align="center">
  <strong>Official public website for KLIGHTTEN MEDIA, a Linux-first entertainment workspace by Klightten Industries.</strong>
</p>

<p align="center">
  <a href="https://jardeleza0921.github.io/KLIGHTTEN-MEDIA-SITE/">Live Website</a>
  ·
  <a href="https://jardeleza0921.github.io/KLIGHTTEN-MEDIA-SITE/download/">Download</a>
  ·
  <a href="https://jardeleza0921.github.io/KLIGHTTEN-MEDIA-SITE/privacy/">Privacy</a>
  ·
  <a href="https://jardeleza0921.github.io/KLIGHTTEN-MEDIA-SITE/oauth/">OAuth & Data Use</a>
</p>

---

## About

This repository contains the static public website for **KLIGHTTEN MEDIA**.

It is kept separate from the desktop application's source repository so the public website, Linux download, branding, privacy documentation, OAuth disclosure, and legal pages can be maintained independently.

KLIGHTTEN MEDIA is designed exclusively for Linux desktops and combines Music, YouTube, Local media, ani-cli, MPV playback, FFmpeg conversion, Now Playing, persistent media controls, and five canonical KLIGHTTEN themes.

## Website Structure

```text
.
├── index.html
├── 404.html
├── assets/
├── contact/
├── download/
├── downloads/
├── oauth/
├── privacy/
├── terms/
├── .nojekyll
├── robots.txt
├── DEPLOYMENT.md
├── CONTRIBUTING.md
├── SECURITY.md
└── README.md
```

## Canonical Branding

KLIGHTTEN MEDIA uses the approved Neon-Arcade identity:

```text
//  =  ^  w  ^  =  )
```

The current brand uses:

- Neon-Arcade background
- black cat ears
- black spaced KLIGHTTEN mark
- black-and-white reading waveform
- black **Klightten Media** wordmark

### Canonical Themes

| Identity | Theme |
|---|---|
| Bunny | Dark-Mint |
| Cat | Neon-Arcade |
| Wolf | Black-White |
| Fox | Crimson-Red |
| Dog | Cream Coffee |

These five are the only canonical KLIGHTTEN themes.

## Local Development

No build system is required.

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080/
```

## GitHub Pages

This repository publishes directly from `main`:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ / (root)
```

Production site:

https://jardeleza0921.github.io/KLIGHTTEN-MEDIA-SITE/

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full workflow.

## Release Synchronization

Before publishing a site update:

1. Test the Linux desktop release.
2. Update site version and feature descriptions.
3. Replace the archive under `downloads/`.
4. Update the Download page SHA-256.
5. Verify Privacy, Terms, OAuth and Contact.
6. Test all five canonical themes.
7. Check mobile navigation and internal links.
8. Push to `main`.
9. Confirm GitHub Pages deployment.

The website should never advertise functionality that is not present in the current tested desktop release.

## Keyboard Reference

| Shortcut | Action |
|---|---|
| `F` | MPV/native-video fullscreen |
| `Y` | YouTube fullscreen |
| `F11` | Whole-app fullscreen |
| `Ctrl + Esc` | Exit KLIGHTTEN MEDIA |
| `M` | Mute |
| `S` | Shuffle |
| `Space` | Play / pause |
| `←` / `→` | Seek |

## Privacy

The public site intentionally has no advertising or analytics by default.

Never commit OAuth tokens, cookies, passwords, API secrets, private media URLs, or personal file paths.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

See [SECURITY.md](SECURITY.md).

## Project Status

**KLIGHTTEN MEDIA 3.1** is actively developed and tested as a Linux-only desktop project.

---

<p align="center">
  <strong>KLIGHTTEN MEDIA</strong><br>
  Linux-first media by Klightten Industries
</p>

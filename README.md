# Rishikesh Pote Portfolio Website

Production-ready static portfolio website for Rishikesh Pote.

## Last Updated

March 6, 2026

## Project Type

Static single-page website (HTML, CSS, vanilla JavaScript).
No Node.js build, package manager, or backend service is required.

## Tech Stack

- HTML5 (`index.html`)
- CSS3 (`style.css`)
- Vanilla JavaScript (`script.js`)
- External CDN assets:
  - Google Fonts (`Inter`, `JetBrains Mono`)
  - Font Awesome 6.5.0

## Repository Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
|-- README.md
|-- CLAUDE.md
`-- .claude/
    `-- settings.local.json
```

## Local Development Setup

### Option 1: Quick open

1. Open `index.html` directly in a browser.

### Option 2: Recommended local server

Using Python:

```powershell
cd d:\AI_Projects\ARQ\ARQ_Rishis_Website
python -m http.server 5500
```

Then open:

- `http://localhost:5500`

Using Node (optional):

```powershell
npx serve .
```

## What the JavaScript Handles

- Hero typing effect
- Sticky/active navbar behavior on scroll
- Mobile hamburger menu toggle
- Fade-in animation via `IntersectionObserver`
- Subtle floating badge parallax effect

## Permissions Configured in This Repo

Local Claude permissions are defined in `.claude/settings.local.json`:

```json
{
  "permissions": {
    "allow": [
      "Bash(curl:*)",
      "WebFetch(domain:api.github.com)"
    ]
  }
}
```

This means the current local AI tooling is configured to allow:

- Bash `curl` commands
- Web fetch requests only to `api.github.com`

## Deployment

Because this is a static site, deploy to any static host:

- GitHub Pages
- Netlify
- Vercel (static)
- S3 + CloudFront

## Maintenance Notes

- Keep `index.html`, `style.css`, and `script.js` in sync when changing sections/components.
- If you add private contact info or client-sensitive data, review content before publishing.
- Update this README when setup, dependencies, or permissions change.

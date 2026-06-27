# Solverto static website

Static, GitHub Pages compatible website for Solverto. It uses plain HTML, CSS
and JavaScript with no framework, backend, package manager or build step.

## Run locally

Open `index.html` directly or start a static server:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173/`.

## Pages

- `index.html` - homepage
- `games.html` - Game Production
- `realtime-3d.html` - Realtime 3D for Business
- `xr-digital-twin.html` - XR and Digital Twin
- `ai-pipeline.html` - AI and Production Pipeline
- `portfolio.html` - complete filterable and searchable portfolio
- `project-architecture.html` - architecture case study
- `project-game-demo.html` - game production case study
- `project-xr-training.html` - XR case study
- `project-template.html` - reusable data-driven project detail template
- `contact.html` - contact details and static form

## Editing

- Replace the logo in `assets/logo.svg`.
- Change brand colors in the `:root` variables at the top of `styles.css`.
- Replace every visible bracketed placeholder in the HTML files with the final
  image, screenshot, render or embed.
- Replace Sketchfab placeholder URLs in the project detail pages.
- Update contact details directly in the HTML files.
- Shared interactions are in `script.js`.
- Portfolio projects, roles, partners, descriptions and counters are maintained
  in `portfolio-data.js`.

## GitHub Pages

`.github/workflows/pages.yml` publishes all root HTML files, CSS and JavaScript
files, and the `assets/` directory after a push to `main`.

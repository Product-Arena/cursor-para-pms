# cursor-guia-do-aluno

Student guide (Guia do Aluno) — **Cursor para PMs** · Product Arena. Static HTML for local preview and **GitHub Pages**.

Static HTML. Always serve over HTTP; opening `index.html` via `file://` breaks assets and some behaviors.

## GitHub Pages (required setup once)

This repository deploys with **GitHub Actions** (not “Deploy from branch”). The workflow copies only the public files (`index.html`, `ementa.html`, `styles.css`, `app.js`, `assets/`) to the site root.

1. Open **Settings** → **Pages** in this repo.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or run the workflow manually: **Actions** → **Deploy GitHub Pages** → **Run workflow**).
4. When the workflow finishes, open the **github-pages** environment URL shown in the run summary.

Typical public URL:

`https://product-arena.github.io/cursor-guia-do-aluno/`

If Pages still shows “Get started”, you must pick **GitHub Actions** as the source; the workflow file is already in `.github/workflows/deploy-github-pages.yml`.

### Org permissions

If workflows fail with permissions errors, an org owner may need to allow **GitHub Actions** and **Pages** for this repository under organization settings.

## Quick start (local)

From this directory:

```bash
chmod +x serve-local.sh   # once, if needed
./serve-local.sh
```

**Default URL:** [http://127.0.0.1:8844/](http://127.0.0.1:8844/)

- macOS: `./serve-local.sh --open` starts the server and opens the default browser.
- Other port: `PORT=9000 ./serve-local.sh`

## Requirements

- Python 3 (uses `python3 -m http.server` bound to `127.0.0.1` only).

## Troubleshooting

- **Nothing loads:** run the script first and keep the terminal open.
- **Port in use:** set another port, e.g. `PORT=8845 ./serve-local.sh`.
- **Cursor Simple Browser issues with localhost:** use Safari, Chrome, or Firefox at the URL above.

# Course guide (static site)

Step-by-step companion for participants: prerequisites, blocks, exercise links, and checkbox progress stored in `localStorage` (key: `cursor-pms-guia-progress-v1`). Layout and UX are inspired by [Cauê’s Claude-for-PMs guide](https://cauecm.github.io/curso-claude-pms/).

## Local preview

From the folder `docs/`:

```bash
./serve-local.sh
```

It picks a free port (5173, 5174, …) and prints both URLs. Or manually:

```bash
cd docs
python3 -m http.server 5173 --bind 127.0.0.1
```

- **Apresentação** (slides): `http://127.0.0.1:<port>/`
- **Página** (guia): `http://127.0.0.1:<port>/guia/`

### Error -312 / `ERR_UNSAFE_PORT`

**Chromium** (Chrome, Edge, **Cursor Simple Browser**) blocks many ports as “unsafe” (e.g. **5060** is SIP). If the URL uses a blocked port you get **Error Code: -312** and **`ERR_UNSAFE_PORT`** — not a broken server.

1. Use a normal dev port: **5173**, **8080**, **8888**, etc. (`./serve-local.sh` already avoids risky ports).
2. Never use **5060** / **5061** for this preview in Chromium.
3. **Safari** does not use the same block list; external Safari often works even when Cursor’s browser does not.
4. Confirm the server is up: `lsof -nP -iTCP:5173 -sTCP:LISTEN` (replace with your port).

## GitHub Pages

If Pages is configured to publish from the `/docs` folder on the default branch, the guide is served at:

**https://product-arena.github.io/cursor-para-pms/guia/**

(Replace owner/repo if the GitHub remote differs.)

## Files

- `index.html` — single-page guide (embeds Markdown below the fold)
- `content/*.md` — **copies** of `materiais/exercicios/*.md` plus workspace + design-system refs (so GitHub Pages can `fetch` same-origin)
- `css/guia.css` — layout + Markdown typography
- `js/marked` (CDN) + `js/guia-app.js` — render Markdown in the page
- `js/progress.js` — `localStorage` for checkboxes (`cursor-pms-guia-progress-v1`)
- `sync-content.sh` — copy sources from `materiais/` into `content/` after you edit exercises

## After editing exercises

From the repository root:

```bash
bash docs/guia/sync-content.sh
```

Then commit the updated `docs/guia/content/` files together with `materiais/` changes.

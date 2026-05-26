# Deploy no Replit

## Importar

1. Create Repl → **Import from ZIP** (or upload this folder).
2. Root must contain `index.html`, `app.js`, `styles.css`, `partials/`, and `assets/`.

## Rodar

Replit uses `.replit` to start:

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Open the **Webview** preview. The guide loads `partials/*.html` via `fetch` — it **must** be served over HTTP (opening `index.html` as `file://` will fail).

## Contents

| Path | Role |
|------|------|
| `index.html` | Shell + `data-include` slots |
| `partials/` | Hero, pré-requisitos, agenda, conteúdo, exercícios, apêndice |
| `assets/` | Images, GIFs, `cursor-workspace.zip` |
| `app.js` | Partials loader, navigation, progress |
| `styles.css` | Layout and theme |
| `ementa.html` | Syllabus reference page |

## Notes

- Largest asset: `assets/open-workspace.gif` (~45 MB). First load may take a moment.
- Optional local preview: `./serve-local.sh` (port 8844).

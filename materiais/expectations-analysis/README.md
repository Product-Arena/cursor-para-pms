# Course expectations analysis — Cursor para PMs

Analysis of pre-course survey responses: distributions, text themes, and suggested course adjustments.

## Contents

- **`data/raw.csv`** — Snapshot of survey responses (from Google Sheets).
- **`data/processed.json`** — Cleaned distributions, cross-tabs, top tools, and per-row normalized fields.
- **`data/text-themes.json`** — Thematic grouping of open-text answers (expectations and “flow to improve”).
- **`scripts/preprocess.py`** — Builds `processed.json` and `text-themes.json` from `raw.csv` (Python 3 stdlib only).
- **`index.html`** + **`assets/`** — Responsive dashboard (ECharts, filters, theme cards, course adjustments).
- **`course-adjustments.md`** — Concise recommendations mapped to the course plan.

## How to run

### 1. Refresh data (optional)

If you have new responses:

1. Export the relevant sheet from [the Google Sheet](https://docs.google.com/spreadsheets/d/1MY8gLMTYIoP3pp_cCZk3IJIti3Xo93eUnqwqmNRF5HA/edit?gid=587240834) as CSV, or use Google Workspace MCP to read and save.
2. Save as `data/raw.csv` with columns: timestamp, t-shirt size, food restriction, AI usage level, AI stack, expectations, API/WebHooks knowledge, flow to improve.
3. From this folder run:
   ```bash
   python3 scripts/preprocess.py
   ```
   This updates `data/processed.json` and `data/text-themes.json`.

### 2. Open the dashboard

Because the dashboard loads `data/*.json` with `fetch()`, open it via a **local HTTP server** (not `file://`):

```bash
# From this folder (expectations-analysis/)
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080). Use the filters to slice by AI usage, API knowledge, or t-shirt size; charts and counts update accordingly.

## Tech

- **Preprocess:** Python 3, no extra packages (csv, json, re, unicodedata, collections).
- **Dashboard:** Vanilla JS, ECharts (CDN), responsive CSS with the same design tokens as the course slides.

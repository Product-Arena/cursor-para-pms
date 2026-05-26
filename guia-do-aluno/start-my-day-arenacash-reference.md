# Start My Day exercise reference (ArenaCash)

This reference adapts the "Start My Day" workflow to local files in the ArenaCash case.
The goal is to produce a simple local dashboard, using the same idea from
`documents/start-my-day-demo/start-my-day-demo.md`: gather data, build a single payload, render an HTML
view, and open it in localhost.

## 1) What students should build

- A simple dashboard for daily PM review
- Local-only execution (no Databricks required)
- Data source: ArenaCash reference files in `learning/Cursor para PMs por Product Arena/case arenacash/`

Minimum expected output:
- `index.html` with an executive summary
- At least 2 sections (for example: onboarding funnel and support health)
- A short "data source" note in the footer

## 2) Required ArenaCash reference files

Use these files as the source of truth:

- `learning/Cursor para PMs por Product Arena/case arenacash/dados-semanais-arenacash.csv`
- `learning/Cursor para PMs por Product Arena/case arenacash/dados-quarter-q1.csv`
- `learning/Cursor para PMs por Product Arena/case arenacash/atendimento-q1.csv`
- `learning/Cursor para PMs por Product Arena/case arenacash/atendimento-resumo-semanal.csv`

Optional (for finance cuts):
- `learning/Cursor para PMs por Product Arena/case arenacash/financeiro-q1.xlsx`

## 3) Suggested delivery structure

Create:

- `projects/start-my-day-arenacash/`
  - `index.html`
  - `styles.css`
  - `app.js` (optional)
  - `data/summary.json` (optional, if generating a payload)
  - `README.md` (1 short run instruction)

## 4) Prompt script (copy/paste)

Use `Plan` first, then `Agent`.

### Prompt 1 (planning)

```text
Create a short implementation plan for a "Start My Day" dashboard based only on local ArenaCash files.
The dashboard must use:
- dados-semanais-arenacash.csv
- dados-quarter-q1.csv
- atendimento-q1.csv
- atendimento-resumo-semanal.csv

I want a simple static dashboard with:
1) executive summary,
2) onboarding KPIs trend (weekly or monthly),
3) support quality snapshot.

Then propose exact file paths and commands to generate and open it on localhost.
```

### Prompt 2 (execution)

```text
Implement the plan now in projects/start-my-day-arenacash/.
Use local ArenaCash reference files only (no Databricks).
Generate a simple dashboard in index.html following the ArenaCash design system.
If helpful, create a small summary JSON from the CSV files and bind charts/tables to it.
At the end, provide the exact localhost command to run and open the dashboard.
```

## 5) Localhost commands (with auto-open)

From project folder (`projects/start-my-day-arenacash/`):

```bash
python3 -m http.server 8877 --bind 127.0.0.1
```

Open in browser:

```bash
open "http://127.0.0.1:8877/index.html"
```

Single-command option (macOS):

```bash
(python3 -m http.server 8877 --bind 127.0.0.1 >/tmp/start-my-day-arenacash.log 2>&1 &) && sleep 1 && open "http://127.0.0.1:8877/index.html"
```

To stop the server:

```bash
lsof -nP -iTCP:8877 -sTCP:LISTEN
kill <PID>
```

## 6) Validation checklist for students

- Data clearly comes from ArenaCash reference files
- Numbers in the dashboard match CSV values
- Dashboard opens locally on `127.0.0.1`
- Content is aligned with the analysis narrative from the course
- Visual style follows `design-system-arenacash.md`

## 7) Instructor note

If a student asks for "Start My Day like the demo":
- Keep the same architecture pattern (collect -> payload -> render -> open)
- Swap Databricks queries for local CSV/XLSX reads
- Keep scope small: one page and a few high-signal metrics

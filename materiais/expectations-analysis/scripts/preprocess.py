"""
Preprocess course expectations survey data.
Reads data/raw.csv, cleans and normalizes, computes distributions and text themes,
writes data/processed.json and data/text-themes.json.
Uses only Python standard library (no pandas/sklearn).
"""
from __future__ import annotations

import csv
import json
import re
import unicodedata
from collections import Counter
from pathlib import Path

# Paths relative to project root (expectations-analysis/)
PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = PROJECT_ROOT / "data"
RAW_CSV = DATA_DIR / "raw.csv"
PROCESSED_JSON = DATA_DIR / "processed.json"
TEXT_THEMES_JSON = DATA_DIR / "text-themes.json"

KEY_TSHIRT = "tshirt_size"
KEY_FOOD = "food_restriction"
KEY_AI_USAGE = "ai_usage_level"
KEY_STACK = "ai_stack"
KEY_EXPECTATIONS = "expectations"
KEY_API_KNOWLEDGE = "api_knowledge"
KEY_FLOW = "flow_to_improve"

NO_VARIANTS = {"não", "nao", "não.", "nao.", "nenhuma", "não se aplica", "não "}
AI_USAGE_MAP = {
    "básico": "Basic", "basico": "Basic",
    "intermediário": "Intermediary", "intermediario": "Intermediary",
    "rotineiro": "Routine", "avançado": "Advanced", "avancado": "Advanced",
}
API_DAY = "Já está no meu dia a dia, consigo explicar bem e entendo quando e como usar"
API_KNOW = "Sei o que é, mas não consigo tangibilizar"
API_PANDORA = "É uma caixa de pandora pra mim, não faço ideia como funciona"


def normalize_text(s: str) -> str:
    if not isinstance(s, str) or not s.strip():
        return ""
    s = "".join(c for c in s if unicodedata.category(c) != "Cf" and ord(c) != 0x2060)
    return " ".join(s.split()).strip()


def classify_ai_usage(raw: str) -> str:
    raw_lower = normalize_text(raw).lower()
    for key, label in AI_USAGE_MAP.items():
        if key in raw_lower:
            return label
    return "Other"


def classify_api_knowledge(raw: str) -> str:
    raw_n = normalize_text(raw)
    if API_DAY in raw_n or ("dia a dia" in raw_n and "consigo explicar" in raw_n):
        return "dayToDay"
    if API_KNOW in raw_n or "não consigo tangibilizar" in raw_n:
        return "knowButNotConcrete"
    if API_PANDORA in raw_n or "caixa de pandora" in raw_n.lower():
        return "pandorasBox"
    return "other"


def classify_food(raw: str) -> tuple[str, list[str]]:
    raw_n = normalize_text(raw).lower()
    if raw_n in NO_VARIANTS or not raw_n:
        return "none", []
    allergens = []
    for term in ["amendoim", "frutos do mar", "camarão", "camarao", "lactose", "glúten", "gluten"]:
        if term in raw_n:
            allergens.append(term.replace("camarao", "camarão").replace("gluten", "glúten"))
    if "hambúrger" in raw_n or "pizza" in raw_n:
        allergens.append("dieta restrita")
    if not allergens:
        allergens.append("outro")
    return "hasRestriction", allergens


def tokenize_stack(raw: str) -> list[str]:
    if not raw or not str(raw).strip():
        return []
    s = normalize_text(str(raw)).lower()
    parts = re.split(r"[,/\+]|\s+e\s+", s)
    tools = []
    for p in parts:
        p = p.strip()
        if not p or len(p) < 2:
            continue
        if "gemini" in p:
            tools.append("Gemini")
        elif "gpt" in p or "chatgpt" in p:
            tools.append("ChatGPT")
        elif "claude" in p:
            tools.append("Claude")
        elif "n8n" in p:
            tools.append("n8n")
        elif "lovable" in p:
            tools.append("Lovable")
        elif "perplexity" in p:
            tools.append("Perplexity")
        elif "copilot" in p:
            tools.append("Copilot")
        elif "zapier" in p or "zappier" in p:
            tools.append("Zapier")
        elif "manus" in p:
            tools.append("Manus")
        elif "power" in p:
            tools.append("Power Automate")
        elif "comet" in p:
            tools.append("Comet")
        elif "antigravity" in p:
            tools.append("Antigravity")
        else:
            tools.append(p[:30])
    return list(dict.fromkeys(tools))


def load_raw() -> list[dict]:
    with open(RAW_CSV, "r", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def build_processed(rows: list[dict]) -> dict:
    # Assume columns: Carimbo..., Tamanho..., Restrição..., Uso atual..., Stack..., Expectativas..., Conhecimento..., Fluxo...
    keys = list(rows[0].keys()) if rows else []
    if len(keys) < 8:
        raise ValueError("Expected at least 8 columns in raw.csv")
    ts, tshirt, food_raw, ai_raw, stack_raw, exp_raw, api_raw, flow_raw = (
        [r.get(keys[i], "") or "" for r in rows] for i in range(8)
    )
    n = len(rows)

    ai_usage = [classify_ai_usage(ai_raw[i]) for i in range(n)]
    api_knowledge = [classify_api_knowledge(api_raw[i]) for i in range(n)]
    food_cat = [classify_food(food_raw[i])[0] for i in range(n)]
    food_allergens = [classify_food(food_raw[i])[1] for i in range(n)]

    api_sentences = {normalize_text(API_DAY), normalize_text(API_KNOW), normalize_text(API_PANDORA)}
    inconsistent = [i for i in range(n) if normalize_text(flow_raw[i]) in api_sentences]

    all_tools = []
    for s in stack_raw:
        all_tools.extend(tokenize_stack(s))
    tool_counts = Counter(all_tools)
    top_tools = [{"name": k, "count": v} for k, v in tool_counts.most_common(15)]

    dist_tshirt = dict(Counter(tshirt))
    dist_ai_usage = dict(Counter(ai_usage))
    dist_api = dict(Counter(api_knowledge))
    dist_food = dict(Counter(food_cat))
    dist_allergens = dict(Counter(a for sub in food_allergens for a in sub))

    cross_ai_api = {}
    for i in range(n):
        au, ak = ai_usage[i], api_knowledge[i]
        if au not in cross_ai_api:
            cross_ai_api[au] = {}
        cross_ai_api[au][ak] = cross_ai_api[au].get(ak, 0) + 1

    out_rows = []
    for i in range(n):
        out_rows.append({
            "index": i,
            KEY_TSHIRT: tshirt[i],
            KEY_AI_USAGE: ai_usage[i],
            KEY_API_KNOWLEDGE: api_knowledge[i],
            KEY_FOOD: food_cat[i],
            "food_allergens": food_allergens[i],
            "tools": tokenize_stack(stack_raw[i]),
            KEY_EXPECTATIONS: normalize_text(exp_raw[i]),
            KEY_FLOW: normalize_text(flow_raw[i]),
            "expectations_raw": exp_raw[i],
            "flow_raw": flow_raw[i],
        })

    return {
        "meta": {"total_responses": n},
        "distributions": {
            KEY_TSHIRT: dist_tshirt,
            KEY_AI_USAGE: dist_ai_usage,
            KEY_API_KNOWLEDGE: dist_api,
            KEY_FOOD: dist_food,
            "food_allergens": dist_allergens,
            "top_tools": top_tools,
        },
        "cross_tabs": {"ai_usage_x_api_knowledge": cross_ai_api},
        "inconsistent_rows": inconsistent,
        "rows": out_rows,
    }


def keyword_themes(texts: list[str], keyword_groups: list[tuple[str, list[str]]]) -> list[dict]:
    """Assign each text to first matching keyword group; build themes with quotes."""
    themes = [{"theme_id": f"theme_{i}", "label_pt": label, "keywords": kws, "quotes": [], "count": 0} for i, (label, kws) in enumerate(keyword_groups)]
    unassigned = []
    for t in texts:
        t_n = normalize_text(t)
        if not t_n or len(t_n) < 5:
            continue
        t_lower = t_n.lower()
        assigned = False
        for th in themes:
            if any(kw in t_lower for kw in th["keywords"]):
                th["quotes"].append(t_n[:400])
                th["count"] += 1
                assigned = True
                break
        if not assigned:
            unassigned.append(t_n[:400])
    if unassigned:
        themes.append({"theme_id": "theme_other", "label_pt": "Outros", "keywords": [], "quotes": unassigned[:5], "count": len(unassigned)})
    return [t for t in themes if t["quotes"] or t["count"]]


def build_text_themes(rows: list[dict]) -> dict:
    exp_keywords = [
        ("Autonomia e uso prático", ["autonomia", "prático", "dia a dia", "operacionalizar", "utilizar", "sair da estaca zero"]),
        ("Prototipar e comunicar com engenharia", ["prototipar", "protótipos", "comunicação", "engenharia", "ideias", "fluxos", "onboarding"]),
        ("Evolução e novas ferramentas", ["evoluir", "aprender", "novas ferramentas", "habilidades", "cursor", "vibe coding"]),
        ("Liderança e performance", ["performance", "líder", "estratégia", "dados", "produtos complexos", "desenvolvimento"]),
        ("Automação de processos", ["automatizar", "processos", "repetitivos", "operacionais", "facilitar"]),
    ]
    flow_keywords = [
        ("Dashboards e relatórios", ["dashboard", "report", "relatório", "executivo", "csat", "classificação"]),
        ("Protótipos e APIs", ["api", "tela", "autosserviço", "protótipo", "conectar"]),
        ("Documentação e descoberta", ["documentação", "documentações", "testes", "entrevistas", "discovery", "prd"]),
        ("Priorização e backlog", ["priorização", "backlog", "demandas", "insights", "resumos", "planos de ação"]),
        ("Reuniões e 1:1", ["1:1", "reuniões", "follow", "time", "tarefas operacionais"]),
        ("Pesquisa e agentes", ["agentes", "pesquisa", "mercado", "consumo", "oportunidades"]),
    ]
    expectations_texts = [r["expectations_raw"] for r in rows]
    flow_texts = [r["flow_raw"] for r in rows]
    api_sentences = {normalize_text(API_DAY), normalize_text(API_KNOW), normalize_text(API_PANDORA)}
    flow_texts_clean = [t for t in flow_texts if t and normalize_text(t) not in api_sentences]
    return {
        "expectations": keyword_themes(expectations_texts, exp_keywords),
        "flow_to_improve": keyword_themes(flow_texts_clean or flow_texts, flow_keywords),
    }


def main() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if not RAW_CSV.exists():
        raise FileNotFoundError(f"Missing {RAW_CSV}")

    rows = load_raw()
    processed = build_processed(rows)
    with open(PROCESSED_JSON, "w", encoding="utf-8") as f:
        json.dump(processed, f, ensure_ascii=False, indent=2)

    text_themes = build_text_themes(processed["rows"])
    with open(TEXT_THEMES_JSON, "w", encoding="utf-8") as f:
        json.dump(text_themes, f, ensure_ascii=False, indent=2)

    print(f"Wrote {PROCESSED_JSON} and {TEXT_THEMES_JSON}")


if __name__ == "__main__":
    main()

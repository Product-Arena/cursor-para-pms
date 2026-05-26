# Exercício 16: Análise de dados — Arena Cash

**Objetivo:** Usar o Cursor com o subagent **Product Manager** para analisar dados semanais da Arena Cash **conectados** ao memo estratégico do Q2 da CEO **Ivy Leitão** — versionado no repositório do curso como **`case arenacash/memo-estrategico-q2.md`**.

---

## Arquivos obrigatórios

| Artefato | Caminho no repositório do curso |
|----------|----------------------------------|
| Dataset semanal | `case arenacash/dados-semanais-arenacash.csv` |
| Memo estratégico Q2 (CEO Ivy Leitão) | `case arenacash/memo-estrategico-q2.md` |
| Roteiro deste exercício | `exercicio/analise-dados.md` |

---

## Passo a passo

### 1. Carregar contexto (≈5 min)

1. Abra ou arraste para o chat **`case arenacash/memo-estrategico-q2.md`**.
2. Ative o subagent **`product-manager`** (criado com `/create-subagent`).
3. Peça um **resumo do negócio em 3 bullets** alinhado ao memo (ativação, churn, prioridades do Q2).

### 2. Analisar o dataset (≈15 min)

1. Abra **`case arenacash/dados-semanais-arenacash.csv`** no workspace ou anexe ao chat.
2. Siga a **pergunta de negócio** e as entregas descritas em **`exercicio/analise-dados.md`**.
3. Documente achados objetivos (tendência temporal, contraste Free vs Pro, últimas semanas).

### 3. Narrativa para liderança (≈5 min)

Peça ao subagent para formatar o output como uma diretoria costuma receber:

- **Decisão pedida**
- **Evidência** (números do CSV + consistência com o memo)
- **Risco** se não agir
- **Próximo passo** mensurável

### 4. Salvar

Crie (se preciso) a pasta **`analises/`** e salve em **`analises/insights-arena-cash.md`**.

---

## Prompt sugerido (colar no chat)

```text
# Análise de dados — Arena Cash

Atue como o subagent Product Manager da Arena Cash. Com base em
case arenacash/dados-semanais-arenacash.csv e no contexto estratégico em
case arenacash/memo-estrategico-q2.md:

1. Qual é a principal oportunidade ou problema que os dados revelam?
2. Qual métrica está mais fora do esperado e por quê?
3. Qual recomendação você daria à liderança com base nesses números?

Responda de forma objetiva. Salve os achados em analises/insights-arena-cash.md.
```

---

## ❓ Erros comuns

**O agente “inventa” números** — Force citação de linhas/períodos do CSV ou peça para listar os valores usados.

**Só repete o memo sem cruzar com o CSV** — O exercício vale pela **ponte** entre narrativa (memo) e evidência (dados).

**Arquivo errado** — Confirme que está usando **`dados-semanais-arenacash.csv`** e **`memo-estrategico-q2.md`** em **`case arenacash/`**.

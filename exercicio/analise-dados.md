# Análise de dados — Arena Cash (roteiro)

Use este arquivo junto com:

- **Dados semanais:** `case arenacash/dados-semanais-arenacash.csv`
- **Contexto de negócio:** `case arenacash/memo-estrategico-q2.md` (memo estratégico Q2 da CEO **Ivy Leitão**)

---

## Pergunta de negócio principal

O memo da CEO **Ivy Leitão** descreve **queda estrutural de ativação**, **churn alto**, **NPS em queda** e **CAC/LTV sob pressão**. Os dados semanais agregam **signups**, **ativação em 30 dias**, **churn**, **NPS**, **MAU/DAU**, **tickets de suporte**, entre outros — por **semana**, **plano** (Free vs Pro) e **mês**.

**Sua pergunta orientadora:**

> Entre o cenário descrito no memo e a série temporal no CSV, **onde o buraco do funil aparece primeiro nos dados** — e qual **uma** recomendação priorizada você levaria para a diretoria na próxima reunião?

---

## O que entregar

1. Leitura do memo + resumo em 3 bullets (subagent `product-manager`).
2. Análise do CSV (tendências, cortes por plano, semanas mais recentes vs início da série).
3. Narrativa para liderança: **decisão pedida**, **evidência (números)**, **risco**, **próximo passo**.
4. Salvar achados em **`analises/insights-arena-cash.md`** (crie a pasta `analises/` se ainda não existir).

---

## Dicas

- Compare **Free vs Pro** quando fizer sentido (ativacao, churn, NPS).
- Olhe as **últimas semanas** do arquivo frente ao memo (Q1 “sensação mista”).
- Se o Cursor pedir ferramentas para CSV, você pode usar modo **Agent** / Skills ou colar trechos tabulares no chat — o importante é a **linha de raciocínio** e o **link memo ↔ dados**.

# 📊 Análise de métricas — Funil de cursos Product Arena

Exercício prático de análise de dados usando o Cursor como copiloto.

---

## 🎯 Objetivo

Analisar o funil de engajamento dos cursos da Product Arena para identificar onde estão os maiores pontos de fricção e oportunidades de melhoria.

---

## 📈 O funil de cursos

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   👀 Visitou página do curso                            │
│         │                                               │
│         ▼                                               │
│   📝 Fez inscrição                                      │
│         │                                               │
│         ▼                                               │
│   💳 Assinou (tornou-se aluno)                          │
│         │                                               │
│         ▼                                               │
│   🎬 Iniciou o curso                                    │
│         │                                               │
│         ▼                                               │
│   📺 Assistiu aulas (≥50% do conteúdo)                  │
│         │                                               │
│         ▼                                               │
│   ✏️ Fez exercícios                                     │
│         │                                               │
│         ▼                                               │
│   🏆 Concluiu o curso                                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 📋 Dados disponíveis

Para este exercício, você vai usar dados simulados que representam o comportamento dos alunos:

| Etapa | Quantidade | Taxa vs anterior |
|-------|------------|------------------|
| Visitou página | 10.000 | — |
| Fez inscrição | 2.500 | 25% |
| Assinou | 800 | 32% |
| Iniciou curso | 640 | 80% |
| Assistiu ≥50% | 384 | 60% |
| Fez exercícios | 230 | 60% |
| Concluiu | 161 | 70% |

**Taxa de conversão geral:** 1,6% (visitantes → conclusão)

---

## 🛠️ Exercício

### Parte 1 — Preparar o contexto (5 min)

1. Arraste este arquivo para o chat do Cursor
2. Use o modo **Plan** para estruturar sua análise

### Parte 2 — Gerar visualização (15 min)

Peça ao Cursor para criar um dashboard HTML com:

- 📊 Gráfico de funil mostrando cada etapa
- 📉 Taxas de conversão entre etapas
- 🔴 Destaque visual nos maiores drops
- 💡 Área para insights

**Prompt sugerido:**

```markdown
# Análise de funil de cursos Product Arena

## Contexto
Preciso analisar o funil de engajamento dos cursos da Product Arena.
Os dados estão no arquivo que arrastei para o contexto.

## Objetivo
Criar um dashboard HTML responsivo para visualizar:
1. Funil de conversão com cada etapa
2. Taxas de conversão entre etapas (destacar drops > 50%)
3. Identificar os principais gargalos
4. Sugerir hipóteses de melhoria

## Requisitos visuais
- Seguir o design system da Arena (accent: #FF5757)
- Layout limpo, fácil de apresentar para stakeholders
- Responsivo para funcionar em diferentes telas
```

### Parte 3 — Documentar conclusões (10 min)

Documente suas conclusões em formato **one-page** para liderança:

| Seção | Conteúdo |
|-------|----------|
| **TLDR** | Uma frase com a conclusão principal |
| **Contexto** | Por que essa análise foi feita |
| **Principais insights** | 3-5 descobertas mais relevantes |
| **Oportunidades** | Ações sugeridas com impacto estimado |
| **Próximos passos** | O que fazer agora |

---

## 🎓 O que você pratica neste exercício

| Habilidade | Como pratica |
|------------|--------------|
| 🧠 Prompt em Markdown | Estruturar pedido com contexto, objetivo, requisitos |
| 📊 Análise de dados | Interpretar funil, identificar gargalos |
| 🎨 Design system | Aplicar cores e padrões visuais da Arena |
| 📝 Comunicação executiva | Resumir análise em formato one-page |

---

## 💡 Dicas

- **Itere:** A primeira versão raramente é a final. Peça ajustes.
- **Questione:** Se algo não faz sentido, pergunte ao Cursor.
- **Contextualize:** Quanto mais contexto você der, melhor o resultado.

---

## 🔗 Referências

- [getdesign.md](https://getdesign.md) — Coleção de design systems para AI coding
- [Design system Arena](../apresentacao/design-system.md) — Cores, tipografia e padrões visuais

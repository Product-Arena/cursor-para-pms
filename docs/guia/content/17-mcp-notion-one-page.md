# 📝 Documentando conclusões no Notion

Exercício prático de integração MCP + documentação executiva.

---

## 🎯 Objetivo

Usar o MCP do Notion para criar uma página de conclusões no formato **one-page para lideranças** — direto do Cursor, sem copiar e colar.

---

## 📋 Por que isso importa?

| Sem MCP | Com MCP |
|---------|---------|
| ❌ Copiar texto do Cursor | ✅ Criar direto no Notion |
| ❌ Formatar manualmente | ✅ Estrutura já formatada |
| ❌ Perder contexto | ✅ Manter rastreabilidade |
| ❌ Múltiplas janelas | ✅ Tudo em um lugar |

---

## 🛠️ Setup do MCP Notion

### Passo 1 — Criar integração no Notion

1. Acesse [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Clique em **+ New integration**
3. Dê um nome (ex: "Cursor MCP")
4. Copie o **Internal Integration Token**

### Passo 2 — Configurar no Cursor

Use o modo **Plan** com o prompt:

```markdown
Preciso configurar o MCP do Notion no meu Cursor.
Meu token de integração é: [SEU_TOKEN_AQUI]

Me ajude a:
1. Adicionar a configuração no mcp.json
2. Testar se a conexão está funcionando
```

### Passo 3 — Conectar página do Notion

No Notion:
1. Abra a página onde quer criar o documento
2. Clique em **...** (menu) > **Connections**
3. Adicione sua integração "Cursor MCP"

---

## 📝 Exercício — Criar one-page de conclusões

### Contexto

Você acabou de fazer a análise de funil dos cursos da Arena (exercício anterior). Agora precisa documentar as conclusões para apresentar à liderança.

### Estrutura do one-page

```markdown
# [Título da análise]

## TLDR
> Uma frase que resume a conclusão principal e a ação recomendada.

## Contexto
- Por que fizemos essa análise
- Período analisado
- Fontes de dados

## Principais insights

### 1. [Insight mais importante]
Descrição do achado + evidência quantitativa.

### 2. [Segundo insight]
Descrição do achado + evidência quantitativa.

### 3. [Terceiro insight]
Descrição do achado + evidência quantitativa.

## Oportunidades identificadas

| Oportunidade | Impacto estimado | Esforço |
|--------------|------------------|---------|
| [Ação 1] | Alto | Médio |
| [Ação 2] | Médio | Baixo |

## Próximos passos
- [ ] Ação imediata 1
- [ ] Ação imediata 2
- [ ] Ação para próximo ciclo
```

### Prompt sugerido

```markdown
# Criar one-page de conclusões no Notion

## Contexto
Acabei de analisar o funil de cursos da Product Arena.
[Cole aqui os insights do exercício anterior]

## Objetivo
Criar uma página no Notion com o formato one-page para lideranças.

## Estrutura
- TLDR (uma frase)
- Contexto da análise
- 3-5 principais insights com dados
- Oportunidades identificadas (tabela com impacto/esforço)
- Próximos passos como checklist

## Requisitos
- Usar o MCP do Notion para criar direto
- Página clara e escaneável
- Linguagem executiva (sem jargão técnico)
```

---

## 🎓 O que você pratica neste exercício

| Habilidade | Como pratica |
|------------|--------------|
| 🔌 MCP | Configurar e usar integração externa |
| 📝 Comunicação executiva | Resumir análise complexa em formato escaneável |
| 🎯 Síntese | Extrair o que importa de uma análise |
| ⚡ Produtividade | Criar doc direto da ferramenta de análise |

---

## 💡 Dicas

- **TLDR primeiro:** Escreva como se o leitor só fosse ler essa frase
- **Dados, não opiniões:** Cada insight deve ter um número que o sustente
- **Ações claras:** Próximos passos devem ter dono e prazo implícitos
- **Linguagem simples:** Se precisa explicar, está complexo demais

---

## 🔄 Alternativas ao Notion

Se você usa outras ferramentas, o conceito é o mesmo:

| Ferramenta | MCP disponível |
|------------|----------------|
| Notion | ✅ notion-mcp |
| Wiki / Confluence | ✅ depende do MCP que sua empresa expõe (veja o diretório) |
| Google Docs | ✅ Google Workspace MCP |
| Obsidian | ✅ obsidian-mcp |
| Coda | 🔄 Em desenvolvimento |

---

## 🔗 Referências

- [Notion MCP](https://github.com/makenotion/notion-mcp-server) — Servidor oficial
- [mcpservers.org](https://mcpservers.org) — Diretório de MCPs
- [cursor.directory](https://cursor.directory) — MCPs curados pela comunidade

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

## 🛠️ Setup do MCP Notion (via Marketplace)

### Passo 1 — Abrir configurações do Cursor

No Cursor, abra **Settings**:
- **Mac:** `Cmd + Shift + J`
- **Windows:** `Ctrl + Shift + J`

### Passo 2 — Instalar pelo Marketplace de MCPs

1. No final do menu lateral de Settings, clique em **`@cursor/marketplace`**
2. Busque por **Notion**
3. Clique em **Enable/Install**
4. Autorize e **conecte sua conta do Notion**

### Passo 3 — Conectar a página no Notion

No Notion:
1. Abra a página onde quer criar o documento
2. Clique em **...** (menu) > **Connections**
3. Adicione a integração do Notion MCP

### Passo 4 — Testar conexão

No chat do Cursor, teste com:

```text
Liste as páginas do Notion que tenho acesso via MCP.
```

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
- [Cursor Marketplace](https://cursor.com/marketplace) — Onde instalar MCPs direto no Cursor
- [mcpservers.org](https://mcpservers.org) — Diretório de MCPs
- [cursor.directory](https://cursor.directory) — MCPs curados pela comunidade

# Exercício 06: Configurando MCP Jira

**Objetivo:** Conectar o Cursor a ferramentas externas usando o Model Context Protocol (MCP).

---

## 📝 Passo a Passo

1. Acesse a documentação oficial do Atlassian Rovo MCP Server (Jira/Confluence/Compass):  
   https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/
2. No Cursor, vá em **Settings** (engrenagem) → **Features** → **MCP**.
3. Clique em **+ Add New MCP Server**.
4. Tipo: `stdio` (na maioria dos casos).
5. Nome: `jira`.
6. Comando: depende do servidor escolhido.  
   - **Rovo MCP (oficial)**: segue autenticação **OAuth 2.1** (não usa API token) e normalmente usa um proxy local (`mcp-remote`).
   - **Servidores token-based (comunidade)**: podem pedir `ATLASSIAN_EMAIL` + `ATLASSIAN_API_TOKEN`.
7. Siga o método de autenticação exigido pelo servidor que você escolheu (OAuth ou token).

> Importante: **não cole tokens/senhas em repositórios, slides ou chats**. Use placeholders e configure o valor apenas localmente.

---

## 🔑 Se o seu servidor pedir API token (token-based)

> Atenção: o **Atlassian Rovo MCP Server (oficial)** usa **OAuth 2.1** (sem API token).  
> Referência oficial: https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/

1. No Jira, clique no seu avatar (canto superior direito) → **Configurações da conta**.
2. Abra a aba **Segurança**.
3. Em **Tokens de API**, clique em **Criar e gerenciar chaves de acesso** (ou opção equivalente).
4. Clique em **Criar um token de API**.
5. Dê um nome (ex.: `cursor`) e **crie o token**.
6. Copie o token e **salve em um local seguro** (gerenciador de senhas / cofre).  
   - Você normalmente **não consegue ver o token novamente** depois de fechar a janela.
   - Se vazar, **revogue** e crie outro.

> Segurança do curso: se você já compartilhou um token em algum lugar (chat, doc, screenshot), trate como comprometido e **gere um novo**.

---

## ⚙️ Exemplo de configuração (placeholders)

> Os nomes exatos das variáveis podem variar por servidor MCP. Use isso como referência e ajuste conforme a documentação do servidor escolhido.

```json
{
  "mcpServers": {
    "jira": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-atlassian-jira"],
      "env": {
        "ATLASSIAN_SITE": "https://SEU-DOMINIO.atlassian.net",
        "ATLASSIAN_EMAIL": "seu-email@exemplo.com",
        "ATLASSIAN_API_TOKEN": "<YOUR_ATLASSIAN_API_TOKEN>"
      }
    }
  }
}
```

---

## ❓ Dúvidas e Erros Comuns

**Onde pego o API Token do Jira?**
Acesse: [https://id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens)

**Erro de conexão**
Verifique se você tem Node.js instalado (`node -v` no terminal). A maioria dos servidores MCP roda em Node ou Python.

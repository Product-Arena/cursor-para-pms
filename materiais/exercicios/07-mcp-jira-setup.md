# Exercício 07: Configurando MCP Jira

**Objetivo:** Conectar o Cursor a ferramentas externas usando o Model Context Protocol (MCP).

---

## 📝 Passo a Passo

1.  Acesse o link oficial da integração Atlassian (Jira) para MCP:
    *   [https://productarena.atlassian.net/jira/for-you](https://productarena.atlassian.net/jira/for-you) (Exemplo - verifique o link real na documentação do MCP se este não funcionar, ou procure "Jira MCP Server" no Smithery.ai).
2.  No Cursor, vá em **Settings** (engrenagem) > **Features** > **MCP**.
3.  Clique em **+ Add New MCP Server**.
4.  Tipo: `stdio` (geralmente).
5.  Nome: `jira`.
6.  Comando: (O comando específico depende do pacote, geralmente `npx -y @modelcontextprotocol/server-atlassian-jira`).
    *   *Dica:* Pergunte ao Cursor! "Como instalo o MCP do Jira?"
7.  **Conta do curso (todos usam a mesma):**
    - **Email:** lucas@buildingthefuture.com.br  
    - **Senha:** productarena26  
    - Ambiente: [https://productarena.atlassian.net/jira/for-you](https://productarena.atlassian.net/jira/for-you)

---

## ❓ Dúvidas e Erros Comuns

**Onde pego o API Token do Jira?**
Acesse: [https://id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens)

**Erro de conexão**
Verifique se você tem Node.js instalado (`node -v` no terminal). A maioria dos servidores MCP roda em Node ou Python.

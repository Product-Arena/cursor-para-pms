# MCPs — Referências e Setup

Model Context Protocol (MCP) conecta o Cursor a sistemas e dados externos.

---

## Diretórios de MCPs

- [cursor.com/docs/context/mcp/directory](https://cursor.com/docs/context/mcp/directory)
- [mcpservers.org](https://mcpservers.org/)
- [mcpdirectory.ai](https://www.mcpdirectory.ai/)
- [skills.sh](https://skills.sh/)

---

## MCPs relevantes para PMs

### Google Workspace MCP

- [Taylor Wilsdon — Google Workspace MCP](https://mcpservers.org/servers/taylorwilsdon/google_workspace_mcp)
- Permite acessar Drive, Docs, Sheets, Calendar, Gmail
- **Configuração:** Rule com `user_google_email` (ex.: no `.cursor/rules/`)

### Atlassian Rovo MCP (Jira, Confluence, Compass)

- Setup oficial: [Atlassian Rovo MCP Server](https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/)
- OAuth 2.1, sem API tokens
- Ferramentas: `createJiraIssue`, `searchJiraIssuesUsingJql`, `createConfluencePage`, etc.

### Databricks MCP

- Para execução de queries SQL e análise de dados
- [Documentação Databricks MCP](https://docs.databricks.com/aws/en/generative-ai/mcp/connect-external-services)

### Browser MCP

- Testar aplicações, editar layouts, acessibilidade, converter design em código
- Exemplos de prompts:
  - "Open the app in the browser and check for console errors"
  - "Navigate to the login page and test the form submission"
  - "Take a screenshot of the current page"

---

## Notas sobre permissões (Google Drive)

- É tudo ou nada: você pode liberar tiers, mas não escolhe serviços individuais
- Rule com `user_google_email` ajuda a padronizar o uso

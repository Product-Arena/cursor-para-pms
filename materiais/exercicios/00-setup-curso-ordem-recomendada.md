# Etapa 0: Setup do curso — Ordem recomendada

Guia único para deixar o ambiente pronto antes e durante o Bloco 1. Siga a ordem abaixo; cada item aponta para o material detalhado quando existir.

---

## 1. Cursor e conta

- Instalar o [Cursor](https://cursor.com) no seu computador.
- Criar conta e ativar o **plano Pro** (necessário para Agent e MCPs).

---

## 2. GitHub

- Ter uma **conta GitHub** (criar em [github.com](https://github.com) se ainda não tiver).
- O curso usa `git clone` para baixar repositórios; conhecimento básico de terminal ajuda.

---

## 3. Allowlist de comandos (antes de clonar)

Para o modo Agent poder executar comandos no terminal com segurança:

- Ir em **Settings > General > Command Allowlist** no Cursor.
- Consultar a lista recomendada em **[referencia/command-allowlist.md](../referencia/command-allowlist.md)** e liberar os comandos que forem usar (Git, navegação, etc.).

*Dica:* em modo Ask, você pode perguntar ao Cursor "O que o comando X faz?" antes de liberar.

---

## 4. Clonar repositórios

Ordem sugerida:

1. **Skills da Anthropic** (exercício do plano de aula):
   ```bash
   git clone https://github.com/anthropics/skills.git
   ```
2. **Repo do curso** (material, rules, commands):
   - Clonar o repositório do curso no seu workspace (URL será informada no curso).
   - Abrir a pasta clonada como workspace no Cursor.

Referência de comandos Git: **[git-guia-pms.md](../git-guia-pms.md)**.

---

## 5. Rules e Commands (já no repo)

O repositório do curso já traz uma pasta **`.cursor/`** na raiz com:

- **`.cursor/rules/`** — regras de estilo (PRD, user story para Jira, slides, etc.).
- **`.cursor/commands/`** — commands como `/create-prd`, `/start-a-business`, etc.

Não é preciso copiar de outro lugar; ao clonar o repo do curso e abrir a pasta como workspace, essas rules e commands passam a estar disponíveis nesse projeto.

---

## 6. MCP Jira (Bloco 2)

Para os exercícios de Jira (criar tarefas, user stories):

- Configurar o **MCP Jira** (Atlassian/Rovo) conforme o passo a passo do **[06-mcp-jira-setup.md](06-mcp-jira-setup.md)**.
- O curso usa o ambiente **productarena.atlassian.net** e uma conta compartilhada (credenciais fornecidas no material / no dia).

Depois de configurado: **[07-mcp-jira-create.md](07-mcp-jira-create.md)** para criar a primeira task com o template de user story.

---

## Resumo rápido

| Ordem | Item              | Onde ver detalhes                                        |
|-------|-------------------|----------------------------------------------------------|
| 1     | Cursor + Pro      | cursor.com                                               |
| 2     | Conta GitHub      | github.com                                               |
| 3     | Allowlist         | [referencia/command-allowlist.md](../referencia/command-allowlist.md) |
| 4     | Clone skills + repo do curso | Plano de aula / [git-guia-pms.md](../git-guia-pms.md)   |
| 5     | Rules/Commands    | Já em `.cursor/` no repo clonado                         |
| 6     | MCP Jira          | [06-mcp-jira-setup.md](06-mcp-jira-setup.md)            |

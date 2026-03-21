# Pré-setup do curso — Faça antes do dia

Tudo que você precisa ter pronto **antes** do curso, para que no dia a gente comece já com o ambiente rodando. Siga a ordem abaixo.

---

## 1. Cursor e conta

- Instalar o [Cursor](https://cursor.com) no seu computador.
- Criar conta e ativar o **plano Pro** (necessário para Agent e MCPs).

---

## 2. GitHub

- Ter uma **conta GitHub** (criar em [github.com](https://github.com) se ainda não tiver).
- O curso usa `git clone` para baixar repositórios; conhecimento básico de terminal ajuda.

---

## 3. Instalar o Git na sua máquina (obrigatório antes do clone)

**Sim, é preciso ter o Git instalado no computador.** O comando `git clone` — seja você rodando no terminal ou o Cursor/Agent rodando por você — usa o Git instalado na máquina. Sem o Git instalado, o clone não funciona.

- **No Mac:** instalar via Homebrew (`brew install git`) ou Xcode Command Line Tools (`xcode-select --install`). Se aparecer erro “xcrun: invalid active developer path”, rode `xcode-select --install` primeiro.
- **No Windows:** instalar o [Git for Windows](https://git-scm.com) (ou via winget: `winget install Git.Git`). Na instalação, escolher **Git Bash** para ter um terminal compatível com os comandos do curso.

Para conferir se já está instalado: abrir o terminal e digitar `git --version`. Se aparecer a versão, pode seguir para o passo 4.

---

## 4. Clonar repositório do curso

1. Clonar o repositório do curso no seu computador:
   ```bash
   git clone https://github.com/Product-Arena/cursor-para-pms.git
   ```
2. Abrir a pasta clonada (`cursor-para-pms`) como **workspace** no Cursor (File > Open Folder).

Referência de comandos Git: **[git-guia-pms.md](../referencia/git-guia-pms.md)**.

---

## 5. Rules e Commands (já no repo)

O repositório do curso já traz uma pasta **`.cursor/`** na raiz com:

- **`.cursor/rules/`** — regras de estilo (PRD, user story para Jira, slides, etc.).
- **`.cursor/commands/`** — commands como `/create-prd`, `/start-a-business`, etc.

Ao abrir a pasta do curso como workspace, essa `.cursor` fica ativa. As stacks completas dos instrutores estão em **`stack/Lucas`** e **`stack/Arthur`** — copie para sua `.cursor` o que quiser usar.

---

## 6. MCP Jira (Bloco 2)

Para os exercícios de Jira no Bloco 2:

- Configurar o **MCP Jira** (Atlassian/Rovo) conforme **[06-mcp-jira-setup.md](06-mcp-jira-setup.md)**.
- O curso usa o ambiente **productarena.atlassian.net** e uma conta compartilhada (credenciais no material / no dia).

Depois de configurado: **[07-mcp-jira-create.md](07-mcp-jira-create.md)** para criar a primeira task com o template de user story.

---

## Resumo rápido

| Ordem | Item              | Onde ver detalhes                       |
|-------|-------------------|----------------------------------------|
| 1     | Cursor + Pro      | cursor.com                              |
| 2     | Conta GitHub     | github.com                              |
| 3     | **Instalar Git**  | Mac: Homebrew ou Xcode CLT; Windows: [Git for Windows](https://git-scm.com) ou winget. Conferir com `git --version`. |
| 4     | Clone + workspace | [git-guia-pms.md](../referencia/git-guia-pms.md) |
| 5     | Rules/Commands   | Já em `.cursor/` no repo clonado        |
| 6     | MCP Jira         | [06-mcp-jira-setup.md](06-mcp-jira-setup.md) |

**Durante o curso** a gente aprimora as configurações (allowlist, proteção contra exclusão de arquivos, etc.). Esse conteúdo está em **[00-setup-curso-ordem-recomendada.md](00-setup-curso-ordem-recomendada.md)** — “Aprimorando as configurações”.

# Aprimorando as configurações do Cursor

Conteúdo que a gente configura **durante o curso**. Use este material como referência depois, para revisar allowlist, proteção contra exclusão de arquivos e o que o agent pode ou não fazer.

**Antes do curso:** siga o **[Pré-setup do curso (00-pre-setup-curso.md)](00-pre-setup-curso.md)** — Cursor, GitHub, clone do repo, workspace, Rules/Commands, MCP Jira.

---

## 1. Allowlist de comandos (Command Allowlist)

Para o modo Agent poder executar comandos no terminal com segurança, definimos **quais comandos** o Cursor pode rodar.

- Ir em **Settings > General > Command Allowlist** no Cursor.
- Consultar a lista recomendada em **[referencia/command-allowlist.md](../referencia/command-allowlist.md)** e liberar os comandos que forem usar (Git, navegação, etc.).

*Dica:* em modo Ask, você pode perguntar ao Cursor "O que o comando X faz?" antes de liberar.

---

## 2. File-Deletion Protection (proteção contra exclusão de arquivos)

Para evitar que o Agent apague arquivos por engano:

- Nas **configurações do Cursor**, ativar **File-Deletion Protection** (proteção contra exclusão de arquivos).
- Assim o Cursor não executa exclusões de arquivos sem você estar ciente ou sem permissão explícita.

*Pro tip:* ativar antes de clonar repositórios desconhecidos ou deixar o Agent atuar em pastas sensíveis.

---

## 3. Avoid file deletion (evitar exclusão)

Além da proteção geral (item 2), você pode configurar **quais arquivos ou pastas** o agent **não deve deletar** (por exemplo pastas críticas do projeto, `.cursor`, configs).

- Nas configurações do Cursor, verificar se existe opção para **listar arquivos/pastas protegidos** ou **avoid file deletion** (nome pode variar por versão).
- Incluir ali o que for importante não remover (ex.: `.cursor/`, `.env`, pastas de documentação).

Se a sua versão do Cursor tiver uma lista explícita de “arquivos a não deletar”, use-a para reforçar a proteção em cima do File-Deletion Protection.

---

## Resumo rápido

| Item                    | Onde no Cursor                    | Referência |
|-------------------------|-----------------------------------|------------|
| Allowlist de comandos   | Settings > General > Command Allowlist | [command-allowlist.md](../referencia/command-allowlist.md) |
| File-Deletion Protection| Settings (proteção contra exclusão)    | Ativar conforme slide / demonstração no curso |
| Avoid file deletion     | Settings (lista de arquivos protegidos) | Configurar pastas/arquivos que não devem ser deletados |

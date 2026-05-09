# Exercício 12: Épicos e tarefas do onboarding

**Objetivo:** Quebrar a PRD do novo onboarding em épicos e tarefas executáveis; gerar o backlog em Markdown; depois configurar o **MCP do Linear** e criar **épicos e issues** (cards no board) no Linear a partir desse backlog.

---

## Parte A — Backlog em Markdown (antes do Linear)

1. Abra o Chat (`Cmd + L`).
2. Use o subagent `product-manager` (criado com `/create-subagent`).
3. Prompt:

    ```text
    Com base em documents/prd-onboarding-arena-cash.md, proponha:
    - 3 épicos para o novo onboarding da Arena Cash
    - 3 a 5 tarefas por épico
    - critérios de aceite por tarefa
    - prioridade (alto/médio/baixo) e esforço estimado
    ```

4. Salve o resultado em **`documents/backlog-onboarding.md`**, alinhado ao template **`Tasks Templates.md`** quando fizer sentido.
5. Revise se as tarefas estão orientadas a ativação (ex.: reduzir drop no KYC, onboarding guiado, lifecycle/nudges).

---

## Parte B — Setup do MCP Linear (via Marketplace)

Antes de criar issues no Linear pelo Cursor:

1. No Cursor, abra **Settings** (atalho: `Cmd + Shift + J` no Mac ou `Ctrl + Shift + J` no Windows).
2. No final do menu lateral de Settings, clique em **`@cursor/marketplace`**.
3. Busque por **Linear**.
4. Clique em **Enable/Install** e conecte sua conta do Linear.
5. Confirme que a integração está ativa testando no chat: `"Liste os projetos do Linear que tenho acesso."`

---

## Parte C — Criar épicos e issues no Linear

Com o MCP ativo e o **`documents/backlog-onboarding.md`** pronto:

1. Abra o Chat no modo **Agent** (ou com o subagent `product-manager`).
2. Peça para **criar no Linear** os épicos e issues espelhando o backlog — use o **projeto** e o **time** que você estiver usando na turma.
3. Prompt sugerido:

    ```text
    Com base em documents/backlog-onboarding.md e em documents/prd-onboarding-arena-cash.md:

    - Crie ou alinhe épicos no Linear aos épicos do backlog
    - Para cada épico, crie as issues com título, descrição e critérios de aceite
    - Mantenha prioridade e labels coerentes com o backlog
    ```

4. Abra o Linear no navegador e confira se os **cards (issues)** aparecem no board com título, descrição e critérios.

---

## ❓ Dúvidas e Erros Comuns

**As tarefas ficaram genéricas demais**  
Peça para reescrever com foco explícito na jornada de onboarding (primeira aplicação em até 48h, redução de drop no cadastro e clareza de próximo passo).

**O MCP do Linear não está conectado**  
Certifique-se de que você instalou via **Marketplace** (Settings → `@cursor/marketplace` → buscar Linear → Enable/Install) e conectou sua conta.

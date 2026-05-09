# Exercício 12: Épicos e tarefas do onboarding

**Objetivo:** Quebrar a PRD do novo onboarding em épicos e tarefas executáveis, usando o Linear via MCP.

---

## 📝 Passo a Passo

### Setup do MCP Linear (via Marketplace)

Antes de criar épicos e tarefas, configure o MCP do Linear:

1.  No Cursor, abra **Settings** (atalho: `Cmd + Shift + J` no Mac ou `Ctrl + Shift + J` no Windows).
2.  No final do menu lateral de Settings, clique em **@cursor/marketplace**.
3.  Busque por **Linear**.
4.  Clique em **Enable/Install** e conecte sua conta do Linear.
5.  Confirme que a integração está ativa testando no chat: `"Liste os projetos do Linear que tenho acesso."`

### Criar épicos e tarefas

1.  Abra o Chat (`Cmd + L`).
2.  Use o subagent `product-manager` (criado com `/create-subagent`).
3.  Prompt:
    ```text
    Com base em documents/prd-onboarding-arena-cash.md, proponha:
    - 3 épicos para o novo onboarding da Arena Cash
    - 3 a 5 tarefas por épico
    - critérios de aceite por tarefa
    - prioridade (alto/médio/baixo) e esforço estimado
    ```
4.  Revise se as tarefas estão orientadas a ativação (ex.: reduzir drop no KYC, onboarding guiado, lifecycle/nudges).

---

## ❓ Dúvidas e Erros Comuns

**As tarefas ficaram genéricas demais**  
Peça para reescrever com foco explícito na jornada de onboarding (primeira aplicação em até 48h, redução de drop no cadastro e clareza de próximo passo).

**O MCP do Linear não está conectado**  
Certifique-se de que você instalou via **Marketplace** (Settings → `@cursor/marketplace` → buscar Linear → Enable/Install) e conectou sua conta.

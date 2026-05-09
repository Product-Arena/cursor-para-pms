# Exercício 10a: Protótipo funcional do onboarding — Plan mode (localhost)

**Objetivo:** Criar um protótipo funcional rodando em localhost para visualizar o novo fluxo de onboarding da Arena Cash. Usar o modo **Plan** para o Cursor elaborar um plano e executar os passos a partir do PRD e design já existentes no projeto.

**Duração:** 25 minutos

---

## Contexto

Você já tem:
- PRD em `documents/prd-onboarding-arena-cash.md`
- Estrutura de pastas no projeto (ex.: `projects/arena-cash-onboarding/`)

Se existir, use também um design system do projeto (ex.: `documents/design-system-arena-cash.md`). Se não houver documento de design, o Plan pode usar só o PRD como referência visual.

O objetivo agora é ter um **visual funcional em localhost** para testar a jornada de onboarding — uma interface que rode no navegador e permita simular os principais passos de ativação.

---

## Passo a Passo

1. Abra o **Chat** (`Cmd + L`) e ative o modo **Plan**.
2. Envie o prompt abaixo (ou adapte conforme o contexto do seu workspace).
3. O Cursor vai elaborar um plano: criar/ajustar arquivos, configurar o projeto, rodar o servidor de desenvolvimento.
4. Aprove as etapas sugeridas pelo Plan e acompanhe a execução.
5. Ao final, abra `http://localhost:3000` (ou a porta indicada) no navegador para visualizar o protótipo.

---

## Exemplo de prompt

```text
Agora que já temos o PRD e design do onboarding da Arena Cash, quero criar um protótipo funcional aqui em localhost para visualizar a jornada. O objetivo é validar fluxo, clareza das telas e pontos de fricção da ativação.
```

---

## O que esperar

- **Plan mode** vai decompor a tarefa em passos (ex.: verificar estrutura, criar componentes, configurar dev server, rodar `npm run dev`).
- O resultado é um app rodando em `localhost` — com fluxo básico do novo onboarding da Arena Cash.
- Não precisa estar completo: o foco é ter algo visual e funcional para testar a ideia.

---

## Dúvidas e Erros Comuns

**O Plan não criou nada**
Garanta que o workspace está com a pasta do projeto de onboarding aberta e que os arquivos PRD e design system existem. Adicione esses arquivos ao contexto (arraste para o chat) se necessário.

**Erro ao rodar `npm run dev`**
Peça ao Cursor: "O comando npm run dev falhou com [erro]. Corrija a configuração do projeto."

**Tela em branco no navegador**
Verifique o console (F12). Copie o erro e peça ao Cursor para corrigir.

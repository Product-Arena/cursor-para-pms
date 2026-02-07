# Exercício 10a: Protótipo funcional — Plan mode (localhost)

**Objetivo:** Criar um protótipo funcional rodando em localhost para visualizar o Arena Voting System. Usar o modo **Plan** para o Cursor elaborar um plano e executar os passos a partir do PRD e design já existentes em `projects/arena-voting-system/`.

**Duração:** 25 minutos

---

## Contexto

Você já tem:
- PRD em `documents/prd-arena-voting-system.md`
- Design system em `documents/design-system-arena-voting-system.md`
- Estrutura de pastas em `projects/arena-voting-system/`

O objetivo agora é ter um **visual funcional em localhost** para testar a ferramenta — uma interface que rode no navegador e permita interagir com o conceito do produto.

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
Agora que já temos o PRD e design do projects/arena-voting-system, quero criar um protótipo funcional aqui em localhost para visualizar a ferramenta. O nosso objetivo é ter um visual para testar local.
```

---

## O que esperar

- **Plan mode** vai decompor a tarefa em passos (ex.: verificar estrutura, criar componentes, configurar dev server, rodar `npm run dev`).
- O resultado é um app rodando em `localhost` — uma tela inicial ou fluxo básico do Arena Voting System.
- Não precisa estar completo: o foco é ter algo visual e funcional para testar a ideia.

---

## Dúvidas e Erros Comuns

**O Plan não criou nada**
Garanta que o workspace está com a pasta `projects/arena-voting-system/` aberta e que os arquivos PRD e design system existem. Adicione esses arquivos ao contexto (arraste para o chat) se necessário.

**Erro ao rodar `npm run dev`**
Peça ao Cursor: "O comando npm run dev falhou com [erro]. Corrija a configuração do projeto."

**Tela em branco no navegador**
Verifique o console (F12). Copie o erro e peça ao Cursor para corrigir.

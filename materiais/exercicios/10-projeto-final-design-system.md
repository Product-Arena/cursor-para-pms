# Exercício 10: Projeto Final — Design System (extração do site)

**Objetivo:** Extrair o padrão de design da Product Arena (cores, tipografia, logo) diretamente do site productarena.io e documentá-lo como design system. Usaremos web-artifacts-builder e webapp-testing para capturar o design.

**Nota:** No fluxo do venture builder, viriam antes o catálogo de eventos analíticos e o guia de marketing. Vamos pular essas etapas — você pode exercitá-las em outro momento.

---

## 📝 Passo a Passo

1. Abra o **Chat (`Cmd + L`)** e ative o modo **Agent**.
2. Use o prompt de exemplo abaixo (adapte se precisar).
3. O agente vai elaborar um plano e pode usar scripts de teste (ex.: Playwright) para inspecionar o site e extrair cores, fontes e assets.
4. O resultado esperado é um documento de design system (ex.: `documents/design-system-arena-voting-system.md`) com paleta de cores, tipografia e referência ao logo.

---

## Exemplo de prompt

```text
Vamos pular o catálogo de eventos e o guia de marketing — vamos direto para o design system. Ajuda-me a elaborar um plano para capturar o design da Product Arena (cores, tipografia, logo) diretamente do site productarena.io. Para isso, utilize as habilidades /web-artifacts-builder e /webapp-testing.
```

---

## O que capturar

- **Cores:** paleta principal (primária, secundária, accent), tons de fundo e texto
- **Tipografia:** fontes usadas (família, tamanhos, pesos)
- **Logo:** referência ou extração do logo da Product Arena
- **Componentes:** botões, cards, espaçamentos (se relevante)

---

## ❓ Dúvidas e Erros Comuns

**O agente não inspecionou o site**
Peça explicitamente: "Acesse productarena.io e extraia as cores e fontes do CSS computado."

**Quero salvar o design system em outro formato**
O comando `/create-design-system` (se disponível no workspace) gera um template. Você pode combinar: extrair do site e depois preencher o template.

**O site mudou**
O design da Product Arena pode ser atualizado. O exercício visa praticar o fluxo de extração — o resultado serve como referência para o Arena Voting System.

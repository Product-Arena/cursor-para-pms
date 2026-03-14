# Cursor para PMs — Ementa

Curso presencial de 8 horas para Product Managers na Product Arena.
**Início:** 10h | **Público:** 25 participantes.

**Fonte:** [plano de aula.md](plano de aula.md)

---

## Visão geral

O Cursor é uma IDE com IA integrada que amplia o que PMs conseguem fazer sem depender exclusivamente de desenvolvimento. O curso é hands-on: os participantes fazem as tarefas e entendem o que estão executando. O Cursor funciona melhor como **copiloto**, não como piloto automático.

---

## Bloco 1 — Manhã (detalhamento)

### 1. Introduções (~45 min)

- 1 min por participante se apresentar (25 participantes)
- Lucas: trajetória com PM e como virou a chave para se tornar **Builder** — avatar Apple, notinhas (mineiro, mergulhador, quase travessia do Atlântico), cargo GPM iFood, logos (iFood, Ailo, empresas anteriores)
- Arthur: apresentação (mesmo formato)

### 2. Como funciona o curso

- **Para quem é:** disclaimer — pra quem gosta de construir e entende que a ferramenta deve ser um copiloto, não piloto automático
- **O que aprender:** Automate your workflow, Answering technical questions, Data analysis and reporting, Building prototypes
- **Diferença entre ferramentas:** Cursor vs n8n, ChatGPT, Lovable, Manus e outras ferramentas de vibe coding
- **Pré-requisitos:** Cursor baixado, conta criada com plano Pro ativado, conta GitHub, Obsidian (opcional), entrar no grupo de WhatsApp, nos adicionar no LinkedIn — slide de checklist

### 3. Wow Moment

- Demo do Cursor com case "Start my day"
- Alusão ao Jarvis (Homem de Ferro)

### 4. Setup

- Ensinar a criar o workspace
- Dicas de onde colocá-lo no computador
- Slide: Cursor com acesso à máquina — como IDE/terminal, navega nos arquivos do computador
- Imagens (placeholders tipo [Lenny](https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense))

### 5. Conhecendo o Cursor — sequência de exercícios e "abrindo parênteses"

**Nota didática:** Baby steps — maioria dos participantes sem contato prévio com Cursor.

| Ordem | Tipo | Conteúdo |
|-------|------|----------|
| 5.1 | Exercício Ask | "O que o Cursor é capaz de fazer?" — familiaridade com ChatGPT |
| 5.2 | Abrindo parênteses | **GitHub** — slide: bullets esquerda, imagem repo direita |
| 5.3 | Callout | Clone = copiar do GitHub; repo = diretório ou pasta (em português) |
| 5.4 | Exercício Plan | "Eu já tenho conta no GitHub, o que preciso para clonar um repo aqui?" — mapear dependências |
| 5.5 | Abrindo parênteses | **Allowlist** — antes de clonar; dica: novo agent, fixar, perguntar "o que cp faz?" |
| 5.6 | Slide especial | **Presente da Arena** — slide destaque (antes do clone) |
| 5.7 | Exercício Plan | "Monte um plano para clonar o repositório do curso" — https://github.com/Product-Arena/cursor-para-pms — usar modo Build |
| 5.8 | Exercício Ask | Arrastar pasta do repo do curso e perguntar o que ela faz (**arrasta e solta**) |
| 5.9 | Abrindo parênteses | **Modo Agent** — slide: bullets esquerda, imagem direita |
| 5.10 | Exercício Agent | Garantir acesso a Rules/Commands do curso (ou instalar skills) |
| 5.11 | Abrindo parênteses | Modelos e janelas de contexto |
| 5.12 | Abrindo parênteses | **O que são Skills** — slide: bullets esquerda, imagem direita |
| 5.13 | Configuração | Ajudar a configurar rules e commands do curso (.cursor mínimo + stack/Lucas e stack/Arthur) |
| 5.14 | Slides | **Commands** e **Rules** (um slide cada) |

**Fim da manhã:** Setup completo + principais funcionalidades.

---

## Bloco 2 — Cursor no ciclo de produto (60–90 min)

**Objetivo:** Aprofundar rules, commands, workflows e usar o ferramental para construir produtos. Primeiro produto: **OS pessoal** — plano para o dia a dia de uma pessoa de produto.

**Reforço:** Exemplos na stack do Lucas; encorajar adaptação ao contexto de cada um.

### Abertura

- **Recap e espaço para perguntas** — ao retornar do almoço

### Tópicos

- **Notas de reunião e organização de agenda** — case Arthur (mentorias)
- **Entendimento do problema** — PRD (o que podem esperar, exercício em breve; não aprofundar)
- **Analisando dados:** (demonstração pelo instrutor — sem exercício obrigatório)
  - Fluxo: Google Forms → Google Sheets → Cursor (modo Plan) + MCP Google → dashboard (expectations-analysis)
  - Slide com fluxo e ícones das ferramentas (Forms, Sheets, Cursor)
  - Slide com prompt em bloco de código + callout sobre importância do Markdown
  - Slide com expectations-analysis embarcado
  - Slide sobre alternativas: CSV local, Databricks, Snowflake, Supabase (MCPs) — logos ou categorias (APIs, MCPs, local)
- **Criando User Stories conectadas ao Jira:**
  - Abrindo parênteses **MCP:** o que é, como funciona (Anthropic, A2A), onde encontrar (Cursor, Atlassian, mcpdirectory.ai, mcpservers.org)
  - Instalação do MCP Jira (Atlassian Rovo) — modo Plan
  - Ambiente productarena.atlassian.net
  - Exercício: criar tarefa com template/rule
- **Criando apresentações:**
  - Slide "eat your own dog food" — material feito com Cursor
  - Gráficos em HTML com fontes iFood

**Pausa:** Café 10–20 min após apresentações.

---

## Bloco 3 — Arena Voting System (~1h45)

**Abertura:** Recap de rules, commands, MCPs.

**Objetivo:** Criar o Arena Voting System — processo completo do planejamento à construção.

**Material de referência:** [materiais/exercicios/arthur-request.md](../materiais/exercicios/arthur-request.md) — documento de requisitos do Arena Voting System (nota do Arthur Castro, CEO Arena): tópicos, votação, ranking, duas interações. Use como input para o `/create-prd`.

- **Repo pessoal** — cada participante cria repo público no GitHub para exercícios e compartilhamento com a turma
- **PRD** — command `/create-prd` usando o doc de requisitos (arthur-request.md)
- **Design** — skill frontend, browser para screenshots, cores, tipografia, logos do site Arena
- **Parênteses:** design system no trabalho; case Isabel (antes/depois)
- **Quebrar histórias** — modo Plan
- **Subir projeto no GitHub pessoal**

---

## Bloco 4 — Síntese (30 min)

- Casos de uso consolidados
- Próximos passos e recursos (cursor.com/for/product-managers, mcpservers.org, mcpdirectory.ai, skills.sh)
- Feedback

---

## Repositórios usados no curso

- **Repo do curso (único clone):** https://github.com/Product-Arena/cursor-para-pms — material, .cursor mínimo, stacks dos instrutores em stack/Lucas e stack/Arthur
- **Repo pessoal:** cada participante cria um para exercícios (Bloco 3)

---

## Pré-requisitos

- Cursor baixado
- Conta Cursor com plano Pro ativado
- Conta GitHub
- Obsidian (opcional)
- Entrar no grupo de WhatsApp do curso
- Nos adicionar no LinkedIn
- Conhecimento básico de terminal (recomendado)

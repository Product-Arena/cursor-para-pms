# 📁 workspace-cursor — Modelo de organização

Um workspace bem organizado é o segredo para tirar o máximo do Cursor. Este documento descreve a estrutura recomendada e boas práticas.

---

## 🎯 Por que isso importa?

| Workspace bagunçado | Workspace organizado |
|---------------------|----------------------|
| ❌ Cursor perde contexto | ✅ Contexto sempre disponível |
| ❌ Arquivos difíceis de encontrar | ✅ Estrutura previsível |
| ❌ Rules/Commands espalhados | ✅ Configurações centralizadas |
| ❌ Retrabalho a cada projeto | ✅ Padrões reutilizáveis |

---

## 📂 Estrutura recomendada

```
workspace-cursor/
│
├── 📁 .cursor/              ← Configurações do Cursor
│   ├── commands/            ← Seus slash commands (/create-prd, etc.)
│   ├── rules/               ← Rules para guiar o agente
│   ├── skills/              ← Skills instaladas
│   ├── templates/           ← Templates reutilizáveis
│   ├── workflows/           ← Fluxos encadeados
│   ├── temp/                ← Arquivos temporários
│   └── mcp.json             ← Configuração de MCPs
│
├── 📁 analises/             ← Análises de dados e dashboards
│   ├── 202605_funil_cursos/
│   │   ├── sql/             ← Queries SQL
│   │   ├── charts/          ← Visualizações HTML
│   │   ├── docs/            ← Documentação da análise
│   │   └── README.md        ← Índice e contexto
│   └── ...
│
├── 📁 projetos/             ← Projetos de produto
│   ├── meu-app/
│   │   ├── documents/       ← PRD, design system, estratégia
│   │   ├── src/             ← Código fonte
│   │   └── README.md
│   └── ...
│
├── 📁 docs/                 ← Documentação pessoal
│   ├── notas-reunioes/
│   ├── decisoes/
│   └── referencias/
│
├── 📁 learning/             ← Cursos, estudos, materiais
│   ├── cursor-para-pms/
│   └── ...
│
├── 📁 repos/                ← Repositórios de terceiros
│   └── ...                  ← Libs e referências
│
├── .gitignore
└── README.md                ← Índice do workspace
```

---

## 💡 Princípios de organização

### 1. 📦 Cada projeto é uma pasta completa

```
projetos/meu-app/
├── documents/           ← Estratégia, PRD, design system
│   ├── product-strategy-meu-app.md
│   ├── prd-meu-app.md
│   └── design-system-meu-app.md
├── src/                 ← Código
└── README.md            ← Contexto rápido
```

**Por quê?** Quando você arrasta a pasta do projeto para o chat, o Cursor tem todo o contexto: estratégia, requisitos, design e código juntos.

### 2. 📊 Análises com estrutura padronizada

```
analises/202605_funil_cursos/
├── sql/                 ← Queries organizadas
│   ├── 00_index.md      ← Índice das queries
│   ├── 01_base.sql
│   └── 02_funil.sql
├── charts/              ← Visualizações
│   ├── 00_dashboard.html
│   └── 01_funil.html
├── docs/                ← Documentação
│   ├── 00_summary.md
│   └── 01_methodology.md
└── README.md            ← Contexto e conclusões
```

**Por quê?** Você pode voltar em qualquer análise antiga e o Cursor entende imediatamente o que foi feito.

### 3. 🔧 Configurações centralizadas em `.cursor/`

```
.cursor/
├── commands/
│   ├── create-prd.md        ← /create-prd
│   ├── start-a-business.md  ← /start-a-business
│   └── code-review.md       ← /code-review
├── rules/
│   ├── code-style.mdc       ← Padrões de código
│   ├── writing-style.mdc    ← Tom de escrita
│   └── project-structure.mdc ← Estrutura de projetos
└── templates/
    ├── PRD Template.md
    └── Design System Template.md
```

**Por quê?** Rules e Commands ficam disponíveis em todo o workspace, não precisa reconfigurar a cada projeto.

### 4. 📚 Learning como fonte de contexto

```
learning/
├── cursor-para-pms/     ← Material do curso
├── design-patterns/     ← Referências de padrões
└── case-studies/        ← Casos de estudo
```

**Por quê?** Quando você estuda algo novo, o material vira referência para projetos futuros. O Cursor pode usar como contexto.

---

## ⚡ Dicas práticas

### Nomear com data + contexto

```
✅ 202605_analise_funil_arena
✅ 202604_ab_test_checkout
❌ analise_v2_final_USAR_ESSE
```

### README em toda pasta importante

Um README com 3-5 linhas de contexto já ajuda muito:

```markdown
# Análise de funil — cursos Arena

- **Objetivo:** Identificar gargalos no funil de conversão
- **Período:** Maio 2026
- **Status:** Concluída
- **Dashboard:** charts/00_dashboard.html
```

### .gitignore inteligente

```gitignore
# Arquivos temporários do Cursor
.cursor/plans/
.cursor/temp/

# Dados sensíveis
.env
*.local

# Sistema
.DS_Store
```

---

## 🚀 Como começar

### Opção 1 — Criar do zero

1. Crie a pasta `workspace-cursor` onde preferir
2. Crie as subpastas principais: `.cursor`, `analises`, `projetos`, `docs`
3. Adicione um `README.md` na raiz

### Opção 2 — Usar o template do curso

O repositório do curso já vem com essa estrutura pronta:

```bash
git clone https://github.com/Product-Arena/cursor-para-pms.git
```

### Opção 3 — Pedir para o Cursor montar

```markdown
Crie a estrutura de workspace recomendada para PMs 
conforme o documento workspace-cursor-modelo.md que 
está no contexto. Inclua READMEs em cada pasta principal.
```

---

## 🔗 Referências

- [Apresentação Cursor Builders Meetup](../../learning/cursor-builders-meetup/) — Slide sobre organização de workspace
- [Projeto Plofti](../../projects/Plofti/) — Exemplo de projeto bem organizado
- [Análise AB Carousel](../../docs/202603_wpp_ab_merchant_item_carousel/) — Exemplo de análise estruturada

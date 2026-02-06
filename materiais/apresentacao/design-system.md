# Design System - Apresentação Cursor para PMs

## Visão Geral
Estilo visual limpo, "Notion-like", focado em legibilidade e hierarquia clara.
Baseado na identidade visual da Product Arena.

## Cores

### Primárias
- **Accent (Destaque):** `#FF5757` (Product Arena Red)
- **Texto Principal:** `#1a1a1a`
- **Texto Secundário:** `#555555`
- **Texto Muted:** `#777777`

### Backgrounds
- **BG Primary:** `#f5f5f5`
- **BG Secondary:** `#ebebeb`
- **BG Tertiary:** `#e0e0e0`

### Utilitários
- **Accent Glow:** `rgba(255, 87, 87, 0.25)`
- **Accent Subtle:** `rgba(255, 87, 87, 0.12)`
- **Border Light:** `rgba(0, 0, 0, 0.08)`
- **Border Medium:** `rgba(0, 0, 0, 0.12)`

## Tipografia

### Fontes
- **Principal:** 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
- **Código:** 'SF Mono', Consolas, monospace

### Hierarquia
- **Slide Title:** 64px, Weight 700 (Bold)
- **Slide Subtitle:** 24px, Weight 400 (Regular)
- **Eyebrow (Seção):** 12px, Weight 600, Uppercase, Letter-spacing 3px
- **Body/Card Text:** 16px-18px
- **Numbers (Badges/Cards):** 48px, Weight 800

## Componentes de Código

### Code Split Layout
Sempre que apresentarmos código (Rules, Commands, Prompts), usar o layout dividido:
- **Esquerda (35%):** Título, subtítulo e contexto ("Por que importa").
- **Direita (60%):** Bloco de código expandido.

### Syntax Highlighting
Simular destaque de sintaxe manualmente com `<span>`:
- `.syntax-key`: `#0077aa` (Azul - Chaves YAML/JSON)
- `.syntax-string`: `#22863a` (Verde - Strings)
- `.syntax-comment`: `#6a737d` (Cinza Itálico - Comentários/Separadores)
- `.syntax-heading`: `#005cc5` (Azul Escuro - Títulos Markdown)
- `.syntax-list`: `#d73a49` (Vermelho - Bullets)

### Layout
- **Slide Padding:** 60px 100px
- **Alinhamento:** Centralizado por padrão, mas flexível para splits (texto/imagem).

---

## Tipos de slide (backgrounds)

- **Slides de conteúdo (padrão)**  
  - Classe: `slide`  
  - **Fundo:** `var(--bg-primary)` (quase branco)  
  - Uso: abertura, seções principais, modos (Ask, Plan, Agent), setup, recap, agenda, presente da Arena etc.

- **Slides de parênteses e sugestões**  
  - Classe: `slide-type-parenteses`  
  - **Fundo:** `#c9ced4` (cinza médio)  
  - Uso: “Abrindo parênteses”, explicações laterais (GitHub, Allowlist, Skills, Prompt em Markdown, Fluxo prático, MCP) e “Sugestão de conteúdo” (ex.: vídeo do Greg).

- **Slides de exercícios e demos escuras**  
  - Classe: `slide-type-exercicio` e `slide-wow`  
  - **Fundo:** `#1a1a1a` (preto / cinza muito escuro)  
  - Uso: todos os exercícios (Ask, Plan, Agent, Plan → Build, Ask com contexto) e a demo principal (“Seu dia pode começar com um comando”).

---

## Slide de referência: “Allowlist” (padrão conteúdo + visual)

**Uso:** Slides “Abrindo parênteses” e qualquer slide com **conteúdo explicativo + um elemento visual forte** (screenshot, diagrama). Referência de diagramação e espaçamento.

### Estrutura
1. **Eyebrow** — canto superior esquerdo (ex.: “Abrindo parênteses”).
2. **Título** — bem acima, uma linha; destaque em accent na palavra-chave.
3. **Sem subtítulo** entre título e conteúdo (ou só uma linha curta se necessário).
4. **Corpo:** `slide-split` com:
   - **Esquerda:** Conteúdo em **caixas que definem bem**:
     - **Principle-cards** para cada ideia (título + descrição; borda esquerda accent).
     - **Callout** para dica/pro-tip (opcional), abaixo dos cards.
   - **Direita:** **Um único elemento visual grande** (screenshot ou imagem), com:
     - `max-width` do split ~1100px, `margin-top: 32px`, `align-items: flex-start`.
     - Imagem: `border-radius: 12px`, `box-shadow` suave; container sem borda tracejada.

### Regras de apresentação (presentation-design)
- **Um conceito por bloco:** cada principle-card = uma afirmação + evidência (texto curto).
- **Evitar “bullet point disease”:** preferir cards com título + descrição a listas longas.
- **Hierarquia clara:** título alto → cards → callout; imagem não compete com texto.
- **Contraste:** em slides com bg cinza (`slide-type-parenteses`), eyebrow em `text-primary` e peso 600.

### Aplicar a
- GitHub (bullets + callout → manter ou converter a 2 principle-cards + callout; imagem à direita).
- Modo Agent (bullets → 3 principle-cards; placeholder/screenshot à direita).
- Skills (bullets → principle-cards; placeholder/screenshot à direita).
- Outros slides de “parênteses” com conteúdo denso + possível imagem.

---

## Padrões de layout (templates)

### 1. Imagem à direita + 3 opções à esquerda

- **Layout:** `slide-split`  
- **Esquerda:**  
  - Três blocos empilhados (cards, steps ou principle-cards) com espaçamento vertical consistente.  
  - Largura de referência: ~40% do split (`slide-split-left` até ~450–500px).  
- **Direita:**  
  - Uma imagem grande (`img` dentro de container simples, sem borda tracejada), com `border-radius: 12px` e `box-shadow` suave.  
- **Referência de proporção/espacamento:** **slide Allowlist** e GitHub/SSH.  

### 2. Título + texto de suporte + bullets à esquerda, código à direita

- **Layout:** `slide-split-code` (padrão Commands/Rules).  
- **Esquerda (35%)**  
  - Título alinhado à esquerda.  
  - Subtítulo com “Por que importa” + texto de apoio.  
- **Direita (60%)**  
  - `prompt-container` escuro ocupando quase toda a coluna, com label opcional e código/prompt com syntax highlighting.  
- **Referência de proporção/espacamento:** **slide de Commands** e **slide de Rules**.

### 3. Sugestão de conteúdo (vídeos / links)

- **Layout:** slide de conteúdo simples.  
- **Elementos:**  
  - Eyebrow (ex.: “Sugestão de conteúdo”).  
  - Título (ação/benefício) e subtítulo curto explicando o contexto.  
  - Imagem central clicável (thumb do vídeo) com bordas arredondadas e `box-shadow` forte.  
  - Link destacado abaixo (URL ou CTA).  
- **Referência de proporção/espacamento:** slide do vídeo do **Greg Isenberg** (Cursor Replaces Your Entire Business Stack).

## Regras de Uso
1. **Emojis:** Usar como ícones principais para manter estilo amigável/Notion.
2. **Ícones:** Estilo minimalista ou emojis.
3. **Imagens:** Placeholders devem ter borda tracejada.
4. **Logos:** Versões monocromáticas ou coloridas originais sobre fundo branco.

## Referências
- **Product Arena:** https://productarena.io
- **Referência Visual:** Layout de slide com Avatar à esquerda, Bio em tópicos à direita, Logos no rodapé.

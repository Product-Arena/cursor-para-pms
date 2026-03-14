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
- **Slide Padding:** 80px 100px
- **Alinhamento:** Centralizado por padrão (flexbox), mas flexível para splits (texto/imagem).

---

## Sistema de Espaçamento Vertical (Ritmo)

### Hierarquia: Eyebrow → Title → Subtitle → Content

O sistema de espaçamento cria uma hierarquia visual clara e consistente em todos os tipos de slide.

| Elemento | Posição/Espaçamento | Notas |
|----------|---------------------|-------|
| **Eyebrow** | `position: absolute; top: 60px; left: 100px;` | Âncora fixa no topo esquerdo |
| **Title** | `margin-top: 28px` (padrão) / `32px` (parênteses) / `44px` (block overview) | Empurra o conteúdo centralizado para baixo do eyebrow |
| **Subtitle** | `margin-top: 8px` (parênteses) / sem margin-top adicional (outros) | Acoplamento próximo ao título |
| **Content** | `margin-top: 32px` (padrão para slide-split, check-list-grid, etc.) | Espaço respiro antes do conteúdo principal |

### Por que funciona

O slide usa `justify-content: flex-start` (flexbox), garantindo que o conteúdo comece sempre abaixo do eyebrow — o título nunca fica acima dele. O eyebrow é posicionado absolutamente no topo (60px). O `margin-top` no título cria espaço visual entre o eyebrow e o restante do conteúdo.

### Espaçamentos por tipo de slide

| Tipo de Slide | `margin-top` do Title | Observação |
|---------------|----------------------|------------|
| Slide de capa (`slide-type-capa`) | `28px` | Centralizado; `justify-content: center` |
| Slides padrão | `28px` | Balanceamento visual para maioria dos slides |
| Slides de parênteses (`slide-type-parenteses`) | `32px` | Mais respiro para slides explicativos |
| Slides de bloco (`slide-block-overview`) | `44px` | Título grande precisa mais espaço |
| Slides de exercício (`slide-type-exercicio`) | `28px` | Consistente com padrão |

### Regra de ouro

- **O título deve estar sempre abaixo do eyebrow** — nunca acima. Hierarquia visual obrigatória: Eyebrow primeiro, Title em seguida.
- **Eyebrow a 60px do topo** → Título começa visualmente em torno de 100–120px do topo
- **Subtitle próximo ao título** → 8–12px de gap
- **Content com respiro** → 32px antes de grids, splits, cards

---

## Área Segura (Safe Area)

**Objetivo:** Garantir que o conteúdo nunca exceda os limites visíveis do slide em projeção (16:9, margens de TV/monitor).

### Regras obrigatórias

1. **Slides de exercício com layout denso** (principle-cards + prompt-container ou 3+ principle-cards + callout):
   - Usar **classe `slide--safe-area`** junto com `slide-type-exercicio`.
   - Isso aplica layout compacto: `slide-split` max-width 960px, `principle-card` com padding/margin reduzidos, `prompt-container` max-height 320px.

2. **Critério de uso:** Adicionar `slide--safe-area` quando o slide tiver:
   - 3 ou mais `principle-card` na coluna esquerda **e**
   - `prompt-container` ou bloco de código na direita **ou**
   - `callout-protip` adicional.

3. **Limites de conteúdo por slide:**
   - `slide-split`: `max-width: 960px` (safe-area) ou 1100px (padrão).
   - `slide-split-left`: `max-width: 480px` (safe-area) ou 520px (padrão).
   - `prompt-container`: `max-height: 320px` (safe-area); evitar conteúdo que force scroll excessivo.
   - `principle-card`: padding 14px 20px, margin-bottom 12px (safe-area).

4. **Margens do slide:** Respeitar `padding: 80px 100px` (conforme Layout no design system). Conteúdo não deve encostar nas bordas.

### Slides que usam slide--safe-area (referência)

- Jira — Criar User Story
- /start-a-business — Arena Voting System
- /create-prd — PRD a partir da Product Strategy
- Arquivos do curso na raiz do Workspace
- Design System — extrair de productarena.io
- Subir projeto no GitHub pessoal

---

## Tipos de slide (backgrounds)

- **Slide de capa**  
  - Classe: `slide slide-type-capa`  
  - **Fundo:** `var(--bg-primary)` (quase branco)  
  - **Layout:** Conteúdo centralizado vertical e horizontalmente (`justify-content: center`). Exceção à regra de `flex-start` — na capa o título e subtítulo ficam no centro do slide.  
  - **Estrutura:** Eyebrow (ex.: "Product Arena") + Title centralizado + Subtitle centralizado.  
  - **Uso:** Abertura da apresentação (título do curso, instrutores).

- **Slides de conteúdo (padrão)**  
  - Classe: `slide`  
  - **Fundo:** `var(--bg-primary)` (quase branco)  
  - Uso: seções principais, modos (Ask, Plan, Agent), setup, recap, agenda, presente da Arena etc.

- **Slides de parênteses e sugestões**  
  - Classe: `slide-type-parenteses`  
  - **Fundo:** `#c9ced4` (cinza médio)  
  - Uso: “Abrindo parênteses”, explicações laterais (GitHub, Allowlist, Skills, Prompt em Markdown, Fluxo prático, MCP) e “Sugestão de conteúdo” (ex.: vídeo do Greg).

- **Slides de exercícios e demos escuras**  
  - Classe: `slide-type-exercicio` e `slide-wow`  
  - **Fundo:** `#1a1a1a` (preto / cinza muito escuro)  
  - Uso: todos os exercícios (Ask, Plan, Agent, Plan → Build, Ask com contexto, MCP Jira) e a demo principal (“Seu dia pode começar com um comando”).

---

## Slide de referência: Exercício (slide-type-exercicio)

**Uso:** Todo slide de exercício prático (Ask, Plan, Agent, MCP, etc.). Layout consistente para o aluno saber onde olhar: label → título → descrição à esquerda, imagem ou GIF à direita.

### O que manter (padrão exercício)
1. **Label (eyebrow) no canto superior esquerdo** — ex.: “Exercício · Ask”, “Exercício · Plan”, “Exercício · MCP”. Estilo: badge com ícone ✋, fundo accent suave, borda.
2. **Título centralizado** — uma linha, com `<span class="accent">` na palavra-chave. Fonte branca sobre fundo escuro.
3. **Descrição à esquerda** — texto do que fazer (prompt sugerido, passos ou instrução). Fica na coluna esquerda do `slide-split`, em `slide-subtitle` ou bloco de texto.
4. **Imagem ou GIF à direita** — screenshot do Cursor, GIF de interação ou placeholder para ilustrar o exercício. Coluna direita do `slide-split`; `border-radius: 12px`, `box-shadow` suave.

### Estrutura
1. **Eyebrow** — `slide-eyebrow` (posição absoluta top/left via CSS).
2. **Título** — `slide-title` centralizado (text-align: center no container do título ou slide).
3. **Corpo:** `slide-split` com:
   - **Esquerda:** Descrição em `slide-subtitle` ou bloco de instrução (prompt a enviar, link, etc.). Largura ~40–50% do split.
   - **Direita:** `screenshot-container` ou container com `<img>` ou GIF. Altura máxima ~340–400px para não dominar o slide.

### Classes e estilos (exercício)
- **Container:** `slide slide-type-exercicio` — fundo `#1a1a1a`, texto branco.
- **Variante densa:** Adicionar `slide--safe-area` quando houver 3+ principle-cards + prompt-container ou callout (ver seção **Área Segura**).
- **Eyebrow:** posição absoluta `top: 60px`, `left: 100px`; badge accent; `::before` com ícone ✋.
- **Título:** `slide-title` com `color: #ffffff`; centralizado.
- **Split:** `slide-split` `max-width: 1100px` (ou 960px com `slide--safe-area`), `margin-top: 32px` (ou 16px com safe-area), `align-items: flex-start`.
- **Imagem/GIF:** `border-radius: 12px`, `box-shadow: 0 20px 40px rgba(0,0,0,0.15)` ou similar.

### Exemplo de estrutura HTML (exercício)
```html
<div class="slide slide-type-exercicio">
  <div class="slide-eyebrow">Exercício · Agent</div>
  <div class="slide-title"><span class="accent">Agent</span> — Instalar skills</div>
  <div class="slide-split" style="max-width: 1100px; margin-top: 32px; align-items: flex-start;">
    <div class="slide-split-left">
      <div class="slide-subtitle" style="margin-top: 0;">Envie: <strong>“Quero que você instale esses skills no meu workspace.”</strong> Aprove as etapas que o Agent sugerir.</div>
    </div>
    <div class="screenshot-container" style="margin-top: 0; max-width: 520px;">
      <img src="assets/agent-exercise.png" class="screenshot-image" alt="...">
    </div>
  </div>
</div>
```

### Aplicar a
- Todos os slides com classe `slide-type-exercicio`: Ask, Plan (mapear e clonar), Ask com contexto, Agent (instalar skills), MCP Jira. Manter sempre: label canto esquerdo, título centralizado, descrição à esquerda, imagem ou GIF à direita (ou placeholder até ter asset).
- **slide--safe-area:** Usar em exercícios com conteúdo denso (3+ cards + prompt/callout) para nunca exceder a área segura — ver seção **Área Segura**.

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

## Slide de referência: Recap / Resumo de ideias

**Uso:** Slides de recap, retorno (ex. pós-almoço), resumo de blocos e listas de ideias-chave. Referência: slide **“Recap e perguntas”** — valorizar posição do título, blocos com emoji, sombreado e distribuição equilibrada.

### O que manter (padrão recap)
- **Posição do título:** eyebrow no topo, título em seguida (uma linha, com optional `<span class="accent">` na palavra-chave).
- **Blocos com emoji:** cada item = um card com emoji à esquerda + texto (título em negrito + descrição curta).
- **Sombreado:** cards com fundo branco, borda definida e `box-shadow` para destacar do fundo do slide.
- **Bem distribuídos:** grid 2 colunas, gap generoso; conteúdo centralizado ou com `max-width` para não esticar demais.

### Estrutura
1. **Eyebrow** — canto superior esquerdo (ex.: “Retorno do almoço”, “Resumo do bloco”).
2. **Título** — logo abaixo; destaque em accent na palavra-chave (ex.: “Recap e **perguntas**”).
3. **Corpo:** `check-list-grid` com `check-card`s:
   - Cada card: `check-icon` (emoji) + `check-text` (texto com `<strong>` no rótulo).
   - Grid: 2 colunas, `gap` 24px (recap) ou 20px; `margin-top` ~40px (recap) ou 32px; `max-width` ~1000px (recap) ou 900px.
4. **Opcional:** subtítulo abaixo do grid (ex.: “Espaço para dúvidas…”) com `margin-top: 40px`, fonte ~1.1rem, opacity ~0.8.

### Classes e estilos (recap)
- **Container do slide:** `slide slide-recap` — fundo `var(--bg-secondary)` para contraste com os cards.
- **Grid:** `check-list-grid` — `display: grid`, `grid-template-columns: 1fr 1fr`, `gap` 24px (recap), `max-width: 1000px`, `margin-top: 40px`.
- **Card:** `check-card` — fundo branco, `border: 2px solid rgba(0,0,0,0.14)`, `border-radius: 12px`, `box-shadow: 0 4px 16px rgba(0,0,0,0.08)`, `padding: 20px 24px`, `display: flex`, `align-items: center`, `gap: 16px`.
- **Emoji:** `check-icon` — emoji no primeiro filho; no recap pode usar emojis temáticos (💬 🧠 ⚡ 🛡️ etc.).
- **Texto:** `check-text` — `check-text` com `color: var(--text-primary)` no contexto recap; uso de `<strong>` para o rótulo do item.

### Exemplo de estrutura HTML (recap)
```html
<div class="slide slide-recap">
  <div class="slide-eyebrow">Retorno do almoço</div>
  <div class="slide-title">Recap e <span class="accent">perguntas</span></div>
  <div class="check-list-grid" style="margin-top: 40px; max-width: 1000px; gap: 24px;">
    <div class="check-card">
      <div class="check-icon">💬</div>
      <div class="check-text"><strong>Ask & Contexto:</strong> Conversar com arquivos e pastas</div>
    </div>
    <div class="check-card">...</div>
  </div>
  <div class="slide-subtitle" style="margin-top: 40px; font-size: 1.1rem; opacity: 0.8;">Espaço para dúvidas...</div>
</div>
```

### Aplicar a
- Qualquer slide de recap ou “retorno” (ex.: após almoço, entre blocos).
- Resumos de ideias (agenda do dia, checklist de conceitos, takeaways).
- Listas de tópicos em formato card com emoji, quando a prioridade é legibilidade e distribuição visual equilibrada.

---

## Callout Pro-Tip

Callout dedicado para dicas e “pro tips”, **distinto visualmente do principle-card** (evitar mesma borda esquerda e mesmo formato de caixa).

### Regras
- **Classe:** `callout-protip` (não usar `principle-card` para pro-tip).
- **Emoji obrigatório** no início (ex.: 💡 Pro tip, ⚡ Dica) para reconhecimento rápido e tom amigável.
- **Formato diferente do principle-card:** não repetir o mesmo bloco retangular com borda esquerda vermelha. Usar formato próprio (ver especificações abaixo).

### Cor e contraste (qualquer background)
- **Cor de destaque:** accent forte da paleta — `#FF5757` (rgba(255, 87, 87, 1)).
- **Funcionar em qualquer background:**
  - **Slides claros** (bg primary/secondary/tertiary): borda/ícone em `#FF5757`; fundo do callout `rgba(255, 87, 87, 0.12)` (Accent Subtle); texto em `#1a1a1a` ou `#555555`.
  - **Slides cinza médio** (`slide-type-parenteses`, `#c9ced4`): mesma borda `#FF5757`; fundo `rgba(255, 87, 87, 0.15)`; texto escuro.
  - **Slides escuros** (`slide-type-exercicio`, `#1a1a1a`): borda `#FF5757`; fundo `rgba(255, 87, 87, 0.2)`; texto `#f5f5f5` ou `#ffffff`.

### Especificações do componente (formato distinto)
- **Layout:** bloco compacto em formato de **barra horizontal** ou **card com canto destacado**, não o mesmo retângulo 342×122px do principle-card.
- **Sugestão de implementação:**
  - Borda esquerda grossa (4px) em `#FF5757` + fundo semitransparente conforme o contexto (acima).
  - Emoji + label (“Pro tip” / “Dica”) em negrito + texto da dica na mesma linha ou em linha seguinte curta.
  - Dimensões flexíveis pela coluna (ex.: `max-width` do container), altura por conteúdo (padding vertical ~12px–16px), evitando altura fixa 122px.
- **Não usar** para o pro-tip: `border-left-color` idêntico ao principle-card no mesmo formato (evitar confusão visual).

### Exemplo de estrutura HTML
```html
<div class="callout-protip">
  <span class="callout-protip-icon">💡</span>
  <div class="callout-protip-content">
    <strong>Pro tip</strong> — Texto da dica em uma ou duas linhas.
  </div>
</div>
```

### Resumo
| Aspecto | Principle-card | Callout Pro-Tip |
|--------|-----------------|-----------------|
| Classe | `.principle-card` | `.callout-protip` |
| Formato | Card retangular (ex. 342×122px), borda esquerda | Barra/card compacto, formato diferente, altura por conteúdo |
| Cor borda | `#FF5757` | `#FF5757` (mesma paleta, uso em layout distinto) |
| Emoji | Opcional | Obrigatório |
| Uso | Afirmação + evidência | Dica rápida, pro-tip |

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

### 2. Conteúdo + Código (`slide-type-content-code`)

**Uso:** Slides que explicam um conceito com blocos de texto à esquerda e um exemplo de código/prompt à direita. Fundo branco (conteúdo), código em bloco dark.

#### Estrutura
1. **Eyebrow** — canto superior esquerdo (ex.: "Fluxo de trabalho").
2. **Título** — centralizado, com accent na palavra-chave.
3. **Corpo:** `slide-split` com gap de 48px:
   - **Esquerda (42%):** `slide-split-left` com principle-cards (2-3) + callout pro-tip opcional.
   - **Direita:** `prompt-container` dark com `prompt-label` e `<pre>` com syntax highlighting.

#### Classes e estilos
- **Container:** `slide slide-type-content-code` — fundo branco com gradiente sutil.
- **Split:** gap de 48px; esquerda 42%, direita flex.
- **Código:** `prompt-container` dark (`#0f0f0f`), borda `#333`, `border-radius: 12px`, `box-shadow` forte.
- **Syntax:** `.syntax-heading`, `.syntax-list`, `.syntax-key`, `.syntax-string`, `.syntax-comment`.

#### Aplicar a
- Slide "Prompt em Markdown" (conceito + exemplo de prompt).
- Qualquer slide que precise mostrar código/prompt como exemplo visual de um conceito.

---

### 3. Título + texto de suporte + bullets à esquerda, código à direita

- **Layout:** `slide-split-code` (padrão Commands/Rules/Skills como conteúdo).  
- **Esquerda (35%)**  
  - Título alinhado à esquerda.  
  - Subtítulo com "Por que importa" + texto de apoio.  
  - **Regra obrigatória:** a coluna esquerda (`slide-left-content`) deve **sempre começar no topo** — nunca centralizada verticalmente. Usar `align-items: start` no `.slide-split-code`.  
- **Direita (60%)**  
  - `prompt-container` escuro ocupando quase toda a coluna, com label opcional e código/prompt com syntax highlighting.  
- **Referência de proporção/espacamento:** **slide de Rules** (posicionamento no topo). Aplicar ao slide de **Skills** quando for de conteúdo (não "Abrindo parênteses").

### 4. Sugestão de conteúdo (vídeos / links)

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

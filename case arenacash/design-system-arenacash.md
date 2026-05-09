# Design System ArenaCash
**Versão:** 3.0 | **Atualizado:** abril de 2026
**Mantenedora:** Marta Lima (Head of Design) | **Status:** uso obrigatório para produto e marketing

> ⚠️ **v3.0 — Realinhamento visual com Product Arena Design System.**
> A ArenaCash é uma empresa fictícia criada e mantida pela **Product Arena** para uso em treinamentos.
>
> **Regra obrigatória:** todo material gerado com o nome ou identidade ArenaCash — slides, documentos, dashboards, mockups — deve exibir o logo da Product Arena. Os arquivos de logo estão na pasta `logo/` deste kit. Consulte a seção [Logotipo Product Arena](#logotipo-product-arena) para regras de uso.

---

## Princípios de marca

A ArenaCash é uma fintech de investimentos com identidade **direta, confiável e moderna**. O design system traduz esses valores em decisões concretas:

1. **Legibilidade antes de decoração.** Investidor iniciante não deve precisar decodificar interfaces. Hierarquia tipográfica clara, espaçamento generoso, ícones apenas quando necessários.
2. **Números como protagonistas.** Em tela de investimento, o valor é o herói. Tipografia tabular, contraste alto, cor neutra (exceto em ganhos/perdas).
3. **Vermelho com parcimônia.** O vermelho coral é a cor de ação (CTA, links, marcos importantes). Usado demais, perde peso. Regra: ≤ 15% da área de qualquer tela.
4. **Preto como base, não como fundo escuro.** A marca é preto profundo sobre branco/neutros. Não somos um app "dark mode first" — temos modo escuro, mas o padrão é claro.

---

## Logotipo Product Arena

**Todo material gerado com a identidade ArenaCash deve obrigatoriamente exibir o logo da Product Arena.** A ArenaCash é uma empresa fictícia criada pela Product Arena para fins de treinamento — o logo da Product Arena é a assinatura que identifica a origem do material.

Os arquivos de logo estão na pasta **`logo/`** dentro deste kit (mesmo nível deste arquivo).

### Variantes disponíveis

| Arquivo | Uso |
|---------|-----|
| `logo/product-arena-red.png` | **Preferencial.** Wordmark horizontal em vermelho coral. Use em fundos brancos ou claros. |
| `logo/product-arena-2cores-transparent.png` | Fundo transparente. Versátil para sobreposição. |
| `logo/product-arena-2cores-black.png` | PRODUCT em vermelho + ARENA em branco, sobre fundo preto. Use em slides e materiais com fundo escuro. |
| `logo/product-arena-mix-frase.png` | Logo com tagline *"na prática, a teoria é BEM diferente."* Use em capas e materiais institucionais. |
| `logo/product-arena-red-small.png` | Versão compacta para espaços reduzidos. |

### Onde e como posicionar

- **Slides e apresentações:** canto superior direito, tamanho mínimo de 80px de largura, margem de 16px das bordas.
- **Documentos (Word, PDF):** rodapé ou cabeçalho, alinhado à direita.
- **Mockups e telas de produto:** rodapé da interface, alinhado à direita ou centralizado.
- **Espaço de respiro:** mínimo de 16px em todas as direções ao redor do logo.
- **Nunca:** distorcer proporções, aplicar efeitos ou filtros de cor, usar sobre fundo colorido sem backdrop sólido, omitir o logo em qualquer material ArenaCash.

---

## Paleta de cores

### Cores primárias

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `brand/red` | `#FF494C` | 255, 73, 76 | CTAs, links, destaques, logo ArenaCash |
| `brand/red-hover` | `#E63B3E` | 230, 59, 62 | Hover de CTAs |
| `brand/red-press` | `#C8282B` | 200, 40, 43 | Estado pressed |
| `brand/black` | `#0A0A0A` | 10, 10, 10 | Texto principal, fundo de headers |
| `brand/white` | `#FFFFFF` | 255, 255, 255 | Fundo padrão, texto sobre escuro |

### Cores de superfície

| Token | Hex | Uso |
|-------|-----|-----|
| `surface/primary` | `#FFFFFF` | Fundo padrão de telas |
| `surface/secondary` | `#F9F9F9` | Cards, seções secundárias |
| `surface/tertiary` | `#F2F2F2` | Inputs, divisores grandes |
| `surface/dark` | `#0A0A0A` | Modo escuro e hero backgrounds |

### Cores semânticas (específicas para fintech)

| Token | Hex | Uso |
|-------|-----|-----|
| `semantic/success` | `#1FA05B` | Rentabilidade positiva, sucesso |
| `semantic/error` | `#D93434` | Rentabilidade negativa, erro |
| `semantic/warning` | `#E08A1E` | Alertas, estados de atenção |
| `semantic/info` | `#2870E0` | Informações neutras, links externos |

### Cores neutras

| Token | Hex | Uso |
|-------|-----|-----|
| `neutral/900` | `#141414` | Texto primário sobre claro |
| `neutral/700` | `#333333` | Texto secundário |
| `neutral/500` | `#7A7A7A` | Texto terciário, placeholders |
| `neutral/300` | `#D1D1D1` | Bordas, divisores |
| `neutral/100` | `#F2F2F2` | Fundos muito sutis |

### Regras de uso

- Texto sobre `brand/red`: sempre `#FFFFFF` (contraste WCAG AA suficiente em textos grandes ≥ 18pt).
- Texto sobre `brand/black`: sempre `#FFFFFF`.
- CTA primário: fundo `brand/red`, texto branco, hover `brand/red-hover`, pressed `brand/red-press`.
- CTA secundário: fundo transparente, borda `neutral/300`, texto `neutral/900`.
- Nunca combinar `semantic/success` e `semantic/error` em gradiente.
- **Sem gradientes** — a marca é flat e saturada. A única exceção é uma sombra sutil (`rgba(255,73,76,0.25)`) sob o botão CTA primário.

---

## Tipografia

### Famílias

- **Display e títulos:** `Archivo` (variável, peso 900/Black) — geometric sans bold, substituto aprovado da tipografia original da Product Arena.
- **Corpo, UI e numérico:** `Inter` (variável) — geometric humanist sans, pesos 400–600.
- **Código e prompts:** `JetBrains Mono` (variável) — para samples de IA e código nas telas de produto.

Todas auto-hospedadas como webfonts variáveis (`.woff2`). Em ambientes sem suporte a webfonts, fallback para `system-ui, -apple-system, sans-serif`.

### Escala

| Token | Fonte | Tamanho | Line-height | Peso | Uso |
|-------|-------|---------|-------------|------|-----|
| `display/xl` | Archivo | 80px | 1.05 | 900 | Hero stat, wordmark |
| `display/lg` | Archivo | 48px | 1.05 | 900 | Headers de landing |
| `display/md` | Archivo | 36px | 1.05 | 900 | Títulos de página |
| `display/sm` | Archivo | 28px | 1.15 | 700 | Seções importantes |
| `heading/lg` | Archivo | 22px | 1.15 | 700 | H2 |
| `heading/md` | Archivo | 18px | 1.15 | 600 | H3 |
| `body/lg` | Inter | 16px | 1.6 | 400 | Texto padrão |
| `body/md` | Inter | 14px | 1.45 | 400 | Texto secundário |
| `body/sm` | Inter | 12px | 1.45 | 400 | Labels, metadados |
| `mono/numeric` | Inter (tabular) | 18px | 1.45 | 500 | Valores monetários em listas |
| `button/default` | Inter | 15px | 1.45 | 600 | Texto de botão |

### Regras tipográficas

- **Valores monetários**: sempre Inter com `font-variant-numeric: tabular-nums`. Garante alinhamento de decimais em listas.
- **Nunca itálico em números.** Valores são literais.
- **CAPS LOCK apenas em siglas** (CDB, LCI, IPCA) e nos labels de seção no estilo Product Arena (`I N V E S T I R`, `C A R T E I R A`).
- **Letter-spacing em display**: `-0.02em` (tracking apertado). Em labels de seção estilo PA: `0.18em` (espaçado).
- **Parágrafos máximos de 75 caracteres por linha** em web.

---

## Logotipo ArenaCash

O logotipo ArenaCash combina um símbolo e a wordmark.

- **Símbolo:** "A" estilizado, sempre em `brand/red` (`#FF494C`)
- **Wordmark:** "arenacash" em Archivo 900, lowercase, em `brand/black` (fundo claro) ou `brand/white` (fundo escuro)
- **Espaço de respiro:** mínimo de 1× altura do símbolo em todas as direções
- **Tamanho mínimo:** 24px de altura em digital, 8mm em impresso
- **Nunca:** rotacionar, inclinar, aplicar gradiente, usar cor fora de `brand/red`/preto/branco, colocar sobre imagem sem backdrop ou cápsula sólida

---

## Componentes principais

### Botão

**Primário:**
- Fundo: `brand/red` (`#FF494C`)
- Texto: `#FFFFFF`, 15px Inter 600
- Padding: 12px vertical, 24px horizontal
- Border-radius: 10px (`--radius-md`)
- Sombra CTA: `0 8px 24px rgba(255,73,76,0.25)` — apenas em botões primários, uma vez por tela
- Estados: hover `brand/red-hover` + sombra, pressed `brand/red-press` + `translateY(1px)`, disabled 30% opacidade

**Secundário:**
- Fundo: transparente
- Borda: 1px `neutral/300`
- Texto: `neutral/900`, 15px Inter 600
- Hover: fundo `surface/secondary`

**Terciário (texto):**
- Sem fundo, sem borda
- Texto: `brand/red`, 15px Inter 600

### Card de investimento

Padrão para listar produtos (CDB, LCI, Tesouro, Ações, Cripto).

- Fundo: `surface/primary` (`#FFFFFF`)
- Borda: 1px `neutral/300`; hover: borda `brand/red`
- Border-radius: 16px
- Padding: 16px
- Sem sombra (borda faz o trabalho)
- Header: nome do produto em `heading/md` (Archivo 600 18px)
- Destaque: rentabilidade anualizada em `mono/numeric` à direita
- Footer: CTA "Investir" estilo terciário + métricas em `body/sm` `neutral/500`

### Input

- Altura: 48px
- Fundo: `surface/tertiary`
- Borda: 1px `neutral/300`; focus: `brand/red`; erro: `semantic/error`
- Border-radius: 10px
- Label: `body/sm` `neutral/700`, sempre acima do input (nunca placeholder como label)
- Placeholder: `neutral/500`, apenas exemplo

### Chart (rentabilidade)

- Linha principal: `brand/red` 2px
- Linha de comparação (CDI, etc.): `neutral/500` 1.5px, tracejada
- Área sob a linha: `brand/red` 10% opacidade
- Eixos: `neutral/300`; labels em `body/sm`
- Tooltip: fundo `brand/black`, texto `#FFFFFF`, valor em `mono/numeric`

### Navegação (bottom tab mobile)

- Altura: 68px
- Fundo: `surface/primary` com `box-shadow: 0 -1px 0 neutral/300`
- Ícone ativo: `brand/red`; label `body/sm` 600
- Ícone inativo: `neutral/500`; label `body/sm` 400
- 5 abas fixas: Home, Investir, Carteira, Cripto, Perfil

---

## Grid e espaçamento

### Grid

- Web: 12 colunas, gutter 24px, max-width 1200px
- Mobile: 4 colunas, gutter 16px, margens laterais 16px

### Escala de espaçamento (tokens)

Baseada em múltiplos de 4px.

| Token | Valor |
|-------|-------|
| `space/1` | 4px |
| `space/2` | 8px |
| `space/3` | 12px |
| `space/4` | 16px |
| `space/5` | 20px |
| `space/6` | 24px |
| `space/8` | 32px |
| `space/10` | 40px |
| `space/12` | 48px |
| `space/16` | 64px |
| `space/20` | 80px |
| `space/24` | 96px |

Regra de ouro: seções devem respirar `space/16` (64px) ou mais entre blocos maiores.

### Corner radii

- **Botões / inputs:** 10px (`radius/md`) — não pill, não quadrado
- **Cards:** 16px (`radius/lg`)
- **Badges / tags:** 999px (`radius/pill`)
- **Imagens em cards:** 16px; foto full-bleed sem radius

---

## Iconografia

- Biblioteca: **Lucide icons** (`lucide.dev`) — open source, estilo linha geométrica
- Stroke: 2px (padrão Lucide)
- Tamanhos: 16px, 20px, 24px, 32px (só esses)
- Cor padrão: `neutral/700`; em CTAs: `brand/red` ou branco
- **Nunca misturar duas bibliotecas** de ícones na mesma tela
- Emoji policy: `🤓` em copy de marketing é on-brand (herança Product Arena); fora disso, usar ícones reais

---

## Motion

Animações são sutis e funcionais.

- `ease/standard`: `cubic-bezier(0.2, 0.6, 0.2, 1)` — padrão (220ms)
- `ease/entrance`: `cubic-bezier(0.16, 1, 0.3, 1)` — elementos entrando
- `ease/exit`: `cubic-bezier(0.4, 0, 1, 1)` — elementos saindo
- Duração máxima: 300ms. Hover: 150ms.
- **Sem bounce, sem elastic** — a marca é direta, não playful-in-motion.
- Botão CTA vermelho no hover: cor escurece + sombra glow vermelha (`shadow-pop`).

---

## Tom de voz (UX writing)

Regras gerais — aprofundamento completo em `tom-de-voz.md` do projeto.

- **Direto:** "Investir R$ 100" melhor que "Confirmar aplicação de cem reais"
- **Humano:** "A gente precisa confirmar sua identidade" melhor que "Verificação biométrica obrigatória"
- **Honesto:** nunca esconder risco, nunca usar "investimento seguro" sem qualificar
- **Sem jargão desnecessário:** "rendimento" em vez de "yield", "título" em vez de "bond"

Preferências específicas:
- Usar "você" (nunca "tu" ou "o cliente")
- Valores monetários sempre com "R$" antes
- Percentuais com uma casa decimal ("12,3% a.a.")
- Tom informal mas preciso — herança Product Arena: "mão na massa", não corporativo

---

## O que NÃO fazer

- ❌ Cores fora da paleta (em especial: sem laranja, sem azul como cor de ação)
- ❌ Tipografia diferente de Archivo/Inter/JetBrains Mono
- ❌ Gradientes (exceto sombra vermelha sob CTA)
- ❌ Ícones 3D ou emoji nativos em UI de produto
- ❌ Fundos estampados, texturas, backdrop-blur
- ❌ Logo ArenaCash sem o logo Product Arena no mesmo documento/tela
- ❌ Mais de 2 CTAs primários na mesma tela
- ❌ Botão com mais de 3 palavras

---

## Referências e ferramentas

- Figma: `arenacash-design-system` (workspace interno)
- Tokens CSS: `product arena design system/colors_and_type.css` (fonte de verdade de tokens)
- Logos Product Arena: `product arena design system/assets/logos/`
- Contato design: #design no Slack interno ou `marta.lima@arenacash.com.br`
- Contato Product Arena: `arthur@productarena.io`

# Design System

**Project:** [Project Name]
**Version:** [Version]
**Last Updated:** [Date]

> **IMPORTANT:** This document should be created AFTER Product Strategy and PRD. It connects business decisions with visual identity.

---

## 1. Business Context

**Reference:** `documents/product-strategy-[project-name].md` (where [project-name] is the project folder name)

**Note:** All standard documents follow the pattern `[document-type]-[project-name].md` to avoid conflicts when working with multiple projects.

### Value Proposition
[Extract from Product Strategy - "Value Proposition" section]
- Core values: [List core values]
- What the product sells: [Value proposition]

### Target Audience
[Extract from Product Strategy - "Audience" section]
- Primary audience: [Description]
- Common characteristics: [Traits]

### Emotions to Convey
[Derive from value proposition - what emotions should the visual communicate?]
- [Emotion 1]: [How it relates to value proposition]
- [Emotion 2]: [How it relates to value proposition]
- [Emotion 3]: [How it relates to value proposition]

**Example:** If the value proposition is "trust and tranquility", the emotions might be: trust, security, calm, care.

### Competitive Differentiation
[Extract from Product Strategy - Market Analysis]
- How we differentiate visually: [Description]
- What to avoid: [What to avoid visually]

---

## 2. Visual Principles

### Brand Sensation

What feeling should the brand transmit:

- [Principle 1]
- [Principle 2]
- [Principle 3]
- [Principle 4]

### What the Visual Should Avoid

- [Anti-pattern 1]
- [Anti-pattern 2]
- [Anti-pattern 3]

### Core Visual Rule

> [The core visual rule - how should the product look and feel? What should it remind users of?]

**Example:** "The product should look more like a digital banking app than [industry stereotype]."

---

## 3. Color Palette

### Primary Colors

**Primary Color (CTA / Accent)**
- Hex: `#[HEX_CODE]`
- HSL: `hsl([H], [S]%, [L]%)`
- Usage:
  - [Use case 1]
  - [Use case 2]
- Never use:
  - [Anti-pattern 1]
  - [Anti-pattern 2]

**Primary Text Color**
- Hex: `#[HEX_CODE]`
- Usage:
  - [Use case 1]
  - [Use case 2]

**Primary Background Color**
- Hex: `#[HEX_CODE]`
- Usage:
  - [Use case 1]
  - [Use case 2]

**Surface Color (Cards, Containers)**
- Hex: `#[HEX_CODE]`
- Usage:
  - [Use case 1]
  - [Use case 2]

### Supporting Colors

**Secondary Text**
- Hex: `#[HEX_CODE]`

**Borders and Dividers**
- Hex: `#[HEX_CODE]`

**Success**
- Hex: `#[HEX_CODE]`

**Error / Alert**
- Hex: `#[HEX_CODE]`

### Recommended Usage Proportion

- [X]% [Color 1]
- [X]% [Color 2]
- [X]% [Color 3]

---

## 4. Typography

### General Style

- [Style characteristic 1]
- [Style characteristic 2]
- [Style characteristic 3]

### Recommended Font

- **Primary:** [Font Name]
- Acceptable alternatives:
  - [Alternative 1]
  - [Alternative 2]

### Typographic Hierarchy

**Primary Headings (H1 / H2)**
- Weight: [Weight]
- Color: [Color reference]
- Usage: [Use cases]

**Subheadings (H3 / H4)**
- Weight: [Weight]
- Color: [Color reference]
- Usage: [Use cases]

**Body Text**
- Weight: [Weight]
- Color: [Color reference]
- Line-height: [Value]

**Auxiliary Text**
- Weight: [Weight]
- Color: [Color reference]
- Usage: [Use cases]

---

## 5. Spacing and Layout

### Spacing System

- Base unit: [Value] (e.g., 4px, 8px)
- Scale: [Scale description]

### Layout Principles

- [Principle 1]
- [Principle 2]
- [Principle 3]

### Breakpoints (if applicable)

- Mobile: [Value]
- Tablet: [Value]
- Desktop: [Value]

---

## 6. Components

### Buttons

**Primary Button**
- Background: [Color reference]
- Text: [Color reference]
- Border radius: [Value]
- Usage: [Use cases]

**Secondary Button**
- Background: [Color reference]
- Border: [Value] [Color reference]
- Text: [Color reference]
- Usage: [Use cases]

### Inputs and Forms

**Style**
- Background: [Color reference]
- Border: [Value] [Color reference]
- Border radius: [Value]
- Labels: [Visibility rule]

**States**
- Focus: [Style description]
- Error: [Style description]
- Disabled: [Style description]

### Cards and Containers

**Cards**
- Background: [Color reference]
- Border radius: [Value]
- Shadow: [Shadow description]
- Internal spacing: [Value]

### Icons

**Style**
- Type: [Outline/Filled]
- Stroke: [Value]
- Default color: [Color reference]

---

## 7. Design Tokens (for automatic generation)

### CSS Variables

```css
/* Brand Colors */
--primary: [HSL values];
--primary-foreground: [HSL values];
--secondary: [HSL values];
--background: [HSL values];
--foreground: [HSL values];
/* ... additional tokens ... */
```

### Tailwind Config Extensions

```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... additional color mappings
},
fontFamily: {
  sans: ["[Font Name]", "system-ui", "sans-serif"],
},
```

---

## 8. Accessibility and Legibility

- [Accessibility principle 1]
- [Accessibility principle 2]
- [Accessibility principle 3]

---

## 9. Quick Visual Consistency Checklist

Before implementing any screen or component:

- [ ] Do colors follow the recommended proportion?
- [ ] Is text readable without effort?
- [ ] Does the screen have sufficient breathing room?
- [ ] Does the visual convey the desired emotions?
- [ ] Is it aligned with visual principles?

---

## 10. Final Visual Thesis

[The final visual thesis - what is the core belief about how this product should look and feel?]

Every color, font, icon, and white space should help the user feel that:

> "[Desired user feeling/emotion]"

---

**Note:** This design system should be used as the single reference for all visual decisions in the product. Components must always follow these tokens, never use hardcoded values.

---

## License and Attribution

This template is part of the [Venture Builder Workflow](https://github.com/luccmattos/building-products) developed by [Lucas Mattos](https://github.com/luccmattos).


Venture Builder Workflow  © 2025 by Lucas Mattos is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/

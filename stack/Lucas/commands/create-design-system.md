---
description: "Create a Design System document (tokens, components, patterns) from Product Strategy and PRD."
---

**When user runs `/create-design-system` or requests Design System creation:**

## Prerequisites Check

1. **Verify Product Strategy exists:**
   - Check for `documents/product-strategy-[project-name].md` (where [project-name] is the folder name)
   - Also check for `documents/product-strategy-*.md` pattern
   - If missing: "Please create Product Strategy first using /start-a-business or manually."

2. **Check for PRD (recommended but not required):**
   - Check for `documents/prd-[project-name].md` (where [project-name] is the folder name)
   - Also check for `documents/prd-*.md` pattern
   - If exists, use it for additional context
   - If missing, proceed with Product Strategy only

## Step 1: Read Source Documents

1. **Read Product Strategy:**
   - Extract: Value Proposition section
   - Extract: Target Audience section
   - Extract: Market Analysis section
   - Extract: Product Vision and Mission

2. **Read PRD (if exists):**
   - Extract: User Journey information
   - Extract: Feature priorities
   - Extract: UX requirements

## Step 2: Extract Design System Insights

From Product Strategy, extract:

1. **Value Proposition → Emotions:**
   - Analyze the value proposition
   - Derive emotions that should be conveyed visually
   - Example: "trust and tranquility" → emotions: trust, security, calm, care

2. **Target Audience → Typography/Visual Language:**
   - Analyze audience characteristics
   - Determine appropriate typography style
   - Determine visual language that resonates

3. **Market Analysis → Differentiation:**
   - Identify competitive positioning
   - Determine visual differentiation strategy
   - Identify what to avoid visually

4. **Product Vision → Brand Personality:**
   - Extract brand personality from vision
   - Connect to visual principles

## Step 3: Create Design System Document

1. **Read template:** `.cursor/templates/Design System Template.md`

2. **Create `documents/design-system-[project-name].md`** with:
   - Use the project name (from folder) to create the file name
   - Example: For project "my-business", create `design-system-my-business.md`
   - Fill "Business Context" section using extracted insights
   - Guide user through Visual Principles
   - Guide user through Color Palette (ask about brand colors)
   - Guide user through Typography (suggest based on audience)
   - Guide user through Components
   - Fill Design Tokens section with actual values

3. **Ask clarifying questions:**
   - "What colors represent your brand values?"
   - "What typography style resonates with your audience?"
   - "What visual style should differentiate you from competitors?"

## Step 4: Generate CSS and Tailwind Config

After Design System document is complete:

1. **Generate `src/index.css`:**
   - Extract color values from Design System
   - Convert to HSL format for CSS variables
   - Create CSS variables following shadcn pattern:
     ```css
     :root {
       --primary: [H] [S]% [L]%;
       --primary-foreground: [H] [S]% [L]%;
       --background: [H] [S]% [L]%;
       --foreground: [H] [S]% [L]%;
       /* ... additional tokens ... */
     }
     ```

2. **Generate/Update `tailwind.config.ts`:**
   - Map CSS variables to Tailwind colors
   - Add font family if specified
   - Add custom spacing if specified
   - Follow existing pattern from other projects

3. **Verify structure:**
   - Ensure CSS variables match Tailwind config
   - Ensure all design tokens are properly mapped

## Step 5: Confirm Completion

After generation:

1. **Confirm files created:**
   - `documents/design-system-[project-name].md` ✓
   - `src/index.css` (with CSS variables) ✓
   - `tailwind.config.ts` (with extensions) ✓

2. **Explain next steps:**
   - "Design System created! The workspace-level rule will now automatically apply design system rules when you create components."
   - "Always use design tokens (CSS variables, Tailwind classes) - never hardcode colors, fonts, or spacing."

## Important Notes

- Design System MUST reference Product Strategy
- Always extract insights from business context, don't create in isolation
- CSS variables should use HSL format
- Tailwind config should reference CSS variables
- Design System becomes the single source of truth for visual decisions
- All standard documents follow the pattern `[document-type]-[project-name].md` to avoid conflicts when working with multiple projects


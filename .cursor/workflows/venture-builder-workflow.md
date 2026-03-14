# Venture Builder Workflow

Complete end-to-end workflow for creating new business ventures from idea to implementation.

## Overview

This workflow enables scalable, standardized business creation:
- **Idea → Project Structure** (automated)
- **Product Strategy** (guided by business consultant agent)
- **PRD** (based on Product Strategy)
- **Analytics Planning** (based on PRD KPIs)
- **Marketing Guide** (based on Product Strategy)
- **Design System** (based on Product Strategy + PRD)
- **Implementation Ready** (checkpoint with validated documents)
- **Implementation** (with visual cohesion guaranteed)

## Complete Workflow

### Phase 1: Idea → Project Structure

**Command:** `/start-a-business`

**What happens:**
1. Capture initial information:
   - Business/idea name
   - Brief description (1-2 sentences)
   - Target audience (brief description)

2. Create project structure automatically:
   ```
   projects/[business-name]/
   ├── documents/
   │   └── README.md
   └── README.md
   ```

3. Initialize Product Strategy creation:
   - Business Consultant Agent activates
   - Guides through Product Strategy template
   - Asks socratic questions
   - Creates `documents/product-strategy-[project-name].md` (where [project-name] is the folder name)

**Output:** Project structure + Product Strategy document

---

### Phase 2: Product Strategy → PRD

**Command:** `/create-prd` (or suggested after Product Strategy)

**What happens:**
1. Check for Product Strategy:
   - Read `documents/product-strategy-[project-name].md` (where [project-name] is the folder name)
   - Also check for `documents/product-strategy-*.md` pattern
   - Use as primary source for PRD

2. Read PRD template:
   - `.cursor/templates/PRD Template.md`

3. Create PRD document:
   - Map Product Strategy sections to PRD sections
   - Extract: Problems, Market Analysis, Audience, OKRs, Roadmap
   - Create `documents/prd-[project-name].md` (where [project-name] is the folder name)

4. Suggest next step:
   - "Would you like to create the Analytics Plan, Marketing Guide, or Design System now?"

**Output:** PRD document based on Product Strategy

---

### Phase 3: Analytics Planning

**Command:** `/create-analytics-plan` (suggested after PRD)

**What happens:**
1. Verify prerequisites:
   - Check `documents/prd-[project-name].md` exists (where [project-name] is the folder name)
   - Also check for `documents/prd-*.md` pattern

2. Extract from PRD:
   - KPIs from "Key Performance Indicators" section
   - User flows/journeys
   - Core features critical for business
   - Funnel steps and conversion points

3. Read Analytics Tracking Standard:
   - `.cursor/templates/Analytics Tracking Standard.md`
   - Understand event naming conventions and rules

4. Generate Event Catalog:
   - Infer events needed to measure each KPI
   - Create events following naming convention (object_action)
   - Map events to KPIs
   - Create `documents/analytics-events-[project-name].csv`

5. KPI Coverage Cross-Check:
   - List all KPIs from PRD
   - Identify which events measure each KPI
   - Report coverage status
   - Suggest additional events if needed

6. Suggest next step:
   - "Analytics Event Catalog created! Would you like to create the Marketing Guide or Design System now?"

**Output:** Event Catalog CSV with all events + KPI coverage report

---

### Phase 4: Marketing Guide Creation

**Command:** `/create-marketing-guide` (or suggested after PRD)

**What happens:**
1. Verify prerequisites:
   - Check `documents/product-strategy-[project-name].md` exists (where [project-name] is the folder name)
   - Also check for `documents/product-strategy-*.md` pattern

2. Extract insights from Product Strategy:
   - **From Product Strategy:**
     - Value Proposition → Core messaging and positioning
     - Target Audience → Voice and tone guidelines
     - Market Analysis → Competitive positioning
     - Product Vision → Brand pillars

3. Create Marketing Guide:
   - Read `.cursor/templates/Marketing Guide Template.md`
   - Create `documents/marketing-guide-[project-name].md` (where [project-name] is the folder name)
   - Fill sections based on Product Strategy insights
   - Guide user through positioning, voice, messaging, channels

**Output:** Marketing Guide document

---

### Phase 5: Design System Creation

**Command:** `/create-design-system` (or suggested after PRD)

**What happens:**
1. Verify prerequisites:
   - Check `documents/product-strategy-[project-name].md` exists (where [project-name] is the folder name)
   - Also check for `documents/product-strategy-*.md` pattern
   - Check `documents/prd-[project-name].md` exists (recommended)
   - Also check for `documents/prd-*.md` pattern

2. Extract insights:
   - **From Product Strategy:**
     - Value Proposition → Emotions to convey
     - Target Audience → Typography/visual language
     - Market Analysis → Competitive differentiation
     - Product Vision → Brand personality
   - **From PRD (if exists):**
     - User Journey → UX patterns
     - Features → Component priorities

3. Create Design System:
   - Read `.cursor/templates/Design System Template.md`
   - Create `documents/design-system-[project-name].md` (where [project-name] is the folder name)
   - Fill Business Context section with extracted insights
   - Guide user through Visual Principles, Colors, Typography, Components

4. Generate technical files:
   - **`src/index.css`:** CSS variables in HSL format
   - **`tailwind.config.ts`:** Tailwind extensions mapping CSS variables

**Output:** Design System document + CSS/Tailwind configuration

---

### Phase 6: Implementation Ready

**Command:** `/start-developing-the-idea` (checkpoint before development)

**What happens:**
1. Validate all documents:
   - Required: Product Strategy, PRD
   - Recommended: Design System, Analytics Event Catalog

2. If documents are missing:
   - List missing documents
   - Suggest commands to create them

3. Create initial code structure:
   - Create `src/` directory if needed
   - Create `src/lib/analytics.ts` (analytics wrapper scaffold)
   - Create environment variables template (`.env.example`)
   - Create analytics configuration file (optional)

4. Generate implementation checklist:
   - List events from Event Catalog to implement
   - Provide next steps for analytics setup

5. Activate relevant rules:
   - Design system rules (if Design System exists)
   - Remind about analytics tracking standards

**Output:** Validated project structure + initial code scaffold + implementation checklist

---

### Phase 7: Implementation

**What happens:**
1. Workspace-level rule activates:
   - `design-system-agent.mdc` detects `documents/design-system-[project-name].md` or `documents/design-system-*.md` pattern
   - Automatically applies design system rules

2. Component creation:
   - Always uses design tokens (CSS variables, Tailwind classes)
   - Never hardcodes colors, fonts, spacing
   - Follows design system specifications
   - Suggests component reuse

3. Analytics tracking:
   - Events tracked according to Event Catalog
   - Follows Analytics Tracking Standard
   - KPIs validated against events periodically

4. Visual consistency:
   - All components follow the design system
   - Cohesion maintained automatically
   - Design system is single source of truth

---

## Workflow Diagram

```
┌─────────────────────────────────────────┐
│ 1. /start-a-business                   │
│    ↓                                    │
│    • Capture: name, description, audience│
│    • Create: projects/[name]/          │
│    • Create: documents/ folder         │
│    ↓                                    │
│ 2. Product Strategy (Business Consultant)│
│    ↓                                    │
│    • Socratic questioning              │
│    • Create: documents/product-strategy-[project-name].md│
│    ↓                                    │
│ 3. PRD (Suggested automatically)     │
│    ↓                                    │
│    • Read Product Strategy             │
│    • Create: documents/prd-[project-name].md│
│    ↓                                    │
│ 4. Analytics Planning (Suggested automatically)│
│    ↓                                    │
│    • Read PRD                          │
│    • Extract: KPIs, user flows         │
│    • Infer events from KPIs            │
│    • Create: documents/analytics-events-[project-name].csv│
│    • KPI coverage cross-check          │
│    ↓                                    │
│ 5. Marketing Guide (Suggested automatically)│
│    ↓                                    │
│    • Read Product Strategy             │
│    • Extract: positioning, voice, messaging│
│    • Create: documents/marketing-guide-[project-name].md│
│    ↓                                    │
│ 6. Design System (Suggested automatically)│
│    ↓                                    │
│    • Read Product Strategy + PRD       │
│    • Extract: emotions, audience, differentiation│
│    • Create: documents/design-system-[project-name].md│
│    • Generate: src/index.css + tailwind.config.ts│
│    ↓                                    │
│ 7. Implementation Ready (/start-developing-the-idea)│
│    ↓                                    │
│    • Validate all documents            │
│    • Create initial code structure     │
│    • Generate implementation checklist │
│    ↓                                    │
│ 8. Implementation                      │
│    ↓                                    │
│    • design-system-agent applies rules │
│    • Components follow design system   │
│    • Events tracked per Event Catalog  │
│    • Visual cohesion maintained        │
└─────────────────────────────────────────┘
```

## Key Principles

1. **Product Strategy First:** Business context drives all decisions
2. **PRD Second:** Product requirements based on strategy
3. **Analytics Planning Third:** Event tracking based on PRD KPIs
4. **Marketing Guide Fourth:** Communication strategy based on business vision
5. **Design System Fifth:** Visual identity based on business + product
6. **Implementation Ready Sixth:** Validation checkpoint before development
7. **Implementation Last:** Code follows design system and analytics standards

## Document Dependencies

```
Product Strategy
    ↓
    ├─→ PRD (uses Product Strategy as base)
    │       ↓
    │       └─→ Analytics Event Catalog (uses PRD KPIs)
    │
    ├─→ Marketing Guide (uses Product Strategy as base)
    │
    └─→ Design System (uses Product Strategy + PRD)
            ↓
            └─→ Implementation Ready (validates all documents)
                    ↓
                    └─→ Implementation (follows Design System + Analytics Standard)
```

## Automation Points

- ✅ Project structure creation (automatic)
- ✅ Product Strategy guidance (socratic questioning)
- ✅ PRD creation (based on Product Strategy)
- ✅ Analytics Event Catalog creation (infers events from PRD KPIs)
- ✅ Marketing Guide creation (extracts from Product Strategy)
- ✅ Design System creation (extracts from Product Strategy + PRD)
- ✅ CSS/Tailwind generation (automatic from Design System)
- ✅ Design system rule application (automatic detection)
- ✅ Implementation ready checkpoint (validates documents, creates code scaffold)

## Success Criteria

- ✅ Project structure created automatically
- ✅ Product Strategy created through guided questions
- ✅ PRD created based on Product Strategy
- ✅ Analytics Event Catalog created based on PRD KPIs
- ✅ Marketing Guide created based on Product Strategy
- ✅ Design System created based on Product Strategy + PRD
- ✅ CSS/Tailwind generated automatically
- ✅ Implementation ready checkpoint validates all documents
- ✅ Components follow design system automatically
- ✅ Events tracked according to Analytics Tracking Standard
- ✅ Visual cohesion maintained across product
- ✅ Communication consistency maintained across channels
- ✅ KPIs measurable through Event Catalog
- ✅ Workflow scales to multiple projects

## Troubleshooting

### Design System not being applied
- Check: Does `documents/design-system-[project-name].md` exist? (where [project-name] is the folder name)
- Also check for `documents/design-system-*.md` pattern
- Check: Is the file in the correct location?
- Verify: `design-system-agent.mdc` rule is active (alwaysApply: true)

### CSS/Tailwind not generated
- Run `/create-design-system` command
- Ensure Design System document has Design Tokens section filled
- Check that color values are in HSL format

### Components not following design system
- Verify design system document exists
- Check that components use Tailwind classes, not hardcoded values
- Review design-system-agent rule is being applied

### Analytics Event Catalog missing
- Run `/create-analytics-plan` to generate Event Catalog from PRD
- Verify PRD has KPIs defined
- Check that Event Catalog CSV follows structure from Analytics Tracking Standard

### Events not being tracked
- Verify Event Catalog exists and events are listed
- Check that `src/lib/analytics.ts` is implemented
- Verify events follow naming convention (object_action, lowercase, snake_case)
- Review Analytics Tracking Standard for event definitions

## Next Steps

After completing this workflow:
1. Run `/start-developing-the-idea` to validate documents and create code scaffold
2. Install analytics SDKs (GA4, Amplitude)
3. Implement analytics wrapper according to Event Catalog
4. Begin development with design system rules active
5. Create components following design system
6. Track events according to Event Catalog
7. Maintain visual consistency automatically
8. Evolve design system and Event Catalog as product grows
9. Periodically cross-check KPIs against Event Catalog

---

## License and Attribution

This workflow was developed by [Lucas Mattos](https://github.com/luccmattos) as part of the [building-products](https://github.com/luccmattos/building-products) project.


Venture Builder Workflow  © 2025 by Lucas Mattos is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/
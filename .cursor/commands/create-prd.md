---
description: "Transform existing docs (Product Strategy, notes, specs) into a structured PRD using the PRD template."
---

**Do this when user requests PRD creation or transformation:**

## Step 1: Check for Product Strategy

1. **Check if Product Strategy exists:**
   - Look for `documents/product-strategy-[project-name].md` (where [project-name] is the folder name)
   - Also check for `documents/product-strategy-*.md` pattern
   - If exists: **Use it as the primary source** for PRD creation
   - If missing: Proceed with other documents, but suggest creating Product Strategy first

2. **If Product Strategy exists:**
   - Read it completely
   - Extract: Problem Statement, Value Proposition, Target Audience, Market Analysis, OKRs, Roadmap
   - Use this as the foundation for PRD sections

## Step 2: Read PRD Template and Other Documents

1. Read `.cursor/templates/PRD Template.md` to understand the PRD structure

2. Identify and read all relevant project documentation:
   - **Primary:** `documents/product-strategy-[project-name].md` (if exists, where [project-name] is the folder name)
   - Meeting notes
   - User research
   - Product specifications
   - Technical documentation
   - Any other relevant project files

## Step 3: Create PRD Document

1. **Create `documents/prd-[project-name].md`** (following venture builder structure):
   - Use the project name (from folder) to create the file name
   - Example: For project "my-business", create `prd-my-business.md`
   - Use H1 for the main title: `# PRD (Product Requirement Document)`
   - Include Author field at the top
   - Follow the exact H2/H3 structure from the template
   - Map existing content to appropriate sections

2. **Map Product Strategy to PRD:**
   - Product Strategy "Core Problems" → PRD "Problem Statement"
   - Product Strategy "Market Analysis" → PRD "Market Opportunity"
   - Product Strategy "Audience" → PRD "User Personas"
   - Product Strategy "Product Vision" → PRD "Vision Statement"
   - Product Strategy "OKRs" → PRD "Objectives"
   - Product Strategy "Product Roadmap" → PRD "Milestones"

3. Fill in all sections:
   - Use information from Product Strategy (if available) as primary source
   - Use information from other source documents
   - Use placeholders (TBD, [To be determined]) for missing information
   - Maintain the template's formatting and structure

4. Preserve all relevant details from source documents while organizing them into the PRD format

## Step 4: Key Sections to Populate

- Background (Problem Statement, Market Opportunity, User Personas, Vision, Origin)
- Objectives (SMART Goals, KPIs, Qualitative Objectives, Strategic Alignment, Risk Mitigation)
- Features (Core Features, User Benefits, Technical Specs, Prioritization, Future Enhancements)
- User Experience (UI Design, User Journey, Usability Testing, Accessibility, Feedback Loops)
- Milestones (Development Phases, Critical Path, Review Points, Launch Plan, Post-Launch)
- Technical Requirements (Tech Stack, Architecture, Security, Performance, Integrations)

## Step 5: Suggest Next Steps

After PRD is complete:

1. **Suggest Analytics Plan:**
   - "PRD complete! Would you like to create the Analytics Event Catalog now? I can generate it from your PRD KPIs using `/create-analytics-plan`."

2. **Also suggest other documents:**
   - "Or would you like to create the Marketing Guide or Design System now?"
   - "I can create your Marketing Guide from Product Strategy, or your Design System from Product Strategy and PRD."

**Output:** A complete PRD document in `documents/prd-[project-name].md` following the template structure with all available project information organized appropriately.

**Note:** All standard documents follow the pattern `[document-type]-[project-name].md` to avoid conflicts when working with multiple projects.


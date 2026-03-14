---
description: "Start a new venture: create project folder, documents structure, and guide through Product Strategy creation (socratic)."
---

**When user runs `/start-a-business`:**

## Step 1: Capture Initial Information

Ask the user these questions in sequence:

1. **"What's the name of your business/idea?"**
   - Capture: business name
   - Use this to create the project folder name (kebab-case)

2. **"Give me a brief description (1-2 sentences)"**
   - Capture: brief description
   - This will be used in initial Product Strategy

3. **"Who is your target audience? (brief description)"**
   - Capture: initial audience description
   - This will help guide Product Strategy questions

## Step 2: Create Project Structure Automatically

Create the following structure:

```
projects/[business-name]/
├── documents/
│   └── README.md
└── README.md
```

**Files to create:**

1. **`projects/[business-name]/README.md`**
   - Project overview template
   - Include: project name, brief description, link to documents

2. **`projects/[business-name]/documents/README.md`**
   - Documents folder structure explanation
   - List required documents: product-strategy-[project-name].md, prd-[project-name].md, marketing-guide-[project-name].md, design-system-[project-name].md
   - Explain the workflow: Product Strategy → PRD → Marketing Guide → Design System
   - **Note:** All standard documents follow the pattern `[document-type]-[project-name].md` to avoid conflicts when working with multiple projects

## Step 3: Initialize Product Strategy Creation

Act as a **Business Consultant Agent** and guide the user through Product Strategy creation:

1. **Read the template:** `.cursor/templates/Product Strategy Template.md`

2. **Ask socratic questions** to fill each section:
   - Start with Product Vision and Mission
   - Move through each section systematically
   - Connect answers to previous sections
   - Ask follow-up questions to clarify

3. **Create `documents/product-strategy-[project-name].md`** iteratively:
   - Use the project name (from folder) to create the file name
   - Example: For project "my-business", create `product-strategy-my-business.md`
   - Fill sections as user answers
   - Reference the template structure
   - Ensure all critical sections are completed

4. **Key sections to focus on:**
   - Value Proposition (critical for Marketing Guide and Design System)
   - Target Audience (critical for Marketing Guide and Design System)
   - Market Analysis (critical for competitive differentiation)
   - Core Problems (helps define product scope)

## Step 4: Suggest Next Steps

After Product Strategy is complete:

1. **Suggest PRD creation:**
   - "Product Strategy complete! Would you like to create the PRD now?"
   - "I can use the Product Strategy as a base to create a comprehensive PRD."

2. **After PRD (if created):**
   - "PRD complete! Would you like to create the Marketing Guide or Design System now?"
   - "I can create your Marketing Guide from Product Strategy, or your Design System from Product Strategy and PRD."

## Important Notes

- Use kebab-case for project folder name (e.g., "my-awesome-business")
- Always create the `documents/` folder structure
- Guide the user through Product Strategy with thoughtful questions
- Connect business decisions to future marketing guide and design system needs
- Reference the Product Strategy Template structure throughout


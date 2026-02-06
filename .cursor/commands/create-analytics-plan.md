---
description: "Create an Analytics Event Catalog (CSV) from the PRD's KPIs and user flows, following the Analytics Tracking Standard."
---

**When user runs `/create-analytics-plan` or requests Analytics Plan creation:**

## Prerequisites Check

1. **Verify PRD exists:**
   - Check for `documents/prd-[project-name].md` (where [project-name] is the folder name)
   - Also check for `documents/prd-*.md` pattern
   - If missing: "Please create PRD first using /create-prd command."

2. **Check if Analytics Event Catalog already exists:**
   - Check for `documents/analytics-events-[project-name].csv`
   - If exists, ask if user wants to regenerate or update

## Step 1: Read Source Documents

1. **Read PRD:**
   - Extract: KPIs from "Key Performance Indicators" section
   - Extract: User flows/journeys from "User Experience" or "Features" sections
   - Extract: Core features from "Core Features" section
   - Extract: Funnel steps or conversion points

2. **Read Analytics Tracking Standard:**
   - Read `.cursor/templates/Analytics Tracking Standard.md`
   - Understand event naming conventions
   - Understand required properties
   - Understand event granularity rules

## Step 2: Infer Events from KPIs and User Flows

For each KPI identified in the PRD:

1. **Identify required user actions:**
   - What user actions must happen to measure this KPI?
   - What funnel steps are involved?
   - What business-critical outcomes need tracking?

2. **Map to events:**
   - Create events following naming convention: `object_action`
   - Use lowercase, snake_case only
   - Focus on user intent and system state changes

3. **Common event patterns:**
   - **Activation KPI** → `onboarding_start`, `onboarding_complete`, `first_action_completed`
   - **Conversion KPI** → `checkout_start`, `payment_completed`, `subscription_started`
   - **Engagement KPI** → `feature_viewed`, `feature_used`, `content_shared`
   - **Retention KPI** → `session_start`, `user_returned`, `feature_reused`
   - **Form submissions** → `form_start`, `form_submit`, `form_submit_success`, `form_submit_error`
   - **Page navigation** → `page_view` (with page_name property)

## Step 3: Create Event Catalog CSV

1. **Create `documents/analytics-events-[project-name].csv`:**
   - Use the project name (from folder) to create the file name
   - Example: For project "my-business", create `analytics-events-my-business.csv`
   - Include CSV header row with all columns

2. **CSV Structure (from Analytics Tracking Standard):**
   ```csv
   event_name,description,status,trigger_condition,required_properties,optional_properties,kpi_mapped,ga4_notes,amplitude_notes,platforms,owner,last_updated_at,created_at
   ```

3. **For each inferred event:**
   - `event_name`: Follow naming convention (object_action)
   - `description`: Clear description of what this event represents
   - `status`: `active` (for initial events)
   - `trigger_condition`: When/where this event fires
   - `required_properties`: Pipe-separated list (e.g., `user_id|page_name|form_id`)
   - `optional_properties`: Pipe-separated list
   - `kpi_mapped`: Pipe-separated list of KPIs this event helps measure
   - `platforms`: Pipe-separated (e.g., `web|ios|android`)
   - `last_updated_at`: Current ISO date/time
   - `created_at`: Current ISO date/time

4. **Include canonical events:**
   - `page_view` (standard navigation event)
   - `button_click` (standard interaction event)
   - `form_submit` (if forms exist)
   - `error_occurred` (for error tracking)

5. **Include required properties:**
   - Always include canonical properties: `user_id`, `session_id`, `event_timestamp`, `environment`, `platform`, `page_name`, `page_path`
   - Add event-specific properties based on context

## Step 4: KPI Coverage Cross-Check

1. **Create KPI Coverage Report:**
   - List all KPIs from PRD
   - For each KPI, identify which events measure it
   - Mark which KPIs are fully covered
   - Mark which KPIs need additional events
   - Include this in the output message

2. **Output format:**
   ```
   KPI Coverage Analysis:
   
   ✅ Fully Covered:
   - [KPI name]: [list of events]
   
   ⚠️ Needs Additional Events:
   - [KPI name]: [what events are missing]
   ```

3. **If KPIs are not fully covered:**
   - Suggest additional events needed
   - Explain why each event is needed
   - Offer to add them to the Event Catalog

## Step 5: Create Initial Event Catalog File

1. **Write CSV file with:**
   - Header row with all columns
   - All inferred events from KPIs
   - Canonical events (page_view, button_click, etc.)
   - Proper CSV formatting (handle commas in descriptions)
   - ISO 8601 dates for timestamps

2. **Validate:**
   - All event names follow naming convention
   - All required columns are present
   - Dates are in ISO format
   - Pipe-separated lists use `|` character

## Step 6: Suggest Next Steps

After Event Catalog is created:

1. **If Design System doesn't exist:**
   - "Analytics Event Catalog created! Would you like to create the Design System now?"

2. **If Design System exists:**
   - "Analytics Event Catalog created! You're ready to start development. Would you like to run `/start-developing-the-idea` to validate all documents and create the initial code structure?"

3. **Explain that:**
   - Event Catalog is a living document and should be updated as features evolve
   - KPIs should be cross-checked periodically during development
   - Events can be added, but never removed (status: deprecated instead)

## Important Notes

- Event Catalog CSV should be version-controlled (Git)
- Events follow the naming convention strictly (lowercase, snake_case)
- All KPIs from PRD should be mappable to events
- Event Catalog is project-specific, standard is shared
- CSV format allows easy editing in spreadsheet applications
- Reference the Analytics Tracking Standard for event definition guidance

## Example Event Catalog Entry

```csv
page_view,User views a page,active,On any page navigation,user_id|session_id|event_timestamp|environment|platform|page_name|page_path,page_id|referrer,user_engagement|page_views,Standard GA4 page_view event,Use for user journey analysis,web|ios|android,,2025-01-20T10:00:00Z,2025-01-20T10:00:00Z
```


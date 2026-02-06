---
description: "Pre-dev checkpoint: validate Product Strategy, PRD, Design System and Analytics; then create initial src/ structure."
---

**When user runs `/start-developing-the-idea` or requests to start development:**

## Step 1: Validate Required Documents

1. **Check for required documents:**
   - ✅ `documents/product-strategy-[project-name].md` (required)
   - ✅ `documents/prd-[project-name].md` (required)
   - ⚠️ `documents/design-system-[project-name].md` (recommended)
   - ⚠️ `documents/analytics-events-[project-name].csv` (recommended)

2. **If required documents are missing:**
   - List missing documents
   - Suggest commands to create them:
     - Missing PRD: "Please run `/create-prd` first"
     - Missing Design System: "Please run `/create-design-system` first"
     - Missing Analytics: "Please run `/create-analytics-plan` first"

3. **If all documents exist:**
   - Confirm all documents are in place
   - Proceed to next steps

## Step 2: Validate Analytics Event Catalog (if exists)

1. **Read Event Catalog CSV:**
   - Verify CSV structure is correct
   - Check that events follow naming convention
   - Verify required columns are present

2. **Cross-check with PRD KPIs:**
   - Extract KPIs from PRD
   - Verify each KPI has corresponding events in Event Catalog
   - Report any gaps (but don't block development)

3. **If Event Catalog doesn't exist:**
   - Suggest creating it: "I notice you don't have an Analytics Event Catalog yet. Would you like to create one? Run `/create-analytics-plan` to generate it from your PRD."

## Step 3: Create Initial Code Structure

1. **Check if `src/` directory exists:**
   - If not, create it
   - Create standard structure: `src/lib/`, `src/components/`, `src/pages/`, etc.

2. **Create Analytics Wrapper (`src/lib/analytics.ts`):**
   ```typescript
   // src/lib/analytics.ts
   // Analytics tracking wrapper
   // Sends events to GA4 and Amplitude
   
   export const trackEvent = (
     eventName: string,
     properties?: Record<string, any>
   ) => {
     // TODO: Implement GA4 integration
     // TODO: Implement Amplitude integration
     // TODO: Validate event exists in Event Catalog
     // TODO: Ensure property parity between GA4 and Amplitude
     
     console.log('[Analytics]', eventName, properties);
   };
   
   export const trackPageView = (pageName: string, pagePath: string) => {
     trackEvent('page_view', {
       page_name: pageName,
       page_path: pagePath,
       event_timestamp: new Date().toISOString(),
       environment: import.meta.env.MODE || 'development',
       platform: 'web',
     });
   };
   ```

3. **Create environment variables template (if `.env.example` doesn't exist):**
   ```
   # Analytics
   VITE_GA4_MEASUREMENT_ID=
   VITE_AMPLITUDE_API_KEY=
   
   # Environment
   VITE_ENVIRONMENT=development
   ```

4. **Create Analytics configuration file (optional, `src/config/analytics.ts`):**
   ```typescript
   // src/config/analytics.ts
   export const analyticsConfig = {
     ga4: {
       measurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID,
       enabled: import.meta.env.VITE_ENVIRONMENT === 'production',
     },
     amplitude: {
       apiKey: import.meta.env.VITE_AMPLITUDE_API_KEY,
       enabled: import.meta.env.VITE_ENVIRONMENT !== 'development',
     },
   };
   ```

## Step 4: Generate Implementation Checklist

Based on Event Catalog (if exists), create a checklist:

1. **Create checklist document or output:**
   ```
   Implementation Checklist:
   
   Analytics Events to Implement:
   - [ ] page_view (navigation tracking)
   - [ ] button_click (interaction tracking)
   - [ ] form_submit (form tracking)
   - [ ] ... (list all events from Event Catalog with status: active)
   
   Next Steps:
   1. Install analytics SDKs (GA4, Amplitude)
   2. Configure environment variables
   3. Implement trackEvent wrapper
   4. Add tracking to components/pages
   5. Test events in development
   ```

2. **If Event Catalog doesn't exist:**
   - Create generic checklist for analytics setup
   - Suggest creating Event Catalog first

## Step 5: Activate Relevant Rules

1. **Verify Design System rule is active:**
   - If Design System exists, confirm design-system-agent.mdc rule will apply
   - Explain that components should follow design system

2. **Remind about analytics:**
   - Event Catalog should be updated as features evolve
   - Events should be implemented according to Analytics Tracking Standard
   - KPIs should be periodically validated against events

## Step 6: Output Summary

Provide a summary:

```
✅ All documents validated
✅ Code structure created
✅ Analytics wrapper scaffolded
✅ Ready to start development

Documents in place:
- Product Strategy
- PRD
- Design System
- Analytics Event Catalog

Next steps:
1. Install dependencies
2. Configure analytics SDKs
3. Start implementing features
4. Track events according to Event Catalog
```

## Important Notes

- This is a checkpoint, not a blocker
- Recommended documents (Design System, Analytics) can be created later
- Code structure is minimal - add more as needed
- Analytics wrapper is a scaffold - implement actual SDK integration
- Event Catalog should be consulted when implementing features
- All tracking should follow Analytics Tracking Standard

## Dependencies

- Requires: Product Strategy, PRD
- Recommends: Design System, Analytics Event Catalog
- Creates: Basic code structure, analytics wrapper scaffold


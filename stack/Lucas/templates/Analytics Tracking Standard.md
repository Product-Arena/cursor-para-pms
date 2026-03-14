# Analytics Event Tracking Standard
GA4 + Amplitude | AI-First, Replicable, Opinionated

## 1. Purpose and Scope

This document defines the canonical standard for analytics event tracking across all new digital products.

Goals:
- Enforce consistent event naming
- Avoid over-instrumentation and under-instrumentation
- Guarantee strong analytical capabilities via standardized properties
- Enable automation by AI agents (Cursor + MCPs)
- Ensure full parity between Google Analytics 4 and Amplitude

This guide is mandatory for all new projects.

**For project-specific event definitions, see:** `documents/analytics-events-[project-name].csv`

---

## 2. Mandatory Analytics Stack (Project Baseline)

Every new project must start with the following tools implemented from day zero.

Required:
- Google Tag Manager (GTM) - *Recommended for future scalability*
- Google Analytics 4 (GA4)
- Amplitude

Principles:
- GTM is the single source of truth for client-side events (when implemented)
- Events are defined once and routed to GA4 and Amplitude
- Analytics logic must not be hardcoded in the application unless explicitly justified
- Initial implementation may use direct SDK calls; migrate to GTM as project matures

---

## 3. Event Taxonomy Philosophy

Core principles:
1. Events represent user intent or system state changes
2. Events are stable over time
3. Context lives in properties, not in event names
4. Fewer events, richer properties

If an analytical question can be answered via a property, do not create a new event.

---

## 4. Event Naming Convention

Format:
```
object_action
```

Rules:
- lowercase only
- snake_case only
- verbs in present or simple past tense
- no platform, environment, or UI position in the name

Good examples:
- `page_view`
- `button_click`
- `form_submit`
- `form_submit_success`
- `form_submit_error`
- `checkout_start`
- `payment_completed`
- `modal_open`
- `modal_close`

Anti-patterns:
- `HomepageButtonClicked` (camelCase, too specific)
- `clickCTAHomepage` (no separator, UI position)
- `submit_form_v2` (version number)
- `payment_completed_ios` (platform in name)

---

## 5. Event Granularity Rules

Create an event when:
- A user intent occurs (click, submit, confirm)
- A funnel step is reached
- A business-critical outcome happens
- A system state changes (success, error, timeout)

Do not create events for:
- Purely visual UI states
- Minor layout interactions
- Variations that can be expressed as properties

Example: Instead of `button_click_homepage_header` and `button_click_homepage_footer`, use `button_click` with properties: `button_location: homepage_header` and `button_location: homepage_footer`.

---

## 6. Canonical Event Properties (Required)

Every event must include the following properties when available.
These properties must be identical in GA4 and Amplitude.

**Identity and session:**
- `user_id`: string, stable internal user identifier
- `account_id`: string, account, org, or tenant identifier
- `session_id`: string, session identifier

**Time and environment:**
- `event_timestamp`: ISO-8601 UTC timestamp
- `environment`: `production` | `staging` | `development`
- `platform`: `web` | `ios` | `android` | `backend`

**Navigation context:**
- `page_id`: string, internal page identifier
- `page_name`: string, human-readable page name
- `page_path`: string, URL path
- `referrer`: string, previous page or source

---

## 7. Event-Specific Properties (Contextual)

Add only properties required for future analysis.

Examples:

**button_click:**
- `button_id`: string
- `button_text`: string
- `button_type`: `primary` | `secondary` | `link`
- `button_location`: string (optional, if needed for analysis)

**form_submit:**
- `form_id`: string
- `form_name`: string
- `form_step`: number (if multi-step)
- `fields_count`: number

**error events:**
- `error_code`: string
- `error_message`: string
- `error_type`: `validation` | `system` | `timeout`

---

## 8. Global Property Governance

Rules:
- `snake_case` only
- Stable semantics, never reuse a property with a different meaning
- Consistent data types
- Prefer enums over free text

Example enum:
```
payment_method: pix | credit_card | debit_card
```

---

## 9. GA4-Specific Guidance

- Prefer custom events over overloaded default ones
- Respect GA4 limits, especially 25 custom parameters per event
- Register only business-critical parameters as custom dimensions
- Never encode logic or variants into event names

GA4 is optimized for aggregation, acquisition, and high-level funnel analysis.

---

## 10. Amplitude-Specific Guidance

- Prefer fewer events with richer properties
- Use Amplitude as the behavioral source of truth
- Focus on funnels, cohorts, retention, and lifecycle analysis
- Prefer event properties over user properties unless identity-level

---

## 11. Cross-Tool Parity Rules

- Event names must be identical in GA4 and Amplitude
- Property names must be identical
- Property meaning must be identical
- Differences are allowed only for mandatory platform-specific system fields

---

## 12. Automation-First Design (AI + MCP)

This guide is written to be consumed by AI agents.

Agents should be able to:
1. Read product requirements or PRDs
2. Infer funnels and key user actions
3. Generate event lists and schemas
4. Configure GTM (future)
5. Create or validate schemas in Amplitude via MCP

Amplitude should be treated as schema-driven.
The desired future state is a fully automated pipeline:
PRD → Event Catalog → GTM → GA4 → Amplitude

---

## 13. Event Definition Template (Canonical)

Every new event must be documented using the following structure:

```
event_name: [object_action]
description: [What user action or system state this represents]
trigger: [When this event fires]
required_properties: [list]
optional_properties: [list]
platforms: [web|ios|android|backend]
ga4_notes: [any GA4-specific considerations]
amplitude_notes: [any Amplitude-specific considerations]
kpi_mapped: [which KPIs this event helps measure]
```

---

## 14. Living Event Catalog (Mandatory)

Each project must maintain a living, continuously updated Event Catalog.

**Location:** `documents/analytics-events-[project-name].csv`

**CSV Structure:**

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `event_name` | string | Yes | Event name following naming convention |
| `description` | string | Yes | What this event represents |
| `status` | enum | Yes | `active` \| `deprecated` \| `planned` |
| `trigger_condition` | string | Yes | When/where this event fires |
| `required_properties` | string | No | Pipe-separated list of required properties |
| `optional_properties` | string | No | Pipe-separated list of optional properties |
| `kpi_mapped` | string | No | Pipe-separated list of KPIs this event covers |
| `ga4_notes` | string | No | GA4-specific notes |
| `amplitude_notes` | string | No | Amplitude-specific notes |
| `platforms` | string | No | Pipe-separated: `web` \| `ios` \| `android` \| `backend` |
| `owner` | string | No | Team member responsible |
| `last_updated_at` | ISO date | Yes | Last modification date |
| `created_at` | ISO date | Yes | Creation date |

**Example CSV row:**
```csv
event_name,description,status,trigger_condition,required_properties,optional_properties,kpi_mapped,ga4_notes,amplitude_notes,platforms,owner,last_updated_at,created_at
form_submit,User submits a form,active,When user clicks submit button on any form,form_id|form_name,form_step|fields_count,conversion_rate|user_activation,Register form_id as custom dimension,,web|ios|android,,2025-01-20T10:00:00Z,2025-01-20T10:00:00Z
```

**Requirements:**
- Single source of truth for all events
- Includes all active, deprecated, and planned events
- Updated whenever an event is created, modified, or deprecated
- Reviewed as part of product and analytics changes
- CSV format allows easy editing in spreadsheet applications

Analytics without an updated Event Catalog is considered incomplete.

---

## 15. KPI Coverage Validation

Every KPI defined in the PRD must be mappable to one or more events in the Event Catalog.

**Process:**
1. Extract KPIs from PRD (`documents/prd-[project-name].md`)
2. For each KPI, identify required events
3. Verify events exist in Event Catalog
4. Document mapping in Event Catalog (`kpi_mapped` column)

**Example:**
- KPI: "Activation rate (users who complete onboarding)"
- Required events: `onboarding_start`, `onboarding_complete`
- Verify both events exist in Event Catalog
- Update `kpi_mapped` column for both events

This validation should be performed:
- When Event Catalog is first created
- When new KPIs are added to PRD
- When new features are implemented
- Periodically during product evolution

---

## 16. Governance and Evolution

- Event names are append-only (never change existing event names)
- Breaking changes are forbidden
- Deprecated events must remain documented (status: `deprecated`)
- All changes must comply with this standard
- Event Catalog is version-controlled (Git) to track evolution

---

## 17. Implementation Guidelines

### Phase 1: Initial Implementation (MVP)

For new projects starting from zero:

1. Create Event Catalog based on PRD
2. Implement analytics wrapper: `src/lib/analytics.ts`
3. Direct SDK integration (GA4 + Amplitude)
4. Track core events from Event Catalog

**Example analytics.ts structure:**
```typescript
// src/lib/analytics.ts
export const trackEvent = (
  eventName: string, 
  properties?: Record<string, any>
) => {
  // Validate event exists in Event Catalog
  // Send to GA4
  // Send to Amplitude
  // Ensure property parity
}
```

### Phase 2: Mature Implementation (Future)

As project scales:
- Migrate to GTM as single source of truth
- Use GTM to route events to GA4 and Amplitude
- Analytics.ts becomes a thin wrapper around GTM

---

## 18. Final Principle

If it is not analyzable, it should not exist.
If it is not consistent, it is technical debt.

Every event must:
- Have a clear business purpose
- Map to a KPI or user behavior question
- Follow this standard completely
- Be documented in the Event Catalog

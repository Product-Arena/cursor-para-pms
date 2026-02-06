---
description: "Review changes on the current branch using a checklist for code quality, testing, security, and docs."
alwaysApply: false
---

# Code Review Checklist

Review the changes on @branch using this comprehensive checklist:

## Code Quality & Architecture

- [ ] Code follows project style guidelines
- [ ] Functions are small and focused
- [ ] No code duplication
- [ ] Error handling is appropriate
- [ ] Edge cases are considered
- [ ] Think through how data flows in the app. Explain new patterns if they exist and why.
- [ ] Were there any changes that could affect infrastructure?

## Testing

- [ ] Tests are included for new features
- [ ] Existing tests still pass
- [ ] Test coverage is adequate
- [ ] Did we add quality tests? Prefer fewer, high quality tests. Prefer integration tests for user flows.

## Security

- [ ] No credentials or secrets in code
- [ ] Input validation present
- [ ] SQL injection prevention (if applicable)
- [ ] XSS prevention (if applicable)
- [ ] Changes to auth flows or permissions? Run /security-review.

## Performance & Infrastructure

- [ ] No obvious performance issues
- [ ] Database queries are optimized
- [ ] No unnecessary API calls
- [ ] Are there places we should use caching?
- [ ] Were there schema changes which could require a database migration?

## Accessibility & UX

- [ ] Consider empty, loading, error, and offline states.
- [ ] Review frontend changes for accessibility (keyboard navigation, focus management, ARIA roles, color contrast).

## API & Compatibility

- [ ] If public APIs have changed, ensure backwards compat (or increment API version).
- [ ] Did we add any unnecessary dependencies? If there's a heavy dependency, could we inline a more minimal version?

## Internationalization & Localization

- [ ] If i18n is set up, are the strings added localized and new routes internationalized?

## Feature Flags & Configuration

- [ ] If feature flags are set up, does this change require adding a new one?

## Monitoring & Observability

- [ ] Are we missing critical monitoring or logging on backend changes?

## Documentation

- [ ] Code is self-documenting
- [ ] Complex logic has comments
- [ ] README updated if needed
- [ ] API documentation updated if needed

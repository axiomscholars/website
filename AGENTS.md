# AGENTS.md

## Project Overview

Axiom Scholars is a premium boutique academic coaching website for private STEM coaching, physics tutoring, advanced math support, AP coursework, and standardized test math preparation. The brand serves families in Howard County, Maryland and online students.

The site also promotes 8-week Summer Readiness Courses in July and August for High School Physics, AP Physics, and AP Calculus. Algebra 1, Algebra 2, Geometry, and Precalculus should be described only as available upon request unless specific courses are confirmed.

The dedicated summer ads landing page is `summer/`. Keep it focused on summer course conversion rather than turning it into a second homepage.

## Tech Stack

- Static HTML
- CSS
- Vanilla JavaScript
- GitHub Pages compatible
- No build tooling required

## Commands To Run

Preview locally:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Optional checks:

```bash
git status --short
```

## Style Guidelines

- Premium academic, STEM-focused, elegant, and trustworthy.
- Warm but serious.
- Parent-friendly and clear.
- Avoid childish visuals, clipart, generic stock photos, and mass-market test-prep language.
- Use deep navy, charcoal, warm white or cream, muted gold, muted teal, and restrained burgundy accents.
- Keep layouts responsive, accessible, semantic, and fast.

## Brand Voice

Axiom Scholars should sound selective, serious, thoughtful, and human. Emphasize first principles, deep understanding, structured practice, exam readiness, clear feedback, and parent trust.

Avoid:

- Fake urgency
- Overpromising
- Generic tutoring clichés
- Excessive jargon
- Corporate chain language
- Claims that guarantee outcomes

## Content Rules

- No fake testimonials.
- No guaranteed score claims.
- No fabricated summer course dates, prices, schedules, enrollment limits, or seat scarcity.
- Keep the summer section focused on the three flagship courses unless the business confirms additional summer courses.
- Do not use `bootcamp` as the main summer course language; prefer `Summer Readiness Courses`, `Summer Intensives`, `8-week summer courses`, or `small-group summer intensives`.
- Describe included support as `3 private support hours`, not as `free hours`.
- Do not imply affiliation, endorsement, partnership, or sponsorship with the College Board, ACT, Inc., or any other testing organization.
- Do not use official College Board or ACT logos.
- Use `SAT/ACT Math preparation` or `standardized test math preparation`.
- Do not use phrases like `official SAT prep` or `official ACT prep`.

## Required College Board / ACT Disclaimer

The following disclaimer must remain visible in the footer and must be included or clearly referenced anywhere standardized tests, SAT, ACT, or College Board are discussed:

> Axiom Scholars is an independent tutoring and academic coaching service. We are not affiliated with, endorsed by, or sponsored by the College Board, ACT, Inc., AP, or any other testing organization. SAT is a registered trademark of the College Board. ACT is a registered trademark of ACT, Inc. AP is a trademark registered by the College Board, which is not affiliated with, and does not endorse, Axiom Scholars.

## Deployment Notes

This project is designed for GitHub Pages from the repository root.

Deploy steps:

1. Push the repository to GitHub.
2. Open repository `Settings`.
3. Select `Pages`.
4. Choose `Deploy from a branch`.
5. Select the target branch, usually `main`.
6. Select `/ (root)`.
7. Save and wait for GitHub Pages to publish.

## Placeholder Replacement Checklist

- Update the GitHub Pages URL if the site moves to a custom domain.
- Add the final intro video or linked video thumbnail.
- Replace placeholder testimonials with real, permission-approved testimonials.
- The diagnostic form currently uses FormSubmit at `https://formsubmit.co/abhi@axiomscholars.com`; update that action if switching providers.
- Add analytics IDs only after privacy and compliance review.
- Add real summer course schedules and enrollment links only after they are confirmed.

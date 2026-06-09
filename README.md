# Axiom Scholars Website

Static GitHub Pages website for Axiom Scholars, a boutique private STEM coaching brand serving Howard County and online students.

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- No build step or runtime dependencies

## Local Preview

Because this is a static site, you can open `index.html` directly in a browser. For a closer GitHub Pages-style preview, run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Editing

Primary files:

- `index.html`: page content, SEO metadata, Open Graph tags, JSON-LD, placeholder comments
- `summer/`: dedicated summer course landing page for Google Ads and Meta Ads traffic
- `styles.css`: responsive layout, brand styling, mobile sticky CTA
- `script.js`: mobile navigation and footer year

Search for `TODO:` to replace:

- Intro video
- Analytics scripts

The homepage canonical URL and social URLs currently point to:

```text
https://axiomscholars.github.io/website/
```

The summer landing page canonical URL points to:

```text
https://axiomscholars.com/summer/
```

Update URLs in `index.html` and `summer/` if the production domain or route changes.

## Assets Used

- Header/nav logo: `assets/logo-horizontal-clean.png`, generated from `assets/logo1.png`
- Footer logo: `assets/logo-horizontal-clean.png`, generated from `assets/logo1.png`
- Mobile header logo: `assets/logo-emblem-clean.png`, generated from `assets/logo3.png`
- Favicon/browser tab icon: `assets/logo-emblem-clean.png`
- Apple touch icon: `assets/logo-emblem-clean.png`
- Open Graph/social image: `assets/logo-social-clean.png`, generated from `assets/logo2.png` and referenced as `https://axiomscholars.github.io/website/assets/logo-social-clean.png`
- Founder headshot: `assets/headshot-enhanced.png`, generated from `assets/headshot.jpeg` and displayed at a restrained size to avoid stretching the low-resolution source.

To replace assets later, add the new file to `assets/` and update the relevant `src`, `href`, or `content` attribute in `index.html`. Keep image dimensions proportional and avoid stretching logos or the headshot.

## Contact And Form

The public contact email is:

```text
abhi@axiomscholars.com
```

The public contact phone number is:

```text
667-200-9582
```

The diagnostic form currently posts to FormSubmit:

```html
action="https://formsubmit.co/abhi@axiomscholars.com"
```

On submit, FormSubmit sends the request to `abhi@axiomscholars.com`. The first live submission may trigger a FormSubmit confirmation email to that inbox before messages are delivered. GitHub Pages cannot directly submit form data to Gmail in the background without a third-party service or backend.

Current FormSubmit helper fields:

- `_subject`: sets the email subject to `New Axiom Scholars diagnostic request`
- `_template`: sends the submission in table format
- `_captcha`: disables FormSubmit’s captcha screen
- `_next`: redirects back to `https://axiomscholars.github.io/website/#diagnostic-form`
- `_honey`: hidden spam honeypot field

To use another production form provider later, replace the form `action` with a provider endpoint from Formspree, Getform, Basin, Tally, Google Forms, Netlify Forms, or a custom backend.

The diagnostic form fields are intentionally short:

- Parent name
- Email
- Student grade
- Subject / program interest
- Current challenge
- Preferred meeting format
- Course, school, or deadline
- Optional message

The `Subject / program interest` dropdown includes the flagship summer course options and a general `Summer Readiness Course` option. CTA links can preselect that general option by adding:

```html
data-interest="Summer Readiness Course"
```

## Analytics

Analytics snippets are included as commented placeholders in `index.html`.

To enable Google Analytics 4:

1. Create a GA4 web stream.
2. Replace both `G-XXXXXXXXXX` placeholders with the real measurement ID.
3. Uncomment the GA4 block in the `<head>`.
4. Deploy the site publicly.

To enable Meta Pixel later:

1. Replace `META_PIXEL_ID` with the real pixel ID.
2. Uncomment the Meta Pixel block in the `<head>`.
3. Use it only if you are running Facebook or Instagram ads.

Analytics will not collect useful traffic data until the site is publicly deployed and real tracking IDs are inserted.

## Summer Readiness Courses

The site includes both a homepage summer section and a dedicated summer landing page:

```text
summer/
```

Use `summer/` for Google Ads and Meta Ads traffic. The homepage top announcement banner and summer CTAs link to this landing page.

The current summer marketing layer promotes 8-week small-group summer intensives in July and August.

Flagship courses:

- High School Physics Readiness
- AP Physics Readiness
- AP Calculus Readiness

Additional support listed only as available upon request:

- Algebra 1
- Algebra 2
- Geometry
- Precalculus

Current public details:

- Course window: `July 6 - August 28, depending on course`
- Pricing: `$699 - includes 8 weeks of small-group instruction plus 3 private support hours`
- `[INSERT ENROLLMENT LINK]`

Discuss exact schedules directly with families on the diagnostic call. Update enrollment links and any future pricing/date changes in `index.html`. Do not invent dates, prices, enrollment limits, seat scarcity, or availability. The current summer CTAs route to the diagnostic form and preselect the summer course interest where appropriate.

On `summer/`, schedule copy currently says:

```text
Course schedules will be finalized based on student availability.
```

Update this only when confirmed schedules are ready to publish.

## GitHub Pages Deployment

1. Commit and push these files to GitHub.
2. In the GitHub repository, open `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the branch you want to deploy, usually `main`.
6. Select `/ (root)` as the folder.
7. Save.

GitHub Pages will publish the static site from the repository root.

## Content Rules

- Do not fabricate testimonials.
- Do not guarantee score increases or grades.
- Do not fabricate summer course dates, prices, enrollment limits, or seat scarcity.
- Do not imply affiliation, endorsement, partnership, or sponsorship with the College Board, ACT, Inc., or any testing organization.
- Do not use official College Board or ACT logos.
- Use `SAT/ACT Math preparation` or `standardized test math preparation`, not `official SAT prep` or `official ACT prep`.

Required disclaimer:

> Axiom Scholars is an independent tutoring and academic coaching service. We are not affiliated with, endorsed by, or sponsored by the College Board, ACT, Inc., AP, or any other testing organization. SAT is a registered trademark of the College Board. ACT is a registered trademark of ACT, Inc. AP is a trademark registered by the College Board, which is not affiliated with, and does not endorse, Axiom Scholars.

The disclaimer appears in the footer and is referenced near standardized test content.

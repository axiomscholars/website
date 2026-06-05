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
- `styles.css`: responsive layout, brand styling, mobile sticky CTA
- `script.js`: mobile navigation and footer year

Search for `TODO:` to replace:

- Domain: `[INSERT DOMAIN HERE]`
- Intro video
- Analytics scripts

## Assets Used

- Header/nav logo: `assets/logo-horizontal-clean.png`, generated from `assets/logo1.png`
- Footer logo: `assets/logo-horizontal-clean.png`, generated from `assets/logo1.png`
- Mobile header logo: `assets/logo-emblem-clean.png`, generated from `assets/logo3.png`
- Favicon/browser tab icon: `assets/logo-emblem-clean.png`
- Apple touch icon: `assets/logo-emblem-clean.png`
- Open Graph/social image: `assets/logo-social-clean.png`, generated from `assets/logo2.png` and referenced as `https://[INSERT DOMAIN HERE]/assets/logo-social-clean.png`
- Founder headshot: `assets/headshot-enhanced.png`, generated from `assets/headshot.jpeg` and displayed at a restrained size to avoid stretching the low-resolution source.

To replace assets later, add the new file to `assets/` and update the relevant `src`, `href`, or `content` attribute in `index.html`. Keep image dimensions proportional and avoid stretching logos or the headshot.

## Contact And Form

The public contact email is:

```text
axiomscholarsprep@gmail.com
```

The diagnostic form currently uses a static-site `mailto:` fallback:

```html
action="mailto:axiomscholarsprep@gmail.com"
```

On submit, the visitor’s email app opens with the form data. GitHub Pages cannot directly submit form data to Gmail in the background. For a smoother production form, replace the form `action` with a provider endpoint from Formspree, Getform, Basin, Tally, Google Forms, Netlify Forms, or a custom backend.

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
- Do not imply affiliation, endorsement, partnership, or sponsorship with the College Board, ACT, Inc., or any testing organization.
- Do not use official College Board or ACT logos.
- Use `SAT/ACT Math preparation` or `standardized test math preparation`, not `official SAT prep` or `official ACT prep`.

Required disclaimer:

> Axiom Scholars is an independent tutoring and academic coaching service. We are not affiliated with, endorsed by, or sponsored by the College Board, ACT, Inc., or any other testing organization. SAT is a registered trademark of the College Board. ACT is a registered trademark of ACT, Inc.

The disclaimer appears in the footer and is referenced near standardized test content.

# FreeCoat Decor — Complete Website Documentation

**Project folder:** `C:\wamp64\www\UpConstruction-main`  
**Canonical live URL (in code):** `https://freecoatghana.netlify.app/`  
*(Earlier hosting mention was also `freecoatgh.netlify.app` — confirm which Netlify site is active and keep canonicals consistent.)*  
**Last documented:** September 2026  

This document describes **everything** in the FreeCoat Decor website so a designer, developer, marketer, or owner can understand the full product without opening every file.

---

## 1. What this website is

FreeCoat Decor is a **marketing + lead-generation website** for a Ghana-based painting, decoration, finishing, and light construction company based in **Accra (Spintex Road)**.

It is **not** a web app with login or a database UI. It is a **static multi-page website** (HTML/CSS/JS) hosted on **Netlify**, with:

- Photo & video portfolios  
- Service explanations  
- Contact / quote / booking forms (Netlify Forms)  
- WhatsApp & phone conversion paths  
- SEO (meta tags, sitemap, schema, redirects)  

**Business goal of the site:** get homeowners, businesses, institutions, and diaspora clients to **call, WhatsApp, book an inspection, or submit a quote form**.

---

## 2. Company / brand facts baked into the site

| Item | Value |
|------|--------|
| Brand name | **FreeCoat Decor** |
| Also known as | FreeCoat Ghana, FreeCoat Painting & Decor Co. Ltd, FreeCoat |
| Founder | **Emmanuel Mensah** |
| Founded | **2012** |
| Experience claim | **14+ years** |
| Projects claim | **350+** completed projects |
| Team size (stats) | **8** team members |
| Phone / WhatsApp | **+233 24 085 4667** |
| Email | **freecoatpaintingsdecor@gmail.com** |
| Address | **Plot 45, Spintex Road, Near Shell Filling Station, Accra, Ghana** |
| Service areas (footer) | Accra, Tema, Kasoa, Madina, Spintex |
| Hours (schema) | Monday–Saturday, 08:00–18:00 |
| Social (linked) | Facebook, Instagram, TikTok (`freecoatdecor`) |
| Slogan (schema) | “Transforming spaces with quality finishes across Ghana” |

### Visual brand

- **Fonts:** Outfit (body/UI) + Syne (headings)  
- **Accent / theme:** amber/gold `#e89b1e` (bright `#f5b942`)  
- **Ink / dark:** charcoal `#0a0e14` / `#141b24`  
- **Logo:** `assets/img/freecoat-logo.jpg`  
- **Favicon:** `assets/img/favicon.webp` (with `apple-touch-icon.webp`)  
- Main custom stylesheet: `assets/css/freecoat-premium.css`  

---

## 3. Technology stack

| Layer | Technology |
|-------|------------|
| Pages | Static HTML (one file per page) |
| CSS framework | Bootstrap 5.3.3 (UpConstruction template base) |
| Icons | Bootstrap Icons + Font Awesome |
| Animation | AOS |
| Lightboxes / carousels | GLightbox, Swiper |
| Portfolio filters | Isotope |
| Counters | PureCounter |
| Hosting | Netlify (`netlify.toml`, publish root `.`) |
| Forms | Netlify Forms + `assets/js/netlify-forms.js` (AJAX) |
| Success page | `/thank-you.html` |
| WhatsApp | `assets/js/fc-whatsapp.js` + Help float |
| Help widget | `assets/js/fc-help-float.js` (draggable Call / WhatsApp) |
| Conversion extras | `assets/js/conversion-features.js` (scope/size pickers, WhatsApp quote helper, social-proof toast) |
| Template core JS | `assets/js/main.js` |

**Important:** Old PHP form endpoints may still exist under `forms/`, but **live pages use Netlify Forms**, not PHP.

---

## 4. Repository / media structure

### Public HTML pages

| File | Role |
|------|------|
| `index.html` | Home / main landing |
| `about.html` | Company story, gallery, team |
| `services.html` | Full services catalog |
| `projects.html` | Filterable project portfolio |
| `gallery.html` | Large photo gallery + booking |
| `videos.html` | Video gallery (35 videos) + booking |
| `contact.html` | Contact info, map, form |
| `blog.html` | Blog list *(partly placeholder titles)* |
| `blog-details.html` | Full paint-colour article |
| `thank-you.html` | After form submit (noindex) |
| `privacy-policy.html` | Privacy policy |
| `service-details.html` | **Template leftover** (demo Latin content) |
| `project-details.html` | **Template leftover** (demo content) |
| `starter-page.html` | Template leftover (noindex) |

### Media library (organized)

All project media lives under:

```text
freecoat/media/
  banners/        page heroes
  kitchens/
  living-rooms/
  bedrooms/
  ceilings/       POP, murals, lighting
  interiors/
  offices/
  exteriors/
  commercial/     churches, plazas
  construction/   scaffolding, crew, site
  paving/
  before-after/
  showroom/       lab, owner, storefront
  projects/       flagship stills
  videos/         35 MP4 project videos
```

Approximate counts: kitchens 7, living-rooms 24, ceilings 33, interiors 41, exteriors 27, construction 24, showroom 16, videos **35**, etc.

**Backup of old scattered folders:** `freecoat/_archive/` (do not use for live links).

**Site chrome images (logo, blog stock, testimonials):** still under `assets/img/`.

---

## 5. Global elements (every main page)

### 5.1 Header / navigation

Typical nav:

1. Home  
2. About  
3. Services  
4. Projects  
5. Gallery  
6. Videos  
7. Contact  

Plus **Book Project** button:

- Opens `#bookingModal` on Home / Gallery / Videos  
- Links to `gallery.html#bookingModal` on About / Services / Projects / Contact  

### 5.2 Footer (full version on Home)

Columns:

1. **Brand block** — logo, address, phone, email, social icons  
2. **Useful Links** — main pages  
3. **Our Services** — deep links into Services  
4. **Service Areas** — Accra, Tema, Kasoa, Madina, Spintex  
5. **Quick Links** — quote, blog tips, gallery, testimonials, contact  

Copyright: FreeCoat Decor.

### 5.3 Floating Help button

- Script: `fc-help-float.js` (+ loads `fc-whatsapp.js` first)  
- One draggable **Help** button  
- Opens: **Call** or **WhatsApp**  
- Remembers position in `localStorage`  

### 5.4 WhatsApp pre-filled message

When a visitor opens WhatsApp from the site, the chat starts with (summary):

- Thank you for contacting FreeCoat Decor…  
- Full **services list** with icons (painting, construction, POP, tiling, electrical, plumbing, TV units, leakage, epoxy, 3D drawings, kitchen cabinets, wall molding, dampness treatment, etc.)  
- Tagline: Quality, Luxury & Excellence  
- Ask for: **service needed + project location**  

Source of truth: `assets/js/fc-whatsapp.js`.

### 5.5 Booking modal (shared pattern)

Trust bar: Quality Guaranteed · 14+ Years · Free Site Inspection  

Typical fields:

- Full name  
- Phone (WhatsApp)  
- Email  
- Project category (dropdown)  
- Location / area in Ghana  
- Project details / message  

Netlify form names differ by page: `booking`, `booking-gallery`, `booking-videos`.

### 5.6 Social-proof toast (Home, Gallery, Videos)

Small rotating notifications like “Nana Kwame booked Luxury Mansion Interior” (marketing UI, not live data).

---

## 6. Page-by-page detail

---

### 6.1 Home — `index.html`

**Purpose:** Convert visitors. Show proof (photos), explain services, capture leads, answer FAQs.

**SEO title:** FreeCoat Decor | Painting, Decorations, POP Ceiling, Tiling & Epoxy in Accra, Ghana  

**Sections in order:**

1. **Hero (`#hero`)**  
   - H1: FreeCoat Decor — Painting & Decorations in Accra, Ghana  
   - Copy: Accra painters since 2012; painting, POP, tiling, epoxy, plumbing, leakage  
   - CTA: Get Started → `#get-started`  
   - Image carousel of kitchens, ceilings, exteriors, living rooms  

2. **Showcase reel (`.fc-showcase`)**  
   - Dual-row endless marquee of completed works  
   - Cards such as Luxury Mansion Living Hall, International Villa, POP Ceiling & Lights, Commercial Plaza, TV Unit, Palace Facade, Sitting Room, Kitchens, etc.  

3. **Why Choose / Get Quote (`#get-started`)**  
   - Reasons to choose FreeCoat  
   - Netlify form **`get-quote`**: name, email, phone, message  

4. **Who We Serve (`#who-we-serve`)**  
   - Homes & Villas  
   - Offices & Retail  
   - Hotels & Institutions  
   - Diaspora Clients  

5. **Book Free Site Inspection (`#book-inspection`)**  
   - 3-step explanation  
   - Scope / size selectors (interior, POP, luxury, commercial × property sizes)  
   - Form **`site-inspection`**  
   - WhatsApp “send estimate” helper  

6. **Our Services (`#services`)**  
   - Teaser cards linking to Services page (painting, POP, wallpaper/decor, commercial, textured finishes, etc.)  

7. **Why Clients Trust FreeCoat (`#alt-services`)**  
   - Premium materials, skilled pros, on-time delivery, satisfaction  
   - Large craftsmanship image + 350+ badge  

8. **Diaspora section**  
   - “We manage & decorate your building in Ghana”  
   - WhatsApp overseas consultation  
   - Live video / milestone payments / warranty messaging  

9. **Types of Projects (`#features`)**  
   - Tabs: Residential / Commercial / Government / Luxury  

10. **Our Projects (`#projects`)**  
    - Filterable grid → project details  
    - Categories: All, Residential, Commercial, Government, POP  

11. **Testimonials (`#testimonials`)**  
    - Kwame Asante, Mrs. Abena Osei, Dr. Samuel Boateng, Grace Mensah, Ing. Patrick Adjei  

12. **Blog tips (`#recent-blog-posts`)**  
    - Three tip cards linking toward blog details  

13. **FAQ (`#faq`)**  
    - Accra painting company, POP ceilings, free quote, services list, location  
    - Matches FAQ schema for Google  

14. **Footer + booking modal `booking` + help float + toast**

**Structured data on Home:** Organization, LocalBusiness (HomeAndConstructionBusiness), WebSite, FAQPage.

---

### 6.2 About — `about.html`

**Purpose:** Tell the company story; prove work with a huge gallery; introduce team.

**Sections:**

1. Page title “About”  
2. **Our Story** — founded 2012 by Emmanuel Mensah; growth from Accra residential to government/commercial; kitchen hero image; “Watch Video”  
3. **Achievements counters** — 350 clients, 350 projects, 14 years, 8 team members  
4. **What Makes FreeCoat Different** — quality materials, skilled pros, on-time, satisfaction  
5. **Commitment to Excellence** — QA, transparent pricing, professionalism, warranty  
6. **Before & After spotlight** — damaged walls/columns vs finished exteriors  
7. **FreeCoat Project Gallery (`#portfolio-gallery`)** — filterable categories:  
   - Kitchens  
   - Living Rooms & TV Units  
   - Bedrooms  
   - POP Ceilings & Lighting  
   - Interior Walls & Details  
   - Offices & Marble Finishes  
   - Exteriors & Villas  
   - Construction & Craft  
   - Paving & Outdoor  
   - Before & After  
   - Showroom & FreeCoat Team  
8. **Team** — Founder + Client Partnerships / Colour Lab storytelling cards with real showroom photos  
9. **Testimonials** (same set as home)

---

### 6.3 Services — `services.html`

**Purpose:** Full catalogue of what FreeCoat sells.

**Service cards (13):**

1. Interior & Exterior Decorations  
2. Interior Decorations  
3. General Painting & Spray Finishing  
4. POP Ceiling Design  
5. Tiling Works  
6. Electrical Installation  
7. Plumbing Works  
8. 3D Wall & Ceiling Effects  
9. Modern TV Unit Design  
10. Leakage Solutions  
11. Epoxy Flooring  
12. 3D Building Drawings  
13. 3D Stucco Effect  

**Also:**

- Audience cards: Residential / Commercial / Government / Specialty  
- Why Choose FreeCoat…  
- Testimonials  

---

### 6.4 Projects — `projects.html`

**Purpose:** Portfolio browsing with filters.

- Filters: All / Residential / Commercial / Government / POP Ceiling  
- Grid of project images (mansions, interiors, POP, churches, plazas, kitchens, bedrooms, palace, etc.)  
- Lightbox + links toward project-details  

---

### 6.5 Gallery — `gallery.html`

**Purpose:** The richest photo experience + booking.

Includes:

- Full categorized portfolio gallery (same categories as About)  
- Category quick tiles  
- Showcase marquee  
- Conversion CTA (“Ready to transform…”)  
- Extra image grid  
- Diaspora section  
- Final book/WhatsApp CTA  
- Modal form **`booking-gallery`**  
- Help float + social proof toast  

---

### 6.6 Videos — `videos.html`

**Purpose:** Show workmanship in motion.

- Intro: “See Our Workmanship in Video”  
- Filters: All (35), Church & Commercial, Interior, POP, Epoxy, Exterior & Pool, TV Unit, Site Inspection, **New Uploads**  
- **35 muted videos** from `freecoat/media/videos/`  
- Each card: poster, title, short description, badges, Book CTA  
- Modal form **`booking-videos`**  
- All videos forced **muted** (no background music)  

Named examples include church projects, epoxy, living room, POP, palace interior, pool wall, TV unit, site inspection, plus many recent `video_2026-09-08_…` uploads.

---

### 6.7 Contact — `contact.html`

**Purpose:** Make it easy to reach FreeCoat.

- Address card (Spintex)  
- Call card (+233 24 085 4667)  
- Email card  
- Embedded Google Map  
- Form **`contact`**: name, email, subject, message  

---

### 6.8 Blog — `blog.html` & `blog-details.html`

**blog.html:** Listing UI exists; **several post titles are still Latin template placeholders** (needs content cleanup).

**blog-details.html (real FreeCoat article):**

**“How to Choose the Right Paint Colors for Your Home”** covering:

- Colour psychology  
- Lighting in Ghana  
- Trends  
- Practical tips  
- Room-by-room advice  
- Common mistakes  
- CTA for professional help + WhatsApp  

Also: author block, demo comments, comment form (not Netlify), sidebar widgets.

---

### 6.9 Thank You — `thank-you.html`

- Shown after successful Netlify form submit  
- **noindex** (should not rank in Google)  
- Thanks message, 24h reply promise  
- WhatsApp + Call buttons  
- Contact details + link home  

---

### 6.10 Privacy Policy — `privacy-policy.html`

Sections cover: data collected, use, protection, cookies, form processors, user rights, contact, policy changes.  
Last updated note: September 3, 2026.

---

### 6.11 Template leftovers (important)

These pages have **FreeCoat SEO titles** but **old UpConstruction demo content** inside:

- `service-details.html` — fake “Web Design / Software Development” sidebar  
- `project-details.html` — demo portfolio case study (“Sara Wilsson”, “ASU Company”)  
- `starter-page.html` — blank starter (noindex)  
- Parts of `blog.html` — Latin titles / “UpConstruction” sitename quirk  

They are linked from some portfolio tiles but are **not real FreeCoat case-study pages yet**.

---

## 7. Forms (all lead channels)

| Form name | Where | Fields |
|-----------|--------|--------|
| `get-quote` | Home | name, email, phone, message |
| `site-inspection` | Home book section | name, phone, email, message + scope/size |
| `booking` | Home modal | name, phone, email, project_type, location, message |
| `booking-gallery` | Gallery modal | same pattern (+ diaspora option) |
| `booking-videos` | Videos modal | same pattern |
| `contact` | Contact page | name, email, subject, message |

All Netlify forms use honeypot `bot-field` and typically redirect to **thank-you.html**.

**Owner setup required in Netlify:** Forms → notifications to `freecoatpaintingsdecor@gmail.com`.

---

## 8. SEO & discoverability

### Implemented

- Unique titles & meta descriptions per page  
- Canonical URLs, Open Graph, Twitter cards  
- `robots.txt` + `sitemap.xml`  
- JSON-LD: Organization, LocalBusiness, WebSite, FAQ, WebPage, Breadcrumbs  
- Keyword redirects in `netlify.toml` (`/painting`, `/pop-ceiling`, `/epoxy`, `/quote`, etc.)  
- Geo meta (Accra / Ghana)  
- Image SEO filenames under `freecoat/media/`  

### Honest ranking note

Technical SEO is in place, but **#1 worldwide for generic words like “painting” cannot be guaranteed**. Strongest realistic targets:

- Brand: FreeCoat / FreeCoat Decor Ghana  
- Local: painting Accra, POP ceiling Accra, etc.  

Needs: Google Search Console, Google Business Profile, reviews, consistent posting, backlinks, time.

---

## 9. User journeys (how people buy)

1. **Browse proof** (Home showcase / Gallery / Videos / Projects)  
2. **Pick a path:**  
   - Call Help float  
   - WhatsApp (prefilled services message)  
   - Book Project modal  
   - Free site inspection form  
   - Contact form  
3. **Thank-you page** after form submit  
4. FreeCoat replies by phone/WhatsApp/email  

Diaspora path: overseas consultation WhatsApp CTAs on Home & Gallery.

---

## 10. Key custom code files (what each does)

| File | Job |
|------|-----|
| `assets/css/freecoat-premium.css` | Brand look: showcase, book section, FAQ, portfolio grids, help float, before/after, etc. |
| `assets/js/netlify-forms.js` | AJAX submit Netlify forms; redirect thank-you |
| `assets/js/fc-whatsapp.js` | Official WhatsApp prefill message + URL builder |
| `assets/js/fc-help-float.js` | Draggable Help → Call / WhatsApp |
| `assets/js/conversion-features.js` | Scope/size UI, WhatsApp estimate, social-proof toasts |
| `assets/js/main.js` | Template behaviours (nav, AOS, isotope, swiper, etc.) |
| `netlify.toml` | Headers, caching, redirects, noindex rules |
| `freecoat/media/README.md` | Rules for adding new photos/videos |

---

## 11. Known gaps / cleanup opportunities

1. Replace Latin/demo content on `blog.html`, `service-details.html`, `project-details.html`.  
2. Confirm live Netlify hostname (`freecoatgh` vs `freecoatghana`) and unify all canonicals.  
3. Enable Netlify form email notifications if not already.  
4. Optionally delete `freecoat/_archive/` after backups are safe.  
5. Google Search Console + Business Profile for local SEO.  
6. Social footer links on some pages may still be empty or inconsistent — Home has the fullest set.

---

## 12. One-sentence summary of every page

- **Home** — Sell FreeCoat hard with hero, reels, forms, services, projects, FAQ.  
- **About** — Story, stats, trust, before/after, giant gallery, team.  
- **Services** — All 13+ services listed.  
- **Projects** — Filterable still portfolio.  
- **Gallery** — Biggest photo experience + book.  
- **Videos** — 35 muted project videos + book.  
- **Contact** — Address, phone, email, map, form.  
- **Blog** — Tips hub (needs real titles on list page).  
- **Blog details** — Paint colour guide for Ghana.  
- **Thank you** — Form success.  
- **Privacy** — Legal policy.  
- **Service/Project details** — Still template placeholders.

---

*End of documentation. Generated from the actual FreeCoat Decor codebase in `UpConstruction-main`.*

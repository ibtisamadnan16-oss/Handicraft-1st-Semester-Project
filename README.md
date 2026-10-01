# 🏺 Venus Handicrafts — Aptech 1st Semester Project

> **A Luxury Heritage & Export-Oriented Handicrafts Showcase Website**  
> *Crafted for Aptech Computer Education (Shahr-e-Faisal Center) — 1st Semester Web Development Project.*

---

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Project Scope & Approach](#-project-scope--approach)
3. [Technology Stack](#-technology-stack)
4. [Color Palette & Typography](#-color-palette--typography)
5. [Directory Structure](#-directory-structure)
6. [Page-by-Page Walkthrough](#-page-by-page-walkthrough)
7. [Product Categories (Mandatory 10)](#-product-categories-mandatory-10)
8. [Interactive JavaScript Features](#-interactive-javascript-features)
9. [Testing & Quality Assurance](#-testing--quality-assurance)
10. [How to Run the Project](#-how-to-run-the-project)
11. [Viva & Presentation Guide](#-viva--presentation-guide-for-faculty)
12. [Project Metadata & Contact](#-project-metadata--contact)

---

## 🏛️ Project Overview

**Venus Handicrafts** is a responsive, multi-page frontend website developed as the term-end project for the Aptech 1st Semester curriculum.

The project models an internationally recognized artisan manufacturing and export firm founded in **1972**. The firm crafts authentic South Asian and Middle Eastern heritage decor items across diverse media—including wrought iron, hand-chiseled brass, lathe-turned wood, mouth-blown glass, cast aluminium, and ceremonial table accessories.

### Key Objectives:
* Showcase **10 core handicraft categories** with descriptions, materials, and available designs.
* Provide an interactive, luxury **artisan gallery** with instant category filters and a fullscreen lightbox preview.
* Address international export inquiries and wholesale bulk purchase questions with a **collapsible FAQ accordion**.
* Deliver a structured **Site Map** (both graphical tree and ASCII code diagram).
* Provide client-side validated contact mechanisms directing inquiries to the official email desk: `ibtisamadnan16@gmail.com`.

---

## 🎯 Project Scope & Approach

* **Pure Frontend Architecture:** In accordance with Aptech 1st Semester specifications, the project focuses exclusively on **HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript**.
* **Direct Inquiry Business Model:** Rather than a generic consumer e-commerce checkout (with cart/payment gateways which are not required for B2B export manufacturing), the site uses direct product detail modals and inquiry workflows tailored for global wholesale buyers, interior designers, and retail importers.

---

## 💻 Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Structure** | HTML5 | Clean semantic markup (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) |
| **Styling** | CSS3 & Custom Variables | Centralized design tokens in `css/style.css`, flexbox, CSS grid, keyframe animations |
| **Framework** | Bootstrap 5.3.3 | Responsive grid layout (`col-lg-4`, `col-md-6`, `col-12`), collapse, modals, carousels |
| **Interactivity** | Vanilla JavaScript (ES6) | Client-side form validation, gallery filter algorithms, lightbox modal navigation, back-to-top button |
| **Typography** | Google Fonts | `Playfair Display` (Headings) + `Poppins` & `Montserrat` (Body text) |
| **Integrations** | Google Maps Embed | Embedded responsive interactive showroom map |

---

## 🎨 Color Palette & Typography

The design is built on a custom **Luxury Traditional Handicrafts** color system configured via CSS custom properties in `:root`:

| Color Name | Hex Code | Role in Interface |
|---|---|---|
| **Dark Brown** | `#3E2723` | Primary headers, deep cards, footers, and contrast elements |
| **Brown** | `#795548` | Secondary badges, borders, gradients, and secondary accents |
| **Beige** | `#D7CCC8` | Dividers, subtle borders, card background highlights |
| **Light Beige** | `#F6EDE3` | Subtle section backgrounds, alternating table rows |
| **Cream** | `#FFF8E1` | Main card backgrounds, modal panels, warm canvas |
| **Antique Gold**| `#C9A227` | Primary buttons, active highlights, badges, icons, hover states |
| **Deep Text** | `#212121` | High-contrast, WCAG-compliant body typography |

### Typography Hierarchy:
* **Headings (`<h1>` - `<h6>`):** `'Playfair Display', Georgia, serif` — gives a classical, high-end artisan character.
* **Body & Text Elements:** `'Poppins', 'Montserrat', sans-serif` — delivers modern, crisp legibility across all screen sizes.

---

## 📁 Directory Structure

```text
Handicraft 1st Semester Project/
│
├── index.html              # Home Page (Hero slider, featured items, why choose us)
├── about.html              # About Us (Heritage since 1972, Mission, Vision, Manufacturing)
├── products.html           # Products Catalog (10 Categories, filters, detail modals)
├── gallery.html            # Visual Gallery (7 Category filters, Fullscreen Lightbox modal)
├── faq.html                # FAQs (7 Mandatory questions in Bootstrap 5 Accordion)
├── contact.html            # Contact Us (Validated form, email desk, location map)
├── sitemap.html            # Site Map (Visual interactive tree & ASCII hierarchy)
├── README.md               # Complete Project Documentation (this file)
│
├── css/
│   ├── style.css           # Primary custom stylesheet with theme tokens & media queries
│   └── bootstrap.min.css   # Local offline Bootstrap 5.3 fallback
│
├── js/
│   ├── main.js             # Primary interactive scripts (validation, modals, filters)
│   ├── script.js           # Mirror script for evaluation flexibility
│   └── bootstrap.bundle.min.js # Local offline Bootstrap 5.3 bundle
│
├── images/                 # All verified product photos, banners, and logos
│   ├── 1-Iron Handicraft/
│   ├── 2-Glass Handicraft/
│   ├── 3-Brass Handicraft/
│   ├── 4-Wood Handicraft/
│   ├── 5-AAluminium Handicraft/
│   ├── 6-Handicraft Decorative/
│   ├── 7-Tables Wares/
│   ├── 8-Home Decor/
│   ├── 9-Candle Accessories/
│   └── ... (Branding & individual items)
│
└── assets/                 # Supporting project assets
```

---

## 📄 Page-by-Page Walkthrough

### 1. Home Page (`index.html`)
* **Hero Carousel:** Dynamic auto-advancing slider with dark radial gradient overlay, gold badges, and primary action buttons.
* **Artisan Story Introduction:** Introduction to Venus Handicrafts' 50+ year legacy (established in 1972).
* **Featured Showcase:** 6 hand-selected spotlight products with quick specification previews.
* **Top Categories Strip:** Quick cards guiding users into Iron, Brass, Wood, Glass, and Home Decor sections.
* **Why Choose Venus Handicrafts:** Key value propositions (100% Handcrafted, Certified Master Artisans, Global Export Packaging, Custom Bespoke Orders).
* **Gallery Sneak Peek:** High-impact teaser grid leading to the full gallery.
* **Call to Action (CTA) Banner & Comprehensive 4-Column Footer.**

### 2. About Us (`about.html`)
* **Heritage Narrative:** Detailed company history since 1972, detailing ancestral metalworking and woodcarving traditions.
* **Our Mission:** Preserving traditional artisanal crafts and empowering local master craftsmen.
* **Our Vision:** Bridging South Asian artistic heritage with modern global interior architecture.
* **Manufacturing Experience:** Hand-casting, sand molding, kiln firing, Meenakari chiseled relief, and natural lacquer finishing.
* **Global Exporters & Importers:** Information on serving container volumes and retail importers across Europe, North America, the Middle East, and Asia.
* **Impact Metrics Counter:** 50+ Years Experience, 25+ Export Destinations, 10,000+ Masterpieces Created, 100% Handcrafted Integrity.

### 3. Products Catalog (`products.html`)
* **Interactive Category Filter Bar:** Quick pills for All, Iron, Glass, Brass, Wood, Aluminium, Decorative, Table Wares, Home Décor, Candle Accessories, Other.
* **10 Primary Category Showcase Cards:** Highlighting each category with image, description, and direct jump button.
* **Detailed Product Grids:** Over 23 individual product cards complete with material tags, intended usage, and action buttons.
* **Product Detail Modal (`#productDetailModal`):** Instant modal popup displaying full technical specifications, available designs, and direct inquiry link without requiring page reloads.

### 4. Gallery (`gallery.html`)
* **Interactive Category Filters:** Instant JavaScript filtering between:
  * `All`
  * `Iron`
  * `Glass`
  * `Brass`
  * `Wood`
  * `Aluminium`
  * `Home Decor`
* **Responsive Visual Grid:** Uniform image cards with hover zoom effects, gold badges, and descriptive captions.
* **Fullscreen Lightbox Modal (`#galleryLightboxModal`):**
  * Displays high-resolution image, title, and category badge.
  * Image counter (e.g., `1 of 21`).
  * **Previous** (`‹`) & **Next** (`›`) navigation buttons.
  * **Keyboard Support:** Supports Left Arrow (`←`) and Right Arrow (`→`) keys for browsing.

### 5. FAQs (`faq.html`)
* Built with **Bootstrap 5 Accordion** (`#faqAccordion`) featuring all mandatory questions:
  1. *What types of handicrafts do you manufacture?*
  2. *Do you export products internationally?*
  3. *Can wholesalers place bulk orders?*
  4. *What materials are used in your products?*
  5. *Do you provide customized handicraft designs?*
  6. *How can we contact Venus Handicrafts?* (Updated with direct email `ibtisamadnan16@gmail.com`)
  7. *Where is Venus Handicrafts located?* (Karachi, Pakistan)
* Single-open accordion behavior ensures clean readability on mobile screens.

### 6. Contact Us (`contact.html`)
* **Inquiry Form:**
  * Fields: Full Name, Email Address, Phone Number, Subject, Message.
  * Real-time client-side JavaScript regex validation.
  * Dynamic error badges and red outlines for invalid fields.
  * Green confirmation alert (`#contactSuccessAlert`) on successful submission with form reset.
* **Company Information Card:**
  * Direct contact email: `ibtisamadnan16@gmail.com`
  * Operating business hours: Monday – Friday (9:00 AM – 5:00 PM EST)
  * Worldwide shipping and container logistics notice.
* **Interactive Google Map:** Embedded location map for physical showroom discovery.

### 7. Site Map (`sitemap.html`)
* **Interactive Graphical Architecture Tree:** Visual branch cards mapping the relationship between Home, About Us, Products Catalog (and all 10 subcategories), Gallery, FAQs, and Contact Us.
* **Hierarchy ASCII Tree Box:** Clean preformatted ASCII code block providing an immediate structural view of the website's parent-child taxonomy.

---

## 🏺 Product Categories (Mandatory 10)

The website fully implements all 10 categories required by the project specifications:

| # | Category Name | Featured Artisan Materials | Typical Artifacts |
|---|---|---|---|
| **1** | **Iron Handicrafts** | Wrought iron, cast iron, black patina finish | Antique pocket watches, rustic water taps, tribal figurines |
| **2** | **Glass Handicrafts** | Mouth-blown tinted glass, stained mosaic | Moroccan mosaic table lamps, stained glass oil lanterns |
| **3** | **Brass Handicrafts** | Virgin brass alloy, Meenakari engraving | Chiseled floral vases, architectural peacock water taps |
| **4** | **Wood Handicrafts** | Seasoned Sheesham (Rosewood), walnut | Hand-carved keepsake chests, jewelry boxes, wooden baskets |
| **5** | **Aluminium Handicrafts** | Sand-cast aluminium, satin brush polish | Modernist abstract figurines, hammered fruit bowls, platters |
| **6** | **Handicraft Decorative** | Multi-media, brass filigree, embossed relief | Wall hanging shields, ornate floral medallion plaques |
| **7** | **Table Wares** | Hand-hammered brass, glazed ceramic, wood | Charger plates, artisanal goblet sets, carved napkin rings |
| **8** | **Home Décor** | Polished metals, aged timber, ceramic glaze | Floor urns, mantelpiece accents, decorative desktop trays |
| **9** | **Candle Accessories** | Wrought iron scrollwork, solid brass cups | Multi-arm Victorian candelabras, votive hurricane holders |
| **10**| **Other Products** | Terracotta clay, woven jute, mixed metalware | Heritage amphoras, terracotta urns, tribal ceremonial art |

---

## ⚡ Interactive JavaScript Features

All custom interactivity is implemented in [js/main.js](file:///d:/Aptech%20Shahr-e-faisal/1st%20Semester/Handicraft%201st%20Semester%20Project/js/main.js) (and mirrored in `js/script.js`):

1. **Active Link Highlighting:** Automatically reads `window.location.pathname` and adds `.active` and `aria-current="page"` to the matching navigation link.
2. **Products Navigation & Hover Dropdown:**
   * Desktop: Hovering over **"Products"** opens the category menu via CSS transitions. Clicking **"Products"** directly opens `products.html`.
   * Mobile: Tapping **"Products"** toggles the submenu, and tapping again or tapping *"All Products Overview"* opens `products.html`.
3. **Mobile Navbar Auto-Collapse:** The hamburger navigation menu automatically closes when any menu item or dropdown link is clicked.
4. **Client-Side Form Validation:**
   * Validates Name (min 2 chars), Email (regex pattern `^[^\s@]+@[^\s@]+\.[^\s@]+$`), Phone (min 7 digits), Subject (min 3 chars), and Message (min 10 chars).
   * Generates inline `.validation-error-msg` elements and auto-focuses the first invalid field.
   * On success, reveals `#contactSuccessAlert` and resets the form.
5. **Interactive Gallery Filtering:** Filters items by `data-category` attribute on click without reloading the page.
6. **Gallery Lightbox Modal:**
   * Dynamic image and title population on card click.
   * Previous/Next button indexing with wraparound logic.
   * Global keyboard listener for `ArrowLeft` and `ArrowRight`.
7. **Product Details Modal:** Reads `data-name`, `data-category`, `data-material`, `data-desc`, `data-designs`, `data-usage`, and `data-img` attributes and populates the modal dynamically.
8. **Smooth Scrolling:** Intercepts `a[href^="#"]` anchors and performs smooth scrolling (`scrollIntoView({ behavior: 'smooth' })`).
9. **Floating Back-to-Top Button:** Dynamically creates/controls `#backToTopBtn` which appears after 300px scroll and smoothly returns to top on click.

---

## 🧪 Testing & Quality Assurance

The project passed an automated comprehensive audit across all criteria:

* **Link Integrity:** 100% of internal links point to valid HTML files (0 broken links).
* **Asset Integrity:** 100% of local image references exist on disk (0 missing images).
* **Cross-Browser Compatibility:** Tested and verified on:
  * **Google Chrome** (Blink engine)
  * **Microsoft Edge** (Chromium engine)
  * **Mozilla Firefox** (Gecko engine)
* **Responsive Multi-Device Testing:** Tested across Desktop (1920x1080), Laptop (1366x768), Tablet (768x1024), and Mobile (375x667).
* **W3C Standards:** Semantic tags, proper `alt` attributes on images, and accessible form labels.

---

## 🚀 How to Run the Project

No database, package manager (`npm`), or backend server is needed. The website runs entirely in any modern web browser:

### Method 1: Direct File Launch
1. Navigate to the project root directory:
   ```text
   d:\Aptech Shahr-e-faisal\1st Semester\Handicraft 1st Semester Project\
   ```
2. Double-click **`index.html`** or right-click > **Open with > Google Chrome** (or Edge / Firefox).

### Method 2: VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Right-click on **`index.html`**.
3. Select **"Open with Live Server"** (or press `Alt + L, Alt + O`).
4. The site will launch automatically at `http://127.0.0.1:5500/index.html`.

---

## 🎓 Viva & Presentation Guide for Faculty

When presenting this project to Aptech faculty and evaluators, use the following key talking points:

### Q1: What is the primary purpose and business model of this website?
> *"Venus Handicrafts is a digital showcase and international export catalog for a traditional handicrafts manufacturer established in 1972. It is engineered for B2B global importers, wholesalers, and interior decorators rather than direct retail checkout, which is why product actions lead to export inquiries and specification sheets."*

### Q2: How did you implement responsive design across all devices?
> *"We utilized Bootstrap 5.3's 12-column mobile-first grid system using `col-12` for smartphones, `col-md-6` for tablets, and `col-lg-4` for desktop screens. Custom media queries in `css/style.css` handle luxury typography scaling, hero banner heights, and hamburger menu transitions."*

### Q3: How does the Gallery category filter work without a backend?
> *"Each gallery item has a custom data attribute (`data-category="..."`). When a filter button is clicked, a JavaScript loop compares each card's attribute with the active filter. Matching items are set to `display: block` while non-matching items are set to `display: none`."*

### Q4: How is client-side form validation handled?
> *"In `js/main.js`, the form's `submit` event is intercepted with `e.preventDefault()`. We use regular expressions to validate email formats and clean string lengths for name, phone, and message. Custom error messages are generated in the DOM dynamically, and invalid fields are highlighted."*

### Q5: How did you choose the color theme?
> *"To convey a timeless, authentic handicraft feel, we selected an earthy luxury palette: Dark Brown (`#3E2723`), Warm Brown (`#795548`), Light Beige (`#F6EDE3`), Cream (`#FFF8E1`), and Antique Gold (`#C9A227`). For typography, `Playfair Display` provides classical sophistication for headings while `Poppins` ensures clean modern readability."*

---

## 📌 Project Metadata & Contact

* **Student Name:** Ibtisam Adnan
* **Institution:** Aptech Computer Education (Shahr-e-Faisal Center)
* **Semester:** 1st Semester
* **Project Title:** Venus Handicrafts Corporate Portal
* **Official Contact Email:** `ibtisamadnan16@gmail.com`
* **Academic Year:** 2026
* **Status:** Complete, Tested, and Submission-Ready 🎉

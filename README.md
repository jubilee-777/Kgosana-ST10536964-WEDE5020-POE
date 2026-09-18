# Jubilee Visuals - Portfolio Web Application

## Project Description
A responsive 5-page digital portfolio showcasing visual direction, mood concepts, and minimalist photography.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Part 1 Feedback Implementation & Overhaul](#part-1-feedback-implementation--overhaul)
- [Changelog](#changelog)
- [References](#references)

---

## Features
- **Full 5-Page Site Architecture:** Expanded project scope by adding 2 new pages to fulfill the 5-page website requirement (Home, Gallery, About, Services, Contact).
- **Enriched Content & Copy:** Added detailed section write-ups, service packages, brand details, and context across all pages.
- **Responsive Layout:** Optimized across desktop, tablet, and mobile displays using modern CSS Media Queries.
- **Interactive Design:** Custom dynamic button styles, smooth navigation transitions, and active hover states using CSS pseudo-classes.
- **Structured Portfolio Grid:** Clean CSS Flexbox and Grid layouts displaying visual photography concepts.

---

## Technologies Used
- **HTML5:** Semantic structure across all 5 pages.
- **CSS3:** Custom properties, Flexbox, Grid, animations, and media queries.
- **Git & GitHub:** Version control, regular descriptive commits, and repository hosting.

---

## Part 1 Feedback Implementation & Overhaul

### Major Project Restart & Expansion
During the transition from Part 1 to Part 2, significant cascade conflicts and unresolvable layout errors occurred within the initial CSS architecture. To ensure a clean, maintainable, and fully functional codebase:
* **Complete CSS Rebuild:** The project styling was restarted from scratch to establish clean reset rules, custom CSS variables, and reliable Flexbox/Grid structures.
* **Scope Expansion (5-Page Requirement):** Added 2 additional HTML pages to meet the full 5-page project requirement.
* **Content Enhancement:** Expanded written copy, project descriptions, and service breakdowns across every page to deliver a complete, informative portfolio experience.

### Detailed Part 1 Feedback Fixes
* **CSS File Linkage & Pathing:** Fixed broken image and stylesheet relative paths by reorganizing project directory structures into dedicated `css/` and `images/` folders.
* **External Stylesheet Consistency:** Replaced inline styles and fragmented internal tags with a single, modular external stylesheet (`styles.css`) applied universally across all 5 pages.
* **Responsive Design & Media Queries:** Implemented explicit media query breakpoints (`@media (max-width: 768px)` and `@media (max-width: 480px)`) to resolve element overlapping and text cut-offs on mobile and tablet screens.
* **Gallery Image Rendering:** Corrected broken gallery image references and standardized aspect ratios with `object-fit: cover` to maintain clean visual alignments without distortion.
* **Typography & Layout Hierarchy:** Refined font choices, established clear heading sizes (`h1`, `h2`, `h3`), and added line height spacing to boost readability and visual balance.

---

## Changelog

| Date | Version | Description of Changes |
| :--- | :--- | :--- |
| 2026-09-10 | v1.0 | Initial submission and review for Part 1. |
| 2026-09-12 | v2.0 | **Complete Codebase Reset:** Rebuilt CSS architecture from scratch to fix styling conflicts and broken cascade rules. |
| 2026-09-14 | v2.1 | **Page Expansion:** Added 2 new HTML pages to fulfill the 5-page site requirement and added detailed copy across all sections. |
| 2026-09-15 | v2.2 | Re-linked all 5 HTML pages to `css/styles.css` and fixed broken image folder relative paths. |
| 2026-09-17 | v2.3 | Added full media queries for responsive layouts on Mobile and Tablet screen sizes. |
| 2026-09-18 | v2.4 | Finalized gallery grid styling, added custom hover states, and updated project documentation. |

---

## References
* MDN Web Docs. 2026. *CSS Flexible Box Layout*. Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout> [Accessed 18 September 2026].
* MDN Web Docs. 2026. *Using CSS Media Queries*. Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries> [Accessed 18 September 2026].
* Unsplash. 2026. *Free High-Resolution Photography*. Available at: <https://unsplash.com> [Accessed 18 September 2026].
* W3Schools. 2026. *HTML Responsive Web Design*. Available at: <https://www.w3schools.com/html/html_responsive.asp> [Accessed 18 September 2026].
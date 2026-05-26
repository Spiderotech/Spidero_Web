# Spidero Website

Spidero Website is a React + Vite frontend for the Spidero Technology company website. It includes landing, service, expertise, company, careers, contact, privacy, and terms pages, with shared navigation, footer, chat, cookie consent, analytics, animations, and media assets.

## Tech Stack

- React 18
- Vite 5
- React Router DOM
- Tailwind CSS
- GSAP, AOS, Swiper, ScrollMagic
- React Three Fiber / Drei
- Formik and Yup
- EmailJS / SMTPJS
- React GA4

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
.
├── public/              # Static public files, robots.txt, sitemap.xml
├── src/
│   ├── assets/          # Images, videos, fonts, and SVG assets
│   ├── components/      # Reusable UI sections and shared components
│   ├── pages/           # Route-level page components
│   ├── App.jsx          # App routes and global components
│   ├── main.jsx         # React entry point
│   ├── App.css          # App-specific styles
│   └── index.css        # Global styles and Tailwind imports
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Main Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/custom` | Custom development |
| `/web` | Web development |
| `/webdesign` | Web design |
| `/mobile` | Mobile app development |
| `/contact` | Contact |
| `/about` | About |
| `/ourprocess` | Our process |
| `/expertice` | Expertise |
| `/careers` | Careers |
| `/privacy-policy` | Privacy policy |
| `/terms-conditions` | Terms and conditions |
| `/hire_developers` | Hire developers |

## Configuration Notes

- The site URL is configured in `package.json` as `http://spiderotechnology.com/`.
- Tailwind scans `index.html` and all files under `src/`.
- Custom fonts and cursor assets are loaded from `src/assets/`.
- SEO-related static files are in `public/robots.txt` and `public/sitemap.xml`.

## Deployment

Create a production build with:

```bash
npm run build
```

The generated files will be placed in the `dist/` directory. Deploy the contents of `dist/` to your hosting provider.

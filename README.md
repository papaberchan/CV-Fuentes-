# Sylver Fuentes — Personal CV & Portfolio

A responsive personal CV and portfolio for **Sylver Lopez Fuentes**, a fourth-year BSIT student at Davao del Norte State College. It presents verified education, interests, community involvement, growing skills, and public GitHub work with an intentionally honest, professional tone.

## Features

- Responsive single-page portfolio with a polished dark and light theme
- Profile image, career objective, education, skills, projects, experience, certification, interests, and contact sections
- Accessible keyboard navigation, visible focus states, semantic landmarks, and reduced-motion support
- Mobile navigation, active-section state, smooth anchor navigation, social and repository links
- Email copy confirmation, click-to-email/call actions, and browser-native A4 print/download CV workflow
- Vite production build configuration, metadata, favicon, and Vercel-ready static output

## Technology

React, TypeScript, Vite, Motion, Lucide React, and custom responsive CSS.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
public/images/       Profile image and other editable public assets
src/data/            Centralized editable portfolio content
src/App.tsx          Portfolio interface and interactions
src/styles.css       Visual system, responsive layouts, and print styles
```

## Deployment on Vercel

1. Create or connect a GitHub repository named `sylver-fuentes-cv`.
2. Import it in Vercel.
3. Use the `Vite` preset; build command: `npm run build`; output directory: `dist`.
4. Deploy. Add the resulting production URL as the canonical/OG URL if one is assigned.

## Details to complete later

- Senior high school name, strand, and school period
- Exact TESDA NC II qualification
- PLDT and Purok service dates
- Optional certificate scan in `public/certificates/`
- A verified live domain URL after deployment

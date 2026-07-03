# Udomo Ali — Editorial Portfolio

Premium personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, GSAP ScrollTrigger, Lenis, and Lucide React.

## Run locally

```powershell
pnpm install --ignore-scripts
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```powershell
pnpm build
pnpm start
```

## Image structure

Selected client photography is used throughout the editorial layout:

- `public/images/hero-udomo.jpg`
- `public/images/about.jpg`
- `public/images/journey/law.jpg`
- `public/images/journey/research.jpg`
- `public/images/journey/hr-business.jpg`
- `public/images/journey/real-world.jpg`
- `public/images/journey/admissions.jpg`
- `public/images/journey/counselling.jpg`
- `public/images/contact.jpg`

Image paths and chapter labels are defined in `components/portfolio/data.ts`. The shared editorial image treatment, responsive crops, overlays, and fallback state are implemented in `components/portfolio/PlaceholderImage.tsx`.

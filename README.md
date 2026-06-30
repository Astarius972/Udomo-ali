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

The supplied image is the only current photograph and is used at:

- `public/images/hero.jpg`

The remaining visual areas deliberately render premium gradient placeholders. Their intended replacement paths are:

- `public/images/about.jpg`
- `public/images/journey/law.jpg`
- `public/images/journey/research.jpg`
- `public/images/journey/hr-business.jpg`
- `public/images/journey/real-world.jpg`
- `public/images/journey/admissions.jpg`
- `public/images/journey/counselling.jpg`
- `public/images/contact.jpg`

Placeholder paths and labels are defined in `components/portfolio/data.ts` and in the `About` and `Contact` components. The shared placeholder implementation is `components/portfolio/PlaceholderImage.tsx`.

When real images arrive, add them at the paths above and replace each `PlaceholderImage` usage with Next.js `Image`, following the hero implementation in `components/portfolio/Hero.tsx`.

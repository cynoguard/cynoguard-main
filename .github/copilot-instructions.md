# CynoGuard Copilot Instructions

## Project Overview

CynoGuard is a **Next.js landing page and public website** for a SMB security platform. The dashboard console is maintained separately (`console.cynoguard.com`). This repo contains:
- Marketing landing pages (primary focus: `feature/landing-page`)
- Public sign-up & pricing flows
- Authentication UI scaffolding
- Configuration portal

**Not in this repo**: Dashboard frontend, backend services

## Technology Stack

- **Framework**: Next.js 16 (App Router, React 19)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + class-variance-authority
- **UI Components**: shadcn/ui pattern (Radix UI + Tailwind)
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Path alias**: `@/` maps to `src/`

## Component Architecture

### Organization
```
src/components/
├── landing/       # Page sections (Hero, FeaturesGrid, Pricing, FAQ, CTA)
├── shared/        # Layout components (NavBar, Footer)
└── ui/            # Reusable primitives (button, card, accordion, bento-grid)
```

### Key Patterns

1. **Functional Components + CVA**: Use `class-variance-authority` for variant management
   ```tsx
   const buttonVariants = cva("base-classes", {
     variants: { variant: { default: "...", outline: "..." } }
   })
   ```

2. **Tailwind + cn() Utility**: All classname merging uses `cn()` from `@/lib/utils`
   ```tsx
   import { cn } from "@/lib/utils"
   <div className={cn("base", condition && "conditional")} />
   ```

3. **Client Components**: Use `"use client"` only when needed (Framer Motion, interactivity)
   - FeaturesGrid, Pricing, FAQ use client-side features; keep others SSR

4. **Icon Pattern**: Prefer Lucide icons; import from `lucide-react`
   ```tsx
   import { ArrowRight, Play, Zap } from 'lucide-react'
   ```

## Routing & Pages

- **App Router**: `src/app/` with route groups
- **Landing page**: `src/app/(home)/page.tsx` (composes: Hero → HeroImage → FeaturesGrid → FeaturesSub → Pricing → FAQ → SignupCTA)
- **Other pages**: `src/app/(pages)/pricing/page.tsx`, etc.
- **Root layout**: Includes NavBar & Footer; defines global metadata & fonts

## Development Workflow

```bash
# Setup
npm install
npx shadcn-ui@latest add [component]  # Add new shadcn components

# Development
npm run dev        # http://localhost:3000

# Build & Lint
npm run build
eslint             # Check linting

# Branch strategy
# main → production | dev → integration | feature/* → work branches
# Always PR through dev; never commit directly to main
```

## Key Files & Conventions

- **Fonts**: `public/fonts/index.ts` exports `fontGeist`, `fontSans`
- **Colors**: Custom dark brand blue `#0a1120`; most text uses `slate` palette
- **Layout sections**: 12-col grid, max-width `6xl`, centered with `mx-auto px-4`
- **Metadata**: Root layout defines SEO tags; Ensure `metadataBase` for Open Graph

## Common Tasks

### Add a New Landing Section
1. Create component in `src/components/landing/[Section].tsx`
2. If interactive (animations, state): add `"use client"` at top
3. Use Tailwind spacing standardized as `py-24` sections with `max-w-6xl mx-auto`
4. Import in `src/app/(home)/page.tsx` and compose in order

### Add a New Reusable Component
1. Use shadcn/ui components as base → `src/components/ui/`
2. Define variants with `cva()` + `VariantProps`
3. Export composed variants for use in landing sections

### Update Styling
- Avoid hardcoding colors; extend `tailwind.config.ts` if needed
- Prefer `hover:` and `transition-` utilities over CSS
- Test responsive breakpoints: `sm:`, `md:`, `lg:`

## Key Dependencies
- `@radix-ui/react-*`: Accessible primitives (accordion, slot)
- `framer-motion`: Animations (only import in `"use client"` components)
- `tailwind-merge` & `clsx`: Smart classname handling via `cn()`
- `@tabler/icons-react`: Fallback icon set (Lucide is primary)

---
**Last updated**: Feb 2026 | For questions on patterns, check existing landing components or `README.md` branch strategy.

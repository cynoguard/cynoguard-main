# 🛡️ CynoGuard – Dev Branch

This `dev` branch contains the **development version of the CynoGuard public website (UI only)**.

> The security dashboard console is maintained separately at: **console.cynoguard.com**

---

## 🌿 Branch Strategy

- `main` – Production website  
- `dev` – Integration & sprint testing  
- Feature branches:
  - `feature/landing-page`
  - `fix/responsive`
  - `chore/seo`
  - `docs/readme`

❌ No direct commits to `main`  
✔ All work flows through feature branches → `dev`

---

## 🏗️ Project Scope

This repository includes:
- Public landing pages  
- Pricing, FAQ & product flows  
- Authentication & onboarding UI  
- JS snippet configuration portal  

❌ Dashboard frontend is **NOT part of this repo**

---

## 🎯 Feature Highlight – Landing Page

### `feature/landing-page`
This branch implements the **primary marketing landing page** for CynoGuard.

Focus areas:
- High-contrast dark/light UI
- Conversion-focused hero & CTA
- Security trust positioning for SMBs & startups

#### Landing Architecture
- Navbar & Hero section
- Feature bento grid (4×2)
- Pricing & FAQ accordion
- Final signup CTA
- Minimal SEO-optimized footer

---

## 🚀 Tech Stack

- Framework: **Next.js 14+ (App Router)**  
- Styling: **Tailwind CSS**  
- UI: **shadcn/ui**  
- Icons: **Lucide React**  
- Animation: **Framer Motion**  
- Fonts: **Inter / Geist**  
- State: **Redux**  
- Auth: **Firebase**

---

## ⚙️ Setup

```bash
git checkout dev
npm install
npx shadcn-ui@latest add accordion button card
npm run dev

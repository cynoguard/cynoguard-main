# 🛡️ CynoGuard – Dev Branch

This `dev` branch contains the development version of the **CynoGuard main website (UI only)** deployed to the root domain path.

> The dashboard console is maintained separately at: **console.cynoguard.com**

---

## 🌿 Branch Strategy

- `main` – Production website  
- `dev` – Integration / development  
- Feature branches  
  - `feature/landing-page`  
  - `fix/responsive`  
  - `chore/seo`  
  - `docs/readme`

---

## 🏗️ Project Scope

This repository includes only:

- Public landing pages  
- Pricing, FAQ & product flows  
- Authentication & onboarding UI  
- JS snippet configuration portal

❌ Web dashboard frontend is **NOT part of this repo**.

---

## 🚀 Tech Stack

- Next.js 14+ App Router  
- Tailwind CSS  
- shadcn/ui components  
- Lucide React icons  
- Framer Motion animations  
- Inter / Geist fonts

---

## ⚙️ Setup

```bash
git checkout dev
npm install
npx shadcn-ui@latest add accordion button card
npm run dev
```

Open → http://localhost:3000

---

## 🎯 Commit Convention

Use these prefixes:

- `feat:` – new UI feature  
- `fix:` – bug / responsive  
- `chore:` – config / deps  
- `docs:` – README / SEO  
- `style:` – visual update

### Examples
- feat: complete initial landing page  
- fix: mobile hero alignment  
- chore: add shadcn setup  
- docs: update seo metadata

---

## 📬 Merge Flow

1. Develop → feature branches  
2. PR → `dev`  
3. Review UI & SEO  
4. Merge → `main`

---

## 👥 Team

6 Contributors – CynoGuard Web Team

### Status
- Landing Page – Initial Completed  
- SEO – Optimization Stage  
- Docs – Draft
````markdown

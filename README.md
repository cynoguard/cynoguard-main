# CynoGuard | feature/landing-page

This branch contains the landing page implementation for **CynoGuard Security Intelligence Platform**.  
The UI focuses on high-contrast dark/light aesthetics and conversion-friendly structure for cybersecurity infrastructure aimed at SMBs and startups.

---

## 🌿 Branching Context

Development workflow:

- `main` – production stable
- `dev` – sprint integration
- **`feature/landing-page`** – current branch for public site UI

❌ No direct commits to main  
✔ All changes merged via Pull Request to `dev`

---

## 🏗️ Landing Architecture

Modular components used in this branch:

### 1) Navigation & Hero
- Navbar with logo and product links
- Hero section with primary CTA
- Firebase authentication entry

### 2) Feature Discovery
- Bento grid of core capabilities
- 4x2 feature highlights
- Security trust banners

### 3) Conversion & Trust
- Pricing table layout
- FAQ accordion (shadcn)
- Final signup CTA

### 4) Footer
- Minimalist black footer
- Social links
- SEO text references

---

## 🛠 Tech Stack

- Framework: **Next.js 14+ – App Router**
- Styling: **Tailwind CSS**
- Components: **shadcn/ui**
- Icons: **Lucide React**
- State: **Redux**
- Auth: **Firebase**

---

## 🚀 Development – This Branch

### 1) Checkout
    git checkout dev
    git checkout -b feature/landing-page

### 2) Install
    npm install

### 3) Add UI Components
    npx shadcn-ui@latest add accordion button card

### 4) Run
    npm run dev

---

## 🎨 Design Standards

- Components → PascalCase naming
- CSS classes → kebab-case
- Cards radius → 2xl and rounded-sm / 32px style
- Comment complex UI logic clearly
- SEO strings kept in constants

---

## 📬 Merge Flow

1. Develop UI in this branch  
2. PR → `dev`  
3. Review/Test  
4. Merge → `main`

---

Team CynoGuard

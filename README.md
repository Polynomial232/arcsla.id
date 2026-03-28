# 👑 Arcsla Kingdom

> **Digital Sovereignty in the Pursuit of Creative Excellence.**

Welcome to the central command hub of the **Arcsla Kingdom**—a digital fortress built to manage the royal lineages, visual archives, and symphonies of our sovereign contributors. This platform serves as the official portal for the Arcsla community, bridging the gap between creators and their loyal subjects.

---

## 🏛️ The Royal Mandates (Features)

- **Sovereign Talent Showcase**: A regal directory of the monarchs and divine icons within our digital empire.
- **Archives of the Kingdom**: A curated visual legacy of legendary chronicles and fanart forged by loyal subjects.
- **Royal Theatre**: Seamless integration with our visual chronicles delivered via YouTube.
- **Royal Proclamation**: Stay informed on the latest grand gatherings and digital gatherings within the empire.
- **Symphony of the Sovereigns**: Explore sonic frequencies and harmonies forged in our royal chambers (Spotify integration).
- **Digital Fortress**: Advanced responsive design built for the modern digital era.

---

## 🛠️ Technical Decree (Tech Stack)

### Core

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router 7](https://reactrouter.com/)

### Styling & Animation

- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### Infrastructure

- **Backend & Database**: [Supabase](https://supabase.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Linting**: [ESLint](https://eslint.org/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged)

---

## ⚔️ Developer Chronicles (Setup)

To begin your quest in the local development environment:

### 1. Prerequisites

- Node.js (Latest LTS)
- Yarn or npm

### 2. Initialization

```bash
# Clone the scrolls
git clone https://github.com/your-repo/arcsla-net.git

# Enter the chamber
cd arcsla-net

# Install the royal mandates (dependencies)
yarn install
```

### 3. Environment Secrets

Create a `.env.local` file in the root with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_key
```

### 4. Manifest the Empire

```bash
# Start the development server
yarn dev

# Format all scrolls before presentation
yarn format

# Check for architectural flaws
yarn lint
```

---

## 🚀 Deployment to the Realm

This kingdom is optimized for deployment on **Vercel**.

1. Connect your repository to Vercel.
2. The `vercel.json` ensures that all royal paths are correctly routed to the central hub (`index.html`) for our SPA architecture.
3. Configure environment variables in the Vercel dashboard.

---

## 📜 Royal Protocol (Maintenance)

- **Formatting**: Pre-commit hooks via Husky ensure that all code satisfies the Prettier royal standard before being committed.
- **Data**: All royal information is managed through Supabase tables (`talents`, `navigation`, `gallery`, `events`, etc.).

---

<div align="center">
  <p><i>"In Digital Sovereignty We Trust"</i></p>
  <p>© 2026 PT ARCSLA CAKRAWALA INDONESIA. All rights reserved by the Crown.</p>
</div>

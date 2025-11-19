# Trust Reach Club - Community Landing Page

A Next.js landing page for Trust Reach Club, a community-driven business growth platform.

## Features

- Modern, conversion-focused design with Tailwind CSS
- Psychology-based section ordering for optimal conversion
- Fully responsive design
- 12 sections in the specified order:
  1. Hero Section
  2. The Problem
  3. The Solution
  4. Why This Works
  5. How the Community Works
  6. Member Benefits
  7. Our Three Business Pillars
  8. Membership
  9. Community Structure
  10. Testimonials (Social Proof)
  11. FAQ (Remove objections)
  12. Final Call to Action

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# The .env.local file has been created with Supabase credentials
# ⚠️ IMPORTANT: Add your Service Role Key manually:
# - Go to: https://app.supabase.com/project/gltfmcqkttszqoaodjbf/settings/api
# - Copy the `service_role` key and replace `your_service_role_key_here` in .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

For detailed Supabase setup information, see [SUPABASE_SETUP.md](./SUPABASE_SETUP.md).

## Build

To create a production build:
```bash
npm run build
npm start
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Supabase (Database & Backend)
- Radix UI (UI Components)
- Headless UI (Transitions)

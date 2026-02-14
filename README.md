# Lyrate Website

A distinctive, production-grade showcase website for Lyrate - a blazing-fast iOS eBook reader.

## Design Philosophy

This website embodies **refined editorial sophistication** - drawing from literary magazine aesthetics (Granta, Paris Review) while celebrating native iOS reading craft and performance.

### Aesthetic Direction

- **Typography**: Playfair Display (display) + Crimson Text (body) for literary elegance
- **Color Palette**: Warm parchment base, deep ink blacks, refined cyan accents
- **Layout**: Asymmetric compositions with generous whitespace
- **Animations**: Orchestrated scroll-triggered reveals and refined hover states
- **Visual Details**: Paper textures, gradient overlays, decorative accents

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom theme
- **Framer Motion** - Smooth animations and transitions
- **next-themes** - Dark/light mode support

## Getting Started

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

```
lyrate-app/
├── app/
│   ├── layout.tsx       # Root layout with fonts & theme provider
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles & animations
├── components/
│   ├── Hero.tsx           # Hero section with library screenshot
│   ├── Pillars.tsx        # 4 core pillars (performance, organization, habits, reader)
│   ├── Features.tsx       # Interactive feature showcase
│   ├── ReadingHabits.tsx  # Reading habits & analytics section
│   ├── Footer.tsx         # Footer with links
│   └── ThemeToggle.tsx    # Dark/light theme switcher
├── public/
│   └── screenshots/     # App screenshots
└── [config files]
```

## Key Features

### Literary-Modern Design
- Custom serif typography (Playfair Display + Crimson Text)
- Editorial layouts with asymmetric compositions
- Refined paper textures and subtle visual details

### Smooth Interactions
- Scroll-triggered animations with Framer Motion
- Orchestrated page load with staggered reveals
- Interactive screenshot showcase with smooth transitions

### Dark/Light Mode
- System-aware theme detection
- Smooth theme transitions
- Persistent user preference

### Performance Optimized
- Next.js Image optimization
- Lazy loading for screenshots
- Minimal JavaScript bundle

## Deployment

### Deploy to Vercel

1. Push to GitHub repository
2. Import project in Vercel dashboard
3. Deploy (zero configuration needed)

Or use the Vercel CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Customization

### Colors

Edit [tailwind.config.ts](tailwind.config.ts) to customize the color palette:

```typescript
colors: {
  parchment: { ... },  // Light mode backgrounds
  ink: { ... },        // Dark colors & text
  cyan: { ... },       // Accent colors
}
```

### Typography

Change fonts in [app/layout.tsx](app/layout.tsx):

```typescript
import { Your_Font } from "next/font/google";
```

### Content

Update copy in individual components:
- Hero tagline: `components/Hero.tsx`
- Product pillars (4 core areas): `components/Pillars.tsx`
- Features showcase: `components/Features.tsx`
- Reading habits section: `components/ReadingHabits.tsx`

## Key Focus Areas

The website highlights 4 core pillars:
1. **Native Performance** - Fast, handles 1000+ books, instant search
2. **Simple Organization** - Clean UI, collections, easy library management
3. **Reading Habits** - Track time, streaks, analytics, build consistency
4. **Reader Features** - Light/dark mode, font customization, AI summarization

## License

Built for Lyrate - a premium iOS eBook reader.

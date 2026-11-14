# Lyrate Website

The marketing site for Lyrate, the EPUB reader for iPhone and iPad. Served at https://lyrate.ishaanrajiv.com.

Next.js 15 (App Router), Tailwind CSS 3 and next-themes. Statically rendered homepage, privacy policy and support pages.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Brand

The site uses the design language from the iOS app (`Lyrate-iOS` main). If the app changes, take values from there.

| Element | Source in Lyrate-iOS | Here |
| --- | --- | --- |
| Riffle mark | `Assets.xcassets/Logo.imageset` (Logo.svg, Logo-dark.svg) | `components/Brand.tsx`, `--riffle-*` in `app/globals.css` |
| App icon | `LyrateIcon.icon` | `AppIcon` in `components/Brand.tsx`, `app/icon.svg`, `app/apple-icon.tsx` |
| Text (label colour, black / white) | `Color.brandInk` (the system label) in `Core/UI/Colors.swift` | `--ink` |
| Accent, sea glass (#307772 / #6CC4BE) | `Color.appAccent` | `--accent` (links, focus, selection, controls) |
| Lit fill (navy #232838 / cream #F3EBDD) | `Color.lit`, `Color.onLit` | `--lit`, `--on-lit` (primary button, selected chip, Privacy panel) |
| Page colour (#F2EDED / #080808) | `Color.dynamicBackground` | `--paper` |
| Wordmark (Geist Medium, −0.025em) | `Resources/Geist-Medium.ttf`, onboarding | `app/fonts/`, `Wordmark` |
| Icons (Loop, simplified B.2) | `Docs/Design/Icons/Source/*.svg` | `components/icons.ts` |

Interface text uses the system font stack and Apple's label colours, as the app does. Sea glass is the only interface colour; the rest comes from book covers. The shared rules (and why) are in the private `design` repo.

## Content

Marketing copy lives in `components/content.ts`. The full privacy policy lives in `app/privacy/page.tsx` and is served at `/privacy`. Link this URL from App Store Connect and the app's Settings. Only describe features that ship. Anything behind a feature flag in the app (AI, Calibre) stays off the site until it is enabled.

The App Store Support URL is `https://lyrate.ishaanrajiv.com/support`, implemented in `app/support/page.tsx`. The support email is defined once as `SUPPORT_EMAIL` in `components/content.ts` and shared with the privacy policy. Email routing is managed separately through Cloudflare.

## Screenshots

`public/shots/` holds screenshots of the current app build, taken on an iPhone simulator with the status bar set to 9:41. The library is filled with public-domain Project Gutenberg books. Light and dark versions share a name and differ by suffix (`-light`, `-dark`). `Phone` shows whichever one matches the site theme.

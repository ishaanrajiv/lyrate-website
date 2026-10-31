# Lyrate Website

The marketing site for Lyrate, the EPUB reader for iPhone and iPad. Served at https://lyrate.ishaanrajiv.com.

Next.js 15 (App Router), Tailwind CSS 3 and next-themes. One page, statically rendered.

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
| Brand ink (#232838 / #E9DFCB) | `Color.brandInk` in `Core/UI/Colors.swift` | `--ink` |
| Page colour (#F2EDED / #0D0D0D) | `Color.dynamicBackground` | `--paper` |
| Wordmark (Outfit Medium, −0.025em) | `Resources/Outfit-Medium.ttf`, `SplashView` | `app/fonts/`, `Wordmark` |
| Icons (Loop, simplified B.2) | `Docs/Design/Icons/Source/*.svg` | `components/icons.ts` |

Interface text uses the system font stack, as the app does. The interface stays monochrome, and colour on the page comes from book covers.

## Content

All copy lives in `components/content.ts`. Only describe features that ship. Anything behind a feature flag in the app (AI, Calibre) stays off the site until it is enabled.

## Screenshots

`public/shots/` holds screenshots of the current app build, taken on an iPhone simulator with the status bar set to 9:41. The library is filled with public-domain Project Gutenberg books. Light and dark versions share a name and differ by suffix (`-light`, `-dark`). `Phone` shows whichever one matches the site theme.

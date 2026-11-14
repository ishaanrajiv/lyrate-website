import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

// Geist Medium, the wordmark face. Same file the app bundles (SIL OFL).
const geist = localFont({
  src: "./fonts/Geist-Medium.ttf",
  weight: "500",
  variable: "--font-geist",
  display: "swap",
});

const description =
  "Lyrate is an EPUB reader for iPhone and iPad. Careful typography, a tidy library and search inside every book. Your books stay on your device, with no account.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyrate.ishaanrajiv.com"),
  title: "Lyrate — A quiet place to read",
  description,
  itunes: { appId: "6752578241" },
  openGraph: {
    title: "Lyrate — A quiet place to read",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2EDED" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

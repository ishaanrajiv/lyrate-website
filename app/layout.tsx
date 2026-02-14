import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lyrate — Read Better. Understand Deeper.",
  description: "A premium iOS eBook reader with beautiful typography, smart library tools, reading analytics, and optional AI summaries and Q&A.",
  openGraph: {
    title: "Lyrate — Read Better. Understand Deeper.",
    description: "A premium iOS eBook reader with beautiful typography, smart library tools, reading analytics, and optional AI summaries and Q&A.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${crimson.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

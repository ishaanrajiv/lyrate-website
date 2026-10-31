import { Riffle, Wordmark } from "./Brand";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, TESTFLIGHT_URL } from "./content";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-paper/80 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/70">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 rounded-md" aria-label="Lyrate, back to top">
          <Riffle className="h-7 w-7" />
          <Wordmark className="text-[1.375rem] leading-none" />
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-[0.9375rem] text-ink/65 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a href={TESTFLIGHT_URL} target="_blank" rel="noreferrer" className="button-primary ml-1 h-10 px-4 text-sm">
            Get the beta
          </a>
        </div>
      </nav>
    </header>
  );
}

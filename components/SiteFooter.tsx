import Link from "next/link";
import { Riffle, Wordmark } from "./Brand";
import { NAV_LINKS, TESTFLIGHT_URL } from "./content";

export default function SiteFooter() {
  return (
    <div className="border-t rule">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/#top" className="flex items-center gap-2 text-ink" aria-label="Lyrate home">
          <Riffle className="h-6 w-6" />
          <Wordmark className="text-lg leading-none" />
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href === "#privacy" ? "/privacy" : `/${link.href}`}
                className="transition-colors hover:text-ink"
              >
                {link.href === "#privacy" ? "Privacy policy" : link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={TESTFLIGHT_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
              TestFlight
            </a>
          </li>
        </ul>
        <p>© {new Date().getFullYear()} Lyrate</p>
      </div>
    </div>
  );
}

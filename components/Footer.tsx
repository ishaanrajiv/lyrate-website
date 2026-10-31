import { AppIcon, Riffle, Wordmark } from "./Brand";
import { CLOSING, NAV_LINKS, TESTFLIGHT_URL } from "./content";

export default function Footer() {
  return (
    <footer className="border-t rule">
      <div className="mx-auto flex max-w-page flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <AppIcon className="rise h-24 w-24 drop-shadow-[0_18px_30px_rgb(35_40_56/0.25)] sm:h-28 sm:w-28" />
        <h2 className="display rise mt-10 text-[2.5rem] sm:text-[3.5rem]">{CLOSING.title}</h2>
        <p className="lede rise mt-5 max-w-[30rem]">{CLOSING.body}</p>
        <a href={TESTFLIGHT_URL} target="_blank" rel="noreferrer" className="button-primary rise mt-9">
          Join the TestFlight beta
        </a>
      </div>

      <div className="border-t rule">
        <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-8 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <a href="#top" className="flex items-center gap-2 text-ink" aria-label="Lyrate, back to top">
            <Riffle className="h-6 w-6" />
            <Wordmark className="text-lg leading-none" />
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
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
    </footer>
  );
}

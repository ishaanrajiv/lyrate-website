import { AppIcon } from "./Brand";
import { CLOSING, APP_STORE_URL } from "./content";
import SiteFooter from "./SiteFooter";

export default function Footer() {
  return (
    <footer className="border-t rule">
      <div className="mx-auto flex max-w-page flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
        <AppIcon className="rise h-24 w-24 drop-shadow-[0_18px_30px_rgb(35_40_56/0.25)] sm:h-28 sm:w-28" />
        <h2 className="display rise mt-10 text-[2.5rem] sm:text-[3.5rem]">{CLOSING.title}</h2>
        <p className="lede rise mt-5 max-w-[30rem]">{CLOSING.body}</p>
        <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="button-primary rise mt-9">
          Download on the App Store
        </a>
      </div>

      <SiteFooter />
    </footer>
  );
}

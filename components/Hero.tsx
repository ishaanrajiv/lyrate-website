import { Riffle, Wordmark } from "./Brand";
import Phone from "./Phone";
import { HERO, SHOTS, APP_STORE_URL } from "./content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip">
      <div className="mx-auto flex max-w-page flex-col items-center px-4 pt-14 text-center sm:px-6 sm:pt-20">
        <Riffle animate title="Lyrate" className="h-28 w-28 sm:h-36 sm:w-36" />
        <Wordmark className="-mt-1 text-[1.75rem] leading-none sm:text-[2rem]" />

        <p className="label mt-10">{HERO.eyebrow}</p>
        <h1 className="display mt-4 max-w-[12ch] text-[3.25rem] sm:text-[5rem] lg:text-[6rem]">{HERO.title}</h1>
        <p className="lede mt-6 max-w-[34rem]">{HERO.body}</p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="button-primary">
            {HERO.primary}
          </a>
          <a href="#reading" className="button-quiet">
            {HERO.secondary}
          </a>
        </div>
        <p className="mt-4 text-[0.8125rem] text-ink/45">{HERO.note}</p>
      </div>

      {/* Three screens rising out of the page; the row is wider than a phone screen and clips at the edges. */}
      <div
        className="mt-16 flex h-[26rem] items-start justify-center gap-4 overflow-hidden px-4 pt-2 sm:mt-20 sm:h-[36rem] sm:gap-8"
        style={{
          maskImage: "linear-gradient(to bottom, black 55%, transparent 96%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 96%)",
        }}
      >
        <Phone shot={SHOTS.library} className="mt-16 w-[60vw] max-w-[17rem] shrink-0 sm:w-[30vw]" sizes="(min-width: 640px) 17rem, 60vw" />
        <Phone shot={SHOTS.reader} priority className="w-[68vw] max-w-[20rem] shrink-0 sm:w-[34vw]" sizes="(min-width: 640px) 20rem, 68vw" />
        <Phone shot={SHOTS.search} className="mt-16 w-[60vw] max-w-[17rem] shrink-0 sm:w-[30vw]" sizes="(min-width: 640px) 17rem, 60vw" />
      </div>
    </section>
  );
}

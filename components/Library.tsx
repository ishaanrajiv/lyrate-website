import Icon from "./Icon";
import Phone from "./Phone";
import { LIBRARY, SHOTS } from "./content";

export default function Library() {
  return (
    <section id="library" className="border-t rule">
      <div className="mx-auto grid max-w-page items-center gap-16 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:gap-20">
        <div className="rise relative order-2 mx-auto flex w-full max-w-[34rem] justify-center lg:order-1">
          <Phone shot={SHOTS.library} className="w-[58%] -rotate-[3deg]" sizes="(min-width: 1024px) 18rem, 50vw" />
          <Phone
            shot={SHOTS.search}
            className="-ml-[16%] mt-[14%] w-[58%] rotate-[3deg]"
            sizes="(min-width: 1024px) 18rem, 50vw"
          />
        </div>

        <div className="order-1 lg:order-2">
          <div className="rise">
            <p className="label">{LIBRARY.label}</p>
            <h2 className="display mt-4 text-[2.5rem] sm:text-[3.5rem]">{LIBRARY.title}</h2>
          </div>
          <ul className="mt-10 space-y-8">
            {LIBRARY.points.map((point) => (
              <li key={point.title} className="rise flex gap-4">
                <Icon name={point.icon} className="mt-0.5 h-6 w-6 shrink-0 text-ink" />
                <div>
                  <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em]">{point.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink/60">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

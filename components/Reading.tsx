import Icon from "./Icon";
import Phone from "./Phone";
import TypeSpecimen from "./TypeSpecimen";
import { DETAILS, READING, SHOTS } from "./content";

export default function Reading() {
  return (
    <section id="reading" className="border-t rule">
      <div className="mx-auto max-w-page px-4 py-24 sm:px-6 sm:py-32">
        <div className="rise max-w-2xl">
          <p className="label">{READING.label}</p>
          <h2 className="display mt-4 text-[2.5rem] sm:text-[3.5rem]">{READING.title}</h2>
          <p className="lede mt-6">{READING.body}</p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div className="rise">
            <TypeSpecimen />
          </div>
          <Phone
            shot={SHOTS.typography}
            className="rise mx-auto w-[72vw] max-w-[20rem]"
            sizes="(min-width: 1024px) 20rem, 72vw"
          />
        </div>

        <div className="mt-28 sm:mt-36">
          <div className="rise max-w-2xl">
            <p className="label">{DETAILS.label}</p>
            <h2 className="display mt-4 text-[2.25rem] sm:text-[3rem]">{DETAILS.title}</h2>
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {DETAILS.items.map((item) => (
              <li key={item.title} className="rise border-t rule pt-5">
                <Icon name={item.icon} className="h-7 w-7 text-ink" />
                <h3 className="mt-4 text-[1.0625rem] font-semibold tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/60">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

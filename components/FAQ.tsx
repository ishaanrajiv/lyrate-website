import Icon from "./Icon";
import { FAQ as ENTRIES } from "./content";

export default function FAQ() {
  return (
    <section id="faq">
      <div className="mx-auto grid max-w-page gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-20">
        <div className="rise">
          <p className="label">Questions</p>
          <h2 className="display mt-4 text-[2.5rem] sm:text-[3rem]">Good to know.</h2>
        </div>

        <div className="border-t rule">
          {ENTRIES.map((entry) => (
            <details key={entry.question} className="group border-b rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.0625rem] font-semibold tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                {entry.question}
                <Icon
                  name="chevron-down"
                  className="h-5 w-5 shrink-0 text-ink/45 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="-mt-1 max-w-[40rem] pb-6 text-[0.9375rem] leading-relaxed text-ink/60">{entry.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

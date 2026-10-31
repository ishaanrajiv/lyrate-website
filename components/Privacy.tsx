import Icon from "./Icon";
import { PRIVACY } from "./content";

export default function Privacy() {
  return (
    <section id="privacy" className="px-2 sm:px-4">
      <div className="mx-auto max-w-[80rem] rounded-[2rem] bg-ink px-6 py-20 text-on-ink sm:rounded-[2.5rem] sm:px-12 sm:py-28">
        <div className="mx-auto max-w-page">
          <div className="rise max-w-2xl">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-on-ink/55">{PRIVACY.label}</p>
            <h2 className="display mt-4 text-[2.5rem] sm:text-[3.75rem]">{PRIVACY.title}</h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-on-ink/70 sm:text-lg">{PRIVACY.body}</p>
          </div>

          <ul className="mt-16 grid gap-10 sm:grid-cols-3">
            {PRIVACY.points.map((point) => (
              <li key={point.title} className="rise border-t border-on-ink/15 pt-5">
                <Icon name={point.icon} className="h-7 w-7" />
                <h3 className="mt-4 text-[1.0625rem] font-semibold tracking-[-0.01em]">{point.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-on-ink/65">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useId, useState } from "react";
import { READING, TYPEFACES } from "./content";

const SIZES = { min: 15, max: 26, start: 19 };

/** A paragraph styled with the reader's settings, so visitors can try them. */
export default function TypeSpecimen() {
  const [face, setFace] = useState<number>(1);
  const [size, setSize] = useState(SIZES.start);
  const [justified, setJustified] = useState(true);
  const sizeId = useId();

  return (
    <div className="rounded-[1.75rem] bg-paper-raised p-5 ring-1 ring-ink/[0.06] sm:p-8">
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Typeface">
        {TYPEFACES.map((typeface, index) => {
          const selected = index === face;
          return (
            <button
              key={typeface.name}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => setFace(index)}
              style={{ fontFamily: typeface.stack }}
              className={`h-10 rounded-full px-4 text-[0.9375rem] font-semibold transition-colors ${
                selected ? "bg-ink text-on-ink" : "bg-paper text-ink ring-1 ring-ink/10 hover:ring-ink/25"
              }`}
            >
              {typeface.name}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex min-w-[14rem] flex-1 items-center gap-3">
          <label htmlFor={sizeId} className="text-sm text-ink/55">
            Size
          </label>
          <input
            id={sizeId}
            type="range"
            min={SIZES.min}
            max={SIZES.max}
            value={size}
            onChange={(event) => setSize(Number(event.target.value))}
            className="h-1 flex-1 cursor-pointer accent-[rgb(var(--ink))]"
          />
          <span className="w-6 text-right text-sm tabular-nums text-ink/55">{size}</span>
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-ink/55">
          <input
            type="checkbox"
            checked={justified}
            onChange={(event) => setJustified(event.target.checked)}
            className="h-4 w-4 accent-[rgb(var(--ink))]"
          />
          Justify and hyphenate
        </label>
      </div>

      <div className="mt-6 border-t border-ink/10 pt-6">
        <p className="mb-4 text-center text-xl font-bold" style={{ fontFamily: TYPEFACES[face].stack }}>
          VII
        </p>
        <p
          lang="en"
          className="text-ink transition-[font-size] duration-150"
          style={{
            fontFamily: TYPEFACES[face].stack,
            fontSize: `${size}px`,
            lineHeight: 1.6,
            textAlign: justified ? "justify" : "left",
            hyphens: justified ? "auto" : "manual",
            WebkitHyphens: justified ? "auto" : "manual",
          }}
        >
          {READING.specimenText}
        </p>
      </div>

      <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink/45">{READING.specimenNote}</p>
    </div>
  );
}

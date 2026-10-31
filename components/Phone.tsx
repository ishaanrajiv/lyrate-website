import Image from "next/image";
import type { Screenshot } from "./content";

interface PhoneProps {
  shot: Screenshot;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * An iPhone screenshot with the device's screen corners. When the shot has a dark
 * variant, the one matching the site theme is shown.
 */
export default function Phone({ shot, className, priority, sizes = "(min-width: 1024px) 22rem, 70vw" }: PhoneProps) {
  const frame =
    "relative block aspect-[1320/2868] overflow-hidden rounded-[13.5%/6.2%] bg-paper-raised ring-1 ring-ink/10 shadow-[0_30px_80px_-30px_rgb(var(--ink)/0.35)]";

  return (
    <div className={className}>
      <div className={`${frame} ${shot.dark ? "only-light" : ""}`}>
        <Image src={shot.light} alt={shot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {shot.dark && (
        <div className={`${frame} only-dark`}>
          <Image src={shot.dark} alt={shot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
        </div>
      )}
    </div>
  );
}

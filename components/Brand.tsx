import type { CSSProperties } from "react";

// One page of the Riffle mark, pivoting at the origin (Lyrate-iOS Logo.imageset).
const PAGE_PATH = "M-1 0C-4-20-4.5-38-3-50A3 3 0 0 1 3-50C4.5-38 4-20 1 0Z";

// Back page first so the front page draws on top.
const PAGE_ANGLES = [90, 75, 60, 45, 30, 15, 0];

// Paper page opacities from the app icon (LyrateIcon.icon), front page first.
const ICON_PAGE_OPACITY = [1, 0.84, 0.69, 0.55, 0.42, 0.3, 0.2];

interface RiffleProps {
  className?: string;
  animate?: boolean;
  title?: string;
}

/** The Riffle mark: seven pages fanned through 90°, in ink (light) or paper (dark). */
export function Riffle({ className, animate = false, title }: RiffleProps) {
  return (
    <svg
      viewBox="-11.75 -60.25 72 72"
      className={`${animate ? "riffle-animate " : ""}${className ?? ""}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {PAGE_ANGLES.map((angle) => {
        const index = angle / 15;
        const style = {
          "--angle": `${angle}deg`,
          "--index": index,
          fill: `var(--riffle-${index})`,
        } as CSSProperties;
        return <path key={angle} d={PAGE_PATH} className="riffle-page" style={style} />;
      })}
    </svg>
  );
}

/** The app icon: paper pages on an ink tile. */
export function AppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect width="100" height="100" rx="22.5" fill="#232838" />
      <g transform="translate(25.75 74.25)" fill="#F3EBDD">
        {PAGE_ANGLES.map((angle) => (
          <path
            key={angle}
            d={PAGE_PATH}
            transform={`rotate(${angle})`}
            opacity={ICON_PAGE_OPACITY[angle / 15]}
          />
        ))}
      </g>
    </svg>
  );
}

/** Outfit Medium "Lyrate", tracked as on the app's launch screen. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-wordmark font-medium tracking-[-0.025em] ${className ?? ""}`}>
      Lyrate
    </span>
  );
}

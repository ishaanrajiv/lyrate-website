import type { CSSProperties } from "react";

// One page of the Riffle mark, pivoting at the origin (Lyrate-iOS Logo.imageset).
const PAGE_PATH = "M-1 0C-4-20-4.5-38-3-50A3 3 0 0 1 3-50C4.5-38 4-20 1 0Z";

// Back page first so the front page draws on top.
const PAGE_ANGLES = [90, 75, 60, 45, 30, 15, 0];


interface RiffleProps {
  className?: string;
  animate?: boolean;
  title?: string;
}

/** The Riffle mark: seven pages fanned through 90°, fading from the front page (navy, or cream in dark mode) to a sea-glass back page. */
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

/** The app icon, following the site theme: a Night tile in dark mode, a sea-glass-washed cream tile in light. */
export function AppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lyrate-icon-tile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--icon-tile-top)" }} />
          <stop offset="1" style={{ stopColor: "var(--icon-tile-bottom)" }} />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#lyrate-icon-tile)" />
      <rect x=".5" y=".5" width="99" height="99" rx="22" fill="none" style={{ stroke: "rgb(var(--icon-hairline) / 0.08)" }} />
      <g transform="translate(25.75 74.25)">
        {PAGE_ANGLES.map((angle) => (
          <path key={angle} d={PAGE_PATH} transform={`rotate(${angle})`} style={{ fill: `var(--icon-${angle / 15})` }} />
        ))}
      </g>
    </svg>
  );
}

/** Geist Medium "Lyrate", tracked −0.025em as in the shared design language. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-wordmark font-medium tracking-[-0.025em] ${className ?? ""}`}>
      Lyrate
    </span>
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const PAGE_PATH = "M-1 0C-4-20-4.5-38-3-50A3 3 0 0 1 3-50C4.5-38 4-20 1 0Z";
const PAGES = [
  { angle: 90, fill: "#6cc4be" },
  { angle: 75, fill: "#82cac3" },
  { angle: 60, fill: "#99d1c8" },
  { angle: 45, fill: "#b0d8ce" },
  { angle: 30, fill: "#c6ded3" },
  { angle: 15, fill: "#dce4d8" },
  { angle: 0, fill: "#f3ebdd" },
];

// The dark-mode icon (Night tile, pages fading from cream to sea glass), full bleed: iOS rounds the corners itself.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width="180" height="180" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="tile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1C1A17" />
            <stop offset="1" stopColor="#0B0A09" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#tile)" />
        <g transform="translate(25.75 74.25)">
          {PAGES.map((page) => (
            <path key={page.angle} d={PAGE_PATH} transform={`rotate(${page.angle})`} fill={page.fill} />
          ))}
        </g>
      </svg>
    ),
    size,
  );
}

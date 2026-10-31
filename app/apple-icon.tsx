import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const PAGE_PATH = "M-1 0C-4-20-4.5-38-3-50A3 3 0 0 1 3-50C4.5-38 4-20 1 0Z";
const PAGES = [
  { angle: 90, opacity: 0.2 },
  { angle: 75, opacity: 0.3 },
  { angle: 60, opacity: 0.42 },
  { angle: 45, opacity: 0.55 },
  { angle: 30, opacity: 0.69 },
  { angle: 15, opacity: 0.84 },
  { angle: 0, opacity: 1 },
];

// Full-bleed tile: iOS rounds the corners itself.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width="180" height="180" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#232838" />
        <g transform="translate(25.75 74.25)" fill="#F3EBDD">
          {PAGES.map((page) => (
            <path key={page.angle} d={PAGE_PATH} transform={`rotate(${page.angle})`} opacity={page.opacity} />
          ))}
        </g>
      </svg>
    ),
    size,
  );
}

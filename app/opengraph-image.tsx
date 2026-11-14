import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Lyrate — A quiet place to read";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAGE_PATH = "M-1 0C-4-20-4.5-38-3-50A3 3 0 0 1 3-50C4.5-38 4-20 1 0Z";
// Logo.svg colours, back page first.
const PAGES = [
  { angle: 90, fill: "#3D9791" },
  { angle: 75, fill: "#398482" },
  { angle: 60, fill: "#347273" },
  { angle: 45, fill: "#306064" },
  { angle: 30, fill: "#2C4D56" },
  { angle: 15, fill: "#273A47" },
  { angle: 0, fill: "#232838" },
];

export default async function OpenGraphImage() {
  const geist = await readFile(join(process.cwd(), "app/fonts/Geist-Medium.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          padding: "0 110px",
          background: "#F2EDED",
          color: "#000000",
          fontFamily: "Geist",
        }}
      >
        <svg width="300" height="300" viewBox="-11.75 -60.25 72 72">
          {PAGES.map((page) => (
            <path key={page.angle} d={PAGE_PATH} transform={`rotate(${page.angle})`} fill={page.fill} />
          ))}
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, letterSpacing: -2.8, lineHeight: 1 }}>Lyrate</div>
          <div style={{ fontSize: 46, marginTop: 22, color: "rgba(60, 60, 67, 0.6)", letterSpacing: -0.5 }}>A quiet place to read.</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Geist", data: geist, weight: 500, style: "normal" }] },
  );
}

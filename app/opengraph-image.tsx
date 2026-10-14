import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.headline}, por ${site.brand}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fonts = join(process.cwd(), "assets/fonts");
const outfitRegular = readFile(join(fonts, "Outfit-Regular.ttf"));
const outfitSemiBold = readFile(join(fonts, "Outfit-SemiBold.ttf"));

export default async function Image() {
  const [first, ...rest] = site.brand.split(".");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 90% 0%, #26262c 0%, #0b0b0d 60%)",
          color: "#f4f4f6",
          fontFamily: "Outfit",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* Mesmo símbolo do app/icon.svg */}
          <svg width="72" height="72" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="16" fill="#0b0b0d" stroke="#2a2a30" />
            <path d="M16 16H44V24H24V28H36V36H24V48H16Z" fill="#f4f4f6" />
            <rect x="40" y="40" width="8" height="8" rx="1" fill="#a1a1aa" />
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 600, letterSpacing: -1 }}>
            {first}
            <span style={{ color: "#a1a1aa" }}>.{rest.join(".")}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -3,
              maxWidth: 940,
            }}
          >
            {site.headline}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 36, color: "#a1a1aa" }}>
            Landing page, site institucional e loja virtual
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Outfit", data: await outfitRegular, style: "normal", weight: 400 },
        { name: "Outfit", data: await outfitSemiBold, style: "normal", weight: 600 },
      ],
    },
  );
}

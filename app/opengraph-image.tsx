import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.headline}, por ${site.brand}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #141417 0%, #0b0b0d 60%)",
          color: "#f4f4f6",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
          {first}
          <span style={{ color: "#a1a1aa" }}>.{rest.join(".")}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
            {site.headline}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 36, color: "#a1a1aa" }}>
            Landing page, site institucional e loja virtual
          </div>
        </div>
      </div>
    ),
    size,
  );
}

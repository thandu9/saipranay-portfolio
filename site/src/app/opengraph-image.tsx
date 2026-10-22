export const dynamic = "force-static";
import { ImageResponse } from "next/og";
export const alt = "Beyond the Data — Saipranay Thandu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f5f3ed",
        color: "#171e23",
        display: "flex",
        flexDirection: "column",
        padding: "70px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: 25,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Saipranay Thandu</span>
        <span>Beyond the Data</span>
      </div>
      <div
        style={{
          fontSize: 83,
          letterSpacing: -4,
          lineHeight: 1.05,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>I engineer clarity</span>
        <span style={{ color: "#a84125" }}>out of complexity.</span>
      </div>
      <div style={{ fontSize: 24 }}>Engineering / Analytics / Business</div>
    </div>,
    size,
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/ui/Header";
import { profile } from "@/data/profile";
import "./globals.css";
import "./brand.css";
import { MotionProvider } from "@/components/ui/MotionProvider";
const sans = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-sans",
  display: "swap",
});
const display = localFont({
  src: [
    { path: "./fonts/fraunces.woff2", style: "normal" },
    { path: "./fonts/fraunces-italic.woff2", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Saipranay Thandu — Beyond the Data",
  description:
    "Engineering, analytics and business. Explore Saipranay Thandu’s approach to trusted data, semantic architecture and better decisions.",
  openGraph: {
    title: "Beyond the Data — Saipranay Thandu",
    description: "I engineer clarity out of complexity.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: process.env.NEXT_PUBLIC_SITE_URL
    ? { index: true, follow: true }
    : { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`} id="top">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          {children}
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              sameAs: [profile.linkedin],
              knowsAbout: [
                "Data engineering",
                "Business intelligence",
                "Semantic modeling",
                "Enterprise GIS",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

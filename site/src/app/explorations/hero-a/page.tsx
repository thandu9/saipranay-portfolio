import { Hero } from "@/components/Hero";
export const metadata = {
  title: "Hero exploration A — split editorial",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <main id="main">
      <Hero variant="split" />
      <p className="exploration-note">
        Exploration A · Minimal split editorial.{" "}
        <a href="/explorations/hero-b">Compare expressive direction →</a>
      </p>
    </main>
  );
}

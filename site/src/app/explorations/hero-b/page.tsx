import { Hero } from "@/components/Hero";
export const metadata = {
  title: "Hero exploration B — expressive identity",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <main id="main">
      <Hero />
      <p className="exploration-note">
        Exploration B · Expressive personal identity.{" "}
        <a href="/explorations/hero-a">Compare split direction →</a>
      </p>
    </main>
  );
}

import { Hero } from "@/components/Hero";
import { NoiseToKnowledge } from "@/components/NoiseToKnowledge";
import { Explorer } from "@/components/model/Explorer";
import { Gallery } from "@/components/work/Gallery";
import { Impact } from "@/components/Impact";
import { About, Credentials, Contact } from "@/components/Sections";
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <NoiseToKnowledge />
        <Explorer />
        <Gallery />
        <Impact />
        <About />
        <Credentials />
      </main>
      <Contact />
    </>
  );
}

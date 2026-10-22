import { Hero } from "@/components/Hero";
import { NoiseToKnowledge } from "@/components/NoiseToKnowledge";
import { Architecture } from "@/components/model/Architecture";
import { TechnologyLandscape } from "@/components/TechnologyLandscape";
import { Gallery } from "@/components/work/Gallery";
import { Impact } from "@/components/Impact";
import { About, Credentials, Contact } from "@/components/Sections";
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <NoiseToKnowledge />
        <Architecture />
        <TechnologyLandscape />
        <Gallery />
        <Impact />
        <About />
        <Credentials />
      </main>
      <Contact />
    </>
  );
}

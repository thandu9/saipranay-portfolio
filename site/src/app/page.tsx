import { Hero } from "@/components/Hero";
import { NoiseToKnowledge } from "@/components/NoiseToKnowledge";
import { Architecture } from "@/components/model/Architecture";
import { TechnologyLandscape } from "@/components/TechnologyLandscape";
import { WorkStories } from "@/components/work/WorkStories";
import { Journey } from "@/components/Journey";
import { Impact } from "@/components/Impact";
import { Credentials, Contact } from "@/components/Sections";
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <NoiseToKnowledge />
        <Architecture />
        <TechnologyLandscape />
        <WorkStories />
        <Impact />
        <Journey />
        <Credentials />
      </main>
      <Contact />
    </>
  );
}

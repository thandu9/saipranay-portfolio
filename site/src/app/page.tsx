import { Hero } from "@/components/Hero";
import { Explorer } from "@/components/model/Explorer";
import {
  Work,
  Process,
  About,
  Credentials,
  Contact,
} from "@/components/Sections";
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Explorer />
        <Work />
        <Process />
        <About />
        <Credentials />
      </main>
      <Contact />
    </>
  );
}

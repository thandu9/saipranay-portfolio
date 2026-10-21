import { NoiseToKnowledge } from "@/components/NoiseToKnowledge";
export const metadata = {
  title: "Noise to Knowledge — motion prototype",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <main id="main">
      <NoiseToKnowledge />
    </main>
  );
}

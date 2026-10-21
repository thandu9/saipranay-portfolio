import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { studies } from "@/data/work";
import { Schema } from "@/components/model/Schema";
import { CaseExhibit } from "@/components/work/CaseExhibit";
import { Diagram } from "@/components/work/Diagram";
import { Contact } from "@/components/Sections";
export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = studies.find((s) => s.slug === slug);
  return {
    title: s ? `${s.category} | Saipranay Thandu` : "Case study not found",
    description: s?.summary,
  };
}
export default async function Study({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = studies.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <>
      <main id="main" className="case-page">
        <Link className="back-link" href={`/?node=${s.model}#model`}>
          ← Back to model
        </Link>
        <header className="case-heading">
          <p>{s.category}</p>
          <h1>{s.statement}</h1>
          <p>{s.summary}</p>
        </header>
        <div className="case-architecture">
          <Diagram kind={s.slug} />
          <div>
            <h2>The architecture</h2>
            <ol>
              {s.stages.map((stage) => (
                <li key={stage}>{stage}</li>
              ))}
            </ol>
            <p>Conceptual recreation · No proprietary systems or data</p>
          </div>
        </div>
        <div className="case-story">
          <div>
            <h2>The problem</h2>
            <p>{s.problem}</p>
          </div>
          <div>
            <h2>My approach</h2>
            <ul>
              {s.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
        {slug === "delivery-intelligence" ? (
          <Schema />
        ) : (
          <CaseExhibit kind={slug} />
        )}
        <div className="case-story">
          <div>
            <h2>A deliberate trade-off</h2>
            <p>{s.tradeoff}</p>
          </div>
          <div>
            <h2>The outcome</h2>
            <p>{s.outcome}</p>
          </div>
        </div>
        <div className="case-stack">
          <h2>Tools in the source narrative</h2>
          <div className="tools">
            {s.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="case-next">
          <Link href={`/?node=${s.model}#model`}>
            ← Return to the living model
          </Link>
          <Link href={`/work/${studies[(studies.indexOf(s) + 1) % 3].slug}`}>
            Next case study →
          </Link>
        </div>
      </main>
      <Contact />
    </>
  );
}

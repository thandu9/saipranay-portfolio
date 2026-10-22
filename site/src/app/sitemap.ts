export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { studies } from "@/data/work";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    { url: base },
    ...studies.map((s) => ({ url: `${base}/work/${s.slug}` })),
  ];
}

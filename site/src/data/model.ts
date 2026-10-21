export type Family = {
  id: string;
  title: string;
  short: string;
  outcome: string;
  architecture: string;
  tools: string[];
  href: string;
  link: string;
  x: number;
  y: number;
};
export const families: Family[] = [
  {
    id: "engineering",
    title: "Data Engineering",
    short: "Make fragmented sources work together.",
    outcome: "Reliable foundations, before the first dashboard.",
    architecture:
      "Ingest heterogeneous spatial and operational sources. Align them, validate them, and publish reusable data.",
    tools: ["Python", "SQL", "ArcPy", "ETL / ELT"],
    href: "/work/geospatial-pipelines",
    link: "Explore geospatial pipelines",
    x: 20,
    y: 19,
  },
  {
    id: "modeling",
    title: "Data Modeling",
    short: "Give every metric a shared meaning.",
    outcome: "One grain. Clear relationships. Defensible measures.",
    architecture:
      "Separate descriptive dimensions from measurable facts. Let dimensions filter the fact table in one direction.",
    tools: ["Star schemas", "DAX", "Semantic modeling"],
    href: "/work/delivery-intelligence",
    link: "Explore delivery intelligence",
    x: 78,
    y: 19,
  },
  {
    id: "intelligence",
    title: "Business Intelligence",
    short: "Turn trusted data into useful signals.",
    outcome: "A clearer view of delivery, variance, and risk.",
    architecture:
      "Combine schedules, funding and milestones into a governed reporting layer with reusable measures.",
    tools: ["Power BI", "DAX", "Power Query"],
    href: "/work/delivery-intelligence",
    link: "Inspect the decision model",
    x: 15,
    y: 50,
  },
  {
    id: "decisions",
    title: "Decision Systems",
    short: "Connect the measure to the next action.",
    outcome: "Make coverage gaps and delivery questions visible.",
    architecture:
      "Put operational context beside a metric. Surface exceptions that people can investigate, rather than hiding uncertainty.",
    tools: ["Performance measurement", "Stakeholder context", "Quality"],
    href: "/work/qualification-analytics",
    link: "Explore qualification analytics",
    x: 83,
    y: 50,
  },
  {
    id: "work",
    title: "Selected Work",
    short: "Three systems. Three different decisions.",
    outcome: "Architecture explained through evidence.",
    architecture:
      "Explore spatial pipelines, project delivery intelligence, and qualification reconciliation. Diagrams are original synthetic recreations.",
    tools: ["Geospatial", "Delivery", "Workforce"],
    href: "#work",
    link: "See the three case studies",
    x: 20,
    y: 81,
  },
  {
    id: "experience",
    title: "Experience & Credentials",
    short: "The foundations behind the practice.",
    outcome: "Working across data and analytics since 2017.",
    architecture:
      "A path through geospatial analysis, business intelligence, enterprise AI exploration, and transportation decision support.",
    tools: ["Business Analytics", "Business Statistics", "DP-600"],
    href: "#about",
    link: "View career and credentials",
    x: 78,
    y: 81,
  },
];
export const edges = families.map((f) => ({ from: "saipranay", to: f.id }));
export const journey = [
  {
    title: "Source",
    node: "engineering",
    body: "Spatial layers, schedules and qualification records arrive with different structures. Preserve their origin before changing their shape.",
  },
  {
    title: "Validation",
    node: "engineering",
    body: "Check keys, completeness and spatial alignment. Quarantine exceptions so a failed record never quietly becomes trusted data.",
  },
  {
    title: "Transformation",
    node: "engineering",
    body: "Standardize types, reconcile identities and make transformations repeatable. Keep lineage back to the source.",
  },
  {
    title: "Modeling",
    node: "modeling",
    body: "Declare the grain. Join unique dimension keys to facts with one-way filtering. Shared definitions prevent competing answers.",
  },
  {
    title: "Metrics",
    node: "intelligence",
    body: "Calculate counts, durations and risk against the same filter context. A measure is only useful when its meaning is explicit.",
  },
  {
    title: "Decisions",
    node: "decisions",
    body: "Pair the signal with context: which projects need investigation, where coverage is missing, and what should happen next.",
  },
];

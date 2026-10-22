export type Study = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  statement: string;
  problem: string;
  approach: string[];
  stages: string[];
  tradeoff: string;
  outcome: string;
  stack: string[];
  model: string;
};
export const studies: Study[] = [
  {
    slug: "geospatial-pipelines",
    number: "01",
    title: "Many layers.\nOne reliable foundation.",
    category: "Geospatial pipeline engineering",
    summary: "Connecting heterogeneous spatial data to statewide planning.",
    statement: "Spatial intelligence starts long before the map.",
    problem:
      "Heterogeneous spatial and operational sources need consistent alignment, quality checks, and repeatable publishing.",
    approach: [
      "Integrate data layers for the Pathways for Planning platform.",
      "Automate ETL, spatial alignment and quality controls.",
      "Support repeatable publishing for enterprise GIS and analytical use.",
    ],
    stages: [
      "Spatial sources",
      "Align & transform",
      "Validate",
      "Publish",
      "Planning",
    ],
    tradeoff:
      "In this conceptual recreation, invalid geometry is isolated before publication. This favors trustworthy downstream layers over the appearance of a fully successful refresh; exceptions remain visible for review.",
    outcome:
      "180+ integrated geospatial data layers supported by spatial ETL and automated processing pipelines. SQL/Python automation reduced recurring processing time by 60%. These user-supplied professional outcomes are not benchmark results from this demonstration; layer count is not pipeline count.",
    stack: [
      "Python",
      "JavaScript",
      "Oracle SQL",
      "ArcPy",
      "ArcGIS Enterprise",
      "AWS",
    ],
    model: "engineering",
  },
  {
    slug: "delivery-intelligence",
    number: "02",
    title: "From milestones\nto meaningful signals.",
    category: "Project delivery intelligence",
    summary: "Making delivery duration and risk easier to interrogate.",
    statement: "A useful metric begins with a question worth asking.",
    problem:
      "Schedules, funding and construction milestones need a shared analytical context to support delivery decisions across 9 districts.",
    approach: [
      "Integrate schedules, funding, financials and milestones.",
      "Use semantic definitions to connect project and district context.",
      "Support questions about PE-to-CN duration, variance and delivery risk.",
    ],
    stages: [
      "Schedules & funding",
      "Clean & join",
      "Project facts",
      "DAX measures",
      "Investigate risk",
    ],
    tradeoff:
      "The illustrative model uses one project per defined snapshot, making counts and average duration unambiguous. A historical model would need a snapshot date and a different grain to avoid double-counting projects. A date dimension would be added for calendar analysis.",
    outcome:
      "Portfolio analysis supports 4,000+ projects across 9 districts, including funding and financial variance analysis. The exhibit below shows the reasoning on six synthetic projects; it does not reproduce an organizational model or real project counts.",
    stack: ["SQL", "Python", "SharePoint", "Power BI", "DAX"],
    model: "modeling",
  },
  {
    slug: "qualification-analytics",
    number: "03",
    title: "Find the exceptions.\nUnderstand the coverage.",
    category: "Qualification & workforce analytics",
    summary:
      "Turning recurring qualification records into operational context.",
    statement: "Trust the match. Investigate what does not fit.",
    problem:
      "Recurring certification inputs and inconsistent identities obscure qualification coverage and create reconciliation work.",
    approach: [
      "Reconcile certification inputs with Python and pandas.",
      "Identify matching exceptions for review.",
      "Connect qualification and project-manager context to coverage, workload and locality measures.",
    ],
    stages: [
      "Qualification inputs",
      "Normalize",
      "Reconcile",
      "Review exceptions",
      "Coverage",
    ],
    tradeoff:
      "This conceptual workflow prefers deterministic identity matching and a visible review queue over permissive fuzzy matching. It avoids silently assigning qualifications to the wrong person, at the cost of more explicit human review.",
    outcome:
      "A repeatable reconciliation approach supports clearer workforce coverage and exception handling. No quantified savings or financial ROI is claimed.",
    stack: ["Python", "pandas", "SharePoint", "Power BI", "DAX"],
    model: "decisions",
  },
];

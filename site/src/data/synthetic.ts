export const districts = [
  { key: "D1", name: "North (example)" },
  { key: "D2", name: "South (example)" },
];
export const programs = [
  { key: "G1", name: "Renewal" },
  { key: "G2", name: "Mobility" },
];
export const projects = [
  { key: "P01", type: "Bridge", tier: "Regional", phase: "Construction" },
  { key: "P02", type: "Road", tier: "Local", phase: "Construction" },
  { key: "P03", type: "Safety", tier: "Local", phase: "Construction" },
  { key: "P04", type: "Bridge", tier: "Regional", phase: "Construction" },
  { key: "P05", type: "Road", tier: "Regional", phase: "Construction" },
  { key: "P06", type: "Safety", tier: "Local", phase: "Construction" },
];
// One project per snapshot, 2026-01-01. Anniversary dates yield whole years.
export const facts = [
  {
    project: "P01",
    district: "D1",
    program: "G1",
    start: "2020-01-01",
    construction: "2025-01-01",
    duration: 5,
    expected: 4,
    risk: true,
  },
  {
    project: "P02",
    district: "D1",
    program: "G2",
    start: "2022-01-01",
    construction: "2025-01-01",
    duration: 3,
    expected: 4,
    risk: false,
  },
  {
    project: "P03",
    district: "D1",
    program: "G1",
    start: "2023-01-01",
    construction: "2025-01-01",
    duration: 2,
    expected: 3,
    risk: false,
  },
  {
    project: "P04",
    district: "D2",
    program: "G1",
    start: "2019-01-01",
    construction: "2025-01-01",
    duration: 6,
    expected: 4,
    risk: true,
  },
  {
    project: "P05",
    district: "D2",
    program: "G2",
    start: "2021-01-01",
    construction: "2025-01-01",
    duration: 4,
    expected: 3,
    risk: true,
  },
  {
    project: "P06",
    district: "D2",
    program: "G2",
    start: "2023-01-01",
    construction: "2025-01-01",
    duration: 2,
    expected: 3,
    risk: false,
  },
];
export type Filters = { project: string; district: string; program: string };
export const emptyFilters: Filters = {
  project: "all",
  district: "all",
  program: "all",
};
export function filterFacts(filters: Filters) {
  return facts.filter((row) =>
    (Object.keys(filters) as (keyof Filters)[]).every(
      (key) => filters[key] === "all" || row[key] === filters[key],
    ),
  );
}
export function measures(rows: typeof facts) {
  return {
    count: rows.length,
    average: rows.length
      ? rows.reduce((s, r) => s + r.duration, 0) / rows.length
      : null,
    risk: rows.filter((r) => r.risk).length,
  };
}
export const dax = `Project Count = COUNTROWS(Fact_ProjectDelivery)\n\nAverage Development Duration =\n    AVERAGE(Fact_ProjectDelivery[DurationYears])\n\nAt-Risk Project Count =\n    COALESCE(CALCULATE([Project Count],\n        Fact_ProjectDelivery[RiskFlag] = TRUE()), 0)`;

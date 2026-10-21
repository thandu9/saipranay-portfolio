"use client";
import { useState } from "react";
import {
  districts,
  programs,
  projects,
  facts,
  emptyFilters,
  filterFacts,
  measures,
  dax,
  type Filters,
} from "@/data/synthetic";
export function Schema() {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [copied, setCopied] = useState("");
  const rows = filterFacts(filters);
  const metric = measures(rows);
  async function copy() {
    try {
      await navigator.clipboard.writeText(dax);
      setCopied("Copied");
    } catch {
      setCopied("Select the code to copy manually");
    }
  }
  return (
    <div className="schema">
      <div className="exhibit-head">
        <div>
          <h3>A model you can question.</h3>
          <p>Illustrative synthetic data · Snapshot: 1 January 2026</p>
        </div>
        <button
          className="small-button"
          onClick={() => setFilters(emptyFilters)}
        >
          Reset filters
        </button>
      </div>
      <p className="schema-intro">
        Grain: one record per illustrative project at a defined snapshot. Select
        a dimension value to filter the facts. Relationships flow from unique
        dimension keys <strong>(1)</strong> to fact rows <strong>(*)</strong>.
      </p>
      <div className="dimensions">
        {[
          {
            key: "project" as const,
            title: "Dim_Project",
            fields: "ProjectKey · ProjectType · Tier · DeliveryPhase",
            options: projects.map((p) => ({
              key: p.key,
              name: `${p.key} · ${p.type}`,
            })),
          },
          {
            key: "district" as const,
            title: "Dim_District",
            fields: "DistrictKey · DistrictName",
            options: districts,
          },
          {
            key: "program" as const,
            title: "Dim_Program",
            fields: "ProgramKey · ProgramName",
            options: programs,
          },
        ].map((d) => (
          <label className="dimension" key={d.key}>
            <strong>{d.title}</strong>
            <small>{d.fields}</small>
            <select
              aria-label={`Filter ${d.title}`}
              value={filters[d.key]}
              onChange={(e) =>
                setFilters({ ...filters, [d.key]: e.target.value })
              }
            >
              <option value="all">All {d.key}s</option>
              {d.options.map((o) => (
                <option key={o.key} value={o.key}>
                  {o.name}
                </option>
              ))}
            </select>
            <span className="relationship">
              1 <span>↓ single direction</span> *
            </span>
          </label>
        ))}
      </div>
      <div className="fact-head">
        <strong>Fact_ProjectDelivery</strong>
        <span>
          {rows.length} of {facts.length} rows in filter context
        </span>
      </div>
      <div className="table-scroll">
        <table>
          <caption className="sr-only">
            Synthetic project delivery facts, filtered by the selected
            dimensions
          </caption>
          <thead>
            <tr>
              {[
                "ProjectKey",
                "DistrictKey",
                "ProgramKey",
                "StartDate",
                "ConstructionStartDate",
                "DurationYears",
                "ExpectedYears",
                "RiskFlag",
              ].map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.project}>
                <td>{r.project}</td>
                <td>{r.district}</td>
                <td>{r.program}</td>
                <td>{r.start}</td>
                <td>{r.construction}</td>
                <td>{r.duration}</td>
                <td>{r.expected}</td>
                <td>
                  <span className={r.risk ? "risk" : "clear"}>
                    {r.risk ? "At risk" : "Within plan"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!rows.length && (
          <p className="empty">
            No projects match these dimensions. Reset filters or choose another
            value.
          </p>
        )}
      </div>
      <div className="measures" aria-live="polite">
        <div>
          <strong data-testid="project-count">{metric.count}</strong>
          <span>Project count</span>
        </div>
        <div>
          <strong>
            {metric.average === null ? "—" : metric.average.toFixed(2)}
            <small> years</small>
          </strong>
          <span>Average development duration</span>
        </div>
        <div>
          <strong>{metric.risk}</strong>
          <span>At-risk project count</span>
        </div>
      </div>
      <p className="schema-note">
        Example risk rule: duration exceeds expected years. These invented
        thresholds are for demonstration, not operational guidance.
      </p>
      <details className="dax">
        <summary>Inspect conceptual DAX measures</summary>
        <button className="small-button" onClick={copy}>
          {copied || "Copy DAX"}
        </button>
        <pre>
          <code>{dax}</code>
        </pre>
      </details>
    </div>
  );
}

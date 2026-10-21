"use client";
import { useState } from "react";
const layers = [
  { name: "Road centerlines", check: "Geometry aligned", state: "Ready" },
  {
    name: "Planning boundaries",
    check: "Required keys complete",
    state: "Ready",
  },
  {
    name: "Asset points",
    check: "2 invalid geometries isolated",
    state: "Review",
  },
];
const records = [
  {
    id: "S-001",
    issue: "Exact match",
    result: "Include in coverage",
    detail:
      "Unique identifier and qualification match. This record can enter the validated coverage model.",
  },
  {
    id: "S-002",
    issue: "Duplicate",
    result: "Hold duplicate",
    detail:
      "Two records share a source identifier. Retain one only after the source owner confirms the authoritative record.",
  },
  {
    id: "S-003",
    issue: "Changed organization",
    result: "Review affiliation",
    detail:
      "The identifier matches but the organization differs. Preserve the history and ask for confirmation.",
  },
  {
    id: "S-004",
    issue: "Missing match",
    result: "Resolve identity",
    detail:
      "No authoritative identity exists for this record. Do not infer a match from a similar name.",
  },
  {
    id: "S-005",
    issue: "Expiring certification",
    result: "Review renewal",
    detail:
      "The example expiry is within the demonstration review window. Flag it for renewal review; do not silently remove it.",
  },
];
export function CaseExhibit({ kind }: { kind: string }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="case-exhibit">
      <div className="exhibit-head">
        <h3>
          {kind === "geospatial-pipelines"
            ? "Quality before publication."
            : "Every exception has a next step."}
        </h3>
        <span>Illustrative synthetic data</span>
      </div>
      {kind === "geospatial-pipelines" ? (
        <>
          <div className="stage-tabs" aria-label="Pipeline stage">
            {["Ingest", "Validate", "Publish"].map((s, i) => (
              <button
                aria-pressed={selected === i}
                key={s}
                onClick={() => setSelected(i)}
              >
                {i + 1}. {s}
              </button>
            ))}
          </div>
          <div aria-live="polite">
            <p>
              {
                [
                  "Three invented source layers enter a repeatable pipeline.",
                  "Each layer passes a geometry and completeness gate. Exceptions stay visible.",
                  "Only validated layers are eligible to publish. The review layer is held back.",
                ][selected]
              }
            </p>
            <div className="layer-rows">
              {layers.map((l) => (
                <div key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{selected === 0 ? "Received" : l.check}</span>
                  <span
                    className={
                      selected > 0 && l.state === "Review" ? "risk" : "clear"
                    }
                  >
                    {selected === 0
                      ? "Pending checks"
                      : selected === 2
                        ? l.state === "Ready"
                          ? "Published"
                          : "Held for review"
                        : l.state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="exception-tabs" aria-label="Reconciliation examples">
            {records.map((r, i) => (
              <button
                key={r.id}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
              >
                <span>{r.id}</span>
                {r.issue}
              </button>
            ))}
          </div>
          <div className="exception-result" aria-live="polite">
            <h4>{records[selected].result}</h4>
            <p>{records[selected].detail}</p>
          </div>
        </>
      )}
    </div>
  );
}

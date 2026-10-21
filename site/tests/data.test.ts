import { test } from "node:test";
import assert from "node:assert/strict";
import {
  facts,
  projects,
  districts,
  programs,
  filterFacts,
  measures,
  emptyFilters,
} from "../src/data/synthetic";
import { families, edges, journey } from "../src/data/model";
test("every graph relationship reaches a unique family", () => {
  assert.equal(new Set(families.map((f) => f.id)).size, 6);
  assert.equal(edges.length, 6);
  for (const edge of edges) assert.ok(families.some((f) => f.id === edge.to));
  for (const step of journey)
    assert.ok(families.some((f) => f.id === step.node));
});
test("dimension keys are unique and all fact foreign keys resolve", () => {
  for (const dimension of [projects, districts, programs])
    assert.equal(new Set(dimension.map((d) => d.key)).size, dimension.length);
  assert.equal(new Set(facts.map((f) => f.project)).size, facts.length);
  for (const fact of facts) {
    assert.ok(projects.some((d) => d.key === fact.project));
    assert.ok(districts.some((d) => d.key === fact.district));
    assert.ok(programs.some((d) => d.key === fact.program));
    assert.equal(
      fact.duration,
      Number(fact.construction.slice(0, 4)) - Number(fact.start.slice(0, 4)),
    );
    assert.equal(fact.risk, fact.duration > fact.expected);
  }
});
test("measures respect intersecting filters and empty context", () => {
  assert.deepEqual(measures(facts), { count: 6, average: 22 / 6, risk: 3 });
  assert.deepEqual(measures(filterFacts({ ...emptyFilters, district: "D1" })), {
    count: 3,
    average: 10 / 3,
    risk: 1,
  });
  assert.deepEqual(
    measures(filterFacts({ ...emptyFilters, district: "D1", program: "G2" })),
    { count: 1, average: 3, risk: 0 },
  );
  assert.deepEqual(
    measures(filterFacts({ ...emptyFilters, project: "P01", district: "D2" })),
    { count: 0, average: null, risk: 0 },
  );
});

export function Impact() {
  return (
    <section className="impact-v5 section">
      <p className="eyebrow">ENGINEERING WITH CONSEQUENCE</p>
      <h2>Measured in outcomes.</h2>
      <div className="impact-grid">
        {[
          [
            "180+",
            "Integrated geospatial data layers",
            "Spatial ETL and automated data processing pipelines.",
          ],
          [
            "4,000+",
            "Projects supported",
            "Portfolio analysis across 9 districts at VDOT.",
          ],
          [
            "60%",
            "Less recurring processing time",
            "Through SQL/Python automation.",
          ],
        ].map(([n, t, p]) => (
          <div key={n}>
            <strong>{n}</strong>
            <h3>{t}</h3>
            <p>{p}</p>
          </div>
        ))}
      </div>
      <p className="impact-context">
        Financial and performance analysis within the context of VDOT’s{" "}
        <strong>$28.5B FY2027–2032 transportation program</strong>. Program
        scale is context, not personal budget ownership. Outcomes supplied by
        Saipranay.
      </p>
    </section>
  );
}

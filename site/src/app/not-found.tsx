import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section">
      <h1>
        This connection
        <br />
        doesn’t exist.
      </h1>
      <p style={{ marginTop: 25 }}>
        The page may have moved. Start again from the living model.
      </p>
      <Link className="button primary" style={{ marginTop: 30 }} href="/#model">
        Return to the model →
      </Link>
    </main>
  );
}

import Layout from "../components/layout/Layout";

export default function Resources() {
  return (
    <Layout>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 1rem" }}>

        {/* Page Header */}
        <header style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: "500", color: "#1a1a1a" }}>
            Resources
          </h1>
          <p style={{ color: "#555", marginTop: "1rem", fontSize: "1.1rem" }}>
            Insights, frameworks, and practical guidance for responsible and ethical AI development.
          </p>
        </header>

        {/* Intro */}
        <section style={{ marginBottom: "3rem" }}>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            This space will grow into a library of articles, tools, and frameworks designed to help
            teams navigate ethical considerations, governance expectations, and real‑world product
            constraints. For now, here’s a preview of what’s coming.
          </p>
        </section>

        {/* Placeholder List */}
        <section>
          <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "700px" }}>
            <ul style={{ color: "#555", lineHeight: "1.6", paddingLeft: "1.25rem" }}>
              <li>EthicShift: A practical method for principled AI decision‑making</li>
              <li>Foundational governance patterns for high‑impact systems</li>
              <li>How to run ethical risk reviews with cross‑functional teams</li>
              <li>Signals of organizational maturity in responsible AI</li>
              <li>Templates for documenting ethical considerations and tradeoffs</li>
          </ul>
          </div>
        </section>

      </div>
    </Layout>
  );
}

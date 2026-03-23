import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";

export default function About() {
  return (
    <Layout>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 1rem"}}>

        {/* Page Header */}
        <header style={{ textAlign: "center", marginBottom: "4rem"}}>
          <h1 style ={{ fontSize: "2.5rem", fontWeight: "500", color: "#1a1a1a"}}>
            About BoundaryWorks
          </h1>
          <p style={{ color: "#555", marginTop:"1rem", fontSize: "1.1rem"}}>
            A governance-first studio for teams building AI systems that must be trusted.
          </p>
        </header>
        
        {/* Philosophy*/}
        <section style={{ marginBottom: "4rem"}}>
        <h2 style={{ fontSize:"1.5rem", marginBottom: "1rem", color: "#1a1a1a"}}>
          Our Philosophy
        </h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
            BoundaryWorks was founded on a simple belief: organizations building high‑impact AI
            systems deserve calm, principled guidance. We help teams navigate complexity with
            clarity, structure, and a deep understanding of both governance and product realities.
          </p>
        </section>

        {/* Founder */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#1a1a1a" }}>
            About the Founder
          </h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Helen is a product‑driven governance leader with experience across enterprise software,
            AI systems, and cross‑functional alignment. She blends product fluency, sales
            enablement, and responsible AI expertise to help organizations build systems that
            are resilient, compliant, and trusted.
          </p>
        </section>

                {/* Approach */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#1a1a1a" }}>
            How We Work
          </h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Our approach is structured, collaborative, and grounded in real‑world constraints.
            We partner with teams to build maturity, reduce risk, and create durable governance
            foundations that scale with the organization.
          </p>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "3rem 0" }}>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "0.85rem 1.5rem",
              backgroundColor: "#bfa76f",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Work With Us
          </a>
        </section>

      </div>

    </Layout>
  );
}

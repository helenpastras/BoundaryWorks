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
            A governance and ethics studio for teams building AI systems that must be trusted.
          </p>
        </header>
        
        {/* Philosophy*/}
        <section style={{ marginBottom: "4rem"}}>
        <h2 style={{ fontSize:"1.5rem", marginBottom: "1rem", color: "#1a1a1a"}}>
          Our Philosophy
        </h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
            BoundaryWorks exists to help organizations build AI systems that respect people, protect agency, and operate with integrity.  
            Our work blends ethical reasoning, governance structure, and practical product realities so teams can make decisions that are responsible, transparent, and durable.
            We believe ethics isn’t an abstract ideal — it’s a daily practice embedded in design choices, data decisions, and leadership intent.
          </p>
        </section>

        {/* Founder */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#1a1a1a" }}>
            About the Founder
          </h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Helen is a product‑driven ethics and governance leader with experience across enterprise software, AI systems, and cross‑functional alignment. She brings a grounded, human‑centered approach to evaluating risk, shaping responsible product strategy, and guiding organizations through complex decision landscapes.
            Her work sits at the intersection of ethical impact, organizational maturity, and real‑world constraints — helping teams build systems that are not only compliant, but genuinely trustworthy.
          </p>
        </section>

      {/* Approach */}
      <section style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#1a1a1a" }}>
          How We Work
        </h2>

        {/* Inner content block */}
        <div style={{ 
          textAlign: "left", 
          maxWidth: "700px", 
          margin: "0 auto" 
        }}>
          <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "1rem" }}>
            Our approach is calm, structured, and collaborative. We help teams:
          </p>

          <ul style={{ color: "#555", lineHeight: "1.6", paddingLeft: "1.25rem", marginBottom: "1rem" }}>
            <li>clarify ethical and governance expectations</li>
            <li>translate principles into day‑to‑day product decisions</li>
            <li>build cross‑functional alignment</li>
            <li>strengthen safeguards around high‑impact systems</li>
          </ul>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            We meet organizations where they are and help them grow with intention.
          </p>
        </div>
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

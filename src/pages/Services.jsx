import Layout from "../components/layout/Layout";

export default function Services() {
  return (
    <Layout>
      <div style={{ 
  maxWidth: "900px", 
  margin: "0 auto", 
  padding: "4rem 1rem",
  textAlign: "left"
}}>

        
        {/* Page Header */}
      <header className="text-center" style={{ marginBottom: "var(--space-xxl)" }}>
        <h1 className="page-title">Services</h1>
        <p className="service-body" style={{ fontSize: "1.1rem" }}>
          Structured, principled support for teams building AI systems that must be trusted.
        </p>
      </header>



        {/* EthicShift — Signature Method */}
      <section className="section">
        <div className="container card text-left">
          <h2 className="service-title">EthicShift™</h2>

          <p className="service-body">
            EthicShift is a structured method that helps teams grow into resilient, scalable AI
            practices that are responsible by design. It blends governance, product thinking,
            and cultural alignment to support long‑term maturity.
          </p>

          <h3 className="service-subtitle">What EthicShift solves</h3>
          <p className="service-body">
            Many organizations struggle to translate ethical principles and regulatory expectations
            into day‑to‑day product decisions. EthicShift provides the clarity, structure, and
            shared language needed to align teams and reduce risk.
          </p>

          <h3 className="service-subtitle">How it works</h3>
          <ul className="service-list">
            <li>Assessment of current AI practices and governance maturity</li>
            <li>Structured frameworks tailored to organizational context</li>
            <li>Cross‑functional alignment across product, legal, and leadership</li>
            <li>Practical guidance for responsible, scalable implementation</li>
          </ul>

          <h3 className="service-subtitle">Outcomes</h3>
          <ul className="service-list">
            <li>Clear governance foundations for high‑impact AI systems</li>
            <li>Improved cross‑team alignment and decision‑making</li>
            <li>Reduced risk and increased regulatory readiness</li>
            <li>Long‑term resilience and responsible growth</li>
          </ul>
        </div>
      </section>


        {/* Supporting Services */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              marginBottom: "2rem",
              color: "#1a1a1a",
              textAlign: "center",
            }}
          >
            Additional Services
          </h2>

          <div 
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            <ServiceCard
              title="Governance Frameworks"
              description="Principled structures for teams building AI systems that must be trusted."
            />

            <ServiceCard
              title="Compliance Readiness"
              description="Practical alignment with emerging AI regulations and organizational risk expectations."
            />

            <ServiceCard
              title="Risk Assessments & Model Reviews"
              description="Structured evaluations of high‑impact systems to identify risks and strengthen safeguards."
            />

            <ServiceCard
              title="Executive Advisory"
              description="Calm, strategic support for leaders navigating complex AI decisions and organizational alignment."
            />
          </div>
        </section>

        {/* How We Work + CTA */}
        <section style={{ textAlign: "center", padding: "3rem 0" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#1a1a1a" }}>
            How We Work
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 2rem",
              color: "#555",
              lineHeight: "1.6",
            }}
          >
            BoundaryWorks blends governance expertise with product fluency and cross‑functional 
            alignment. Our approach is calm, structured, and tailored to the realities of 
            high‑impact AI development.
          </p>

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

/* Supporting Card Component */
function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-body">{description}</p>
    </div>
  );
}


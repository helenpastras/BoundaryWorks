export default function ServicesPreview() {
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#fafafa" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "500",
            marginBottom: "3rem",
            color: "#1a1a1a",
          }}
        >
          Services
        </h2>

        <div style={{ display: "grid", gap: "2rem" }}>
          {/* EthicShift — Signature Method */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "8px",
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "#1a1a1a",
              }}
            >
              EthicShift™
            </h3>
            <p style={{ color: "#555", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              A structured method that helps teams grow into resilient, scalable AI
              practices that are responsible by design. EthicShift blends governance,
              product thinking, and cultural alignment to support long‑term maturity.
            </p>
            <a
              href="/services"
              style={{
                color: "#bfa76f",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Learn more →
            </a>
          </div>

          {/* Supporting Services */}
          <div
            style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "8px",
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
              }}
            >
              <h4 style={{ marginBottom: "0.75rem", color: "#1a1a1a" }}>
                Governance Frameworks
              </h4>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Clear, principled structures for teams building AI systems that must
                be trusted.
              </p>
            </div>

            <div
              style={{
                padding: "1.5rem",
                borderRadius: "8px",
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
              }}
            >
              <h4 style={{ marginBottom: "0.75rem", color: "#1a1a1a" }}>
                Compliance Readiness
              </h4>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Practical guidance to align with emerging AI regulations and
                organizational risk expectations.
              </p>
            </div>

            <div
              style={{
                padding: "1.5rem",
                borderRadius: "8px",
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
              }}
            >
              <h4 style={{ marginBottom: "0.75rem", color: "#1a1a1a" }}>
                Executive Advisory
              </h4>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Calm, strategic support for leaders navigating complex AI decisions
                and organizational alignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

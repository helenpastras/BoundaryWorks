export default function Hero() {
  return (
    <section style={{ padding: "6rem 0", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1rem" }}>
            <h1 style={{ 
                fontSize: "2.5rem", 
                 marginBottom: "1.5rem", 
                 fontWeight: "500",
                 color: "#1a1a1a",
                 lineHeight: "1.2"
            }}>
                Clarity and confidence for AI systems that must be trusted.
            </h1>
            <p style={{
                fontSize: "1.25rem",
                color: "#444",
                lineHeight: "1.6",
                marginBottom: "2.5rem"
                }}>
                BoundaryWorks brings structure and clarity; EthicShift helps teams grow into resilient, scalable AI practices that are responsible by design.
                </p>
                <a 
                    href="/services"
                    style={{
                        display: "inline-block",
                        padding: "0.85rem 1.5rem",
                        backgroundColor: "#bfa76f",
                        color: "#fff",
                        borderRadius: "4px",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontWeight: "500"
                    }}
                >
                Explore Services
                </a>
      </div>
    </section>
  );
}

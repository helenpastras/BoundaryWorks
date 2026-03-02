import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "1.25rem 2rem",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "1.25rem",
          fontWeight: "500",
          color: "#1a1a1a",
          textDecoration: "none",
          letterSpacing: "0.5px"
        }}
      >
        BoundaryWorks
      </Link>

      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/" style={navStyle}>Home</Link>
        <Link to="/services" style={navStyle}>Services</Link>
        <Link to="/about" style={navStyle}>About</Link>
        <Link to="/resources" style={navStyle}>Resources</Link>
        <Link to="/contact" style={navStyle}>Contact</Link>
      </nav>
    </header>
  );
}

const navStyle = {
  color: "#444",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "400"
};

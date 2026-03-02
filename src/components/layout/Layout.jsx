import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "2rem" }}>
        {children}
      </main>
    </>
  );
}

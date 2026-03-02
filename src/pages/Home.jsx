import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import TrustMarkers from "../components/home/TrustMarkers";
import ServicesPreview from "../components/home/ServicesPreview";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustMarkers />
      <ServicesPreview />
    
    </Layout>
  );
}
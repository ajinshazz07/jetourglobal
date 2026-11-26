import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModelShowcase from "@/components/ModelShowcase";
import JetourWorld from "@/components/JetourWorld";
import Technology from "@/components/Technology";
import MediaCenter from "@/components/MediaCenter";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { VehicleProvider } from "@/components/VehicleContext";

export default function Home() {
  return (
    <VehicleProvider>
      <Header />
      <main id="main">
        <Hero />
        <ModelShowcase />
        <JetourWorld />
        <Technology />
        <MediaCenter />
        <ContactSection />
        <Gallery />
      </main>
      <Footer />
    </VehicleProvider>
  );
}

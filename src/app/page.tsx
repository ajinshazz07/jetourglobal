import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Models />
        <Features />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}

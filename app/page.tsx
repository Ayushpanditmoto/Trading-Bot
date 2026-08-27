import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProductIntro from "@/components/ProductIntro";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AITechnology from "@/components/AITechnology";
import Showcase from "@/components/Showcase";
import AccessCTA from "@/components/AccessCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProductIntro />
        <Features />
        <HowItWorks />
        <AITechnology />
        <Showcase />
        <AccessCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

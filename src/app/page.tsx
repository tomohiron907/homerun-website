import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Actions from "@/components/Actions";
import MacNative from "@/components/MacNative";
import Config from "@/components/Config";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Demo />
        <Features />
        <Actions />
        <MacNative />
        <Config />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

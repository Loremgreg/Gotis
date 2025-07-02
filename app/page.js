import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import FeaturesAccordion from "@/components/FeaturesAccordion";

import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        
        <FeaturesAccordion />
        
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
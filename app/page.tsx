"use client";

import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Lo que dicen nuestros clientes
        </motion.h2>
        
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
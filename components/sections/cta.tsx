"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tu próximo evento?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contáctanos hoy y descubre cómo podemos hacer de tu evento una experiencia inolvidable.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="group"
          >
            Agenda una consulta
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Trophy } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Tecnología Confiable",
    description: "Infraestructura robusta y probada para eventos de cualquier escala."
  },
  {
    icon: Zap,
    title: "Rápida Implementación",
    description: "Soluciones ágiles que se adaptan a tus tiempos y necesidades."
  },
  {
    icon: Trophy,
    title: "Resultados Medibles",
    description: "Métricas claras y reportes detallados de cada activación."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-card">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
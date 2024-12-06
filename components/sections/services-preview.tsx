"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, BarChart3, Sparkles } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Experiencias Inmersivas",
    description: "Creamos instalaciones audiovisuales que transforman espacios y cautivan a los asistentes.",
  },
  {
    icon: Users,
    title: "Juegos Interactivos",
    description: "Desarrollamos juegos personalizados que fomentan la participación y el engagement.",
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    description: "Capturamos y analizamos datos valiosos para maximizar el ROI de tu evento.",
  },
];

export function ServicesPreview() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.getElementsByClassName('glow-card');
    if (!cards) return;

    const handleMouseMove = (e: MouseEvent) => {
      for (const card of Array.from(cards)) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Nuestros Servicios
        </motion.h2>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glow-card group"
            >
              <div className="content">
                <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
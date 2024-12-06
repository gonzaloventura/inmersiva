"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Lightbulb, Target } from "lucide-react";

const stats = [
  { number: "150+", label: "Eventos Realizados" },
  { number: "50K+", label: "Participantes" },
  { number: "98%", label: "Satisfacción" },
  { number: "25", label: "Premios" }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Buscamos constantemente nuevas formas de sorprender y cautivar."
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajamos en estrecha colaboración con nuestros clientes."
  },
  {
    icon: Target,
    title: "Excelencia",
    description: "Nos esforzamos por superar expectativas en cada proyecto."
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Garantizamos los más altos estándares en cada experiencia."
  }
];

export default function Nosotros() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos un equipo apasionado por crear experiencias únicas que conectan personas y marcas a través de la tecnología.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-4">
              Fundada en 2015, INMERSIVA nació con la visión de revolucionar la manera en que las personas experimentan los eventos. Desde entonces, hemos estado a la vanguardia de la innovación en experiencias interactivas.
            </p>
            <p className="text-muted-foreground">
              Nuestro equipo multidisciplinar combina creatividad, tecnología y estrategia para crear momentos únicos que perduran en la memoria de los participantes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gray-300 animate-pulse" />
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Equipo INMERSIVA"
              fill
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeInOut" }}
              >
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: "easeInOut" }}
              className="p-6 rounded-xl bg-card border hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

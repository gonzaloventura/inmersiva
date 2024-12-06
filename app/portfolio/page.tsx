"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Festival Luz Madrid",
    category: "Mapping 3D",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    description: "Proyección mapping sobre edificios históricos con interacción del público."
  },
  {
    title: "Lanzamiento Producto Tech",
    category: "Experiencia Inmersiva",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    description: "Experiencia VR multiplayer para 200 personas simultáneas."
  },
  {
    title: "Evento Corporativo Global",
    category: "Juego Interactivo",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    description: "Juego multiplataforma con participantes de 20 países."
  },
  {
    title: "Museo Interactivo",
    category: "Instalación Sensorial",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8",
    description: "Exposición interactiva con tecnología de seguimiento de movimiento."
  },
  {
    title: "Feria Internacional",
    category: "Social Wall",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    description: "Sistema de visualización en tiempo real de contenido social."
  },
  {
    title: "Concierto Híbrido",
    category: "Realidad Aumentada",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    description: "Experiencia AR para audiencia presencial y remota."
  }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo hemos transformado eventos en experiencias memorables a través de la tecnología y la creatividad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <Button variant="ghost" className="mt-4 group">
                  Ver proyecto
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Ver Más Proyectos
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
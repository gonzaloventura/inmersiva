"use client";

import { motion } from "framer-motion";
import { Gamepad2, Projector, Brain, Users, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Projector,
    title: "Instalaciones Audiovisuales",
    description: "Creamos experiencias visuales impactantes que transforman espacios y cautivan a los asistentes.",
    features: ["Mapping 3D", "Realidad Aumentada", "Instalaciones Interactivas"]
  },
  {
    icon: Gamepad2,
    title: "Juegos Personalizados",
    description: "Desarrollamos juegos únicos que fomentan la participación y el engagement en eventos.",
    features: ["Gamificación", "Multiplayer", "Personalización Marca"]
  },
  {
    icon: Brain,
    title: "Experiencias Inmersivas",
    description: "Diseñamos experiencias que combinan tecnología y creatividad para crear momentos memorables.",
    features: ["VR/AR", "Instalaciones Sensoriales", "Experiencias Híbridas"]
  },
  {
    icon: Users,
    title: "Engagement Social",
    description: "Potenciamos la interacción social y la viralización de contenido durante eventos.",
    features: ["Social Walls", "Foto/Video Booths", "Hashtag Tracking"]
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    description: "Capturamos y analizamos datos valiosos para maximizar el ROI de cada evento.",
    features: ["Métricas en Tiempo Real", "Informes Detallados", "Insights Actionables"]
  },
  {
    icon: Sparkles,
    title: "Innovación a Medida",
    description: "Desarrollamos soluciones tecnológicas personalizadas según las necesidades específicas.",
    features: ["Desarrollo Custom", "Integración APIs", "Soporte Técnico"]
  }
];

export default function Servicios() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combinamos tecnología y creatividad para crear experiencias únicas que transforman eventos ordinarios en momentos extraordinarios.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.03 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.4
              }}
              className="group p-6 rounded-xl bg-card hover:bg-card/80 transition-all duration-300 border hover:border-primary/50"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Solicitar Información
          </Button>
        </motion.div>
      </div>
    </main>
  );
}

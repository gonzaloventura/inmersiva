"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
      </div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Transformamos eventos en experiencias memorables
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Creamos experiencias audiovisuales inmersivas y juegos interactivos que cautivan a tu audiencia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 group transition-all duration-300"
          >
            Explora nuestro trabajo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm group"
          >
            Ver showreel
            <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
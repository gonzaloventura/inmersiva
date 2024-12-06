"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-black/60 backdrop-blur-xl border-t border-white/10">
      <div className="footer-gradient" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              INMERSIVA
            </h3>
            <p className="text-muted-foreground">
              Transformando eventos en experiencias memorables a través de tecnología innovadora.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/servicios" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  Servicios
                  <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/nosotros" 
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                >
                  Nosotros
                  <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors">
                <a href="mailto:contacto@inmersiva.com">contacto@inmersiva.com</a>
              </li>
              <li className="hover:text-primary transition-colors">
                <a href="tel:+34900123456">+34 900 123 456</a>
              </li>
              <li>Madrid, España</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Inmersiva. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
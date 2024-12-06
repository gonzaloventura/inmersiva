"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="group">
          <MessageSquare className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
          Contáctanos
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Contáctanos</SheetTitle>
        </SheetHeader>
        <AnimatePresence>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="space-y-6 mt-8"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
              setIsOpen(false);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Tu nombre" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" placeholder="Nombre de tu empresa" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Cuéntanos sobre tu proyecto..."
                className="min-h-[100px]"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Enviar mensaje
            </Button>
          </motion.form>
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
}
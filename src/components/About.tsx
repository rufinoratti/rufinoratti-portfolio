"use client";

import { Reveal } from "@/components/motion";

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
            Sobre mí
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[65ch] text-lg leading-relaxed text-muted">
            Soy Rufino, desarrollador frontend y estudiante de Gestión de Tecnología de la Información en la UADE. 
            Construyo sitios y aplicaciones web con foco en la experiencia del usuario: que se vean bien, carguen rápido y sean fáciles de usar.
            Trabajo de forma independiente con clientes de distintos rubros, acompañando proyectos desde el diseño hasta la implementación. 
            Uso principalmente React.js y Framer, y me interesa cada vez más el cruce entre diseño y tecnología.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

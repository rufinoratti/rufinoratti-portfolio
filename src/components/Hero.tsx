"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[90dvh] items-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-accent-muted/20 blur-[120px]" />
        <div className="absolute bottom-0 -left-20 h-[320px] w-[320px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <motion.p
            {...anim(0.1)}
            className="mb-4 text-2xl font-medium text-accent"
          >
            Hola, soy
          </motion.p>
          <motion.h1
            {...anim(0.2)}
            className="mb-4 text-5xl font-bold tracking-tighter md:text-7xl"
          >
            Rufino Ratti
          </motion.h1>
          <motion.p
            {...anim(0.35)}
            className="mb-8 text-lg text-muted md:text-xl"
          >
            Desarrollador Front-End | Fundador de PassNow | Estudiante de Licenciatura en Gestión de Tecnología de la Información en UADE
          </motion.p>
          <motion.div
            {...anim(0.5)}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#proyectos"
              className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-surface transition-all duration-200 ease-out-expo hover:opacity-90 active:scale-[0.97]"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-border px-7 py-3 text-sm font-medium text-ink transition-all duration-200 ease-out-expo hover:border-ink active:scale-[0.97]"
            >
              Contactarme
            </a>
          </motion.div>
        </div>

        <motion.div
          {...anim(0.6)}
          className="relative hidden md:col-span-5 md:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-subtle">
            <img
              src="/foto-hero.JPG"
              alt="Rufino Ratti"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

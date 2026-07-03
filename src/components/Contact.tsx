"use client";

import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";
import { Reveal } from "@/components/motion";

export default function Contact() {
  return (
    <section id="contacto" className="relative px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-muted/15 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Trabajemos juntos
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-muted">
            ¿Tenés un proyecto en mente? Estoy disponible para nuevas
            oportunidades.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href="mailto:rufinoratti@gmail.com"
              className="flex items-center gap-2.5 rounded-full bg-ink px-7 py-3 text-sm font-medium text-surface transition-all duration-200 ease-out-expo hover:opacity-90 active:scale-[0.97]"
            >
              <Envelope weight="bold" className="h-4 w-4" />
              Enviar email
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/rufinoratti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-border p-3 text-muted transition-all duration-200 ease-out-expo hover:border-ink hover:text-ink active:scale-[0.97]"
              >
                <GithubLogo weight="bold" className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/rufinoratti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border p-3 text-muted transition-all duration-200 ease-out-expo hover:border-ink hover:text-ink active:scale-[0.97]"
              >
                <LinkedinLogo weight="bold" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

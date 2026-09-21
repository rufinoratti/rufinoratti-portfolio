import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV | Rufino Ratti",
  description:
    "Currículum de Rufino Ratti, desarrollador full stack y estudiante de Gestión de Tecnología de la Información en UADE.",
  robots: {
    index: false,
    follow: true,
  },
};

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Supabase",
  "React Native",
];

export default function CurriculumPage() {
  return (
    <main id="contenido-principal" className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <header className="flex items-center justify-between border-b border-border pb-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          RR
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Volver al portfolio
        </Link>
      </header>

      <section className="border-b border-border py-12 sm:py-16">
        <p className="text-lg font-medium text-accent">Currículum</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tighter sm:text-6xl">
          Rufino Ratti
        </h1>
        <p className="mt-4 text-xl text-muted">Desarrollador Full Stack</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <a
            href="mailto:rufinoratti@gmail.com"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            rufinoratti@gmail.com
          </a>
          <a
            href="https://github.com/rufinoratti"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rufinoratti"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <div className="space-y-12 py-12 sm:py-16">
        <section aria-labelledby="perfil">
          <h2 id="perfil" className="text-xl font-semibold tracking-tight">
            Perfil
          </h2>
          <p className="mt-4 max-w-[65ch] leading-relaxed text-muted">
            Desarrollador full stack con experiencia en productos web para
            clientes y proyectos propios. Trabajo desde la definición de la
            interfaz hasta integraciones y lógica de negocio, con foco en
            claridad, rendimiento y usabilidad.
          </p>
        </section>

        <section aria-labelledby="experiencia">
          <h2 id="experiencia" className="text-xl font-semibold tracking-tight">
            Experiencia
          </h2>
          <div className="mt-5 border-t border-border">
            <article className="grid gap-2 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="font-mono text-sm text-muted">Jul 2023 — Actualidad</p>
              <div>
                <h3 className="font-medium text-ink">
                  Desarrollador Full Stack Freelance
                </h3>
                <p className="mt-1 text-sm text-muted">Remoto</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  <li>Desarrollo de sitios y aplicaciones con React, Next.js y Tailwind CSS.</li>
                  <li>Implementación de interfaces, integraciones y estructuras reutilizables.</li>
                  <li>Trabajo directo con clientes: alcance, ejecución y entrega de soluciones.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="formacion">
          <h2 id="formacion" className="text-xl font-semibold tracking-tight">
            Formación
          </h2>
          <div className="mt-5 border-t border-border">
            <article className="grid gap-2 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="font-mono text-sm text-muted">2023 — Actualidad</p>
              <div>
                <h3 className="font-medium text-ink">
                  Licenciatura en Gestión de Tecnología de la Información
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Universidad Argentina de la Empresa (UADE)
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  26 de 41 materias aprobadas · promedio 7,63.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section aria-labelledby="tecnologias">
          <h2 id="tecnologias" className="text-xl font-semibold tracking-tight">
            Tecnologías
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías principales">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-accent-muted/30 px-3 py-1 text-sm font-medium text-accent"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="proyectos">
          <h2 id="proyectos" className="text-xl font-semibold tracking-tight">
            Proyectos destacados
          </h2>
          <div className="mt-5 divide-y divide-border border-y border-border">
            <a
              href="https://passnow.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span>
                <strong className="font-medium text-ink">PassNow</strong>
                <span className="mt-1 block text-sm text-muted">
                  Plataforma de entradas con panel para organizadores y accesos QR.
                </span>
              </span>
              <span className="shrink-0 text-sm text-muted transition-colors group-hover:text-ink">
                Ver sitio →
              </span>
            </a>
            <a
              href="https://github.com/rufinoratti/desarrollo-apps.git"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span>
                <strong className="font-medium text-ink">Rematix</strong>
                <span className="mt-1 block text-sm text-muted">
                  Aplicación móvil de subastas con pujas y gestión por roles.
                </span>
              </span>
              <span className="shrink-0 text-sm text-muted transition-colors group-hover:text-ink">
                Ver código →
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

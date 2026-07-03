"use client";

import { Reveal } from "@/components/motion";

type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  highlights?: string[];
};

const education: TimelineItem[] = [
  {
    title: "Licenciatura en Gestión de Tecnología de la Información",
    subtitle: "Universidad Argentina de la Empresa (UADE)",
    period: "2023 - Actualidad",
    description:
      "Carrera universitaria enfocada en la gestión de proyectos tecnológicos, análisis de sistemas y liderazgo de equipos de desarrollo.<br/>24/41 Materias aprobadas. Promedio: 7.57",
  },
];

const experience: TimelineItem[] = [
  {
    title: "Desarrollador Front-end Freelance",
    subtitle: "Remoto",
    period: "Jul 2023 – Actualidad",
    highlights: [
      "Desarrollo de interfaces web responsivas con React.js, HTML, CSS y Tailwind CSS.",
      "Creación de sitios y aplicaciones priorizando usabilidad, rendimiento y accesibilidad.",
      "Implementación de componentes reutilizables y estructuras escalables de frontend.",
      "Optimización de tiempos de carga y performance mediante recursos eficientes y diseño responsive.",
      "Trabajo directo con clientes de distintos rubros, gestionando requerimientos y entregables de forma autónoma.",
      "Uso de Framer para desarrollo de sitios con enfoque visual e interacción.",
    ],
  },
  {
    title: "Gestión de Stock y Coordinación de Barra",
    subtitle: "Sector gastronómico y eventos",
    period: "Experiencia previa",
    highlights: [
      "Gestión de stock e insumos, optimizando costos y reduciendo desperdicios.",
      "Coordinación operativa de barra en eventos y establecimientos gastronómicos.",
      "Planificación de pedidos, control de proveedores y logística de abastecimiento.",
      "Supervisión y organización de equipos de trabajo.",
      "Capacitación de personal y asignación de tareas.",
      "Atención al cliente en entornos de alta demanda.",
    ],
  },
];

function Timeline({
  items,
  startDelay = 0,
}: {
  items: TimelineItem[];
  startDelay?: number;
}) {
  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={startDelay + i * 0.12}>
          <div className="grid gap-2 py-8 first:pt-2 last:pb-2 sm:grid-cols-[180px_1fr] sm:gap-8">
            <span className="font-mono text-sm text-muted">{item.period}</span>
            <div>
              <h3 className="font-medium text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
              {item.description && (
                <p
                  className="mt-3 text-sm leading-relaxed text-muted/80"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
              {item.highlights && (
                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted/80"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Education() {
  return (
    <section id="formacion" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            Formación y Experiencia
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted">
            Formación
          </h3>
        </Reveal>
        <Timeline items={education} startDelay={0.12} />

        <Reveal delay={0.2}>
          <h3 className="mb-6 mt-16 text-sm font-medium uppercase tracking-widest text-muted">
            Experiencia laboral
          </h3>
        </Reveal>
        <Timeline items={experience} startDelay={0.28} />
      </div>
    </section>
  );
}

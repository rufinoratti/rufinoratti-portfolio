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
      "Carrera enfocada en gestión de proyectos tecnológicos, análisis de sistemas y liderazgo de equipos. 28 de 41 materias aprobadas · promedio 7,63.",
  },
];

const experience: TimelineItem[] = [
  {
    title: "Desarrollador Full Stack Freelance",
    subtitle: "Remoto",
    period: "Jul 2023 – Actualidad",
    highlights: [
      "Desarrollo de sitios y aplicaciones web con React, Next.js, Tailwind CSS y herramientas modernas.",
      "Implementación de interfaces, integraciones y estructuras reutilizables para frontend y backend.",
      "Priorización de usabilidad, rendimiento, accesibilidad y diseño responsive.",
      "Trabajo directo con clientes: relevamiento, definición de alcance y entrega de soluciones.",
    ],
  },
  {
    title: "Gestión de Stock y Coordinación de Barra",
    subtitle: "Sector gastronómico y eventos",
    period: "Experiencia previa",
    highlights: [
      "Gestión de stock, pedidos y proveedores en contextos de alta demanda.",
      "Coordinación operativa de equipos en eventos y establecimientos gastronómicos.",
      "Atención al cliente y resolución de necesidades en tiempo real.",
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
                <p className="mt-3 text-sm leading-relaxed text-muted/80">
                  {item.description}
                </p>
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

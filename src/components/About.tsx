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
            Soy Rufino, desarrollador full stack y estudiante de Gestión de
            Tecnología de la Información en UADE. Desarrollo productos web de
            punta a punta: desde interfaces claras hasta integraciones y lógica
            de negocio. Trabajo de forma independiente con clientes de distintos
            rubros, acompañando cada proyecto desde la idea hasta su puesta en
            producción.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

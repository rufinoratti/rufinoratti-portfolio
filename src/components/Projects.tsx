"use client";

import { Reveal, RevealStagger } from "@/components/motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";

const projects = [
  {
    title: "PassNow",
    description:
      "Plataforma para descubrir, comprar y gestionar entradas de eventos, con panel para organizadores y accesos mediante código QR.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "Mercado Pago", "Resend", "QR Code", "Zod"],
    url: "https://passnow.com.ar",
    image: "/passnow.png",
  },
  {
    title: "Rematix · Subastas online",
    description:
      "Aplicación móvil de subastas con validación de identidad, pujas en vivo, medios de pago y gestión de usuarios por roles.",
    tags: ["React Native", "Expo", "Node.js", "Express", "Supabase"],
    url: "https://github.com/rufinoratti/desarrollo-apps.git",
    image: "/Rematix.png",
  },
  {
    title: "Ratti & Capponi - Estudio de Arquitectura",
    description:
      "Sitio corporativo para un estudio de arquitectura, con servicios, perfiles, ubicación y contacto.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://ratti-capponi.vercel.app/",
    image: "/ratticapponi.png",
  },
  {
    title: "Adolfina Lorenzetti - Portafolio",
    description:
      "Portfolio para una diseñadora de interiores, centrado en proyectos, servicios y contacto.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    url: "https://adolfina-lorenzetti-portfolio.vercel.app/",
    image: "/adolfina-lorenzetti.png",
  },
  {
    title: "Florentina Cora - Joyería de Autor",
    description:
      "Tienda online de joyería de autor con catálogo, carrito, pagos y envíos.",
    tags: ["TiendaNube", "E-Commerce", "Diseño Web"],
    url: "https://www.florentinacora.com.ar/",
    image: "/floretinacora.png",
  },
  {
    title: "La Piruca - Tienda Criolla",
    description:
      "Tienda online de productos criollos con catálogo por categorías, pagos y envíos.",
    tags: ["TiendaNube", "E-Commerce", "Diseño Web"],
    url: "https://lapiruca3.mitiendanube.com/",
    image: "/lapiruca.png",
  },
  {
    title: "El Proveedor - Fiambrería & Vinoteca Boutique",
    description:
      "Sitio de catálogo de vinos con filtros, fichas de producto, ubicación y horarios.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    url: "https://proveedor-vinos.vercel.app/",
    image: "/proveedor.png",
  },
  {
    title: "La trastienda de Ver - Tienda Online",
    description:
      "Tienda online multimarca con catálogo, gestión de stock, SEO y logística de envíos.",
    tags: ["TiendaNube", "E-Commerce", "Diseño Web"],
    url: "https://latrastiendadever.mitiendanube.com/",
    image: "/latranstienda.png",
  },
];

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="proyectos" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            Proyectos
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10" aria-hidden="true">
              <div className="h-full w-full rounded-[32px] bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-2xl" />
            </div>
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-border transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0_0_0_/_0.06)] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-subtle">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-contain p-4 transition-transform duration-500 ease-out-expo group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">
                      {featured.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                      {featured.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    weight="bold"
                    className="mt-1 h-5 w-5 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden="true"
                  />
                </div>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                  {featured.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-muted/30 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project, index) => (
            <RevealStagger key={project.title} staggerIndex={index}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0_0_0_/_0.06)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-subtle">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium text-ink">{project.title}</h3>
                    <ArrowUpRight
                      weight="bold"
                      className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías utilizadas">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-accent-muted/30 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </RevealStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

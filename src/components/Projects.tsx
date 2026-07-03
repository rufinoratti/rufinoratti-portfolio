"use client";

import { Reveal, RevealStagger } from "@/components/motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    title: "PassNow - Tu Ticketera amiga (En desarrollo)",
    description:
      "Aplicación transaccional para la compra y gestión de entradas de eventos nocturnos. Permite a los usuarios descubrir fiestas y boliches por categorías, reservar sus lugares y pagar de forma segura e inmediata para recibir una entrada digital con código QR. Incluye además un panel privado para que los organizadores puedan crear sus propios eventos, controlar las ventas y escanear los accesos directamente en la puerta.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "MercadoPago", "Resend", "QR Code", "Zod"],
    url: "",
    image: "/passnow.png",
    featured: true,
  },
  {
    title: "Rematix - Aplicacion de Subastas Online",
    description:
      "Aplicación móvil de subastas donde los usuarios pueden crear su cuenta con validación de identidad, explorar catálogos de artículos, pujar en vivo, gestionar sus medios de pago y coordinar la entrega de los lotes ganados. Los vendedores pueden publicar sus artículos para que sean subastados, y los administradores tienen herramientas para aprobar clientes, productos y gestionar las subastas. Todo organizado por niveles de acceso que determinan qué subastas puede ver cada usuario según su perfil.",
      tags: ["React Native", "Expo", "Node.js","Express","Supabase"],
    url: "https://github.com/rufinoratti/desarrollo-apps.git",
    image: "/Rematix.png",
  },
  {
    title: "Ratti & Capponi - Estudio de Arquitectura",
    description:
      "Sitio web corporativo para Ratti & Capponi, un estudio de arquitectura de Lobos, Buenos Aires. Diseño colaborativo y arquitectura a medida, con servicios profesionales, perfiles de los fundadores, mapa interactivo y contacto directo. Una sola página con navegación fluida y animaciones sutiles.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://ratti-capponi.vercel.app/",
    image: "/ratticapponi.png",
  },
  {
    title: "Florentina Cora - Joyería de Autor",
    description:
      "Tienda online para una marca de joyería de autor con colecciones limitadas. Incluye catálogo de productos, carrito de compras, múltiples métodos de pago y envíos nacionales e internacionales.",
    tags: ["TiendaNube", "E-Commerce", "Diseño Web"],
    url: "https://www.florentinacora.com.ar/",
    image: "/floretinacora.png",
  },
  {
    title: "La Piruca - Tienda Criolla",
    description:
      "Tienda online para una marca de productos con identidad gaucha: cuchillos, mates y accesorios criollos. Diseño acorde a la identidad de la marca, con catálogo por categorías, múltiples medios de pago y envíos a todo el país.",
    tags: ["TiendaNube", "E-Commerce", "Diseño Web"],
    url: "https://lapiruca3.mitiendanube.com/",
    image: "/lapiruca.png",
  },
  {
    title: "El Proveedor - Fiambrería & Vinoteca Boutique",
    description:
      "Sitio web para una fiambrería y vinoteca de Lobos, Buenos Aires. Muestra el catálogo de vinos con filtrado por tipo (Tinto, Blanco, Rosado), información de cada vino como cepa y graduación alcohólica, ubicación con Google Maps integrado y horarios de atención.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    url: "https://proveedor-vinos.vercel.app/",
    image: "/proveedor.png",
  },
  {
    title: "La trastienda de Ver - Tienda Online (En desarrollo)",
    description:
      "Tienda online para La Trastienda de Ver, un emprendimiento multimarca especializado en carteras, mochilas y accesorios. Diseño minimalista enfocado en la experiencia de usuario, con catálogo estructurado por marcas, gestión de stock, optimización SEO para buscadores y logística integrada con envíos a todo el país.",
    tags: ["TiendaNube", "E-Commerce", "Diseño Web"],
    url: "https://proveedor-vin.vercel.app/",
    image: "/latranstienda.png",
  },
];

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);
  const isInDevelopment = featured.title.includes("En desarrollo");
  const reduceMotion = useReducedMotion();

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
              className="group block overflow-hidden rounded-2xl border border-border transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0_0_0_/_0.06)] active:scale-[0.99]"
            >
            <div className="relative aspect-[16/9] overflow-hidden bg-subtle">
              <img
                src={featured.image}
                alt={featured.title}
                className={`h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105 ${isInDevelopment ? "blur-md" : ""}`}
                loading="lazy"
              />
              <div className={`absolute inset-0 ${isInDevelopment ? "bg-gradient-to-t from-black/80 via-black/50 to-black/30" : "bg-gradient-to-t from-black/60 via-black/20 to-transparent"}`} aria-hidden="true" />
              {isInDevelopment && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <motion.span
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white shadow-lg backdrop-blur-md"
                  >
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      {!reduceMotion && (
                        <motion.span
                          className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"
                          animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    En desarrollo
                  </motion.span>
                </div>
              )}
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
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-muted/30 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <RevealStagger key={project.title} staggerIndex={i}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0_0_0_/_0.06)] active:scale-[0.98]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-subtle">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium text-ink">{project.title}</h3>
                    <ArrowUpRight
                      weight="bold"
                      className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </div>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-muted/30 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </RevealStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

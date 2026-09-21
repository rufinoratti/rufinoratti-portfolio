import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90dvh] items-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-accent-muted/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-full border border-border bg-subtle md:hidden">
            <Image
              src="/foto-hero.JPG"
              alt="Retrato de Rufino Ratti"
              fill
              priority
              sizes="80px"
              className="object-cover"
            />
          </div>
          <p className="mb-4 text-2xl font-medium text-accent">
            Hola, soy
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tighter md:text-7xl">
            Rufino Ratti
          </h1>
          <p className="mb-8 text-lg text-muted md:text-xl">
            Desarrollador Full Stack y fundador de PassNow. Estudiante de
            Gestión de Tecnología de la Información en UADE.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/cv"
              className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-surface transition-[opacity,transform] duration-200 ease-out-expo hover:opacity-90 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Ver CV
            </Link>
            <a
              href="#proyectos"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-[border-color,transform] duration-200 ease-out-expo hover:border-ink active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="px-2 py-3 text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Contactarme
            </a>
          </div>
        </div>

        <div className="relative hidden md:col-span-5 md:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-subtle">
            <Image
              src="/foto-hero.JPG"
              alt="Retrato de Rufino Ratti"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

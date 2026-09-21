"use client";

import { useReducedMotion } from "motion/react";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "HTML",
  "CSS",
  "Motion",
  "Vercel",
  "Supabase",
  "React Native",
];

function TechnologyList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={duplicate || undefined}
    >
      {technologies.map((tech) => (
        <li
          key={`${duplicate ? "duplicate-" : ""}${tech}`}
          className="whitespace-nowrap text-sm font-medium text-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="border-y border-border px-6 py-6" aria-labelledby="tecnologias">
        <div className="mx-auto max-w-5xl">
          <h2 id="tecnologias" className="sr-only">
            Tecnologías principales
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {technologies.map((tech) => (
              <li key={tech} className="text-sm font-medium text-muted">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden border-y border-border py-5" aria-labelledby="tecnologias">
      <h2 id="tecnologias" className="sr-only">
        Tecnologías principales
      </h2>
      <div className="tech-marquee-mask">
        <div className="animate-marquee flex w-max items-center">
          <TechnologyList />
          <TechnologyList duplicate />
        </div>
      </div>
    </section>
  );
}

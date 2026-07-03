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

export default function TechMarquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="border-y border-border px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="whitespace-nowrap text-sm font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    );
  }

  const doubled = [...technologies, ...technologies];

  return (
    <section
      className="overflow-hidden border-y border-border py-5"
      aria-label="Tecnologías"
    >
      <div className="animate-marquee flex w-max items-center gap-10">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap text-sm font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

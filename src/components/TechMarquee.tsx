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

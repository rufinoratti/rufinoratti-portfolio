import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rufino Ratti",
    url: "https://rufinoratti-portfolio.vercel.app",
    jobTitle: "Desarrollador Full Stack",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Argentina de la Empresa",
    },
    sameAs: [
      "https://github.com/rufinoratti",
      "https://linkedin.com/in/rufinoratti",
    ],
  };

  return (
    <>
      <Navbar />
      <main id="contenido-principal">
        <Hero />
        <About />
        <TechMarquee />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}

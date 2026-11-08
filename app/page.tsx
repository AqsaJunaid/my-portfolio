import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        {/* Projects reveals its own heading and cards individually (staggered) */}
        <Projects />
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <footer className="border-t border-navy/10 py-8">
        <div className="section-shell text-center text-sm text-muted">
          <p>© {new Date().getFullYear()} Aqsa Junaid. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

import ProjectCard, { type ProjectCardProps } from "./ProjectCard";
import Reveal from "./Reveal";

// Add an `imageSrc` (e.g. "/projects/neurax.png") once real screenshots
// are available in /public/projects — cards fall back to a clean
// placeholder with the project's initials until then.
const PROJECTS: ProjectCardProps[] = [
  {
    title: "NeuraX — AI-Powered Hospital Management System",
    description:
      "AI-driven healthcare platform for automated medical certificate generation and real-time medical processing using OCR and ClinicalBERT.",
    tech: ["FastAPI", "Supabase", "Tesseract OCR", "ClinicalBERT"],
    imageSrc: "/images/projects/Neurax.jpeg",

  },
  {
    title: "AEGISAI — Deepfake Detection System",
    description:
      "Deep learning pipeline using CNN models to detect forged and fake media, with interactive classification dashboards.",
    tech: ["Python", "TensorFlow", "CNN", "HTML/CSS", "JavaScript"],
    imageSrc: "/images/projects/Aegis.jpeg",

  },
  {
    title: "Brain Tumor Detection System",
    description:
      "CNN-based MRI classification model achieving 94.2% accuracy through optimized preprocessing pipelines.",
    tech: ["Python", "CNN", "Image Preprocessing"],
    imageSrc: "/images/projects/brain tumor detection.jpeg",

  },
  {
    title: "Campus Quest",
    description:
      "Interactive campus navigation system built using the A* pathfinding algorithm for optimal route discovery.",
    tech: ["Python"],
    imageSrc: "/images/projects/CampusQuest.jpeg",

  },
  {
    title: "Ecom Website",
    description:
      "Fully functional e-commerce website with user authentication, shopping cart, and checkout features.",
    tech: ["Django", "HTML/CSS", "JavaScript"],
    imageSrc: "/images/projects/Ecom.jpeg",

  },
  {
    title: "Social Wave",
    description:
      "Social media web application with posts, a follow system, and account management.",
    tech: ["Django"],
    imageSrc: "/images/projects/SocialWave.jpeg",

  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-8%] left-[-10%] h-72 w-72 rounded-full bg-navy/10 blur-3xl sm:h-96 sm:w-96"
      />
      <div className="section-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
        
          <h2 className="section-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 text-base text-muted">
            A mix of AI research, applied machine learning, and full-stack
            engineering — from hospital workflows to campus navigation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 120} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

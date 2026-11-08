const EXPERIENCE = [
  {
    role: "AI Intern",
    org: "Riayatech.ae",
    period: "July 2025 – December 2025",
    badge: "Most Recent",
    description:
      "Worked on applied AI features for healthcare workflows — building and refining machine learning components, evaluating model performance, and collaborating with the engineering team to ship production-ready pipelines.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 3v2.5M12 18.5V21M4.2 4.2l1.8 1.8M18 18l1.8 1.8M3 12h2.5M18.5 12H21M4.2 19.8 6 18M18 6l1.8-1.8" />
      </>
    ),
  },
  {
    role: "Full Stack Web Developer Intern",
    org: "CodeAlpha",
    period: "July 2024 – August 2024",
    badge: null,
    description:
      "Developed and maintained full-stack web features end to end, working across front-end interfaces and back-end logic while following practical software development and version control workflows.",
    icon: (
      <>
        <polyline points="8 7 3 12 8 17" />
        <polyline points="16 7 21 12 16 17" />
        <line x1="13.5" y1="4" x2="10.5" y2="20" />
      </>
    ),
  },
  {
    role: "Academic Mentor",
    org: "Air University Data and AI Society",
    period: "September 2023 – June 2024",
    badge: null,
    description:
      "Mentored peers in artificial intelligence and data science fundamentals, guiding project work and study sessions to help students strengthen their applied ML and programming skills.",
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
      </>
    ),
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] right-[-10%] h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-14%] left-[-8%] h-72 w-72 rounded-full bg-navy/10 blur-3xl sm:h-96 sm:w-96"
      />
      <div className="section-shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
        
          </p>
          <h2 className="section-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Where I&apos;ve worked
          </h2>
        </div>

        <ol className="relative mx-auto mt-16 max-w-3xl">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent/70 via-accent/20 to-transparent sm:left-6"
          />

          {EXPERIENCE.map((item) => (
            <li key={item.role} className="group relative pb-10 pl-16 last:pb-0 sm:pl-20">
              {/* Icon badge on the line */}
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-soft text-white shadow-[0_10px_20px_-8px_rgba(59,130,246,0.6)] ring-4 ring-[--color-bg-end] transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </span>

              <div className="card-surface relative overflow-hidden border-l-4 border-l-accent/60 p-6 transition-all duration-300 group-hover:border-l-accent group-hover:shadow-[0_20px_45px_-18px_rgba(59,130,246,0.45)] sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="section-heading font-display text-lg font-bold text-navy">
                    {item.role}
                  </h3>
                  {item.badge && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-sm font-semibold text-accent">{item.org}</p>
                  <span className="hidden h-1 w-1 rounded-full bg-navy/20 sm:inline-block" />
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {item.period}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

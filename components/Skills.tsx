const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: (
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" />
    ),
    skills: ["Python", "C++", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "AI / Machine Learning",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </>
    ),
    skills: [
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "CNNs",
      "ClinicalBERT",
      "RAG",
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    skills: [
      "PyTorch",
      "TensorFlow",
      "Django",
      "FastAPI",
      "Supabase",
      "OpenCV",
      "Tesseract OCR",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-12%] right-[-8%] h-72 w-72 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96"
      />
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
          </p>
          <h2 className="section-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Tools I build with
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="card-surface p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {group.icon}
                </svg>
              </div>

              <h3 className="mt-4 font-display text-base font-bold text-navy">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

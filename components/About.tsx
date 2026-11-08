const EDUCATION = [
  {
    degree: "BS in Artificial Intelligence",
    institute: "Air University",
    period: "2022 – 2026",
    result: "CGPA: 3.73",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institute: "OPF",
    period: "2020 – 2022",
    result: "92.7%",
  },
  {
    degree: "Matriculation",
    institute: "OPF",
    period: "2018 – 2020",
    result: "98.8%",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-12 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-[-8%] h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] right-[-8%] h-64 w-64 rounded-full bg-navy/10 blur-3xl sm:h-80 sm:w-80"
      />
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">
          </p>
          <h2 className="section-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Building intelligent systems with purpose
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Summary + achievements */}
          <div className="card-surface p-7 sm:p-9">
            <h3 className="font-display text-xl font-bold text-navy">
              Professional Summary
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I&apos;m an Artificial Intelligence professional and full-stack
              developer focused on turning research-grade machine learning
              into real, usable products. My work spans automated healthcare
              documentation, deepfake and forged-media detection, and
              diagnostic imaging systems — always with an emphasis on
              reliable pipelines, thoughtful UX, and measurable accuracy.
              I enjoy owning a problem end-to-end: from data preprocessing
              and model training to shipping a polished interface around it.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/15 bg-accent/5 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0 text-accent"
              >
                <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M8.5 13.5 6 21l6-3 6 3-2.5-7.5" />
              </svg>
              <p className="text-sm leading-relaxed text-navy/80">
                <span className="font-semibold text-navy">
                  Multiple High Achiever awards
                </span>{" "}
                recognizing consistent academic excellence and leadership
                throughout my education.
              </p>
            </div>
          </div>

          {/* Education timeline */}
          <div className="card-surface p-7 sm:p-9">
            <h3 className="font-display text-xl font-bold text-navy">
              Education
            </h3>

            <ol className="mt-6 space-y-8 border-l border-navy/10 pl-6">
              {EDUCATION.map((item) => (
                <li key={item.degree} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-bold text-navy">
                      {item.degree}
                    </h4>
                    <span className="text-xs font-medium text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.institute}</p>
                  <span className="tag-chip mt-2 inline-block">
                    {item.result}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

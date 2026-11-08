const CONTACT_LINKS = [
  {
    label: "Email",
    value: "aqsajunaid700@gmail.com",
    href: "mailto:aqsajunaid700@gmail.com",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2.5" />
        <path d="m3 6.5 8.3 6a1.5 1.5 0 0 0 1.7 0L21 6.5" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aqsa-junaid",
    href: "https://linkedin.com/in/aqsa-junaid",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7.5 10v6.5M7.5 7.2v.1M12 16.5V13a2 2 0 0 1 4 0v3.5M12 12.8v3.7" />
      </>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/AqsaJunaid",
    href: "https://github.com/AqsaJunaid",
    icon: (
      <path d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 5v-3.4c0-.9.3-1.6.8-2.1-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.3-3.2 4.2 4.2 0 0 1 .1-3.2s1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.2 4.2 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.3 3.2c0 4.7-2.8 5.7-5.5 6 .4.5.8 1.2.8 2.4V21" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="section-shell">
        <div className="card-surface relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />

          <p className="section-label justify-center">
          </p>
          <h2 className="section-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted">
            Have a project, role, or idea in mind? I&apos;m always open to
            discussing AI, full-stack development, or new opportunities.
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-3 rounded-xl border border-navy/10 bg-white/70 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_30px_-15px_rgba(30,58,95,0.35)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
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
                  >
                    {link.icon}
                  </svg>
                </span>
                <span className="text-sm font-semibold text-navy">
                  {link.label}
                </span>
                <span className="break-all text-xs text-muted">
                  {link.value}
                </span>
              </a>
            ))}
          </div>

          <a
            href="mailto:aqsajunaid700@gmail.com"
            className="btn-primary mt-10 inline-flex"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}

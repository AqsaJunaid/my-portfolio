import Image from "next/image";
import TypingText from "./TypingText";

const FOCUS_AREAS = ["Healthcare AI", "Deepfake Detection", "Intelligent Systems"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-accent/25 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-80 w-80 rounded-full bg-navy/10 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/4 hidden h-40 w-40 rounded-full bg-accent-soft/20 blur-2xl sm:block"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 hidden opacity-40 sm:block"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
      >
        <circle cx="6" cy="6" r="3" fill="var(--color-accent)" />
        <circle cx="26" cy="6" r="3" fill="var(--color-accent)" />
        <circle cx="46" cy="6" r="3" fill="var(--color-accent)" />
        <circle cx="6" cy="26" r="3" fill="var(--color-accent)" />
        <circle cx="26" cy="26" r="3" fill="var(--color-accent)" />
        <circle cx="6" cy="46" r="3" fill="var(--color-accent)" />
      </svg>

      <div className="section-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Left: name */}
          <div className="animate-fade-up text-center lg:text-left">
            <p className="section-label justify-center lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Hello, I&apos;m
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Aqsa
              <br />
              <span className="section-heading bg-gradient-to-r from-navy to-accent bg-clip-text text-transparent">
                Junaid
              </span>
            </h1>

            <p className="mt-5 text-base font-semibold text-navy/70 sm:text-lg">
              Building with{" "}
              <TypingText
                className="text-accent"
                words={[
                  "Deep Learning",
                  "Computer Vision",
                  "Clinical NLP",
                  "FastAPI & Django",
                ]}
              />
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {FOCUS_AREAS.map((area) => (
                <span key={area} className="tag-chip">
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a href="#projects" className="btn-primary">
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Center: portrait with spotlight glow */}
          <div className="animate-fade-up relative mx-auto flex justify-center" style={{ animationDelay: "120ms" }}>
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-125 rounded-full bg-gradient-to-br from-accent/50 via-accent-soft/35 to-transparent blur-3xl"
            />
            <div className="relative aspect-[4/5] w-64 animate-float overflow-hidden rounded-[2.25rem] shadow-[0_30px_70px_-20px_rgba(59,130,246,0.5)] ring-1 ring-white/60 sm:w-80 lg:w-[22rem]">
              <Image
                src="/images/projects/Profile.jpeg"
                alt="Aqsa Junaid"
                fill
                priority
                sizes="(min-width: 1024px) 352px, (min-width: 640px) 320px, 256px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-transparent" />
            </div>

            {/* CGPA badge */}
            <div
              className="absolute -bottom-4 right-1 flex animate-float items-center gap-1.5 rounded-full border border-navy/10 bg-white/90 px-4 py-2 text-xs font-semibold text-navy shadow-[0_10px_25px_-10px_rgba(30,58,95,0.35)] backdrop-blur-sm sm:-bottom-5 sm:right-2"
              style={{ animationDelay: "1.2s" }}
            >
              3.73 CGPA
            </div>
          </div>

          {/* Right: role */}
          <div className="animate-fade-up text-center lg:text-right" style={{ animationDelay: "220ms" }}>
            <p className="section-label justify-center lg:justify-end">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What I do
            </p>
            <p className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Artificial <span className="text-accent">Intelligence</span>
              <br />
              <span className="section-heading">Professional</span>
            </p>
            <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-muted lg:mx-0 lg:ml-auto lg:text-base">
              AI Professional with hands-on experience in building machine
              learning and AI-based applications across healthcare systems,
              deepfake detection, and intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

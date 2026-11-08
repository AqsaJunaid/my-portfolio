import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  imageSrc?: string;
  imageAlt?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  imageSrc,
  imageAlt,
  link,
}: ProjectCardProps) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      {/* Image / placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF] to-[#DBEAFE]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? `${title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-3xl font-bold text-navy/25">
              {title
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="section-heading font-display text-lg font-bold text-navy">{title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="tag-chip">
              {item}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-[#2f6fe0]"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

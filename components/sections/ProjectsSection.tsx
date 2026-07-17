import { projects } from "@/lib/data/projects";
import ProjectsMascot from "@/components/mascots/ProjectsMascot";

function StarFlourish({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`w-5 h-5 sm:w-6 sm:h-6 ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
        fill="var(--nes-sun)"
      />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="page-projects reveal-stagger relative min-h-screen pt-24 pb-44 px-6 flex flex-col items-center"
    >
      <ProjectsMascot />
      <div className="flex items-center gap-3 mb-2">
        <StarFlourish />
        <h2 className="theme-heading text-2xl sm:text-4xl text-center">
          STAGE SELECT
        </h2>
        <StarFlourish flip />
      </div>
      <p className="text-lg theme-text-dim mb-12 text-center">
        Live projects, pulled straight from github.com/Abirh10
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
        {projects.map((project) => (
          <a
            key={project.code}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-card p-5 flex flex-col gap-3 transition-transform duration-150 hover:-translate-y-1 hover:brightness-105"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-arcade text-[10px] theme-accent">
                STAGE {project.code}
              </span>
              <span className="font-pixel-title text-[9px] theme-text-dim">
                ↗ GITHUB
              </span>
            </div>
            <div>
              <h3 className="font-arcade text-sm theme-heading-sm mb-1">
                {project.title}
              </h3>
              <p className="text-base theme-subheading">{project.tagline}</p>
            </div>
            <p className="text-lg theme-text">{project.description}</p>
            <ul className="flex flex-col gap-1 text-base theme-text-dim">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="theme-accent shrink-0">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.tech.map((t) => (
                <span key={t} className="theme-tag text-xs px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

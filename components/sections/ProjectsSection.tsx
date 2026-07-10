import { projects } from "@/lib/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 flex flex-col items-center"
    >
      <h2 className="font-pixel-title text-lg sm:text-2xl text-nes-yellow text-outline mb-2 text-center">
        STAGE SELECT
      </h2>
      <p className="text-lg text-nes-white/70 mb-12 text-center">
        Live projects, pulled straight from github.com/Abirh10
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
        {projects.map((project) => (
          <a
            key={project.code}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-nes-navy/90 p-5 flex flex-col gap-3 hover:bg-nes-blue transition-colors"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-pixel-title text-[10px] text-nes-yellow">
                STAGE {project.code}
              </span>
              <span className="font-pixel-title text-[9px] text-nes-white/50">
                ↗ GITHUB
              </span>
            </div>
            <div>
              <h3 className="font-pixel-title text-sm text-nes-white mb-1">
                {project.title}
              </h3>
              <p className="text-base text-nes-yellow/90">{project.tagline}</p>
            </div>
            <p className="text-lg text-nes-white/90">{project.description}</p>
            <ul className="flex flex-col gap-1 text-base text-nes-white/80">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-nes-green shrink-0">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-nes-black text-nes-green font-pixel-title"
                >
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

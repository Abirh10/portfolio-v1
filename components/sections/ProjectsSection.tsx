import { projects } from "@/lib/data/projects";
import SectionCard from "@/components/v3/SectionCard";

export default function ProjectsSection() {
  return (
    <SectionCard
      id="projects"
      label="04 · Projects"
      title="Things I've built"
      art={{ colorA: "#bcdbd9", colorB: "#f5f1e6", seed: 4 }}
    >
      <p className="text-sm mb-6" style={{ color: "var(--ink-dim)" }}>
        Live repositories, pulled straight from github.com/Abirh10
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.code}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform"
            style={{ background: "var(--surface-dim)" }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="label">{project.code}</span>
              <span className="label" style={{ color: "var(--accent)" }}>
                ↗ GitHub
              </span>
            </div>
            <div>
              <h3 className="font-serif-accent text-lg mb-1">{project.title}</h3>
              <p className="text-sm" style={{ color: "var(--accent)" }}>
                {project.tagline}
              </p>
            </div>
            <p className="text-sm sm:text-base">{project.description}</p>
            <ul className="flex flex-col gap-1 text-sm" style={{ color: "var(--ink-dim)" }}>
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="shrink-0" style={{ color: "var(--accent)" }}>
                    ▸
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.tech.map((t) => (
                <span key={t} className="label px-2 py-1 rounded-full" style={{ border: "1px solid var(--border)" }}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </SectionCard>
  );
}

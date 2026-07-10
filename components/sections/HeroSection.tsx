import { navLinks } from "@/lib/data/navigation";
import SectionCard from "@/components/v3/SectionCard";

export default function HeroSection() {
  return (
    <SectionCard
      id="hero"
      label="Portfolio · Software Engineer"
      title="Abir Hirani"
      art={{ colorA: "#dfe3f7", colorB: "#fbfbfe", seed: 0 }}
      artClassName="h-40 sm:h-56"
    >
      <p className="text-base sm:text-lg mb-8" style={{ color: "var(--ink-dim)" }}>
        Software engineer who likes turning ideas into working systems — from machine
        learning pipelines to small tools people actually use. Scroll on for the
        rundown, or jump straight to a section below.
      </p>
      <nav aria-label="Jump to section" className="flex flex-wrap gap-2">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="label px-3 py-1.5 rounded-full"
            style={{ border: "1px solid var(--border)" }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </SectionCard>
  );
}

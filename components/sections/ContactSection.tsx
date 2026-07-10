import SectionCard from "@/components/v3/SectionCard";

const LINKS = [
  { label: "Email", href: "mailto:beko91872@gmail.com" },
  { label: "GitHub", href: "https://github.com/Abirh10" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abir-hirani/" },
];

export default function ContactSection() {
  return (
    <SectionCard
      id="contact"
      label="07 · Contact"
      title="Let's talk"
      art={{ colorA: "#f0d9dd", colorB: "#fbf6f0", seed: 7 }}
    >
      <p className="text-base sm:text-lg mb-8">
        Thanks for stopping by. Want to build something together? Reach out below.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card px-5 py-2.5 text-center text-sm"
            style={{ background: "var(--surface-dim)" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </SectionCard>
  );
}

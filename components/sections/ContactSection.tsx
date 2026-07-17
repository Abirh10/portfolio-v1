import ContactMascot from "@/components/mascots/ContactMascot";

const LINKS = [
  { label: "EMAIL", href: "mailto:beko91872@gmail.com" },
  { label: "GITHUB", href: "https://github.com/Abirh10" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/abir-hirani/" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="page-contact reveal-stagger relative min-h-screen pt-24 pb-44 px-6 flex flex-col items-center justify-center text-center"
    >
      <ContactMascot />
      <div className="relative flex items-center justify-center mb-6">
        <span
          className="absolute w-20 h-20 rounded-full border-2 radar-ping"
          style={{ borderColor: "var(--theme-accent)" }}
          aria-hidden="true"
        />
        <span
          className="absolute w-20 h-20 rounded-full border-2 radar-ping"
          style={{ borderColor: "var(--theme-accent)", animationDelay: "1.2s" }}
          aria-hidden="true"
        />
        <h2 className="theme-heading text-2xl sm:text-4xl relative">
          GAME OVER
        </h2>
      </div>
      <p className="max-w-md text-lg sm:text-xl theme-text-dim mb-10">
        Thanks for playing through. Want to team up on the next level?
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn px-6 py-3 text-xs"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="font-cyber text-[10px] sm:text-xs theme-accent blink mt-16">
        CONTINUE?
      </p>
    </section>
  );
}

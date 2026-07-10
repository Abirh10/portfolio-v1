const LINKS = [
  { label: "EMAIL", href: "mailto:beko91872@gmail.com" },
  { label: "GITHUB", href: "https://github.com/Abirh10" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/abir-hirani/" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center text-center"
    >
      <h2 className="font-pixel-title text-lg sm:text-2xl text-nes-red text-outline mb-6">
        GAME OVER
      </h2>
      <p className="max-w-md text-lg sm:text-xl text-nes-white/90 mb-10">
        Thanks for playing through. Want to team up on the next level?
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-nes-navy px-6 py-3 font-pixel-title text-xs text-nes-yellow hover:bg-nes-blue transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="font-pixel-title text-[10px] sm:text-xs text-nes-white blink mt-16">
        CONTINUE?
      </p>
    </section>
  );
}

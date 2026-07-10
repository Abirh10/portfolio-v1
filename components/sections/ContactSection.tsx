import RetroWindow from "@/components/RetroWindow";

const LINKS = [
  { label: "EMAIL", href: "mailto:beko91872@gmail.com" },
  { label: "GITHUB", href: "https://github.com/Abirh10" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/abir-hirani/" },
];

export default function ContactSection() {
  return (
    <RetroWindow id="contact" title="C:\PORTFOLIO\CONTACT.EXE" objCount={LINKS.length}>
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
            className="bevel-out px-5 py-2 text-center font-pixel-title text-xs text-win-text"
          >
            {link.label}
          </a>
        ))}
      </div>
    </RetroWindow>
  );
}

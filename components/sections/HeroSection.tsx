import { navLinks } from "@/lib/data/navigation";
import RetroWindow from "@/components/RetroWindow";

export default function HeroSection() {
  return (
    <RetroWindow id="hero" title="C:\PORTFOLIO\INDEX.EXE" objCount={navLinks.length}>
      <p className="font-pixel-title text-[10px] sm:text-xs text-win-accent tracking-widest mb-6">
        WELCOME TO THE ABIR HIRANI PORTFOLIO SYSTEM
      </p>
      <h1 className="font-pixel-title text-xl sm:text-3xl mb-2">Abir Hirani</h1>
      <p className="font-pixel-title text-xs sm:text-sm text-win-accent mb-6">
        Software Engineer
      </p>
      <p className="max-w-md text-base sm:text-lg mb-8">
        Software engineer who likes turning ideas into working systems — from machine
        learning pipelines to small tools people actually use. Browse the icons on the
        desktop, or jump straight to a window below.
      </p>

      <div className="bevel-in px-3 py-2 mb-8 text-sm">
        <p className="mb-1">Colors allocated: 2.</p>
        <p className="mb-1">Texture generation: Active.</p>
        <p>System status: Open to opportunities.</p>
      </div>

      <p className="font-pixel-title text-[10px] text-win-text-dim mb-3">SELECT A WINDOW</p>
      <nav aria-label="Jump to section">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="bevel-out block px-2 py-2 text-center font-pixel-body text-xs text-win-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </RetroWindow>
  );
}

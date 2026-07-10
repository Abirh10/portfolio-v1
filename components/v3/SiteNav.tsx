"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data/navigation";
import { useTheme } from "@/lib/theme/ThemeProvider";

export default function SiteNav() {
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)" }}>
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-0 py-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif-accent text-lg"
          style={{ color: "var(--ink)" }}
        >
          Abir
        </button>

        <nav
          aria-label="Sections"
          className="flex items-center gap-4 sm:gap-5 overflow-x-auto min-w-0"
          style={{ scrollbarWidth: "none" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className="label whitespace-nowrap transition-colors"
              style={{ color: activeId === link.id ? "var(--accent)" : "var(--ink-dim)" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
          className="card w-9 h-9 flex items-center justify-center text-sm shrink-0"
        >
          {theme === "light" ? "☀" : "☾"}
        </button>
      </div>
    </header>
  );
}

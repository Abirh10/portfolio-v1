"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/data/navigation";
import { useWindowManager } from "./WindowManager";
import { useTheme } from "@/lib/theme/ThemeProvider";

export default function Taskbar() {
  const { isOpen, open } = useWindowManager();
  const { theme, toggleTheme } = useTheme();
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [clock, setClock] = useState<string | null>(null);
  const startRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      setClock(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    };
    tick();
    const interval = setInterval(tick, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (startRef.current && !startRef.current.contains(e.target as Node)) {
        setStartMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goTo = (id: string) => {
    open(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setStartMenuOpen(false);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 flex items-center gap-2 px-2 py-1 bevel-out"
      style={{ borderBottomWidth: 0 }}
    >
      <div ref={startRef} className="relative">
        <button
          type="button"
          onClick={() => setStartMenuOpen((v) => !v)}
          className={`bevel-out px-3 py-1 font-pixel-title text-xs sm:text-sm text-win-text ${startMenuOpen ? "bevel-in" : ""}`}
        >
          Start
        </button>
        {startMenuOpen && (
          <div className="bevel-out absolute bottom-full left-0 mb-1 w-48 bg-win-face py-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className="w-full text-left px-3 py-1.5 font-pixel-body text-sm text-win-text hover:bg-win-accent hover:text-win-titlebar-text"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="hidden sm:flex items-center gap-1 flex-1 overflow-x-auto">
        {navLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => goTo(link.id)}
            className={`bevel-out px-2 py-1 font-pixel-body text-xs text-win-text whitespace-nowrap ${
              activeId === link.id && isOpen(link.id) ? "bevel-in" : ""
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
          className="bevel-out px-2 py-1 font-pixel-body text-xs text-win-text"
        >
          {theme === "light" ? "☀" : "☾"}
        </button>
        <span className="bevel-in px-2 py-1 font-pixel-body text-xs text-win-text min-w-[4.5rem] text-center">
          {clock ?? "--:--"}
        </span>
      </div>
    </div>
  );
}

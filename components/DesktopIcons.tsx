"use client";

import { navLinks } from "@/lib/data/navigation";
import { useWindowManager } from "./WindowManager";
import PixelIcon from "./icons/PixelIcon";

export default function DesktopIcons() {
  const { isOpen, open } = useWindowManager();

  const handleClick = (id: string) => {
    open(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Desktop shortcuts"
      className="hidden md:flex fixed top-6 left-4 z-20 flex-col gap-4 w-20"
    >
      {navLinks.map((link) => {
        const active = isOpen(link.id);
        return (
          <button
            key={link.id}
            type="button"
            onClick={() => handleClick(link.id)}
            className="flex flex-col items-center gap-1 px-1 py-1 text-center"
          >
            <span
              className="flex items-center justify-center w-9 h-9"
              style={{
                color: active ? "var(--win-titlebar-text)" : "var(--win-desktop-icon-text)",
                background: active ? "var(--win-desktop-icon-selected)" : "transparent",
              }}
            >
              <PixelIcon name={link.id} size={22} />
            </span>
            <span
              className="font-pixel-body text-[11px] leading-tight px-0.5"
              style={{
                color: "var(--win-desktop-icon-text)",
                background: active ? "var(--win-desktop-icon-selected)" : "transparent",
                textShadow: "1px 1px 0 rgba(0,0,0,0.5)",
              }}
            >
              {link.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

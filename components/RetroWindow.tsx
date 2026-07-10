"use client";

import { useWindowManager } from "./WindowManager";

const ZONE_LABELS = ["Local Intranet", "Trusted Sites", "My Computer", "Restricted Sites"];

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

type RetroWindowProps = {
  id: string;
  title: string;
  objCount: number;
  children: React.ReactNode;
  className?: string;
};

export default function RetroWindow({ id, title, objCount, children, className }: RetroWindowProps) {
  const { isOpen, toggle } = useWindowManager();

  if (!isOpen(id)) return null;

  const hash = hashString(id);
  const zone = ZONE_LABELS[hash % ZONE_LABELS.length];
  const freeSpace = (8 + (hash % 40) + (hash % 10) / 10).toFixed(1);

  return (
    <section id={id} className={`bevel-out w-full max-w-3xl mx-auto shadow-lg ${className ?? ""}`}>
      <div
        className="flex items-center justify-between px-2 py-1 font-pixel-title text-xs sm:text-sm"
        style={{
          background: `linear-gradient(to right, var(--win-titlebar-start), var(--win-titlebar-end))`,
          color: "var(--win-titlebar-text)",
        }}
      >
        <span className="truncate">{title}</span>
        <div className="flex gap-1 shrink-0">
          <button
            type="button"
            aria-label="Minimize"
            className="bevel-out w-5 h-5 flex items-center justify-center text-[10px] text-win-text leading-none"
          >
            _
          </button>
          <button
            type="button"
            aria-label="Maximize"
            className="bevel-out w-5 h-5 flex items-center justify-center text-[10px] text-win-text leading-none"
          >
            {"□"}
          </button>
          <button
            type="button"
            aria-label={`Close ${title}`}
            onClick={() => toggle(id)}
            className="bevel-out w-5 h-5 flex items-center justify-center text-[10px] text-win-text leading-none"
          >
            X
          </button>
        </div>
      </div>

      <div className="flex gap-4 px-3 py-1 border-b-2 border-win-border-dark/30 font-pixel-body text-sm text-win-text-dim">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Help</span>
      </div>

      <div className="win-scrollbar bg-win-window-bg text-win-text px-4 py-6 sm:px-8 sm:py-8 max-h-[80vh] overflow-y-auto">
        {children}
      </div>

      <div className="bevel-in flex items-center justify-between px-3 py-1 text-[11px] sm:text-xs text-win-text-dim">
        <span>Obj: {objCount}</span>
        <span>{freeSpace}MB free</span>
        <span>{zone}</span>
      </div>
    </section>
  );
}

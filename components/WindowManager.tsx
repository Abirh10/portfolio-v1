"use client";

import { createContext, useCallback, useContext, useState } from "react";

type WindowManagerValue = {
  isOpen: (id: string) => boolean;
  toggle: (id: string) => void;
  open: (id: string) => void;
};

const WindowManagerContext = createContext<WindowManagerValue | null>(null);

export function WindowManagerProvider({ children }: { children: React.ReactNode }) {
  const [closedIds, setClosedIds] = useState<Set<string>>(new Set());

  const isOpen = useCallback((id: string) => !closedIds.has(id), [closedIds]);

  const toggle = useCallback((id: string) => {
    setClosedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const open = useCallback((id: string) => {
    setClosedIds((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  return (
    <WindowManagerContext.Provider value={{ isOpen, toggle, open }}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error("useWindowManager must be used within WindowManagerProvider");
  return ctx;
}

import type { ReactNode } from "react";
import SpeechBubble from "@/components/SpeechBubble";

export default function MascotVignette({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) {
  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 pointer-events-none"
      aria-hidden="true"
    >
      <div className="mascot-scale relative">
        <SpeechBubble message={message} placement="top" />
        {children}
      </div>
    </div>
  );
}

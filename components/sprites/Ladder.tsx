/** Vertical metal ladder rail, tiled full-height via CSS. Rungs every 28px. */
export default function Ladder({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="relative h-full w-full flex justify-between">
        <div className="w-[6px] h-full bg-nes-gun-dark" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, var(--nes-gray) 0px, var(--nes-gray) 6px, transparent 6px, transparent 28px)",
          }}
        />
        <div className="w-[6px] h-full bg-nes-gun-dark" />
      </div>
    </div>
  );
}

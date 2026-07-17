import { FarMountains, JungleCanopy, GroundStrip, VineOverlay, Clouds, Sun } from "@/components/sprites/Skyline";

const LAYER_WIDTH = 1600;

/** About — the original Contra jungle scene. */
export default function ContraTheme() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--nes-navy) 0%, var(--nes-blue) 40%, var(--nes-sky) 65%, var(--nes-orange) 88%, var(--nes-red-dark) 100%)",
        }}
      />
      <div className="absolute right-[12%] top-[18%] opacity-90">
        <Sun />
      </div>
      <div className="absolute top-0 left-0 flex opacity-70 drift-slow">
        <Clouds width={LAYER_WIDTH} />
        <Clouds width={LAYER_WIDTH} />
      </div>
      <div className="absolute bottom-24 left-0 drift-med">
        <FarMountains width={LAYER_WIDTH} />
      </div>
      <div className="absolute bottom-16 left-0 flex opacity-95 drift-med">
        <JungleCanopy width={LAYER_WIDTH} />
        <JungleCanopy width={LAYER_WIDTH} />
      </div>
      <div className="absolute bottom-0 left-0 flex drift-fast">
        <GroundStrip width={LAYER_WIDTH} />
        <GroundStrip width={LAYER_WIDTH} />
      </div>
      <div className="absolute top-0 left-0 flex opacity-85 drift-slow">
        <VineOverlay width={LAYER_WIDTH} />
        <VineOverlay width={LAYER_WIDTH} />
      </div>
    </div>
  );
}

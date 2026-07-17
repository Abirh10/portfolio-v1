import { FigureBody } from "./PixelFigure";
import MascotVignette from "./MascotVignette";
import { sectionMessages } from "@/lib/data/messages";

/** Loadout — figure swinging a sword at a practice post. */
export default function LoadoutMascot() {
  return (
    <MascotVignette message={sectionMessages.skills}>
      <svg
        viewBox="0 0 30 24"
        className="w-28 sm:w-32 h-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
        shapeRendering="crispEdges"
      >
        {/* practice post */}
        <rect x={21} y={8} width={3} height={14} fill="var(--nes-brown-dark)" />
        <circle cx={22.5} cy={6} r={3} fill="var(--nes-tan)" />

        <FigureBody legPose="stride" headband="var(--nes-gray)" outfit="var(--nes-gray-dark)" outfitLight="var(--nes-gray)" outfitShadow="var(--nes-black)" />
        {/* arm + sword */}
        <g className="mascot-swing">
          <rect x={11} y={7} width={2} height={2} fill="var(--nes-skin)" />
          <rect x={12} y={2} width={2} height={9} fill="var(--nes-gray)" />
          <rect x={11} y={9} width={4} height={1} fill="var(--nes-brown-dark)" />
        </g>
      </svg>
    </MascotVignette>
  );
}

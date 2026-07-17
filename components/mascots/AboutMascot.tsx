import { FigureBody } from "./PixelFigure";
import MascotVignette from "./MascotVignette";
import { sectionMessages } from "@/lib/data/messages";

/** About — soldier on watch, gun ready, scanning the treeline. */
export default function AboutMascot() {
  return (
    <MascotVignette message={sectionMessages.about}>
      <svg
        viewBox="0 0 26 24"
        className="w-28 sm:w-32 h-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
        shapeRendering="crispEdges"
      >
        <g className="mascot-scan">
          <FigureBody legPose="stand" />
          {/* arm + gun, held ready */}
          <rect x={11} y={6} width={2} height={2} fill="var(--nes-skin)" />
          <rect x={12} y={7} width={2} height={2} fill="var(--nes-skin)" />
          <rect x={9} y={9} width={3} height={1} fill="var(--nes-gun-dark)" />
          <rect x={12} y={7} width={3} height={1} fill="var(--nes-gray)" />
          <rect x={15} y={7} width={1} height={1} fill="var(--nes-gun-dark)" />
        </g>
      </svg>
    </MascotVignette>
  );
}

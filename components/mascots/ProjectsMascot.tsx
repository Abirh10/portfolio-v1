import { FigureBody } from "./PixelFigure";
import MascotVignette from "./MascotVignette";
import { sectionMessages } from "@/lib/data/messages";

/** Projects — figure hopping between two floating platform blocks. */
export default function ProjectsMascot() {
  return (
    <MascotVignette message={sectionMessages.projects}>
      <svg
        viewBox="0 0 44 26"
        className="w-32 sm:w-36 h-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
        shapeRendering="crispEdges"
      >
        {/* platform blocks */}
        <rect x={2} y={20} width={12} height={4} fill="var(--nes-brown)" />
        <rect x={2} y={20} width={12} height={2} fill="var(--nes-green)" />
        <rect x={30} y={20} width={12} height={4} fill="var(--nes-brown)" />
        <rect x={30} y={20} width={12} height={2} fill="var(--nes-green)" />

        <g className="mascot-hop">
          <FigureBody legPose="stride" headband="var(--nes-sun)" outfit="var(--nes-red)" outfitLight="var(--nes-orange)" outfitShadow="var(--nes-red-dark)" />
        </g>
      </svg>
    </MascotVignette>
  );
}

import { FigureBody } from "./PixelFigure";
import MascotVignette from "./MascotVignette";
import { sectionMessages } from "@/lib/data/messages";

/** Experience — figure at a terminal, typing away, monitor flickering. */
export default function ExperienceMascot() {
  return (
    <MascotVignette message={sectionMessages.experience}>
      <svg
        viewBox="0 0 30 26"
        className="w-28 sm:w-32 h-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
        shapeRendering="crispEdges"
      >
        {/* desk */}
        <rect x={15} y={17} width={13} height={2} fill="var(--nes-brown-dark)" />
        <rect x={16} y={19} width={1} height={5} fill="var(--nes-brown-dark)" />
        <rect x={26} y={19} width={1} height={5} fill="var(--nes-brown-dark)" />
        {/* monitor */}
        <rect x={18} y={7} width={9} height={7} fill="var(--nes-gray-dark)" />
        <rect x={19} y={8} width={7} height={5} fill="#050810" />
        <rect x={19} y={8} width={7} height={5} fill="var(--nes-teal)" className="mascot-flicker" opacity={0.5} />
        <rect x={21} y={14} width={3} height={2} fill="var(--nes-gray-dark)" />

        <FigureBody legPose="stand" outfit="var(--nes-navy)" outfitLight="var(--nes-blue)" outfitShadow="var(--nes-black)" />
        {/* typing arms */}
        <g className="mascot-bob">
          <rect x={11} y={8} width={2} height={2} fill="var(--nes-skin)" />
          <rect x={13} y={9} width={3} height={1} fill="var(--nes-skin)" />
        </g>
      </svg>
    </MascotVignette>
  );
}

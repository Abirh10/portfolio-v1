import { FigureBody } from "./PixelFigure";
import MascotVignette from "./MascotVignette";
import { sectionMessages } from "@/lib/data/messages";

/** Resume — figure seated, reading a book, page turning. */
export default function ResumeMascot() {
  return (
    <MascotVignette message={sectionMessages.resume}>
      <svg
        viewBox="0 0 22 24"
        className="w-24 sm:w-28 h-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
        shapeRendering="crispEdges"
      >
        {/* stool */}
        <rect x={4} y={21} width={9} height={2} fill="var(--nes-brown-dark)" />

        <FigureBody legPose="sit" headband="var(--nes-orange)" outfit="var(--nes-brown)" outfitLight="var(--nes-tan)" outfitShadow="var(--nes-brown-dark)" />
        {/* book */}
        <rect x={5} y={11} width={6} height={5} fill="var(--nes-white)" />
        <rect x={7.5} y={11} width={0.5} height={5} fill="var(--nes-gray)" />
        <g className="mascot-tip">
          <rect x={8} y={11} width={3} height={5} fill="var(--nes-cloud)" />
        </g>
      </svg>
    </MascotVignette>
  );
}

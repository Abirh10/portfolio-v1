import { FigureBody } from "./PixelFigure";
import MascotVignette from "./MascotVignette";
import { sectionMessages } from "@/lib/data/messages";

/** Contact — figure adjusting a small satellite dish, turning to find signal. */
export default function ContactMascot() {
  return (
    <MascotVignette message={sectionMessages.contact}>
      <svg
        viewBox="0 0 30 26"
        className="w-28 sm:w-32 h-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
        shapeRendering="crispEdges"
      >
        {/* pole */}
        <rect x={21} y={10} width={2} height={12} fill="var(--nes-gray-dark)" />
        {/* dish, turning */}
        <g className="mascot-turn">
          <ellipse cx={22} cy={9} rx={7} ry={4} fill="none" stroke="var(--nes-gray)" strokeWidth={2} />
          <circle cx={22} cy={7} r={1.5} fill="var(--nes-red)" />
        </g>

        <FigureBody legPose="stand" headband="var(--nes-cloud)" outfit="var(--nes-purple)" outfitLight="var(--nes-sky)" outfitShadow="var(--nes-black)" />
        {/* reaching arm */}
        <rect x={11} y={5} width={2} height={2} fill="var(--nes-skin)" />
        <rect x={13} y={3} width={2} height={2} fill="var(--nes-skin)" />
      </svg>
    </MascotVignette>
  );
}

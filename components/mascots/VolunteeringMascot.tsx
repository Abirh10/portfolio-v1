import { FigureBody } from "./PixelFigure";
import MascotVignette from "./MascotVignette";
import { sectionMessages } from "@/lib/data/messages";

/** Volunteering — figure watering a small plant, watering-can tipping. */
export default function VolunteeringMascot() {
  return (
    <MascotVignette message={sectionMessages.volunteering}>
      <svg
        viewBox="0 0 28 24"
        className="w-28 sm:w-32 h-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]"
        shapeRendering="crispEdges"
      >
        {/* plant pot + stem + leaves */}
        <rect x={19} y={19} width={6} height={4} fill="var(--nes-brown)" />
        <rect x={21} y={12} width={2} height={7} fill="var(--nes-green-dark)" />
        <circle cx={20} cy={12} r={3} fill="var(--nes-green)" />
        <circle cx={24} cy={11} r={3} fill="var(--nes-green-dark)" />

        <FigureBody legPose="stand" headband="var(--nes-yellow)" outfit="var(--nes-brown)" outfitLight="var(--nes-tan)" outfitShadow="var(--nes-brown-dark)" />
        {/* arm + watering can */}
        <g className="mascot-tip">
          <rect x={11} y={7} width={2} height={2} fill="var(--nes-skin)" />
          <rect x={12} y={8} width={4} height={3} fill="var(--nes-teal)" />
          <rect x={16} y={9} width={2} height={1} fill="var(--nes-teal)" />
          <rect x={13} y={6} width={2} height={2} fill="var(--nes-teal)" />
        </g>
      </svg>
    </MascotVignette>
  );
}

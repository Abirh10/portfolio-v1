export type SoldierFrame = "idle" | "climb1" | "climb2";

const P = {
  outline: "var(--nes-black)",
  headband: "var(--nes-red)",
  hair: "var(--nes-brown-dark)",
  skin: "var(--nes-skin)",
  skinShadow: "var(--nes-skin-shadow)",
  vest: "var(--nes-green-dark)",
  vestLight: "var(--nes-green)",
  vestShadow: "var(--nes-green-shadow)",
  belt: "var(--nes-brown-dark)",
  pants: "var(--nes-tan)",
  pantsShadow: "var(--nes-tan-shadow)",
  boots: "var(--nes-black)",
};

/** 16x24 unit pixel grid, front-facing, gripping a ladder. */
function legsForFrame(frame: SoldierFrame) {
  switch (frame) {
    case "climb1":
      return (
        <>
          <rect x={5} y={11} width={3} height={7} fill={P.pants} />
          <rect x={5} y={11} width={1} height={7} fill={P.pantsShadow} />
          <rect x={5} y={18} width={3} height={2} fill={P.boots} />
          <rect x={8} y={11} width={3} height={4} fill={P.pantsShadow} />
          <rect x={8} y={15} width={3} height={2} fill={P.boots} />
        </>
      );
    case "climb2":
      return (
        <>
          <rect x={8} y={11} width={3} height={7} fill={P.pants} />
          <rect x={8} y={11} width={1} height={7} fill={P.pantsShadow} />
          <rect x={8} y={18} width={3} height={2} fill={P.boots} />
          <rect x={5} y={11} width={3} height={4} fill={P.pantsShadow} />
          <rect x={5} y={15} width={3} height={2} fill={P.boots} />
        </>
      );
    case "idle":
    default:
      return (
        <>
          <rect x={5} y={11} width={3} height={5} fill={P.pantsShadow} />
          <rect x={5} y={16} width={3} height={2} fill={P.boots} />
          <rect x={8} y={11} width={3} height={5} fill={P.pants} />
          <rect x={8} y={11} width={1} height={5} fill={P.pantsShadow} />
          <rect x={8} y={16} width={3} height={2} fill={P.boots} />
        </>
      );
  }
}

export default function Soldier({
  frame = "idle",
  className,
}: {
  frame?: SoldierFrame;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 24"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* legs gripping rungs */}
      {legsForFrame(frame)}

      {/* arms reaching up to grip the rails */}
      <rect x={3} y={5} width={1} height={2} fill={P.skin} />
      <rect x={2} y={3} width={1} height={2} fill={P.skin} />
      <rect x={1} y={1} width={2} height={2} fill={P.skin} />
      <rect x={12} y={5} width={1} height={2} fill={P.skin} />
      <rect x={13} y={3} width={1} height={2} fill={P.skin} />
      <rect x={13} y={1} width={2} height={2} fill={P.skin} />

      {/* torso */}
      <rect x={3} y={5} width={10} height={6} fill={P.outline} />
      <rect x={4} y={5} width={8} height={5} fill={P.vest} />
      <rect x={4} y={5} width={8} height={1} fill={P.vestLight} />
      <rect x={4} y={9} width={8} height={1} fill={P.vestShadow} />
      <rect x={4} y={10} width={8} height={1} fill={P.belt} />

      {/* neck */}
      <rect x={7} y={4} width={2} height={1} fill={P.skin} />

      {/* head */}
      <rect x={5} y={0} width={6} height={4} fill={P.outline} />
      <rect x={5} y={0} width={6} height={1} fill={P.headband} />
      <rect x={4} y={1} width={1} height={1} fill={P.hair} />
      <rect x={11} y={1} width={1} height={1} fill={P.hair} />
      <rect x={5} y={1} width={6} height={3} fill={P.skin} />
      <rect x={5} y={3} width={6} height={1} fill={P.skinShadow} />
      <rect x={6} y={2} width={1} height={1} fill={P.outline} />
      <rect x={9} y={2} width={1} height={1} fill={P.outline} />
    </svg>
  );
}

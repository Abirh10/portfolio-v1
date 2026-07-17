/**
 * Shared base humanoid rig (head + torso + legs) that each mascot vignette
 * builds on top of with its own arms/props/animation. Coordinate space is a
 * 16x24 pixel grid, matching components/sprites/Soldier.tsx's construction
 * style, so mascots feel consistent with the rest of the site's pixel art.
 */

export const FIGURE_PALETTE = {
  outline: "var(--nes-black)",
  skin: "var(--nes-skin)",
  skinShadow: "var(--nes-skin-shadow)",
  hair: "var(--nes-brown-dark)",
};

export function FigureBody({
  headband = "var(--nes-red)",
  outfit = "var(--nes-green-dark)",
  outfitLight = "var(--nes-green)",
  outfitShadow = "var(--nes-green-shadow)",
  pants = "var(--nes-tan)",
  pantsShadow = "var(--nes-tan-shadow)",
  legPose = "stand",
}: {
  headband?: string;
  outfit?: string;
  outfitLight?: string;
  outfitShadow?: string;
  pants?: string;
  pantsShadow?: string;
  legPose?: "stand" | "sit" | "stride";
}) {
  const P = FIGURE_PALETTE;

  return (
    <>
      {/* legs */}
      {legPose === "sit" ? (
        <>
          <rect x={5} y={14} width={3} height={5} fill={pants} />
          <rect x={8} y={14} width={3} height={5} fill={pantsShadow} />
          <rect x={5} y={19} width={6} height={2} fill={P.outline} opacity={0.5} />
        </>
      ) : legPose === "stride" ? (
        <>
          <rect x={4} y={13} width={3} height={7} fill={pantsShadow} />
          <rect x={4} y={20} width={3} height={2} fill={P.outline} />
          <rect x={9} y={13} width={3} height={5} fill={pants} />
          <rect x={9} y={18} width={3} height={2} fill={P.outline} />
        </>
      ) : (
        <>
          <rect x={5} y={13} width={3} height={7} fill={pantsShadow} />
          <rect x={5} y={20} width={3} height={2} fill={P.outline} />
          <rect x={8} y={13} width={3} height={7} fill={pants} />
          <rect x={8} y={13} width={1} height={7} fill={pantsShadow} />
          <rect x={8} y={20} width={3} height={2} fill={P.outline} />
        </>
      )}

      {/* torso */}
      <rect x={3} y={5} width={10} height={6} fill={P.outline} />
      <rect x={4} y={5} width={8} height={5} fill={outfit} />
      <rect x={4} y={5} width={8} height={1} fill={outfitLight} />
      <rect x={4} y={9} width={8} height={1} fill={outfitShadow} />
      <rect x={4} y={10} width={8} height={1} fill="var(--nes-brown-dark)" />

      {/* neck */}
      <rect x={7} y={4} width={2} height={1} fill={P.skin} />

      {/* head */}
      <rect x={5} y={0} width={6} height={4} fill={P.outline} />
      <rect x={5} y={0} width={6} height={1} fill={headband} />
      <rect x={4} y={1} width={1} height={1} fill={P.hair} />
      <rect x={11} y={1} width={1} height={1} fill={P.hair} />
      <rect x={5} y={1} width={6} height={3} fill={P.skin} />
      <rect x={5} y={3} width={6} height={1} fill={P.skinShadow} />
      <rect x={6} y={2} width={1} height={1} fill={P.outline} />
      <rect x={9} y={2} width={1} height={1} fill={P.outline} />
    </>
  );
}

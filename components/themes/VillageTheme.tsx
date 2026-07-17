import { SilhouetteRidge, ClusterRow, TexturedGround, HangingAccents } from "@/components/sprites/SceneKit";

const LAYER_WIDTH = 1600;
const HILL_FAR = "#8b7ba8";
const HILL_NEAR = "#6a5c8c";
const HUT_BODY = "#7a5230";
const HUT_ROOF = "#a5432e";
const GROUND = "#8a6f4a";
const STONE = "#9c8560";
const LANTERN = "#f5c869";

const hillsFar: [number, number][] = [
  [0, 220], [120, 150], [260, 190], [400, 120], [560, 170], [700, 110],
  [860, 175], [1000, 130], [1150, 180], [1300, 120], [1450, 170], [1600, 140],
];

const hillsNear: [number, number][] = [
  [0, 240], [150, 190], [320, 230], [500, 170], [680, 225], [860, 180],
  [1050, 235], [1220, 190], [1400, 230], [1600, 200],
];

/** Volunteering — warm countryside village at sunset. */
export default function VillageTheme() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #3b3568 0%, #7a5a8c 35%, #d68f6e 68%, #f4b878 88%, #ffd9a0 100%)",
        }}
      />

      <div className="absolute bottom-24 left-0 flex drift-slow opacity-90">
        <SilhouetteRidge width={LAYER_WIDTH} height={220} color={HILL_FAR} points={hillsFar} />
      </div>

      <div className="absolute bottom-14 left-0 flex drift-med">
        <SilhouetteRidge width={LAYER_WIDTH} height={240} color={HILL_NEAR} points={hillsNear} />
      </div>

      <div className="absolute bottom-14 left-0 flex drift-med">
        <ClusterRow
          width={LAYER_WIDTH}
          height={240}
          step={190}
          renderCluster={(i, x) => {
            if (i % 4 === 3) {
              // windmill
              return (
                <>
                  <rect x={x + 10} y={150} width={10} height={70} fill={HUT_BODY} />
                  <circle cx={x + 15} cy={140} r={5} fill={HUT_ROOF} />
                  <rect x={x + 15} y={100} width={2} height={80} fill="#c9c0a8" transform={`rotate(20 ${x + 15} 140)`} />
                  <rect x={x + 15} y={100} width={2} height={80} fill="#c9c0a8" transform={`rotate(110 ${x + 15} 140)`} />
                </>
              );
            }
            const w = 44;
            const h = 40;
            return (
              <>
                <rect x={x} y={220 - h} width={w} height={h} fill={HUT_BODY} />
                <polygon points={`${x - 6},${220 - h} ${x + w / 2},${220 - h - 26} ${x + w + 6},${220 - h}`} fill={HUT_ROOF} />
                <rect x={x + w / 2 - 5} y={220 - 16} width={10} height={16} fill="#3f2a1a" />
              </>
            );
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 flex drift-fast">
        <TexturedGround
          width={LAYER_WIDTH}
          height={100}
          baseColor={GROUND}
          capColor="#6b5636"
          capHeight={10}
          step={26}
          renderTile={(i, x) => (
            <ellipse cx={x + 10} cy={30 + ((i % 3) * 20)} rx={9} ry={6} fill={STONE} opacity={0.5} />
          )}
        />
        <TexturedGround
          width={LAYER_WIDTH}
          height={100}
          baseColor={GROUND}
          capColor="#6b5636"
          capHeight={10}
          step={26}
          renderTile={(i, x) => (
            <ellipse cx={x + 10} cy={30 + ((i % 3) * 20)} rx={9} ry={6} fill={STONE} opacity={0.5} />
          )}
        />
      </div>

      <div className="absolute top-0 left-0 flex drift-slow opacity-90">
        <HangingAccents
          width={LAYER_WIDTH}
          height={260}
          step={140}
          renderAccent={(i, x) => {
            const len = 40 + ((i % 3) * 20);
            return (
              <>
                <rect x={x} y={0} width={2} height={len} fill="#5c4530" />
                <circle cx={x + 1} cy={len + 8} r={8} fill={LANTERN} opacity={0.9} />
              </>
            );
          }}
        />
        <HangingAccents
          width={LAYER_WIDTH}
          height={260}
          step={140}
          renderAccent={(i, x) => {
            const len = 40 + ((i % 3) * 20);
            return (
              <>
                <rect x={x} y={0} width={2} height={len} fill="#5c4530" />
                <circle cx={x + 1} cy={len + 8} r={8} fill={LANTERN} opacity={0.9} />
              </>
            );
          }}
        />
      </div>
    </div>
  );
}

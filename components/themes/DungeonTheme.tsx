import { SilhouetteRidge, ClusterRow, TexturedGround, HangingAccents } from "@/components/sprites/SceneKit";

const LAYER_WIDTH = 1600;
const WALL_BACK = "#2a2530";
const WALL_FRONT = "#3a3340";
const STONE_LINE = "#221e28";
const FLOOR = "#4a4250";
const FLOOR_CRACK = "#302a38";
const TORCH_FLAME = "#f5a020";
const TORCH_GLOW = "#ffcf6b";

const battlements: [number, number][] = Array.from({ length: 20 }, (_, i) => {
  const x = i * 84;
  return [x, i % 2 === 0 ? 140 : 100] as [number, number];
}).flatMap(([x, y]): [number, number][] => [
  [x, y],
  [x + 42, y],
]);

/** Loadout — torchlit stone dungeon / armory. */
export default function DungeonTheme() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, #16121c 0%, #241f2c 50%, #35303c 85%, #423a48 100%)" }}
      />

      <div className="absolute bottom-24 left-0 flex drift-slow opacity-90">
        <SilhouetteRidge width={LAYER_WIDTH} height={220} color={WALL_BACK} points={battlements} />
      </div>

      <div className="absolute bottom-0 left-0 flex drift-med opacity-95">
        <ClusterRow
          width={LAYER_WIDTH}
          height={280}
          step={40}
          renderCluster={(_i, x) => (
            <rect x={x} y={0} width={40} height={280} fill={WALL_FRONT} stroke={STONE_LINE} strokeWidth={2} />
          )}
        />
      </div>

      <div className="absolute bottom-4 left-0 flex drift-med">
        <ClusterRow
          width={LAYER_WIDTH}
          height={140}
          step={260}
          renderCluster={(i, x) => (
            <g>
              <rect x={x} y={40} width={8} height={50} fill="#3f342a" />
              <polygon points={`${x - 8},${44} ${x + 4},${18} ${x + 16},${44}`} fill={TORCH_FLAME} />
              <circle cx={x + 4} cy={30} r={20} fill={TORCH_GLOW} opacity={0.18} />
            </g>
          )}
        />
      </div>

      <div className="absolute bottom-0 left-0 flex drift-fast">
        <TexturedGround
          width={LAYER_WIDTH}
          height={100}
          baseColor={FLOOR}
          capColor="#5a5260"
          capHeight={6}
          step={64}
          renderTile={(i, x) => (
            <path d={`M ${x} 10 L ${x + 20} 40 L ${x + 8} 90`} stroke={FLOOR_CRACK} strokeWidth={2} fill="none" />
          )}
        />
        <TexturedGround
          width={LAYER_WIDTH}
          height={100}
          baseColor={FLOOR}
          capColor="#5a5260"
          capHeight={6}
          step={64}
          renderTile={(i, x) => (
            <path d={`M ${x} 10 L ${x + 20} 40 L ${x + 8} 90`} stroke={FLOOR_CRACK} strokeWidth={2} fill="none" />
          )}
        />
      </div>

      <div className="absolute top-0 left-0 flex drift-slow opacity-90">
        <HangingAccents
          width={LAYER_WIDTH}
          height={200}
          step={180}
          renderAccent={(i, x) => {
            const len = 50 + ((i % 3) * 24);
            return (
              <g>
                {Array.from({ length: Math.floor(len / 12) }).map((_, li) => (
                  <circle key={li} cx={x} cy={li * 12 + 6} r={4} fill="none" stroke="#6b6270" strokeWidth={1.5} />
                ))}
              </g>
            );
          }}
        />
      </div>
    </div>
  );
}

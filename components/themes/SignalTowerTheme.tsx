import { SilhouetteRidge, ClusterRow, TexturedGround, HangingAccents } from "@/components/sprites/SceneKit";

const LAYER_WIDTH = 1600;
const CITY_SIL = "#161233";
const TOWER = "#4a4560";
const DISH = "#6b6480";
const LIGHT = "#ff5a5a";
const ROOFTOP = "#0f0c22";
const STAR = "#ffffff";

const cityRidge: [number, number][] = [
  [0, 210], [70, 180], [70, 130], [110, 130], [110, 200], [180, 200],
  [180, 150], [220, 150], [220, 90], [260, 90], [260, 190], [340, 190],
  [340, 140], [390, 140], [390, 200], [470, 200], [470, 110], [520, 110],
  [520, 60], [560, 60], [560, 210], [640, 210], [640, 160], [700, 160],
  [700, 200], [780, 200], [780, 100], [830, 100], [830, 190], [900, 190],
];

// Deterministic star positions.
const STARS: [number, number][] = [
  [4, 10], [14, 22], [26, 6], [38, 18], [50, 30], [62, 12], [74, 25],
  [86, 8], [94, 20], [8, 40], [30, 45], [55, 42], [70, 46], [90, 40],
];

/** Contact — night skyline with signal towers. */
export default function SignalTowerTheme() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #05040f 0%, #0e0b28 45%, #1a1440 80%, #241a4a 100%)" }} />

      <div className="absolute inset-0" aria-hidden="true">
        {STARS.map(([x, y], i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{ left: `${x}%`, top: `${y}%`, width: 2, height: 2, background: STAR, opacity: 0.8 }}
          />
        ))}
      </div>

      <div className="absolute bottom-24 left-0 flex drift-slow opacity-90">
        <SilhouetteRidge width={LAYER_WIDTH} height={220} color={CITY_SIL} points={cityRidge} />
      </div>

      <div className="absolute bottom-16 left-0 flex drift-med">
        <ClusterRow
          width={LAYER_WIDTH}
          height={260}
          step={260}
          renderCluster={(i, x) => (
            <g>
              <rect x={x} y={80} width={6} height={140} fill={TOWER} />
              <ellipse cx={x + 3} cy={80} rx={22} ry={12} fill="none" stroke={DISH} strokeWidth={4} />
              <circle cx={x + 3} cy={70} r={3} fill={LIGHT} opacity={i % 2 === 0 ? 1 : 0.3} />
            </g>
          )}
        />
      </div>

      <div className="absolute bottom-0 left-0 flex drift-fast">
        <TexturedGround
          width={LAYER_WIDTH}
          height={90}
          baseColor={ROOFTOP}
          capColor="#1c1738"
          capHeight={4}
          step={100}
          renderTile={(_i, x) => (
            <rect x={x} y={10} width={40} height={4} fill="#2a2450" opacity={0.6} />
          )}
        />
        <TexturedGround
          width={LAYER_WIDTH}
          height={90}
          baseColor={ROOFTOP}
          capColor="#1c1738"
          capHeight={4}
          step={100}
          renderTile={(_i, x) => (
            <rect x={x} y={10} width={40} height={4} fill="#2a2450" opacity={0.6} />
          )}
        />
      </div>

      <div className="absolute top-0 left-0 flex drift-slow opacity-70">
        <HangingAccents
          width={LAYER_WIDTH}
          height={260}
          step={260}
          renderAccent={(_i, x) => (
            <path
              d={`M ${x} 0 Q ${x + 130} 60 ${x + 260} 0`}
              fill="none"
              stroke={DISH}
              strokeWidth={2}
              opacity={0.4}
            />
          )}
        />
      </div>
    </div>
  );
}

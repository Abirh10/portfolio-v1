import { SilhouetteRidge, ClusterRow, TexturedGround, HangingAccents } from "@/components/sprites/SceneKit";

const LAYER_WIDTH = 1600;
const SKY = "#0d0a2a";
const BUILDING_BACK = "#1a1638";
const BUILDING_FRONT = "#241d4a";
const NEON_CYAN = "#38e0e0";
const NEON_MAGENTA = "#e838c0";
const GROUND = "#0a0814";
const GRID_LINE = "#3a2a6e";

const backRidge: [number, number][] = [
  [0, 200], [40, 140], [90, 140], [90, 90], [140, 90], [140, 160], [200, 160],
  [200, 60], [230, 60], [230, 180], [300, 180], [300, 110], [360, 110],
  [360, 40], [400, 40], [400, 170], [470, 170], [470, 100], [540, 100],
  [540, 190], [610, 190], [610, 70], [660, 70], [660, 150], [730, 150],
  [730, 30], [780, 30], [780, 200], [850, 200], [850, 120], [920, 120],
  [920, 200],
];

/** Experience — neon cyberpunk skyline. */
export default function CyberCityTheme() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${SKY} 0%, #241040 55%, #4a1250 85%, #7a1a45 100%)`,
        }}
      />

      <div className="absolute bottom-24 left-0 flex drift-slow opacity-90">
        <SilhouetteRidge width={LAYER_WIDTH} height={220} color={BUILDING_BACK} points={backRidge} />
      </div>

      <div className="absolute bottom-16 left-0 flex drift-med">
        <ClusterRow
          width={LAYER_WIDTH}
          height={240}
          step={70}
          renderCluster={(i, x) => {
            const h = 90 + ((i * 37) % 110);
            const y = 240 - h;
            const winColor = i % 2 === 0 ? NEON_CYAN : NEON_MAGENTA;
            const windows = [];
            for (let wy = y + 10; wy < 230; wy += 16) {
              for (let wx = x + 6; wx < x + 46; wx += 14) {
                if ((wx + wy) % 3 !== 0) {
                  windows.push(
                    <rect key={`${wx}-${wy}`} x={wx} y={wy} width={5} height={7} fill={winColor} opacity={0.85} />
                  );
                }
              }
            }
            return (
              <>
                <rect x={x} y={y} width={52} height={h} fill={BUILDING_FRONT} />
                {windows}
              </>
            );
          }}
        />
        <ClusterRow
          width={LAYER_WIDTH}
          height={240}
          step={70}
          renderCluster={(i, x) => {
            const h = 90 + ((i * 37) % 110);
            const y = 240 - h;
            const winColor = i % 2 === 0 ? NEON_CYAN : NEON_MAGENTA;
            const windows = [];
            for (let wy = y + 10; wy < 230; wy += 16) {
              for (let wx = x + 6; wx < x + 46; wx += 14) {
                if ((wx + wy) % 3 !== 0) {
                  windows.push(
                    <rect key={`${wx}-${wy}`} x={wx} y={wy} width={5} height={7} fill={winColor} opacity={0.85} />
                  );
                }
              }
            }
            return (
              <>
                <rect x={x} y={y} width={52} height={h} fill={BUILDING_FRONT} />
                {windows}
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
          capColor="#150f2e"
          capHeight={6}
          step={80}
          renderTile={(_i, x) => (
            <rect x={x} y={6} width={2} height={94} fill={GRID_LINE} opacity={0.6} />
          )}
        />
        <TexturedGround
          width={LAYER_WIDTH}
          height={100}
          baseColor={GROUND}
          capColor="#150f2e"
          capHeight={6}
          step={80}
          renderTile={(_i, x) => (
            <rect x={x} y={6} width={2} height={94} fill={GRID_LINE} opacity={0.6} />
          )}
        />
      </div>

      <div className="absolute top-0 left-0 flex drift-slow opacity-90">
        <HangingAccents
          width={LAYER_WIDTH}
          height={300}
          step={220}
          renderAccent={(i, x) => {
            const color = i % 2 === 0 ? NEON_CYAN : NEON_MAGENTA;
            const len = 60 + ((i % 3) * 30);
            return (
              <>
                <rect x={x} y={0} width={3} height={len} fill={color} opacity={0.5} />
                <rect x={x - 14} y={len} width={30} height={12} fill={color} opacity={0.8} />
              </>
            );
          }}
        />
        <HangingAccents
          width={LAYER_WIDTH}
          height={300}
          step={220}
          renderAccent={(i, x) => {
            const color = i % 2 === 0 ? NEON_CYAN : NEON_MAGENTA;
            const len = 60 + ((i % 3) * 30);
            return (
              <>
                <rect x={x} y={0} width={3} height={len} fill={color} opacity={0.5} />
                <rect x={x - 14} y={len} width={30} height={12} fill={color} opacity={0.8} />
              </>
            );
          }}
        />
      </div>
    </div>
  );
}

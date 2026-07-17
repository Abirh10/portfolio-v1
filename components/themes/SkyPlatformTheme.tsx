import { SilhouetteRidge, ClusterRow, TexturedGround, HangingAccents } from "@/components/sprites/SceneKit";

const LAYER_WIDTH = 1600;
const CLOUD_FAR = "#c9e6ff";
const BLOCK_BROWN = "#8a5a30";
const BLOCK_GREEN = "#4caf50";
const GROUND_LIGHT = "#e8d590";
const GROUND_DARK = "#d4bc70";
const CLOUD_WHITE = "#ffffff";

const cloudRidge: [number, number][] = [
  [0, 220], [60, 190], [130, 195], [180, 160], [250, 165], [320, 200],
  [400, 175], [470, 140], [540, 150], [620, 195], [700, 170], [780, 205],
  [860, 180], [940, 145], [1010, 155], [1090, 200], [1170, 175], [1250, 210],
  [1330, 185], [1410, 150], [1490, 160], [1600, 195],
];

/** Projects — bright cloud-platformer sky. */
export default function SkyPlatformTheme() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, #3f8fe0 0%, #74b9f0 45%, #b8ddfa 80%, #e4f4ff 100%)" }}
      />

      <div className="absolute bottom-24 left-0 flex drift-slow opacity-90">
        <SilhouetteRidge width={LAYER_WIDTH} height={220} color={CLOUD_FAR} points={cloudRidge} />
      </div>

      <div className="absolute inset-0 flex drift-med opacity-95">
        <ClusterRow
          width={LAYER_WIDTH}
          height={400}
          step={220}
          renderCluster={(i, x) => {
            const y = 60 + ((i * 53) % 220);
            return (
              <g transform={`translate(${x}, ${y})`}>
                <rect x={0} y={16} width={70} height={24} fill={CLOUD_WHITE} opacity={0.9} />
                <rect x={16} y={0} width={40} height={16} fill={CLOUD_WHITE} opacity={0.9} />
              </g>
            );
          }}
        />
        <ClusterRow
          width={LAYER_WIDTH}
          height={400}
          step={220}
          renderCluster={(i, x) => {
            const y = 60 + ((i * 53) % 220);
            return (
              <g transform={`translate(${x}, ${y})`}>
                <rect x={0} y={16} width={70} height={24} fill={CLOUD_WHITE} opacity={0.9} />
                <rect x={16} y={0} width={40} height={16} fill={CLOUD_WHITE} opacity={0.9} />
              </g>
            );
          }}
        />
      </div>

      <div className="absolute bottom-8 left-0 flex drift-fast">
        <ClusterRow
          width={LAYER_WIDTH}
          height={140}
          step={180}
          renderCluster={(i, x) => {
            const y = 20 + ((i % 3) * 40);
            return (
              <g>
                <rect x={x} y={y} width={64} height={20} fill={BLOCK_BROWN} />
                <rect x={x} y={y} width={64} height={6} fill={BLOCK_GREEN} />
              </g>
            );
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 flex drift-fast">
        <TexturedGround
          width={LAYER_WIDTH}
          height={90}
          baseColor={GROUND_LIGHT}
          step={40}
          renderTile={(i, x) => (
            <rect x={x} y={0} width={20} height={90} fill={i % 2 === 0 ? GROUND_DARK : "transparent"} opacity={0.5} />
          )}
        />
        <TexturedGround
          width={LAYER_WIDTH}
          height={90}
          baseColor={GROUND_LIGHT}
          step={40}
          renderTile={(i, x) => (
            <rect x={x} y={0} width={20} height={90} fill={i % 2 === 0 ? GROUND_DARK : "transparent"} opacity={0.5} />
          )}
        />
      </div>

      <div className="absolute top-0 left-0 flex drift-slow opacity-80">
        <HangingAccents
          width={LAYER_WIDTH}
          height={200}
          step={300}
          renderAccent={(i, x) => (
            <g transform={`translate(${x}, ${10 + (i % 2) * 20})`}>
              <rect x={0} y={0} width={50} height={16} fill={CLOUD_WHITE} opacity={0.85} />
              <rect x={10} y={-10} width={30} height={12} fill={CLOUD_WHITE} opacity={0.85} />
            </g>
          )}
        />
      </div>
    </div>
  );
}

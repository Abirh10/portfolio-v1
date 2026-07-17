import { SilhouetteRidge, ClusterRow, TexturedGround, HangingAccents } from "@/components/sprites/SceneKit";

const LAYER_WIDTH = 1600;
const SHELF_BACK = "#3f2a1a";
const SHELF_FRONT = "#5a3d24";
const FLOOR = "#6b4a2c";
const PLANK_LINE = "#4a3018";
const LAMP_GLOW = "#f5c869";
const BOOK_COLORS = ["#8c2f2f", "#2f5f8c", "#3f7a4a", "#8a6b2f", "#6b3f8a"];

const shelfRidge: [number, number][] = Array.from({ length: 16 }, (_, i) => {
  const x = i * 100;
  return [
    [x, 60],
    [x + 100, 60],
  ] as [number, number][];
}).flat();

/** Resume — cozy amber-lit archive / library. */
export default function LibraryTheme() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #1a1410 0%, #3a2818 45%, #6b4a2c 80%, #8a6238 100%)" }} />

      <div className="absolute bottom-20 left-0 flex drift-slow opacity-90">
        <SilhouetteRidge width={LAYER_WIDTH} height={220} color={SHELF_BACK} points={shelfRidge} />
      </div>

      <div className="absolute bottom-20 left-0 flex drift-med">
        <ClusterRow
          width={LAYER_WIDTH}
          height={220}
          step={100}
          renderCluster={(i, x) => {
            const books = [];
            let bx = x + 6;
            for (let b = 0; b < 5; b++) {
              const bw = 10 + ((b + i) % 3) * 4;
              const bh = 40 + ((b + i) % 3) * 12;
              books.push(
                <rect key={b} x={bx} y={150 - bh} width={bw} height={bh} fill={BOOK_COLORS[(b + i) % BOOK_COLORS.length]} />
              );
              bx += bw + 2;
            }
            return (
              <g>
                <rect x={x} y={40} width={90} height={12} fill={SHELF_FRONT} />
                {books}
                <rect x={x} y={150} width={90} height={10} fill={SHELF_FRONT} />
              </g>
            );
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 flex drift-fast">
        <TexturedGround
          width={LAYER_WIDTH}
          height={90}
          baseColor={FLOOR}
          step={60}
          renderTile={(_i, x) => (
            <rect x={x} y={0} width={2} height={90} fill={PLANK_LINE} opacity={0.6} />
          )}
        />
        <TexturedGround
          width={LAYER_WIDTH}
          height={90}
          baseColor={FLOOR}
          step={60}
          renderTile={(_i, x) => (
            <rect x={x} y={0} width={2} height={90} fill={PLANK_LINE} opacity={0.6} />
          )}
        />
      </div>

      <div className="absolute top-0 left-0 flex drift-slow opacity-85">
        <HangingAccents
          width={LAYER_WIDTH}
          height={220}
          step={240}
          renderAccent={(_i, x) => (
            <g>
              <rect x={x} y={0} width={2} height={70} fill="#3f2a1a" />
              <polygon points={`${x - 16},70 ${x + 18},70 ${x + 10},110 ${x - 8},110`} fill={LAMP_GLOW} opacity={0.85} />
              <circle cx={x + 1} cy={90} r={30} fill={LAMP_GLOW} opacity={0.12} />
            </g>
          )}
        />
      </div>
    </div>
  );
}

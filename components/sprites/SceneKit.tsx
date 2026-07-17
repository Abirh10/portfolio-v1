import type { ReactNode } from "react";

/** Generic jagged/wave silhouette ridge, tiled horizontally. Used for any back-layer skyline. */
export function SilhouetteRidge({
  width = 1600,
  height = 260,
  color,
  points,
}: {
  width?: number;
  height?: number;
  color: string;
  /** Ridge control points as [x, y] pairs, y measured from the top. */
  points: [number, number][];
}) {
  const ridge: [number, number][] = [[0, height], ...points, [width, height]];
  const repeated = ridge
    .concat(ridge.map(([x, y]): [number, number] => [x + width, y]))
    .map(([x, y]) => `${x},${y}`)
    .join(" L ");
  return (
    <svg
      viewBox={`0 0 ${width * 2} ${height}`}
      width={width * 2}
      height={height}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d={`M ${repeated} Z`} fill={color} />
    </svg>
  );
}

/** Generic repeated mid-layer decoration row (trees, buildings, huts, whatever the caller draws). */
export function ClusterRow({
  width = 1600,
  height = 260,
  step = 100,
  startX = -40,
  renderCluster,
}: {
  width?: number;
  height?: number;
  step?: number;
  startX?: number;
  renderCluster: (index: number, x: number, height: number) => ReactNode;
}) {
  const items: ReactNode[] = [];
  for (let x = startX, i = 0; x < width; x += step, i += 1) {
    items.push(<g key={x}>{renderCluster(i, x, height)}</g>);
  }
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {items}
    </svg>
  );
}

/** Generic textured ground strip: base fill + cap strip + repeated tile motif. */
export function TexturedGround({
  width = 1600,
  height = 110,
  baseColor,
  capColor,
  capHeight = 14,
  step = 22,
  renderTile,
}: {
  width?: number;
  height?: number;
  baseColor: string;
  capColor?: string;
  capHeight?: number;
  step?: number;
  renderTile?: (index: number, x: number) => ReactNode;
}) {
  const tiles: ReactNode[] = [];
  if (renderTile) {
    for (let x = 0, i = 0; x < width; x += step, i += 1) {
      tiles.push(<g key={x}>{renderTile(i, x)}</g>);
    }
  }
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x={0} y={0} width={width} height={height} fill={baseColor} />
      {capColor && <rect x={0} y={0} width={width} height={capHeight} fill={capColor} />}
      {tiles}
    </svg>
  );
}

/** Generic foreground layer of repeated hanging/framing accents (vines, cables, banners, chains). */
export function HangingAccents({
  width = 1600,
  height = 340,
  step = 260,
  startX = 60,
  renderAccent,
}: {
  width?: number;
  height?: number;
  step?: number;
  startX?: number;
  renderAccent: (index: number, x: number) => ReactNode;
}) {
  const items: ReactNode[] = [];
  for (let x = startX, i = 0; x < width; x += step, i += 1) {
    items.push(<g key={x}>{renderAccent(i, x)}</g>);
  }
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {items}
    </svg>
  );
}

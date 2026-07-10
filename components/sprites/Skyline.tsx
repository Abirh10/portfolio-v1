import type { ReactNode } from "react";

/** Hand-placed ridge silhouette with an ancient ruin tower breaking the skyline. */
export function FarMountains({ width = 1600, height = 260 }) {
  const ridge = [
    [0, 260], [0, 170], [90, 140], [160, 175], [230, 120], [300, 150],
    [360, 100], [420, 130], [470, 95], [500, 95], [500, 60], [540, 60],
    [540, 95], [580, 100], [650, 140], [720, 110], [790, 155], [860, 120],
    [930, 160], [1000, 130], [1070, 165], [1140, 110], [1210, 145],
    [1280, 100], [1350, 135], [1420, 105], [1490, 150], [1560, 120],
    [1600, 150], [1600, 260],
  ];
  const repeated = ridge
    .concat(ridge.map(([x, y]) => [x + width, y]))
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
      <path d={`M ${repeated} Z`} fill="var(--nes-purple)" />
    </svg>
  );
}

/** Organic overlapping canopy clusters instead of triangle trees, with trunks. */
export function JungleCanopy({ width = 1600, height = 260 }) {
  const clusters: ReactNode[] = [];
  const trunks: ReactNode[] = [];
  const step = 92;
  for (let x = -40, i = 0; x < width; x += step, i += 1) {
    const bob = (i % 4) * 10;
    const baseY = height - 40 - bob;
    const scale = 1 + ((i % 3) * 0.18);
    clusters.push(
      <g key={x} transform={`translate(${x}, ${baseY}) scale(${scale})`}>
        <circle cx={0} cy={10} r={26} fill="var(--nes-green-dark)" />
        <circle cx={30} cy={0} r={30} fill="var(--nes-green-dark)" />
        <circle cx={62} cy={14} r={24} fill="var(--nes-green-dark)" />
        <circle cx={30} cy={-16} r={20} fill="var(--nes-teal)" />
      </g>
    );
    trunks.push(
      <rect
        key={`t${x}`}
        x={x + 26}
        y={baseY + 10}
        width={8}
        height={height - (baseY + 10)}
        fill="var(--nes-brown-dark)"
      />
    );
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
      {trunks}
      {clusters}
    </svg>
  );
}

/** Textured jungle floor: soil, grass tufts, scattered rocks. */
export function GroundStrip({ width = 1600, height = 110 }) {
  const tufts: ReactNode[] = [];
  const rocks: ReactNode[] = [];
  const step = 22;
  for (let x = 0, i = 0; x < width; x += step, i += 1) {
    const h = 10 + ((i % 3) * 5);
    tufts.push(
      <polygon
        key={x}
        points={`${x},${h} ${x + 5},0 ${x + 11},${h}`}
        fill="var(--nes-olive)"
      />
    );
    tufts.push(
      <polygon
        key={`b${x}`}
        points={`${x + 11},${h} ${x + 17},2 ${x + 22},${h}`}
        fill="var(--nes-green)"
      />
    );
    if (i % 5 === 0) {
      rocks.push(
        <ellipse
          key={`r${x}`}
          cx={x + 6}
          cy={h + 22}
          rx={9}
          ry={5}
          fill="var(--nes-gray-dark)"
        />
      );
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
      <rect x={0} y={0} width={width} height={height} fill="var(--nes-brown)" />
      <rect x={0} y={0} width={width} height={14} fill="var(--nes-brown-dark)" />
      {rocks}
      <g transform="translate(0, -2)">{tufts}</g>
    </svg>
  );
}

/** Foreground hanging vines/leaves overlay, closest layer for depth framing. */
export function VineOverlay({ width = 1600, height = 340 }) {
  const vines: ReactNode[] = [];
  const step = 260;
  for (let x = 60, i = 0; x < width; x += step, i += 1) {
    const len = 90 + ((i % 3) * 50);
    vines.push(
      <g key={x}>
        <rect x={x} y={0} width={6} height={len} fill="var(--nes-vine)" />
        <circle cx={x + 3} cy={len} r={14} fill="var(--nes-green-dark)" />
        <circle cx={x + 18} cy={len - 10} r={10} fill="var(--nes-green-dark)" />
        <circle cx={x - 12} cy={len - 6} r={10} fill="var(--nes-green-dark)" />
      </g>
    );
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
      {vines}
    </svg>
  );
}

/** Simple drifting pixel clouds. */
export function Clouds({ width = 1600, height = 200 }) {
  const puffs: ReactNode[] = [];
  const step = 340;
  for (let x = 40, i = 0; x < width; x += step, i += 1) {
    const y = 30 + ((i % 3) * 40);
    puffs.push(
      <g key={x} opacity={0.8}>
        <rect x={x} y={y} width={60} height={14} fill="var(--nes-cloud)" />
        <rect x={x + 16} y={y - 10} width={40} height={12} fill="var(--nes-cloud)" />
        <rect x={x + 50} y={y + 2} width={36} height={10} fill="var(--nes-cloud)" />
      </g>
    );
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
      {puffs}
    </svg>
  );
}

/** Blocky pixel-ringed setting sun. */
export function Sun() {
  return (
    <svg
      viewBox="0 0 120 120"
      width={120}
      height={120}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect x={10} y={10} width={100} height={100} fill="var(--nes-sun)" opacity={0.55} />
      <rect x={22} y={22} width={76} height={76} fill="var(--nes-sun)" />
      <rect x={36} y={36} width={48} height={48} fill="var(--nes-sun-core)" />
    </svg>
  );
}

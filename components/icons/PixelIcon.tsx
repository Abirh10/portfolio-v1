const SHAPES: Record<string, number[][]> = {
  about: [
    [2, 0, 4, 1],
    [1, 1, 6, 1],
    [1, 2, 1, 6],
    [7, 2, 1, 6],
    [2, 2, 4, 4],
    [1, 7, 6, 1],
    [3, 8, 2, 1],
  ],
  experience: [
    [0, 6, 8, 1],
    [1, 4, 1, 2],
    [3, 2, 1, 4],
    [5, 3, 1, 3],
    [7, 1, 1, 5],
  ],
  volunteering: [
    [3, 0, 2, 1],
    [1, 1, 6, 1],
    [0, 2, 8, 2],
    [1, 4, 6, 1],
    [2, 5, 4, 1],
    [3, 6, 2, 2],
  ],
  projects: [
    [0, 1, 8, 1],
    [0, 1, 1, 7],
    [7, 1, 1, 7],
    [0, 7, 8, 1],
    [2, 3, 1, 3],
    [4, 3, 1, 3],
  ],
  skills: [
    [3, 0, 2, 8],
    [0, 3, 8, 2],
  ],
  dashboard: [
    [0, 0, 3, 3],
    [5, 0, 3, 3],
    [0, 5, 3, 3],
    [5, 5, 3, 3],
  ],
  contact: [
    [0, 1, 8, 6],
    [0, 1, 1, 1],
    [7, 1, 1, 1],
    [1, 2, 1, 1],
    [6, 2, 1, 1],
    [2, 3, 4, 1],
  ],
  resume: [
    [1, 0, 6, 8],
    [2, 2, 4, 1],
    [2, 4, 4, 1],
    [2, 6, 3, 1],
  ],
};

export default function PixelIcon({ name, size = 24 }: { name: string; size?: number }) {
  const shape = SHAPES[name] ?? SHAPES.projects;
  return (
    <svg
      viewBox="0 0 8 8"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {shape.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="currentColor" />
      ))}
    </svg>
  );
}

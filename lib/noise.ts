// Shared 2D value-noise/fbm field, used to generate the grainy "atmospheric"
// texture that runs through the site (dithered background in v2, soft duotone
// header art in v3). Deterministic hash-based noise — no dependency needed.

function hash(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

export function valueNoise(x: number, y: number) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = smoothstep(x - x0);
  const fy = smoothstep(y - y0);
  const a = hash(x0, y0);
  const b = hash(x0 + 1, y0);
  const c = hash(x0, y0 + 1);
  const d = hash(x0 + 1, y0 + 1);
  const top = a + (b - a) * fx;
  const bottom = c + (d - c) * fx;
  return top + (bottom - top) * fy;
}

export function fbm(x: number, y: number, seed = 0) {
  let value = 0;
  let amplitude = 0.6;
  let frequency = 1;
  for (let i = 0; i < 4; i++) {
    value += amplitude * valueNoise(x * frequency + seed, y * frequency + seed * 0.7);
    frequency *= 2;
    amplitude *= 0.5;
  }
  return value;
}

export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const bigint = parseInt(full, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

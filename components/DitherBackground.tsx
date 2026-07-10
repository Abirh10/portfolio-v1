"use client";

import { useEffect, useRef } from "react";

// 8x8 Bayer ordered-dither matrix, normalized to 0..1 thresholds.
const BAYER_8X8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
].map((row) => row.map((v) => v / 64));

function hash(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function valueNoise(x: number, y: number) {
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

function fbm(x: number, y: number) {
  let value = 0;
  let amplitude = 0.6;
  let frequency = 1;
  for (let i = 0; i < 4; i++) {
    value += amplitude * valueNoise(x * frequency, y * frequency);
    frequency *= 2;
    amplitude *= 0.5;
  }
  return value;
}

const GRID_HEIGHT = 108;
const FRAME_INTERVAL = 1000 / 12;

export default function DitherBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let gridWidth = GRID_HEIGHT;
    let imageData: ImageData;

    function resize() {
      if (!canvas) return;
      const aspect = window.innerWidth / window.innerHeight;
      gridWidth = Math.round(GRID_HEIGHT * aspect);
      canvas.width = gridWidth;
      canvas.height = GRID_HEIGHT;
      imageData = ctx!.createImageData(gridWidth, GRID_HEIGHT);
    }
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let lastFrame = 0;
    let t = 0;

    function draw(now: number) {
      if (!reduceMotion) raf = requestAnimationFrame(draw);
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;

      const styles = getComputedStyle(document.documentElement);
      const fg = styles.getPropertyValue("--dither-b").trim() || "#000000";
      const bg = styles.getPropertyValue("--dither-a").trim() || "#ffffff";
      const [fgR, fgG, fgB] = hexToRgb(fg);
      const [bgR, bgG, bgB] = hexToRgb(bg);

      const data = imageData.data;
      const scale = 0.016;
      for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < gridWidth; x++) {
          const n = fbm(x * scale + t * 0.6, y * scale + t * 0.4);
          const threshold = BAYER_8X8[y % 8][x % 8];
          const on = n > threshold * 0.5 + 0.28;
          const idx = (y * gridWidth + x) * 4;
          if (on) {
            data[idx] = fgR;
            data[idx + 1] = fgG;
            data[idx + 2] = fgB;
          } else {
            data[idx] = bgR;
            data[idx + 1] = bgG;
            data[idx + 2] = bgB;
          }
          data[idx + 3] = 255;
        }
      }
      ctx!.putImageData(imageData, 0, 0);
      t += 0.006;
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const bigint = parseInt(
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean,
    16
  );
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

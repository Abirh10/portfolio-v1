"use client";

import { useEffect, useRef } from "react";
import { fbm, hexToRgb } from "@/lib/noise";

const GRID_HEIGHT = 64;
const FRAME_INTERVAL = 1000 / 10;

type AtmosphericArtProps = {
  colorA: string;
  colorB: string;
  seed?: number;
  className?: string;
};

export default function AtmosphericArt({
  colorA,
  colorB,
  seed = 0,
  className,
}: AtmosphericArtProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const [aR, aG, aB] = hexToRgb(colorA);
    const [bR, bG, bB] = hexToRgb(colorB);

    let gridWidth = GRID_HEIGHT;
    let imageData: ImageData;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const aspect = rect.width > 0 ? rect.width / rect.height : 2;
      gridWidth = Math.max(1, Math.round(GRID_HEIGHT * aspect));
      canvas.width = gridWidth;
      canvas.height = GRID_HEIGHT;
      imageData = ctx!.createImageData(gridWidth, GRID_HEIGHT);
    }
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let raf = 0;
    let lastFrame = 0;
    let t = seed * 100;

    function draw(now: number) {
      if (!reduceMotion) raf = requestAnimationFrame(draw);
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;

      const data = imageData.data;
      const scale = 0.05;
      for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < gridWidth; x++) {
          const n = fbm(x * scale + t * 0.4, y * scale + t * 0.25, seed);
          const grain = (Math.random() - 0.5) * 0.08;
          const mix = Math.min(1, Math.max(0, n * 0.85 + grain));
          const idx = (y * gridWidth + x) * 4;
          data[idx] = aR + (bR - aR) * mix;
          data[idx + 1] = aG + (bG - aG) * mix;
          data[idx + 2] = aB + (bB - aB) * mix;
          data[idx + 3] = 255;
        }
      }
      ctx!.putImageData(imageData, 0, 0);
      t += 0.004;
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [colorA, colorB, seed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

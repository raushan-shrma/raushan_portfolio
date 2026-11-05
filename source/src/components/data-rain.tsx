import { useEffect, useRef } from "react";

export interface DataRainProps {
  count?: number;
  flowSpeed?: number;
  obstacleRadius?: number;
  autopilot?: boolean;
  fullscreen?: boolean;
  palette?: string[];
}

type Stream = {
  x: number;
  y: number;
  speed: number;
  length: number;
  hue: number;
  size: number;
};

const glyphs = "010101101011001010110010";

export default function DataRain({
  count = 72,
  flowSpeed = 0.62,
  obstacleRadius = 0,
  autopilot = true,
  fullscreen = false,
  palette = ["#a78bfa", "#818cf8", "#38bdf8"],
}: DataRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const streams: Stream[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let animationId = 0;
    const pointer = { x: -1000, y: -1000 };
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      streams.length = 0;
      const spacing = width / Math.max(1, count);
      for (let index = 0; index < count; index += 1) {
        streams.push({
          x: (index + Math.random()) * spacing,
          y: Math.random() * height,
          speed: (0.32 + Math.random() * 0.68) * flowSpeed,
          length: 3 + Math.floor(Math.random() * 9),
          hue: index % Math.max(1, palette.length),
          size: 10 + Math.random() * 3,
        });
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };
    const clearPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const draw = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      context.font = "500 12px monospace";

      for (const stream of streams) {
        const drift = autopilot ? Math.sin(frame * 0.004 + stream.x) * 0.14 : 0;
        const speed = stream.speed + drift;
        let visible = true;
        if (obstacleRadius > 0) {
          const dx = stream.x - pointer.x;
          const dy = stream.y - pointer.y;
          visible = dx * dx + dy * dy > obstacleRadius * obstacleRadius;
        }

        if (visible) {
          const color = palette[stream.hue] ?? palette[0] ?? "#a78bfa";
          for (let glyphIndex = 0; glyphIndex < stream.length; glyphIndex += 1) {
            const y = stream.y - glyphIndex * stream.size;
            if (y < 0 || y > height) continue;
            context.globalAlpha = (1 - glyphIndex / stream.length) * 0.17;
            context.fillStyle = color;
            context.fillText(
              glyphs[Math.floor((frame / 6 + glyphIndex + stream.x) % glyphs.length)] ?? "0",
              stream.x,
              y,
            );
          }
        }

        stream.y += speed;
        if (stream.y - stream.length * stream.size > height) {
          stream.y = -Math.random() * height * 0.35;
          stream.x = Math.random() * width;
        }
      }

      context.globalAlpha = 1;
      if (!reducedMotion) animationId = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", clearPointer);
    draw();

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", clearPointer);
    };
  }, [autopilot, count, flowSpeed, obstacleRadius, palette]);

  return (
    <div
      className={fullscreen ? "dr-canvas-wrap dr-fullscreen" : "dr-canvas-wrap"}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="dr-canvas" />
      <div className="dr-vignette" />
    </div>
  );
}

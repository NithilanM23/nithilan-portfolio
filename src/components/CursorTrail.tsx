import { useEffect, useRef, useCallback } from "react";

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  timestamp: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const isMovingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const now = Date.now();
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw trail points
    trailRef.current = trailRef.current.filter((point) => {
      const age = now - point.timestamp;
      const maxAge = 150; // Fade within 150ms
      
      if (age > maxAge) return false;

      const opacity = Math.max(0, 1 - age / maxAge) * 0.25;
      const size = Math.max(1, 4 * (1 - age / maxAge));

      // Draw soft glowing point
      const gradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, size * 3
      );
      gradient.addColorStop(0, `hsla(24, 95%, 53%, ${opacity})`);
      gradient.addColorStop(0.4, `hsla(24, 95%, 53%, ${opacity * 0.5})`);
      gradient.addColorStop(1, `hsla(24, 95%, 53%, 0)`);

      ctx.beginPath();
      ctx.arc(point.x, point.y, size * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      return true;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only add points if mouse moved enough (reduces density)
      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 8) { // Minimum distance between points
        trailRef.current.push({
          x,
          y,
          opacity: 1,
          timestamp: Date.now(),
        });

        // Limit trail length for performance
        if (trailRef.current.length > 20) {
          trailRef.current.shift();
        }

        lastPosRef.current = { x, y };
      }

      isMovingRef.current = true;

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set moving to false after cursor stops
      timeoutRef.current = setTimeout(() => {
        isMovingRef.current = false;
      }, 50);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default CursorTrail;

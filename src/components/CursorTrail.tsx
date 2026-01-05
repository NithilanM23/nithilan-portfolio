import { useEffect, useRef, useCallback } from "react";

interface TrailPoint {
  x: number;
  y: number;
  size: number;
  timestamp: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>(0);
  const lastPosRef = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const now = Date.now();
    
    // Clear with slight fade for smoother trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw trail points from oldest to newest
    trailRef.current = trailRef.current.filter((point, index) => {
      const age = now - point.timestamp;
      const maxAge = 120; // Very fast fade ~120ms
      
      if (age > maxAge) return false;

      // Eased opacity falloff for glassy feel
      const lifeProgress = age / maxAge;
      const easedProgress = 1 - Math.pow(1 - lifeProgress, 2);
      const baseOpacity = 0.12 * (1 - easedProgress);
      
      // Size shrinks as it fades
      const size = point.size * (1 - easedProgress * 0.6);

      // Create multi-layer soft glow for glassy effect
      // Outer glow - very soft and diffuse
      const outerGradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, size * 4
      );
      outerGradient.addColorStop(0, `hsla(30, 80%, 70%, ${baseOpacity * 0.3})`);
      outerGradient.addColorStop(0.5, `hsla(25, 90%, 60%, ${baseOpacity * 0.15})`);
      outerGradient.addColorStop(1, `hsla(20, 100%, 50%, 0)`);

      ctx.beginPath();
      ctx.arc(point.x, point.y, size * 4, 0, Math.PI * 2);
      ctx.fillStyle = outerGradient;
      ctx.fill();

      // Inner core - brighter, smaller
      const innerGradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, size * 1.5
      );
      innerGradient.addColorStop(0, `hsla(35, 100%, 85%, ${baseOpacity * 0.8})`);
      innerGradient.addColorStop(0.4, `hsla(28, 95%, 65%, ${baseOpacity * 0.4})`);
      innerGradient.addColorStop(1, `hsla(24, 90%, 55%, 0)`);

      ctx.beginPath();
      ctx.arc(point.x, point.y, size * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = innerGradient;
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
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = parent.offsetWidth * dpr;
        canvas.height = parent.offsetHeight * dpr;
        canvas.style.width = `${parent.offsetWidth}px`;
        canvas.style.height = `${parent.offsetHeight}px`;
        
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.scale(dpr, dpr);
        }
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate velocity for dynamic sizing
      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only add points with minimum spacing
      if (distance > 6) {
        // Size varies slightly with speed for organic feel
        const speed = Math.min(distance, 40);
        const size = 2 + (speed / 40) * 2;

        trailRef.current.push({
          x,
          y,
          size,
          timestamp: Date.now(),
        });

        // Keep trail short for performance
        if (trailRef.current.length > 15) {
          trailRef.current.shift();
        }

        lastPosRef.current = { x, y };
      }
    };

    // Use parent element for mouse tracking
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
    }
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

return (
  <canvas
    ref={canvasRef}
    className="absolute inset-0 pointer-events-none z-20"
    aria-hidden="true"
  />
);

};

export default CursorTrail;

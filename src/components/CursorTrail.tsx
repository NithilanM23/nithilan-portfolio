import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.width = '3px';
      particle.style.height = '3px';
      particle.style.background = 'rgba(255, 69, 0, 0.6)';
      particle.style.borderRadius = '50%';
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '1000';
      document.body.appendChild(particle);

      // Animate particle
      particle.style.transition = 'all 1s ease-out';
      setTimeout(() => {
        particle.style.transform = 'scale(0)';
        particle.style.opacity = '0';
      }, 10);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorTrail;

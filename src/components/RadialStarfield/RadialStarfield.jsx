import { useEffect, useRef } from 'react';
import './RadialStarfield.css';

function RadialStarfield({ originX = 0.55, originY = 0.42 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;

    const getStarCount = () => (window.innerWidth < 768 ? 80 : 140);

    class Star {
      reset(initial = false) {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = initial
          ? Math.random() * Math.max(width, height) * 0.65
          : Math.random() * 12;
        this.speed = 0.12 + Math.random() * 0.35;
        this.layer = 0.4 + Math.random() * 0.6;
        this.radius = Math.random() < 0.2 ? 2 + Math.random() * 1.2 : 0.8 + Math.random() * 1;
        this.baseOpacity = 0.22 + Math.random() * 0.45;
        this.twinkle = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 0.01 + Math.random() * 0.02;
        this.isAccent = Math.random() < 0.42;
      }

      constructor(initial = false) {
        this.reset(initial);
      }

      update() {
        this.distance += this.speed * this.layer;
        this.twinkle += this.twinkleSpeed;

        const maxDist = Math.max(width, height) * 0.9;
        if (this.distance > maxDist) this.reset();
      }

      draw() {
        const x = centerX + Math.cos(this.angle) * this.distance;
        const y = centerY + Math.sin(this.angle) * this.distance;

        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;

        const maxDim = Math.max(width, height);
        const fadeStart = maxDim * 0.62;
        const edgeFade =
          this.distance > fadeStart
            ? Math.max(0, 1 - (this.distance - fadeStart) / (maxDim * 0.38))
            : 1;
        const twinkleAlpha = 0.8 + Math.sin(this.twinkle) * 0.2;
        const alpha = this.baseOpacity * edgeFade * twinkleAlpha;

        if (alpha <= 0.02) return;

        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);

        if (this.isAccent) {
          ctx.fillStyle = `rgba(196, 181, 253, ${alpha})`;
          if (this.radius > 1.6) {
            ctx.shadowBlur = 14;
            ctx.shadowColor = `rgba(167, 139, 250, ${alpha * 0.7})`;
          }
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
          if (this.radius > 1.6) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(255, 255, 255, ${alpha * 0.4})`;
          }
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const drawCenterGlow = () => {
      const glowRadius = Math.min(width, height) * 0.45;
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        glowRadius
      );
      gradient.addColorStop(0, 'rgba(167, 139, 250, 0.12)');
      gradient.addColorStop(0.45, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(167, 139, 250, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
      centerX = width * originX;
      centerY = height * originY;
    };

    const initStars = () => {
      stars = Array.from({ length: getStarCount() }, () => new Star(true));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawCenterGlow();
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      initStars();
    };

    resize();
    initStars();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [originX, originY]);

  return (
    <canvas
      ref={canvasRef}
      className="radial-starfield"
      aria-hidden="true"
    />
  );
}

export default RadialStarfield;

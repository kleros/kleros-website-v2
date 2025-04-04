"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuration
    const config = {
      particleCount: 80,
      particleRadius: { min: 2, max: 4 },
      particleSpeed: { min: 0.2, max: 0.5 },
      connectionDistance: 150,
      mouseRadius: 150,
    };

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); // Reinitialize particles when canvas size changes
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from(
        { length: config.particleCount },
        () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * config.particleSpeed.max,
          vy: (Math.random() - 0.5) * config.particleSpeed.max,
          radius:
            Math.random() *
              (config.particleRadius.max - config.particleRadius.min) +
            config.particleRadius.min,
        }),
      );
    };

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw connections
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectionDistance) {
            const opacity = 1 - distance / config.connectionDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(151, 71, 255, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const mouseDistance = Math.sqrt(dx * dx + dy * dy);

        if (mouseDistance < config.mouseRadius) {
          const force =
            (config.mouseRadius - mouseDistance) / config.mouseRadius;
          particle.vx += (dx / mouseDistance) * force * 0.02;
          particle.vy += (dy / mouseDistance) * force * 0.02;
        }

        // Speed limit
        const speed = Math.sqrt(
          particle.vx * particle.vx + particle.vy * particle.vy,
        );
        if (speed > config.particleSpeed.max) {
          particle.vx = (particle.vx / speed) * config.particleSpeed.max;
          particle.vy = (particle.vy / speed) * config.particleSpeed.max;
        }

        // Draw particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2,
        );
        gradient.addColorStop(0, "rgba(151, 71, 255, 0.8)");
        gradient.addColorStop(1, "rgba(151, 71, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    // Initialize
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-transparent"
      aria-hidden="true"
    />
  );
}

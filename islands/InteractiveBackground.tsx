import { useEffect, useRef } from "preact/hooks";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  boostX: number;
  boostY: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.boostX = 0;
    this.boostY = 0;
  }

  update(canvasWidth: number, canvasHeight: number) {
    // Dampen the boost
    this.boostX *= 0.95;
    this.boostY *= 0.95;

    // If boost is very small, reset to 0
    if (Math.abs(this.boostX) < 0.01) this.boostX = 0;
    if (Math.abs(this.boostY) < 0.01) this.boostY = 0;

    const totalSpeedX = this.speedX + this.boostX;
    const totalSpeedY = this.speedY + this.boostY;

    this.x += totalSpeedX;
    this.y += totalSpeedY;

    if (this.x > canvasWidth || this.x < 0) {
      this.speedX *= -1;
      this.boostX *= -1;
    }
    if (this.y > canvasHeight || this.y < 0) {
      this.speedY *= -1;
      this.boostY *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    globalThis.addEventListener("mousemove", handleMouseMove);

    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      const radius = 150;
      const maxForce = 5;

      particles.current.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius && distance > 0) {
          const force = (1 - distance / radius) * maxForce;
          p.boostX += (dx / distance) * force;
          p.boostY += (dy / distance) * force;
        }
      });
    };
    globalThis.addEventListener("click", handleClick);

    const createParticles = () => {
      const particleCount = (canvas.width * canvas.height) / 10000;
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        particles.current.push(new Particle(canvas.width, canvas.height));
      }
    };

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      time += 0.01;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      // Create particles if they don't exist
      if (particles.current.length === 0) {
        createParticles();
      }

      // Draw gradient
      const xOffset = Math.sin(time) * canvas.width * 0.5;
      const angle = (mousePos.current.y / canvas.height) * Math.PI / 4 -
        Math.PI / 8;

      const x1 = -canvas.width + xOffset;
      const y1 = 0;
      const x2 = canvas.width + xOffset;
      const y2 = 0;

      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);

      gradient.addColorStop(0, "#ec4899");
      gradient.addColorStop(0.5, "#06b6d4");
      gradient.addColorStop(1, "#ec4899");

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      ctx.fillStyle = gradient;
      ctx.fillRect(
        -canvas.width,
        -canvas.height,
        canvas.width * 3,
        canvas.height * 3,
      );
      ctx.restore();

      // Draw particles and connections
      ctx.globalAlpha = 0.6;
      for (let i = 0; i < particles.current.length; i++) {
        particles.current[i].update(canvas.width, canvas.height);
        particles.current[i].draw(ctx);

        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      createParticles();
    };

    globalThis.addEventListener("resize", handleResize);
    draw();

    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
      globalThis.removeEventListener("resize", handleResize);
      globalThis.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      class="absolute top-0 left-0 w-full h-full -z-10"
    >
    </canvas>
  );
}

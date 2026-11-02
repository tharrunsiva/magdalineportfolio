import React, { useEffect, useRef } from 'react';

/**
 * Background3D Component
 * Monochromatic high-fashion 3D animated background featuring:
 * - 3D Hypercube (Tesseract) with rotating inner/outer matrix & connecting struts
 * - 3D Floating Diamond Octahedron
 * - 3D Neural/Data Constellation particle mesh with depth perspective & dynamic line connections
 * - Interactive 3D mouse parallax tilt with smooth lerp easing
 * - Scroll-linked vertical perspective drift
 * - Monochromatic luxury aesthetic matching the portfolio design system
 */
const Background3D = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle high DPI displays for crisp rendering
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    updateSize();

    // ------------------------------------------------------------------------
    // 3D Math Utilities
    // ------------------------------------------------------------------------
    const rotateX = (p, angle) => {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
    };

    const rotateY = (p, angle) => {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
    };

    const rotateZ = (p, angle) => {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      return { x: p.x * c - p.y * s, y: p.x * s + p.y * c, z: p.z };
    };

    const rotateXYZ = (p, rx, ry, rz) => {
      let r = rotateX(p, rx);
      r = rotateY(r, ry);
      return rotateZ(r, rz);
    };

    const project = (p, originX, originY, fov = 480, cameraDist = 580) => {
      const factor = fov / (cameraDist + p.z);
      return {
        x: originX + p.x * factor,
        y: originY + p.y * factor,
        scale: factor,
        z: p.z,
      };
    };

    // ------------------------------------------------------------------------
    // Geometry 1: 3D Hypercube / Tesseract (Bottom Left)
    // ------------------------------------------------------------------------
    const tesseractOuter = [];
    const tesseractInner = [];
    for (let x of [-1, 1]) {
      for (let y of [-1, 1]) {
        for (let z of [-1, 1]) {
          tesseractOuter.push({ x, y, z });
          tesseractInner.push({ x: x * 0.52, y: y * 0.52, z: z * 0.52 });
        }
      }
    }

    const cubeEdges = [];
    for (let i = 0; i < 8; i++) {
      for (let j = i + 1; j < 8; j++) {
        const p1 = tesseractOuter[i];
        const p2 = tesseractOuter[j];
        const diff =
          Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) + Math.abs(p1.z - p2.z);
        if (diff === 2) {
          cubeEdges.push([i, j]);
        }
      }
    }

    // ------------------------------------------------------------------------
    // Geometry 3: 3D Octahedron / Diamond (Floating Mid Right)
    // ------------------------------------------------------------------------
    const octVertices = [
      { x: 1, y: 0, z: 0 },
      { x: -1, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 },
      { x: 0, y: -1, z: 0 },
      { x: 0, y: 0, z: 1 },
      { x: 0, y: 0, z: -1 },
    ];
    const octEdges = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 4], [4, 3], [3, 5], [5, 2],
    ];

    // ------------------------------------------------------------------------
    // Geometry 4: 3D Data Constellation Particles Field
    // ------------------------------------------------------------------------
    const PARTICLE_COUNT = 48;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1100,
        y: (Math.random() - 0.5) * 850,
        z: (Math.random() - 0.5) * 500,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.35,
        baseSize: 1.5 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // ------------------------------------------------------------------------
    // Interactive Listeners: Mouse Parallax & Scroll
    // ------------------------------------------------------------------------
    const handleMouseMove = (e) => {
      const normalizedX = (e.clientX / width - 0.5) * 2;
      const normalizedY = (e.clientY / height - 0.5) * 2;
      mouseRef.current.targetX = normalizedX * 0.35; // Target pitch/yaw in radians
      mouseRef.current.targetY = normalizedY * 0.35;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY || window.pageYOffset;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSize);

    // ------------------------------------------------------------------------
    // Animation Loop
    // ------------------------------------------------------------------------
    let time = 0;

    const render = () => {
      time += 0.012;

      // Mouse smooth interpolation (lerp)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      const scrollFactor = (scrollRef.current * 0.0004);

      ctx.clearRect(0, 0, width, height);

      // Camera parallax tilts
      const camRotX = mouse.y * 0.4 + scrollFactor * 0.2;
      const camRotY = mouse.x * 0.5;

      // ----------------------------------------------------------------------
      // 1. RENDER 3D DATA CONSTELLATION NETWORK
      // ----------------------------------------------------------------------
      const projectedParticles = [];
      const fieldOriginX = width * 0.5;
      const fieldOriginY = height * 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around bounds
        if (p.x < -600) p.x = 600;
        if (p.x > 600) p.x = -600;
        if (p.y < -450) p.y = 450;
        if (p.y > 450) p.y = -450;
        if (p.z < -260) p.z = 260;
        if (p.z > 260) p.z = -260;

        const rotated = rotateXYZ(p, camRotX * 0.4, camRotY * 0.4, time * 0.03);
        const proj = project(rotated, fieldOriginX, fieldOriginY, 460, 600);
        projectedParticles.push({ ...proj, baseSize: p.baseSize, phase: p.phase });
      }

      // Draw lines between near particles
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const depthAlpha = Math.max(0.04, Math.min(0.24, (1 - dist / 110) * 0.22));
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(30, 30, 30, ${depthAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      for (let i = 0; i < projectedParticles.length; i++) {
        const p = projectedParticles[i];
        const pulse = Math.sin(time * 2 + p.phase) * 0.35 + 0.65;
        const size = Math.max(1, p.baseSize * p.scale * pulse);
        const nodeAlpha = Math.max(0.12, Math.min(0.45, 0.28 * p.scale));

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(25, 25, 25, ${nodeAlpha})`;
        ctx.fill();
      }

      // ----------------------------------------------------------------------
      // 2. RENDER 3D HYPERCUBE / TESSERACT (Bottom-Left / Mid-Page)
      // ----------------------------------------------------------------------
      const tOriginX = width > 992 ? width * 0.16 : width * 0.22;
      const tOriginY = height > 700 ? height * 0.74 : height * 0.8;
      const tRadius = width > 1200 ? 75 : 60;

      const tRotX = time * 0.38 + camRotX;
      const tRotY = time * 0.52 + camRotY;
      const tRotZ = time * 0.18;

      const projTesseractOuter = tesseractOuter.map((v) => {
        const p = { x: v.x * tRadius, y: v.y * tRadius, z: v.z * tRadius };
        return project(rotateXYZ(p, tRotX, tRotY, tRotZ), tOriginX, tOriginY, 500, 600);
      });

      const projTesseractInner = tesseractInner.map((v) => {
        const p = { x: v.x * tRadius, y: v.y * tRadius, z: v.z * tRadius };
        return project(rotateXYZ(p, tRotX, tRotY, tRotZ), tOriginX, tOriginY, 500, 600);
      });

      // Draw outer cube edges
      for (let [i, j] of cubeEdges) {
        const p1 = projTesseractOuter[i];
        const p2 = projTesseractOuter[j];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(30, 30, 30, 0.20)';
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }

      // Draw inner cube edges
      for (let [i, j] of cubeEdges) {
        const p1 = projTesseractInner[i];
        const p2 = projTesseractInner[j];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(40, 40, 40, 0.30)';
        ctx.lineWidth = 1.3;
        ctx.stroke();
      }

      // Draw connecting struts (outer vertex -> inner vertex)
      for (let i = 0; i < 8; i++) {
        const p1 = projTesseractOuter[i];
        const p2 = projTesseractInner[i];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(30, 30, 30, 0.16)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // Subtle inner core point
      ctx.beginPath();
      ctx.arc(tOriginX, tOriginY, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(20, 20, 20, 0.4)';
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className="background-3d-container" aria-hidden="true">
      <canvas ref={canvasRef} className="background-3d-canvas" />

      {/* Floating 3D Geometric Badges & Subtle Specular Shimmer */}
      <div className="bg-3d-accent-element bg-3d-accent-bottom-left">
        <div className="bg-3d-cube-stage">
          <div className="bg-3d-cube-ring ring-alt"></div>
        </div>
      </div>
    </div>
  );
};

export default Background3D;


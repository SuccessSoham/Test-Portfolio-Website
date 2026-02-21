"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HudBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shapesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!shapesRef.current) return;

        // Create random floating geometric shapes
        const shapes = Array.from({ length: 20 }).map((_, i) => {
            const shape = document.createElement('div');
            shape.classList.add('absolute', 'border', 'border-hud-cyan/15');

            const type = i % 3;
            if (type === 0) {
                // Circle
                shape.classList.add('rounded-full');
            } else if (type === 1) {
                // Diamond
                shape.classList.add('rotate-45');
            } else {
                // Hexagon (simulated with clip-path)
                shape.style.clipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
            }

            const size = Math.random() * 150 + 30;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${Math.random() * 100}vw`;
            shape.style.top = `${Math.random() * 100}vh`;

            shapesRef.current?.appendChild(shape);
            return shape;
        });

        // Animate shapes
        shapes.forEach(shape => {
            gsap.to(shape, {
                x: "random(-150, 150)",
                y: "random(-150, 150)",
                rotation: "random(-180, 180)",
                duration: "random(15, 25)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Mouse movement parallax effect (multi-layered)
        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = (e.clientX / window.innerWidth - 0.5);
            const mouseY = (e.clientY / window.innerHeight - 0.5);

            shapes.forEach((shape, i) => {
                const depth = 1 + (i % 5) * 0.5;
                gsap.to(shape, {
                    x: `+=${mouseX * 50 * depth}`,
                    y: `+=${mouseY * 50 * depth}`,
                    duration: 1.5,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (shapesRef.current) {
                shapesRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-hud-base" ref={containerRef}>
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #00E5FF 1px, transparent 1px),
            linear-gradient(to bottom, #00E5FF 1px, transparent 1px)
          `,
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-hud-cyan/10 rounded-full blur-[100px] animate-pulse-glow" />

            {/* Floating Geometric Shapes via GSAP */}
            <div ref={shapesRef} className="absolute inset-0 opacity-30" />

            {/* Vertical Scan Line */}
            <div className="absolute inset-0 h-[2px] w-full bg-hud-cyan/50 shadow-[0_0_10px_rgba(0,229,255,1)] animate-scan-line" />
        </div>
    );
}

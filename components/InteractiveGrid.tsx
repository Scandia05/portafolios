"use client";

import React, { useEffect, useRef } from "react";

const InteractiveGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Configuración
        const PARTICLE_COUNT = 150; // Cantidad de puntos (ajusta según gusto)
        const CONNECT_DISTANCE = 100; // Distancia para conectar líneas (opcional)
        const MOUSE_RADIUS = 150; // Radio de efecto del mouse

        // Estado del mouse
        let mouse = { x: -1000, y: -1000 };

        // Clase Partícula
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;
            color: string;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.baseX = this.x;
                this.baseY = this.y;
                this.size = Math.random() * 2 + 1; // Tamaño aleatorio entre 1 y 3
                this.density = (Math.random() * 30) + 1; // Cuánto le afecta el mouse

                // Velocidad de movimiento aleatorio (flotación)
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;

                // Color base oscuro
                this.color = `rgba(71, 85, 105, ${Math.random() * 0.5 + 0.1})`; // Slate-600 con opacidad variable
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // 1. Movimiento base (flotación)
                this.baseX += this.vx;
                this.baseY += this.vy;

                // Rebote en bordes para el movimiento base
                if (this.baseX < 0 || this.baseX > canvas!.width) this.vx *= -1;
                if (this.baseY < 0 || this.baseY > canvas!.height) this.vy *= -1;

                // 2. Interacción con Mouse
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // Vector de fuerza
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;

                // Cuanto más cerca, más fuerza de repulsión (efecto desorden)
                let maxDistance = MOUSE_RADIUS;
                let force = (maxDistance - distance) / maxDistance;

                // Si el mouse está cerca...
                if (distance < MOUSE_RADIUS) {
                    // Aumentar tamaño (Zoom)
                    const zoomFactor = 1 + force * 1.5; // Crece hasta 2.5x
                    const currentSize = (Math.random() * 2 + 1) * zoomFactor;

                    // Repulsión: Se alejan del mouse
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;

                    // Efecto visual: Cambiar color y tamaño
                    ctx!.beginPath();
                    ctx!.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
                    // Color Azul brillante/Cyan cuando está activo
                    ctx!.fillStyle = `rgba(96, 165, 250, ${force + 0.2})`;
                    ctx!.fill();
                } else {
                    // Retorno elástico a su posición original (baseX, baseY)
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10; // Velocidad de retorno
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                    // Dibujo normal
                    this.draw();
                }
            }
        }

        const init = () => {
            particles = [];
            // Ajustar canvas al tamaño de ventana
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Crear muchas partículas
            // Ajusta la densidad según el tamaño de pantalla
            const numberOfParticles = (canvas.width * canvas.height) / 3000;

            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }

            // Opcional: Dibujar líneas entre puntos cercanos (Efecto Constelación)
            // Si quieres que se vea MÁS limpio, puedes comentar este bloque 'connect'
            connect();

            animationFrameId = requestAnimationFrame(animate);
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = dx * dx + dy * dy;

                    if (distance < (canvas.width / 7) * (canvas.height / 7) / 8) { // Rango de conexión
                        opacityValue = 1 - (distance / 15000);
                        // Solo dibujar líneas si están cerca del mouse para no ensuciar todo
                        // O dibujar líneas muy tenues siempre
                        if (opacityValue > 0) {
                            ctx.strokeStyle = `rgba(148, 163, 184, ${opacityValue * 0.1})`; // Líneas muy sutiles
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[a].x, particles[a].y);
                            ctx.lineTo(particles[b].x, particles[b].y);
                            ctx.stroke();
                        }
                    }
                }
            }
        }

        // Listeners
        init();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        // Resetear mouse al salir para que no queden puntos activados
        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-slate-950">
            {/* Canvas principal */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 block w-full h-full"
            />

            {/* Vignette para profundidad */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)] pointer-events-none"></div>
        </div>
    );
};

export default InteractiveGrid;
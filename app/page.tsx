"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import InteractiveGrid from "@/components/InteractiveGrid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <Projects key="projects" />,
    <div key="stack" className="w-full h-full overflow-y-auto no-scrollbar allow-scroll">
      <div className="min-h-full flex flex-col justify-center items-center py-20 px-4">
        <Stack />
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  ];

  useEffect(() => {
    // --- TOUCH SWIPE LOGIC ---
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return;
      touchEndY = e.changedTouches[0].clientY;
      handleSwipe(e.target as HTMLElement);
    };

    const handleSwipe = (target: HTMLElement) => {
      const minSwipeDistance = 50;
      const distance = touchStartY - touchEndY;
      const isSwipeUp = distance > minSwipeDistance;
      const isSwipeDown = distance < -minSwipeDistance;

      if (!isSwipeUp && !isSwipeDown) return;

      // Check for scrollable containers (Projects, etc.)
      const scrollableContainer = target.closest('.allow-scroll');
      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;
        const isAtTop = scrollTop <= 0;

        if (isSwipeUp && !isAtBottom) return;
        if (isSwipeDown && !isAtTop) return;
      }

      if (isSwipeUp && activeIndex < sections.length - 1) {
        changeSection(activeIndex + 1);
      } else if (isSwipeDown && activeIndex > 0) {
        changeSection(activeIndex - 1);
      }
    };

    // --- WHEEL LOGIC (Existing) ---
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;

      const isScrollingDown = e.deltaY > 0;
      const scrollableContainer = (e.target as HTMLElement).closest('.allow-scroll');

      if (scrollableContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;
        const isAtTop = scrollTop <= 0;

        if (isScrollingDown && !isAtBottom) return;
        if (!isScrollingDown && !isAtTop) return;
      }

      if (isScrollingDown && activeIndex < sections.length - 1) {
        changeSection(activeIndex + 1);
      } else if (!isScrollingDown && activeIndex > 0) {
        changeSection(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isAnimating, sections.length]);

  const changeSection = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);

    // Ajustado a 1200ms para permitir la voltereta completa del Hipercubo
    setTimeout(() => setIsAnimating(false), 1200);
  };

  // --- VARIANTE: HIPERCUBO CUÁNTICO (Versión Pulida & Premium) ---
  const variants: Variants = {
    initial: {
      opacity: 0,
      rotateX: 180,
      rotateY: 90,
      z: -2000,             // Profundidad extrema (viene desde más lejos)
      scale: 0.1,           // Nace casi como una partícula
      filter: "blur(20px)"  // Motion Blur al entrar
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0,
      scale: 1,
      filter: "blur(0px)",  // Se enfoca perfectamente al detenerse

      // Física pesada. Más 'damping' (freno) y más 'mass' (peso)
      transition: {
        duration: 1.2,
        type: "spring",
        damping: 25,    // Menos rebote de gelatina, freno más seco
        stiffness: 90,  // Fuerza magnética
        mass: 1.2       // Se siente más pesado
      }
    },
    exit: {
      opacity: 0,
      rotateX: -180,
      rotateY: -90,
      z: -2000,
      scale: 0.1,
      filter: "blur(20px)", // Se desenfoca al salir disparado

      // La salida es más rápida (0.8s) para que no se cruce torpemente con la nueva pantalla
      transition: { duration: 0.8, ease: "easeIn" }
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-slate-200 selection:bg-blue-500/30 font-sans">
      <InteractiveGrid />
      <Navbar activeIndex={activeIndex} setActiveIndex={changeSection} />

      {/* Perspectiva configurada a 1200px para la cámara 3D */}
      <main
        className="relative z-10 w-full h-full flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ transformStyle: "preserve-3d" }}
            // Fondo ligeramente oscurecido a /40 para resaltar el cruce en el aire
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-950/40"
          >
            {sections[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
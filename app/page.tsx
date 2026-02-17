"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InteractiveGrid from "@/components/InteractiveGrid";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Footer from "@/components/sections/Footer";

import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { cubeVariants, mobileVariants } from "@/data/animations";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detectar móvil

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

  const handleSetActiveIndex = (index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    // Reducir tiempo de bloqueo en móvil ya que la animacion es más corta
    setTimeout(() => setIsAnimating(false), isMobile ? 600 : 1200);
  };

  useScrollNavigation({
    activeIndex,
    setActiveIndex: handleSetActiveIndex,
    isAnimating,
    setIsAnimating,
    sectionsLength: sections.length
  });

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-slate-200 selection:bg-blue-500/30 font-sans">
      <InteractiveGrid />
      <Navbar activeIndex={activeIndex} setActiveIndex={handleSetActiveIndex} />

      {/* Perspectiva solo si NO es móvil para ahorrar recursos */}
      <main
        className="relative z-10 w-full h-full flex items-center justify-center"
        style={isMobile ? {} : { perspective: "1200px" }}
      >
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            variants={isMobile ? mobileVariants : cubeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={isMobile ? {} : { transformStyle: "preserve-3d" }}
            // Fondo oscuro solo en desktop para el efecto 3D
            className={`absolute inset-0 w-full h-full flex items-center justify-center ${!isMobile && "bg-slate-950/40"}`}
          >
            {sections[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
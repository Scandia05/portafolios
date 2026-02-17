"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Layers } from "lucide-react"; // Importamos iconos

interface NavbarProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const Navbar = ({ activeIndex, setActiveIndex }: NavbarProps) => {
    const links = [
        { name: "Home", icon: <Home size={20} /> },
        { name: "Sobre mí", icon: <User size={20} /> },
        { name: "Proyectos", icon: <Briefcase size={20} /> },
        { name: "Stack", icon: <Layers size={20} /> },
    ];

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none md:left-6 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:translate-x-0"
        >
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-2 md:p-3 shadow-2xl shadow-blue-900/20 pointer-events-auto flex flex-row md:flex-col gap-2 md:gap-4">
                {links.map((link, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <button
                            key={link.name}
                            onClick={() => setActiveIndex(index)}
                            className="relative group p-3 rounded-xl flex items-center justify-center transition-all duration-300"
                            title={link.name}
                        >
                            {/* Fondo animado activo */}
                            {isActive && (
                                <motion.span
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            {/* Icono */}
                            <div className={`${isActive ? "text-white" : "text-slate-400 group-hover:text-blue-300"}`}>
                                {link.icon}
                            </div>

                            {/* Tooltip Hover (Hidden on mobile) */}
                            <span className="hidden md:block absolute left-14 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-700">
                                {link.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
};

export default Navbar;
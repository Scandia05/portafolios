import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../data/navigation";

interface DesktopNavbarProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export const DesktopNavbar = ({ activeIndex, setActiveIndex }: DesktopNavbarProps) => {
    return (
        <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none hidden md:block"
        >
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-2xl shadow-blue-900/20 pointer-events-auto flex flex-col gap-4">
                {navLinks.map((link, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <button
                            key={link.name}
                            onClick={() => setActiveIndex(index)}
                            className="relative group p-3 rounded-xl flex items-center justify-center transition-all duration-300"
                            title={link.name}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="activeNavDesktop"
                                    className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <div className={`${isActive ? "text-white" : "text-slate-400 group-hover:text-blue-300"}`}>
                                {link.icon}
                            </div>

                            {/* Tooltip Hover */}
                            <span className="absolute left-14 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-700">
                                {link.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
};

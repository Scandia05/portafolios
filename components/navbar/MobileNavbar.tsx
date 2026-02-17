import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../data/navigation";

interface MobileNavbarProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export const MobileNavbar = ({ activeIndex, setActiveIndex }: MobileNavbarProps) => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none md:hidden block"
        >
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-2 shadow-2xl shadow-blue-900/20 pointer-events-auto flex flex-row gap-2">
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
                                    layoutId="activeNavMobile"
                                    className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <div className={`${isActive ? "text-white" : "text-slate-400"}`}>
                                {link.icon}
                            </div>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
};

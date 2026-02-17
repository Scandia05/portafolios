"use client";

import React from 'react';
import { motion } from 'framer-motion';
// 1. Importamos la mayoría de iconos desde Simple Icons
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiPhp,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiFlask,
    SiPostgresql,
    SiMysql,
    SiDocker,
    SiGit,
    SiQiskit
} from "react-icons/si";

// 2. Importamos Java desde FontAwesome (Fa) para evitar el error de build
import { FaJava } from "react-icons/fa";

const Stack = () => {
    // Lista ordenada por categoría: Lenguajes -> Frameworks -> BD -> Otros
    const technologies = [
        // --- 1. LENGUAJES (Fundamentos) ---
        { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E] hover:shadow-[0_0_20px_#F7DF1E]" },
        { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6] hover:shadow-[0_0_20px_#3178C6]" },
        { name: "Python", icon: SiPython, color: "hover:text-[#3776AB] hover:shadow-[0_0_20px_#3776AB]" },
        { name: "Java", icon: FaJava, color: "hover:text-[#ED8B00] hover:shadow-[0_0_20px_#ED8B00]" },
        { name: "PHP", icon: SiPhp, color: "hover:text-[#777BB4] hover:shadow-[0_0_20px_#777BB4]" },

        // --- 2. FRAMEWORKS & LIBRERÍAS (Especialización) ---
        { name: "React", icon: SiReact, color: "hover:text-[#61DAFB] hover:shadow-[0_0_20px_#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white hover:shadow-[0_0_20px_#ffffff]" },
        { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#339933] hover:shadow-[0_0_20px_#339933]" },
        { name: "Flask", icon: SiFlask, color: "hover:text-white hover:shadow-[0_0_20px_#ffffff]" },

        // --- 3. BASES DE DATOS (Persistencia) ---
        { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1] hover:shadow-[0_0_20px_#4169E1]" },
        { name: "MySQL", icon: SiMysql, color: "hover:text-[#4479A1] hover:shadow-[0_0_20px_#4479A1]" },

        // --- 4. HERRAMIENTAS & OTROS (DevOps / Quantum) ---
        { name: "Docker", icon: SiDocker, color: "hover:text-[#2496ED] hover:shadow-[0_0_20px_#2496ED]" },
        { name: "Git", icon: SiGit, color: "hover:text-[#F05032] hover:shadow-[0_0_20px_#F05032]" },
        { name: "Quantum", icon: SiQiskit, color: "hover:text-[#6929C4] hover:shadow-[0_0_20px_#6929C4]" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="stack" className="relative z-10 w-full max-w-5xl mx-auto">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Tecnologías
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Herramientas y lenguajes que utilizo para construir soluciones escalables, desde aplicaciones web robustas hasta experimentación cuántica.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center"
                >
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col items-center gap-3 group cursor-default"
                        >
                            <div
                                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 flex items-center justify-center text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-slate-600 ${tech.color}`}
                            >
                                <tech.icon size={36} />
                            </div>
                            <span className="text-slate-400 text-sm font-medium group-hover:text-slate-200 transition-colors">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stack;
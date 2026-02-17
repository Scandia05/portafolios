"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react';

const SocialButton = ({ href, icon, label, primary = false }: { href: string, icon: React.ReactElement<{ size?: number | string }>, label: string, primary?: boolean }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${primary
            ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30'
            : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white'
            }`}
    >
        {React.cloneElement(icon, { size: 18 })}
        {label}
    </a>
);

const Hero = () => (
    <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-medium mb-6">
                Disponible para trabajar
            </span>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-white mb-6">
                Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Sebastián</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Desarrollador Full-Stack & Investigador en Computación Cuántica.
                Creo soluciones digitales complejas y escalables.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
                <SocialButton href="https://github.com/Scandia05" icon={<Github />} label="GitHub" />
                <SocialButton href="https://www.linkedin.com/in/sebastián-candia-cabezas-7a068332b" icon={<Linkedin />} label="LinkedIn" />
                <SocialButton href="mailto:sebastian.candia.201416@gmail.com" icon={<Mail />} label="Email" />
                <SocialButton href="#" icon={<FileText />} label="CV" primary />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 animate-bounce"
        >
            <ChevronDown className="text-slate-600" size={32} />
        </motion.div>
    </section>
);

export default Hero;
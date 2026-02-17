"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { socialLinks } from '../../data/social';
import { SocialButton } from '../ui/SocialButton';

import { Section } from '../ui/Section';

const Hero = () => (
    <Section id="home" centered className="min-h-screen text-center px-4">
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
                {socialLinks.map((link, index) => (
                    <SocialButton key={index} {...link} />
                ))}
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
    </Section>
);

export default Hero;
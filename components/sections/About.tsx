"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aboutCapabilities } from '../../data/about';
import { SkillCard } from '../ui/SkillCard';
import { Section } from '../ui/Section';

const About = () => (
    <Section id="about" centered className="h-full">
        {/* Scrollable Container */}
        <div className="h-full w-full overflow-y-auto no-scrollbar py-20 px-4 allow-scroll">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-center">

                    {/* 1. FOTO: Estilo "Circular Glow" */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative group w-48 h-48 sm:w-64 sm:h-64 mx-auto"
                    >
                        {/* Glow animado pulsante */}
                        <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-full opacity-50 blur-xl animate-pulse group-hover:opacity-80 transition duration-500"></div>

                        {/* Contenedor principal de la imagen */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 shadow-2xl">
                            <img
                                src="/profiles.jpg"
                                alt="Sebastián Profile"
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* 2. CONTENIDO: Texto + Grid de Skills */}
                    <div className="space-y-8 text-center md:text-left">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold text-white mb-6"
                            >
                                Sobre mí
                            </motion.h2>

                            <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
                                <p>
                                    Soy <strong className="text-slate-200">Ingeniero Civil Informático</strong> titulado por la Universidad de La Frontera. Mi enfoque profesional se sitúa en la intersección entre la ingeniería de software robusta y la investigación científica avanzada.
                                </p>
                                <p>
                                    Actualmente, modernizo ecosistemas financieros en <strong className="text-blue-400">Tecnobox</strong> integrando pasarelas de pago, y simultáneamente opero hardware de vanguardia como el computador cuántico <strong className="text-cyan-400">SpinQ Gemini Mini</strong> en la UFRO.
                                </p>
                            </div>
                        </div>

                        {/* Nueva Sección: "Capabilities" (Skills blandas en Grid) */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">
                                Core Capabilities
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {aboutCapabilities.map((cap, index) => (
                                    <SkillCard key={index} {...cap} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Section>
);

export default About;
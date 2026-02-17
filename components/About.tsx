"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Rocket, MessageSquare, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import profilePic from '../public/profiles.jpg';

// Componente de "Spec Card" para las habilidades blandas
const SkillCard = ({ icon, text, delay }: { icon: any, text: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-slate-800/80 hover:border-blue-500/30 transition-all duration-300 group text-center"
    >
        <div className="text-slate-500 mb-2 group-hover:text-blue-400 transition-colors">
            {React.cloneElement(icon, { size: 24 })}
        </div>
        <span className="text-slate-300 text-sm font-medium leading-tight">{text}</span>
    </motion.div>
);

const About = () => (
    <section id="about" className="relative z-10 h-full w-full flex flex-col justify-center items-center">
        {/* Scrollable Container */}
        <div className="h-full w-full overflow-y-auto no-scrollbar py-20 px-4 allow-scroll">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-center">

                    {/* 1. FOTO: Estilo "Digital ID" */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group max-w-sm mx-auto md:max-w-none"
                    >
                        {/* Marco decorativo trasero con gradiente */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl opacity-30 group-hover:opacity-60 blur-lg transition-opacity duration-500"></div>

                        {/* Contenedor principal de la imagen */}
                        <div className="relative aspect-[3/4] md:aspect-square w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center">
                            {/* IMAGEN DE DEBUG */}
                            <img
                                src="/profiles.jpg"
                                alt="Debug Profile"
                                className="w-full h-full object-cover"
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
                                {/* Iconos de Lucide alineados con tus skills del CV */}
                                <SkillCard icon={<Brain />} text="Pensamiento Analítico" delay={0.1} />
                                <SkillCard icon={<Users />} text="Liderazgo Técnico" delay={0.2} />
                                <SkillCard icon={<Rocket />} text="Innovación & I+D" delay={0.3} />
                                <SkillCard icon={<Lightbulb />} text="Resolución Compleja" delay={0.4} />
                                <SkillCard icon={<MessageSquare />} text="Comunicación Clara" delay={0.5} />
                                <SkillCard icon={<RefreshCw />} text="Adaptabilidad" delay={0.6} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default About;
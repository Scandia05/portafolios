"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { stackTechnologies } from '../../data/stack';

import { Section } from '../ui/Section';

const Stack = () => {

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
        <Section id="stack" className="max-w-5xl mx-auto">
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
                    {stackTechnologies.map((tech, idx) => (
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
        </Section>
    );
};

export default Stack;
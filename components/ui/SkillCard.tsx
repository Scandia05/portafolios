import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
    icon: React.ReactElement<{ size?: number | string }>;
    text: string;
    delay: number;
}

export const SkillCard = ({ icon, text, delay }: SkillCardProps) => (
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

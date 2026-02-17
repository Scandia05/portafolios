import React from 'react';

interface SocialButtonProps {
    href: string;
    icon: React.ReactElement<{ size?: number | string }>;
    label: string;
    primary?: boolean;
}

export const SocialButton = ({ href, icon, label, primary = false }: SocialButtonProps) => (
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

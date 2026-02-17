import React from 'react';

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    centered?: boolean;
}

export const Section = ({ id, className = "", children, centered = false }: SectionProps) => {
    return (
        <section
            id={id}
            className={`relative z-10 w-full ${centered ? 'flex flex-col justify-center items-center' : ''} ${className}`}
        >
            {children}
        </section>
    );
};

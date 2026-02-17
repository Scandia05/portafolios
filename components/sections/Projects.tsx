import React from 'react';
import { Reveal } from '../Reveal';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

import { Section } from '../ui/Section';

const Projects = () => {
    return (
        <Section id="projects" centered className="h-screen">

            {/* --- CAMBIOS IMPORTANTES AQUÍ ---
                1. Cambié 'max-h-screen' por 'h-full' para asegurar que el contenedor ocupe todo el espacio disponible.
                2. AGREGUÉ 'allow-scroll': Esta es la clase mágica que el archivo page.tsx busca para no saltar de sección.
            */}
            <div className="h-full overflow-y-auto no-scrollbar py-20 px-4 allow-scroll">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-20">
                        <Reveal width="100%">
                            <div className="flex flex-col items-center">
                                <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">Portafolio Seleccionado</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Proyectos Destacados</h2>
                                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                                    Soluciones técnicas aplicadas en industria fintech e investigación científica.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid gap-8 pb-10">
                        {projectsData.map((project, idx) => (
                            <ProjectCard key={idx} project={project} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
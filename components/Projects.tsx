"use client";

import React from 'react';
import { Layers, Github, ExternalLink, Server, Cpu, Globe, Lock, BrainCircuit } from 'lucide-react';
import { Reveal } from "./Reveal";

const Projects = () => {
    const projects = [
        {
            title: "Hybrid Quantum Architecture",
            company: "Tesis de Ingeniería",
            role: "Investigador & Autor",
            desc: "Arquitectura autoadaptativa para sistemas híbridos en la era NISQ. Integra ciclos MAPE-K y Líneas de Producto de Software (LPSD) para orquestar backends cuánticos (Qiskit/Cirq) dinámicamente usando un Agente Inteligente basado en LLM.",
            tags: ["Python", "Qiskit", "Cirq", "MAPE-K", "LLM Agent"],
            icon: <BrainCircuit className="text-purple-400" size={40} />,
            color: "group-hover:shadow-purple-500/20 group-hover:border-purple-500/50",
            isPrivate: false,
            repos: [
                { name: "Repositorio Tesis", url: "https://github.com/Scandia05/Scandia05-ML-FMweb-K-Quantum" }
            ]
        },
        {
            title: "Quantum Remote Lab",
            company: "UFRO Research",
            role: "Tech Lead",
            desc: "Plataforma web para la operación remota del computador cuántico SpinQ Gemini Mini. Gestión de colas de tareas, visualización de resultados y administración de usuarios en tiempo real.",
            tags: ["React", "Flask", "PostgreSQL", "Spinqit"],
            icon: <Cpu className="text-cyan-400" size={40} />,
            color: "group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/50",
            isPrivate: false,
            repos: [
                { name: "Frontend", url: "https://github.com/QC-DCI/qc-dci-frontend" },
                { name: "Backend", url: "https://github.com/QC-DCI/qc-dci-backend" },
                { name: "QSimplify", url: "https://github.com/QC-DCI/qc-dci-qsimplify" }
            ]
        },
        {
            title: "ERP & Fintech Integration",
            company: "Tecnobox",
            role: "Full-Stack Dev",
            desc: "Modernización de infraestructura financiera integrando pasarelas de pago (Mercado Pago, Tuu) y optimizando consultas SQL para reportes críticos. Mantenimiento evolutivo y QA.",
            tags: ["PHP", "SQL", "API Rest", "Mercado Pago"],
            icon: <Server className="text-blue-400" size={40} />,
            color: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/50",
            isPrivate: true,
            repos: []
        },
        {
            title: "VariaMos Real-Time",
            company: "R&D Project",
            role: "Software Architect",
            desc: "Arquitectura de colaboración en tiempo real para la herramienta de modelado VariaMos. Implementación de WebSockets para sincronización de diagramas entre múltiples usuarios.",
            tags: ["Socket.io", "Docker", "JavaScript", "Architecture"],
            icon: <Globe className="text-indigo-400" size={40} />,
            color: "group-hover:shadow-indigo-500/20 group-hover:border-indigo-500/50",
            isPrivate: false,
            repos: [
                { name: "Collab Core", url: "https://github.com/or-aguayo/vms_collaborative_work" },
                { name: "VariaMos PLE", url: "https://github.com/Scandia05/VariaMosPLE" }
            ]
        }
    ];

    return (
        <section id="projects" className="relative z-10 h-screen w-full flex flex-col justify-center">

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
                        {projects.map((project, idx) => (
                            <Reveal key={idx} width="100%" delay={idx * 0.1}>
                                <div className={`group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${project.color}`}>

                                    <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                                        {/* Columna Izquierda: Icono */}
                                        <div className="bg-slate-950/50 p-10 flex flex-col items-center justify-center border-r border-slate-800/50 relative overflow-hidden">
                                            <div className="relative z-10 p-6 bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                                {project.icon}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>

                                        {/* Columna Derecha: Contenido */}
                                        <div className="p-6 md:p-10 flex flex-col justify-center">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-slate-400 text-sm font-mono">{project.company}</span>
                                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                                        <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">{project.role}</span>
                                                    </div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">
                                                        {project.title}
                                                    </h3>
                                                </div>

                                                {/* Botones de Repositorios */}
                                                <div className="flex flex-wrap gap-2 justify-end">
                                                    {project.isPrivate ? (
                                                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50 text-slate-400 text-xs font-medium cursor-not-allowed">
                                                            <Lock size={14} />
                                                            <span>Código Privado</span>
                                                        </div>
                                                    ) : (
                                                        project.repos.map((repo, rIdx) => (
                                                            <a
                                                                key={rIdx}
                                                                href={repo.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-all text-xs font-medium border border-slate-700 hover:border-blue-500/50"
                                                                title={`Ver repositorio ${repo.name}`}
                                                            >
                                                                <Github size={14} />
                                                                {repo.name}
                                                            </a>
                                                        ))
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-slate-700 pl-4">
                                                {project.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-3 mt-auto">
                                                {project.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="px-4 py-1.5 bg-slate-800/50 text-slate-300 text-xs font-medium rounded-full border border-slate-700/50 group-hover:border-blue-500/30 group-hover:bg-blue-900/10 transition-colors">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
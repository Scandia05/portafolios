import React from 'react';
import { Reveal } from "../Reveal";
import { Github, Lock } from 'lucide-react';

interface ProjectRepo {
    name: string;
    url: string;
}

interface ProjectData {
    title: string;
    company: string;
    role: string;
    desc: string;
    tags: string[];
    icon: React.ReactNode;
    color: string;
    isPrivate: boolean;
    repos: ProjectRepo[];
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <Reveal width="100%" delay={index * 0.1}>
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
    );
};

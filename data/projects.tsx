import { BrainCircuit, Cpu, Server, Globe } from 'lucide-react';

export const projectsData = [
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

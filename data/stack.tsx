import {
    SiJavascript, SiTypescript, SiPython, SiPhp, SiReact, SiNextdotjs,
    SiNodedotjs, SiFlask, SiPostgresql, SiMysql, SiDocker, SiGit, SiQiskit
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const stackTechnologies = [
    // --- 1. LENGUAJES (Fundamentos) ---
    { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E] hover:shadow-[0_0_20px_#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6] hover:shadow-[0_0_20px_#3178C6]" },
    { name: "Python", icon: SiPython, color: "hover:text-[#3776AB] hover:shadow-[0_0_20px_#3776AB]" },
    { name: "Java", icon: FaJava, color: "hover:text-[#ED8B00] hover:shadow-[0_0_20px_#ED8B00]" },
    { name: "PHP", icon: SiPhp, color: "hover:text-[#777BB4] hover:shadow-[0_0_20px_#777BB4]" },

    // --- 2. FRAMEWORKS & LIBRERÍAS (Especialización) ---
    { name: "React", icon: SiReact, color: "hover:text-[#61DAFB] hover:shadow-[0_0_20px_#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white hover:shadow-[0_0_20px_#ffffff]" },
    { name: "Node.js", icon: SiNodedotjs, color: "hover:text-[#339933] hover:shadow-[0_0_20px_#339933]" },
    { name: "Flask", icon: SiFlask, color: "hover:text-white hover:shadow-[0_0_20px_#ffffff]" },

    // --- 3. BASES DE DATOS (Persistencia) ---
    { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1] hover:shadow-[0_0_20px_#4169E1]" },
    { name: "MySQL", icon: SiMysql, color: "hover:text-[#4479A1] hover:shadow-[0_0_20px_#4479A1]" },

    // --- 4. HERRAMIENTAS & OTROS (DevOps / Quantum) ---
    { name: "Docker", icon: SiDocker, color: "hover:text-[#2496ED] hover:shadow-[0_0_20px_#2496ED]" },
    { name: "Git", icon: SiGit, color: "hover:text-[#F05032] hover:shadow-[0_0_20px_#F05032]" },
    { name: "Quantum", icon: SiQiskit, color: "hover:text-[#6929C4] hover:shadow-[0_0_20px_#6929C4]" },
];

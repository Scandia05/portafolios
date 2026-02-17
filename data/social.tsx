import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const socialLinks = [
    {
        href: "https://github.com/Scandia05",
        icon: <Github />,
        label: "GitHub",
        primary: false
    },
    {
        href: "https://www.linkedin.com/in/sebastián-candia-cabezas-7a068332b",
        icon: <Linkedin />,
        label: "LinkedIn",
        primary: false
    },
    {
        href: "mailto:sebastian.candia.201416@gmail.com",
        icon: <Mail />,
        label: "Email",
        primary: false
    },
    {
        href: "/docs/Sebastián Candia - Curriculum Vitae.pdf",
        icon: <FileText />,
        label: "CV",
        primary: true
    }
];

import { Variants } from "framer-motion";

export const cubeVariants: Variants = {
    initial: {
        opacity: 0,
        rotateX: 180,
        rotateY: 90,
        z: -2000,             // Profundidad extrema
        scale: 0.1,           // Nace casi como una partícula
        filter: "blur(20px)"  // Motion Blur al entrar
    },
    animate: {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        z: 0,
        scale: 1,
        filter: "blur(0px)",  // Se enfoca perfectamente al detenerse

        // Física pesada. Más 'damping' (freno) y más 'mass' (peso)
        transition: {
            duration: 1.2,
            type: "spring",
            damping: 25,    // Menos rebote de gelatina, freno más seco
            stiffness: 90,  // Fuerza magnética
            mass: 1.2       // Se siente más pesado
        }
    },
    exit: {
        opacity: 0,
        rotateX: -180,
        rotateY: -90,
        z: -2000,
        scale: 0.1,
        filter: "blur(20px)", // Se desenfoca al salir disparado

        // La salida es más rápida (0.8s) para que no se cruce torpemente con la nueva pantalla
        transition: { duration: 0.8, ease: "easeIn" }
    }
};

export const mobileVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

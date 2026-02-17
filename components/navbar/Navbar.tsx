import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

interface NavbarProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const Navbar = ({ activeIndex, setActiveIndex }: NavbarProps) => {
    return (
        <>
            <MobileNavbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <DesktopNavbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </>
    );
};

export default Navbar;
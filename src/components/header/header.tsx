import "./header.scss";
import { useEffect, useState, useRef } from "react";
import { type JSX } from "react";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HeaderBase from "./headerBase/headerBase";

import HeaderConnect from "./headerConnect/headerConnect";

function Header(): JSX.Element {
    const [visible, setVisible] = useState(true);
    const lastY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastY.current) {
                // scroll vers le bas
                setVisible(false);
            } else if (currentY < lastY.current) {
                // scroll vers le haut → réapparition immédiate
                setVisible(true);
            }

            lastY.current = currentY;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header
            className={`header ${visible ? "header--show" : "header--hide"}`}
        >
            {/* <HeaderConnect /> */}
            {(useLocation().pathname !== "/ressources" && <HeaderBase />) || (
                <HeaderConnect />
            )}
        </header>
    );
}

export default Header;

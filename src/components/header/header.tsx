import "./header.scss";
import { useEffect, useState, useRef } from "react";
import { type JSX } from "react";
import { Link } from "react-router-dom";

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
            <h1>SWIPE.</h1>
            <div className="navContainer">
                <nav>
                    <ul>
                        <li>
                            <Link to="">Ressources</Link>
                        </li>
                        <li>
                            <Link to="">A propos</Link>
                        </li>
                        <li>
                            <Link to="">Plans</Link>
                        </li>
                        <li>
                            <Link to="">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="" className="connexion">
                    Connexion{" "}
                    <img src="icon/arrowTopLeft.svg" alt="icon ArrowTopLeft" />
                </Link>
            </div>

            <div className="buttons">
                <button className="search">
                    <img src="icon/search.svg" alt="icon Search" />
                </button>
                <button className="menu">
                    <img
                        src="icon/menuSortInverse.svg"
                        alt="icon menuSortInverse"
                    />
                    Menu
                </button>
            </div>
        </header>
    );
}

export default Header;

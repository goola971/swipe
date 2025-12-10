import "./header.scss";
import { useEffect, useState } from "react";
import { type JSX } from "react";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
    const [visible, setVisible] = useState(true);
    const [lastY, setLastY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentY = window.scrollY;

            // Hide / Show header
            if (currentY > lastY) setVisible(false);
            if (currentY < lastY) setVisible(true);

            setLastY(currentY);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastY]);
    return (
        <header
            className={`${
                visible ? "header header--show" : "header header--hide"
            } `}
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

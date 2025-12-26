import "./headerBase.scss";
import { type JSX } from "react";
import { Link } from "react-router-dom";

function HeaderBase(): JSX.Element {
    return (
        <div className="headerBase">
            <h1 onClick={() => (window.location.href = "/")}>SWIPE.</h1>
            <div className="navContainer">
                <nav>
                    <ul>
                        <li>
                            <Link to="/ressources">Ressources</Link>
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
                <Link to="/connexion" className="connexion">
                    Connexion{" "}
                    <img src="icon/arrowTopLeft.svg" alt="icon ArrowTopLeft" />
                </Link>
            </div>

            <div className="buttons">
                <button className="search" aria-label="Rechercher">
                    <img src="icon/search.svg" alt="icon Search" />
                </button>
                <button className="menu" aria-label="Menu">
                    <img
                        src="icon/menuSortInverse.svg"
                        alt="icon menuSortInverse"
                    />
                    Menu
                </button>
            </div>
        </div>
    );
}

export default HeaderBase;

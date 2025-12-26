import "./headerConnect.scss";
import { type JSX } from "react";
import { Link } from "react-router-dom";
import Button from "../../buttons/buttons";

function HeaderConnect(): JSX.Element {
    return (
        <div className="headerConnect">
            <div className="navContainer">
                <h1 onClick={() => (window.location.href = "/")}>SWIPE.</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Mon suivi</Link>
                        </li>
                        <li>
                            <Link to="">Nos salles</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="inputContainer">
                <input
                    type="search"
                    placeholder="Que souhaitez-vous apprendre ?"
                />
                <button type="submit" aria-label="Rechercher">
                    <img src="icon/search.svg" alt="icon search" />
                </button>
            </div>
            <div className="buttons">
                <button aria-label="Rechercher" className="search">
                    <img src="icon/search.svg" alt="icon search" />
                </button>
                <button aria-label="Panier">
                    <img src="icon/cart.svg" alt="icon cart" />
                </button>
                <button aria-label="Notifications">
                    <img src="icon/bell.svg" alt="icon bell" />
                </button>
                <Button
                    texte="Mon profile"
                    variante="primary"
                    img=""
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}

export default HeaderConnect;

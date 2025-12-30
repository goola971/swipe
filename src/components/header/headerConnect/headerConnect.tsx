import "./headerConnect.scss";
import { useState, type JSX } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../buttons/buttons";

function HeaderConnect(): JSX.Element {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const submitSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const value = query.trim();

        if (!value) {
            navigate("/ressources");
            return;
        }

        navigate(`/ressources?search=${encodeURIComponent(value)}`);
    };
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
            {pathname !== "/profil" && (
                <form className="inputContainer" onSubmit={submitSearch}>
                    <input
                        type="search"
                        placeholder="Que souhaitez-vous apprendre ?"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        aria-label="Rechercher"
                        onClick={submitSearch}
                    >
                        <img src="icon/search.svg" alt="icon search" />
                    </button>
                </form>
            )}
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
                    onclick="/profil"
                />
            </div>
        </div>
    );
}

export default HeaderConnect;

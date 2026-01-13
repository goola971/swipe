import "./headerBase.scss";
import { type JSX, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HeaderBase(): JSX.Element {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Vérification de la session au montage du composant
    useEffect(() => {
        const user = sessionStorage.getItem("user");
        setIsLoggedIn(!!user);
    }, []);

    const handleLogout = () => {
        sessionStorage.clear();
        setIsLoggedIn(false);
        navigate("/connexion");
    };

    return (
        <div className="headerBase">
            <h1 onClick={() => (window.location.href = "/")}>SWIPE.</h1>
            <div className="navContainer">
                <nav>
                    <ul>
                        <li><Link to="/ressources">Ressources</Link></li>
                        <li><Link to="">A propos</Link></li>
                        <li><Link to="">Plans</Link></li>
                        <li><Link to="">Contact</Link></li>
                        <li><Link to="/profil"> Mon profil</Link></li>

                    </ul>
                </nav>

                {/* On utilise la classe "connexion" dans les deux cas pour garder le background SCSS */}
                {!isLoggedIn ? (
                    <Link to="/connexion" className="connexion">
                        Connexion
                        <img src="icon/arrowTopLeft.svg" alt="icon ArrowTopLeft" />
                    </Link>
                ) : (
                    <button 
                        onClick={handleLogout} 
                        className="connexion" 
                        style={{ border: 'none', cursor: 'pointer' }} 
                        
                    >
                        Déconnexion
                        <img 
                            src="icon/arrowTopLeft.svg" 
                            alt="icon logout" 
                            style={{ transform: "rotate(135deg)" }} 
                        />
                    </button>
                )}
            </div>

            <div className="buttons">
                <button className="search" aria-label="Rechercher">
                    <img src="icon/search.svg" alt="icon Search" />
                </button>
                <button className="menu" aria-label="Menu">
                    <img src="icon/menuSortInverse.svg" alt="icon menuSortInverse" />
                    Menu
                </button>
            </div>
        </div>
    );
}

export default HeaderBase;
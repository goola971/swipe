import "./connexion.scss";
import { type JSX, useState } from "react";
import { Link } from "react-router-dom";

function Connexion(): JSX.Element {
    const [show, setShow] = useState(true);
    const nbPages = 1;
    return (
        <section className="connexion">
            <div className="connexionContainer">
                <div className="titleContainer">
                    <button
                        className="retour"
                        onClick={() => {
                            window.location.href = "/";
                        }}
                        aria-label="Retour"
                    >
                        <img
                            src="/icon/arrowRight.svg"
                            alt="icon arrow lefts"
                        />
                        Retour
                    </button>
                    <div className="title">
                        <h2>Connexion</h2>
                        <p>
                            Accédez à vos formations, réservez vos sessions et
                            suivez votre progression depuis votre espace
                            personnel.
                        </p>
                    </div>
                </div>
                <form action="">
                    <div className="inputs">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Votre adresse email"
                        />
                        <div className="mdp">
                            <input
                                type={show ? "password" : "text"}
                                name="password"
                                id="password"
                                placeholder="Mot de passe"
                            />
                            <button
                                className="vue"
                                type="button"
                                onClick={() => setShow(!show)}
                                aria-label={
                                    show
                                        ? "Afficher le mot de passe"
                                        : "Cacher le mot de passe"
                                }
                            >
                                <img
                                    src={
                                        show
                                            ? "icon/eye.svg"
                                            : "icon/eye-closed.svg"
                                    }
                                    alt="icon eye"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="buttonConnexion">
                        <button type="submit" aria-label="Se connecter">
                            Se connecter
                        </button>
                        <p>
                            Pas encore de compte ?{" "}
                            <Link to="/inscription">S’inscrire</Link>
                        </p>
                    </div>
                    <div className="pages">
                        {Array.from({ length: nbPages }, (_, index) => (
                            <div key={index} className="page"></div>
                        ))}
                    </div>
                </form>
            </div>
            <div className="imgConnexionContainer">
                <h1>SWIPE.</h1>
                <img src="img/connexion.png" alt="image connexion" />
            </div>
        </section>
    );
}

export default Connexion;

import "./inscription.scss";
import { type JSX, useState } from "react";
import { Link } from "react-router-dom";

function Inscription(): JSX.Element {
    const [show, setShow] = useState(true);
    const nbPages = 2;
    const [page, setPage] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // logique d’envoi ici
        console.log("Formulaire envoyé");
    };

    return (
        <section className="inscription">
            <div className="inscriptionImgContainer">
                <h1>SWIPE.</h1>
                <img src="img/inscription.png" alt="" />
            </div>

            <div className="inscriptionContainer">
                <div className="titleContainer">
                    <button
                        type="button"
                        className="retour"
                        onClick={() => {
                            if (page > 1) {
                                setPage(page - 1);
                            } else {
                                window.location.href = "/";
                            }
                        }}
                        aria-label="Retour"
                    >
                        <img src="/icon/arrowRight.svg" alt="icon arrow left" />
                        Retour
                    </button>

                    <div className="title">
                        <h2>Créez votre compte</h2>
                        <p>
                            Accédez à vos formations, réservez vos sessions et
                            suivez votre progression depuis votre espace
                            personnel.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {page === 1 && (
                        <div className="inputs part1">
                            <input type="text" name="nom" placeholder="Nom" />
                            <input
                                type="text"
                                name="prenom"
                                placeholder="Prénom"
                            />
                            <input
                                type="tel"
                                name="tel"
                                placeholder="Téléphone"
                            />
                            <input type="date" name="datenaissance" />
                            <input
                                type="text"
                                name="adresse"
                                placeholder="Adresse postale"
                            />
                        </div>
                    )}

                    {page === 2 && (
                        <div className="inputs part2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre adresse email"
                            />

                            <div className="mdp">
                                <input
                                    type={show ? "password" : "text"}
                                    name="password"
                                    placeholder="Mot de passe"
                                />
                                <button
                                    type="button"
                                    className="vue"
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
                    )}

                    <div className="buttonInscription">
                        {page < nbPages ? (
                            <button
                                type="button"
                                onClick={() => setPage(page + 1)}
                                aria-label="Suivant"
                            >
                                Suivant
                            </button>
                        ) : (
                            <button type="submit" aria-label="Créer le compte">
                                Créer le compte
                            </button>
                        )}

                        <p>
                            Déjà un compte ?{" "}
                            <Link to="/connexion">Se connecter</Link>
                        </p>
                    </div>

                    <div className="pages">
                        {Array.from({ length: nbPages }, (_, index) => (
                            <div
                                key={index}
                                className={`page ${
                                    page === index + 1 ? "active" : ""
                                }`}
                            />
                        ))}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Inscription;

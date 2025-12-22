import "./connexion.scss";
import { type JSX } from "react";

function Connexion(): JSX.Element {
    return (
        <section>
            <div>
                <button className="retour">
                    <img src="" alt="" />
                    Retour
                </button>
                <div className="title">
                    <h2>Connexion</h2>
                    <p>
                        Accédez à vos formations, réservez vos sessions et
                        suivez votre progression depuis votre espace personnel.
                    </p>
                </div>
                <form action="">
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Votre adresse email"
                        />
                        <div className="mdp">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Mot de passe"
                            />
                            <button className="vue">
                                <img src="" alt="" />
                            </button>
                        </div>
                    </div>
                    <button type="submit">Se connecter</button>
                    <p>
                        Pas encore de compte ? <a href="">S’inscrire</a>
                    </p>
                </form>
            </div>
            <div>
                <h1>SWIPE.</h1>
            </div>
        </section>
    );
}

export default Connexion;

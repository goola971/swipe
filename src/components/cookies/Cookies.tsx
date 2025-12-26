import "./Cookies.scss";
import { type JSX, useState } from "react";

function Cookies(): JSX.Element {
    const [show, setShow] = useState(true);
    return (
        <>
            {show && (
                <section className="cookies">
                    {/* <button className="x" onClick={() => setShow(false)}>
                        <img src="icon/x.svg" alt="" />
                    </button> */}
                    <p>
                        Nous utilisons des cookies afin d’assurer le bon
                        fonctionnement du site, de sécuriser votre navigation et
                        d’améliorer votre expérience utilisateur.
                        <br />
                        Ces cookies nous permettent également de comprendre
                        comment le site est utilisé, d’analyser l’audience et
                        d’optimiser nos contenus et services
                    </p>
                    <div className="buttons">
                        <button aria-label="Cookies essentiels">
                            Cookies essentiels
                        </button>
                        <button aria-label="Refuser">Refuser</button>
                        <button
                            onClick={() => setShow(false)}
                            aria-label="Accepter tous les cookies"
                        >
                            Accepter tous les cookies
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}

export default Cookies;

import "./Cookies.scss";
import { type JSX, useState, useEffect } from "react";

type CookieChoice = "essential" | "refuse" | "accept";

function Cookies(): JSX.Element | null {
    const [choice, setChoice] = useState<CookieChoice | null>(() => {
        const saved = localStorage.getItem(
            "cookieChoice"
        ) as CookieChoice | null;
        if (saved) {
            console.log("cookie choice found:", saved);
        }
        return saved;
    });

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (choice) return;

        const timer = setTimeout(() => setShow(true), 3000);
        return () => clearTimeout(timer);
    }, [choice]);

    const choose = (value: CookieChoice) => {
        localStorage.setItem("cookieChoice", value);
        setChoice(value);
        setShow(false);
    };

    if (!show || choice) return null;

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
                        <button
                            aria-label="Cookies essentiels"
                            onClick={() => choose("essential")}
                        >
                            Cookies essentiels
                        </button>
                        <button
                            aria-label="Refuser"
                            onClick={() => choose("refuse")}
                        >
                            Refuser
                        </button>
                        <button
                            onClick={() => choose("accept")}
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

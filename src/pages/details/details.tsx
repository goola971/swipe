import "./details.scss";
import { type JSX } from "react";

function Details(): JSX.Element {

    const coursInclut = [
        "Certification officielle remise après validation du cours",
        "Documents et supports téléchargeables",
        "Exercices pratiques encadrés",
        "Accès aux ressources du formateur",
        "Corrections et explications détaillées",
        "Assistance après la séance (24h)",
    ];

    return (
        <section className="details">
            <div className="detailsWrapper">
                <button className="backButton" onClick={() => window.history.back()}>
                    <img src="/icon/arrowLeft.svg" alt="retour" />
                    Retour
                </button>
                <div className="detailsContent">
                    <div className="contentInner">
                        <div className="header">
                            <h2>Cours de Cybersécurité — Niveau Débutant</h2>
                            <div className="badges">
                                <span className="badge">Durée : 2 semaines</span>
                                <span className="badge">Catégorie : Cybersécurité</span>
                            </div>
                        </div>

                        <p className="intro">
                            Apprenez les bases de la cybersécurité, y compris les
                            attaques courantes, les bonnes pratiques et les outils
                            essentiels pour protéger vos systèmes.
                        </p>

                        <div className="section">
                            <h3>Description</h3>
                            <p>
                                Ce cours est destiné aux débutants et couvre les bases
                                essentielles de la cybersécurité. Vous apprendrez à
                                reconnaître les menaces courantes telles que le
                                phishing, les ransomwares, et comment mettre en place
                                des protections simples mais efficaces pour vos
                                appareils et réseaux.
                            </p>
                        </div>

                        <div className="section">
                            <h3>Avantages de ce cours</h3>
                            <p>
                                <strong>Apprentissage pratique :</strong> Cas réels,
                                démonstrations et exercices.
                            </p>
                            <p>
                                <strong>Certification incluse :</strong> Recevez un
                                certificat à la fin du cours pour valider vos
                                compétences.
                            </p>
                            <p>
                                <strong>Accès aux ressources :</strong> Documents et
                                guides pratiques après la session.
                            </p>
                        </div>

                        <div className="section">
                            <h3>Lorem ipsum dolor</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nulla vestibulum nunc et neque mollis, id ornare
                                sapien gravida. Pellentesque sollicitudin, elit
                                sollicitudin molestie ultreet, erat velit consequat
                                odio nisl fringilla sapien. Aenean ut ipsum mauris. In
                                ac feugiat mi. Morbi nec justo eu mauris posuere
                                faucibus. Ut sed tincidunt purus, vel egestas leo.
                                Aenean sed lorem venenatis, fermentum leo eu, mattis
                                lorem. Nullam velit diam, tincidunt et accumsan at,
                                tincidunt non lacus. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Fusce ac urna risus.
                                Nullam rutrum tellus non facilisis sodales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detailsSidebar">
                <div className="priceCard">
                    <div className="imageContainer">
                        <img
                            src="/img/cours/cours.png"
                            alt="Cours de Cybersécurité"
                            className="courseImage"
                        />
                    </div>

                    <div className="infoContainer">
                        <h2 className="price">
                            79,99€<span>/sem</span>
                        </h2>

                        <div className="buttons">
                            <button className="payButton" aria-label="Payer directement">
                                Payer directement
                                <img
                                    src="/icon/arrowLeft.svg"
                                    alt="arrow icon"
                                />
                            </button>
                            <button className="cartButton" aria-label="Ajouter au panier">
                                <img src="/icon/cart.svg" alt="cart icon" />
                            </button>
                        </div>

                        <div className="includes">
                            <h3>Ce cours inclut :</h3>
                            <ul>
                                {coursInclut.map((item, index) => (
                                    <li key={index}>
                                        <img src="/icon/plus.svg" alt="plus icon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;

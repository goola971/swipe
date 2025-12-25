import "./footer.scss";
import { type JSX } from "react";
import { Link } from "react-router-dom";

function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <h1>SWIPE.</h1>
            <div className="footerContainer">
                <section>
                    <h2>Fomer. Réserver. Progresser.</h2>
                    <img src="img/footer.png" alt="footer img representation" />
                </section>
                <section>
                    <article className="footerLinks">
                        <div>
                            <h3>Formations</h3>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="">Catalogue complet</Link>
                                    </li>
                                    <li>
                                        <Link to="">Réseaux & Télécoms</Link>
                                    </li>
                                    <li>
                                        <Link to="">Développement Web</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cybersécurité</Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            Administration Système
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">Design & Data</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <h3>Abonnements</h3>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="">Plans</Link>
                                    </li>
                                    <li>
                                        <Link to="">Avantages</Link>
                                    </li>
                                    <li>
                                        <Link to="">Comparatif</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <h3>A propos</h3>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="">Qui sommes-nous</Link>
                                    </li>
                                    <li>
                                        <Link to="">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="">Mentions légales</Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            Politique de confidentialité
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </article>
                    <article className="contact">
                        <div>
                            <h3>Contact</h3>
                            <p>Restez informé des nouvelles formations</p>
                        </div>
                        <div className="inputContainer">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                            />
                            <button>
                                <img src="icon/arrowLeft.svg" alt="" />
                            </button>
                        </div>
                    </article>
                    <article className="copyright">
                        <Link to="">© 2025 Swipe — Tous droits réservés.</Link>
                        <Link to="">Mentions légales</Link>
                        <Link to="">Politique de confidentialité</Link>
                    </article>
                </section>
            </div>
        </footer>
    );
}

export default Footer;

import "./index.scss";
import { type JSX } from "react";

function Index(): JSX.Element {
    return (
        <>
            <section className="hero">
                <h2>Apprenez les compétences qui comptent vraiment.</h2>
                <p>
                    Des formations professionnelles, des parcours structurés et
                    une plateforme conçue pour progresser rapidement.
                </p>
                <div className="Buttons">
                    <button>
                        Commencer maintenant{" "}
                        <img
                            src="icon/arrowTopLeft.svg"
                            alt="arrow top left icon"
                        />
                    </button>
                    <button>Voir les formations</button>
                </div>
                <div className="">
                    <img
                        src="/img/home/hero.webp"
                        alt="background"
                        className="background"
                    />
                    <div>
                        <button>Opportunité d'emploi</button>
                        <h3>Ouvrez la porte aux opportunités du numérique.</h3>
                        <p>
                            Des parcours courts et structurés pour accéder
                            rapidement aux métiers du numérique. Réseaux,
                            systèmes, développement, cybersécurité, bureautique
                            et design : des compétences concrètes, adaptées aux
                            besoins du marché et orientées opportunités
                            professionnelles.
                        </p>
                    </div>
                    <div>
                        <button>No-code (Webflow, Bubble)</button>
                        <button>Réseaux & Télécoms</button>
                        <button>Supervision réseau</button>
                        <button>VLAN</button>
                        <button>SEO / Référencement</button>
                        <button>Pentest débutant</button>
                        <button>UI Design</button>
                        <button>Routage (OSPF, BGP)</button>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Index;

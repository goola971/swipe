import "./index.scss";
import { type JSX } from "react";

function Index(): JSX.Element {
    const lstButton = [
        "No-code (Webflow, Bubble)",
        "Réseaux & Telecoms",
        "Supervision réseau",
        "VLAN",
        "SEO / Référencement",
        "Pentest débutant",
        "UI Design",
        "Routage (OSPF, BGP)",
    ];
    const directorie: string = "swipe/image";
    const lstSwipeColab = [];
    // for i in range(1, 6): directorie = directorie + str(i).svg
    for (let i = 1; i <= 6; i++) {
        lstSwipeColab.push(directorie + "0" + i + ".png");
    }

    const iconExplore: string = "icon/explore/";
    const lstExploreCategory = [
        {
            img: iconExplore + "reseaux.svg",
            title: "Réseaux & Télécoms",
        },
        {
            img: iconExplore + "cyber.svg",
            title: "Cybersécurité",
        },
        {
            img: iconExplore + "backend.svg",
            title: "Développement Backend",
        },
        {
            img: iconExplore + "pcBureau.svg",
            title: "Informatique",
        },
        {
            img: iconExplore + "design.svg",
            title: "Design",
        },
        {
            img: iconExplore + "automatisation.svg",
            title: "Automatisation",
        },
        {
            img: iconExplore + "pcPortable.svg",
            title: "Bureautique",
        },
        {
            img: iconExplore + "augmentation.svg",
            title: "Productivité",
        },
        {
            img: iconExplore + "frontEnd.svg",
            title: "Front-end",
        },
        {
            img: iconExplore + "reseaux.svg",
            title: "Administration Système",
        },
        {
            img: iconExplore + "ia.svg",
            title: "Intelligence Artificielle",
        },
    ];

    return (
        <>
            <section className="hero">
                <h2>Apprenez les compétences qui comptent vraiment.</h2>
                <p className="description">
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
                <div className="heroImgContainer">
                    <img
                        src="/img/home/hero.webp"
                        alt="background"
                        className="background"
                    />
                    <div className="opportunities">
                        <button>Opportunité d'emploi</button>
                        <h3>Ouvrez la porte aux opportunités du numérique.</h3>
                        <p className="descriptionOpportunities">
                            Des parcours courts et structurés pour accéder
                            rapidement aux métiers du numérique. Réseaux,
                            systèmes, développement, cybersécurité, bureautique
                            et design : des compétences concrètes, adaptées aux
                            besoins du marché et orientées opportunités
                            professionnelles.
                        </p>
                    </div>
                    <div className="buttonsContainer">
                        {lstButton.map((item, index) => (
                            <button key={index}>{item}</button>
                        ))}
                    </div>
                </div>
            </section>
            <section className="SwipeCollab">
                <h3>Swipe en collaboration avec les leaders du secteur</h3>
                <div className="scrollHorizontale">
                    <div className="group">
                        {lstSwipeColab.map((item, index) => (
                            <img key={index} src={item} alt="Swipe Colab" />
                        ))}
                    </div>
                    <div aria-hidden className="group">
                        {lstSwipeColab.map((item, index) => (
                            <img key={index} src={item} alt="Swipe Colab" />
                        ))}
                    </div>
                </div>
            </section>
            <section className="exploreNumerique">
                <article className="exploreCategory">
                    <h3>Explorer les catégories</h3>
                    <div className="category">
                        {lstExploreCategory.map((item, index) => (
                            <button key={index}>
                                <img src={item.img} alt={item.title} />
                                {item.title}
                            </button>
                        ))}
                    </div>
                </article>
                <article className="meilleurNumerique">
                    <h3>Le meilleur du numérique, structuré pour vous</h3>
                    <div className="coursDual">
                        <div className="cours">
                            <div className="entete">
                                <h4>Les cours les plus demandés.</h4>
                                <button>
                                    <img
                                        src="icon/arrowLeft.svg"
                                        alt="arrowLeft icon"
                                    />
                                </button>
                            </div>
                            <div className="coursDualCardContainer">
                                {/* repeter 3 fois */}
                                {[1, 2, 3].map((item, index) => (
                                    <div className="coursDualCard" key={index}>
                                        <img src="img/cours.png" alt="" />
                                        <div>
                                            <h5>
                                                Cours de réseaux informatiques
                                            </h5>
                                            <p>Durée : 3 semaines</p>
                                            <p>Fondamentaux • ★ 4.8</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="cours">
                            <div className="entete">
                                <h4>Les cours les plus demandés.</h4>
                                <button>
                                    <img
                                        src="icon/arrowLeft.svg"
                                        alt="arrowLeft icon"
                                    />
                                </button>
                            </div>
                            {[1, 2, 3].map((item, index) => (
                                <div className="coursDualCard" key={index}>
                                    <img src="img/cours.png" alt="" />
                                    <div>
                                        <h5>Cours de réseaux informatiques</h5>
                                        <p>Durée : 3 semaines</p>
                                        <p>Fondamentaux • ★ 4.8</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
                <button>
                    voir plus
                    <img src="icon/arrowTopLeft.svg" alt="icon arrow" />
                </button>
            </section>
        </>
    );
}
export default Index;

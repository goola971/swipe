import "./index.scss";
import { type JSX } from "react";

// buttons
import Button from "../../components/buttons/buttons";

// components
import ExploreCategory from "../../components/exploreCategory/exploreCategory";

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

    const plans = [
        {
            niveau: 1,
            title: "Essentiel",
            description: "Pour commencer avec des avantages simples.",
            prix: "9,99 €",
            avantage: [
                "Réduction –10 % sur tous les cours",
                "Notifications pour vos réservations",
                "Priorité de réservation : accès aux créneaux 24h avant les non-abonnés",
            ],
        },
        {
            niveau: 2,
            title: "Professionnel",
            description:
                "Pour progresser régulièrement avec plus de privilèges.",
            prix: "19,99 €",
            avantage: [
                "Réduction –20 % sur tous les cours",
                "Priorité de réservation : accès aux créneaux 48h avant les non-abonnés",
                "Support privé prioritaire",
                "Notifications pour vos réservations",
            ],
        },
        {
            niveau: 3,
            title: "Premium",
            description: "Pour une expérience complète et prioritaire.",
            prix: "29,99 €",
            avantage: [
                "Réduction –40 % sur tous les cours",
                "Priorité de réservation : accès aux créneaux 48h avant les non-abonnés",
                "Support privé prioritaire",
                "Notifications pour vos réservations",
            ],
        },
    ];

    return (
        <>
            {/* hero */}
            {/* ============================================================= */}
            <section className="hero">
                <h2>Apprenez les compétences qui comptent vraiment.</h2>
                <p className="description">
                    Des formations professionnelles, des parcours structurés et
                    une plateforme conçue pour progresser rapidement.
                </p>
                <div className="Buttons">
                    {/* <button>
                        Commencer maintenant{" "}
                        <img
                            src="icon/arrowTopLeft.svg"
                            alt="arrow top left icon"
                        />
                    </button>
                    <button>Voir les formations</button> */}
                    <Button
                        texte="Commencer maintenant"
                        variante="primary"
                        img="icon/arrowTopLeft.svg"
                        onClick={() => {}}
                    />
                    <Button
                        texte="Voir les formations"
                        variante="secondary"
                        img=""
                        onClick={() => {}}
                    />
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
            {/* ============================================================= */}

            {/* Swipe en collaboration */}
            {/* ============================================================= */}
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
            {/* ============================================================= */}

            {/* exploreNumerique */}
            {/* ============================================================= */}
            <section className="exploreNumerique">
                {/* <article className="exploreCategory">
                    <h3>Explorer les catégories</h3>
                    <div className="category">
                        {lstExploreCategory.map((item, index) => (
                            <button key={index}>
                                <img src={item.img} alt={item.title} />
                                {item.title}
                            </button>
                        ))}
                    </div>
                </article> */}
                <ExploreCategory title="Explorer les catégories" />
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

                                {[1, 2, 3].map((_, index) => (
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
                            <div className="coursDualCardContainer">
                                {/* repeter 3 fois */}
                                {[1, 2, 3].map((_, index) => (
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
                    </div>
                </article>
                {/* <button className="voirPlus">
                    voir plus
                    <img src="icon/arrowTopLeft.svg" alt="icon arrow" />
                </button> */}
                <Button
                    texte="voir plus"
                    variante="primary"
                    img="icon/arrowTopLeft.svg"
                    onClick={() => {}}
                />
            </section>
            {/* ============================================================= */}

            {/* a propos de swipe */}
            {/* ============================================================= */}
            <section className="aboutUs">
                <article className="text">
                    <div>
                        <h3>À propos de Swipe</h3>
                        <p>
                            Swipe est une plateforme de formation dédiée aux
                            compétences du <br /> numérique. Elle organise les
                            contenus par parcours. Elle simplifie <br />
                            l’apprentissage. Elle permet de progresser à son
                            rythme.
                            <br />
                            <br />
                            <br />
                            <br />
                            Swipe regroupe plusieurs domaines : réseaux,
                            administration système, <br /> développement web,
                            cybersécurité, data, bureautique et design. Chaque{" "}
                            <br />
                            formation suit une structure claire : notions
                            essentielles, exercices pratiques, <br /> projet
                            final, certification.
                        </p>
                    </div>
                    <div className="contact">
                        <p>
                            Une question sur une formation ou une réservation ?
                        </p>
                        <button>
                            Contactez-nous.{" "}
                            <img
                                src="icon/arrowBottomRight.svg"
                                alt="icon arrow"
                            />
                        </button>
                    </div>
                </article>
                <img
                    src="img/home/about.png"
                    alt="illustration about"
                    className="aboutUsImg"
                />
                {/* card info*/}
                {/* ----------------------------------------- */}
                <article className="cardInfo">
                    <div className="tauxDeComplection">
                        <img src="img/home/taux.png" alt="taux de completion" />
                        <div>
                            <h4>87 % de taux de complétion</h4>
                            <p>
                                La majorité termine le parcours commencé <br />{" "}
                                grâce à des modules courts et structurés.
                            </p>
                        </div>
                    </div>
                    <div className="satisfaction">
                        <div className="entete">
                            <button>Utilité</button>
                            <button>Clarté</button>
                            <button>Progression</button>
                        </div>
                        <div className="textSatisfaction">
                            <h4>92 % de satisfaction</h4>
                            <p>
                                Les apprenants indiquent avoir progressé de
                                <br />
                                manière visible dès les premières semaines.
                            </p>
                        </div>
                        <img
                            src="img/home/satisfaction.svg"
                            alt=""
                            className="diagramstaif"
                        />
                    </div>
                    <div className="apprenantActif">
                        <h4>
                            <img src="icon/tauxCroissant.svg" alt="icon" />4
                            500+ Apprenants actifs
                        </h4>
                        <p>
                            Des utilisateurs issus de profils variés :
                            étudiants, salariés, <br /> reconversion.
                        </p>
                    </div>
                </article>
                {/* ----------------------------------------- */}
            </section>
            {/* ============================================================= */}

            {/* plan & avantages */}
            {/* ============================================================= */}
            <section className="planAvantage">
                <div className="title">
                    <h3>Plans & avantages</h3>
                    <p>
                        Réservez vos cours plus facilement, profitez de
                        réductions immédiates et débloquez des avantages
                        exclusifs. Les formations gardent leur prix fixe, mais
                        votre abonnement améliore votre expérience.
                    </p>
                </div>
                <div className="planCard">
                    {/* utilser plans pour generer les cards plans */}
                    {plans.map((plan, index) => (
                        <article key={index} className="plan">
                            <div className="all">
                                <div className="niveau">
                                    {/* afficher des span par nombre de niveau */}
                                    {Array(plan.niveau)
                                        .fill(0)
                                        .map((_, index) => (
                                            <div key={index}></div>
                                        ))
                                        .slice(0, plan.niveau)}
                                </div>
                                <h4>{plan.title}</h4>
                                <p>{plan.description}</p>
                                <p className="prix">
                                    {" "}
                                    <span>{plan.prix}</span> / mois
                                </p>
                                <div className="ajout">
                                    {plan.avantage.map((avantage, index) => (
                                        <p key={index}>
                                            <img
                                                src="icon/plus.svg"
                                                alt="icon plus"
                                            />
                                            {avantage}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <button>
                                Souscrire
                                <img src="icon/arrowLeft.svg" alt="" />
                            </button>
                        </article>
                    ))}
                </div>
                <div className="rassurer">
                    <div>
                        <p>Choisissez votre abonnement</p>
                        <p>
                            Vous pouvez annuler à tout moment. Aucun engagement.
                        </p>
                    </div>
                    <div>
                        <p>Pourquoi un abonnement ?</p>
                        <p>
                            Chaque formation garde son tarif fixe.
                            <br />
                            L’abonnement améliore votre expérience
                        </p>
                    </div>
                </div>
            </section>
            {/* ============================================================= */}
        </>
    );
}
export default Index;

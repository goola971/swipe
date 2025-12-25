import "./formations.scss";
import { type JSX } from "react";

import ExploreCategory from "../../components/exploreCategory/exploreCategory";

import Button from "../../components/buttons/buttons";
import FormationCard from "../../components/formationCard/formationCard";

function Formations(): JSX.Element {
    return (
        <section className="formations">
            {/* <h2>Cours recommandé</h2> */}
            <article className="coursRecommande">
                <h2>Cours recommandé</h2>
                <div className="cards">
                    <FormationCard
                        image="img/cours/cours.png"
                        titles="Cours de Cybersécurité"
                        niveau="Niveau Débutant"
                        description="
                    Découvrez les bases de la sécurité informatique :
                    attaques courantes, bonnes pratiques, premiers
                    réflexes de défense. Un cours clair, accessible et
                    orienté pratique."
                        endroit="Centre Swipe"
                        salle="Salle A"
                        date="Samedi 14 Décembre 2024"
                        heureDebut="15h00"
                        heureFin="17h00"
                        voirSessionLink=""
                        voirDetailsLink=""
                    />
                    <FormationCard
                        image="img/cours/cours.png"
                        titles="Cours de Cybersécurité"
                        niveau="Niveau Débutant"
                        description="
                    Découvrez les bases de la sécurité informatique :
                    attaques courantes, bonnes pratiques, premiers
                    réflexes de défense. Un cours clair, accessible et
                    orienté pratique."
                        endroit="Centre Swipe"
                        salle="Salle A"
                        date="Samedi 14 Décembre 2024"
                        heureDebut="15h00"
                        heureFin="17h00"
                        voirSessionLink=""
                        voirDetailsLink=""
                    />
                </div>
            </article>
            <ExploreCategory title="Dans quel domaine souhaitez-vous vous former ?" />
            <article className="toutesNosFormations">
                <div className="entete">
                    <h2>Toutes nos formations</h2>
                    {/* <button className="filter">
                        <img src="" alt="" />
                        Trier par...
                    </button> */}
                    <Button
                        texte="Trier par..."
                        variante="primary"
                        img="icon/trier.svg"
                        onClick={() => {}}
                        // type="button"
                        // className="filter"
                    />
                </div>
                <div className="cards">
                    <FormationCard
                        image="img/cours/cours.png"
                        titles="Cours de Cybersécurité"
                        niveau="Niveau Débutant"
                        description="
                    Découvrez les bases de la sécurité informatique :
                    attaques courantes, bonnes pratiques, premiers
                    réflexes de défense. Un cours clair, accessible et
                    orienté pratique."
                        endroit="Centre Swipe"
                        salle="Salle A"
                        date="Samedi 14 Décembre 2024"
                        heureDebut="15h00"
                        heureFin="17h00"
                        voirSessionLink=""
                        voirDetailsLink=""
                    />
                    <FormationCard
                        image="img/cours/cours.png"
                        titles="Cours de Cybersécurité"
                        niveau="Niveau Débutant"
                        description="
                    Découvrez les bases de la sécurité informatique :
                    attaques courantes, bonnes pratiques, premiers
                    réflexes de défense. Un cours clair, accessible et
                    orienté pratique."
                        endroit="Centre Swipe"
                        salle="Salle A"
                        date="Samedi 14 Décembre 2024"
                        heureDebut="15h00"
                        heureFin="17h00"
                        voirSessionLink=""
                        voirDetailsLink=""
                    />
                    <FormationCard
                        image="img/cours/cours.png"
                        titles="Cours de Cybersécurité"
                        niveau="Niveau Débutant"
                        description="
                    Découvrez les bases de la sécurité informatique :
                    attaques courantes, bonnes pratiques, premiers
                    réflexes de défense. Un cours clair, accessible et
                    orienté pratique."
                        endroit="Centre Swipe"
                        salle="Salle A"
                        date="Samedi 14 Décembre 2024"
                        heureDebut="15h00"
                        heureFin="17h00"
                        voirSessionLink=""
                        voirDetailsLink=""
                    />
                    <FormationCard
                        image="img/cours/cours.png"
                        titles="Cours de Cybersécurité"
                        niveau="Niveau Débutant"
                        description="
                    Découvrez les bases de la sécurité informatique :
                    attaques courantes, bonnes pratiques, premiers
                    réflexes de défense. Un cours clair, accessible et
                    orienté pratique."
                        endroit="Centre Swipe"
                        salle="Salle A"
                        date="Samedi 14 Décembre 2024"
                        heureDebut="15h00"
                        heureFin="17h00"
                        voirSessionLink=""
                        voirDetailsLink=""
                    />
                </div>
                <div className="pagination">
                    <button>{"<"}</button>
                    <div className="numbers">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>...</button>
                    </div>
                    <button>{">"}</button>
                </div>
            </article>
        </section>
    );
}

export default Formations;

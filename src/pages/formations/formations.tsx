import "./formations.scss";
import { type JSX, useState, useEffect } from "react";
import ExploreCategory from "../../components/exploreCategory/exploreCategory";
import FormationCard from "../../components/formationCard/formationCard";
import type { IFormation } from "../../types";

function Formations(): JSX.Element {
   
    const [formations, setFormations] = useState<IFormation[]>([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("http://localhost:8080/api/formations")
        .then((res) => res.json())
        .then((data) => {
           
            const mappedFormations = data.map((f: any) => ({
                id: f.idFormation,
                
                titles: f.titre || "Sans titre", 
                
                image: f.formationImage || "img/cours/cours.png",
                description: f.description || "Aucune description",
                niveau: f.categorie || "Débutant", 
                endroit: "Centre de formation",
                salle: "Salle principale",
                date: "Prochainement",
                heureDebut: "09:00",
                heureFin: "17:00",
                voirSessionLink: `/sessions/${f.idFormation}`,
                voirDetailsLink: `/details/${f.idFormation}`
            }));
            setFormations(mappedFormations);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Erreur de connexion :", err);
            setLoading(false);
        });
}, []);

return (
    <>
        <section className="formations">
            {}
            <ExploreCategory title="Explorez nos catégories" /> 

            <article className="toutesNosFormations">
                    <div className="entete">
                        <h2>Toutes nos formations</h2>
                    </div>

                    <div className="cards">
                        {loading ? (
                            <p>Chargement des formations...</p>
                        ) : formations.length > 0 ? (
                            formations.map((f, index) => (
                                <FormationCard
                                    key={f.id || index}
                                    image={f.image || "img/cours/cours.png"}
                                    titles={f.titles}
                                    niveau={f.niveau}
                                    description={f.description}
                                    endroit={f.endroit}
                                    salle={f.salle}
                                    date={f.date}
                                    heureDebut={f.heureDebut}
                                    heureFin={f.heureFin}
                                    voirSessionLink={f.voirSessionLink}
                                    voirDetailsLink={f.voirDetailsLink}
                                />
                            ))
                        ) : (
                            <p className="aucuneFormation">Aucune formation disponible pour le moment.</p>
                        )}
                    </div>
                </article>

                {}
                <section className="certification">
                    {}
                </section>
            </section>
        </>
    );
}

export default Formations;
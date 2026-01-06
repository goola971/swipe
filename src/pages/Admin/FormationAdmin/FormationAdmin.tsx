import "./formationAdmin.scss";
import { type JSX, useEffect, useState } from "react";
import AddFormation from "../../../components/admin/addformation";

export default function FormationAdmin(): JSX.Element {
    const [formations, setFormations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Récupération des formations depuis votre API
        fetch("https://api-ccxi.onrender.com/api/admin/formations")
            .then((res) => res.json())
            .then((data) => {
                setFormations(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur lors du chargement des formations:", err);
                setLoading(false);
            });
    }, []);

    if (loading)
        return <div className="loading">Chargement des formations...</div>;

    return (
        <section className="formationAdmin">
            <div className="headerformation">
                <h2>Formations ({formations.length})</h2>
                <button className="add-btn">Ajouter une formation</button>
            </div>

            {/* <div className="formationList">
                {formations.map((f) => (
                    <div className="formationcard" key={f.idFormation || f.id}>
                        {}
                        <img
                            src={f.image || "img/cours/cours.png"}
                            alt={f.titre}
                        />

                        <h2>{f.titre}</h2>
                        <p className="category">Niveau : {f.categorie}</p>
                        <p className="description">{f.description}</p>
                        <p className="price">
                            <strong>Prix : {f.prix} €</strong>
                        </p>

                        <div className="actions">
                            <button className="delete">Supprimer</button>
                            <button className="edit">Modifier</button>
                        </div>
                    </div>
                ))}

                {formations.length === 0 && (
                    <p>Aucune formation trouvée dans la base de données.</p>
                )}
            </div> */}
            <div className="formationLists">
                {formations.map((f) => (
                    <AddFormation
                        titre={f.titre}
                        id={f.idFormation || f.id}
                        niveau={f.categorie}
                        image={f.image}
                        soustitre={f.description}
                        prix={f.prix}
                    />
                ))}
            </div>
        </section>
    );
}

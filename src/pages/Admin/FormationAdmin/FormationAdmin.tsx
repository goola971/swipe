import "./formationAdmin.scss";
import { type JSX, useEffect, useState } from "react";
import AddFormation from "../../../components/admin/addformation";

export default function FormationAdmin(): JSX.Element {
    const [formations, setFormations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    
    // États pour le formulaire
    const [showForm, setShowForm] = useState(false);
    const [newFormation, setNewFormation] = useState({
        titre: "",
        description: "",
        categorie: "",
        prix: 0,
        dureeJour: 0,
        placeMax: 0,
        formationImage:"" // Contiendra la chaîne Base64
    });

    const fetchFormations = () => {
        fetch("https://api-ccxi.onrender.com/api/admin/formations")
            .then((res) => res.json())
            .then((data) => {
                setFormations(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchFormations();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewFormation(prev => ({ ...prev, [name]: value }));
    };

    // Fonction pour convertir l'image uploadée en Base64
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewFormation(prev => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        

        const formationToSend = {
            ...newFormation,
            placeOccupe: 0 
        };

        try {
            const response = await fetch("https://api-ccxi.onrender.com/api/admin/formations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formationToSend),
            });

            if (response.ok) {
                setShowForm(false);
                setNewFormation({ titre: "", description: "", categorie: "", prix: 0, dureeJour: 0, placeMax: 0, formationImage: "" });
                fetchFormations();
                alert("Formation créée avec succès !");
            }
        } catch (error) {
            console.error("Erreur lors de la création:", error);
        }
    };

    if (loading) return <div className="loading">Chargement...</div>;

    return (
        <section className="formationAdmin">
            <div className="headerformation">
                <h2>Formations ({formations.length})</h2>
                <button className="add-btn" onClick={() => setShowForm(true)}>Ajouter une formation</button>
            </div>

            {showForm && (
                <div className="modal-overlay">
                    <div className="add-modal">
                        <h3>Créer une nouvelle formation</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="titre" placeholder="Titre" onChange={handleChange} required />
                            <textarea name="description" placeholder="Description détaillée" onChange={handleChange} required />
                            <input type="text" name="categorie" placeholder="Catégorie / Niveau" onChange={handleChange} required />
                            
                            <div className="row">
                                <input type="number" name="prix" placeholder="Prix (€)" onChange={handleChange} required />
                                <input type="number" name="dureeJour" placeholder="Durée (jours)" onChange={handleChange} required />
                                <input type="number" name="placeMax" placeholder="Places Max" onChange={handleChange} required />
                            </div>

                            <div className="file-input">
                                <label>Image de la formation :</label>
                                <input type="file" accept="image/*" onChange={handleImageChange} required />
                                {newFormation.formationImage && <img src={newFormation.formationImage} alt="Preview" className="preview-img" />}
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="save-btn">Publier la formation</button>
                                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="formationLists">
                {formations.map((f) => (
                    <AddFormation
                        key={f.id}
                        {...f} // Passe toutes les props automatiquement
                        id={f.idFormation || f.id}
                        niveau={f.categorie}
                        soustitre={f.description}
                    />
                ))}
            </div>
        </section>
    );
}
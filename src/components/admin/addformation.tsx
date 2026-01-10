import "./addformation.scss";
import { useState, type JSX } from "react";

type Props = {
    titre: string;
    soustitre: string;
    id: string;
    niveau: string;
    image: string;
    prix: number;
    dureeJour: number;
    placeMax: number;
    placeOccupe: number;
    formationImage: string;
};

export default function AddFormation(props: Props): JSX.Element {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...props });
    const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

    //pour modifier la formatio
    const handleUpdate = async () => {
        try {
            const response = await fetch(`https://api-ccxi.onrender.com/api/admin/formations/${props.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    titre: formData.titre,
                    description: formData.soustitre, 
                    categorie: formData.niveau,      
                    prix: formData.prix,
                    dureeJour: formData.dureeJour,
                    placeMax: formData.placeMax,
                    placeOccupe: formData.placeOccupe,
                    formationImage: formData.formationImage,
                }),
            });

            if (response.ok) {
                setMessage({ text: "Formation mise à jour !", type: "success" });
                setIsEditing(false); 
            } else {
                throw new Error();
            }
        } catch (error) {
            setMessage({ text: "Erreur lors de la modification.", type: "error" });
        }
        setTimeout(() => setMessage(null), 3000);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === "prix" || name.startsWith("place") || name === "dureeJour" ? Number(value) : value });
    };
    // pour supp la formation 
    const handleDelete = async () => {
        if (!window.confirm(`Voulez-vous vraiment supprimer la formation "${props.titre}" ?`)) return;

        try {
            const response = await fetch(`https://api-ccxi.onrender.com/api/admin/formations/${props.id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                setMessage({ text: "Formation supprimée avec succès !", type: "success" });
                setTimeout(() => window.location.reload(), 2000);
            } else {
                throw new Error();
            }
        } catch (error) {
            setMessage({ text: "Erreur lors de la suppression.", type: "error" });
        }
    };

    return (
        <div className="formationcard" key={props.id}>
            {}
            {message && <div className={`message-notif ${message.type}`}>{message.text}</div>}

            <img src={props.image || "img/cours/cours.png"} alt={props.titre} />

            {isEditing ? (
                <div className="edit-form">
                    <input name="titre" value={formData.titre} onChange={handleChange} placeholder="Titre" />
                    <textarea name="soustitre" value={formData.soustitre} onChange={handleChange} placeholder="Description" />
                    <input name="niveau" value={formData.niveau} onChange={handleChange} placeholder="Niveau" />
                    <div className="grid-inputs">
                        <label>Prix (€): <input type="number" name="prix" value={formData.prix} onChange={handleChange} /></label>
                        <label>Jours: <input type="number" name="dureeJour" value={formData.dureeJour} onChange={handleChange} /></label>
                        <label>Max: <input type="number" name="placeMax" value={formData.placeMax} onChange={handleChange} /></label>
                        <label>Occupé: <input type="number" name="placeOccupe" value={formData.placeOccupe} onChange={handleChange} /></label>
                    </div>
                    <div className="actions">
                        <button className="save" onClick={handleUpdate}>Enregistrer</button>
                        <button className="cancel" onClick={() => setIsEditing(false)}>Annuler</button>
                    </div>
                </div>
            ) : (
                <>
                    <h2>{formData.titre} — Niveau {formData.niveau}</h2>
                    <p>{formData.soustitre}</p>
                    <p className="price"><strong>Prix : {formData.prix} €</strong></p>
                    <p className="duree"><strong>Durée : {formData.dureeJour} Jours</strong></p>
                    <p className="placeMax"><strong>Place Maximum : {formData.placeMax}</strong></p>
                    <p className="placeOccupe"><strong>Place Occupée : {formData.placeOccupe}</strong></p>

                    <div className="actions">
                        <button className="delete" onClick={handleDelete}>Supprimer</button>
                        <button className="edit" onClick={() => setIsEditing(true)}>Modifier</button>
                    </div>
                </>
            )}
        </div>
    );
    
}
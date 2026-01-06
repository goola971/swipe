import "./addformation.scss";
import { type JSX } from "react";

type Props = {
    titre: string;
    soustitre: string;
    id: string;
    niveau: string;
    image: string;
    prix: number;
};

export default function AddFormation({
    titre,
    soustitre,
    id,
    niveau,
    image,
    prix,
}: Props): JSX.Element {
    return (
        <div className="formationcard" key={id}>
            <img src={image || "img/cours/cours.png"} alt={titre} />
            <h2>
                {titre} — Niveau {niveau}
            </h2>
            <p>{soustitre}</p>
            <p className="price">
                <strong>Prix : {prix} €</strong>
            </p>
            <div className="actions">
                <button className="delete">Supprimer</button>
                <button className="edit">Modifier</button>
            </div>
        </div>
    );
}

import "./formationCard.scss";
import { type JSX } from "react";
import Button from "../../components/buttons/buttons";

type FormationCardProps = {
    image: string;
    titles: string;
    niveau: string;
    description: string;
    endroit: string;
    salle: string;
    date: string;
    heureDebut: string;
    heureFin: string;
    voirSessionLink: string;
    voirDetailsLink: string;
};

function FormationCard({
    image,
    titles,
    niveau,
    description,
    endroit,
    salle,
    date,
    heureDebut,
    heureFin,
    voirSessionLink,
    voirDetailsLink,
}: FormationCardProps): JSX.Element {
    return (
        <div className="card">
            <img src={image} alt="image cours" />

            <div className="description">
                <h3>
                    {titles} — <span className="niveau">{niveau}</span>
                </h3>

                <p>{description}</p>

                <div className="emplacentCalendar">
                    <div className="lieux">
                        <p>{endroit}</p>
                        <p>{salle}</p>
                    </div>

                    <div className="calendar">
                        <p>{date}</p>
                        <p>
                            {heureDebut} – {heureFin}
                        </p>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <Button
                    texte="Voir les sessions"
                    variante="primary"
                    img=""
                    onClick={() => (window.location.href = voirSessionLink)}
                />
                <Button
                    texte="Voir les détails"
                    variante="secondary"
                    img=""
                    onClick={() => (window.location.href = voirDetailsLink)}
                />
            </div>
        </div>
    );
}

export default FormationCard;

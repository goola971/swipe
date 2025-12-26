import "./buttons.scss";
import { type JSX } from "react";

/**
 * Composant Bouton réutilisable
 * @param {string} texte - Le texte du bouton
 * @param {string} variante - La variante du bouton ('primary' ou 'secondary')
 * @param {img} img - L'image associée au bouton
 * @param {function} onClick - Fonction appelée au clic
 */

{
    /* <button>
    Commencer maintenant{" "}
    <img
        src="icon/arrowTopLeft.svg"
        alt="arrow top left icon"
    />
</button>
<button>Voir les formations</button>

.Buttons {
        @include dflex(center, center, 2vw);
        margin-right: 7vw;
        button {
            @include button2();
            &:last-child {
                background-color: rgb(255, 255, 255);
                color: rgb(0, 0, 0);
                border: rgba(0, 0, 0, 0.27) 0.1vw solid;
            }
        }
    }

*/
}
// adapter en fonction avec des props
const Button = ({
    texte,
    variante,
    img,
    onClick,
}: {
    texte: string;
    variante: string;
    img: string;
    onClick: () => void;
}): JSX.Element => {
    return (
        <button
            className={`button ${variante}`}
            onClick={onClick}
            aria-label={texte}
        >
            {texte}
            {variante === "primary" &&
                // <img src="icon/arrowTopLeft.svg" alt="arrow top left icon" />
                // // si img est pas vide, afficher l'image
                img && <img src={img} alt="arrow top left icon" />}
        </button>
    );
};

export default Button;

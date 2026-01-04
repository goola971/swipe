import "./activiteRecenteCard.scss";
import { type JSX } from "react";

/**
 * Composant Bouton réutilisable
 * @param {string} titre - Le texte du bouton
 * @param {string} date - La variante du bouton ('primary' ou 'secondary')
 * @param {string} heure - L'image associée au bouton
 */

// {
// 	<div className="activiteRecenteCard">
// 		<div>
// 			<span>
// 				Alex Martin a réservé une session “Cours de Cybersécurité”
// 			</span>
// 			<p>Le 00/00/2025 à 00h00 </p>
// 		</div>
// 	</div>;
// }
const activiteRecenteCard = ({
	titre,
	date,
	type,
	heure,
}: {
	titre: string;
	date: string;
	type: string;
	heure: string;
}): JSX.Element => {
	return (
		<div className="activiteRecenteCard">
			<div>
				<span>{titre}</span>
				<p>
					Le {date} à {heure}
				</p>
			</div>
		</div>
	);
};

export default activiteRecenteCard;

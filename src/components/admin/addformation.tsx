import "./addformation.scss";
import { type JSX } from "react";

/**
 * Composant Bouton réutilisable
 * @param {string} titre - Le texte du bouton
 * @param {string} soustitre - La variante du bouton ('primary' ou 'secondary')
 * @param {string} delete - L'image associée au bouton
 * @param {string} edit - Lien vers lequel rediriger
 */

{
	/* <div className="formationcard">
	<img src="img/cours/cours.png" alt="" />
	<h2>Cours de Cybersécurité — Niveau Débutant</h2>
	<p>
		Découvrez les bases de la sécurité informatique : attaques courantes,
		bonnes pratiques, premiers réflexes de défense. Un cours clair,
		accessible et orienté pratique.
	</p>
	<div>
		<button className="delete">Supprimer</button>
		<button className="edit">Modifier</button>
	</div>
</div>; */
}

const addFormation = ({
	titre,
	soustitre,
	delete,
	edit,
}: {
	titre: string;
	soustitre: string;
	delete: string;
	edit: string;
}): JSX.Element => {
	return (
		<div className="formationcard">
			<img src="img/cours/cours.png" alt="" />
			<h2>{titre}</h2>
			<p>{soustitre}</p>
			<div className="actions">
				<button className="delete">Supprimer</button>
				<button className="edit">Modifier</button>
			</div>
		</div>
	);
};

export default addFormation;

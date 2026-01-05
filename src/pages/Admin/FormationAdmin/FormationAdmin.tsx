import "./formationAdmin.scss";
import { type JSX } from "react";
import addFormation from "../../admin/addFormation/addFormation";

export default function FormationAdmin(): JSX.Element {
	return (
		<div className="formationAdmin">
			<div className="headerformation">
				<h2>Formations</h2>
				<button>Ajouter une formation</button>
			</div>

			{/* <div className="formationcard">
				<img src="img/cours/cours.png" alt="" />
				<h2>Cours de Cybersécurité — Niveau Débutant</h2>
				<p>
					Découvrez les bases de la sécurité informatique : attaques
					courantes, bonnes pratiques, premiers réflexes de défense.
					Un cours clair, accessible et orienté pratique.
				</p>
				<div>
					<button className="delete">Supprimer</button>
					<button className="edit">Modifier</button>
				</div>
			</div> */}
			<addFormation
				titre="Ajouter une formation"
				soustitre="primary"
				delete=""
				edit=""
			/>
		</div>
	);
}

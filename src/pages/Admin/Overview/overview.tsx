import "./overview.scss";
import { type JSX } from "react";

export default function Overview(): JSX.Element {
	return (
		<div className="framee">
			<h2>Indicateurs clés</h2>
			<div className="cards">
				<div className="card">
					<div className="cardHeader">
						<img src="icon/admin/flame.svg" alt="" />
						<h2>Total des inscriptions</h2>
						<p>
							Comptes inscrits depuis la création de la plateforme
						</p>
					</div>
					<div className="cardBody">
						<img className="icon" src="icon/admin/tot.svg" alt="" />
						<p>30</p>
					</div>
				</div>

				<div className="card">
					<div className="cardHeader">
						<img src="icon/admin/flame.svg" alt="" />
						<h2>Taux de présence</h2>
						<p>% de participants réellement présents</p>
					</div>
					<div className="cardBody">
						<img className="icon" src="icon/admin/tot.svg" alt="" />
						<p>86%</p>
					</div>
				</div>

				<div className="card">
					<div className="cardHeader">
						<img src="icon/admin/flame.svg" alt="" />
						<h2>Chiffre d’affaires</h2>
						<p>Depuis la création de la plateforme</p>
					</div>
					<div className="cardBody">
						<img className="icon" src="icon/admin/tot.svg" alt="" />
						<p>30 000 / an</p>
					</div>
				</div>
			</div>
			<div className="Activity">
				<div className="recent">
					<h2>Activité récente</h2>
					<section>
						<h3></h3>
					</section>
					<button>Voir plus</button>
				</div>
				<div className="shortcut">
					<h2>Raccourcis</h2>
					<button className="addFormation">
						<img src="icon/admin/create.svg" alt="" />
						Créer une formation
					</button>
					<button className="addFormation">
						<img src="icon/admin/calendar.svg" alt="" />
						Ajouter une session
					</button>
					<button className="addFormation">
						<img src="icon/admin/reglage.svg" alt="" />
						Gérer les utilisateurs
					</button>
				</div>
			</div>
		</div>
	);
}

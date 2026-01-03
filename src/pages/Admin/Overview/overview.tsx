import { Outlet } from "react-router-dom";
import "./overview.scss";
import { type JSX } from "react";

export default function Overview(): JSX.Element {
	return (
		<div>
			{" "}
			<h1></h1>
			<div>
				<h1>Indicateurs clés</h1>
				<div className="card">
					<div className="cardHeader">
						<img src="icon/admin/flame.svg" alt="" />
						<h2>Total des inscriptions </h2>
						<p>
							Comptes inscrit depuis la création de la plateforme{" "}
						</p>
					</div>
					<div className="cardBody">
						<p>
							{" "}
							<img
								className="icon"
								src="icon/admin/tot.svg"
								alt=""
							/>
							30
						</p>
					</div>
				</div>
				<div className="card">
					<div className="cardHeader">
						<img src="icon/admin/flame.svg" alt="" />
						<h2>Taux de présence </h2>
						<p>% de participants réellement présents</p>
					</div>
					<div className="cardBody">
						<p>
							{" "}
							<img
								className="icon"
								src="icon/admin/tot.svg"
								alt=""
							/>
							86%
						</p>
					</div>
				</div>
				<div className="card">
					<div className="cardHeader">
						<img src="icon/admin/flame.svg" alt="" />
						<h2>Chiffre d’affaires</h2>
						<p>
							Comptes inscrit depuis la création de la plateforme
						</p>
					</div>
					<div className="cardBody">
						<p>
							{" "}
							<img
								className="icon"
								src="icon/admin/tot.svg"
								alt=""
							/>
							30 000 / Année
						</p>
					</div>
				</div>
			</div>
			<div></div>
			<div></div>
		</div>
	);
}

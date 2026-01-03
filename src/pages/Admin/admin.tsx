import "./admin.scss";
import { type JSX } from "react";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Overview from "./overview/overview";
export default function Admin(): JSX.Element {
	return (
		<section className="admin">
			<aside>
				<div className="titre">
					<div className="box">
						<h1> Swipe.</h1>
						<p>Administrator</p>
					</div>

					<img src="icon/admin/switch.svg" alt="" />
				</div>

				<ul className="menu">
					<li>
						<img src="icon/admin/overview.svg" alt="" />
						Vue d'ensemble
					</li>
					<li>
						<img src="icon/admin/user.svg" alt="" />
						Utilisateurs
					</li>
					<li>
						<img src="icon/admin/stats.svg" alt="" />
						Statistique
					</li>
					<li>
						<img src="icon/admin/mail.svg" alt="" />
						Notification
					</li>
					<li>
						<img src="icon/admin/roue.svg" alt="" />
						Paramètres
					</li>
					<li>
						<img src="icon/admin/formation.svg" alt="" />
						Formation
					</li>
					<li>
						<img src="icon/admin/reservation.svg" alt="" />
						Réservations
					</li>
				</ul>
			</aside>
			<div className="content">
				<Overview></Overview>
			</div>
		</section>
	);
}

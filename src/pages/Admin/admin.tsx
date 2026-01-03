import "./admin.scss";
import { type JSX } from "react";
import { Outlet } from "react-router-dom";

export default function Admin(): JSX.Element {
	return (
		<section className="admin">
			<aside>
				<div className="titre">
					<div className="box">
						<h1>Swipe.</h1>
						<p>Administrator</p>
					</div>
					<img src="icon/admin/switch.svg" alt="" />
				</div>

				<ul className="menu">
					<li>Vue d'ensemble</li>
					<li>Utilisateurs</li>
					<li>Statistique</li>
					<li>Notification</li>
					<li>Paramètres</li>
					<li>Formation</li>
					<li>Réservations</li>
				</ul>
			</aside>

			<div className="content">
				<Outlet />
			</div>
		</section>
	);
}

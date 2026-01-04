import "./admin.scss";
import { type JSX, useState } from "react";
import { Link } from "react-router-dom";

import FormationAdmin from "./formationAdmin/formationAdmin";
import Overview from "./overview/overview";
import Users from "./userAdmin/userAdmin";
import ReservationAdmin from "./reservationAdmin/reservationAdmin";
export default function Admin(): JSX.Element {
	const [location, setLocation] = useState("overview");
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
						{" "}
						<Link
							to=""
							onClick={() => setLocation("overview")}
							className={location === "overview" ? "active" : ""}
						>
							<img src="icon/admin/overview.svg" alt="" />
							Vue d'ensemble
						</Link>
					</li>
					<li>
						<Link to="" onClick={() => setLocation("users")}>
							<img src="icon/admin/user.svg" alt="" />
							Utilisateurs
						</Link>
					</li>
					<li>
						<Link to="/">
							<img src="icon/admin/stats.svg" alt="" />
							Statistique
						</Link>
					</li>
					<li>
						<Link to="/">
							<img src="icon/admin/mail.svg" alt="" />
							Notification
						</Link>
					</li>
					<li>
						<Link to="">
							<img src="icon/admin/roue.svg" alt="" />
							Paramètres
						</Link>
					</li>
					<li>
						<Link to="" onClick={() => setLocation("formation")}>
							<img src="icon/admin/formation.svg" alt="" />
							Formation
						</Link>
					</li>
					<li>
						<Link to="" onClick={() => setLocation("reservation")}>
							<img src="icon/admin/reservation.svg" alt="" />
							Réservations
						</Link>
					</li>
				</ul>
			</aside>
			<div className="content">
				{location === "overview" ? (
					<Overview />
				) : location === "formation" ? (
					<FormationAdmin />
				) : location === "reservation" ? (
					<ReservationAdmin />
				) : location === "users" ? (
					<Users />
				) : null}
			</div>
		</section>
	);
}

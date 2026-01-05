import "./monSuivis.scss";
import { useState, type JSX } from "react";

function MonSuivis(): JSX.Element {
	const [selectedDays, setSelectedDays] = useState<number[]>([4, 5, 6]);
	const [currentMonth, setCurrentMonth] = useState<number>(0);
	const [currentYear, setCurrentYear] = useState<number>(2026);

	const months = [
		"Janvier",
		"Février",
		"Mars",
		"Avril",
		"Mai",
		"Juin",
		"Juillet",
		"Août",
		"Septembre",
		"Octobre",
		"Novembre",
		"Décembre",
	];

	const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

	function toggleDay(day: number) {
		setSelectedDays((prev) =>
			prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
		);
	}

	function prevMonth() {
		setCurrentMonth((m) => {
			if (m === 0) {
				setCurrentYear((y) => y - 1);
				return 11;
			}
			return m - 1;
		});
		setSelectedDays([]);
	}

	function nextMonth() {
		setCurrentMonth((m) => {
			if (m === 11) {
				setCurrentYear((y) => y + 1);
				return 0;
			}
			return m + 1;
		});
		setSelectedDays([]);
	}

	const lastSession =
		selectedDays.length > 0 ? Math.max(...selectedDays) : null;

	return (
		<section className="monSuivis">
			<header className="monSuivisHeader">
				<h1>Bienvenue, Mehdi !</h1>
				<p>
					Vous pouvez maintenant accéder à vos cours, vos réservations
					et vos documents.
				</p>
			</header>

			{/* TOP */}
			<article className="monSuivisTop">
				{selectedDays.length > 0 ? (
					<div className="courseCard">
						<h3>Cours de Cybersécurité — Niveau Débutant</h3>
						<span className="subtitle">
							Dernière session suivie : {lastSession}{" "}
							{months[currentMonth]}
						</span>

						<p className="label">Progression totale</p>

						<div className="progressBar">
							{[...Array(5)].map((_, i) => (
								<span
									key={i}
									className={
										i < selectedDays.length ? "active" : ""
									}
								/>
							))}
						</div>

						<small>
							{selectedDays.length} sessions réservées · 0 cours
							terminés · 0 certificats obtenus
						</small>
					</div>
				) : (
					<div className="emptyCourse">
						Oups… Il semblerait que vous n’ayez aucune réservation
						pour le moment
						<small>
							0 cours réservés · 0 cours terminés · 0 certificats
							obtenus
						</small>
					</div>
				)}

				<div className="notificationsCard">
					<h4>Notifications</h4>
					<div className="empty">
						Tout est à jour. Aucune notification à afficher.
					</div>
				</div>
			</article>

			{/* BOTTOM */}
			<article className="monSuivisBottom">
				{/* DOCUMENTS */}
				<div className="documents">
					<h3>Mes documents</h3>

					<div className="documentsList">
						<div className="documentItem">
							<div className="info">
								<strong>Justificatif de paiement</strong>
								<span>Obtenu le 00/00/2025</span>
							</div>

							<div className="actions">
								<a
									href="/img/pdf/justificatif.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="bi bi-eye"></i>
								</a>
								<a href="/img/pdf/justificatif.pdf" download>
									<i className="bi bi-download"></i>
								</a>
							</div>
						</div>

						<div className="documentItem">
							<div className="info">
								<strong>
									Certification cours de cybersécurité
								</strong>
								<span>Obtenue le 00/00/2025</span>
							</div>

							<div className="actions">
								<a
									href="/img/pdf/certification.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="bi bi-eye"></i>
								</a>
								<a href="/img/pdf/certification.pdf" download>
									<i className="bi bi-download"></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* SESSIONS */}
				<div className="sessions">
					<h3>Mes sessions</h3>

					<div className="calendar">
						<div className="calendarHeader">
							<button onClick={prevMonth}>‹</button>
							<strong>
								{months[currentMonth]} {currentYear}
							</strong>
							<button onClick={nextMonth}>›</button>
						</div>

						<div className="calendarGrid">
							{[...Array(daysInMonth)].map((_, i) => {
								const day = i + 1;
								return (
									<span
										key={day}
										className={`day ${
											selectedDays.includes(day)
												? "active"
												: ""
										}`}
										onClick={() => toggleDay(day)}
									>
										{day}
									</span>
								);
							})}
						</div>
					</div>

					<div className="sessionActions">
						<button>Choisir mes prochaines sessions</button>
						<button className="danger">Annuler une session</button>
					</div>
				</div>
			</article>
		</section>
	);
}

export default MonSuivis;

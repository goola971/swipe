import "./monSuivis.scss";
import { useState, useEffect, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";

function MonSuivis(): JSX.Element {
	const navigate = useNavigate();
	const [user, setUser] = useState<any>(null);
	const [selectedDays, setSelectedDays] = useState<number[]>([4, 5, 6]);
	const [currentMonth, setCurrentMonth] = useState<number>(0);
	const [currentYear, setCurrentYear] = useState<number>(2026);

	// Récupération de l'utilisateur au chargement de la page
	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const months = [
		"Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
		"Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
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

	if (!user) return <div className="loading">Chargement...</div>;

	return (
		<main className="monSuivis">
			<header className="monSuivisHeader">
				{/* Dynamisation du prénom */}
				<h1>Bienvenue, {user.prenom} !</h1>
				<p>
					Ravi de vous revoir. Voici un aperçu de votre progression et de vos
					prochaines sessions.
				</p>
			</header>

			<div className="monSuivisTop">
				{/* Logique conditionnelle pour la formation */}
				{user.formationEnCours ? (
					<div className="courseCard">
						<div className="courseInfo">
							<h3>{user.formationEnCours.titre || "Formation sans titre"}</h3>
							<span>Intervenant : {user.formationEnCours.intervenant || "À déterminer"}</span>
						</div>
						<div className="courseProgress">
							<div className="progressLabel">
								<span>Progression</span>
								<span>{user.progression || 0}%</span>
							</div>
							<div className="progressBar">
								<div 
									className="fill" 
									style={{ width: `${user.progression || 0}%` }}
								></div>
							</div>
						</div>
					</div>
				) : (
					<div className="emptyCourse" style={{ 
						background: "#f8f9fb", 
						padding: "1.5rem", 
						borderRadius: "0.75rem", 
						display: "flex", 
						flexDirection: "column", 
						gap: "1rem",
						justifyContent: "center",
						alignItems: "center",
						border: "2px dashed #d1d5db"
					}}>
						<p>Vous n'êtes inscrit à aucune session pour le moment.</p>
						<button 
							onClick={() => navigate("/ressources")}
							style={{
								padding: "0.8rem 1.5rem",
								backgroundColor: "#007bff",
								color: "white",
								border: "none",
								borderRadius: "0.5rem",
								cursor: "pointer",
								fontWeight: "bold"
							}}
						>
							Découvrir nos formations
						</button>
					</div>
				)}

				<div className="notificationsCard">
					<div className="notifHeader">
						<h3>Notifications</h3>
						<span className="badge">2</span>
					</div>
					<div className="notifList">
						<div className="notifItem">
							<p>Nouvelle ressource ajoutée en Cybersécurité</p>
							<span>Il y a 2h</span>
						</div>
						<div className="notifItem">
							<p>Rappel : Session demain à 14:00</p>
							<span>Il y a 5h</span>
						</div>
					</div>
				</div>
			</div>

			<div className="monSuivisBottom">
				<div className="documents">
					<h3>Mes documents</h3>
					<div className="documentList">
						<div className="documentItem">
							<span className="label">
								Certification cours de cybersécurité{" "}
								<a href="/img/pdf/caca.pdf" download className="icon">
									<i className="bi bi-download"></i>
								</a>
							</span>
							<span className="value">Obtenue le 00/00/2026</span>
						</div>
						{}
					</div>
				</div>

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
											selectedDays.includes(day) ? "active" : ""
										}`}
										onClick={() => toggleDay(day)}
									>
										{day}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default MonSuivis;
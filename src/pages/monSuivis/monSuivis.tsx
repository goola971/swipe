import "./monSuivis.scss";
import { useState, useEffect, type JSX } from "react";
import { useNavigate } from "react-router-dom";

function MonSuivis(): JSX.Element {
	const navigate = useNavigate();

	// États pour l'utilisateur et le chargement
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	// États pour les formations et messages
	const [mesPaiements, setMesPaiements] = useState<any[]>([]);
	const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

	// États pour le calendrier et les sessions
	const [selectedDays, setSelectedDays] = useState<number[]>([]); // Jours cliqués (gris)
	const [savedSessions, setSavedSessions] = useState<any[]>([]);  // Jours en BDD (noir)
	const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
	const [currentYear, setCurrentYear] = useState<number>(2026);

	const months = [
		"Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
		"Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
	];

	const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

	useEffect(() => {
		const storedUser = sessionStorage.getItem("user");
		if (storedUser) {
			const parsedUser = JSON.parse(storedUser);
			setUser(parsedUser);

			// 1. Récupérer les paiements/formations de l'utilisateur
			fetch(`https://api-ccxi.onrender.com/api/admin/user/${parsedUser.id}`)
				.then((res) => res.json())
				.then((data) => {
					setMesPaiements(data);
					setLoading(false);
				})
				.catch((err) => {
					console.error("Erreur API Paiements:", err);
					setLoading(false);
				});

			// 2. Récupérer les sessions déjà enregistrées en base de données
			fetch(`https://api-ccxi.onrender.com/api/admin/sessions/user/${parsedUser.id}`)
				.then((res) => res.json())
				.then((data) => setSavedSessions(data))
				.catch((err) => console.error("Erreur API Sessions:", err));
		} else {
			setLoading(false);
		}
	}, []);

	// --- LOGIQUE DU CALENDRIER ---

	function toggleDay(day: number) {
		// On vérifie si le jour est déjà enregistré (noir)
		const isAlreadySaved = savedSessions.some(s => new Date(s.date).getDate() === day);

		if (isAlreadySaved) {
			setMessage({
				text: "Cette session est déjà validée. Utilisez le bouton 'Annuler' pour la supprimer.",
				type: "error"
			});
			return;
		}

		// Sinon, on toggle la sélection temporaire (gris)
		setSelectedDays((prev) =>
			prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
		);
	}

	// --- ACTIONS (AJOUTER / ANNULER) ---

	const handleSaveSessions = async () => {
		if (selectedDays.length === 0) {
			setMessage({ text: "Veuillez choisir au moins une date dans le calendrier.", type: "error" });
			return;
		}

		try {
			const newSessionsFromApi = [];

			for (const day of selectedDays) {
				const sessionDate = new Date(currentYear, currentMonth, day).toISOString();

				const response = await fetch("https://api-ccxi.onrender.com/api/admin/sessions", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						date: sessionDate,
						user: { id: user.id }
					})
				});

				if (response.ok) {
					const data = await response.json();
					newSessionsFromApi.push(data);
				}
			}

			// Mise à jour de l'interface
			setSavedSessions((prev) => [...prev, ...newSessionsFromApi]);
			setSelectedDays([]); // On vide les jours gris
			setMessage({ text: "Sessions enregistrées avec succès !", type: "success" });
			setTimeout(() => setMessage(null), 5000);

		} catch (error) {
			setMessage({ text: "Erreur lors de la sauvegarde.", type: "error" });
		}
	};

	const handleCancelSession = async () => {
		if (savedSessions.length === 0) {
			setMessage({ text: "Aucune session enregistrée à annuler.", type: "error" });
			return;
		}

		// On annule la dernière session enregistrée pour l'exemple
		const sessionToCancel = savedSessions[savedSessions.length - 1];

		try {
			const response = await fetch(`https://api-ccxi.onrender.com/api/admin/sessions/${sessionToCancel.id}`, {
				method: "DELETE"
			});

			if (response.ok) {
				setSavedSessions((prev) => prev.filter(s => s.id !== sessionToCancel.id));
				setMessage({ text: "La session a été annulée.", type: "success" });
			} else {
				throw new Error();
			}
		} catch (error) {
			setMessage({ text: "Erreur lors de l'annulation.", type: "error" });
		}
		setTimeout(() => setMessage(null), 5000);
	};

	// --- NAVIGATION CALENDRIER ---

	function prevMonth() {
		setCurrentMonth((m) => (m === 0 ? 11 : m - 1));
		if (currentMonth === 0) setCurrentYear((y) => y - 1);
		setSelectedDays([]);
	}

	function nextMonth() {
		setCurrentMonth((m) => (m === 11 ? 0 : m + 1));
		if (currentMonth === 11) setCurrentYear((y) => y + 1);
		setSelectedDays([]);
	}

	if (loading) return <div className="loading">Chargement...</div>;
	if (!user) return <div className="error">Veuillez vous connecter.</div>;

	return (
		<section className="monSuivis">
			<div className="monSuivisHeader">
				<h1>Bienvenue, {user.prenom} !</h1>
				<p>Accédez à vos cours, vos réservations et vos documents.</p>
			</div>

			<article className="monSuivisTop">
				{mesPaiements.length > 0 ? (
					mesPaiements.map((p, index) => (
						<div className="courseCard" key={index}>
							<h3>{p.formation.titre}</h3>
							<p className="label">
								Statut : {p.statut ? "Payé" : "Payé"}
							</p>

							{/* Affiche la date la plus proche (sauvegardée ou sélectionnée) */}
							{(savedSessions.length > 0 || selectedDays.length > 0) && (
								<p className="sessionDate" style={{ fontWeight: 'bold', color: '#1a1a1a', marginTop: '10px' }}>
									Prochaine session : {
										Math.min(
											...savedSessions.map(s => new Date(s.date).getDate()),
											...selectedDays
										)
									} {months[currentMonth]} {currentYear}
								</p>
							)}

							<div className="progressBar">
								{[...Array(5)].map((_, i) => (
									<span key={i} className={i < (savedSessions.length + selectedDays.length) ? "active" : ""} />
								))}
							</div>
							<small>Prix : {p.montant} €</small>
						</div>
					))
				) : (
					<div className="emptyCourse">Aucune formation trouvée.</div>
				)}

				<div className="notificationsCard">
					<h4>Notifications</h4>
					<div className="notificationList">
						{savedSessions.length > 0 && (
							<div className="notifItem">
								<i className="bi bi-calendar-check-fill text-success"></i>
								<p>Vous avez <strong>{savedSessions.length}</strong> session(s) réservée(s).</p>
							</div>
						)}
						{mesPaiements.some(p => !p.statut) && (
							<div className="notifItem">
								<i className="bi bi-exclamation-circle-fill text-warning"></i>
								<p>Un paiement est en attente de validation.</p>
							</div>
						)}
						{savedSessions.length === 0 && !mesPaiements.some(p => !p.statut) && (
							<div className="empty">Tout est à jour.</div>
						)}
					</div>
				</div>
			</article>

			<article className="monSuivisBottom">
				<div className="documents">
					<h3>Mes documents</h3>
					<div className="documentItem">
						<div>
							<span className="label">Justificatif de paiement</span>
							<span className="value">Obtenu le {new Date().toLocaleDateString()}</span>
						</div>
						<div className="actions">
							<i className="bi bi-eye"></i>
							<i className="bi bi-download"></i>
						</div>
					</div>
				</div>

				<div className="sessions">
					<h3>Mes sessions</h3>
					<div className="calendar">
						<div className="calendarHeader">
							<button onClick={prevMonth}>‹</button>
							<strong>{months[currentMonth]} {currentYear}</strong>
							<button onClick={nextMonth}>›</button>
						</div>

						<div className="calendarGrid">
							{[...Array(daysInMonth)].map((_, i) => {
								const day = i + 1;
								const isSaved = savedSessions.some(s => new Date(s.date).getDate() === day);
								const isSelected = selectedDays.includes(day);

								return (
									<span
										key={day}
										className={`day ${isSaved ? "saved" : ""} ${isSelected ? "active" : ""}`}
										onClick={() => toggleDay(day)}
									>
										{day}
									</span>
								);
							})}
						</div>
					</div>

					<div className="sessionActions">
						{message && (
							<div className={`message-info ${message.type}`}>
								{message.text}
							</div>
						)}
						<button onClick={handleSaveSessions}>Choisir mes prochaines sessions</button>
						<button className="danger" onClick={handleCancelSession}>Annuler une session</button>
					</div>
				</div>
			</article>
		</section>
	);
}

export default MonSuivis;
import "./monSuivis.scss";
import { useState, useEffect, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";


function MonSuivis(): JSX.Element {
	const navigate = useNavigate();
	const [user, setUser] = useState<any>(null);
	const [selectedDays, setSelectedDays] = useState<number[]>([4, 5, 6]);
	const [currentMonth, setCurrentMonth] = useState<number>(0);
	const [currentYear, setCurrentYear] = useState<number>(2026);
    const [mesPaiements, setMesPaiements] = useState<any[]>([]); // Liste des paiements
    const [loading, setLoading] = useState(true);

	useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);

            // Appel API pour récupérer les paiements avec l'ID de l'image (ID: 28)
            fetch(`https://api-ccxi.onrender.com/api/admin/user/${parsedUser.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setMesPaiements(data); // On stocke la liste
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Erreur API:", err);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

	if (loading) return <div className="loading">Chargement...</div>;
    if (!user) return <div className="error">Veuillez vous connecter.</div>;

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

	const lastSession =
		selectedDays.length > 0 ? Math.max(...selectedDays) : null;
		if (!user) return <div className="loading">Chargement...</div>;

	return (
		<section className="monSuivis">
			<div className="monSuivisHeader">
				<h1>Bienvenue,{user.prenom} ! </h1>
				<p>
					Vous pouvez maintenant accéder à vos cours, vos réservations
					et vos documents.
				</p>
			</div>

			<article className="monSuivisTop">
{mesPaiements.length > 0 ? (
                    mesPaiements.map((paiement, index) => (
                        <div className="courseCard" key={index}>
                            {/* ON UTILISE LE TITRE VENANT DIRECTEMENT DE TON JSON */}
                            <h3>{paiement.formation.titre}</h3>
                            
                            <p className="label">
                                Statut : {paiement.statut ? "✅ Validé" : "Validé"}
                            </p>

                            <div className="progressBar">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < selectedDays.length ? "active" : ""} />
                                ))}
                            </div>
                            <small>Prix : {paiement.montant} €</small>
                        </div>
                    ))
                ) : (
                    <div className="emptyCourse">
                        Aucune formation trouvée.
                    </div>
                )}

				<div className="notificationsCard">
					<h4>Notifications</h4>
					<div className="empty">
						Tout est à jour. Aucune notification à afficher.
					</div>
				</div>
			</article>

			<article className="monSuivisBottom">
				<div className="documents">
					<h3>Mes documents</h3>

					<div className="documentItem">
						<div>
							<span className="label">
								Justificatif de paiement
							</span>
							<span className="value">Obtenu le 00/00/2026</span>
						</div>
						<div className="actions">
							<i className="bi bi-eye"></i>
							<i className="bi bi-download"></i>
						</div>
					</div>

					<div className="documentItem">
						<div>
							<span className="label">
								Certification cours de cybersécurité{" "}
								<a
									href="/img/pdf/caca.pdf"
									download
									className="icon"
								>
									<i className="bi bi-download"></i>
								</a>
							</span>
							<span className="value">Obtenue le 00/00/2026</span>
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

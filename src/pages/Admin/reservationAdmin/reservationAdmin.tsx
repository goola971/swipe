import "./reservationAdmin.scss";
import { useEffect, useState } from "react";
import ReservationCard from "../../../components/admin/ReservationCard/ReservationCard";

export default function ReservationAdmin() {
    const [activities, setActivities] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
               
                const payRes = await fetch("https://api-ccxi.onrender.com/api/admin/paiements");
                const payments = await payRes.json();

              
                const sessRes = await fetch("https://api-ccxi.onrender.com/api/admin/sessions");
                const sessions = await sessRes.json();

                
                const formattedPayments = payments.map((p: any) => ({
                    id: `pay-${p.id}`,
                    titre: p.formationTitre || "Achat Formation",
                    name: `${p.userPrenom} ${p.userNom}`,
                    date: new Date(p.datePaiement).toLocaleDateString(),
                    time: "à été payé",
                    status: p.status ? "Payé" : "En attente", 
                    type: "PAIEMENT"
                }));

                const formattedSessions = sessions.map((s: any) => ({
                    id: `sess-${s.id}`,
                    titre: s.formationTitre || "Session de cours",
                    name: `${s.userPrenom} ${s.userNom}`,
                    date: new Date(s.dateSession).toLocaleDateString(),
                    time: s.heure || "09h00",
                    status: "Confirmé",
                    type: "SESSION"
                }));

                // Fusion et tri par date (le plus récent en premier)
                setActivities([...formattedPayments, ...formattedSessions].sort((a, b) => b.id.localeCompare(a.id)));
                setLoading(false);
            } catch (err) {
                console.error("Erreur chargement réservations:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="loading">Chargement des activités...</div>;

    return (
        <section className="reservationAdmin">
            <div className="header-admin">
                <h2>Suivi des Activités</h2>
                <p>Paiements et Réservations de sessions</p>
            </div>

            <div className="reservationLists">
                {activities.length > 0 ? (
                    activities.map((act) => (
                        <div key={act.id} className={`activity-wrapper ${act.type.toLowerCase()}`}>
                            <span className="activity-type">{act.type}</span>
                            <ReservationCard
                                id={act.id}
                                titre={act.titre}
                                name={act.name}
                                date={act.date}
                                time={act.time}
                                room={act.type === "PAIEMENT" ? "💳" : "🏫"}
                                status={act.status}
                            />
                        </div>
                    ))
                ) : (
                    <p>Aucune activité enregistrée.</p>
                )}
            </div>
        </section>
    );
}

// export default function ReservationAdmin() {
//     // exemple reservation avec span pour temporel
//     const lstReservation = [
//         {
//             date: "Aujourd'hui",
//             reservation: [
//                 {
//                     id: "1",
//                     titre: "Cours de Cybersécurité",
//                     name: "Alex Martin",
//                     date: "07/01/2026",
//                     time: "14h00",
//                     room: "101",
//                     status: "Réservé",
//                 },
//                 {
//                     id: "1",
//                     titre: "Cours de Langue",
//                     name: "Alex Martin",
//                     date: "07/01/2026",
//                     time: "16h00",
//                     room: "105",
//                     status: "Réservé",
//                 },
//             ],
//         },
//         {
//             date: "Hier",
//             reservation: [
//                 {
//                     id: "1",
//                     titre: "Cours de développement web",
//                     name: "Alex Martin",
//                     date: "06/01/2026",
//                     time: "14h00",
//                     room: "101",
//                     status: "Annulé",
//                 },
//                 {
//                     id: "1",
//                     titre: "Cours de développement web",
//                     name: "Alex Martin",
//                     date: "06/01/2026",
//                     time: "16h00",
//                     room: "105",
//                     status: "Réservé",
//                 },
//             ],
//         },
//     ];
//     return (
//         <section className="reservationAdmin">
//             <div>
//                 <h2>Réservations</h2>
//             </div>
//             <div className="reservationLists">
//                 {lstReservation.map((reservation) => (
//                     <>
//                         <span className="date">{reservation.date}</span>
//                         {reservation.reservation.map((res) => (
//                             <ReservationCard
//                                 key={res.id}
//                                 id={res.id}
//                                 titre={res.titre}
//                                 name={res.name}
//                                 date={res.date}
//                                 time={res.time}
//                                 room={res.room}
//                                 status={res.status}
//                             />
//                         ))}
//                     </>
//                 ))}
//             </div>
//         </section>
//     );
// }


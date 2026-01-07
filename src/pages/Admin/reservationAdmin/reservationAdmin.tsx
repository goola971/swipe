import "./reservationAdmin.scss";
import ReservationCard from "../../../components/admin/ReservationCard/ReservationCard";

export default function ReservationAdmin() {
    // exemple reservation avec span pour temporel
    const lstReservation = [
        {
            date: "Aujourd'hui",
            reservation: [
                {
                    id: "1",
                    titre: "Cours de Cybersécurité",
                    name: "Alex Martin",
                    date: "07/01/2026",
                    time: "14h00",
                    room: "101",
                    status: "Réservé",
                },
                {
                    id: "1",
                    titre: "Cours de Langue",
                    name: "Alex Martin",
                    date: "07/01/2026",
                    time: "16h00",
                    room: "105",
                    status: "Réservé",
                },
            ],
        },
        {
            date: "Hier",
            reservation: [
                {
                    id: "1",
                    titre: "Cours de développement web",
                    name: "Alex Martin",
                    date: "06/01/2026",
                    time: "14h00",
                    room: "101",
                    status: "Annulé",
                },
                {
                    id: "1",
                    titre: "Cours de développement web",
                    name: "Alex Martin",
                    date: "06/01/2026",
                    time: "16h00",
                    room: "105",
                    status: "Réservé",
                },
            ],
        },
    ];
    return (
        <section className="reservationAdmin">
            <div>
                <h2>Réservations</h2>
            </div>
            <div className="reservationLists">
                {lstReservation.map((reservation) => (
                    <>
                        <span className="date">{reservation.date}</span>
                        {reservation.reservation.map((res) => (
                            <ReservationCard
                                key={res.id}
                                id={res.id}
                                titre={res.titre}
                                name={res.name}
                                date={res.date}
                                time={res.time}
                                room={res.room}
                                status={res.status}
                            />
                        ))}
                    </>
                ))}
            </div>
        </section>
    );
}

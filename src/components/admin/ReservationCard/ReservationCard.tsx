import "./ReservationCard.scss";
import { useState, type JSX } from "react";

type Props = {
    id: string;
    titre: string;
    name: string;
    date: string;
    time: string;
    room: string;
    status: string;
};

export default function ReservationCard({
    name,
    date,
    time,
    room,
    titre,
    status,
}: Props) {
    return (
        <div className="reservationListCard">
            <div>
                <h3>
                    {name} a réservé une session “{titre}”
                </h3>
                <p>
                    le {date} à {time}
                </p>
                <p>Salle {room}</p>
            </div>
            {status === "Annulé" ? (
                <button className="Annuler">
                    <img src="icon/xRed.svg" alt="" />
                    Annulation
                </button>
            ) : (
                <button className="Reservation">
                    <img src="icon/reservation.svg" alt="" />
                    Réservation
                </button>
            )}
        </div>
    );
}

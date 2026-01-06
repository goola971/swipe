import "./reservationAdmin.scss";
import AddFormation from "../../../components/admin/addformation";

export default function ReservationAdmin() {
    return (
        <section className="reservationAdmin">
            <div>
                <h2>Formation</h2>
                <button className="addFormation">Ajouter une formation</button>
            </div>
            <div className="formationsList"></div>
        </section>
    );
}

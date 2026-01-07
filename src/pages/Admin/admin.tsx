import "./admin.scss";
import { type JSX, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import FormationAdmin from "./FormationAdmin/FormationAdmin";
import Overview from "./Overview/overview";
import Users from "./userAdmin/userAdmin";
import ReservationAdmin from "./reservationAdmin/reservationAdmin";

export default function Admin(): JSX.Element {
    const [location, setLocation] = useState("overview");
    const navigate = useNavigate();
    const user = sessionStorage.getItem("user");
    if (!user) {
        navigate("/connexion", { replace: true });
        return <></>; 
    }

// Fonction de déconnexion
    const handleLogout = () => {
        sessionStorage.clear(); 
        localStorage.clear();
        navigate("/connexion", { replace: true });
        window.location.reload(); 
    };

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
                        <Link to="">
                            <img src="icon/admin/stats.svg" alt="" />
                            Statistique
                        </Link>
                    </li>
                    <li>
                        <Link to="">
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

<li className="logout-item">
    <a 
        href="#" 
        onClick={(e) => {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            handleLogout();
        }} 
        className="logout-link"
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
    >
        <img src="icon/admin/logout.svg" alt="Logout" /> 
        Déconnexion
    </a>
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

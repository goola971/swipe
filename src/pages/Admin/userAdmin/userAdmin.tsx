import "./userAdmin.scss";
import { type JSX, useEffect, useState } from "react";

export default function UserAdmin(): JSX.Element {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api-ccxi.onrender.com/api/admin/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des utilisateurs:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Chargement des utilisateurs...</div>;

    return (
        <div className="userAdmin">
            <h2>Gestion des Utilisateurs (Hors Admins)</h2>
            <table className="userTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Rôle</th>
                    </tr>
                </thead>
                <tbody>
                    {}
                    {users
                        .filter(user => user.role !== "ADMIN" && user.role !== "admin")
                        .map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.mail}</td>
                                <td>{user.role || "Utilisateur"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
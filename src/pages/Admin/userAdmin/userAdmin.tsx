import "./userAdmin.scss";
import { type JSX, useEffect, useState } from "react";

export default function UserAdmin(): JSX.Element {
    const [users, setUsers] = useState<any[]>([]);
    const [intervenants, setIntervenants] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAllData = async () => {
            try {
                // Récupération des Utilisateurs
                const resUsers = await fetch("https://api-ccxi.onrender.com/api/admin/users");
                const userData = await resUsers.json();
                setUsers(userData);

                // Récupération des Intervenants
                const resInt = await fetch("https://api-ccxi.onrender.com/api/admin/intervenants");
                const intData = await resInt.json();
                
                console.log("Données Intervenants reçues :", intData); // <--- REGARDE ICI DANS F12
                setIntervenants(Array.isArray(intData) ? intData : []);

            } catch (err) {
                console.error("Erreur de chargement :", err);
            } finally {
                setLoading(false);
            }
        };

        loadAllData();
    }, []);

    if (loading) return <div className="loading">Chargement des données...</div>;

    return (
        <div className="userAdmin">
            {/* TABLEAU DES UTILISATEURS */}
            <section className="adminSection">
                <h2>Gestion des Utilisateurs</h2>
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.filter(u => u.role !== "ADMIN").map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.mail}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* TABLEAU DES INTERVENANTS (VERSION SIMPLIFIÉE) */}
            <section className="adminSection" style={{ marginTop: '40px' }}>
                <h2>Liste des Intervenants</h2>
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Spécialité</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {intervenants.length > 0 ? (
                            intervenants.map((int) => (
                                <tr key={int.id}>
                                    <td>{int.id}</td>
                                    <td>{int.nom}</td>
                                    <td>{int.prenom}</td>
                                    <td>{int.specialite || "N/A"}</td>
                                    <td>{int.mail || int.email || "N/A"}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center', padding: '20px' }}>
                                    Aucun intervenant trouvé.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
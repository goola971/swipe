import "./userAdmin.scss";
import { type JSX, useEffect, useState } from "react";

export default function UserAdmin(): JSX.Element {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // --- ÉTATS POUR LA MODALE (AJOUTÉS POUR CORRIGER LE ROUGE) ---
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        mail: "",
        password: "",
        telephone: "",
        adressePostale: "",
        villeRegion: "",
        role: "USER"
    });

    // --- LOGIQUE ---

    const fetchUsers = () => {
        setLoading(true);
        fetch("https://api-ccxi.onrender.com/api/admin/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDelete = async (id: number) => {
        if (window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
            try {
                const response = await fetch(`https://api-ccxi.onrender.com/api/admin/users/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) fetchUsers();
            } catch (error) {
                console.error("Erreur suppression:", error);
            }
        }
    };

    const handleEdit = (user: any) => {
        setSelectedUser(user);
        setFormData({
            nom: user.nom,
            prenom: user.prenom,
            mail: user.mail,
            password: "", 
            telephone: user.telephone || "",
            adressePostale: user.adressePostale || "",
            villeRegion: user.villeRegion || "",
            role: user.role || "USER"
        });
        setShowModal(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api-ccxi.onrender.com/api/admin/users/${selectedUser.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setShowModal(false);
                fetchUsers();
                alert("Utilisateur mis à jour !");
            }
        } catch (error) {
            console.error("Erreur modification:", error);
        }
    };

    if (loading) return <div className="loading-state">Chargement des utilisateurs...</div>;

    return (
        <div className="userAdmin">
            <div className="header-section">
                <h2>Gestion des Utilisateurs</h2>
                <span className="user-count">{users.length} inscrits</span>
            </div>

            {/* MODALE DE MODIFICATION */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="user-modal">
                        <h3>Modifier l'utilisateur</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
                                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required />
                            </div>
                            
                            <input type="email" name="mail" value={formData.mail} onChange={handleChange} placeholder="Email" required />
                            <input type="text" name="villeRegion" value={formData.villeRegion} onChange={handleChange} placeholder="ville/region" required />
                            <input type="text" name="adressePostale" value={formData.adressePostale} onChange={handleChange} placeholder="adresse postale" required />

                            {/* <div className="password-wrapper">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                    placeholder="Nouveau mot de passe (optionnel)" 
                                />
                                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                                </button>
                            </div> */}

                            <div className="row">
                                <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Téléphone" />
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="save-btn">Enregistrer</button>
                                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="table-container">
                <table className="userTable">
                    <thead>
                        <tr>
                            <th>Utilisateur</th>
                            <th>Contact</th>
                            <th>Localisation</th>
                            <th>Rôle</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users
                            .filter(user => user.role !== "ADMIN" && user.role !== "admin")
                            .map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <div className="user-info">
                                            <div className="avatar">{user.prenom[0]}{user.nom[0]}</div>
                                            <div>
                                                <div className="name">{user.prenom} {user.nom}</div>
                                                <div className="id">ID: #{user.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="mail">{user.mail}</div>
                                        <div className="phone">{user.telephone}</div>
                                    </td>
                                    <td>
                                        <div className="city">{user.villeRegion}</div>
                                        <div className="address">{user.adressePostale}</div>
                                    </td>
                                    <td>
                                        <span className={`badge ${user.role?.toLowerCase() || 'user'}`}>
                                            {user.role || "Utilisateur"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-edit" onClick={() => handleEdit(user)}>
                                                <i className="bi bi-pencil">Modifier</i>
                                            </button>
                                            <button className="btn-delete" onClick={() => handleDelete(user.id)}>
                                                <i className="bi bi-trash">Supprimer</i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
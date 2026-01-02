import "./profile.scss";
import React, { type JSX, useState, useEffect } from "react";

function Profile(): JSX.Element {
    const [user, setUser] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState<string>("/img/profile.png");
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState<any>(null);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setEditForm(parsedUser);
            if (parsedUser.userpp) {
                setPreviewImage(parsedUser.userpp);
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setPreviewImage(base64String);
                // On met à jour le champ userpp dans le formulaire
                setEditForm({ ...editForm, userpp: base64String });
            };
            reader.readAsDataURL(file);
        }
    };

    const saveChanges = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/${user.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editForm),
            });

            if (response.ok) {
                const updated = await response.json();
                setUser(updated);
                sessionStorage.setItem("user", JSON.stringify(updated));
                setIsEditing(false);
                setSuccessMessage("Profil mis à jour avec succès !");
                setTimeout(() => setSuccessMessage(""), 3000);
            }
        } catch (err) {
            console.error("Erreur lors de la sauvegarde :", err);
        }
    };

    if (!user) return <p>Chargement...</p>;

    return (
        <div className="profile">
            <div className="profileHeader">
                <div className="profileHeaderContent">
                    <div className="profileAvatar">
                        <img src={previewImage} alt="Profil" />
                        <label htmlFor="upload-photo" className="add-photo-btn">+</label>
                        <input 
                            type="file" 
                            id="upload-photo" 
                            style={{ display: "none" }} 
                            accept="image/*" 
                            onChange={handleImageChange} 
                        />
                    </div>
                </div>
            </div>

            <div className="profileInfo">
                <div className="profileName">
                    <h2>{user.prenom} {user.nom}</h2>
                    {!isEditing ? (
                        <button onClick={() => setIsEditing(true)} className="modifierLink">
                            Modifier
                        </button>
                    ) : (
                        <button onClick={saveChanges} className="modifierLink save">
                            Enregistrer
                        </button>
                    )}
                </div>
                <p className="joinDate">Utilisateur Swipe</p>
                <p className="subscription">{user.mail}</p>
            </div>

            <div className="personalInfoSection">
                <div className="sectionHeader">
                    <h3>Informations personnelles</h3>
                </div>

                {successMessage && (
                    <div className="success-banner">
                        {successMessage}
                    </div>
                )}

                <div className="infoContainer">
                    <div className="infoRow">
                        <div className="infoItem">
                            <span className="label">Nom</span>
                            {!isEditing ? <span className="value">{user.nom}</span> : <input name="nom" value={editForm.nom} onChange={handleChange} />}
                        </div>
                        <div className="infoItem">
                            <span className="label">Prénom</span>
                            {!isEditing ? <span className="value">{user.prenom}</span> : <input name="prenom" value={editForm.prenom} onChange={handleChange} />}
                        </div>
                    </div>

                    <div className="infoRow">
                        <div className="infoItem">
                            <span className="label">Email</span>
                            {!isEditing ? <span className="value">{user.mail}</span> : <input name="mail" value={editForm.mail} onChange={handleChange} />}
                        </div>
                        <div className="infoItem">
                            <span className="label">Téléphone</span>
                            {!isEditing ? <span className="value">{user.telephone || "Non renseigné"}</span> : <input name="telephone" value={editForm.telephone} onChange={handleChange} />}
                        </div>
                    </div>

                    <div className="infoRow">
                        <div className="infoItem">
                            <span className="label">Date de naissance</span>
                            {!isEditing ? <span className="value">{user.dateNaissance || "Non renseignée"}</span> : <input type="date" name="dateNaissance" value={editForm.dateNaissance} onChange={handleChange} />}
                        </div>
                        <div className="infoItem">
                            <span className="label">Adresse postale</span>
                            {!isEditing ? <span className="value">{user.adressePostale || "Non renseignée"}</span> : <input name="adressePostale" value={editForm.adressePostale} onChange={handleChange} />}
                        </div>
                    </div>

                    <div className="infoRow">
                        <div className="infoItem">
                            <span className="label">Mot de passe</span>
                            {!isEditing ? <span className="value">********</span> : <input type="password" name="password" placeholder="Nouveau mot de passe" onChange={handleChange} />}
                        </div>
                        <div className="infoItem">
                            <span className="label">Rôle</span>
                            <span className="value role-text">{user.role || "Étudiant"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
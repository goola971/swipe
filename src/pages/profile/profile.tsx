import "./profile.scss";
import React, { type JSX, useState, useEffect } from "react";

function Profile(): JSX.Element {
    // 1. On récupère l'utilisateur connecté
    const [user, setUser] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState<string>("/img/profile.png");

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            // Si l'utilisateur a déjà une image en BDD, on l'utilise
            if (parsedUser.photo) setPreviewImage(parsedUser.photo);
        }
    }, []);

    // 2. Gestion de l'upload d'image
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setPreviewImage(base64String);
                // Optionnel : Envoyer ce base64String à ton API pour le sauvegarder en BDD
            };
            reader.readAsDataURL(file);
        }
    };

    if (!user) return <p>Chargement...</p>;

    return (
        <div className="profile">
            <div className="profileHeader">
                <div className="profileHeaderContent">
                    <div className="profileAvatar">
                        <img src={previewImage} alt="Photo de profil" />
                        <label htmlFor="fileInput" className="uploadLabel">
                            <input 
                                type="file" 
                                id="fileInput" 
                                hidden 
                                accept="image/*" 
                                onChange={handleImageChange} 
                            />
                            <span>📸</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="profileInfo">
                <div className="profileName">
                    {/* On utilise les vraies données ici */}
                    <h2>{user.prenom} {user.nom}</h2>
                    <a href="#" className="modifierLink">Modifier</a>
                </div>
                <p className="joinDate">Membre depuis 2025</p>
                <p className="subscription">{user.role || "Étudiant"}</p>
            </div>

            <div className="personalInfoSection">
                <div className="sectionHeader">
                    <h3>Informations personnelles</h3>
                    <a href="#" className="preferencesLink">Modifier</a>
                </div>
                <div className="infoContainer">
                    <div className="infoRow">
                        <div className="infoItem">
                            <span className="label">Nom</span>
                            <span className="value">{user.nom}</span>
                        </div>
                        <div className="infoItem">
                            <span className="label">Prénom</span>
                            <span className="value">{user.prenom}</span>
                        </div>
                    </div>
                    <div className="infoRow">
                        <div className="infoItem">
                            <span className="label">Email</span>
                            <span className="value">{user.mail}</span>
                        </div>
                        <div className="infoItem">
                            <span className="label">Téléphone</span>
                            <span className="value">{user.telephone || "Non renseigné"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
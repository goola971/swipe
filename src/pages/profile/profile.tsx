import "./profile.scss";
import { type JSX } from "react";

function Profile(): JSX.Element {
    return (
        <>
            <div className="profile">
                <div className="profileHeader">
                    <div className="profileHeaderContent">
                        <div className="profileAvatar">
                            <img src="/img/profile.png" alt="Photo de profil" />
                        </div>
                    </div>
                </div>
                <div className="profileInfo">
                    <div className="profileName">
                        <h2>Faye Carman</h2>
                        <a href="#" className="modifierLink">Modifier</a>
                    </div>
                    <p className="joinDate">A rejoint Swipe en 2025</p>
                    <p className="subscription">Aucun Abonnement</p>
                </div>

                <div className="personalInfoSection">
                    <div className="sectionHeader">
                        <h3>Informations personnelles</h3>
                        <a href="#" className="preferencesLink">Vous pouvez Modifier vos préférences</a>
                    </div>
                    <div className="infoContainer">
                        <div className="infoRow">
                            <div className="infoItem">
                                <span className="label">Nom</span>
                                <span className="value">Carman</span>
                            </div>
                            <div className="infoItem">
                                <span className="label">Prénom</span>
                                <span className="value">Faye</span>
                            </div>
                            <div className="infoItem">
                                <span className="label">Adresse postal</span>
                                <span className="value">Paris, 2 rue de pinacle</span>
                            </div>
                        </div>
                        <div className="infoRow">
                            <div className="infoItem">
                                <span className="label">Adresse mail</span>
                                <span className="value">CarmaFaya12@gmail.com</span>
                            </div>
                            <div className="infoItem">
                                <span className="label">Numéro de téléphone</span>
                                <span className="value">+ 33 06 23 24 92 82</span>
                            </div>
                            <div className="infoItem">
                                <span className="label">Date de naissance</span>
                                <span className="value">Février 25, 2006</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="securityInfoSection">
                    <div className="sectionHeader">
                        <h3>Informations de sécurité</h3>
                        <a href="#" className="preferencesLink">Vous pouvez Modifier vos préférences</a>
                    </div>
                    <div className="infoGrid">
                        <div className="infoField">
                            <label>Mot de passe actuel</label>
                            <p>••••••••••••••</p>
                        </div>
                        <div className="infoField">
                            <label>Nouveau mot de passe</label>
                            <p>••••••••••••••••••••</p>
                        </div>
                        <div className="infoField">
                            <label>Confirmer le nouveau mot de passe*</label>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

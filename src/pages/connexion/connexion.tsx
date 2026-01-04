import "./connexion.scss";
import { type JSX, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Connexion(): JSX.Element {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [credentials, setCredentials] = useState({ mail: "", password: "" });
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        try {
            const response = await fetch("http://localhost:8080/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    mail: credentials.mail,
                    password: credentials.password
                }),
            });

            if (response.ok) {
                const user = await response.json();
                sessionStorage.setItem("user", JSON.stringify(user));
                
                // Message de succès
                setMessage({ type: 'success', text: "Connexion réussie ! Redirection..." });

                // Redirection basée sur l'héritage (dtype ou role)
                setTimeout(() => {
                    if (user.role === "ADMIN" || user.dtype === "Admin") {
                        navigate("/admin");
                    } else if (user.role === "INTERVENANT" || user.dtype === "Intervenant") {
                        navigate("/profil"); 
                    } else {
                        navigate("/monSuivis");
                    }
                }, 1500);

            } else {
                const errorText = await response.text();
                setMessage({ type: 'error', text: errorText || "Mail ou mot de passe incorrect." });
            }
        } catch (err) {
            setMessage({ type: 'error', text: "Erreur de connexion au serveur." });
        }
    };

    return (
        <section className="connexion">
            <div className="connexionContainer">
                <div className="titleContainer">
                    <button onClick={() => navigate("/")} aria-label="button retour">
                        <img src="icon/arrowLeft.svg" alt="icon arrow left" />
                        Retour
                    </button>
                    <h2>Connexion</h2>
                    <p>Veuillez entrer vos informations de connexion.</p>
                </div>

                {/* Affichage des messages avec tes classes CSS pour les couleurs */}
                {message && (
                    <div className={`message ${message.type}`} style={{ 
                        padding: '1vh', 
                        borderRadius: '0.5vw',
                        textAlign: 'center',
                        fontWeight: '500',
                        backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
                        color: message.type === 'success' ? '#155724' : '#721c24',
                        border: `1px solid ${message.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                    }}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input
                            type="email"
                            name="mail"
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                        <div className="passwordContainer">
                            <input 
                                type={show ? "password" : "text"} 
                                name="password" 
                                placeholder="Mot de passe" 
                                onChange={handleChange} 
                                required 
                            />
                            <button type="button" onClick={() => setShow(!show)}>
                                <img src={show ? "icon/eye.svg" : "icon/eye-closed.svg"} alt="eye" />
                            </button>
                        </div>
                    </div>
                    <div className="buttonConnexion">
                        <button type="submit">Se connecter</button>
                        <p>Pas encore de compte ? <Link to="/inscription">S’inscrire</Link></p>
                    </div>
                </form>
            </div>
            <div className="imgConnexionContainer">
                <h1>SWIPE.</h1>
                <img src="img/connexion.png" alt="image connexion" />
            </div>
        </section>
    );
}

export default Connexion;
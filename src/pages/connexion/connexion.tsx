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
            // On envoie un objet avec les clés attendues par ton mapping Java
            body: JSON.stringify({
                mail: credentials.mail,
                password: credentials.password
            }),
        });

            if (response.ok) {
                const user = await response.json();
                // On stocke l'utilisateur pour le profil
                sessionStorage.setItem("user", JSON.stringify(user));
                
                setMessage({ type: 'success', text: "Connexion réussie ! Redirection..." });
                setTimeout(() => navigate("/profil"), 1500);
            } else {
                setMessage({ type: 'error', text: "Email ou mot de passe incorrect." });
            }
        } catch (error) {
            setMessage({ type: 'error', text: "Erreur de connexion au serveur." });
        }
    };

    return (
        <section className="connexion">
            <div className="connexionContainer">
                <div className="titleContainer">
                    <button className="retour" onClick={() => navigate("/")}>
                        <img src="/icon/arrowRight.svg" alt="icon arrow lefts" /> Retour
                    </button>
                    <div className="title">
                        <h2>Connexion</h2>
                        <p>Accédez à vos formations et suivez votre progression.</p>
                    </div>
                </div>

                {/* Affichage du message flash */}
                {message && (
                    <div className={`form-message ${message.type}`} style={{
                        padding: '10px', borderRadius: '5px', marginBottom: '15px', textAlign: 'center',
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
    name="mail" // Change "email" par "mail" pour correspondre au Java
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
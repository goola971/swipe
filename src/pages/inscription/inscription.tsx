import "./inscription.scss";
import { type JSX, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Inscription(): JSX.Element {
    const navigate = useNavigate();
    const nbPages = 2;
    const [page, setPage] = useState(1);

  
    const [formData, setFormData] = useState({
        prenom: "",
        nom: "",
        telephone: "",
        dateNaissance:"",
        adressePostale: "",
        mail: "",
        password: "",
        login: "", 
        villeRegion: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); 
    setSuccessMessage("");

    try {
        const response = await fetch("http://localhost:8080/api/inscriptions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSuccessMessage("Inscription réussie ! Redirection vers la connexion...");
            setTimeout(() => {
                navigate("/connexion");
            }, 2000); 
        } else {
            setErrorMessage("Erreur lors de l'inscription. Vérifiez vos informations.");
        }
    } catch (error) {
        setErrorMessage("Le serveur est injoignable.");
    }
};

    return (
        <section className="inscription">
            <div className="inscriptionImgContainer">
                <h1>SWIPE.</h1>
                <img src="img/inscription.png" alt="" />
            </div>

            <div className="inscriptionContainer">
                <div className="titleContainer">
                    <button
                        type="button"
                        className="retour"
                        onClick={() => {
                            if (page > 1) {
                                setPage(page - 1);
                            } else {
                                navigate("/");
                            }
                        }}
                        aria-label="Retour"
                    >
                        <img src="/icon/arrowRight.svg" alt="icon arrow left" />
                        Retour
                    </button>

                        <div className="title">
                        <h2>Créez votre compte</h2>
                        <p>
                            Accédez à vos formations, réservez vos sessions et
                            suivez votre progression depuis votre espace
                            personnel.
                        </p>
                    </div>
                </div>

                {errorMessage && (
                    <p style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>
                        {errorMessage}
                    </p>
                )}

                <form onSubmit={handleSubmit}>
                    {}
{successMessage && (
    <div className="form-feedback success" style={{
        backgroundColor: "#d4edda",
        color: "#155724",
        padding: "1vh",
        borderRadius: "0.5vw",
        marginBottom: "1vh",
        textAlign: "center",
        fontSize: "0.9vw",
        border: "1px solid #c3e6cb"
    }}>
        {successMessage}
    </div>
)}

{errorMessage && (
    <div className="form-feedback error" style={{
        backgroundColor: "#f8d7da",
        color: "#721c24",
        padding: "1vh",
        borderRadius: "0.5vw",
        marginBottom: "1vh",
        textAlign: "center",
        fontSize: "0.9vw",
        border: "1px solid #f5c6cb"
    }}>
        {errorMessage}
    </div>
)}
                    {page === 1 && (
                        <div className="inputs part1">

                                <input 
                                    type="text" 
                                    name="prenom" 
                                    placeholder="Prénom" 
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    required 
                                />

                                
                                <input 
                                    type="text" 
                                    name="nom" 
                                    placeholder="Nom" 
                                    value={formData.nom}
                                    onChange={handleChange}
                                    required 
                                />


                                <input 
                                    type="text" 
                                    name="telephone" 
                                    placeholder="Téléphone" 
                                    value={formData.telephone}
                                    onChange={handleChange}
                                />
                                <input 
                                type="date" 
                                name="dateNaissance"
                                value={formData.dateNaissance}
                                onChange={handleChange} />


                                <input 
                                    type="text" 
                                    name="adressePostale" 
                                    placeholder="Adresse" 
                                    value={formData.adressePostale}
                                    onChange={handleChange}
                                />

                        </div>
                    )}

                    {page === 2 && (
                        <div className="inputs part2">

                                <input 
                                    type="email" 
                                    name="mail" 
                                    placeholder="Email" 
                                    value={formData.mail}
                                    onChange={handleChange}
                                    required 
                                />

                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Mot de passe" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                />

                        </div>
                    )}

                    <div className="buttonInscription">
                        {page < nbPages ? (
                            <button
                                type="button"
                                onClick={() => setPage(page + 1)}
                                aria-label="Suivant"
                            >
                                Suivant
                            </button>
                        ) : (
                            <button type="submit" aria-label="Créer le compte">
                                Créer le compte
                            </button>
                        )}

                        <p>
                            Déjà un compte ?{" "}
                            <Link to="/connexion">Se connecter</Link>
                        </p>
                    </div>

                    <div className="pages">
                        {Array.from({ length: nbPages }, (_, index) => (
                            <div
                                key={index}
                                className={`page ${
                                    page === index + 1 ? "active" : ""
                                }`}
                            />
                        ))}
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Inscription;
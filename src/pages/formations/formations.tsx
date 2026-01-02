import "./formations.scss";
import { type JSX, useState, useEffect } from "react";
import ExploreCategory from "../../components/exploreCategory/exploreCategory";
import FormationCard from "../../components/formationCard/formationCard";
import type { IFormation } from "../../types";

function Formations(): JSX.Element {
<<<<<<< Updated upstream
   
    const [formations, setFormations] = useState<IFormation[]>([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("http://localhost:8080/api/formations")
        .then((res) => res.json())
        .then((data) => {
           
            const mappedFormations = data.map((f: any) => ({
                id: f.idFormation,
                
                titles: f.titre || "Sans titre", 
                
                image: f.formationImage || "img/cours/cours.png",
                description: f.description || "Aucune description",
                niveau: f.categorie || "Débutant", 
                endroit: "Centre de formation",
                salle: "Salle principale",
                date: "Prochainement",
                heureDebut: "09:00",
                heureFin: "17:00",
                voirSessionLink: `/sessions/${f.idFormation}`,
                voirDetailsLink: `/details/${f.idFormation}`
            }));
            setFormations(mappedFormations);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Erreur de connexion :", err);
            setLoading(false);
        });
}, []);

return (
    <>
        <section className="formations">
            {}
            <ExploreCategory title="Explorez nos catégories" /> 

            <article className="toutesNosFormations">
                    <div className="entete">
                        <h2>Toutes nos formations</h2>
                    </div>

                    <div className="cards">
                        {loading ? (
                            <p>Chargement des formations...</p>
                        ) : formations.length > 0 ? (
                            formations.map((f, index) => (
                                <FormationCard
                                    key={f.id || index}
                                    image={f.image || "img/cours/cours.png"}
                                    titles={f.titles}
                                    niveau={f.niveau}
                                    description={f.description}
                                    endroit={f.endroit}
                                    salle={f.salle}
                                    date={f.date}
                                    heureDebut={f.heureDebut}
                                    heureFin={f.heureFin}
                                    voirSessionLink={f.voirSessionLink}
                                    voirDetailsLink={f.voirDetailsLink}
                                />
                            ))
                        ) : (
                            <p className="aucuneFormation">Aucune formation disponible pour le moment.</p>
                        )}
                    </div>
                </article>

                {}
                <section className="certification">
                    {}
                </section>
            </section>
        </>
    );
=======
	const formations = [
		{
			image: "img/cours/cours.png",
			titles: "Cybersécurité – Fondamentaux",
			niveau: "Débutant",
			description:
				"Bases de la sécurité informatique et menaces courantes.",
			endroit: "Centre Swipe",
			salle: "Salle A",
			date: "Samedi 14 Décembre 2024",
			heureDebut: "15h00",
			heureFin: "17h00",
			voirSessionLink: "/sessions/cyber-fondamentaux",
			voirDetailsLink: "/formations/cyber-fondamentaux",
		},
		{
			image: "img/cours/cours.png",
			titles: "Développement Web Moderne",
			niveau: "Intermédiaire",
			description: "HTML, CSS, JavaScript moderne et React.",
			endroit: "Centre Swipe",
			salle: "Salle B",
			date: "Mercredi 18 Décembre 2024",
			heureDebut: "10h00",
			heureFin: "13h00",
			voirSessionLink: "/sessions/web-moderne",
			voirDetailsLink: "/formations/web-moderne",
		},
		{
			image: "img/cours/cours.png",
			titles: "UI / UX Design",
			niveau: "Débutant",
			description: "Ergonomie, wireframes et prototypage sur Figma.",
			endroit: "Centre Swipe",
			salle: "Salle C",
			date: "Vendredi 20 Décembre 2024",
			heureDebut: "14h00",
			heureFin: "17h00",
			voirSessionLink: "/sessions/ui-ux",
			voirDetailsLink: "/formations/ui-ux",
		},
		{
			image: "img/cours/cours.png",
			titles: "Introduction à la Data Analyse",
			niveau: "Intermédiaire",
			description: "Analyse de données et visualisation de base.",
			endroit: "Centre Swipe",
			salle: "Salle D",
			date: "Lundi 6 Janvier 2025",
			heureDebut: "09h00",
			heureFin: "12h00",
			voirSessionLink: "/sessions/data-intro",
			voirDetailsLink: "/formations/data-intro",
		},
		{
			image: "img/cours/cours.png",
			titles: "Bases du DevOps",
			niveau: "Avancé",
			description: "CI/CD, Docker et automatisation.",
			endroit: "Centre Swipe",
			salle: "Salle A",
			date: "Jeudi 9 Janvier 2025",
			heureDebut: "13h30",
			heureFin: "17h30",
			voirSessionLink: "/sessions/devops",
			voirDetailsLink: "/formations/devops",
		},
		{
			image: "img/cours/cours.png",
			titles: "Sécurité Réseau",
			niveau: "Intermédiaire",
			description: "Pare-feu, VPN et segmentation réseau.",
			endroit: "Centre Swipe",
			salle: "Salle B",
			date: "Samedi 11 Janvier 2025",
			heureDebut: "09h00",
			heureFin: "12h00",
			voirSessionLink: "/sessions/securite-reseau",
			voirDetailsLink: "/formations/securite-reseau",
		},
		{
			image: "img/cours/cours.png",
			titles: "Programmation Python",
			niveau: "Débutant",
			description: "Syntaxe, logique et scripts simples.",
			endroit: "Centre Swipe",
			salle: "Salle C",
			date: "Lundi 13 Janvier 2025",
			heureDebut: "14h00",
			heureFin: "17h00",
			voirSessionLink: "/sessions/python",
			voirDetailsLink: "/formations/python",
		},
		{
			image: "img/cours/cours.png",
			titles: "Bases de Linux",
			niveau: "Débutant",
			description: "Commandes, système de fichiers et permissions.",
			endroit: "Centre Swipe",
			salle: "Salle D",
			date: "Mercredi 15 Janvier 2025",
			heureDebut: "10h00",
			heureFin: "13h00",
			voirSessionLink: "/sessions/linux",
			voirDetailsLink: "/formations/linux",
		},
		{
			image: "img/cours/cours.png",
			titles: "Gestion de Projet Agile",
			niveau: "Intermédiaire",
			description: "Scrum, Kanban et organisation d’équipe.",
			endroit: "Centre Swipe",
			salle: "Salle A",
			date: "Vendredi 17 Janvier 2025",
			heureDebut: "15h00",
			heureFin: "18h00",
			voirSessionLink: "/sessions/agile",
			voirDetailsLink: "/formations/agile",
		},
		{
			image: "img/cours/cours.png",
			titles: "Introduction au Cloud",
			niveau: "Débutant",
			description: "Concepts cloud et services principaux.",
			endroit: "Centre Swipe",
			salle: "Salle B",
			date: "Samedi 18 Janvier 2025",
			heureDebut: "09h30",
			heureFin: "12h30",
			voirSessionLink: "/sessions/cloud",
			voirDetailsLink: "/formations/cloud",
		},
		{
			image: "img/cours/cours.png",
			titles: "Sécurité des Applications Web",
			niveau: "Avancé",
			description: "OWASP, failles courantes et protections.",
			endroit: "Centre Swipe",
			salle: "Salle C",
			date: "Lundi 20 Janvier 2025",
			heureDebut: "14h00",
			heureFin: "18h00",
			voirSessionLink: "/sessions/securite-web",
			voirDetailsLink: "/formations/securite-web",
		},
	];

	const [searchParams] = useSearchParams();
	const query = searchParams.get("search")?.toLowerCase() ?? "";

	const formationsFiltrees = query
		? formations.filter(
				(f) =>
					f.titles.toLowerCase().includes(query) ||
					f.description.toLowerCase().includes(query) ||
					f.niveau.toLowerCase().includes(query)
		  )
		: formations;

	const CARDS_PAR_PAGE = 4;
	const [page, setPage] = useState(1);

	// const totalPages = Math.ceil(formations.length / CARDS_PAR_PAGE);
	const totalPages = Math.ceil(formationsFiltrees.length / CARDS_PAR_PAGE);

	const start = (page - 1) * CARDS_PAR_PAGE;
	const end = start + CARDS_PAR_PAGE;

	// const formationsVisibles = formations.slice(start, end);
	const formationsVisibles = formationsFiltrees.slice(start, end);

	useEffect(() => {
		if (!query) return;

		const el = document.getElementById("Formations");
		if (el) {
			el.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}, [query]);

	return (
		<>
			<section className="formations">
				{/* <h2>Cours recommandé</h2> */}
				<article className="coursRecommande">
					<h2>Cours recommandé</h2>
					<div className="cards">
						<FormationCard
							image="img/cours/cours.png"
							titles="Cours de Cybersécurité"
							niveau="Niveau Débutant"
							description="
                    Découvrez les bases de la sécurité informatique :
                    attaques courantes, bonnes pratiques, premiers
                    réflexes de défense. Un cours clair, accessible et
                    orienté pratique."
							endroit="Centre Swipe"
							salle="Salle A"
							date="Samedi 14 Décembre 2024"
							heureDebut="15h00"
							heureFin="17h00"
							voirSessionLink=""
							voirDetailsLink=""
						/>
						<FormationCard
							image="img/cours/cours.png"
							titles="Cours de Cybersécurité"
							niveau="Niveau Débutant"
							description="
                    Découvrez les bases de la sécurité informatique :
                    attaques courantes, bonnes pratiques, premiers
                    réflexes de défense. Un cours clair, accessible et
                    orienté pratique."
							endroit="Centre Swipe"
							salle="Salle A"
							date="Samedi 14 Décembre 2024"
							heureDebut="15h00"
							heureFin="17h00"
							voirSessionLink=""
							voirDetailsLink=""
						/>
					</div>
				</article>
				<ExploreCategory title="Dans quel domaine souhaitez-vous vous former ?" />
				<article className="toutesNosFormations" id="Formations">
					<div className="entete">
						<h2>Toutes nos formations</h2>
						{/* <button className="filter">
                        <img src="" alt="" />
                        Trier par...
                    </button> */}
						<Button
							texte="Trier par..."
							variante="primary"
							img="icon/trier.svg"
							onclick=""
							// type="button"
							// className="filter"
						/>
					</div>
					<div className="cards">
						{/* {formationsVisibles.map((formation, index) => (
                            <FormationCard key={index} {...formation} />
                        ))} */}
						{/* formation ou aucune formation trouvée */}
						{formationsVisibles.length > 0 ? (
							formationsVisibles.map((formation, index) => (
								<FormationCard key={index} {...formation} />
							))
						) : (
							<p className="aucuneFormation">
								Aucune formation trouvée pour "{query}"
							</p>
						)}
					</div>
					<div className="pagination">
						<button
							disabled={page === 1}
							onClick={() => setPage(page - 1)}
							className={"prev" + (page === 1 ? " disabled" : "")}
							aria-label="icon chevron left"
						>
							<img
								src="icon/chevronRight.svg"
								alt="icon chevron"
							/>
						</button>

						<div className="numbers">
							{Array.from({ length: totalPages }, (_, i) => (
								<button
									key={i}
									className={page === i + 1 ? "active" : ""}
									onClick={() => setPage(i + 1)}
									aria-label={`Page ${i + 1}`}
								>
									{i + 1}
								</button>
							))}
						</div>

						<button
							disabled={page === totalPages}
							onClick={() => setPage(page + 1)}
							className={
								"next" +
								(page === totalPages ? " disabled" : "")
							}
							aria-label="icon chevron right"
						>
							<img
								src="icon/chevronRight.svg"
								alt="icon chevron"
							/>
						</button>
					</div>
				</article>
			</section>
			<section className="obtentionCertif">
				<article>
					<img
						src="img/cours/certif.png"
						alt="obtention de la certif"
					/>
					<div className="texte">
						<div>
							<h3>Obtention de la certification</h3>
							<p>
								À l’issue de votre cours, une vérification
								automatique de <br /> votre présence et de votre
								participation est effectuée. <br /> Une fois
								cette étape validée, vous recevez un e-mail{" "}
								<br />
								personnalisé confirmant l’obtention de votre{" "}
								<br />
								certification.
							</p>
						</div>
						<p>
							La procédure est simple, fluide et entièrement{" "}
							<br />
							automatisée. <br /> Vous terminez votre cours, nous
							nous <br /> occupons du reste.
						</p>
					</div>
					<div className="certifContenu">
						<button aria-label="Automatique">Automatique</button>
						<h3>Que contient-il ?</h3>
						<p>
							Votre certificat numérique, les informations du
							cours, la date de validation et un lien sécurisé
							pour le télécharger.
						</p>
					</div>
				</article>
			</section>
		</>
	);
>>>>>>> Stashed changes
}

export default Formations;
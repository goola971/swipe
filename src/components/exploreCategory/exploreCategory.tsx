import "./exploreCategory.scss";
import { type JSX } from "react";

/**
 * Composant ExploreCategory
 * @param {string} title - Le titre de la category
 */

function ExploreCategory({ title }: { title: string }): JSX.Element {
    const iconExplore: string = "icon/explore/";
    const lstExploreCategory = [
        {
            img: iconExplore + "reseaux.svg",
            title: "Réseaux & Télécoms",
        },
        {
            img: iconExplore + "cyber.svg",
            title: "Cybersécurité",
        },
        {
            img: iconExplore + "backend.svg",
            title: "Développement Backend",
        },
        {
            img: iconExplore + "pcBureau.svg",
            title: "Informatique",
        },
        {
            img: iconExplore + "design.svg",
            title: "Design",
        },
        {
            img: iconExplore + "automatisation.svg",
            title: "Automatisation",
        },
        {
            img: iconExplore + "pcPortable.svg",
            title: "Bureautique",
        },
        {
            img: iconExplore + "augmentation.svg",
            title: "Productivité",
        },
        {
            img: iconExplore + "frontEnd.svg",
            title: "Front-end",
        },
        {
            img: iconExplore + "reseaux.svg",
            title: "Administration Système",
        },
        {
            img: iconExplore + "ia.svg",
            title: "Intelligence Artificielle",
        },
    ];
    return (
        <article className="exploreCategory">
            <h3>{title}</h3>
            <div className="category">
                {lstExploreCategory.map((item, index) => (
                    <button key={index}>
                        <img src={item.img} alt={item.title} />
                        {item.title}
                    </button>
                ))}
            </div>
        </article>
    );
}

export default ExploreCategory;

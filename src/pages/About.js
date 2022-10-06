import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  const fiabilityStr =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const respectStr =
    " La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

  const serviceStr =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const securityStr =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <main>
      <Navigation />
      <Banner />
      <div className="about__collapses max__width">
        <Collapse
          header="Fiabilité"
          content={fiabilityStr}
          addClass={"about"}
          addId="1"
        />
        <Collapse
          header="Respect"
          content={respectStr}
          addClass={"about"}
          addId="2"
        />
        <Collapse
          header="Service"
          content={serviceStr}
          addClass={"about"}
          addId="3"
        />
        <Collapse
          header="Responsabilité"
          content={securityStr}
          addClass={"about"}
          addId="4"
        />
      </div>
      <Footer />
    </main>
  );
};

export default About;

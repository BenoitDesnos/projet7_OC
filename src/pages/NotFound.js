import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";

const NotFound = () => {
  return (
    <main className="notfound">
      <Navigation />
      <h1 className="notfound__title">404</h1>
      <p className="notfound__paragraphe size2">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound__link sizep">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default NotFound;

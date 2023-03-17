import React from "react";
import "../card/Card";
import Card from "../card/Card";
import Professeur from "./Professeur";

import "./ListeProfesseurs.css";

function ListeProfesseurs(props) {
  if (props.professeurs.length === 0) {
    return (
      <div className="professeurs-list">
        <Card>
          <h1>Aucun Prof pour l'instant</h1>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="professeurs-list">
        {props.professeurs.map((professeur) => (
          <Professeur key={professeur.nom} professeur={professeur} />
        ))}
      </ul>
    );
  }
}

export default ListeProfesseurs;

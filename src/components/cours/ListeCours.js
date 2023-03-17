import React from "react";
import Card from "../card/Card";
import Cours from "./Cours";

import "./ListeCours.css";

function ListeCours(props) {
  if (props.cours.length === 0) {
    return (
      <div className="cours-list aucun">
        <Card>
          <h1>Aucun Cours pour l'instant</h1>
        </Card>
      </div>
    );
  } else {
    return (
      <ul className="cours-list">
        {props.cours.map((cours) => (
          <Cours key={cours.titre} cours={cours} />
        ))}
      </ul>
    );
  }
}

export default ListeCours;

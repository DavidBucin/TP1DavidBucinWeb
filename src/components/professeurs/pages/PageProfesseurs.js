import React from "react";
import ListeProfesseurs from "../ListeProfesseurs";
import FormulaireProf from "../FormulaireProf";
import { useState } from "react";

function PageProfesseurs(props) {
  let [professeurs, setProfesseurs] = useState(props.listProf);

  const saveProfesseurHandler = (enteredProfesseurData) => {
    let profData = {
      ...enteredProfesseurData,
    };

    addProfesseur(profData);

    console.log(professeurs);
  };

  const addProfesseur = (professeurs) => {
    props.addProf([...props.listProf, professeurs]);
    setProfesseurs([...props.listProf, professeurs]);
  };

  return (
    <div>
      <ListeProfesseurs professeurs={professeurs} />
      <FormulaireProf onSaveProfesseur={saveProfesseurHandler} />
    </div>
  );
}

export default PageProfesseurs;

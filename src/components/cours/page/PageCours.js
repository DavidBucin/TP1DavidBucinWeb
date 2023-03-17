import React, { useRef, useState } from "react";
import FormulaireCours from "../FormulaireCours";
import ListeCours from "../ListeCours";
import "./PageCours.css";

function PageCours(props) {
  let [cours, setCours] = useState(props.listCours);
  let [session, setSession] = useState("Hiver 2023");
  const sessionRef = useRef("Hiver 2023");
  let [prof, setProf] = useState(props.listProf)

  let [coursDeLaSession, setCoursDeLaSession] = useState(
    cours.filter((cours) => cours.session === session)
  );

  const saveCoursHandler = (enteredCoursData) => {
    let coursData = {
      ...enteredCoursData,
    };

    
    addUnCours(coursData);

    setCoursDeLaSession([
      ...cours.filter((cours) => cours.session === session),
      coursData,
    ]);
    console.log(coursDeLaSession);
  };

  const addProf = (enteredProfData) => {
    let profData = {
      ...enteredProfData
    };

    props.addProf([...props.listProf, profData]);
    
  }

  const addUnCours = (cours) => {
    props.addCours([...props.listCours, cours]);
    setCours([...props.listCours, cours]);
  };

  const comboBoxHandler = (event) => {
    console.log(typeof sessionRef.current.value);
    console.log(sessionRef.current.value);
    setSession(sessionRef.current.value);
    setCoursDeLaSession(
      cours.filter((cours) => cours.session === sessionRef.current.value)
    );
    console.log(coursDeLaSession);
  };

  return (
    <div>
      <div className="cours-session">
        <label>Choisir la session : </label>
        <select
          ref={sessionRef}
          name="session"
          id="session"
          onChange={comboBoxHandler}
          value={sessionRef.current.value}
        >
          <option value="Hiver 2023">Hiver 2023</option>
          <option value="Automne 2022">Automne 2022</option>
          <option value="Hiver 2022">Hiver 2022</option>
          <option value="Automne 2021">Automne 2021</option>
        </select>
      </div>
      <ListeCours cours={coursDeLaSession} session={sessionRef.current.value} />
      <FormulaireCours
        saison={session}
        onSaveCours={saveCoursHandler}
        listProf={props.listProf}
        addProf={props.addProf}
      />
    </div>
  );
}

export default PageCours;

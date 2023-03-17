import React, { useRef } from "react";

import "./FormualaireCours.css";

function FormulaireCours(props) {
  const titreCoursRef = useRef(null);
  const disciplineRef = useRef(null);
  const maxEleveRef = useRef(null);
  const dateDebutRef = useRef(null);
  const dateFinRef = useRef(null);
  const comboBoxRef = useRef(null);
  const checkBoxRef = useRef(null);
  const saisonAnnee = props.saison.split(" ");
  const inputNomProf = useRef(null);
  const inputPrenomProf = useRef(null);
  let nomComplet;

  function validateIfOnlyLetters(string) {
    if (!string) {
      return false;
    }
    
    // Check if string has only letters, spaces, and hyphens
    if (/^[a-zA-Z\s-]+$/.test(string)) {
      return true;
    } else {
      return false;
    }
  }

  function isDateHigher(date1, date2) {
    
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    
    if (d1 > d2) {
      return true;
    } else {
      return false;
    }
  }

  const getNomCompletProf = (listProf) => {
    const fullNames = [];

    for (let i = 0; i < props.listProf.length; i++) {
      const fullName = `${props.listProf[i].nom} ${props.listProf[i].prenom}`;
      fullNames.push(fullName);
    }

    return fullNames;
  };

  

  const getNomProfChoisie = () => {
    if (checkBoxRef.current.checked) {
      if (validateIfOnlyLetters(inputNomProf.current.value) && validateIfOnlyLetters(inputPrenomProf.current.value)) {
        nomComplet =
        inputNomProf.current.value + " " + inputPrenomProf.current.value;
      }
      
    } else {
      nomComplet = nomComplet = comboBoxRef.current.value;
    }
    return nomComplet;
  };

  const handleOptionChange = (event) => {
    if (checkBoxRef.current.checked) {
      inputNomProf.current.disabled = false;
      inputPrenomProf.current.disabled = false;
      comboBoxRef.current.disabled = true;
    } else {
      inputNomProf.current.disabled = true;
      inputPrenomProf.current.disabled = true;
      comboBoxRef.current.disabled = false;
    }
  };

  const buttonSaveClick = (event) => {
    try {
      const dateDebut = new Date(dateDebutRef.current.value);
    const dateDebutP = new Date(dateDebut).toISOString().slice(0, 10);
    const dateFin = new Date(dateFinRef.current.value);
    const dateFinP = new Date(dateFin).toISOString().slice(0, 10);
    getNomProfChoisie();
    console.log(nomComplet);
    if (
      validateIfOnlyLetters(titreCoursRef.current.value) &&
      validateIfOnlyLetters(disciplineRef.current.value) &&
      maxEleveRef.current.value > 0 &&
      maxEleveRef.current.value <= 30 &&
      dateDebutRef.current.value !== "" &&
      dateFinRef.current.value !== "" &&
      validateIfOnlyLetters(nomComplet) &&
      !isDateHigher(dateDebut, dateFin)
    ) {


      const coursData = {
        session: saisonAnnee[0] + " " + saisonAnnee[1],
        titre: titreCoursRef.current.value,
        discipline: disciplineRef.current.value,
        nmbMaxEleve: maxEleveRef.current.value,
        dateDebut: dateDebutP,
        dateFin: dateFinP,
      };

      if (checkBoxRef.current.checked){
        const nouveauProf = {
          nom: inputNomProf.current.value,
          prenom: inputPrenomProf.current.value,
          image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png",
          listeCours: [
          ],
          dateEmbauche : dateDebutP
      }

        props.addProf([...props.listProf, nouveauProf])
      }

      props.onSaveCours(coursData);
    } else if (
      !validateIfOnlyLetters(titreCoursRef.current.value) ||
      !validateIfOnlyLetters(disciplineRef.current.value)
    ) {
      alert("Le titre et la discipline ne peut contenir que des lettres !!");
    } else if (
      !(maxEleveRef.current.value > 0 && maxEleveRef.current.value <= 30)
    ) {
      alert("Le nombre d'élève maximum doit être entre 1 et 30 !");
    } else if (!validateIfOnlyLetters(nomComplet)) {
      alert("Mettre le nom du prof qui va enseigner !");
    } else if (isDateHigher(dateDebut, dateFin)) {
      alert("La date de début doit être plus petit que la date de fin !!");
    }

    console.log(validateIfOnlyLetters(nomComplet))
    } catch(e){
      alert("Veuillez bien remplir le formulaire !")
      console.log(e)
    }
    
  };

  return (
    <div className="formulaire-cours-item">
      <h2>Formulaire pour crée un Cours dans la session {props.saison}</h2>
      <p>Le titre du cours :</p>
      <input className="input-titre" ref={titreCoursRef} type="text" />
      <p>La discipline :</p>
      <input ref={disciplineRef} className="input-discipline" type="text" />
      <p>Le nombre d'élève maximum :</p>
      <input type="number" min={1} max={30} ref={maxEleveRef} />
      <p>La date de début du cours :</p>
      <input
        type="date"
        min={
          saisonAnnee[0] === "Hiver"
            ? saisonAnnee[1] + "-01-01"
            : saisonAnnee[1] + "-09-04"
        }
        max={
          saisonAnnee[0] === "Hiver"
            ? saisonAnnee[1] + "-06-06"
            : saisonAnnee[1] + "-12-15"
        }
        ref={dateDebutRef}
        
      />
      <p>La date de fin du cours :</p>
      <input type="date" ref={dateFinRef} /> <br /> <br />
      <p>Choisir le prof qui va enseigner : </p>
      <div className="choix-professeur">
        <label>
          <input
            type="checkBox"
            value=""
            onChange={handleOptionChange}
            ref={checkBoxRef}
          />
          Crée un prof
        </label>
        <br />
        <select ref={comboBoxRef}>
          {getNomCompletProf(props.listProf).map((nomComplet) => {
            return <option>{nomComplet}</option>;
          })}
        </select>
        <br />
        <label>Nom du professeur :</label>
        <input
          className="input-profNom"
          ref={inputNomProf}
          type="text"
          disabled={true}
        />
        <label>Prenom du professeur :</label>
        <input
          className="input-profPrenom"
          ref={inputPrenomProf}
          type="text"
          disabled={true}
        />
      </div>
      <br /> <br />
      <button type="button" onClick={buttonSaveClick}>
        Sauvegarder les infos
      </button>
    </div>
  );
}

export default FormulaireCours;

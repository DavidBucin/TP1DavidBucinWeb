import React, { useRef, useState } from "react";

import "./FormulaireProf.css";
function FormulaireProf(props) {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const nomRef = useRef(null);
  const prenomRef = useRef(null);
  const dateRef = useRef(null);
  const photoRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  function validateIfOnlyLetters(string) {
    return /^[a-zA-Z\s-]+$/.test(string);
  }

  const buttonSaveClick = (event) => {
    const dateEmbauche = new Date(dateRef.current.value);
    const dateEmbaucheP =
      dateEmbauche.getDate() +
      1 +
      "-" +
      parseInt(dateEmbauche.getMonth() + 1) +
      "-" +
      dateEmbauche.getFullYear();

    if (
      validateIfOnlyLetters(nomRef.current.value) &&
      validateIfOnlyLetters(prenomRef.current.value) &&
      dateRef.current.value !== "" &&
      photoRef.current.value !== ""
    ) {
      const professeurData = {
        nom: nomRef.current.value,
        prenom: prenomRef.current.value,
        dateEmbauche: dateEmbaucheP,
        listeCours: [],
        image: imageUrl,
      };

      props.onSaveProfesseur(professeurData);
    } else if (
      !validateIfOnlyLetters(nomRef.current.value) ||
      !validateIfOnlyLetters(prenomRef.current.value)
    ) {
      alert("Le nom et le prénom peut contenir que des lettres !!");
    } else if (dateRef.current.value === "") {
      alert("Vous devez mettre une date d'embauche !");
    } else if (photoRef.current.value === "") {
      alert("Vous devez mettre une photo !!");
    }
  };

  return (
    <div className="formulaire-item">
      <h2>Formulaire pour Embauche</h2>
      <p>Votre nom :</p>
      <input className="input-name" ref={nomRef} type="text" />
      <p>Votre prénom :</p>
      <input ref={prenomRef} className="input-prenom" type="text" />
      <p>La date d'embauche :</p>
      <input type="date" ref={dateRef} />
      <p>Votre photo :</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={photoRef}
      />{" "}
      <br /> <br />
      <button type="button" onClick={buttonSaveClick}>
        Sauvegarder les infos
      </button>
    </div>
  );
}

export default FormulaireProf;

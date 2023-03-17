import React from "react";

import "./CoursDetails.css"
function CoursDetails(props) {

    function getListEleve(listProf) {
        const listEleve = listProf.listEleve

        if (listEleve.length === 0) {
            return ("Aucun élève pour ce cours")
        } else {
            return listEleve
        }


    }    


    return(
        <div className="cours-detail">
            <h1>{"Cours : "}</h1>
            <h1 className="info">{props.titre}</h1>
            <h2>{"Le prof qui donne la matière : " }</h2>
            <h2 className="info">{props.listProf[0].professeur}</h2>
            <h3>Liste des élèves :</h3>
            <div className="info">
                
                {props.listProf[0].listEleve.map((eleve) => {
                    return(
                    <div>
                        <p>{"nom : "+eleve.nom}</p>
                        <p>{"prenom :"+eleve.prenom}</p>
                        <p>{"id : "+eleve.id}</p>
                        <br />
                    </div>
                    )
                    
                })}
            </div>
        </div>
        
    )
}

export default CoursDetails;
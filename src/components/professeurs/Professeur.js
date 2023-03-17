import React from "react";
import Card from "../card/Card"
import Photo from "./Photo"
import "./Professeur.css"

function Professeur(props) {
    const listeCours = props.professeur.listeCours
    let listeCoursText = "";
    if (listeCours.length !== 0){
        for (var cours of listeCours) {
            listeCoursText += cours;
    
            if (cours !== listeCours[listeCours.length - 1])
            listeCoursText += ", "
        }
    } 
    

   


    return (
        
            <li className="professeur-item">
                <Card className="professeur-item__content">                
                    <div className="professeur-item__photo">
                        <Photo image={props.professeur.image} alt={props.professeur.nom} />
                    </div>
                    <div className="professeur-item__info">
                        <h2>{props.professeur.nom + ", " + props.professeur.prenom}</h2>
                        <h3>{listeCoursText}</h3>

                    </div>
                </Card>



        </li>
       
        
    )
}

export default Professeur;
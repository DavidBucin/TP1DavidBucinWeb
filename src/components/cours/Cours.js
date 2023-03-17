import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import "./Cours.css"

function Cours(props) {


    return(
        <li className="cours-item">
            <Card className="cours-item__content">
                <Link to={props.cours.titre}>
                    <div className="cours-item__info">
                        <h1>Cours :</h1>
                        <h2 className="cours-item__titre">{props.cours.titre}</h2>
                        <h3>{"Date début du cours : "+ props.cours.dateDebut}</h3>
                        <h3>{"Date fin du cours : "+props.cours.dateFin}</h3>
                    </div>
                </Link>
                
                
            </Card>

        </li>
    )
}

export default Cours;
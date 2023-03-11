import React from "react";

import "./PageAccueil.css"

function PageAccueil() {


    return(
        <div>
            <div className="page-accueil">
                <img 
                    src="https://www.cmontmorency.qc.ca/wp-content/uploads/2018/03/Logomo_1400.png" 
                    alt="Logo Cegep" 
                    width={800} height={100}>
                </img>
                
            </div>
           <h1>TP1 - David Bucin</h1>
            <div className="explication-general">
                <h2>Application Web</h2>
                <p>Permet de s'inscrire et de gérer des cours du collège</p>
            </div>

        </div>
    );
}

export default PageAccueil;